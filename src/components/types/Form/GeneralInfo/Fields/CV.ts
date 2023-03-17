import { FileField } from "@/components/types/Field/FileField";

const CV = () => new FileField({
  label: 'CV',
  placeholder: 'Attach your CV',
  visible: true,
  required: true,
  rules: [],
});

export default CV;