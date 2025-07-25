import AppBar from "../components/appbar";
import Body from "../components/body";
import { getTodosAction } from "../actions/todoActions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await getTodosAction();

  return (
    <div className="m-2 flex flex-col h-screen ">
      <AppBar showTrailing={true}></AppBar>
      <Body items={todos}></Body>
    </div>
  );
}
