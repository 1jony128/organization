import axios from "axios";
const urlCompany = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
const token = "02064c1ca019072ad521dd88b722db1019854ac2";
let configCompany = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    }
}
export const getCompany = (value) => {
    console.log(value)
    return  axios.post(urlCompany, JSON.stringify({query: String(value)}), configCompany);
}

const urlBank = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank";

let configBank = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    }
}

export const getBank = (value) => {
    console.log(value)
    return  axios.post(urlBank, JSON.stringify({query: String(value)}), configBank);
}