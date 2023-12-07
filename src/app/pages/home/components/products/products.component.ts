import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
sort = 'desc';
itemsShowCount : number = 12;
@Output() columnsCountChange:EventEmitter<number> = new EventEmitter();
constructor(){}

ngOnInit(){

}

onSortUpdate(newSort : string):void {
  this.sort = newSort;
}

onItemsUpdated(count : number):void{
  this.itemsShowCount = count
}

onColumnsUpdated(colsNum : number):void {
this.columnsCountChange.emit(colsNum)
}

}
