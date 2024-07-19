import { Injectable, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllContacts() : Observable<Contact[]> {

   return this.http.get<Contact[]>(`${this.apiUrl}/api/Contact`);
  
  }
}
