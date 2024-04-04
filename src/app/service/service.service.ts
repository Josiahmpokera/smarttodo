import { Injectable } from '@angular/core';
import Dexie, {Table} from "dexie";
import {TodoCompleted, TodoList, User} from "../modal/todos";

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends Dexie{
  user!: Table<User, number>;
  todos!: Table<TodoList, number>;
  todoCompleted!: Table<TodoCompleted, number>;

  constructor() {
    super('smart-todo');
    this.version(2).stores({
      user: '++id',
      todos: '++id',
      todoCompleted: '++id'
    });
    this.open();
    this.on('populate', () => this.populate());
  }



  async populate(){
    console.log("&&&&&&&&&&&&&&&&&&&&&&  POPULATED &&&&&&&&&&&&&&&&&&&&&&")
    const userID = db.user.add({
      id: 2,
      email: 'josiahmpokera88@gmai.com',
      fullName: "Josiah Mpokera",
      password: '1234'
    });

  }

  getD(){
    return db.user.get(0);
  }

//   Function create Todo
  addTodo(data:any){
    return db.todos.bulkAdd([data]);
  }


//   Here to get all the Todo Datas
  getTodo(){

  }


}

export const db = new ServiceService()
