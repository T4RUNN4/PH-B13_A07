import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import TimeLine from "./pages/TimeLine";
import Status from "./pages/Status";
import TabProvider from "./context/CurrentTabContext";
import FriendDetails from "./pages/FriendDetails";
import TimeLineProvider from "./context/TimeLineContext";
import { ToastContainer } from "react-toastify";

const rounter = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/timeline",
        Component: TimeLine,
      },
      {
        path: "/status",
        Component: Status,
      },
      {
        path: "/friend/:id",
        Component: FriendDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimeLineProvider>
      <TabProvider>
        <RouterProvider router={rounter}></RouterProvider>
      </TabProvider>
    </TimeLineProvider>
    <ToastContainer />
  </StrictMode>,
);
