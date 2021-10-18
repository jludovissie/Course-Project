
import { NgModule } from '@angular/core';
import { Routes, RouterModule}  from '@angular/router' ;
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';

import { RecipeComponent } from './recipe/recipe.component';
import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';
import { RecipeeditComponent } from './recipe/recipeedit/recipeedit.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component' 


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes' , pathMatch: 'full' }, 
  {path: 'recipes', component: RecipeComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeeditComponent}, 
    {path: ':id', component: RecipedetailComponent} ,
    {path: ':id/edit', component: RecipeeditComponent}
  ] } ,
  {path: 'shoppinglist' , component: ShoppinglistComponent }
] ;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
