import type { DateField } from "../../Field/DateField";
import type { TextAreaField } from "../../Field/TextAreaField";
import type { TextField } from "../../Field/TextField";
import type { RuleValidation } from "../../Validation/Rule";
import { Validable } from "../../Validation/Validatable";
import type { Form } from "../Form";
import EndDate from "./Fields/EndDate";
import Name from "./Fields/Name";
import Responsibilities from "./Fields/Responsibilities";
import StartDate from "./Fields/StartDate";

export class WorkExperience extends Validable implements Form {
  label: string;
  fields: Validable[];

  name: TextField;
  startDate: DateField;
  endDate: DateField;
  responsibilities: TextAreaField;
  rules: RuleValidation[];

  constructor() {
    super();
    this.label = 'Work experience';
    this.name = Name();
    this.startDate = StartDate();
    this.endDate = EndDate();
    this.responsibilities = Responsibilities();
    this.rules = [];
    this.fields = [
      this.name,
      this.startDate,
      this.endDate,
      this.responsibilities,
    ];
  }

  get valid(): boolean {
    return this.rules.every((rule) => rule(this)) && this.fields.every((field: Validable) => field.valid);
  }
}