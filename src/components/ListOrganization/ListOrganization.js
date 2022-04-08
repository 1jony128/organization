import React from 'react';
import List from "./List";

const ListOrganization = ({setAddOrganize, setMode}) => {

    return (
        <>
            <h2>Организации и ИП</h2>
            <p><small>для которых я покупал или планирую покупать</small></p>
            <div className="input_wrapper buttons left">
                <input
                    type="submit"
                    value="+ Добавить организацию/ИП"
                    onClick={() => {
                        setAddOrganize(true)
                        setMode("ADD_CARD")
                    }}
                />
            </div>
            <List setMode={setMode} setAddOrganize={setAddOrganize}/>
        </>
    );
};

export default ListOrganization;