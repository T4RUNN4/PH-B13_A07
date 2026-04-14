import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import TimeLine from "./pages/TimeLine";
import Status from "./pages/Status";
import TabProvider from "./context/CurrentTabContext";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TabProvider>
      <RouterProvider router={rounter}></RouterProvider>
    </TabProvider>
  </StrictMode>,
);
