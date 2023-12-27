import { links } from '@/lib/data';
import NavLink from './navLink';

function Navbar() {
  return (
    <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map(({ name, hash }) => (
          <NavLink name={name} linkHref={hash} key={hash} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
