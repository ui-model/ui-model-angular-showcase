import {expect} from 'chai';
import {MultiSelect} from './multi-select';
import {Suppliers} from '../utils/supplier';

const options = [
  1,
  2,
  3,
];

describe('Multi Select', () => {
  it('constructor', () => {
    const select = new MultiSelect(options);
    expect(select.options)
      .to.eql([
      1,
      2,
      3,
    ]);
  });
  it('select', () => {
    const select = new MultiSelect(options);
    select.select(1);
    expect(select.anySelected).to.be.ok;
    expect(select.allSelected).to.not.be.ok;
    expect(select.anyUnselected).to.be.ok;
    expect(select.indeterminate).to.be.ok;
    expect(select.selected(1)).to.be.ok;
    expect(select.unselected(1)).to.not.be.ok;
    expect(select.selected(2)).to.not.be.ok;
    expect(select.unselected(2)).to.be.ok;
  });

  it('changes', (done) => {
    const select = new MultiSelect(options);
    select.changes.subscribe((value)=> {
      expect(value.option).to.equal(1);
      expect(value.value).to.be.true;
      done();
    });
    select.select(1);
  });

  it('select & deselect & toggle', () => {
    const select = new MultiSelect(options);
    select.select(1);
    expect(select.selected(1)).to.be.ok;
    select.deselect(1);
    expect(select.selected(1)).to.not.be.ok;
    select.toggle(1);
    expect(select.selected(1)).to.be.ok;
    select.selectAs(1, false);
    expect(select.selected(1)).to.not.be.ok;
    select.selectAs(1, true);
    expect(select.selected(1)).to.be.ok;
  });
  it('selectAll & deselectAll', () => {
    const select = new MultiSelect(options);
    select.selectAll();
    expect(select.allSelected).to.be.ok;
    select.deselectAll();
    expect(select.anySelected).to.not.be.ok;
    select.allSelected = true;
    expect(select.allSelected).to.be.ok;
  });
  it('toggleAll', () => {
    const select = new MultiSelect(options);
    select.toggleAll();
    expect(select.allSelected).to.be.ok;
    select.toggleAll();
    expect(select.anySelected).to.not.be.ok;
  });
  it('selection', () => {
    const select = new MultiSelect(options);
    select.select(1);
    expect(select.selection).to.eql([1]);
    select.select(2);
    expect(select.selection)
      .to
      .eql([
        1,
        2,
      ]);
  });
  it('supplier', () => {
    const select = new MultiSelect<{a: string}>([
      {a: '1'},
      {a: '2'},
      {a: '3'},
    ], Suppliers.objectByField('a'));
    select.select({a: '1'});
    expect(select.selected({a: '1'})).to.be.ok;
  });
});
