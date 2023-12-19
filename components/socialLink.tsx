import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

type SocialLinkProps = {
  link: string;
  icon: IconType;
  textStyle?: string;
};

function SocialLink({ link, icon: Icon, textStyle }: SocialLinkProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`${textStyle} flex items-center gap-2 rounded-full bg-white p-4 text-gray-700 outline-none transition-all hover:scale-110  focus:scale-110 active:scale-105`}
    >
      <Icon />
    </Link>
  );
}

export default SocialLink;
