/**
 * WorkouteRR API
 * WorkouteRR REST API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CreateExerciseDto } from '../model/models';
import { Exercise } from '../model/models';
import { UpdateExerciseDto } from '../model/models';


import { ApiConfiguration }                                     from '../configuration';



export interface ExercisesApiServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: ApiConfiguration;

    /**
     * Create exercise
     * 
     * @param createExerciseDto 
     */
    exercisesControllerCreate(createExerciseDto: CreateExerciseDto, extraHttpRequestParams?: any): Observable<Exercise>;

    /**
     * Find exercises
     * 
     * @param name 
     */
    exercisesControllerFind(name: string, extraHttpRequestParams?: any): Observable<Array<Exercise>>;

    /**
     * Get exercise details
     * 
     * @param id 
     */
    exercisesControllerFindOne(id: string, extraHttpRequestParams?: any): Observable<Exercise>;

    /**
     * Delete exercise
     * 
     * @param id 
     */
    exercisesControllerRemove(id: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Update exercise
     * 
     * @param id 
     * @param updateExerciseDto 
     */
    exercisesControllerUpdate(id: string, updateExerciseDto: UpdateExerciseDto, extraHttpRequestParams?: any): Observable<Exercise>;

}
