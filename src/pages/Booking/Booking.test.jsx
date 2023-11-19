import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Booking } from "./Booking";
import {
  checkRequiredValidationErrorOnBlankDateInput,
  checkRequiredValidationErrorOnBlankInput,
  checkRequiredValidationErrorOnBlur,
  checkRequiredValidationErrorOnFocus,
  checkValidationErrorOnInvalidOptionInput,
  checkValidationErrorOnLessMaxInput,
  checkValidationErrorOnLessMinInput,
  checkValidationErrorOnPastDateInput
} from "../../utils/test/formTests";
import { checkComponentRedndering } from "../../utils/test/componentTests";
import { cleanup } from "@testing-library/react";


describe("Booking component", () => {
  beforeEach(cleanup);

  checkComponentRedndering({ componentName: "booking", component: <Booking /> })

  // Name field tests
  checkRequiredValidationErrorOnBlur({ fieldName: "name", formComponent: <Booking /> });
  checkRequiredValidationErrorOnFocus({ fieldName: "name", formComponent: <Booking /> });
  checkRequiredValidationErrorOnBlankInput({ fieldName: "name", formComponent: <Booking /> });

  // Time field tests
  checkValidationErrorOnInvalidOptionInput({fieldName:"time", formComponent: <Booking />})

  // Date field tests
  checkRequiredValidationErrorOnBlankDateInput({ fieldName: "date", formComponent: <Booking /> });
  checkValidationErrorOnPastDateInput({ fieldName: "date", formComponent: <Booking /> });

  // Guests field tests
  checkValidationErrorOnLessMinInput({ fieldName: "guests", minimum: 1, formComponent: <Booking /> })
  checkValidationErrorOnLessMaxInput({ fieldName: "guests", maximum: 10, formComponent: <Booking /> })

  // Occassion field tests
  checkValidationErrorOnInvalidOptionInput({fieldName:"occasion", formComponent: <Booking />})
})