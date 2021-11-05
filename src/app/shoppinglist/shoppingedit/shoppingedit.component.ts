import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms' ;
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit, OnDestroy{
  @ViewChild('f') slForm: NgForm
  subscription: Subscription;
  editMode = false
  editedItemIndex: number;
  editedItem: Ingredient

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.slService.startedEditing.subscribe((
     index:number)=>{
      this.editedItemIndex = index ; 
      this.editMode = true; 
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
   })
  }
  onSubmit(form: NgForm){
  const value = form.value; 
  const newIngredient= new Ingredient(value.name, value.form);
  if (this.editMode){
    this.slService.updateIngredient(this.editedItemIndex, newIngredient);
  }else{
    this.slService.addIngredient(newIngredient)
  }
  this.editMode = false; 
  form.reset() ;
}
onClear(){
  this.slForm.reset();
  this.editMode = false; 
}
onDelete(){
  this.slService.deleteIngredient(this.editedItemIndex);
  this.onClear()
}
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
    
}