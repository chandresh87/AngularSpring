import { Component, OnInit } from '@angular/core';
import { routes } from './child-benefits-routing.module';

@Component({
  selector: 'app-child-benefits',
  templateUrl: './child-benefits.component.html',
  styleUrls: ['./child-benefits.component.css']
})
export class ChildBenefitsComponent implements OnInit {
  private pageTitle = 'Welcome to the Child Benefits Service';
  
  ngOnInit() {
  }

}
