'use client';
import Image from 'next/image';
import FooterNavigationBar from '../footer-navigation-bar/footerNavigationBar';
import Link from 'next/link';
import SocialButtons from '../social-buttons/socialButtons';
import logo from '../../../public/assets/images/logo.svg';
import Button from '../button/button';
import Input from '../input/input';
import { useState, ChangeEvent, FormEvent } from 'react';
import { z, ZodError } from 'zod';

interface FormState {
  email: string;
}

export default function Footer(): JSX.Element {
  const [formState, setFormState] = useState<FormState>({
    email: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string; }>({});

  const schema = z.object({
    email: z
      .string()
      .email('Email inválido')
      .min(1, 'Preenchimento obrigatório')
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
    <footer className="pt-28 md:px-20 2xl:px-40 py-4">
      <div className="flex justify-between items-start p-5">
        <div className="flex flex-col items-between justify-center gap-7">
          <Image src={logo} width={160} height={48} alt="Estatein Logo" />

          <form
            onSubmit={handleSubmit}
            className="flex justify-between items-start gap-1"
          >
            <Input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              error={formErrors.email}
            />
            <Button
              type="submit"
              buttonText="Enviar"
              className="px-20 py-4 w-full font-semibold mb-3"
            />
          </form>
        </div>

        <FooterNavigationBar />
        <FooterNavigationBar />
        <FooterNavigationBar />
        <FooterNavigationBar />
        <FooterNavigationBar />
      </div>

      <div className="flex flex-row justify-between items-center pt-28">
        <div className="flex items-center justify-center gap-3">
          <p className="sm:text-sm md:text-sm 2xl:text-lg">
            @2023 Estatein. All Rights Reserved.
          </p>
          <Link
            href="#"
            className="sm:text-sm md:text-sm 2xl:text-lg underline text-white"
          >
            Terms & Condition
          </Link>
        </div>
        <SocialButtons />
      </div>
    </footer>
  );
}
