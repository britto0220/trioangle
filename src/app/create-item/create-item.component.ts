import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  from: FormGroup
  submitted = false;

  list: [];
  data: any = [];
  dataarray: any;
  allproduct: Object;

  constructor(private formBuilder: FormBuilder, public sharedata: SharedataService, private service: HttpserviceService, private router: Router
  ) { }

  ngOnInit() {
    this.from = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required]],
      id: ['', [Validators.required]],
      Qunatity: ['', [Validators.required]],

    }, {
    });
    this.list = this.from.value
    console.log(this.list)


    this.dataarray = JSON.parse(localStorage.getItem("list"));
    console.log(this.dataarray)

  }

  get f() { return this.from.controls; }

  onSubmit(formObj) {
   
    debugger
    this.submitted = true;

    this.service.createProducts(formObj).subscribe((response) => {
      console.log("added")
      this.getlatestproduct();
      document.location.reload();
    })
  
  }
  getlatestproduct() {
    this.service.getList().subscribe((response) => {
      this.allproduct = response
    })
  }
  logout() {
    localStorage.clear
    this.router.navigateByUrl('/login')

  }

  onReset() {
    this.submitted = false;
    this.from.reset();
  }
  addproduct(formObj) {
    this.submitted = true;

    console.log(formObj)
    this.service.createProducts(formObj).subscribe((response) => {
      console.log("added")
    })
  }
}
