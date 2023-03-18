import { TextField } from "@/components/types/Field/TextField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const Degree = () => new TextField({
  label: 'Degree',
  placeholder: 'Enter your degree',
  name: 'degree',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default Degree;