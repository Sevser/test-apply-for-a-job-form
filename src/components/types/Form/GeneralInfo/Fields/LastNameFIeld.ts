import { TextField } from "@/components/types/Field/TextField";

const LastName = () => new TextField({
  label: 'Last name',
  placeholder: 'Enter your last name',
  visible: true,
  required: true,
  rules: [],
});

export default LastName;