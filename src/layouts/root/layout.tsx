import { FC } from "react";

import { Outlet, ScrollRestoration } from "react-router-dom";

export const RootLayout: FC = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};
