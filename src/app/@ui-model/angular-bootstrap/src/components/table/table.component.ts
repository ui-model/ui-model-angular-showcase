import {Component, Input} from '@angular/core';
import {TableField, TableSorter} from '@ui-model/core';
import {SortOrder} from '@ui-model/common';

@Component({
  selector: 'ui-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})
export class TableComponent<T> {

  _fields: TableField[] = [];
  get fields(): TableField[] {
    return this._fields;
  }

  @Input()
  set fields(value: TableField[]) {
    if (this._fields !== value) {
      this._fields = value;
      this.sorter.fields = value;
    }
  }

  @Input() items: T[] = [];

  get sortable(): boolean {
    return this.sorter.enabled;
  }

  @Input()
  set sortable(value: boolean) {
    this.sorter.enabled = value;
  }

  sorter = new TableSorter().setFields(this.fields);

  size = {};

  orderCss(order: SortOrder): string {
    switch (order) {
      case SortOrder.Asc:
        return 'fa-sort-asc';
      case SortOrder.Desc:
        return 'fa-sort-desc';
      case SortOrder.None:
      default:
        return 'fa-sort';
    }
  }
}
