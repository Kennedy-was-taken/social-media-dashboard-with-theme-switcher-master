import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgStyle, NgIf} from '@angular/common';
import { LogicService } from './service/logic.service';
import { SocialData } from './interfaces/socialData';
import { TodayData } from './interfaces/todayData';
import social_data from '../assets/json/social_data.json';
import today_data from '../assets/json/today.json';

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

  public switch_mode(event: Event) : void{

    var isChecked: boolean = (event.target as HTMLInputElement).checked;
    // var isChecker = document.getElementById("color_mode");

    if(isChecked){
      console.log("checked");
      this.darkMode();
    }
    else{
      console.log("unchecked");
      this.lightMode();
    }
  }

  public darkMode() : void {
    // headers and subheadings
    var main_container = document.getElementById("main_container")!;
    var top_layer = document.getElementById("top_layer")!;
    var header = document.getElementById("header")!;

    //containers and blocks
    var blockloop = document.getElementsByClassName("block") as HTMLCollectionOf<HTMLElement>;
    var follower_number = document.getElementsByClassName("follower_number") as HTMLCollectionOf<HTMLElement>;

    //containers and blocks
    var overview_block = document.getElementsByClassName("overview_block") as HTMLCollectionOf<HTMLElement>;
    var number = document.getElementsByClassName("number") as HTMLCollectionOf<HTMLElement>;
    var overview = document.getElementById("overview")!;

    // headers and subheadings color change
    main_container.style.backgroundColor = "var(--Very_Dark_Blue_BG)";
    top_layer.style.backgroundColor = "var(--Very_Dark_Blue_Top_BG_Pattern)";
    header.style.color = "var(--White_BG)";

    //containers and blocks color change
    overview.style.color = "var(--White_Text)";

    var blockloop = document.getElementsByClassName("block") as HTMLCollectionOf<HTMLElement>;

    for(let index = 0; index < blockloop.length; index++){
      blockloop[index].style.backgroundColor = "var(--Dark_Desaturated_Blue_Card_BG)";
      follower_number[index].style.color = "var(--White_Text)";
    }

    for(let index = 0; index < overview_block.length; index++){
      number[index].style.color = "var(--White_Text)";
      overview_block[index].style.backgroundColor = "var(--Dark_Desaturated_Blue_Card_BG)";
    }

    // for(let item of blockloop){
    //   blockloop[index].setAttribute("style", "backgroundColor = var(--Dark_Desaturated_Blue_Card_BG)");
    //   item.style.backgroundColor = "var(--Dark_Desaturated_Blue_Card_BG)";
    // }

  }

  public lightMode() : void {

    // headers and subheadings
    var main_container = document.getElementById("main_container")!;
    var top_layer = document.getElementById("top_layer")!;
    var header = document.getElementById("header")!;

    //containers and blocks
    var blockloop = document.getElementsByClassName("block") as HTMLCollectionOf<HTMLElement>;
    var follower_number = document.getElementsByClassName("follower_number") as HTMLCollectionOf<HTMLElement>;

    //containers and blocks
    var overview_block = document.getElementsByClassName("overview_block") as HTMLCollectionOf<HTMLElement>;
    var number = document.getElementsByClassName("number") as HTMLCollectionOf<HTMLElement>;
    var overview = document.getElementById("overview")!;

    // headers and subheadings color change
    main_container.style.backgroundColor = "var(--White_BG)";
    top_layer.style.backgroundColor = "var(--Very_Pale_Blue_Top_BG_Pattern)";
    header.style.color = "black";

    //containers and blocks color change
    overview.style.color = "var(--Dark_Grayish_Blue_Text)";

    for(let index = 0; index < blockloop.length; index++){
      blockloop[index].style.backgroundColor = "var(--Light_Grayish_Blue_Card_BG)";
      follower_number[index].style.color = "var(--Very_Dark_Blue_Text)";
    }

    for(let index = 0; index < overview_block.length; index++){
      number[index].style.color = "var(--Very_Dark_Blue_Text)";
      overview_block[index].style.backgroundColor = "var(--Light_Grayish_Blue_Card_BG)";
    }
  }

  ngOnInit() : void{
    this.social = social_data;
    this.today = today_data;

  }

}
