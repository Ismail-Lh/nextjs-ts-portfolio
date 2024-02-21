import { FaPaperPlane } from 'react-icons/fa';

function ContactForm() {
  return (
    <form className="mt-10 flex flex-col">
      <input
        className="h-14 rounded-lg border border-black/10 px-4"
        type="email"
        name="email"
        id="email"
        placeholder="Your email address"
      />
      <textarea
        className="my-3 h-52 rounded-lg border border-black/10 p-4"
        placeholder="Your message"
      />
      <button
        type="submit"
        className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
      >
        Send{' '}
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

export default ContactForm;
