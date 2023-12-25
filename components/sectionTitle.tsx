import React from 'react';

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize">
      {title}
    </h2>
  );
}

export default SectionTitle;
