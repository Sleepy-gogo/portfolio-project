import { BurgerIcon, CloseIcon } from '@/icons/MenuIcons';
import RoundedButton from './RoundedButton';
import { useState } from 'react';

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="absolute right-7 md:hidden z-10"
      >
        {open ? <CloseIcon /> : <BurgerIcon />}
      </button>
      <nav className="relative navbar" data-open={open}>
        <ul className="flex absolute md:static flex-col -right-2 top-6 md:flex-row justify-center items-center gap-4 md:gap-3 tracking-tight font-semibold bg-black/20 rounded-lg backdrop-blur p-4 md:bg-transparent md:p-0 navbar-list">
          <li className="w-full md:w-auto">
            <RoundedButton href="#about">About</RoundedButton>
          </li>
          <li className="w-full md:w-auto">
            <RoundedButton href="#projects">Projects</RoundedButton>
          </li>
          <li className="w-full md:w-auto">
            <RoundedButton href="/blog">Blog</RoundedButton>
          </li>
          <li className="w-full md:w-auto">
            <RoundedButton href="/cv" style="primary">
              View CV
            </RoundedButton>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
