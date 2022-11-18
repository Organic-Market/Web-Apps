import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-panel-m',
  templateUrl: './panel-m.component.html',
  styleUrls: ['./panel-m.component.css']
})
export class PanelMComponent implements OnInit {

  title='sidenav';

  isSideNavCollapsed=false;
  screenWidth=0;
  constructor() { }

  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
  ngOnInit(): void {
  }

}
