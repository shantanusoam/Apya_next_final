import React from 'react';
import Link from 'next/link';
import { animateScroll as scroll, Link as SLink } from 'react-scroll';
import { urlFor } from '../lib/client';
import { AddressMap } from '../components/AddressMap';
const FooterAp = () => {
  return (
    <footer class="footer">
      <div class="footer__logo-box">
        <img
          src="https://raw.githubusercontent.com/shantanusoam/new-ecommerce/main/apya/Images/APYAINDUSTRY.png"
          alt="Full logo"
          class="footer__logo"
        />
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="/#" class="footer__link">
                  Company
                </a>
              </li>
              <li class="footer__item">
                <a href="/#" class="footer__link">
                  Contact us
                </a>
                <li class="footer__navigation">
                  <li class="footer__item">
                    <a href="mailto:contact@apya.com" class="footer__link">
                      contact@apya.com
                    </a>
                  </li>
                  <li class="footer__item">
                    <a
                      href="https://www.google.com/maps/place/APYA+INDUSTRY/@28.9541822,77.687969,15z/data=!4m9!1m2!2m1!1sAPYA+INDUSTRY!3m5!1s0x390c653ca8ae287d:0x9e1b9433a738a883!8m2!3d28.9531196!4d77.6935775!15sCg1BUFlBIElORFVTVFJZWg8iDWFweWEgaW5kdXN0cnmSARZzcG9ydHdlYXJfbWFudWZhY3R1cmVy"
                      class="footer__link"
                    >
                      Sector 4, 4/141, Madhav Puram, Meerut-250002, Uttar
                      Pradesh, India
                    </a>
                  </li>
                  <br></br>
                  <li class="footer__item">
                    <a href="tel:919150888833" class="footer__link">
                      +91 9150888833
                    </a>
                  </li>
                </li>
              </li>
            </ul>
            <AddressMap></AddressMap>
            <ul className="footer__navigation">
              <br></br>
              <li class="footer__item">
                <SLink
                  to={`Product-section`}
                  scroll={true}
                  class="footer__link"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact={true}
                >
                  <a href="/sizeChart" class="footer__link">
                    Products
                  </a>
                </SLink>
              </li>

              <li class="footer__item">
                <a href="/sizeChart" class="footer__link">
                  Size Chart
                </a>
              </li>
              <li class="footer__item">
                <a href="/sizeChart" class="footer__link">
                  Privacy policy
                </a>
                {/* <a href="/#" class="footer__link">
                  
                </a> */}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Built by{' '}
            <a href="/#" class="footer__link">
              Shantanu soam
            </a>{' '}
            for Apya Industry
            <a href="/#" class="footer__link">
              E commerce portfolio
            </a>
            . Copyright &copy; by Apya Industry
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterAp;
