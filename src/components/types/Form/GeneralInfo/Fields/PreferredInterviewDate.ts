import { DateField } from "@/components/types/Field/DateField";
import { fieldRequired } from "@/components/types/Validation/ValidationRules";

const PreferredInterviewDate = () => new DateField({
  label: 'Preferred interview date',
  placeholder: 'Enter your preferred interveiw date',
  name: 'preferredInterviewDate',
  visible: true,
  required: true,
  rules: [
    fieldRequired,
  ],
});

export default PreferredInterviewDate;