import { useParams } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";
import { useCounterContext } from "../CounterContext";

export default function Welcome() {
  const params = useParams();
  const { name } = params;
  // const [count, setCount] = useState(0);
  const { count, setCount } = useCounterContext();

  const width = useWindowWidth();

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment ({count})
      </button>
      <h1>Bonjour {name}</h1>
      <div>Hauteur fenêtre : {width}</div>
    </>
  );
}
