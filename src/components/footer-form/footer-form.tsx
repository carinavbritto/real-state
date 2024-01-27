'use client';
import Button from '../button/button';
import Input from '../input/input';
import { useState, ChangeEvent, FormEvent } from 'react';
import { z, ZodError } from 'zod';
import { FaPaperPlane } from 'react-icons/fa';

interface FormState {
  email: string;
}

export default function FooterForm(): JSX.Element {
  const [formState, setFormState] = useState<FormState>({
    email: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string; }>({});

  const schema = z.object({
    email: z
      .string()
      .email('Fill in a valid email')
      .min(1, 'Fill in the email field')
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const validatedData = schema.parse(formState);
      console.log('Dados válidos:', validatedData);
    } catch (error) {
      if (error instanceof ZodError) {
        const errors: { [key: string]: string; } = {};
        error.errors.forEach((err) => {
          const field = err.path[0];
          errors[field] = err.message;
        });
        setFormErrors(errors);
      } else {
        console.error('Erro ao validar:', error);
        setFormErrors({});
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-start items-center gap-1"
    >
      <Input
        type="email"
        placeholder="Enter Your Email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        error={formErrors.email}
        submitButton={
          <Button
            type="submit"
            buttonStyle="rounded"
            className="bg-transparent"
            icon={<FaPaperPlane />}
          />
        }
        submitButtonPosition="right"
      />
    </form>
  );
}
