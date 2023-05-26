import React, { ReactNode } from 'react';

type GradientProps = {
  className?: string;
  children: ReactNode | undefined;
}

function GradientText(props: GradientProps) {
  const classNameString = `bg-gradient-to-r from-green-500 via-gray-600 to-purple-600 bg-clip-text text-transparent pb-10 -mb-10 ${props.className && props.className}`
  return (
    <span className={classNameString}>
      {props.children}
    </span>
  );
}

export default GradientText;