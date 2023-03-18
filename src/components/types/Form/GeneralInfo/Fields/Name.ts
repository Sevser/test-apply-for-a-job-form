import { TextField } from "@/components/types/Field/TextField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const Name = () => new TextField({
  label: 'Name',
  placeholder: 'Enter your name',
  name: 'name',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default Name;