import { EmailField } from "@/components/types/Field/EmailField";

const Email = () => new EmailField({
  label: 'Email',
  placeholder: 'Enter your email',
  visible: true,
  required: true,
  rules: [
    (v?: string) => (!!v || 'Field required'),
  ],
});

export default Email;