import { Route } from '@angular/router';
import { TrainingsViewComponent } from './trainings-view.component';

export const routes: Route[] = [
    {
        path: '',
        component: TrainingsViewComponent,
        children: [
            // plopAppend
        ],
    },
];
