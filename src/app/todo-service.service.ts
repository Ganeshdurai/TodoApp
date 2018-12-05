
import { Injectable } from '@angular/core';

@Injectable()
export class TodoServiceService {
data:any
  

  constructor() { }


  getDetails(todo){
    console.log("todo>>>>>>>>>>>>>",todo);
    this.data = todo;
    return todo;
  }
}
