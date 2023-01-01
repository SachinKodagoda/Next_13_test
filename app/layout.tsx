import ProductCtxProvider from "../context/cartContext";
import "../styles/globals.css";

type TProp = {
  children: JSX.Element;
};

export default function RootLayout({ children }: TProp) {
  return (
    <html lang="en">
      <head />
      <body>
        <ProductCtxProvider>{children}</ProductCtxProvider>
      </body>
    </html>
  );
}
