import Dexie, {Table} from "dexie";

export interface User {
  id?: number,
  fullName: string,
  email: string,
  password: string
}


export interface TodoList {
  id?: number,
  title: string,
  priorityType: string,
  date: Date
}

export interface TodoCompleted {
  id?: number,
  title: string,
  priorityType: string,
  date: Date
}
