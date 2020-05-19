import { Component, OnInit } from '@angular/core';
import { Person } from './../../interfaces/person';
import { IPersonal } from './personal';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  // persons2: Person[] = [
  //   {
  //     personalid: '1',
  //     title: 'test',
  //     name: 'name',
  //     surname: 'surname',
  //     etitle: 'etitle',
  //     ename: 'ename',
  //     esurname: 'esurname',
  //     citizennumber: '001',
  //     mobile: '0819884346',
  //     email: 'c_darun@hotmail.com',
  //   },
  //   {
  //     personalid: '2',
  //     title: 'test',
  //     name: 'name2',
  //     surname: 'surname',
  //     etitle: 'etitle',
  //     ename: 'ename2',
  //     esurname: 'esurname',
  //     citizennumber: '001',
  //     mobile: '0819884346',
  //     email: 'c_darun@hotmail.com',
  //   },
  //   {
  //     personalid: '3',
  //     title: 'test',
  //     name: 'name3',
  //     surname: 'surname',
  //     etitle: 'etitle',
  //     ename: 'ename3',
  //     esurname: 'esurname',
  //     citizennumber: '001',
  //     mobile: '0819884346',
  //     email: 'c_darun@hotmail.com',
  //   },
  // ];

  // persons: IPersonal[] = [
  //   {
  //     personalid: '1',
  //     title: 'test',
  //     name: 'name',
  //     surname: 'surname',
  //     etitle: 'etitle',
  //     ename: 'ename',
  //     esurname: 'esurname',
  //     citizennumber: '001',
  //     mobile: '0819884346',
  //     email: 'c_darun@hotmail.com',
  //   },
  //   {
  //     personalid: '2',
  //     title: 'test',
  //     name: 'name2',
  //     surname: 'surname',
  //     etitle: 'etitle',
  //     ename: 'ename2',
  //     esurname: 'esurname',
  //     citizennumber: '001',
  //     mobile: '0819884346',
  //     email: 'c_darun@hotmail.com',
  //   },
  //   {
  //     personalid: '3',
  //     title: 'test',
  //     name: 'name3',
  //     surname: 'surname',
  //     etitle: 'etitle',
  //     ename: 'ename3',
  //     esurname: 'esurname',
  //     citizennumber: '001',
  //     mobile: '0819884346',
  //     email: 'c_darun@hotmail.com',
  //   },
  // ];

  datas: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  onSelected(person) {
    this.datas.push(person);
  }
}
