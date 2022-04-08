import React, {useEffect, useState} from 'react';
import InputWrapper from "./inputWrapper";
import {useFormikContext} from "formik";
import {getBank, getCompany} from "../../../server/request";
import Select from "./Select";

const BankDetails = () => {
    const { values } = useFormikContext();
    const [bikValid, setBikValid] = useState(false)

    // useEffect ----

    useEffect(() => {
        if(values.bank.bic?.length === 9){
            setBikValid(true)
        } else {
            setBikValid(false)
        }
    },[values.bank.bic])



    return (
        <div className={"mini_form editing"}>
            <div className={"title_checkout"}>Банковские реквизиты</div>
            <div className={"content_editable"}>
                <Select
                    text={"БИК"}
                    currentInput={"bic"}
                    placeholder={"Введите БИК"}
                    request={getBank}
                    currentObject={'bank'}
                    length={"small"}
                    textDrop={["Неизвестный банк", "Введите бик, название банка"]}
                />
                {
                    bikValid &&
                        <>
                            <InputWrapper
                                text={"Полное наименование банка"}
                                placeholder={"Введите полное наименование банка"}
                                name={"bank.name.short"}
                                length={"large"}
                            />
                            <InputWrapper
                                text={"Корреспондентский счет"}
                                placeholder={"Введите корреспондентский счет"}
                                name={"bank.correspondent_account"}
                            />
                        </>

                }

                <InputWrapper
                    text={"Рассчетный счет"}
                    placeholder={"Введите Рассчетный счет"}
                    name={"bank.settlement_account"}
                />
            </div>
        </div>
    );
};

export default BankDetails;