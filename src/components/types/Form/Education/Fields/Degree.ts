import { TextField } from "@/components/types/Field/TextField";

const Degree = () => new TextField({
  label: 'Degree',
  placeholder: 'Enter your degree',
  visible: true,
  required: true,
  rules: [],
});

export default Degree;