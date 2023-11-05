import { RouteObject } from "react-router-dom";

import { CommonLayout } from "@/layouts/common";
import { RootLayout } from "@/layouts/root";
import { loader as usersLoader } from "@/pages/users/loader";

// NOTE:
// lazyはなんのloadingかわかりにくくなるので、このサンプルでは使用していません
import HomePage from "@/pages";
import UsersPage from "@/pages/users";

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    errorElement: <>errorElement</>,
    children: [
      {
        path: "/",
        element: <CommonLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "users",
            loader: usersLoader,
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
];
