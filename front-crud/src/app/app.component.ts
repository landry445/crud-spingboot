import { Component, ViewChild } from '@angular/core';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonFormComponent } from './components/person-form/person-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonListComponent, PersonFormComponent],
  template: `
    <h1>CRUD Personnes</h1>
    <app-person-form (personAdded)="onPersonAdded()"></app-person-form>
    <hr />
    <app-person-list #list></app-person-list>
  `
})
export class AppComponent {
  title = 'front-crud';
  @ViewChild('list') listComponent!: PersonListComponent;

  onPersonAdded() {
    this.listComponent.loadPersons();
  }  
}
