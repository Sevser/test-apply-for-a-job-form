import { TextAreaField } from "@/components/types/Field/TextAreaField";

const Responsibilities = () => new TextAreaField({
  label: 'Cover letter',
  placeholder: 'Enter your cover letter',
  visible: true,
  required: true,
  rules: [],
});

export default Responsibilities;