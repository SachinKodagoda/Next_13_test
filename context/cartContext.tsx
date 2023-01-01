"use client";
import React, { useMemo, useState } from "react";

type TProps = {
  children: JSX.Element;
};

interface IContext {
  cartItems: number;
  addToCart: (items: number) => void;
}

export const CartCtx = React.createContext<IContext>({
  cartItems: 0,
  addToCart: () => false,
});

const CartCtxProvider = ({ children }: TProps): React.ReactElement => {
  const [cartItems, setCartItems] = useState(0);
  const addToCart = (items: number) => {
    setCartItems((a) => items + a);
  };

  const contextFns = {
    addToCart,
  };

  const ctxValues = useMemo(
    () => ({
      cartItems,
    }),
    [cartItems]
  );

  return (
    <CartCtx.Provider
      value={{
        ...ctxValues,
        ...contextFns,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export default CartCtxProvider;
