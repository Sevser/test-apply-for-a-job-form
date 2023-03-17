import { DateField } from "@/components/types/Field/DateField";

const EarlyPossibleDate = () => new DateField({
  label: 'Early possible start date',
  placeholder: 'Enter your early possible start date',
  visible: true,
  required: true,
  rules: [],
});

export default EarlyPossibleDate;