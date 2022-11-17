import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

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
