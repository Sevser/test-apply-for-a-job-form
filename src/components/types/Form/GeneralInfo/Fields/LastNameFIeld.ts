import { TextField } from "@/components/types/Field/TextField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const LastName = () => new TextField({
  label: 'Last name',
  placeholder: 'Enter your last name',
  name: 'lastName',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default LastName;