import { Route, Routes } from "react-router-dom";
import ItemCollection from "./ItemCollection";
import Items from "./Items";

const ItemsHome = (props) => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Items />} />
        <Route path=":book_id" element={<ItemCollection />} />
      </Routes>
    </div>
  );
};
export default ItemsHome;
