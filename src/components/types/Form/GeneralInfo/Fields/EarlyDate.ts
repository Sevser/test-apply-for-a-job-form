import { DateField } from "@/components/types/Field/DateField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const EarlyPossibleDate = () => new DateField({
  label: 'Early possible start date',
  placeholder: 'Enter your early possible start date',
  name: 'earlyDate',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default EarlyPossibleDate;