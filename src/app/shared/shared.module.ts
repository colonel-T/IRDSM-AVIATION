// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from './spinner/spinner.component';


// shared.module.ts
@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule, // <-- important pour que tous les composants qui importent ce module voient le pipe
    SpinnerComponent
  ],
  declarations: [
    SpinnerComponent
  ]
})
export class SharedModule { }
