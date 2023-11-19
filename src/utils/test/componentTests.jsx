import { render, screen } from "@testing-library/react";

export const checkComponentRedndering = ({ componentName, component }) =>
    test(`Should render the ${componentName} component`, () => {
        render(component);

        const reservationComponent = screen.getByTestId(`${componentName}Component`);
        expect(reservationComponent).toBeInTheDocument();
    });