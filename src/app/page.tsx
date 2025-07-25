import AppBar from "./components/appbar";
import Body from "./components/body";
import { addTodoAction, getTodosAction } from "./actions/todoActions";

export default async function Home() {
  const todos = await getTodosAction();

  return (
    <div className="m-2 flex flex-col h-screen ">
      <AppBar></AppBar>
      <Body items={todos}></Body>
    </div>
  );
}
