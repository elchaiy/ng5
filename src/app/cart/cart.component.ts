import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { forEach } from '@angular/router/src/utils/collection';
//import { Route } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  itemCount: number;
  stringlist: string;
  cart = [];

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => this.stringlist = res.id);
   
  }


  ngOnInit() {
    var temp: string;
    temp = '';
    for (var i=0; i < this.stringlist.length; i++){
      if (this.stringlist[i] != ','){
        temp += this.stringlist[i];
      }
      else{
        this.cart.push(temp);
        temp = '';
      }
    }    
    if(temp != ''){
      this.cart.push(temp);
    }
    this.itemCount=this.cart.length;

  }

}
