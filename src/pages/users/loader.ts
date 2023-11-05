import { LoaderFunction } from "react-router-dom";

import { queryClient } from "@/api/query-client";

import { usersQuery } from "@/queries/use-users-query";

export const loader: LoaderFunction = async () => {
  const query = usersQuery();

  return { users: await queryClient.ensureQueryData(query) };
};
