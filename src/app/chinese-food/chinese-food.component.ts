import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinese-food',
  templateUrl: './chinese-food.component.html',
  styleUrls: ['./chinese-food.component.css']
})
export class ChineseFoodComponent implements OnInit {
dishes=[{name:'Har Gow',img:'../assets/images/chineseFoods/Har_Gow.jpg',author:'Shawn'},
{name:'Kung Pao Chicken',img:'../assets/images/chineseFoods/Kung_Pao_Chicken.jpg',author:'Shawn'},
{name:'Changsha Rice Noodles',img:'../assets/images/chineseFoods/Changsha_rice_noodles.jpg',author:'Shawn'},
{name:'Braised Spare Ribs',img:'../assets/images/chineseFoods/Chinese-Red-braised-Spare-Ribs3.jpg',author:'Shawn'},
{name:'Bak kut teh',img:'../assets/images/chineseFoods/BakKutTeh.jpg',author:'Shawn'},
{name:'Stinky Tofu',img:'../assets/images/chineseFoods/StinkyTofu.jpg',author:'Shawn'},
{name:'Dongpo pork',img:'../assets/images/chineseFoods/DongPo.jpg',author:'Shawn'}];
  constructor() { }

  ngOnInit(): void {
  }

}
