import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/actions/counterActions";
import type { AppDispatch, RootState } from "../store/store";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className={styles.counterContainer} aria-label="Redux counter">
      <h2>Counter: {count}</h2>
      <div className={styles.controls}>
        <button onClick={() => dispatch(increment())} aria-label="Increment counter">+</button>
        <button onClick={() => dispatch(decrement())} aria-label="Decrement counter">−</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
