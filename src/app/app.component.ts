import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form!: FormGroup;
  constructor(private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  onSubmit():void {
    console.log(this.form.value.name);
    this.router.navigate(['artist', this.form.value.name]);
  }
}
