import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
  type LinksFunction,
} from 'react-router-dom';
import { Provider } from '@components';

import { AppLayout } from '@components';
import { BlocksProvider } from './providers/blocks.tsx';
import { Theme } from '@chakra-ui/react';

export const meta: MetaFunction = () => [
  {
    title: 'New Nx React Router App',
  },
];

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider>
          <Theme appearance="light">
            <AppLayout>
              <BlocksProvider>{children}</BlocksProvider>
            </AppLayout>
            <ScrollRestoration />
            <Scripts />
          </Theme>
        </Provider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
