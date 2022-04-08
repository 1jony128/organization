import * as yup from "yup";

const validationShema = yup.object({
    company: yup.object({
            inn: yup.string()
                .min(10)
                .max(12)
                .required(),
            name: yup.object({
                    short: yup.string()
                    .required()
                }).required(),
            address:  yup.object({
                value: yup.string()
                    .required()
            }).required(),
            ogrn: yup.string()
                .required(),
            kpp: yup.string()
                .required(),
            actual_address: yup.string()
                .required(),
    }),
    bank: yup.object({
        bic: yup.string()
            .required(),
        name: yup.object({
            short: yup.string()
                .required()
        }).required(),
        correspondent_account: yup.string()
            .required(),
        settlement_account: yup.string()
            .required(),
    })
}).required();

export default validationShema;