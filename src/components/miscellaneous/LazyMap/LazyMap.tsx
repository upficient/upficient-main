"use client";
import { useEffect, useState } from "react";

const LazyMap = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadMap(true);
        }
      },
      { threshold: 0.1 }
    );

    const mapPlaceholder = document.getElementById("map-placeholder");
    if (mapPlaceholder) observer.observe(mapPlaceholder);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="map-placeholder" style={{ width: "100%", height: "300px" }}>
      {loadMap ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d396005.4225867738!2d-75.524212!3d39.156704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fcc462ab79e5%3A0x91780b13d0c87d54!2sA%20Registered%20Agent%2C%20Inc.!5e0!3m2!1sen!2sus!4v1732905832452!5m2!1sen!2sus"
          width="100%"
          height="300px"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Loading Map...</p>
        </div>
      )}
    </div>
  );
};
export default LazyMap;
