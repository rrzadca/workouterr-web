import { Route } from '@angular/router';
import { TrainingPlansViewComponent } from './training-plans-view.component';

export const routes: Route[] = [
    {
        path: '',
        component: TrainingPlansViewComponent,
        children: [
            // plopAppend
        ],
    },
];
