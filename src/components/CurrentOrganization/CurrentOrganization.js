import React, {useEffect, useState} from 'react';
// Components
import Organization from "./Miniform/Organization";
import BankDetails from "./Miniform/BankDetails";
// validation
import { Form, Formik } from 'formik';
import validationShema from "../../formikYup/validationShema";
import initialValues from "../../formikYup/initialValues";
import HeaderOrg from "./HeaderOrg";
import {useDispatch, useSelector} from "react-redux";
import { addCompanyAction, editCompanyAction } from '../../redux/cardsReducer';


const CurrentOrganization = ({setAddOrganize, mode}) => {
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if(mode === "ADD_CARD"){
            setEdit(false)
        } else {
            console.log(mode)
            setEdit(mode)
        }
    }, [mode])

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const card = {
            title: data.company.name.short,
            text: `ИНН ${data.company.inn},${data.company.actual_address}`,
            fullInfo: data,
            inn: data.company.inn
        }
        console.log(card)
        if(edit){
            dispatch(editCompanyAction(card))
        } else {
            dispatch(addCompanyAction(card))
        }

        setAddOrganize(false)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form>
                    <HeaderOrg setAddOrganize={setAddOrganize}/>
                    <div className={"wrapper_bg checkout"}>
                        <Organization edit={edit}/>
                        <BankDetails />
                        <div className="input_wrapper buttons left">
                            <input type="submit" value={edit ? "Сохранить" : "Добавить организацию"}/>
                            {/*<input type="button" value="Удалить организацию/ИП"/>*/}
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
);
};

export default CurrentOrganization;