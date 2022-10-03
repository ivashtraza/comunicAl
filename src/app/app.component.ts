import { Component, Input, OnInit } from '@angular/core';
import { CofeeService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mcCafee';
  img: string = '';
  constructor(private cafeeService: CofeeService) { }

  ngOnInit(): void {
  this.cafeeService.findProducts().subscribe((data:any)=>{
        this.img = 'data:image/png;base64,' + data.logo;
  })
  }
}
