import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
formData:Todo
// private newData = new Subject<Todo>();
constructor() { }


// getFormData(){
//   return this.formData}

  

  setNewData(data: Todo) {
    this.formData=data
  }

  getNewDataInfo() {
    return this.formData
  }
}
