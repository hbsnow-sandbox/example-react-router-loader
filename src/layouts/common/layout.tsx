import { FC } from "react";

import { Link, Outlet } from "react-router-dom";

export const CommonLayout: FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};
