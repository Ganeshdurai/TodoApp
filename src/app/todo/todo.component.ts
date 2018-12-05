import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;
  constructor(private http: HttpClient,private router: Router, private todoservice: TodoServiceService) { }

  deleteData(todo){
    console.log("todo=====>",todo)
    return this.http.delete("/todo" + "/" + todo._id, todo).toPromise()
    .then(()=>{
      this.http.get('/todo').subscribe(data => {
        this.todos = data;
      });
    })
  }
  updateData(todo){    
    // this.http.get('/todo/'+ todo._id).subscribe(data => {
    //   this.todo = data;
    // });
    this.todoservice.getDetails(todo);
    this.router.navigate(['/todo-create']);
    
    // this.http.put('/todo' + '/' + todo._id, todo).toPromise()
    // .then(()=>{
    //   this.http.get('/todo').subscribe(data => {
    //     this.todos = data;
    //   });
    // })
  }
  

  ngOnInit() {
    this.http.get('/todo').subscribe(data => {
      this.todos = data;
    });
  }
}
