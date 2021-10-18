import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { RecipeitemComponent } from './recipe/recipelist/recipeitem/recipeitem.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeeditComponent } from './recipe/recipeedit/recipeedit.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule , 
                  AppRoutingModule ],
  declarations: [ 
                  AppComponent, 
                  HelloComponent,
                  HeaderComponent,
                  RecipeComponent,
                  RecipedetailComponent,
                  RecipelistComponent,
                  ShoppinglistComponent,
                  ShoppingeditComponent, 
                  RecipeitemComponent,
                  RecipeStartComponent,
                  RecipeeditComponent,
                  DropdownDirective ],

  providers:    [ ShoppingListService ]   ,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
