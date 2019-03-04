import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { Observable } from "rxjs";
import { MatPaginator, MatSort, MatSortable, MatTableDataSource } from "@angular/material"
import { UserService } from "../user.service"

@Component({
  selector: 'app-responsive-grid',
  templateUrl: './responsive-grid.component.html',
  styleUrls: ['./responsive-grid.component.css']
})
export class ResponsiveGridComponent implements OnInit, OnDestroy {
  title = 'SMS-Digital Coding Challenge - Responsive Grid';
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns = ['city', 'start_date', 'end_date', 'price', 'status', 'color'];
  constructor(private userService: UserService, private renderer: Renderer2) { 
    this.renderer.addClass(document.body, 'home-styles');
  }

  ngOnInit() {
    this.userService.getUser().subscribe(results =>{
      if(!results){
        console.log('error');
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = 
      (data: UserService, filtersJson: string) => {
        const matchFilter = [];
        const filters = JSON.parse(filtersJson);

        filters.forEach(filter => {
          const val = data[filter.start_date] === null ? '' : data[filter.start_date];
          matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
        });
          return matchFilter.every(Boolean);
      };
    });
  }

  applyFilter(filterValue: string) {
    const tableFilters = [];
    tableFilters.push({
      start_date: 'start_date',
      value: filterValue
    });


    this.dataSource.filter = JSON.stringify(tableFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'home-styles');
  }
}
