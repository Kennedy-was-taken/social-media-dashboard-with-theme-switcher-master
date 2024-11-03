import { Injectable } from '@angular/core';
import { SocialData } from '../interfaces/socialData';
import { TodayData } from '../interfaces/todayData';
import social_data from '../../assets/json/social_data.json';
import today_data from '../../assets/json/today.json';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor() { }

  social : SocialData[] = [];
  today : TodayData[] = [];

  public storeData() : void{
    this.social = social_data;
    this.today = today_data;
  }

  public getSocialData() : SocialData[]{
    return this.social;
  }

  public getTodayData() : TodayData[]{
    return this.today;
  }

}
