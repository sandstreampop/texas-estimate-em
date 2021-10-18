/// <reference path="./deploy.d.ts" />

import React, {
  createElement as h,
  useState,
} from "https://esm.sh/react@17.0.2";
import * as ReactDOMServer from "https://esm.sh/react-dom@17.0.2/server";

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
  const [counter, setCounter] = useState<number>(0);

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
            <tbody>{counter}</tbody>
          </table>
        </div>
        <button onClick={() => setCounter((count) => count + 1)}></button>
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
