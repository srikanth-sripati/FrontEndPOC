import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css']
})
export class ItemsDetailComponent implements OnInit {

  constructor() { }
  item :Item;
  
  ngOnInit() {
  }

}
