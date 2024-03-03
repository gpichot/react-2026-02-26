import React from "react";

interface CounterContextType {
  count: number;
  setCount: (newCount: number) => void;
}

const CounterContext = React.createContext<CounterContextType | undefined>(
  undefined
);

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(() => {
    const value = Number(localStorage.getItem("counter"));
    return isNaN(value) ? 0 : value;
  });

  const update = (newCount: number) => {
    setCount(newCount);
    localStorage.setItem("counter", newCount.toString());
  };

  React.useEffect(() => {
    const handle = (event: StorageEvent) => {
      if (event.key !== "counter") return;
      setCount(Number(event.newValue));
    };
    window.addEventListener("storage", handle);
    return () => window.removeEventListener("storage", handle);
  }, []);

  return (
    <CounterContext.Provider value={{ count, setCount: update }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  const context = React.useContext(CounterContext);

  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }

  return context;
}
