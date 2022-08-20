import React from 'react';
import { Table as BSTable } from 'reactstrap';

const Table = ({ fields, array, limit, bordered, dark = false, sl = true, borderless, innerClassName = '', outerClassName = '', select, children, selectHandler }) => {
    const titles = fields.map(({ name }) => <th className="align-middle text-nowrap" key={name}>{name}</th>);
    if (sl) titles.unshift(<th className="text-center align-middle" key="#">SL</th>);
    if (select) titles.unshift(<th className="align-middle text-center" key="select_all">
        <input type="checkbox" onClick={selectHandler} className="select_all" />
    </th>);

    const content = array.map((item, index) => {
        if (limit && index >= limit) return null;
        let inside = [];
        if (sl) inside.push(<th className="text-center align-middle" key={'primary' + index}>{index + 1}</th>);
        if (select) inside.unshift(<th className="text-center align-middle" key={'white' + index}>
            <input type="checkbox" value={item._id} />
        </th>);
        fields.forEach(({ key, minWidth, maxWidth, className }) => {
            inside.push(<td className={`align-middle text-nowrap text-truncate${className && (` ${className}`)}`} style={{ minWidth, maxWidth }} key={key}>{item[key]}</td>);
        });

        return <tr className="align-middle" key={index + 1}>{inside}</tr>;
    });


    return <div className={`pb-4 text-16 ${outerClassName}`}>
        <div className="flex-fill d-flex flex-column">
            <div className="table-responsive flex-fill">
                <BSTable dark={dark} bordered={bordered} hover borderless={borderless} className={'text-reset ' + innerClassName}>
                    <thead><tr>{titles}</tr></thead>
                    <tbody>{content}</tbody>
                </BSTable>
            </div>

            <div className="pt-3">
                {children}
            </div>
        </div>
    </div>;
};

export default Table;