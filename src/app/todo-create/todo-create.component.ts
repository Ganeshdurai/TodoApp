import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';



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
  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
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