import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { FormServiceService } from 'src/app/services/formService.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  newTodo=[{
    title:"breakfast",
    description:"have breakfast before 9 a.m",
    priority:"high"
  }]
  inProgressTodo=[{
    title:"running",
    description:"daily go to running early in the morning",
    priority:"average"
  }]
  completedTodo=[{
    title:"dentist Appointment",
    description:"dentist appointment on 5th August 2012",
    priority:"high"
  }]
  todoForm:FormGroup
  todoFormData:Todo
  display="none"
  constructor(private fb:FormBuilder,
    private router:Router,
    private formService:FormServiceService) { }

  ngOnInit() {

    if(this.formService.getNewDataInfo()){
      let data=this.formService.getNewDataInfo()
        this.newTodo.push(data)
        console.log(this.newTodo)     
    }
  }
  addTodo(){
 this.router.navigate(['add-todo'])
  }

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
