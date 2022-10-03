import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/message-dialog/message-dialog.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  productArrayCopy: any = [];
  totali: any = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,
    public dialogRef: MatDialogRef<InvoiceComponent>) { }

  ngOnInit(): void {
  
    this.data.forEach((element: any) => {
        if (element.unit == undefined) {
          element.unit = 1;
        }
        element.price = element.unitPrice * element.unit;
        this.productArrayCopy.push(element);
        this.totali = this.totali +  element.price
    });
  }

  multiplyPrice(product?: any) {
  
      this.productArrayCopy.forEach((element: any) => {
        if (element.name == product.name) {
          if (product.unit != null && product.unit != 0 && product.unit != '') {
          element.unit = product.unit
          element.price = element.unitPrice * parseInt(element.unit);
          this.totali = this.totali + product.price
        }else{
          this.totali = this.totali - product.price
          element.price = 0
        }
        }
      });
    }
  

  sendInvoice() {
    this.productArrayCopy = [];
    this.data = []
    console.log(this.productArrayCopy, 'ppppppppppppp')
    this.dialogRef.close();
    setTimeout(() => {
      this.dialog.open(MessageDialogComponent, {
        width: '358px',
        height: '215px'
      });
    }, 100)

  }
}
