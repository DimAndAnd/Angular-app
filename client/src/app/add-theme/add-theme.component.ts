import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.scss']
})
export class AddThemeComponent {
  addTheme(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }
}
