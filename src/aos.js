import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
}

export default Animation
