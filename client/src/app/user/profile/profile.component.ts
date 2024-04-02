import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    image: ''
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    image: [''],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {

    const { username, email, image} = this.userService.user!;

    this.profileDetails = {
      username,
      email,
      image,
    }

    this.form.setValue({
      username,
      email,
      image,
    });
  }

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    console.log('test ', this.form.value);
    
    if(this.form.invalid) {
      return;
    }

    
    this.profileDetails = this.form.value as ProfileDetails;
    const {username, email, image} = this.profileDetails;

    this.userService.updateProfile(username, email, image).subscribe(() => {
      this.onToggle();

    })
  }

  onCancel(ev: Event) {
    ev.preventDefault();
    this.onToggle();
  }
}
