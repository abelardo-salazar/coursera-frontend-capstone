export const validators = {
    required: "Field required",
    email: "You must provide a valid email address",
    afterNow: "You can't book a table in the past",
    option: "You must select a valid option",
    minNum: (min) =>
        `You must provide an input greater than ${min}`,
    maxNum: (max) =>
        `You must provide an input lesser than ${max}`,
    minChar: (min) =>
        `You must provide an input with more than ${min} characters`,
    maxChar: (max) =>
        `You must provide an input with less than ${max} characters`,
};
