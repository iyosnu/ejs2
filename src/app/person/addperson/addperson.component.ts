import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from './../../interfaces/person';
import { FormBuilder } from '@angular/forms';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css'],
})
export class AddpersonComponent implements OnInit {
  @Output() clicked = new EventEmitter<any>();

  projectname = 'PIM Angular';
  form = this.formBuilder.group({
    personalid: null,
    title: null,
    name: null,
    surname: null,
    etitle: null,
    ename: null,
    esurname: null,
    citizennumber: null,
    mobile: null,
    email: null,
  });

  person: Person;
  // person: Person = {
  //   personalid: '1',
  //   title: 'test',
  //   name: 'name',
  //   surname: 'surname',
  //   etitle: 'etitle',
  //   ename: 'ename',
  //   esurname: 'esurname',
  //   citizennumber: '001',
  //   mobile: '0819884346',
  //   email: 'c_darun@hotmail.com',
  // };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.person = {
      personalid: '1',
      title: 'test',
      name: 'name',
      surname: 'surname',
      etitle: 'etitle',
      ename: 'ename',
      esurname: 'esurname',
      citizennumber: '001',
      mobile: '0819884346',
      email: 'c_darun@hotmail.com',
    };
  }

  onSubmit() {
    console.log(this.form.value);
    // this.clicked.emit(searchTerm);
    this.clicked.emit(this.form.value);
  }
}
