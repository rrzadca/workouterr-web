import { Route } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view.component';

export const routes: Route[] = [
    {
        path: '',
        component: DashboardViewComponent,
        children: [
            // plopAppend
        ],
    },
];
