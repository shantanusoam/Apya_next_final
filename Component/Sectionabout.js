import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import ph1 from '../Images/uwp478478.jpeg';
import ph2 from '../Images/uwp478482.jpeg';

import ph3 from '../Images/uwp478489.jpeg';

import Image from 'next/image';
const sectionAbout = () => {
  return (
    <section class="section-about">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">FABRIC THAT LASTS LONGER</h2>
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <h3 class="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with what you wear
          </h3>
          <p class="paragraph">
            Incepted in the year 2019 at Meerut (Uttar Pradesh, India), we “Apya
            Industry” are a Sole Proprietorshipfirm engaged in Manufacturer and
            Wholesale Retailer a top quality range of Mens Sports Tracksuit,
            Mens Cricket Uniform, Men T Shirts, etc
          </p>

          <h3 class="heading-tertiary u-margin-bottom-small">
            Play adventures like you never have before
          </h3>
          <p class="paragraph">
            Under the able guidance of, “Mr. Sumit Singh Shom" (Proprietor), who
            helps us comprehend client’s exact requirements.
          </p>

          <a href="/#" class="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            <Image
              src={ph3}
              alt="Photo 1"
              class="composition__photo composition__photo--p1"
            />
            <Image
              src={ph2}
              alt="Photo 2"
              class="composition__photo composition__photo--p2"
            />
            <Image
              src={ph1}
              alt="Photo 3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default sectionAbout;
