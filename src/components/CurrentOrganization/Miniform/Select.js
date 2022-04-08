import React, {useEffect, useState} from 'react';
import {Field, useFormikContext} from "formik";
import DropSelect from './DropSelect';

const Select = ({text, currentInput, request, currentObject, placeholder, length, textDrop}) => {
    const [value, setValue] = useState("")
    const [option, setOption] = useState([])
    const [openMenu, setOpenMenu] = useState(false)

    const { values, setFieldValue } = useFormikContext();

    const onChange = (e) => {
        setValue(e.target.value)
        setFieldValue(`${currentObject}.${currentInput}`, e.target.value)
        request(e.target.value).then(data => {
            setOption(data.data.suggestions)
        })
    }
    useEffect(() => {
        window.document.addEventListener("click", (e) => {
            if(e.path[0].className !== "drop-item" && e.path[0].nodeName !== "INPUT"){
                setOpenMenu(false)
            }
        })
    }, [])

    useEffect(() => {
        if(values[currentObject][currentInput] !== ""){
            setValue(values[currentObject][currentInput])
        }
    },[values[currentObject][currentInput]])

    const onSelect = (item) => {
        console.log(currentInput)
        console.log(item)
        console.log(item[currentInput])
        setValue(item[currentInput])
        console.log(currentObject)
        setFieldValue(currentObject, item)
        setOpenMenu(false)
    }

    const onFocus = (e) => {
        setOpenMenu(true)
    }

    return (
        <div className={`input_wrapper right-text comment_right select ${length}`}>
            <div className={"input_name"}>{text}</div>
            <div className="add_wrapper">
                <Field
                    name={`${currentObject}.${currentInput}`}
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    onFocus={onFocus}
                    autocomplete={"off"}
                />

                {
                    openMenu &&
                    <div className={"dropdown"}>
                        <div className={"wrapper-drop"}>
                             <DropSelect textDrop={textDrop} option={option} value={value} onSelect={onSelect}/>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default Select;