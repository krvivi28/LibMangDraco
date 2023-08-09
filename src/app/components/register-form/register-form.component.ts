import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  hide = true;
  constructor(
    private formBuild: FormBuilder,
    private route: Router,
    private alert: AlertService
  ) {}
  registerForm = this.formBuild.group({
    fname: ["", [Validators.required]],
    lname: ["", [Validators.required]],
    dob: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    role: ["", [Validators.required]],
    contact: ["", [Validators.required]],
    address: ["", [Validators.required]],
  });
  handleFormSubmit = () => {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
      console.log(this.registerForm.value);
      // const res = this.userServices.addUser(this.registerForm.value as Iuser);
      this.alert.snack_alert("registeration successfull", "login");
      this.route.navigate(["login"]);
    } else {
      this.alert.snack_alert("invalid form data", "fill valid details");
    }
  };
}
