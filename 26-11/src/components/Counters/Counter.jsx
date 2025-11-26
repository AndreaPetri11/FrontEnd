import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counterTest">
      <br></br>

      <button className="counter" onClick={() => setCount(count + 1)}>
        Incrementa
      </button>
      <button className="decrement" onClick={() => setCount(count - 1)}>
        Decrementa
      </button>
      <button className="reset" onClick={() => setCount(0)}>
        Resetta
      </button>
      <br></br>
      <br></br>
      <p>Hai cliccato {count} volte</p>
      <br></br>
      {(count == 10 || count == -10) && <p>sei arrivato a {count}</p>}
      <br></br>
    </div>
  );
}
export default Counter;
