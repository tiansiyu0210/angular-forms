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
  answer = '';
  genders = ['male', 'female'];


  suggestUserName() {
    const suggestedName = 'sample name';
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  suggestAll(){
    const suggestedName = 'Superuser';
    this.myForm.setValue({
      userData: {
        username: suggestedName,
        email: 'aaa@bbb.com',
      },
      gender: 'female',
      answer: 'sample answer',
      secret: 'teacher'
    });
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
