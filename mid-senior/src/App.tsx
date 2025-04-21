import { useEffect, useState } from "react";
import "./App.css";
import { User } from "./types.d";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=100`)
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Prueba técnica</h1>
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
