import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode, useEffect } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";


interface SmoothScrollingProps {
  children: ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  const lenisOptions = {
    lerp: 0.07, // More inertia, closer to Orb AI/Framer
    duration: 1.2,
    smooth: true,
    smoothTouch: true,
  };
  useEffect(() => {
    document.documentElement.classList.add('lenis');
    return () => {
      document.documentElement.classList.remove('lenis');
    };
  }, []);
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}