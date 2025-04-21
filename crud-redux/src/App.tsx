import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers.tsx";
import { CreateUser } from "./components/CreateUser.tsx";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <ListOfUsers />
      <CreateUser />
      <Toaster richColors />
    </>
  );
}

export default App;
