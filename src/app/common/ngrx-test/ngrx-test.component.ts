import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUpdateProperty } from 'src/app/actions/update-property.actions';
import * as fromApp from '../../reducers/property.reducer';

@Component({
  selector: 'app-ngrx-test',
  template: `
   <p>
  		ngrx-test Works!
   </p>
  `
})
export class NgrxTestComponent implements OnInit {

  constructor(@Inject(Store) private store: Store<fromApp.State>) {
    this.store.dispatch(loadUpdateProperty());
   }

  ngOnInit() {
    this.store.select(fromApp.selectProperty).subscribe((property) => {
      console.log(property);
    })
  }

}
