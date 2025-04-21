import { User } from "../types";

interface Props {
  users: User[];
}

export function UsersList({ users }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id.value}>
              <td>
                <img
                  style={{}}
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                />
                {user.name.first} {user.name.last}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
