import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService, Person } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html'
})

export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.personService.getAll().subscribe(data => {
      this.persons = data;
    });
  }

  deletePerson(id: number): void {
    this.personService.delete(id).subscribe(() => {
      this.loadPersons();
    });
  }
}
