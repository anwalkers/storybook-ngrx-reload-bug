import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/update-property.actions';


export const propertyFeatureKey = 'property';

export interface State {
  property: string;
}

export const initialState: State = {
  property: 'not initialized'
};


export const reducer = createReducer(
  initialState,
  on(actions.loadUpdateProperty, (state, action) => {
    return {
      ...state,
      property: 'updated'
    }
  })
);

export const selectProperty = (state: State) => state.property;
