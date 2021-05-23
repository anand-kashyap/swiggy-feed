import { useEffect } from 'react';

const useScroll = ({ setActiveSection }) => {
  useEffect(() => {
    const scroll = e => {
      console.log(window.scrollY);
      setActiveSection();
    }
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, []);
}

export default useScroll
