import { TextField } from "@/components/types/Field/TextField";

const Degree = () => new TextField({
  label: 'Degree',
  placeholder: 'Enter your degree',
  visible: true,
  required: true,
  rules: [
    (v?: string) => (!!v || 'Field required'),
  ],
});

export default Degree;