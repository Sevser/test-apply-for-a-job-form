import { TextField } from "@/components/types/Field/TextField";

const AppliedPosition = () => new TextField({
  label: 'Applied position',
  placeholder: 'Enter your applied position',
  visible: true,
  required: true,
  rules: [
    (v?: string) => (!!v || 'Field required'),
  ],
});

export default AppliedPosition;