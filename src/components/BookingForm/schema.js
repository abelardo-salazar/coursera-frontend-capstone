import { string, number, date, object } from "yup"
import { validators } from "../../utils/validators"

export const timeOptions = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
]
export const occasionOptions = [
    "Birthday",
    "Anniversary"
]
export const bookingFormSchema = object({
    "res-name":
        string()
            .default("")
            .required(validators.required),
    "res-date":
        date()
            .default(new Date())
            .required(validators.required)
            .min(new Date(), validators.afterNow),
    "res-time":
        string()
            .default(timeOptions[0])
            .required(validators.required)
            .oneOf(timeOptions, validators.option),
    guests:
        number()
            .default(1)
            .required(validators.required)
            .min(1, validators.minNum(1))
            .max(10, validators.maxNum(10)),
    occasion:
        string()
            .default(occasionOptions[0])
            .required(validators.required)
            .oneOf(occasionOptions, validators.option)
})

export const bookingFormInitialValues = {
    "res-name": "",
    "res-date": new Date(),
    "res-time": timeOptions[0],
    guests: 1,
    occasion: occasionOptions[0]
}