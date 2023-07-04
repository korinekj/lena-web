import React from "react";

import * as styles from "./googleMap.module.scss";

function GoogleMap() {
  const { mapContainer, map } = styles;

  return (
    <div className={mapContainer}>
      <iframe
        className={map}
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651.0357771850443!2d15.186855829249938!3d49.2547333740433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470cd956c7093931%3A0x235368bab6e67987!2zxb1pxb5rb3ZhIDM3NiwgMzk0IDY4IMW9aXJvdm5pY2U!5e0!3m2!1scs!2scz!4v1673947033459!5m2!1scs!2scz'
        width='100%'
        height='300'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  );
}

export default GoogleMap;
