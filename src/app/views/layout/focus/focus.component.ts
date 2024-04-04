import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {db} from "../../../service/service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {liveQuery} from "dexie";


interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit{
  @ViewChild('content', {static: true}) contentTemplateRef: ElementRef | undefined


  // Getting all todos
  todos = liveQuery(() => db.todos.toArray());

  ngOnInit() {
    this.getData();
  }

  constructor(private modalService: NgbModal) {
  }

  // To-Do form here
  todoForm = new FormGroup({
    title: new FormControl(''),
    priorityType: new FormControl(''),
    date: new FormControl('')
  });

  // Add form into DB FUnction
  async saveData(){
    console.log(this.todoForm.value);
    await db.addTodo(this.todoForm.value).then((result) => {
      console.log(result)
    }).catch((error) => console.log(error));
    this.todoForm.reset();
  }

  async getData(){
    await db.getD();
    console.log("The function is working well");
  }

  // Validate the Button of the form here
  buttonDisabled = true;

  onTyping(){
    this.buttonDisabled = false;
  }

  notTyping(){
    this.buttonDisabled = true;
  }



  openModal(content: any){
    this.modalService.open(content);
  }

  openD(){
    this.openModal(this.contentTemplateRef);
  }

  // addTodo() {
  //   if (this.newTodo.trim() !== '') {
  //     this.todos.push({ text: this.newTodo, completed: false });
  //     this.newTodo = '';
  //   }
  // }

  // deleteTodo(todo: Todo) {
  //   this.todos = this.todos.filter(t => t !== todo);
  // }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

}
