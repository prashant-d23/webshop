import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  categories = ['shoes', 'sports','Electronics'];
  @Output() showCategory:EventEmitter<string> = new EventEmitter();

  onShowCategory(category:string):void {
    this.showCategory.emit(category);
    console.log("hello")
  }
}
