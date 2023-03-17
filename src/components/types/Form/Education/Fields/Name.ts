import { TextField } from "@/components/types/Field/TextField";

const Name = () => new TextField({
  label: 'Name',
  placeholder: 'Enter your name',
  visible: true,
  required: true,
  rules: [],
});

export default Name;