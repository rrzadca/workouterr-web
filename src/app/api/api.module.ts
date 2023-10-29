import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { NsApiExerciseService } from './api/exercise.service';
import { NsApiPlanService } from './api/plan.service';
import { NsApiTrainingService } from './api/training.service';
import { NsApiUserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    NsApiExerciseService,
    NsApiPlanService,
    NsApiTrainingService,
    NsApiUserService ]
})
export class NsApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<NsApiModule> {
        return {
            ngModule: NsApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: NsApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('NsApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
