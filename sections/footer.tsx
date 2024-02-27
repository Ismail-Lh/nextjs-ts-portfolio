import React from 'react';

function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Ismail Lahbiyeb
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React, Next.js, and Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;
