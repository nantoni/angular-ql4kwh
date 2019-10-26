import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  onFormValidated(data: FormGroup) {
    this.data = data;
    this.formValidated = true;
  }
}
