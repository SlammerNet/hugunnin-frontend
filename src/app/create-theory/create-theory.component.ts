import { Component, OnInit } from '@angular/core';
import {ITheory} from '../../app/interfaces/theory.interface'
import * as moment from 'moment';

@Component({
  selector: 'app-create-theory',
  templateUrl: './create-theory.component.html',
  styleUrls: ['./create-theory.component.css']
})
export class CreateTheoryComponent implements OnInit {
  
  theory: ITheory = {
    name: "",
    author: "",
    description: "",
    creationDate: moment().format('DD/MM/YYYY')

  }

  constructor() { }

  ngOnInit(): void {
    console.log("Created Theory Init...");
  }

  showTheory(){
    console.table(this.theory)
  }

  resetTheory(){
    var theory: ITheory
    Object.keys(this.theory).forEach(element => this.theory[element as keyof typeof theory] = "");
  }
}


