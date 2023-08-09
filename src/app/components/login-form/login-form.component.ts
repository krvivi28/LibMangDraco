import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { RegisterFormComponent } from "../register-form/register-form.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  hide = true;
  userType: string = "User";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private _userType: any,
    private login_dialog_ref: MatDialogRef<LoginFormComponent>
  ) {}

  loginForm = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    this.userType = this._userType;
  }
  // handleLogin = () => {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //     this.auth_services.loginUser(this.loginForm.value).subscribe((res) => {
  //       if (res) {
  //         this.snake_alert.alert("login successfull", "redirected to tasks");
  //         this.router.navigate(["tasks"]);
  //       } else {
  //         this.snake_alert.alert(
  //           "invalid credentials or user not found",
  //           "pls try again or register!"
  //         );
  //       }
  //       console.warn(res);
  //     });
  //   } else {
  //     this.snake_alert.alert("invalid form details", "enter valid details");
  //   }
  // };
  openRegFormInDialog = () => {
    this.login_dialog_ref.close();
    this.dialog.open(RegisterFormComponent, {
      width: "40%",
    });
  };
}
