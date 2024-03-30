import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.scss']
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];

      this.apiService.getTheme(id).subscribe((theme) => {
        this.theme = theme;
      });
    });
  }
}
