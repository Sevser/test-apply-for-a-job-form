import { FileField } from "@/components/types/Field/FileField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const CV = () => new FileField({
  label: 'CV',
  placeholder: 'Attach your CV',
  name: 'CV',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default CV;