import { FileField } from "@/components/types/Field/FileField";

const CV = () => new FileField({
  label: 'CV',
  placeholder: 'Attach your CV',
  name: 'CV',
  visible: true,
  required: true,
  rules: [
    (v?: string) => {
      return !!v?.length || 'Field required'
    }
  ],
});

export default CV;