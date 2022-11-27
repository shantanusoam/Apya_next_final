import React from 'react';
import { urlFor } from '../../lib/client';
const Testimonials = ({ testimonialData }) => {
  return (
    <section class="Testomonial-about">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Testimonial Section</h2>
      </div>
      {testimonialData.map((testimonial) => (
        <div class="row testimonials_Main">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">
              {testimonial.name}
            </h3>
            <p class="paragraph">{testimonial.description}</p>

            <h3 class="heading-tertiary u-margin-bottom-small">
              Play adventures like you never have before
            </h3>
            <p class="paragraph">
              Under the able guidance of, “Mr. Sumit Singh Shom" (Proprietor),
              who helps us comprehend client’s exact requirements.
            </p>

            <a href="/#" class="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div class="col-1-of-2">
            <div class="Testimocomposition">
              {
                <img
                  src={urlFor(testimonial.image[0])}
                  alt="Photo 1"
                  class="Testimocomposition__photo Testimocomposition__photo--p1"
                />
              }

              {testimonial.image[1] ? (
                <img
                  src={urlFor(testimonial.image[1])}
                  alt="Photo 2"
                  class="Testimocomposition__photo Testimocomposition__photo--p2"
                />
              ) : null}
              {testimonial.image[2] ? (
                <img
                  src={urlFor(testimonial.image[2])}
                  alt="Photo 3"
                  class="Testimocomposition__photo Testimocomposition__photo--p3"
                />
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
