import { Component,ViewChild,OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('productList' ,{ static:true})
  productList: ProductListComponent;
  title = 'lad2recipe1'
  ngOnInit(): void {
    this.productList.products = [
      {
        name: 'ส้มโอ',
        price: 111
      },
      {
        name: 'แตงโม',
        price: 222
      },
      {
        name: 'มะพร่ำวน้ำหอม',
        price: 333
      }
    ];
  }
 
}
