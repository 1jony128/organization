import React, {useEffect, useState} from 'react';
import InputWrapper from "./inputWrapper";
import { useFormikContext } from 'formik';
import Checkmark from "../../../Atoms/Checkbox/Checkmark";
import Select from "./Select";
import {getCompany} from "../../../server/request";
const Organization = ({edit}) => {
    const { values, setFieldValue, errors } = useFormikContext();
    const [innValid, setInnValid] = useState(false)


// useEffect ----
    useEffect(() => {
        if(values.company.inn.length >= 10 && values.company.inn.length <= 12 ){
            setInnValid(true)
            setFieldValue("company.actual_address", values.company?.address?.value)
        } else {
            setInnValid(false)
        }
    },[values.company.inn])

    useEffect(() => {
        console.log(edit)
        if(edit){
            setFieldValue("company", edit.fullInfo.company)
            setFieldValue("bank", edit.fullInfo.bank)
        }
    },[edit])

    const onMatchesAddress = (bool) => {
        console.log(values.address?.value)
        if(bool){
            setFieldValue("company.actual_address", values.company?.address?.value)
        } else {
            setFieldValue("company.actual_address", "")
        }
    }


    return (
        <div className={"mini_form editing"}>
            <div className={"title_checkout"}>Организация</div>
            <div className={"content_editable"}>
                <Select
                    text={"ИНН"}
                    currentInput={"inn"}
                    placeholder={"введите ИНН"}
                    request={getCompany}
                    currentObject={'company'}
                    length={"small"}
                    textDrop={["Неизвестная организация", "Введите организацию"]}
                />
                {
                    (!errors.company?.inn && innValid) ?
                    <div>
                        <InputWrapper
                            text={"Сокращенное наименнование"}
                            placeholder={"Введите сокращенное наименнование"}
                            name={"company.name.short"}
                            length={"large"}
                            // comment={"dsaaaaaa"}
                        />
                        <InputWrapper
                            text={"Юридический адрес"}
                            placeholder={"Введите юридический адрес"}
                            name={"company.address.value"}
                            length={"large"}
                        />
                        <InputWrapper
                            text={"ОГРН"}
                            placeholder={"Введите ОГРН"}
                            name={"company.ogrn"}
                            length={"small"}
                        />
                        <InputWrapper
                            text={"КПП"}
                            placeholder={"Введите КПП"}
                            name={"company.kpp"}
                            length={"small"}
                        />
                        <InputWrapper
                            text={"Фактический адрес"}
                            placeholder={"Введите фактический адрес"}
                            name={"company.actual_address"}
                            length={"large"}
                            comment={
                                <Checkmark
                                    name={"address_matches"}
                                    text={"Фактический адрес совпадает с юридическим"}
                                    onClick={onMatchesAddress}
                                    checked={true}
                                />
                            }
                        />
                    </div>
                        :
                        <div></div>
                }

            </div>
        </div>
    );
};

export default Organization;