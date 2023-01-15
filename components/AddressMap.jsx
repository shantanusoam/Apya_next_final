import React from 'react';
const AddressMap = () => {
  return (
    <div className="responsive-map-container">
      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=APYA INDUSTRY&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="600"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};
export { AddressMap };
