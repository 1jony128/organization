import React from 'react';
import {Field, useFormikContext} from "formik";
import {normalize} from "../../../helpers/normalize";

const InputWrapper = ({ text, placeholder, name, length, comment}) => {
    const { setFieldValue, errors, touched } = useFormikContext();
    // has-error
    const hasError = errors[name] && touched[name]
    return (
        <div className={`input_wrapper right-text ${length} comment_right ${hasError && " has-error"}`}>
            <div className={"input_name"}>{text}</div>
            <div className="add_wrapper">
                    <Field
                        name={name}
                        type="text"
                        placeholder={placeholder}
                        autocomplete={"off"}
                        onChange={(event) => {
                            if(normalize){
                                event.target.value = normalize(event.target.value, name, setFieldValue)
                            }

                        }}
                    />
                <span className={"comment"}>
                    <span>{comment}</span>
                </span>
            </div>

        </div>
    );
};

export default InputWrapper;