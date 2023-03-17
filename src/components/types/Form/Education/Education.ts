import type { DateField } from "../../Field/DateField";
import type { Field } from "../../Field/Field";
import type { TextField } from "../../Field/TextField";
import type { Form } from "../Form";
import Degree from "./Fields/Degree";
import EndDate from "./Fields/EndDate";
import Name from "./Fields/Name";
import StartDate from "./Fields/StartDate";

export class Education implements Form {
  label: string;
  fields: Field[];

  name: TextField;
  startDate: DateField;
  endDate: DateField;
  degree: TextField;

  constructor() {
    this.label = 'SignUp';
    this.name = Name();
    this.startDate = StartDate();
    this.endDate = EndDate();
    this.degree = Degree();
    this.fields = [
      this.name,
      this.startDate,
      this.endDate,
      this.degree,
    ];
  }
}