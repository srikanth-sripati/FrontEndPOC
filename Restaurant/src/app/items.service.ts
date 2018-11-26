import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  private item :Item;
  private itemsList :Item[]=[];
  menuItemsList :String[] =["Pizza","Burger","Dosa"];
  getItemById(id: number):Item
  {
   return  this.itemsList.find(s => s.itemId == id);
  }
  setItem(value : Item)
  {
    this.item = value;
    this.itemsList.push(this.item);
  }
  getItemsList():Item[]
  {
    return this.itemsList;
  }
  displayAllItems()
  {
    for(var i=0;i<this.itemsList.length;i++)
    {
      console.log(this.itemsList[i]);
    }
    
  }
}
