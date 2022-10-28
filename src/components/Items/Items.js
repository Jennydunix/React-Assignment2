import Item from "./Item";

const Items = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <ul className="item__lists">
      {items.map((num) => (
        <Item number={num} key={num} />
      ))}
    </ul>
  );
};
export default Items;
