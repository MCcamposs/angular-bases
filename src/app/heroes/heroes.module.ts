import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';

/* para poder usar el ngIf */
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    ListComponent,
    HeroComponent,
  ],

  exports:[
    ListComponent,
    HeroComponent,
  ],
  imports:[
    CommonModule,
  ]
})

export class HeroesModule {

}
