import "./App.css";
import PokemonList from "./features/pokemons/components/PokemonList";
import PokemonForm from "./features/pokemons/components/PokemonForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./pages/Layout";
import PokemonDetailsPage from "./features/pokemons/pages/PokemonDetailsPage";
import { CounterProvider } from "./CounterContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <PokemonList />
              <PokemonList />
            </>
          ),
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
  return (
    <CounterProvider>
      <RouterProvider router={router} />
    </CounterProvider>
  );
}

export default App;
