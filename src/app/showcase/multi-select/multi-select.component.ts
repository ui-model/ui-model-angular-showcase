import {Component} from '@angular/core';
import {MultiSelect, Transformers} from 'ui-model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  options = [
    {
      code: 'a',
      label: 'A'
    },
    {
      code: 'b',
      label: 'B',
    },
    {
      code: 'c',
      label: 'C',
    },
    {
      code: 'd',
      label: 'D',
    }
  ];

  select = new MultiSelect<{code: string, label: string}>().setOptions(this.options).setTransformer(Transformers.objectByField('code'));

  getCode = ({code}) => {
    return code;
  }
}
