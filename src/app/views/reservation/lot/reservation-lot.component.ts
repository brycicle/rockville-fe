import {Component, ViewChild} from '@angular/core';
import {NgbModal, NgbNav, NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {LotService} from '../../../shared/services/lot.service';
import {HouseService} from '../../../shared/services/house.service';
import {take} from 'rxjs/operators';
import {LotCoordinate} from '../../../shared/models/lot-coordinate';
import {Lot} from '../../../shared/models/lot';
import {FormBuilder, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {House} from '../../../shared/models/house';
import {HousePicture} from '../../../shared/models/house-picture';
import {HouseDetail} from '../../../shared/models/house-detail';
import {ReservationService} from '../../../shared/services/reservation.service';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
    selector: 'app-lot',
    templateUrl: './reservation-lot.component.html',
    styleUrls: ['./reservation-lot.component.scss']
})
export class ReservationLotComponent {
    public lots2: Array<Lot> = [];

    lot: Lot = new Lot(
        '1',
        [],
        'Lot',
        'Block',
        'Available',
        'Type',
        0,
        [],
        0
    );
    errors:string[] = [];

    reservationFiles;

    house: House = new House(
        '1',
        'house.name',
        0,
        0,
        0,
        0,
        1,
        [],
        []
    );
    houseModelSelected: string = 'Select Model';
    firstName: string = '';
    middleName: string = '';
    lastName: string = '';
    suffix: string = '';
    gender: string = 'Select Gender';
    maritalStatus: string = 'Select Status';
    customerType: string = 'Select Type';
    email: string = '';
    agentName: string = '';
    mobileNumber: string = '';
    address: string = '';
    reservationFee: File;
    govId: File;
    reservationFeePath = '';
    govIdPath = '';

    public houses: any[] = [];

    mapLoaded = false;
    houseReservationForm;
    active;
    reservationFilesForm!: FormGroup;

    @ViewChild('reservationTab') reservationTab;


    constructor(
        private modalService: NgbModal,
        private lotService: LotService,
        private houseService: HouseService,
        private fb: UntypedFormBuilder,
        private reservationService: ReservationService,
        private authService: AuthService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.agentName = this.authService.getAgentName();

        this.reservationFilesForm = this.fb.group({
            reservationFee: [''],
            govId: ['']
        });

        this.houseService.getHouses()
            .pipe(take(1))
            .subscribe(
                value => {
                    value.data.forEach(house => {
                        let houseDetails: HouseDetail[] = [];
                        house.details.forEach(detail => {
                            houseDetails.push(
                                new HouseDetail(detail.detail)
                            );
                        });
                        let housePictures: HousePicture[] = [];
                        house.pictures.forEach(picture => {
                            housePictures.push(
                                new HousePicture(picture.image, picture.description)
                            );
                        });
                        let houseToInsert = new House(
                            house.id,
                            house.name,
                            house.floorArea,
                            house.lotArea,
                            house.price,
                            house.basePrice,
                            house.multiplier,
                            houseDetails,
                            housePictures
                        );
                        this.houses.push(houseToInsert);
                    });
                });
        this.lotService.getLots()
            .pipe(take(1))
            .subscribe(
                value => {
                    value.data.forEach(lot => {
                        let lotCoordinates: LotCoordinate[] = [];
                        lot.coordinates.forEach(coordinate => {
                            let lotCoordinate = new LotCoordinate(coordinate.coorX, coordinate.coorY);
                            lotCoordinates.push(
                                lotCoordinate
                            );
                        });
                        let houses: string[] = [];
                        lot.lotHouses.forEach(lotHouse => {
                            houses.push(
                                lotHouse.houseName
                            );
                        });
                        let lotToInsert = new Lot(
                            lot.id,
                            lotCoordinates,
                            lot.lotName,
                            lot.blockName,
                            lot.status,
                            lot.lotType.lotType,
                            lot.size,
                            houses,
                            lot.lotType.price
                        );
                        this.lots2.push(
                            lotToInsert
                        );
                    });
                    this.mapLoaded = true;
                }
            );
    }

