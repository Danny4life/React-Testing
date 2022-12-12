import { render, screen } from '@testing-library/react';
import Login from "./Login";

test("username input should be rendered", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/Username/i);
    expect(userInputEl).toBeInTheDocument();
})
test("password input should be rendered", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/Password/i);
    expect(passwordInputEl).toBeInTheDocument();
})
test("button should be rendered", () => {
    render(<Login />);
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toBeInTheDocument();
})

test("username input should be empty", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/Username/i);
    expect(userInputEl).toBeInTheDocument("");
})
test("password input should be empty", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/Password/i);
    expect(passwordInputEl).toBeInTheDocument("");
})
test("button should be disabled", () => {
    render(<Login />);
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toBeDisabled();
})

test("error message should not be visible", () => {
    render(<Login />);
    const errorEl = screen.getByTestId("error-msg");
    expect(errorEl).not.toBeVisible();
})
