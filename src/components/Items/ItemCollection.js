import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { item_id } = useParams();

  const items = [1, 2, 3, 4, 5];

  const item = items.find((item) => item === Number(item_id));

  return <div className="item__collection">My Item Collections {item}</div>;
};
export default BookDetails;
