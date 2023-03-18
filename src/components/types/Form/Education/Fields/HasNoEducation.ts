import { CheckboxField } from "@/components/types/Field/CheckboxField";

const HasNoEducation = () => new CheckboxField({
  label: 'Has no education',
  placeholder: '',
  name: 'hasNoEducation',
  visible: true,
  required: true,
  rules: [],
});

export default HasNoEducation;