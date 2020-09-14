import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thai-food',
  templateUrl: './thai-food.component.html',
  styleUrls: ['./thai-food.component.css']
})
export class ThaiFoodComponent implements OnInit {
  dishes=[{name:'Pad Thai',img:'../assets/images/thaiFoods/Pad-Thai.jpg',author:'Thita C'},
  {name:'Khao Soi',img:'../assets/images/thaiFoods/Khao_Soi.jpg',author:'Thita C'},
  {name:'Kai Phat',img:'../assets/images/thaiFoods/Kai_phat.jpg',author:'Thita C'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
