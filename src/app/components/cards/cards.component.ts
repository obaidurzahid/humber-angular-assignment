import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/models/product-data';
import { rawData } from 'src/app/models/raw-data';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


 productData :any;

  constructor() { }

  ngOnInit(): void {
    this.productData=rawData.map(data=>new ProductData(data));
  }

}
