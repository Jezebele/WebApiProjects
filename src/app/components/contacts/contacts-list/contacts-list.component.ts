import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})

export class ContactsListComponent implements OnInit {

  httpClient = inject(HttpClient);

  contacts : Contact[] = [];

  constructor(public contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getAllContacts()
    .subscribe({
      next : (contacts) =>  //{console.log(contacts)} // Buradaki kod çalışmıyor.
                            this.contacts= contacts, // Buradaki ise çalışmıyor. Api'deki verileri göremiyorum

      error : (response) => {console.log(response)}

    })
  }  

}