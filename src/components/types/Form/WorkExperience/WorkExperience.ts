import type { DateField } from "../../Field/DateField";
import type { Field } from "../../Field/Field";
import type { TextAreaField } from "../../Field/TextAreaField";
import type { TextField } from "../../Field/TextField";
import type { Form } from "../Form";
import EndDate from "./Fields/EndDate";
import Name from "./Fields/Name";
import StartDate from "./Fields/StartDate";

export class WorkExperience implements Form {
  label: string;
  fields: Field[];

  name: TextField;
  startDate: DateField;
  endDate: DateField;
  responsibilities: TextAreaField;

  constructor() {
    this.label = 'SignUp';
    this.name = Name();
    this.startDate = StartDate();
    this.endDate = EndDate();
    this.responsibilities = Responsibilities();
    this.fields = [
      this.name,
      this.startDate,
      this.endDate,
      this.responsibilities,
    ];
  }
}