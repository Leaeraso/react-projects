import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useAppSelector } from "../hooks/store";
import { useUsersActions } from "../hooks/useUsersActions";
import { Card } from "./ui/card";
import { useState } from "react";
import { UserWithId } from "@/store/users/slice";
import { Input } from "./ui/input";
export function ListOfUsers() {
  const users = useAppSelector((state) => state.users);
  const { handleRemoveUser, handleUpdateUser } = useUsersActions();
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editedUser, setEditedUser] = useState({ name: "", email: "" });

  const startEditing = (user: Partial<UserWithId>) => {
    setEditingUserId(user.id!);
    setEditedUser({ name: user.name!, email: user.email! });
  };

  const saveChanges = (id: string) => {
    handleUpdateUser({ id, github: editedUser.name, ...editedUser });
    setEditingUserId(null);
  };

  return (
    <>
      <Card className="p-8 my-4">
        <div className="flex flex-row items-center gap-2 pl-8">
          <h2 className="text-1xl">Users</h2>
          <Badge className="rounded-full">{users.length}</Badge>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[16rem] text-center">Id</TableHead>
              <TableHead className="w-[16rem] text-left">Name</TableHead>
              <TableHead className="text-left">Email</TableHead>
              <TableHead className="text-center w-[24rem]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-center">
                  {item.id}
                </TableCell>
                <TableCell className="h-full">
                  {editingUserId === item.id ? (
                    <Input
                      className="border px-2 py-1 rounded"
                      value={editedUser.name}
                      onChange={(e) => {
                        setEditedUser({ ...editedUser, name: e.target.value });
                      }}
                    />
                  ) : (
                    <div className="flex items-center">
                      <img
                        className="h-[32px] w-[32px] rounded-full mr-2"
                        src={`https://unavatar.io/github/${item.github}`}
                        alt={item.github}
                      />
                      <span>{item.name}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-left">
                  {editingUserId === item.id ? (
                    <Input
                      className="border px-2 py-1 rounded"
                      value={editedUser.email}
                      onChange={(e) => {
                        setEditedUser({ ...editedUser, email: e.target.value });
                      }}
                    />
                  ) : (
                    item.email
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {editingUserId === item.id ? (
                    <button
                      onClick={() => saveChanges(item.id)}
                      className="bg-blue-500 text-white rounded px-3 py-1 "
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button onClick={() => startEditing(item)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                      <button onClick={() => handleRemoveUser(item.id)}>
                        <svg
                          aria-label="Remove element"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
