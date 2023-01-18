import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode)
    if (replace) {
      
      setHistory((prev) => {
        const newHistory = [...prev]
        newHistory.pop()
        newHistory.push(newMode)

        return newHistory
      });
    } else {
      
      setHistory((prev) => {

        return [...prev, newMode]

      })

    }

    return;
  }
  function back() {
    const newHistory = [...history]
    if (newHistory.length === 1) {
      return;
    }

    newHistory.pop();
    const lastIndex = newHistory.length - 1;
    const lastMode = newHistory[lastIndex];
    setMode(lastMode);
    setHistory(newHistory);
    return;
  }

  return { mode, transition, back };
}
