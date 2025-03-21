import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  id?: number; 
  name: string;
  city: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:8080/api/persons';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  update(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
