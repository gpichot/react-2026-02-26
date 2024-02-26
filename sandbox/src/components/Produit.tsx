import styles from "./Produit.module.scss";

interface ProduitProps {
  nom: string;
  prix: number;
  children?: React.ReactNode;
}

export default function Produit(props: ProduitProps) {
  const { nom, prix, children } = props;
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("enter", e);
  };

  const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("leave", e);
  };

  return (
    <div
      className={styles.carteProduit}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p>{nom}</p>
      <p>
        <strong>{prix.toFixed(2)}</strong>
      </p>
      {children && <>Description: {children}</>}
    </div>
  );
}
