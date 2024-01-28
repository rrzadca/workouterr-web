import { Route } from '@angular/router';
import { ExercisesViewComponent } from './components/exercises-view/exercises-view.component';

export const routes: Route[] = [
    {
        path: '',
        component: ExercisesViewComponent,
        children: [
            // plopAppend
        ],
    },
];
