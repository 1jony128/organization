import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Item from "./Item";

const List = ({setMode, setAddOrganize}) => {


    const cards = useSelector(state => state.cards);

    return (
        <div className={"organizations_list"}>
            {
                (cards && (cards.length !== 0)) && cards.map(((item, index) => {
                    return <Item key={index} item={item} setMode={setMode} setAddOrganize={setAddOrganize}/>
                }))
            }
        </div>
    );
};

export default List;