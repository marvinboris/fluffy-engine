import { capitalize } from "lodash";
import React, { Fragment, useState } from "react";
import { FormGroup, Label } from "reactstrap";

import Input from "../../../../components/UI/Input";

import { htmlEntities } from "../../../../shared/utility";

const recursiveDeepness = (paramItem, paramName, paramId, paramValue, paramDeepness, paramPrepends = [], paramAppends = []) => Object.keys(paramItem).map(item => {
    const mainItem = paramItem[item];
    const mainName = `${paramName}[${item}]`;
    const mainId = `${paramId}-${item}`;
    const mainValue = paramValue[item];
    const mainDeepness = paramDeepness.concat(item);

    let prepend;
    const findPrepend = paramPrepends.find(el => (new RegExp(el.regex.replace(/\[/g, '\\[').replace(/\]/g, '\\]'))).test(mainName));
    prepend = !findPrepend ? null : findPrepend.action(mainItem);

    let append;
    const findAppend = paramAppends.find(el => (new RegExp(el.regex.replace(/\[/g, '\\[').replace(/\]/g, '\\]'))).test(mainName));
    append = !findAppend ? null : findAppend.action(mainItem);

    return typeof mainItem === 'string' ? <Fragment key={Math.random() + mainName}>
        {prepend}
        <FormGroup className="col-md-6 col-lg-4">
            <Label className="text-small text-500 text-truncate w-100">{htmlEntities(mainItem)}</Label>
            <Input key={`${Math.random() + mainName}-input`} type="textarea" name={mainName} id={mainId} placeholder={htmlEntities(mainItem)} defaultValue={mainValue} inputClassName={`scrollbar-${window.APP_PRIMARY_COLOR}`} />
        </FormGroup>
        {append}
    </Fragment> : recursiveDeepness(mainItem, mainName, mainId, mainValue, mainDeepness, paramPrepends, paramAppends);
});

export const LanguageWithPages = ({ cmsExample, cmsValue, language, part }) => {
    const [activeSection, setActiveSection] = useState(`${language.abbr}-${Object.keys(cmsExample).sort()[0]}`);

    const sectionsOptions = Object.keys(cmsValue).map(key => {
        let name = capitalize(key.split('_').join(' '));
        if (Object.keys(cmsExample.pages).find(k => k === key)) name = `Page - ${name}`;

        return { key, name };
    }).sort((a, b) => a.name.localeCompare(b.name)).map(({ key, name }) => {
        const id = `${language.abbr}-${key}`;

        return <option key={id} value={id}>{name}</option>;
    });

    const prefix = `${language.abbr}[${part}]`;
    const prefixId = `${language.abbr}-${part}`;

    const resourceDeepness = (resource, paramPrepends = [], paramAppends = []) => {
        const resourceItem = cmsExample[resource];
        const resourceName = `${prefix}[${resource}]`;
        const resourceId = `${prefixId}-${resource}`;
        const resourceValue = cmsValue[resource];
        const resourceDeepness = [resource];
        return recursiveDeepness(resourceItem, resourceName, resourceId, resourceValue, resourceDeepness, paramPrepends, paramAppends);
    };

    const nonPagesKeys = Object.keys(cmsExample).filter(key => key !== 'pages');
    const nonPagesContent = nonPagesKeys.map(item => <div key={`${Math.random()}${prefix}[${item}]`} className={`row pt-4${`${language.abbr}-${item}` === activeSection ? "" : " d-none"}`}>
        {resourceDeepness(item)}
    </div>);

    const pagesResourceDeepness = (resource, paramPrepends = [], paramAppends = []) => {
        const resourceItem = cmsExample.pages[resource];
        const resourceName = `${prefix}[pages][${resource}]`;
        const resourceId = `${prefixId}-pages-${resource}`;
        const resourceValue = cmsValue[resource];
        const resourceDeepness = [resource];
        return recursiveDeepness(resourceItem, resourceName, resourceId, resourceValue, resourceDeepness, paramPrepends, paramAppends);
    };

    const pagesKeys = Object.keys(cmsExample.pages);
    const pagesContent = pagesKeys.map(item => <div key={`${Math.random()}${prefix}[pages][${item}]`} className={`row pt-4${`${language.abbr}-${item}` === activeSection ? "" : " d-none"}`}>
        {pagesResourceDeepness(item)}
    </div>);

    return <Fragment key={`Language-${language.abbr}`}>
        <div className='row'>
            <div className="col-md-4">
                <Input type="select" name="section" label={'Section'} onChange={e => setActiveSection(e.target.value)} value={activeSection} validation={null}>
                    {sectionsOptions}
                </Input>
            </div>
        </div>

        <hr />

        <div>
            {nonPagesContent}
            {pagesContent}
        </div>
    </Fragment>;
};