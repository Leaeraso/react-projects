import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'LeanneG@gmail.com',
    github: 'LeanneGraham42',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Ervin_Howell@gmail.com',
    github: 'ErvinH',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'ClementineBauch@gmail.com',
    github: 'Bauchz',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Pat.Lebsack@gmail.com',
    github: 'P.Lebsack1',
  },
]

export function ListOfUsers() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">User List</h2>
      <Table>
        <TableCaption className="text-muted-foreground">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="text-left font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className="text-right text-sm">View</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
