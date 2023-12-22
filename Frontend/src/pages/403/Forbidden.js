import { useNavigate } from "react-router-dom";
import "./Forbidden.css";

function Forbidden() {
  const navigate = useNavigate();
  return (
    <div className="forbiddenContainer">
      <h1>403</h1>
      <h2>Access Denied!</h2>
      <p>Sorry, You don't have permission to acces this page!</p>
      <button
        className="forbiddenButton"
        onClick={() => navigate("/", { replace: true })}
      >
        Go Home
      </button>
    </div>
  );
}

export default Forbidden;
