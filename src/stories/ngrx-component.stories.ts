// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NgrxTestComponent } from 'src/app/common/ngrx-test/ngrx-test.component';
import { NgrxTestModule } from 'src/app/common/ngrx-test/ngrx-test.module';
import { ROOT_REDUCERS, metaReducers } from 'src/app/reducers';

export default {
  title: 'NGRX/Component',
  component: NgrxTestComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
          NgrxTestModule,
          StoreModule.forRoot(ROOT_REDUCERS, { 
              metaReducers,
              runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true
            }
         }),
      ],

    // FOR CASE 2: Attempt to provide ROOT-REDUCERS as injectable token, NOTE: need to import the reducers factory
    //   providers: [
    //     {
    //         provide: ROOT_REDUCERS,
    //         useFactory: reducersFactory,
    //     },
    //   ]
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<NgrxTestComponent> = (args: NgrxTestComponent) => ({
  props: args,
});

export const Reload = Template.bind({});
Reload.args = {
};
