import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';

const appRoutes: Routes = [
  {
    path: 'todos',
    component: TodoComponent,
    data: { title: 'Todo List' }
  },
  {
    path: 'todo-details/:id',
    component: TodoDetailComponent,
    data: { title: 'Todo Details' }
  },
  {
    path: 'todo-create',
    component: TodoCreateComponent,
    data: { title: 'Create Todo' }
  },
  { path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
