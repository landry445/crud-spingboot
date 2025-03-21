import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonService, Person } from '../../services/person.service';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person-form.component.html'
})

export class PersonFormComponent {
  person: Person = {
    name: '',
    city: '',
    phoneNumber: ''
  };

  @Output() personAdded = new EventEmitter<void>();

  constructor(private personService: PersonService) {}

  onSubmit(): void {
    this.personService.create(this.person).subscribe(() => {
      alert('Personne ajoutée avec succès !');
      this.person = { name: '', city: '', phoneNumber: '' };
      this.personAdded.emit();
    });
  }
}
