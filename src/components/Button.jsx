import { useNavigate } from "react-router-dom";
import "../assets/css/Button.css";

function Button({ label, clickPath}) {
  const navigate = useNavigate();

  return (
    <>
      <button className="btn" onClick={() => navigate(clickPath)}>
        {label}
      </button>
    </>
  );
}

export default Button;
