import { http, HttpResponse, HttpHandler, delay } from "msw";

export const handlers: HttpHandler[] = [
  http.get("https://example.com/api/v1/users", async () => {
    await delay(3000);

    return HttpResponse.json({
      users: [
        { name: "User A" },
        { name: "User B" },
        { name: "User C" },
        { name: "User D" },
      ],
    });
  }),
];
