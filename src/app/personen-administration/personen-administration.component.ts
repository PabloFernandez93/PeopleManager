import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-personen-administration',
  templateUrl: './personen-administration.component.html',
  styleUrls: ['./personen-administration.component.css'],
})
export class PersonenAdministrationComponent {
  people: Person[] = [];

  saveNewPerson(inputName: string, inputAge: number) {
    const newPerson: Person = { name: inputName, age: inputAge };
    this.people.push(newPerson);
  }

  /*
    save(name: string, age: number): void {
    this.people.push({name: name, age: age})
  }
   */
  deletePerson(index: number) {
    this.people.splice(index, 1);
  }
}
