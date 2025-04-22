import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.jsx";
import Login from "./Login.jsx";
import { useDispatch } from "react-redux";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
