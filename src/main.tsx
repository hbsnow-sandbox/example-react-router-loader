import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import { routes } from "./routes";
import { App } from "@/_app";
import { queryClient } from "@/api/query-client";

import "@/index.css";

const main = async () => {
  const { setupWorker } = await import("msw/browser");
  const { handlers } = await import("@/mocks/handlers");

  const worker = setupWorker(...handlers);
  await worker.start();

  const root = document.getElementById("root");
  if (root == null) {
    throw new Error("Failed to find the root element");
  }

  const router = createBrowserRouter(routes);

  createRoot(root).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
};

main();
