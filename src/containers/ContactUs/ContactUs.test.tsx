import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import * as stories from "./ContactUs.stories";

const { Default } = composeStories(stories);

describe("ContactUs", () => {
  beforeEach(() => {
    render(<Default />);
  });

  test("renders contact form", () => {
    const contactFormElement = screen.getByRole("heading", { name: "Contact Us" });

    expect(contactFormElement).toBeInTheDocument();
  });

  test("displays success message on form submission", async () => {
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Message");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hello, I have a question. Can I ask a question? Thanks!" },
    });

    fireEvent.submit(submitButton);

    const successMessage = await screen.findByText("We have received your message!");

    expect(successMessage).toBeInTheDocument();
  });

  test("displays error message if name is empty", async () => {
    const nameInput = screen.getByLabelText("Name");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.submit(submitButton);

    const errorMessage = await screen.findByText("Name is required");

    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message if email is empty", async () => {
    const emailInput = screen.getByLabelText("Email");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.submit(submitButton);

    const errorMessage = await screen.findByText("Email is required");

    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message if email is invalid", async () => {
    const emailInput = screen.getByLabelText("Email");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(emailInput, { target: { value: "john" } });
    fireEvent.submit(submitButton);

    const errorMessage = await screen.findByText("Entered value does not match email format");

    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message if message is empty", async () => {
    const messageInput = screen.getByLabelText("Message");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(messageInput, { target: { value: "" } });
    fireEvent.submit(submitButton);

    const errorMessage = await screen.findByText("Message is required");

    expect(errorMessage).toBeInTheDocument();
  });

  test("reset button clears the form", async () => {
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Message");
    const resetButton = screen.getByRole("button", { name: "Reset" });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hello, I have a question. Can I ask a question? Thanks!" },
    });

    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(nameInput).toHaveValue("");
      expect(emailInput).toHaveValue("");
      expect(messageInput).toHaveValue("");
    });
  });
});
