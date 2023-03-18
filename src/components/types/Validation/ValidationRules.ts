import type { RuleValidation } from "./Rule";

export const validateEmail: RuleValidation = (email: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || 'Email not valid';

export const fieldRequired: RuleValidation = (v?: string) => (!!v || 'Field required');