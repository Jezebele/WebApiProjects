import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FullStackUI';
  
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnit() : void 
  {
        console.log(this.contacts);
  }

 
}
