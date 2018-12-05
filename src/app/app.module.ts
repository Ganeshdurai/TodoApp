import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { SigninComponent } from './signin/signin.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";


// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("526724481141217")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("932722421167-s1jlu77pp685dsthk197diue448uko6i.apps.googleusercontent.com")
      }
    ]
);
return config;
}

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
  {
    path: 'signin',
    component: SigninComponent,
    data: { title: 'Social Login'}
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
    TodoCreateComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
