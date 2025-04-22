import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { SortBy, User } from "./types.d";
import { UsersList } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [showColors, setShowColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  const originalUsers = useRef<User[]>([]);

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === "string" && filterCountry.length > 0
      ? users.filter((user) =>
          user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        )
      : users;
  }, [users, filterCountry]);

  const sortedUsers = useMemo(() => {
    return sorting === SortBy.COUNTRY
      ? filteredUsers.toSorted((a, b) => {
          return a.location.country.localeCompare(b.location.country);
        })
      : filteredUsers;
  }, [filteredUsers, sorting]);
  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email);
    setUsers(filteredUsers);
  };

  const handleReset = () => {
    setUsers(originalUsers.current);
  };

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=100`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        originalUsers.current = data.results;
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Prueba técnica</h1>
      <header>
        <button onClick={toggleColors}>Color lines</button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.NONE ? "Sort by country" : "Not sorted"}
        </button>
        <button onClick={handleReset}>Reset State</button>

        <input
          type="text"
          value={filterCountry || ""}
          placeholder="Australia"
          onChange={(e) => setFilterCountry(e.target.value)}
        />
      </header>

      <main>
        <UsersList
          deleteUser={handleDelete}
          users={sortedUsers}
          showColors={showColors}
        />
      </main>
    </div>
  );
}

export default App;
