import React from 'react';

const OrgInfo = () => {
    return (
        <div className={"organization_info"}>
            <div className={"row"}>
                <div className={"key"}>выполнено заказов </div>
                <div className={"value"}> для данное организации от Вашего имени </div>{/*Мы готовы выполнить ваш первый заказ для данной организации*/}
            </div>
            <div className={"row"}>
                <div className={"key"}>Остаток на счете </div>
                <div className={"value"}> 3815 руб. 20 коп. (i) </div>{/*Мы готовы выполнить ваш первый заказ для данной организации*/}
            </div>
        </div>
    );
};

export default OrgInfo;