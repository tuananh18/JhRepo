import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhAppSharedLibsModule, JhAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhAppSharedLibsModule, JhAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhAppSharedModule {
  static forRoot() {
    return {
      ngModule: JhAppSharedModule
    };
  }
}
