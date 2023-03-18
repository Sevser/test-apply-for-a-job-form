import { DateField } from "@/components/types/Field/DateField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const EndDate = () => new DateField({
  label: 'End Date',
  placeholder: 'Enter your end education date',
  name: 'endDate',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default EndDate;