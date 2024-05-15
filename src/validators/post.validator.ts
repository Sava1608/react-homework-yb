import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi.string().required().messages({'string.required': 'Error =('}),
    body: Joi.string().required().messages({'string.required': 'Error =(('}),
    userId: Joi.number().min(1).max(10).required().messages({'number.required': 'Error number =((('})
})