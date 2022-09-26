import { Sell } from './../../models/sells';
import { SellService } from './../../services/sell.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-list-sells',
  templateUrl: './list-sells.component.html',
  styleUrls: ['./list-sells.component.css']
})
export class ListSellsComponent implements OnInit {
  displayedColumns: string[] = ['id','name','email','product','quantity','total', 'actions'];
  dataSource = new MatTableDataSource<Sell>();



  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private sellService: SellService, private router: Router) { }

  ngOnInit(): void {
    this.getSells();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSells() {
    this.sellService.getSell().subscribe((data:Sell[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteSell(id:any){

  }
}
