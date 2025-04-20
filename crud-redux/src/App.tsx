import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers.tsx";
import { CreateUser } from "./components/CreateUser.tsx";

function App() {
  return (
    <>
      <ListOfUsers />
      <CreateUser />
    </>
  );
}

export default App;
