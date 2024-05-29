import {Component, EventEmitter, Output} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {ProductService} from '../../../../shared/services/product.service';
import {debounceTime} from 'rxjs/operators';
import {Lot} from '../../../../shared/models/lot';
import {LotService} from '../../../../shared/services/lot.service';

@Component({
  selector: 'app-lot-table',
  templateUrl: './lot-table.component.html',
  styleUrls: ['./lot-table.component.scss']
})
export class LotTableComponent {
  searchControl: UntypedFormControl = new UntypedFormControl();
  products;
  filteredProducts;
  @Output() lotClickEvent = new EventEmitter<string>();

  constructor(
      private lotService: LotService
  ) { }

  ngOnInit() {
    this.lotService.getLots()
        .subscribe((value:any) => {
          this.products = [...value.data];
          this.filteredProducts = value.data;
        });

    this.searchControl.valueChanges
        .pipe(debounceTime(200))
        .subscribe(value => {
          this.filerData(value);
        });
  }

  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return this.filteredProducts = [...this.products];
    }

    const columns = Object.keys(this.products[0]);
    if (!columns.length) {
      return;
    }

    const rows = this.products.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.filteredProducts = rows;
  }

  public showLot(lotId: string) {
    this.lotClickEvent.emit(lotId);
  }

}
