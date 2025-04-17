import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useLoadPage () {
  const location = useLocation();
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [location]);

  return loading;
};

export default useLoadPage;
