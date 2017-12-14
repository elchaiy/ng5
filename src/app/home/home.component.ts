import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  //animations: [trigger( 'goals', [transition('* => *', [        query(':enter', style({ opacity:0}), {optional: true}),        query(':enter', stagger('300ms', [          animate('0.6 ease-in', keyframes([            style({opacity:0, transform: 'translateY(-75%)', offset: 0}),            style({opacity:0, transform: 'translateY(35px)', offset: .3}),            style({opacity:0, transform: 'translateY(0)', offset: 1}),          ]))]), {optional: true})])])]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string;
  goals = [];
  deletedItems = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.itemCount=this.goals.length;
  }

  addItem() {
    if (this.goalText != '') {
      this.goals.push(this.goalText);
      this.goalText="";
      this.itemCount=this.goals.length;
      //this.itemCount++;
    }
  }

  removeItem(i) {
    var deleted = this.goals.splice(i,1);
    this.itemCount=this.goals.length;
    
    this.deletedItems.push(deleted);
  }

  goToCart() {
    this.router.navigate(['Cart/' + this.goals]);
    
  }
}
