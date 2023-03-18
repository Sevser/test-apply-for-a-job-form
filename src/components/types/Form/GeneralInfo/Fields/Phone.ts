import { PhoneField } from "@/components/types/Field/PhoneField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const Phone = () => new PhoneField({
  label: 'Phone',
  placeholder: 'Enter your phone',
  name: 'phone',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default Phone;