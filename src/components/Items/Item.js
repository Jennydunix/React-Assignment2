import { useLocation, useNavigate } from "react-router-dom";

const Item = ({ number }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <div>
      <li
        className="item__library"
        onClick={() => navigate(`${pathname}/${number}`)}
      >
        Item {number}
      </li>
    </div>
  );
};
export default Item;