    getImage(event: any, target: string): void {
        if (event.target.files && event.target.files[0]) {
            if (target === 'reservationFee') {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    this.reservationFeePath = reader.result as string; // base64 Image src
                this.reservationFee = event.target.files ? event.target.files[0] : null;
                this.reservationFilesForm.get('reservationFee')?.setValue(this.reservationFee);
                };
            } else if (target === 'govId') {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    this.govIdPath = reader.result as string; // base64 Image src
                };
                this.govId = event.target.files ? event.target.files[0] : null;
                this.reservationFilesForm.get('govId')?.setValue(this.govId);
            }
        }
    }

    selectTab(tabNumber: number) {
        this.errors = [];
        if (this.active === 2 && !this.lot.houses.includes(this.houseModelSelected) && tabNumber===3) {
            this.errors.push('houseModel');
            return;
        } else if (this.active === 3 && tabNumber===4) {
            if (this.validateCustomerInfo()) {
                return;
            }
        } else if (this.active === 4 && tabNumber===5) {
            if (this.validateReservationFiles()) {
                return;
            }
        } else if (this.active === 5 && tabNumber===6) {
            if (this.validateAgentInfo()) {
                return;
            }
        }
        this.active = tabNumber;
    }

    validateAgentInfo(): boolean {
        let hasAgentInfoError = false;
        if (this.agentName === '') {
            this.errors.push('agentName');
            hasAgentInfoError = true;
        }
        return hasAgentInfoError;
    }

    validateReservationFiles(): boolean {
        let hasReservationFilesError = false;
        if (this.reservationFee === undefined) {
            this.errors.push('reservationFee');
            hasReservationFilesError = true;
        }
        if (this.govId === undefined) {
            this.errors.push('govId');
            hasReservationFilesError = true;
        }
        return hasReservationFilesError;
    }

    validateCustomerInfo(): boolean {
        let hasCustomerError = false;
        if (this.firstName === '') {
            this.errors.push('firstName');
            hasCustomerError = true;
        }
        if (this.lastName === '') {
            this.errors.push('lastName');
            hasCustomerError = true;
        }
        if (this.gender === 'Select Gender') {
            this.errors.push('gender');
            hasCustomerError = true;
        }
        if (this.maritalStatus === 'Select Status') {
            this.errors.push('maritalStatus');
            hasCustomerError = true;
        }
        if (this.customerType === 'Select Type') {
            this.errors.push('customerType');
            hasCustomerError = true;
        }
        if (this.email === '') {
            this.errors.push('email');
            hasCustomerError = true;
        }
        if (this.mobileNumber === '') {
            this.errors.push('mobileNumber');
            hasCustomerError = true;
        }
        if (this.address === '') {
            this.errors.push('address');
            hasCustomerError = true;
        }
        return hasCustomerError;
    }

    onNavChange(changeEvent: NgbNavChangeEvent) {
        changeEvent.preventDefault();
    }

    public getHouse(name: string): House {
        for (let house of this.houses) {
            if (house.name === name) {
                return house;
            }
        }
        return this.house;
    }

    openModal(content, lotId: string) {
        if (this.getLot(lotId).status === 'Available') {
            this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'})
                .result.then((result) => {
                console.log('Modal Closed');
            }, (reason) => {
                this.active = 1;
                this.houseModelSelected = 'Select Model';
                this.house = new House(
                    '1',
                    'house.name',
                    0,
                    0,
                    0,
                    0,
                    1,
                    [],
                    []
                );
                this.lot = new Lot(
                    '1',
                    [],
                    'Lot',
                    'Block',
                    'Available',
                    'Type',
                    0,
                    [],
                    0
                );
                this.reservationFeePath = '';
                this.reservationFee =  null;
                this.govIdPath = '';
                this.govId = null;
                this.reservationFilesForm.get('reservationFee')?.setValue(this.reservationFee);
                this.reservationFilesForm.get('govId')?.setValue(this.govId);
            });
            this.lot = this.getLot(lotId);
        }
    }

    getLot(lotId: string): Lot {
        for (let lot of this.lots2) {
            if (lot.lotId === lotId) {
                return lot;
            }
        }
        return this.lot;
    }

    setCustomerType(customerType: string) {
        this.reservationService.getReservationChecklist(customerType).pipe()
            .subscribe(value => {
                this.reservationFiles = value;
                this.customerType = customerType;
            });
    }

    setGender(gender: string) {
        this.gender = gender;
    }

    setMaritalStatus(maritalStatus: string) {
        this.maritalStatus = maritalStatus;
    }

    setReservationId(reservationCode: string): string{
        let reservationId = "";
        let strings = reservationCode.split('_');
        strings.forEach(value => reservationId = reservationId + value[0].toUpperCase() + value.slice(1).toLowerCase());
        return 'reservation' + reservationId.replace('_','');
    }

    public setHouse(name: string) {
        this.house = this.getHouse(name);
    }
    submitReservationForm() {
        let reservationForm = this.fb.group({
            reservationResFee: this.reservationFilesForm.get('reservationFee')?.value,
            reservationGovId: this.reservationFilesForm.get('govId')?.value,
            lotRequest: {
                lotName : this.lot.lotNumber,
                blockName : this.lot.blockNumber,
                lotPrice : this.lot.size * this.lot.price
            },
            houseRequest: {
                'houseName' : this.houseModelSelected,
                'housePrice' : (this.house.basePrice + ((this.lot.size * this.lot.price)) - (this.house.lotArea * 10000)) - (this.lot.size * this.lot.price),
                'multiplier' : 1
            },
            customerRequest: {
                'firstName' : this.firstName,
                'middleName' : this.middleName,
                'lastName' : this.lastName,
                'suffix' : this.suffix,
                'gender' : this.gender,
                'maritalStatus' : this.maritalStatus,
                'type' : this.customerType,
                'emailAddress' : this.email,
                'contactNumber' : this.mobileNumber,
                'address' : this.address
            },
            agentName : this.agentName
        });
        this.reservationService.addReservation(reservationForm, this.reservationFilesForm.get('reservationFee')?.value, this.reservationFilesForm.get('govId')?.value)
            .pipe(take(1))
            .subscribe(res => {
                    console.log('success');
                    console.log(res);
                },
                error => {
                    console.log('error');
                    console.log(error);
                }
            );
    }
}
