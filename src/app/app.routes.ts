import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
  {'path':'home','title':'Angular-Neo4j',component:HomeComponent},
  {'path':'about','title':'About',component:AboutComponent},
  {'path':'contact','title':'Contact',component:ContactComponent},
  {'path':'',redirectTo:'/home',pathMatch:'full'},
  {'path':'task','title':'Task',component:TaskComponent}

];
