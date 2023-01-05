import '@common_style/globals.css';
import ProductCtxProvider from '../context/cartContext';

type TProp = {
  children: JSX.Element;
};

export default function RootLayout({ children }: TProp) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ProductCtxProvider>{children}</ProductCtxProvider>
      </body>
    </html>
  );
}
