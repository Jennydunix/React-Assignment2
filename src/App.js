import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import Header from "./components/Header";
import useFetch from "./components/UseFetch";

const Home = lazy(() => import("./components/HomePage"));
const ItemsHome = lazy(() => import("./components/Items/ItemsHome"));
const UsersHome = lazy(() => import("./components/Users/MyUserHome"));
const Users = lazy(() => import("./components/Users/MyUsers"));
const UserDetails = lazy(() => import("./components/Users/MyUserInfo"));

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary}>Reset App</button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const { isLoading, fetchRequest } = useFetch();

  useEffect(() => {
    const getData = (data) => {
      setData(data);
    };

    fetchRequest(
      {
        url: "https://randomuser.me/api/1.4/?results=50"
      },
      getData
    );
  }, [fetchRequest]);

  return (
    <div className="app">
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}
      >
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/items/*" element={<ItemsHome />} />

            <Route path="/users" element={<UsersHome />}>
              <Route
                path=""
                element={<Users users={data} isLoading={isLoading} />}
              />

              <Route path=":id" element={<UserDetails users={data} />} />
            </Route>

            <Route path="*" element={<div className="error">Error Page</div>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default App;
