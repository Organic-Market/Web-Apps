import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-m',
  templateUrl: './body-m.component.html',
  styleUrls: ['./body-m.component.css']
})
export class BodyMComponent implements OnInit {

  constructor() { }

  @Input()collapsed=false;
  @Input()screenWidth=0;

  getBodyClass():string{
    let styleClass='';
    if(this.collapsed && this.screenWidth > 768){
      styleClass='body-trimmed';
    }else if(this.collapsed && this.screenWidth <=768 && this.screenWidth>0){

      styleClass='body-md-screen';
    }
    return styleClass;
  }
  ngOnInit(): void {
  }
}
