import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { TodoServiceService } from '../todo-service.service';




@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
   title:any;
   status:any;
   todo = {'title':this.title,
  'status':this.status
  };
   items = ['Completed','Pending','Opened'];
  

  constructor(private http: HttpClient, private router: Router, private todoservice: TodoServiceService) { }

  ngOnInit() {
    if(this.todoservice.data){
      this.todo= this.todoservice.data;
    }
  }

  updateTodoDetails(todo){
    this.http.put('/todo' + '/' + todo._id, todo)
    .subscribe(res => {
      this.todoservice.data = {};
      this.todoservice.data ="";
      this.router.navigate(['/todos']);
    }, (err) => {
      console.log(err);
    }
  );
  
  }

  saveBook() {
    this.http.post('/todo', this.todo)
      .subscribe(res => {
        
         
          this.router.navigate(['/todos']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}