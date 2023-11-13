import { Resend } from 'resend';

const resend = new Resend('re_PAdnx2zT_2ULSssfGbj9kabkH1KejNwb5');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'tadas.msp@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});