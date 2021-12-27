import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
// import { DeleteItemComponent } from '../delete-item/delete-item.component';
import { HttpserviceService } from '../httpservice.service';
// import { RandomUsers } from '../models/random-users';
import { SharedataService } from '../sharedata.service';

import Swal from 'sweetalert2';
import { Component, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent  {
  dataSource = new MatTableDataSource<any>();
  resultsLength = 0;
  currentPage = new BehaviorSubject<number>(1);
  displayedColumns: string[] = ['id', 'title', 'price', 'Qunatity', 'SumofPrice','TotalPrice', 'description', 'view', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allproduct: any = [];
  rate: any = [];
  total: any;
  del: number;
  length = 500;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor(private service: HttpserviceService, private sharedata: SharedataService, private router: Router, public dialog: MatDialog,) {

  }
  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  ngOnDestroy() {
    document.location.reload();

  } ngOnInit(): void {

    this.getlatestproduct();
  }

  getlatestproduct() {

    this.service.getList().subscribe((response) => {
      console.log(response)
      this.rate = response['Qunatity']
      console.log(this.rate)
      this.allproduct = response
      this.dataSource = new MatTableDataSource<any>(this.allproduct);
      this.dataSource.paginator = this.paginator;



    })
  }
  refresh(): void {
    window.location.reload();
  }
  view(product) {
    debugger
    localStorage.setItem("product", JSON.stringify(product));

    this.router.navigateByUrl('/view')

  }
  warningAlert(item) {
    debugger
    console.log(item)
    this.del = item
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'You will Delete Product!',
      showCancelButton: true,
      confirmButtonColor: '#6259ca',
      cancelButtonColor: '#6259ca',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your Product has been deleted.',
          icon: 'success',
          confirmButtonColor: '#6259ca'
        })
        setTimeout(() => {
          this.deleteproducts();

        }, 2000);
      }




    })


  }
  
  deleteproducts() {
    debugger
    this.service.deleteproduct(this.del).subscribe(() => {
      this.getlatestproduct();
      this.router.navigateByUrl('/create')

    })
  }
}
