import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'

const users: {
  id: string
  name: string
  email: string
  github: string
}[] = [
  {
    id: '1',
    name: 'Jane Cooper',
    email: 'JaneC2001@gmail.com',
    github: 'jane-cooper',
  },
  {
    id: '2',
    name: 'Cody Fisher',
    email: 'CodyF2001@gmail.com',
    github: 'cody-fisher',
  },
  {
    id: '3',
    name: 'Esther Howard',
    email: 'EstherH2001@gmail.com',
    github: 'esther-howard',
  },
]

export function ListOfUsers() {
  return (
    <>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
