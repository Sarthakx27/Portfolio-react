import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loader = () => {
  let once = 1;
  useEffect(() => {
    while (once !== 0) {
      once = once - 1;
      gsap.from("h2 div", 1.5, {
        yPercent: 100,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });

      gsap.to("h2", 1.5, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });
    }
  }, []);

  
    let count = 1;

    const [flag, setFlag] =  useState(false);
    const loaderComponent = () => setFlag(true);  

    useEffect(() => {
      while (count !== 0 && flag) {
        count = count - 1;    
        
        gsap.to("h2 div", 1.5, {
          yPercent: -100,
          ease: "power4.inOut",
          stagger: {
            amount: 0.5,
          },
        });
        gsap.to(
          "h2",
          1.5,
          {
            clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
            ease: "power4.inOut",
            stagger: {
              amount: 0.5,
            },
          },
          0
        );

        gsap.to(".overlay", 2, {
          clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
          ease: "power4.inOut",
        });

        gsap.to(".img", 2, {
          clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
          ease: "power4.inOut",
          stagger: {
            amount: 1.5,
          },
        });

        gsap.to(".loader", 2, {
          clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
          ease: "power4.inOut",
          delay: 2,
        });
      }
    }, [flag]);
  

  return (
    <div className="loader-parent">
      <div className="loader">
        <div className="img">
          <img src="./assets/images/image1.jpg" alt="" />
        </div>
        <div className="img">
          <img src="./assets/images/image2.jpg" alt="" />
        </div>
        <div className="img"> 
          <img src="./assets/images/image3.png" alt="" />
        </div>
        <div className="img">
          <img src="./assets/images/image4.png" alt="" />
        </div>
        <div className="img">
          <img src="./assets/images/image5.jpg" alt="" />
        </div>
        <div className="img">
          <img src="./assets/images/image1.jpg" alt="" />
        </div>
        <div className="img">
          <img src="./assets/images/image2.jpg" alt="" />
        </div>
      </div>
      <div className="overlay" onClick={  loaderComponent}>
        <div className="col">
          <h2>
            <div>
              <span>Click</span> anywhere to continue
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
