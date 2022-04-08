import React, {useEffect, useState} from 'react';

const DropSelect = ({option, value, onSelect, textDrop}) => {
    const [string, setString] = useState(textDrop[0]);

    useEffect(() => {
        if(value && value.length === 0){
            setString(textDrop[1])
        }
    }, [value])
    return (
        <>
            {
                (option && option.length > 0) ? option.map((item, index) => {
                        return <div
                                    key={item.value + index}
                                    className={"drop-item"}
                                    onClick={() => onSelect(item.data)}
                                >
                                    {item.value}
                                </div>
                    })
                    :
                    <div className={"drop-item disabled"}>{string}</div>
            }
        </>
    );
};

export default DropSelect;