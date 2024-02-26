'use server';

import React from 'react';
import ContactFormEmail from '@/email/contact-form-email';
import { getMessageError, validateString } from '@/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line consistent-return
const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');
  try {
    if (!validateString(senderEmail, 500))
      throw new Error('Invalid sender email');

    if (!validateString(message, 5000)) throw new Error('Invalid message');

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ismailsaad03@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return {
      error: getMessageError(error),
    };
  }
};

export default sendEmail;
