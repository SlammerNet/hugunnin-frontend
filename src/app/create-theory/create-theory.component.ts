import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-create-theory',
  templateUrl: './create-theory.component.html',
  styleUrls: ['./create-theory.component.css']
})
export class CreateTheoryComponent implements OnInit {
  
  theory = {
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


}
