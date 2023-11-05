import { ComponentProps, FC, Suspense } from "react";

import { RouterProvider } from "react-router-dom";

type Props = {
  router: ComponentProps<typeof RouterProvider>["router"];
};

export const App: FC<Props> = (props) => {
  const { router } = props;

  return (
    <Suspense fallback={<>Suspense fallback</>}>
      <RouterProvider
        router={router}
        fallbackElement={<>RouterProvider fallbackElement</>}
      />
    </Suspense>
  );
};
