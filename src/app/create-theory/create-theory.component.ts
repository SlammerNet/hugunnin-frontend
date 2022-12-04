import { Component, OnInit } from '@angular/core';
import {ITheory} from '../../app/interfaces/theory.interface'
import * as moment from 'moment';
import { TheoryService } from '../services/theory.service';
import { ProductionService } from '../services/production.service';
import { ProductionTypeService } from '../services/production-type.service';
import { IProductionsType } from '../interfaces/production-type.interface';
import { IProductions } from '../interfaces/productions.interface';

@Component({
  selector: 'app-create-theory',
  templateUrl: './create-theory.component.html',
  styleUrls: ['./create-theory.component.css']
})
export class CreateTheoryComponent implements OnInit {

  productionsType: IProductionsType[] = []
  productions: IProductions[] = []
  alertMessage = ""

  theory: ITheory = {
    name: "",
    author: "",
    secretKey: "",
    description: "",
    production: "",
    productionType: "",
    createdAt: "",
    updatedAt: "",
  }

  constructor(private theoryService: TheoryService,
              private productionService: ProductionService,
              private productionTypeService: ProductionTypeService) { }

  ngOnInit(): void {
    this.getAllProductions();
    this.getAllProductionsType();
  }

  showTheory(){
    console.table(this.theory)
  }

  resetTheory(){
    var theory: ITheory
    Object.keys(this.theory).forEach(element => this.theory[element as keyof typeof theory] = "");
  }

  generateSecretKey(){
    this.theory.secretKey = Math.random().toString(36).substr(2, 5);
  }

  async createTheory(){
    await this.generateSecretKey()
    this.theoryService.createTheory(this.theory).subscribe(
      data => {
        console.log(data)
        this.alertMessage = "Sua teoria foi criada!"
      },
      error => {
        this.alertMessage = "Algo deu errado!"
      })

    this.alertMessage = ""
  }

  async getAllProductions(){
    this.productionService.getProductions().subscribe(
      data => {
        console.log(data)
        this.productions = data;
      },
      error => {
        console.log(error)
      })
  }

  async getAllProductionsType(){
    this.productionTypeService.getProductionsType().subscribe(
      data => {
        console.log(data)
        this.productionsType = data;
      },
      error => {
        console.log(error)
      })
  }
}


