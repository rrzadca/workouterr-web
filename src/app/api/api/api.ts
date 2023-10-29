export * from './exercise.service';
import { NsApiExerciseService } from './exercise.service';
export * from './plan.service';
import { NsApiPlanService } from './plan.service';
export * from './training.service';
import { NsApiTrainingService } from './training.service';
export * from './user.service';
import { NsApiUserService } from './user.service';
export const APIS = [NsApiExerciseService, NsApiPlanService, NsApiTrainingService, NsApiUserService];
