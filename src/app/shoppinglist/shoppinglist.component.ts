import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]; 
  private igChangedSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() { 
    this.ingredients = this.slService.getIngredients(); 
    this.igChangedSub = this.slService.ingredientsChanged
          .subscribe(
            (ingredients: Ingredient[]) => {
              this.ingredients = ingredients; 
            }
          );
  }
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe
  }
 
}