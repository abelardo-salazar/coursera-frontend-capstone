import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { subDays } from "date-fns"

export const checkRequiredValidationErrorOnFocus = ({ fieldName, formComponent }) => {
    test(`Should show ${fieldName} field validation on focus.`, async () => {
        const { getByTestId } = render(formComponent);
        const input = getByTestId(`${fieldName}Field`);

        await fireEvent.focusIn(input);
        await fireEvent.focusOut(input);

        await waitFor(() => {
            expect(getByTestId(`${fieldName}Error`)).not.toBe(null);
            expect(getByTestId(`${fieldName}Error`)).toHaveTextContent("required");
        })
    });
}
export const checkRequiredValidationErrorOnBlur = ({ fieldName, formComponent }) => {
    test(`Should show ${fieldName} field validation on blur.`, async () => {
        const { getByTestId } = render(formComponent);

        const input = getByTestId(`${fieldName}Field`);

        await fireEvent.blur(input);

        await waitFor(() => {
            expect(getByTestId(`${fieldName}Error`)).not.toBe(null);
            expect(getByTestId(`${fieldName}Error`)).toHaveTextContent("required");
        })
    })
}
export const checkRequiredValidationErrorOnBlankInput = ({ fieldName, formComponent }) => {
    test(`Should show ${fieldName} field validation on blank input.`, async () => {
        const { getByTestId } = render(formComponent);

        const input = getByTestId(`${fieldName}Field`);
        const button = getByTestId("submitButton");

        await fireEvent.change(input, { target: { value: "" } })
        await fireEvent.click(button);

        await waitFor(() => {
            expect(getByTestId(`${fieldName}Error`)).not.toBe(null);
            expect(getByTestId(`${fieldName}Error`)).toHaveTextContent("required");
        })
    })
}
export const checkRequiredValidationErrorOnBlankDateInput = ({ fieldName, formComponent }) => {
    test(`Should show ${fieldName} field validation on blank input.`, async () => {
        const { getByTestId } = render(formComponent);

        const input = getByTestId(`${fieldName}Field`);
        const button = getByTestId("submitButton");

        await fireEvent.change(input, { target: { value: "" } })
        await fireEvent.click(button);

        await waitFor(() => {
            expect(getByTestId(`${fieldName}Error`)).not.toBe(null);
            expect(getByTestId(`${fieldName}Error`)).toHaveTextContent("Invalid date");
        })
    })
}
export const checkValidationErrorOnPastDateInput = ({ fieldName, formComponent }) => {
    test(`Should show ${fieldName} field validation on past date input.`, async () => {
        const { getByTestId } = render(formComponent);

        const input = getByTestId(`${fieldName}Field`);
        const button = getByTestId("submitButton");

        await fireEvent.change(input, {
            target: {
                value:
                    subDays(new Date(), 1).toISOString().slice(0, 10)
            }
        })
        await fireEvent.click(button);

        await waitFor(() => {
            expect(getByTestId(`${fieldName}Error`)).not.toBe(null);
            expect(getByTestId(`${fieldName}Error`)).toHaveTextContent("You can't book a table in the past");
        })
    })
}

export const checkValidationErrorOnLessMinInput = ({ fieldName, minimum, formComponent }) => {
    test(`Should show ${fieldName} field validation on lesser than minimum input.`, async () => {
        const { getByTestId } = render(formComponent);

        const input = getByTestId(`${fieldName}Field`);
        const button = getByTestId("submitButton");

        await fireEvent.change(input, { target: { value: `${minimum - 1}` } })
        await fireEvent.click(button);

        await waitFor(() => {
            expect(getByTestId(`${fieldName}Error`)).not.toBe(null);
            expect(getByTestId(`${fieldName}Error`)).toHaveTextContent("You must provide an input greater than");
        })
    })
}

export const checkValidationErrorOnLessMaxInput = ({ fieldName, maximum, formComponent }) => {
    test(`Should show ${fieldName} field validation on greater than minimum input.`, async () => {
        const { getByTestId } = render(formComponent);

        const input = getByTestId(`${fieldName}Field`);
        const button = getByTestId("submitButton");

        await fireEvent.change(input, { target: { value: `${maximum + 1}` } })
        await fireEvent.click(button);

        await waitFor(() => {
            expect(getByTestId(`${fieldName}Error`)).not.toBe(null);
            expect(getByTestId(`${fieldName}Error`)).toHaveTextContent("You must provide an input lesser than");
        })
    })
}

export const checkValidationErrorOnInvalidOptionInput = ({ fieldName, formComponent }) => {
    test(`Should show ${fieldName} field validation on invalid option`, async () => {
        const { getByTestId } = render(formComponent);

        const input = getByTestId(`${fieldName}Field`);
        const button = getByTestId("submitButton");

        const invalidOption = document.createElement("option")
        invalidOption.value = "lorem"
        input.appendChild(invalidOption)
        
        await fireEvent.change(input, { target: { value: "lorem" } })
        await fireEvent.click(button);

        await waitFor(() => {
            expect(getByTestId(`${fieldName}Error`)).not.toBe(null);
            expect(getByTestId(`${fieldName}Error`)).toHaveTextContent("You must select a valid option");
        })
    })
}