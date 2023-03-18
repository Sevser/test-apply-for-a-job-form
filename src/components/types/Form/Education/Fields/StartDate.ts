import { DateField } from "@/components/types/Field/DateField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const StartDate = () => new DateField({
  label: 'Start Date',
  placeholder: 'Enter your start education date',
  name: 'startdate',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default StartDate;