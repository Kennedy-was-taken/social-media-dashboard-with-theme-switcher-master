import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgStyle, NgIf } from '@angular/common';
import { LogicService } from './service/logic.service';
import { SocialData } from './interfaces/socialData';
import { TodayData } from './interfaces/todayData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgStyle, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(private logicService : LogicService) {}

  title = 'social media dashboard with theme switcher master';

  //data
  social : SocialData[] = [];
  today : TodayData[] = [];

  ngOnInit() : void{
    this.social = this.logicService.getSocialData();
    this.today = this.logicService.getTodayData();
  }

}
