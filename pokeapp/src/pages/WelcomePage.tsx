import { useParams } from "react-router-dom";

export default function Welcome() {
  const params = useParams();
  const { name } = params;

  return (
    <>
      <h1>Bonjour {name}</h1>
    </>
  );
}
