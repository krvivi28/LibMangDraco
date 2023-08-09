import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoginFormComponent } from "src/app/components/login-form/login-form.component";
import { RegisterFormComponent } from "src/app/components/register-form/register-form.component";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}
  openLoginFormInDialog = (_userType: string) => {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: "30%",
      data: _userType,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.upDateTable();
    });
  };
  openRegFormInDialog = (_data: string) => {
    const dialogRef = this.dialog.open(RegisterFormComponent, {
      width: "30%",
      data: _data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.upDateTable();
    });
  };
}
