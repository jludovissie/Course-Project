
import { NgModule } from '@angular/core';
import { Routes, RouterModule}  from '@angular/router' ;
import { RecipeComponent } from './recipe/recipe.component';


import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component' 

const appRoutes: Routes = [
  {path: " ", redirectTo: '/recipes' }, 
  {path: 'recipes', component: RecipeComponent } ,
  {path: 'shoppinglist' , component: ShoppinglistComponent }
] ;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
