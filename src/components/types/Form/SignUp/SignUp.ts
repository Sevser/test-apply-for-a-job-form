import type { Field } from "../../Field/Field";
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

export class SignUp implements Form {
  label: string;
  fields: Field[];
  constructor() {
    this.label = 'SignUp';
    this.fields = [
      Name,
      LastName,
      Email,
      Phone,
      AppliedPosition,
      EarlyPossibleDate,
      PreferredInterviewDate,
      CoverLetter,
      CV,
    ];
  }
}