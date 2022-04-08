import { Field } from "formik";
import {useState} from "react";

const Checkmark = ({name, text, checked, onClick}) => {
    const [check, setCheck] = useState(checked)
    const onChange = () => {
        setCheck(!check)
        if(check){
            onClick(false)
        } else {
            onClick(true)
        }

    }

    return (
        <div className={"checkbox_wrapper"}>
            <div className={"add_wrapper"}>
                <label className={"label_for_checkbox"}>
                    <Field
                        name={name}
                        type={"checkbox"}
                        checked={check}
                        onChange={onChange}
                    />
                    <div className={'checkmark_comment'}>{text}</div>
                    <span className={"checkmark"}></span>
                </label>
            </div>
        </div>
    )
}

export default Checkmark;

