import { useEffect, useRef } from "react"
import gsap from "gsap"
import "../assets/css/Loader.css"

function Loader () {
    const loaderRef = useRef(null);

    useEffect(() => {
      const loader = loaderRef.current;
  
      const showTimeout = setTimeout(() => {
        
        gsap.fromTo(
          loader,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }, 300);
  
      return () => {
        clearTimeout(showTimeout)

        gsap.to(loader, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (loader) loader.style.display = "none";
          },
        });
      };
    }, []);

  return (
    <div ref={loaderRef} className="loader-wrapper">
      <div className="loader-spinner"></div>
    </div>
  )
}

export default Loader