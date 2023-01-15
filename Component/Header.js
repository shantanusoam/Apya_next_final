import React from 'react';
import apya from '../Images/APYAINDUSTRY.png';
import { animateScroll as scroll, Link } from 'react-scroll';
import { urlFor } from '../lib/client';
import Image from 'next/image';
const Header = () => {
  return (
    <header class="header">
      <div class="header__logo-box">
        <Image src={apya} alt="Logo" height={50} width={50} />
      </div>

      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Apya</span>
          <span class="heading-primary--sub">SERVE THE PURPOSE</span>
        </h1>

        <Link
          to="section-tours"
          smooth={true}
          duration={1000}
          spy={true}
          exact={true}
          className="btn btn--white btn--animated"
        >
          Discover
        </Link>
      </div>
    </header>
  );
};

export default Header;
