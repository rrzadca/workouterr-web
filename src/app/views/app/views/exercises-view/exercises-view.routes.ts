import { Route } from '@angular/router';
import { ExercisesViewComponent } from './exercises-view.component';

export const routes: Route[] = [
    {
        path: '',
        component: ExercisesViewComponent,
        children: [
            // plopAppend
        ],
    },
];
