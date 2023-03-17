import type { DateField } from "../../Field/DateField";
import type { TextField } from "../../Field/TextField";
import type { RuleValidation } from "../../Validation/Rule";
import { Validable } from "../../Validation/Validatable";
import type { Form } from "../Form";
import Degree from "./Fields/Degree";
import EndDate from "./Fields/EndDate";
import Name from "./Fields/Name";
import StartDate from "./Fields/StartDate";

export class Education extends Validable implements Form {
  label: string;
  fields: Validable[];

  name: TextField;
  startDate: DateField;
  endDate: DateField;
  degree: TextField;
  rules: RuleValidation[];

  constructor() {
    super();
    this.label = 'SignUp';
    this.name = Name();
    this.startDate = StartDate();
    this.endDate = EndDate();
    this.degree = Degree();
    this.rules = [];
    this.fields = [
      this.name,
      this.startDate,
      this.endDate,
      this.degree,
    ];
  }

  get valid(): boolean {
    return this.rules.every((rule) => rule(this)) && this.fields.every((field: Validable) => field.valid);
  }
}