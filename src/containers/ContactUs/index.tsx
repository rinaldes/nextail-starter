"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useState } from "react";

import { defaultContacts, FormValues } from "./type";

const ContactUs = () => {
  const [message, setMessage] = useState<string>("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: defaultContacts,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    setMessage("We have received your message!");
  };

  return (
    <form className="flex flex-col gap-4 items-start" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            {...field}
            errorMessage={errors.name?.message?.toString()}
            isInvalid={errors.name && true}
            label="Name"
            value={field.value}
          />
        )}
        rules={{ required: "Name is required" }}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            {...field}
            errorMessage={errors.email?.message?.toString()}
            isInvalid={errors.email && true}
            label="Email"
            value={field.value}
          />
        )}
        rules={{
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        }}
      />

      <Controller
        control={control}
        name="message"
        render={({ field }) => (
          <Textarea
            {...field}
            errorMessage={errors.message?.message?.toString()}
            isInvalid={errors.message && true}
            label="Message"
            value={field.value}
          />
        )}
        rules={{ required: "Message is required" }}
      />

      <ButtonGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button
          color="danger"
          type="reset"
          onClick={() => {
            reset();
            setMessage("");
          }}
        >
          Reset
        </Button>
      </ButtonGroup>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ContactUs;
