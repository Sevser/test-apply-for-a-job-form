import { CheckboxField } from "@/components/types/Field/CheckboxField";

const HasNoWorkExperience = () => new CheckboxField({
  label: 'Has no work experience',
  placeholder: '',
  name: 'hasNoWorkExperience',
  visible: true,
  required: true,
  rules: [],
});

export default HasNoWorkExperience;