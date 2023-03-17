import { PhoneField } from "@/components/types/Field/PhoneField";

const Phone = () => new PhoneField({
  label: 'Phone',
  placeholder: 'Enter your phone',
  visible: true,
  required: true,
  rules: [],
});

export default Phone;