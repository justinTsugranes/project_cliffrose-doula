import { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { className } from '../../utils';

export function ScrollToTop() {
  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-[85px] right-[15px] z-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={className(
          isVisable ? 'opacity-100' : 'opacity-0 ',
          ' flex h-[60px] w-[60px] items-center justify-center bg-black text-white shadow-sm transition-all hover:bg-primary focus:outline-none'
        )}
        aria-label="Right Align">
        <FaIcons.FaChevronCircleUp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
