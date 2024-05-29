import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationLotComponent} from './lot/reservation-lot.component';
import {MapComponent} from './lot/map/map.component';
import {LotTableComponent} from './lot/lot-table/lot-table.component';
import {ReservationRoutingModule} from './reservation-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormWizardModule} from '../../shared/components/form-wizard/form-wizard.module';
import {
    NgbCarousel,
    NgbDropdown,
    NgbDropdownMenu, NgbDropdownToggle,
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    NgbNavOutlet,
    NgbSlide
} from '@ng-bootstrap/ng-bootstrap';
import { ReservationComponent } from './reservation.component';
import { ReservationTableComponent } from './reservation-table/reservation-table.component';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        ReservationRoutingModule,
        FormsModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        FormWizardModule,
        NgbCarousel,
        NgbSlide,
        NgbNav,
        NgbNavContent,
        NgbNavItem,
        NgbNavLink,
        NgbNavOutlet,
        SharedPipesModule,
        NgbDropdown,
        NgbDropdownMenu,
        NgbDropdownToggle,
        NgxPaginationModule
    ],
    declarations: [ReservationLotComponent, MapComponent, LotTableComponent, ReservationComponent, ReservationTableComponent]
})
export class ReservationModule {
}
