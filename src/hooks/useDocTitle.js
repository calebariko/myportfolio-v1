import { useEffect } from 'react';

function useDocTitle (title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };

  export default useDocTitle
