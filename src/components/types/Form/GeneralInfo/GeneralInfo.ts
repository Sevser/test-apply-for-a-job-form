import type { DateField } from "../../Field/DateField";
import type { EmailField } from "../../Field/EmailField";
import type { Field } from "../../Field/Field";
import type { FileField } from "../../Field/FileField";
import type { PhoneField } from "../../Field/PhoneField";
import type { TextAreaField } from "../../Field/TextAreaField";
import type { TextField } from "../../Field/TextField";
import type { RuleValidation } from "../../Validation/Rule";
import type { Validatable } from "../../Validation/Validatable";
import type { Form } from "../Form";
import AppliedPosition from "./Fields/AppliedPosition";
import CoverLetter from "./Fields/CoverLettter";
import CV from "./Fields/CV";
import EarlyPossibleDate from "./Fields/EarlyDate";
import Email from "./Fields/Email";
import LastName from "./Fields/LastNameFIeld";
import Name from "./Fields/Name";
import Phone from "./Fields/Phone";
import PreferredInterviewDate from "./Fields/PreferredInterviewDate";

export class GeneralInfo implements Form, Validatable {
  label: string;
  fields: Field[];

  name: TextField;
  lastName: TextField;
  email: EmailField;
  phone: PhoneField;
  appliedPosition: TextAreaField;
  earlyPossibleDate: DateField;
  preferredInterViewDate: DateField;
  coverLetter: TextAreaField;
  cv: FileField;
  valid: boolean;
  rules: RuleValidation[];

  constructor() {
    this.label = 'SignUp';
    this.name = Name();
    this.lastName = LastName();
    this.email = Email();
    this.phone = Phone();
    this.appliedPosition = AppliedPosition();
    this.earlyPossibleDate = EarlyPossibleDate();
    this.preferredInterViewDate = PreferredInterviewDate();
    this.coverLetter = CoverLetter();
    this.cv = CV();
    this.valid = false;
    this.rules = [];
    this.fields = [
      this.name,
      this.lastName,
      this.email,
      this.phone,
      this.appliedPosition,
      this.earlyPossibleDate,
      this.preferredInterViewDate,
      this.coverLetter,
      this.cv,
    ];
  }
}