export const normalize = (value, name, setFieldValue) => {
    const numbers = [
        "inn",
        "bik",
        "ogrn",
        "kpp",
        "correspondent_account",
        "settlement_account"
    ]
    if(numbers.find(item => item === name)){
        value = value.replace(/(^[^ ]* )|[^+\d ]+/g, '$1');
        setFieldValue(name, value)
    } else {
        setFieldValue(name, value)
    }
}