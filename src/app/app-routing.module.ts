import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person/person.component';
import { RegisterComponent } from './components/register/register.component';

// const routes: Routes = [{ path: '', component: PersonComponent }];
const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
