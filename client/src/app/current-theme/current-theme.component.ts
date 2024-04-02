import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.scss']
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  get username(): string {
    return this.userService.user?.username || '';
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];     

      this.apiService.getTheme(id).subscribe((theme) => {
        this.theme = theme;
      });      
    });
  }

  createPost(form: NgForm): void {
    const themeId = this.activeRoute.snapshot.params['themeId'];
    if(form.invalid){
      return;
    }

    const {postText} = form.value;

    this.apiService.createPost(postText, themeId).subscribe(() => {
      this.router.navigate(['/blog']);
    });

  }

  deletePost(postId: string): void {
    const themeId = this.activeRoute.snapshot.params['themeId'];

    this.apiService.deletePost(themeId, postId).subscribe(() => {
      this.router.navigate(['/blog']);
    });
  }
}
