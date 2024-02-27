import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <Link to="/">Accueil</Link>
        <Link to="/welcome/Gabriel">Welcome</Link>
        <Link to="/pokemons/new">Créer un pokémon</Link>
      </nav>
      <div style={{ padding: 10 }}>
        <Outlet />
      </div>
    </>
  );
}
