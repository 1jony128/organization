import React from 'react';
import OrgInfo from "./OrgInfo";
import {useDispatch} from "react-redux";
import { removeCompanyAction } from '../../redux/cardsReducer';

const Item = ({item, setMode, setAddOrganize}) => {
    const dispatch = useDispatch();
    console.log(item.inn)

    const handleEdit = () => {
        setAddOrganize(true);
        setMode(item);
    }
    const handleRemove = (e) => {
        e.stopPropagation()
        dispatch(removeCompanyAction(item.inn))
    }

    return (
        <div className={"organisation_item"} onClick={handleEdit}>
            <div className={"organisation_header"}>
                <div className={"title"}>
                    {item.title}
                    <p>{item.text}</p>
                </div>
                <div className={"tool"} onClick={handleRemove}>Удалить</div>
            </div>
            <OrgInfo />
        </div>
    );
};

export default Item;