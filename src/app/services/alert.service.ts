import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private alert: MatSnackBar) {}
  snack_alert = (msg: string, action: string) => {
    this.alert.open(msg, action, {
      verticalPosition: "top",
      duration: 1000,
    });
  };
}
