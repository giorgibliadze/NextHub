"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
} from "react";

const LanguageStateContext = createContext(null);

export function LanguageStateProvider({ children }) {
  const valuesRef = useRef(new Map());

  const store = useMemo(
    () => ({
      get(key, initialValue) {
        if (!valuesRef.current.has(key)) {
          valuesRef.current.set(key, initialValue);
        }

        return valuesRef.current.get(key);
      },
      set(key, value) {
        valuesRef.current.set(key, value);
      },
    }),
    [],
  );

  return (
    <LanguageStateContext.Provider value={store}>
      {children}
    </LanguageStateContext.Provider>
  );
}

export function useLanguageState(key, initialValue) {
  const store = useContext(LanguageStateContext);
  const [, rerender] = useReducer((count) => count + 1, 0);

  if (!store) {
    throw new Error("useLanguageState must be used inside LanguageStateProvider");
  }

  const value = store.get(key, initialValue);
  const setValue = useCallback(
    (nextValue) => {
      const currentValue = store.get(key, initialValue);
      const resolvedValue =
        typeof nextValue === "function" ? nextValue(currentValue) : nextValue;

      store.set(key, resolvedValue);
      rerender();
    },
    [initialValue, key, store],
  );

  return [value, setValue];
}
