import { EmailField } from "@/components/types/Field/EmailField";
import { fieldRequired, validateEmail } from "@/components/types/Validation/ValidationRules";

const Email = () => new EmailField({
  label: 'Email',
  placeholder: 'Enter your email',
  name: 'email',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
    validateEmail,
  ],
});

export default Email;