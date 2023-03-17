import { DateField } from "@/components/types/Field/DateField";

const StartDate = () => new DateField({
  label: 'Start Date',
  placeholder: 'Enter your start education date',
  visible: true,
  required: true,
  rules: [
    (v?: string) => (!!v || 'Field required'),
  ],
});

export default StartDate;