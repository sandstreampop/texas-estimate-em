import React, { createElement as h } from "https://esm.sh/react@17.0.2";

interface AppProps {
  todos?: Todo[];
}
interface Todo {
  task: string;
}

function App({ todos = [] }: AppProps) {
  const [latestTodos, setLatestTodos] = React.useState<ListTodos>();

  React.useEffect(() => {
    const getTodos = async () => {
      const fetched = await fetch("/todos");
      const result = await fetched.json();
      console.log(result);
      setLatestTodos(result as ListTodos);
    };
    getTodos();
  }, []);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">ToDo's App</h1>
          <p className="lead">This is our simple todo app.</p>
          <ListTodos items={todos} />
        </div>
      </div>
    </div>
  );
}
interface ListTodos {
  items: Todo[];
}
function ListTodos({ items = [] }: ListTodos) {
  const [deletedIdxs, setDeletedIdxs] = React.useState<Array<number>>([]);

  return (
    <div>
      <ul className="list-group">
        {items.map((todo: any, index: number) => {
          const deleted = deletedIdxs.indexOf(index) !== -1;
          return (
            <li
              key={index}
              className="list-group-item"
              style={{ color: deleted ? "red" : "green" }}
            >
              {todo.task}
              <button
                type="button"
                className="ml-2 mb-1 close"
                aria-label="Close"
                onClick={() => setDeletedIdxs([...deletedIdxs, index])}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
