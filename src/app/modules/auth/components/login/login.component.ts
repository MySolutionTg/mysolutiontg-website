import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ),
      password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ),
    })
  }

  get f() {
    return this.loginForm.controls;
  }
  submit() {
    console.log(this.f);
    this.pushRoute("/admin");
  }

  pushRoute(routeName: string, id?: string | number) {
    if (id != null)
      this.router.navigate([routeName, {id: id}]);
    else
      this.router.navigate([routeName]);
  }
}
