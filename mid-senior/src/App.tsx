import { useMemo, useState } from "react";
import "./App.css";
import { SortBy, User } from "./types.d";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

function App() {
  const { isLoading, isError, users, refetch, fetchNextPage, hasNextPage } =
    useUsers();

  const [showColors, setShowColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

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
    if (sorting === SortBy.NONE) return filteredUsers;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.SURNAME]: (user) => user.name.last,
      [SortBy.COUNTRY]: (user) => user.location.country,
    };

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting];
      return extractProperty(a).localeCompare(extractProperty(b));
    });
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
    // const filteredUsers = users.filter((user) => user.email !== email);
    // return [...users, ...filteredUsers];
  };

  const handleReset = async () => {
    await refetch();
  };

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort);
  };

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
        {users.length > 0 && (
          <UsersList
            deleteUser={handleDelete}
            users={sortedUsers}
            showColors={showColors}
            handleChangeSort={handleChangeSort}
          />
        )}

        {isLoading && <p>Loading...</p>}

        {isError && <p>Something went wrong</p>}

        {!isLoading && !isError && users.length === 0 && <p>No users found</p>}

        {!isLoading && !isError && hasNextPage && (
          <button onClick={() => fetchNextPage()}>Load more</button>
        )}
      </main>
    </div>
  );
}

export default App;
