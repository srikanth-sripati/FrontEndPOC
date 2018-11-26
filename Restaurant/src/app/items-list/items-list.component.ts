import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Item } from '../Item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  item : Item;
  menuList: String[];
  constructor(private itemsService:ItemsService) { 
  this.menuList = this.itemsService.menuItemsList;

  }

  ngOnInit() {
    this.item = new Item();
  }
 
  onSubmitItem(submittedItem :Item)
  {
    this.itemsService.setItem(submittedItem);
    this.item=new Item();
    this.itemsService.displayAllItems();
  }
  

}
