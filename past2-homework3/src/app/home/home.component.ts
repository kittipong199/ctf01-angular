import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() groupName: string;
  @Input() name:string;
  @Input() remark:string;
  @Input() comMand:string;
  @Input() value:string;
  


  constructor() { }

  ngOnInit(): void {
  }

}
