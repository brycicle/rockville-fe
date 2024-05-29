import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservationLotComponent} from './lot/reservation-lot.component';
import {ReservationComponent} from './reservation.component';
import {ReservationTableComponent} from './reservation-table/reservation-table.component';

const routes: Routes = [
    {
        path: '',
        component: ReservationComponent,
        children: [
            {
                path: 'lot',
                component: ReservationLotComponent,
            },
            {
                path: 'table',
                component: ReservationTableComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReservationRoutingModule {
}
