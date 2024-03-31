import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  showEditMode: boolean = false;
  profileDetails: ProfileDetails = {
    username: 'Dimitar Andreev',
    email: 'diander@gmail.com',
    image: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    image: [''],
  });

  constructor(private fb: FormBuilder) {}

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    console.log('test ', this.form.value);
    
    if(this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    this.onToggle();
  }

  onCancel(ev: Event) {
    ev.preventDefault();
    this.onToggle();
  }
}
