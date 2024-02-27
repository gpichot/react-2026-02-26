import "./App.css";
import PokemonList from "./features/pokemons/components/PokemonList";
import PokemonForm from "./features/pokemons/components/PokemonForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./pages/Layout";
import PokemonDetailsPage from "./features/pokemons/pages/PokemonDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <PokemonList />,
        },
        {
          path: "/welcome/:name",
          element: <WelcomePage />,
        },
        {
          path: "/pokemons/new",
          element: <PokemonForm />,
        },
        {
          path: "/pokemons/:id",
          element: <PokemonDetailsPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
