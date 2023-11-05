import { FC } from "react";

import { useLoaderData } from "react-router-dom";

import { UsersResponse } from "@/types";
import { useUsersQuery } from "@/queries/use-users-query";

type LoaderData = {
  users: UsersResponse;
};

export const Page: FC = () => {
  const initialData = useLoaderData() as LoaderData;

  const { data } = useUsersQuery({
    initialData: initialData.users,
  });

  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
