import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-signing-page',
  templateUrl: './signing-page.component.html',
  styleUrls: ['./signing-page.component.scss']
})
export class SigningPageComponent implements OnInit {
  form: FormGroup;
  username: object
  constructor(private formBuilder: FormBuilder, private service: HttpserviceService, private router: Router,) {
    this.form = this.formBuilder.group({
      'email': ['test@gmail.com', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['12345678', [Validators.required, Validators.pattern]],
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    debugger
    this.service.getJSON().subscribe((response) => {
      console.log(response)
      if (this.form.value.email == "test@gmail.com" && this.form.value.password == "12345678") {
        localStorage.setItem("user", JSON.stringify('test@gmail.com'));

        this.router.navigateByUrl('/create');
      }
    })
  }


  

}
