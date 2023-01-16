import { useState } from "react";



export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    if (replace) {
      setMode(newMode)
      history.pop()
      history.push(newMode)

      setHistory(history);
    } else {
      setMode(newMode);
      history.push(newMode);
      setHistory(history);
    }
    return;
  }
  function back() {
    if (history.length === 1) {
      return;
    }
    const currentMode = history.pop();
    const lastIndex = history.length - 1;
    const lastMode = history[lastIndex];
    setMode(lastMode);
    setHistory(history);
    return;
  }

  return { mode, transition, back };
}
