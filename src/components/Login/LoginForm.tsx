'use client';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import login from '@/actions/login';

import Button from '../Form/Button/Button';
import Input from '../Form/Input/Input';
import ErrorMessage from '@/helper/ErrorMessage';
import Link from 'next/link';

import styles from './LoginForm.module.css';


function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>

      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
