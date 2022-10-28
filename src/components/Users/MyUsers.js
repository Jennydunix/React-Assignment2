import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import MyUser from "./MyUser";

const userPerPage = 5;

const MyUsers = ({ users, isLoading }) => {
  const [start, setStart] = useState(0);
  const end = start + userPerPage;

  const changePage = (page) => {
    setStart((page - 1) * userPerPage);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="user__ul">
        {users.slice(start, end).map((myuser, index) => (
          <MyUser name={myuser.name} email={myuser.email} key={index} />
        ))}
      </ul>
      <Pagination
        totalUsers={users.length}
        usersPerPage={userPerPage}
        onChange={changePage}
      />
    </div>
  );
};
export default MyUsers;
