import { UsersResponse } from "@/types";

import { useQuery } from "@tanstack/react-query";

export const queryKey = () => ["https://example.com/api/v1/users"] as const;

export const usersQuery = () => {
  return {
    queryKey: queryKey(),
    queryFn: async () => {
      const res = await fetch("https://example.com/api/v1/users", {
        headers: { "Content-Type": "application/json" },
      });
      const json: UsersResponse = await res.json();
      return json;
    },
  };
};

/**
 * GET /v1/users
 */
export const useUsersQuery = ({
  initialData,
}: {
  initialData: UsersResponse;
}) => {
  return useQuery<UsersResponse>({
    ...usersQuery(),
    initialData,
  });
};
