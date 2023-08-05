const { boolean, object, string } = require('zod')

exports.createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    sector: string({
      required_error: 'Sector is required',
      invalid_type_error: 'Sector must be a string',
    }),
    isAgreedToTerms: boolean({
      required_error: 'isAgreedToTerms is required',
      invalid_type_error: 'isAgreedToTerms must be a boolean',
    }),
  }),
})

exports.getUserSchema = object({
  params: object({
    id: string({
      required_error: 'id is required',
      invalid_type_error: 'id must be a string',
    }),
  }),
})

exports.updateUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    sector: string({
      required_error: 'Sector is required',
      invalid_type_error: 'Sector must be a string',
    }),
    isAgreedToTerms: boolean({
      required_error: 'isAgreedToTerms is required',
      invalid_type_error: 'isAgreedToTerms must be a boolean',
    }),
  }),
  params: object({
    id: string({
      required_error: 'id is required',
      invalid_type_error: 'id must be a string',
    }),
  }),
})
