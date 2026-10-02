import type { UnknownAction } from "redux";
import { DECREMENT, INCREMENT, RESET, type CounterAction } from "../actions/counterActions";

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterReducer = (
  state = initialState,
  action: CounterAction | UnknownAction,
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
