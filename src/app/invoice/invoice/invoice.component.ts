import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/message-dialog/message-dialog.component';
import { CofeeService } from 'src/app/service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  productArrayCopy: any = [];
  totali: any = 0;
  deleteValues: boolean = false;
  count: any = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,
    public dialogRef: MatDialogRef<InvoiceComponent>, private cofeeService: CofeeService) { }

  ngOnInit(): void {

    let productList = this.cofeeService.getproductList();
    this.totali = 0

    productList.forEach((element: any) => {
      if (!this.productArrayCopy.includes(element)) {
        if (element.unit == undefined) {
          element.unit = 1;
        }
        element.price = element.unitPrice * element.unit;
        this.productArrayCopy.push(element);

      } else {
        this.productArrayCopy.forEach((elements: any) => {

          if (element.name == elements.name) {
            this.count = this.count + 1;
            elements.unit = this.count
            elements.price = elements.unitPrice * elements.unit
          }
        });
      }

    });

    this.productArrayCopy.forEach((element: any) => {
      this.totali = this.totali + element.price
    });
  }


  multiplyPrice(product?: any) {
    this.totali = 0
    this.productArrayCopy.forEach((element: any) => {
      if (element.name == product.name) {
        if (product.unit != null && product.unit != 0 && product.unit !='') {
          element.unit = product.unit
          element.price = element.unitPrice * parseInt(element.unit);
        } else {
          element.price = 0;
          element.selected = false;
          this.totali = this.totali - element.price

        }
      }
      this.totali = this.totali + element.price
    });

    if (this.totali == 0) {
      if(this.productArrayCopy.length != 1){
        this.productArrayCopy = []
      }
   
      this.cofeeService.setProductList(this.productArrayCopy)
    }

  }


  sendInvoice() {

    this.productArrayCopy.forEach((element: any) => {
      element.selected = false;
    });
    this.cofeeService.setProductList(this.productArrayCopy);
    this.dialogRef.close();
    setTimeout(() => {
      this.dialog.open(MessageDialogComponent, {
        width: '358px',
        height: '215px'
      });
    }, 100)

  }
}
