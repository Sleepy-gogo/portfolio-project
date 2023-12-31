import { Children } from 'react';

interface Props {
  href: string;
  sizes?: string;
  style?: 'default' | 'primary';
  children: React.ReactNode;
}

function RoundedButton({ href, sizes, style = 'default', children }: Props) {
  const styles = {
    default:
      'w-full md:w-auto border-b md:border-0 border-white/60 hover:border-white hover:bg-white/10 md:hover:bg-[#16111D]/50 text-white/70 md:bg-[#16111D]/30 md:rounded-full',
    primary:
      'text-white/80 bg-[#5932AA]/40 border-[#876FE9]/70 border hover:bg-[#5932AA]/60 hover:border-[#876FE9]/100 rounded-2xl',
  };
  return (
    <a
      className={`block transition-all text-center px-4 py-2 shadow-sm backdrop-blur-md hover:scale-105 hover:text-white ease-in-out ${
        styles[style]
      } ${sizes || 'text-sm md:text-base'}`}
      href={href}
    >
      {children}
    </a>
  );
}

export default RoundedButton;
