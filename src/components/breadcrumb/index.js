import Link from 'next/link';
import PropTypes from 'prop-types';

function Breadcrumb(props) {
  const { activePage, pageTitle } = props;
  return (
    <div className="breadcrumb-area pt-[55px] md:pt-155">
      <div className="container">
        <ul className="flex text-[18px] uppercase leading-6">
          <li className='relative text-[#999999] after:ml-[15px] after:pr-[15px] after:content-["/"]'>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects" legacyBehavior>
              {activePage}
            </Link>
          </li>
        </ul>
        <h1 className="mt-[45px] text-[36px] lm:text-[60px] lm:leading-[60px]">{pageTitle}</h1>
      </div>
    </div>
  );
}

Breadcrumb.propTypes = {
  activePage: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired
};

export default Breadcrumb;
