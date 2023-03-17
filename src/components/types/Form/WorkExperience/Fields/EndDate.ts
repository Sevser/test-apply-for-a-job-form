import { DateField } from "@/components/types/Field/DateField";

const EndDate = () => new DateField({
  label: 'End Date',
  placeholder: 'Enter your end education date',
  visible: true,
  required: true,
  rules: [],
});

export default EndDate;