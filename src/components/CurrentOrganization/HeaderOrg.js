import React from 'react';
import {useFormikContext} from "formik";

const HeaderOrg = ({setAddOrganize}) => {
    const { values } = useFormikContext();
    return (
        <div className={"header"}>
            <div className="input_wrapper buttons">
                <input type="submit" value="К списку" onClick={() => setAddOrganize(false)}/>
            </div>
            <div className={"heading_h1_h6"}>{values.company.name.short ? values.company.name.short : "Новая организация или ИП" }</div>
        </div>
    );
};

export default HeaderOrg;