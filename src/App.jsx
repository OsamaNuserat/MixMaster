import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Landing,
  Newsletter,
  About,
  Cocktail,
  Error,
  HomeLayout,
  SinglePageError
} from "./Pages";

import { loader as landingLoader } from "./Pages/Landing";
import {loader as singleCocktailLoader} from './Pages/Cocktail'
import {action as newsletterAction} from './Pages/Newsletter'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, loader: landingLoader(queryClient) , errorElement: <SinglePageError />},
      { path: "newsletter", element: <Newsletter />, action:newsletterAction},
      { path: "cocktail/:id", element: <Cocktail /> , errorElement: <SinglePageError /> , loader: singleCocktailLoader(queryClient) },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <QueryClientProvider client={queryClient}> 
  <RouterProvider router={router} />;
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
};
export default App;
