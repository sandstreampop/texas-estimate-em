/// <reference path="./deploy.d.ts" />

import * as React from "https://esm.sh/react@17.0.2";
import * as ReactDOMServer from "https://esm.sh/react-dom@17.0.2/server";

import { createElement as h } from "https://esm.sh/react@17.0.2";

interface Package {
  name: string;
  description: string;
  github: string;
  stars: number;
}

interface Props {
  packages: Package[];
}

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <title>Hello from JSX</title>
      </head>
      <body>
        <div className="container">
          <h1>Hello, World!</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Stars</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </body>
    </html>
  );
}

addEventListener("fetch", (event: FetchEvent) => {
  // Render React components to a string.
  const str = ReactDOMServer.renderToString(<App />);

  // Prepend the DOCTYPE for better compatibility.
  const body = `<!DOCTYPE html>${str}`;

  const response = new Response(body, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });

  event.respondWith(response);
});
