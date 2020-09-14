import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominican-food',
  templateUrl: './dominican-food.component.html',
  styleUrls: ['./dominican-food.component.css']
})
export class DominicanFoodComponent implements OnInit {
  dishes=[{name:'Mofongo',img:'../assets/images/dominicanFoods/Mofongo.jpg',author:'Edward R'},
  {name:'Mangu',img:'../assets/images/dominicanFoods/Mangu.jpg',author:'Edward R'},
  {name:'Sopa de mondongo',img:'../assets/images/dominicanFoods/sopa.jpg',author:'Edward R'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
