import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { title } from 'process';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {
  from: FormGroup
  submitted = false;
  Product1 = ['Tv', 'Fan', 'Mobile', 'Washing Machine', "Ac"]
  duration1 = ['3 months', '6 months', '1year']
  stock1 = ['Out of stock', 'In stock']
  data: any = [];
  title: any;
  price: any;
  allproduct: Object;
  id: any;
  Qunatity: any;
  description: any;

  constructor(private formBuilder: FormBuilder, private service: HttpserviceService, private router: Router, public dialog: MatDialog,
  ) {
    this.data = JSON.parse(localStorage.getItem("product"));

    console.log(this.data)
    this.title = this.data['title']
    this.description = this.data['description']
    this.price = this.data['price']
    this.id = this.data['id']
    this.Qunatity = this.data['Qunatity']

    console.log(this.title)
  }

  ngOnInit(): void {
    this.from = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required]],
      id: [''],
      Qunatity: ['', [Validators.required]],
    })
  }
  get f() { return this.from.controls; }
  onSubmit(formObj) {
    debugger
    this.submitted = true;

    console.log(formObj)
    this.service.updateProduct(formObj).subscribe((response) => {
      console.log("added")
      this.getlatestproduct();
      this.router.navigateByUrl('/create')



    })

  }




  getlatestproduct() {
    this.service.getList().subscribe((response) => {
      this.allproduct = response
    })
  }
}
