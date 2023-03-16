import { DateField } from "@/components/types/Field/DateField";

const PreferredInterviewDate = new DateField({
  label: 'Preferred interview date',
  placeholder: 'Enter your preferred interveiw date',
  visible: true,
  required: true,
  rules: [],
});

export default PreferredInterviewDate;