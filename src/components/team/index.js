import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';

function Team({ teamItems }) {
  const teamMemberImage = `relative before:hover:absolute before:hover:bg-[#111111] before:hover:w-full before:hover:h-full before:hover:top-0 before:hover:left-0 before:opacity-[0.5] before:duration-500 before:pointer-events-none before:z-[1]`;

  return (
    <div className="team-area border-b border-[#dfdfdf] py-[55px] md:py-155">
      <div className="container">
        <h2 className="mb-[60px] text-[32px] lm:text-[42px] lm:leading-[50px]">
          Profressional & Passionate
        </h2>
        <div className="grid gap-[30px] fixed-md:gap-x-[30px] sm:grid-cols-12 lg:gap-x-[70px]">
          {teamItems?.map((teamItem) => {
            const TwitterIcon = FaIcons[teamItem?.twitterIcon];
            const FacebookIcon = FaIcons[teamItem?.facebookIcon];
            const InstagramIcon = FaIcons[teamItem?.instagramIcon];
            const LinkedinIcon = FaIcons[teamItem?.linkedinIcon];

            return (
              <div
                className="fixed-sm:col-span-6 fixed-lm:col-span-6 md:col-span-4"
                key={teamItem.id}>
                <div className="team-member group overflow-hidden">
                  <div className={teamMemberImage}>
                    <Link href="/about" legacyBehavior>
                      <Image
                        src={teamItem?.image}
                        alt={teamItem?.title}
                        width={343}
                        height={409}
                        className="responsive-img object-cover"
                        quality={70}
                        priority
                        style={{
                          maxWidth: '100%',
                          height: 'auto'
                        }}
                      />
                    </Link>
                    <div className="team-social-wrap absolute bottom-[15px] right-[-175px] z-[1] duration-500 group-hover:right-[20px]">
                      <ul className="team-social flex rounded-[2px] bg-white p-[15px] text-[#999999]">
                        <li className="mr-[20px] duration-300 hover:text-black">
                          <Link href="https://twitter.com/" target="_blank" legacyBehavior>
                            <TwitterIcon />
                          </Link>
                        </li>
                        <li className="mr-[20px] duration-300 hover:text-black">
                          <Link href="https://facebook.com/" target="_blank" legacyBehavior>
                            <FacebookIcon />
                          </Link>
                        </li>
                        <li className="mr-[20px] duration-300 hover:text-black">
                          <Link href="https://www.instagram.com/" target="_blank" legacyBehavior>
                            <InstagramIcon />
                          </Link>
                        </li>
                        <li className="duration-300 hover:text-black">
                          <Link href="https://linkedin.com/" target="_blank" legacyBehavior>
                            <LinkedinIcon />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-member-content pt-[25px]">
                    <h3>
                      <Link
                        href="/about"
                        className="text-[24px] leading-[31px] transition-all hover:text-[#caac6b]"
                        legacyBehavior>
                        {teamItem?.memberName}
                      </Link>
                    </h3>
                    <span className="designation mt-[5px] block text-[14px] leading-6 text-secondary">
                      {teamItem?.designation}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Team.propTypes = {
  teamItems: PropTypes.instanceOf(Object).isRequired
};

export default Team;
