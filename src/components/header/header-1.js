import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { OffcanvasData } from './offcanvas-data';
import { logoLogoTwo } from '../../../public';
import WhiteLogo from './white-logo';

function HeaderOne() {
  const [offcanvas, setOffcanvas] = useState(false);
  const showOffcanvas = () => setOffcanvas(!offcanvas);

  // Header Sticky Activation
  const header = useRef();

  useEffect(() => {
    window.addEventListener('scroll', isSticky);

    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;

    scrollTop >= 90
      ? header.current?.classList.add('is-sticky')
      : header.current?.classList.remove('is-sticky');
  };

  const router = useRouter();
  const headerCss = `flex lg:justify-between justify-end items-center`;

  return (
    <>
      <header className="absolute z-10 w-full">
        <div className="sticky-holder header-section sticky-style-1" ref={header}>
          <div className="custom-container container">
            <div className="grid grid-cols-12 items-center leading-[120px]">
              <div className="col-span-6 lg:col-span-2">
                <WhiteLogo />
              </div>
              <div className="hidden lg:col-span-7 lg:block">
                <nav>
                  <ul className="main-menu text-white">
                    <li className={router.pathname === '/' ? 'active' : ''}>
                      <Link href="/" legacyBehavior>
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className={router.pathname === '/about' ? 'active' : ''}>
                      <Link href="/about" legacyBehavior>
                        <span>About</span>
                      </Link>
                    </li>
                    <li className={router.pathname === '/projects' ? 'active' : ''}>
                      <Link href="/projects" legacyBehavior>
                        <span>Projects</span>
                      </Link>
                    </li>
                    <li className={router.pathname === '/posts' ? 'active' : ''}>
                      <Link href="/posts" legacyBehavior>
                        <span>Posts</span>
                      </Link>
                    </li>
                    <li className={router.pathname === '/contact' ? 'active' : ''}>
                      <Link href="/contact" legacyBehavior>
                        <span>Contact</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <div className={`outer-box ${headerCss}`}>
                  <ul className="language-list text-white">
                    <li>
                      <Link href="/">END</Link>
                    </li>
                    <li>
                      <Link href="/">FRA</Link>
                    </li>
                  </ul>
                  <div className="offcanvas-area">
                    <div className="offcanvas">
                      <button
                        type="button"
                        className="menu-bars flex text-[24px] text-white"
                        aria-label="Right Align">
                        <FaBars onClick={showOffcanvas} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="offcanvas-menu-holder" onClick={showOffcanvas}>
        <div className={offcanvas ? 'offcanvas-menu-wrap active' : 'offcanvas-menu-wrap'}>
          <nav className="offcanvas-menu" onClick={(e) => e.stopPropagation()}>
            <ul className="offcanvas-menu-items">
              <li className="navbar-toggle flex items-center justify-between pb-[15px]">
                <div className="logo" onClick={showOffcanvas}>
                  <Link href="/" legacyBehavior>
                    <Image
                      src={logoLogoTwo}
                      alt="Logo"
                      width={70}
                      height={70}
                      as="image"
                      priority
                      loading="eager"
                      style={{
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                    />
                  </Link>
                </div>
                <button
                  type="button"
                  className="menu-bars text-[24px] opacity-80 transition-all hover:opacity-50"
                  aria-label="Right Align">
                  <AiOutlineClose onClick={showOffcanvas} />
                </button>
              </li>
              {OffcanvasData.map((item) => (
                <li key={item.id} className={item.cName}>
                  <Link href={item.path} legacyBehavior>
                    <span onClick={showOffcanvas}>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderOne;
