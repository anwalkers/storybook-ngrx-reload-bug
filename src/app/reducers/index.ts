import { InjectionToken } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromProperty from './property.reducer';


export interface State {
  [fromProperty.propertyFeatureKey]: fromProperty.State;
}

// CASE1: WORKS for both storybook and application
// export const ROOT_REDUCERS: ActionReducerMap<State, Action> = {
//   [fromProperty.propertyFeatureKey]: fromProperty.reducer,
// };

// CASE 2: BROKEN for storybook, WORKS for application
// export function reducersFactory(): ActionReducerMap<State, Action> {
//   return {
//     [fromProperty.propertyFeatureKey]: fromProperty.reducer,
//   }
// }

// export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
//   factory: reducersFactory
// });

// CASE 3: BROKEN for storybook, WORKS for application
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    [fromProperty.propertyFeatureKey]: fromProperty.reducer,
  })
});



export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
