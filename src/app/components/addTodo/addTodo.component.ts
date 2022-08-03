import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { FormServiceService } from 'src/app/services/formService.service';

@Component({
  selector: 'app-addTodo',
  templateUrl: './addTodo.component.html',
  styleUrls: ['./addTodo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoForm:FormGroup
  todoFormData:Todo
  display="none"
  constructor(private fb:FormBuilder,
    private router:Router,
    private formService:FormServiceService) { }

  ngOnInit() {
  this.addTodoForm();
}
addTodoForm() {
  this.todoForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    priority: [null, Validators.required]
  });
}

onSubmit() {
  this.todoFormData = this.todoForm.value;
  console.log(this.todoFormData);
  this.formService.setNewData(this.todoFormData)
  this.router.navigate(['dashboard'])


  // this.todo.push(this.todoFormData);
}

}
