import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceComponent } from '../invoice/invoice/invoice.component';
import { CofeeService } from '../service';

@Component({
  selector: 'app-cafee',
  templateUrl: './cafee.component.html',
  styleUrls: ['./cafee.component.scss']
})
export class CafeeComponent implements OnInit {
  cafeeItems: any = [];
  headers: any = [];
  selectedValue: any;
  breakpoint: any;
  products: any = [];
  setMode: boolean = false;
  businessName: any;
  arrayColors: any = [];
  color: any;
  selectedItem: any;

  constructor(private cafeeService: CofeeService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cafeeService.findProducts().subscribe((data) => {
      data.categories.forEach((element: any) => {
        (element.name).toUpperCase();
         element.products.forEach((elementi:any)=> {
          elementi.bgColor = this.getRandomColor()
         });
      });
      this.cafeeItems = data.categories;
      this.headers = data.categories.map((x: { name: any; }) => x.name);
      this.selectedValue = this.headers[0];
      this.businessName = data.businessName;
    })
    switch (true) {
      case (window.innerWidth <= 375): this.breakpoint = 1;
        break;
      case (window.innerWidth >= 376 && window.innerWidth <= 800): this.breakpoint = 2;
        break;
      case (window.innerWidth >= 801 && window.innerWidth <= 1000): this.breakpoint = 4;
        break;
      case (window.innerWidth >= 1001): this.breakpoint = 5;
        break;
      default:
        break
    }
  }

  selectedCafeItems(item: any) {
    this.selectedValue = item.name;
    this.cafeeItems.forEach((element: any, i: any) => {
      if (element.id == item.id) {
        this.cafeeItems.splice(i, 1);
        this.cafeeItems.unshift(item);
      }
    });
  }

  getRandomColor() {
  return '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1,6);
  }

  selectedProduct(items: any, event: any) {
    this.selectedItem = items.name
    this.products.push(items);
    console.log(this.products)
    this.dialog.open(InvoiceComponent, {
      data: this.products,
      panelClass: ['animate__animated', 'animate__slideInUp'],
      maxWidth: '350px',
      maxHeight: '250vh',
    });
  }

  onResize(event: any) {
    switch (true) {
      case (event.target.innerWidth <= 375): this.breakpoint = 1;
        break;
      case (event.target.innerWidth >= 376 && event.target.innerWidth <= 800): this.breakpoint = 2;
        break;
      case (event.target.innerWidth >= 801 && event.target.innerWidth <= 1000): this.breakpoint = 4;
        break;
      case (event.target.innerWidth >= 1001): this.breakpoint = 5;
        break;
      default:
        break
    }

  }

  onChangeToggle() {
    this.setMode = !this.setMode
  }
}
