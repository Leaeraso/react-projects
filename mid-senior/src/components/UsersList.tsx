import { SortBy, User } from "../types.d";

interface Props {
  showColors: boolean;
  users: User[];
  deleteUser: (email: string) => void;
  handleChangeSort: (sort: SortBy) => void;
}

export function UsersList({
  users,
  showColors,
  deleteUser,
  handleChangeSort,
}: Props) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Picture</th>
          <th className="pointer" onClick={() => handleChangeSort(SortBy.NAME)}>
            Name
          </th>
          <th
            className="pointer"
            onClick={() => handleChangeSort(SortBy.SURNAME)}
          >
            Surname
          </th>
          <th
            className="pointer"
            onClick={() => handleChangeSort(SortBy.COUNTRY)}
          >
            Country
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? "#333" : "#555";
          const color = showColors ? backgroundColor : "transparent";

          return (
            <tr key={user.email} style={{ backgroundColor: color }}>
              <td>
                <img
                  style={{ borderRadius: "50%" }}
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                />
              </td>
              <td>{user.name.first}</td>
              <td> {user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user.email);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
