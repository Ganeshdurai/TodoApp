import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;
  constructor(private http: HttpClient) { }

  deleteData(todo){
    console.log("todo=====>",todo)
    return this.http.delete("/todo" + "/" + todo._id, todo).toPromise()
    .then(()=>{
      this.http.get('/todo').subscribe(data => {
        this.todos = data;
      });
    })
  }
  

  ngOnInit() {
    this.http.get('/todo').subscribe(data => {
      this.todos = data;
    });
  }
}
