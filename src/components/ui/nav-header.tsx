"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface NavHeaderProps {
  className?: string;
}

export function NavHeader({ className }: NavHeaderProps) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/restaurant', label: 'Restaurant' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className={className}>
      <ul
        className="relative mx-auto flex w-fit rounded-full border border-foreground/10 bg-background/30 p-1 backdrop-blur-md"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {navLinks.map((link) => (
          <Tab key={link.path} to={link.path} setPosition={setPosition}>
            {link.label}
          </Tab>
        ))}

        <Cursor position={position} />
      </ul>
    </div>
  );
}

const Tab = ({
  children,
  to,
  setPosition,
}: {
  children: React.ReactNode;
  to: string;
  setPosition: any;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      ref={ref}
      to={to}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-xs font-semibold tracking-widest uppercase text-foreground mix-blend-difference transition-all"
    >
      {children}
    </Link>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-primary"
      style={{
        top: '4px',
      }}
    />
  );
};

export default NavHeader;
