import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';

const routes: Routes = [
  {path : '', component:ContactsListComponent},
  
  {path : 'contacts', component:ContactsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
