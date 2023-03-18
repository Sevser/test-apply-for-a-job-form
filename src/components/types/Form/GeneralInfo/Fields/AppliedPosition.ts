import { TextField } from "@/components/types/Field/TextField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const AppliedPosition = () => new TextField({
  label: 'Applied position',
  placeholder: 'Enter your applied position',
  name: 'appliedPosition',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default AppliedPosition;