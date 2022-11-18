import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from 'src/app/models/nav-data-m';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav-m',
  templateUrl: './sidenav-m.component.html',
  styleUrls: ['./sidenav-m.component.css']
})
export class SidenavMComponent implements OnInit {

  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();

  collapsed=true;
  screenWidth=0;
  navData= navbarData;
  constructor() { }

  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  closeSidenav():void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});

  }
  ngOnInit(): void {
  }

}
