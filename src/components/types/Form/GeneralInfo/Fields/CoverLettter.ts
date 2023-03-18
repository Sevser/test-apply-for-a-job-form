import { TextAreaField } from "@/components/types/Field/TextAreaField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const CoverLetter = () => new TextAreaField({
  label: 'Cover letter',
  placeholder: 'Enter your cover letter',
  name: 'coverLetter',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default CoverLetter;