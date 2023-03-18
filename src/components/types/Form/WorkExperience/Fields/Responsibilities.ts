import { TextAreaField } from "@/components/types/Field/TextAreaField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const Responsibilities = () => new TextAreaField({
  label: 'Responsibilities',
  placeholder: 'Enter your cover letter',
  name: 'responsibilities',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default Responsibilities;