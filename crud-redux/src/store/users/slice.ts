import { createSlice } from "@reduxjs/toolkit"

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
}

const initialState: UserWithId[] = [
  {
    id: "1",
    name: "Leanne Graham",
    email: "LeanneG@gmail.com",
    github: "LeanneGraham42",
  },
  {
    id: "1",
    name: "Ervin Howell",
    email: "Ervin_Howell@gmail.com",
    github: "ErvinH",
  },
  {
    id: "1",
    name: "Clementine Bauch",
    email: "ClementineBauch@gmail.com",
    github: "Bauchz",
  },
  {
    id: "1",
    name: "Patricia Lebsack",
    email: "Pat.Lebsack@gmail.com",
    github: "P.Lebsack1",
  },
]

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
})
