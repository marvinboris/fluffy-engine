import React, { useState } from 'react';
import { FormGroup, Input as BSInput, InputGroup, InputGroupText, InputGroupAddon, CustomInput, Label } from 'reactstrap';

import WithTooltip from '../WithTooltip/WithTooltip';

import { checkValidity } from '../../../shared/utility';

import './Input.scss';

const Input = ({ id, onChange, onClick, cms, dimensions = '1by1', size = '', className = '', inputClassName = '', name, type = 'text', required, readonly, disabled, placeholder, label, value, defaultValue, validation = {}, children, bonus, icon, addon, max, min, append }) => {
    const [touched, setTouched] = useState(false);

    const inputChangedHandler = e => {
        setTouched(true);
        if (onChange) onChange(e);
    }

    const data = {
        name, type, required, disabled, min, max, defaultValue, value, placeholder,
        onChange: defaultValue ? undefined : inputChangedHandler,
        id: id ? id : name,
        readOnly: readonly,
        className: inputClassName,
    };

    if (validation) {
        if (required) validation.required = true;

        data.valid = touched && !!value && checkValidity(value, validation);
        data.invalid = touched && !checkValidity(value, validation);
    }

    let content;
    if (type === 'image') {
        content = <div id={"embed-" + data.id} className={"embed-responsive embed-responsive-" + dimensions + " bg-img"} style={{ backgroundImage: `url("${defaultValue || data.value}")` }} onClick={onClick}>
            {!defaultValue && ((!defaultValue && data.value) || (!!defaultValue && defaultValue !== data.value) ? <div className="image-selected">
                <div className="check-circle"><i className='fas fa-check-circle fa-fw fa-2x' /></div>

                <div className="file-selected text-truncate" />
            </div> : <div className="select-image">
                <div><i className='fas fa-file-image fa-fw fa-4x' /></div>

                <div className="upload text-truncate">{cms.upload}</div>

                <div className="text-center text-truncate">{cms.size}</div>
            </div>)}
        </div>;
    }
    else content = <InputGroup>
        {(icon || addon) && <InputGroupAddon addonType="prepend">
            <InputGroupText>
                {icon ? <div className='icon'>
                    <i className={`fas fa-${icon} fa-fw`} />
                </div> : <div className='addon'>{addon}</div>}

                <div className='circle' />
            </InputGroupText>
        </InputGroupAddon>}

        {children ? <CustomInput {...data}>{children}</CustomInput> : <BSInput {...data} />}

        {append && <InputGroupAddon addonType="append">
            <InputGroupText>
                {append}
            </InputGroupText>
        </InputGroupAddon>}
    </InputGroup>;

    return <FormGroup className={`UI Input ${size}${(readonly || disabled) ? ' inactive ' : ' '}${className}`}>
        {label ? <>
            <label className='control-label'>{label}</label>
            {content}
        </> : <WithTooltip content={<>{placeholder}{required && <span className="text-red">*</span>}</>} id={data.id}>
            {content}
        </WithTooltip>}

        {bonus}
    </FormGroup>;
};

export default Input;