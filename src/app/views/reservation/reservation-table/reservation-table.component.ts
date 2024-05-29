import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {ReservationService} from '../../../shared/services/reservation.service';
import {auto} from '@popperjs/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-reservation-table',
    templateUrl: './reservation-table.component.html',
    styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent {

    viewMode: 'list' | 'grid' = 'list';
    searchControl: UntypedFormControl = new UntypedFormControl();
    reservations;
    filteredReservations;
    // Lot Filters
    blockLotFilter = true;
    lotType = false;
    lotSize = false;
    lotPrice = false;
    // House Filters
    house = true;
    housePrice = false;
    // Customer Filters
    clientName = true;
    customerType = false;
    email = false;
    contactNumber = false;
    // Other Filters
    agentName = true;
    createdBy = true;
    totalPrice = true;
    selectedReservation;
    reservationDocuments;
    reservationHistory;

    constructor(
        private modalService: NgbModal, private reservationService: ReservationService
    ) {
    }

    ngOnInit() {
        this.reservationService.getReservations()
            .subscribe((value: any) => {
                this.reservations = [...value.data];
                this.filteredReservations = value.data;
            });

        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(value => {
                this.filerData(value);
            });
    }

    filerData(val) {
        if (val) {
            val = val.toLowerCase();
        } else {
            return this.filteredReservations = [...this.reservations];
        }

        const columns = Object.keys(this.reservations[0]);
        if (!columns.length) {
            return;
        }

        const rows = this.reservations.filter(function (d) {
            for (let i = 0; i <= columns.length; i++) {
                const column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredReservations = rows;
    }

    openModal(content, reservationId: string) {
        for (let reservation of this.reservations) {
            if (reservation.id === reservationId) {
                this.selectedReservation = reservation;
                break;
            }
        }
        this.reservationService.getReservationDocuments(reservationId)
            .subscribe((value: any) => {
                this.reservationDocuments = value.data;
                console.log(this.reservationDocuments);
            });
        this.reservationService.getReservationHistory(reservationId)
            .subscribe((value: any) => {
                this.reservationHistory = value.data;
            });
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'})
            .result.then((result) => {
            console.log('Modal Closed');
        }, (reason) => {

        });

    }

    protected readonly auto = auto;
}
