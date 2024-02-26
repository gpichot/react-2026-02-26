import "./App.css";
import Produit from "./components/Produit";

const produits = [
  {
    nom: "Croissant",
    prix: 1.2,
    description: (
      <>
        Mon <strong>super</strong> croissant
      </>
    ),
  },
  {
    nom: "Chocolat",
    prix: 1.3,
  },
];

function App() {
  return (
    <>
      <h1 id="titre">Boulangerie</h1>
      {produits.map((produit) => (
        <Produit key={produit.nom} nom={produit.nom} prix={produit.prix}>
          {produit.description}
        </Produit>
      ))}
    </>
  );
}

export default App;
