import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
  name: string;
  linkHref: string;
};

function NavLink({ name, linkHref }: NavLinkProps) {
  return (
    <li key={linkHref} className="flex h-3/4 items-center justify-center">
      <Link
        href={linkHref}
        className="flex w-full items-center justify-center p-3 transition hover:text-gray-950"
      >
        {name}
      </Link>
    </li>
  );
}

export default NavLink;
