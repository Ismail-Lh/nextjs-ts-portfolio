import sendEmail from '@/actions/sendEmail';
import toast from 'react-hot-toast';

import SubmitButton from '@/components/submitButton';

function ContactForm() {
  return (
    <form
      className="mt-10 flex flex-col dark:text-black"
      action={async (formData) => {
        const { error } = await sendEmail(formData);

        if (error) toast.error(error);

        toast.success('Your message has been successfully sent.');
      }}
    >
      <input
        className="h-14 rounded-lg border border-black/10 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
        type="email"
        required
        maxLength={500}
        name="senderEmail"
        id="email"
        placeholder="Your email address"
      />
      <textarea
        className="my-3 h-52 rounded-lg border border-black/10 p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
        name="message"
        placeholder="Your message"
        required
        maxLength={5000}
      />
      <SubmitButton />
    </form>
  );
}

export default ContactForm;
