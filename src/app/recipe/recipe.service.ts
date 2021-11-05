import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';
import { Recipe } from './recipe.model'; 


@Injectable()
export class RecipeService{
  


 private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel- Just Awesome', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/800px-Schnitzel.JPG',
      [
        new Ingredient('Meat', 1) ,
        new Ingredient('Frech Fries', 20)
      ]),
    
      new Recipe(
        'Big Fat Burger',
        'What else you need to say?', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Big_N_Tasty_burger.jpg/626px-Big_N_Tasty_burger.jpg' ,
      [
        new Ingredient('Buns', 2) ,
        new Ingredient('Meat', 1),
      ])
  ];
  constructor(private slService: ShoppingListService){}
 
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(id:number) {
    return this.recipes.slice()[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}