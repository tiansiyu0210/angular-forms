import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm: NgForm;
  defaultQuestion = 'teacher';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmit() {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }
}


// https://angular.io/api/forms/Validators
