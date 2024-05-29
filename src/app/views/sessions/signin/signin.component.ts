import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedAnimations} from 'src/app/shared/animations/shared-animations';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: UntypedFormGroup;
    @ViewChild('errorModal') errorModal;

    constructor(
        private fb: UntypedFormBuilder,
        private auth: AuthService,
        private router: Router,
        private modalService: NgbModal
    ) {
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard Module...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });

        this.signinForm = this.fb.group({
            username: ['username', Validators.required],
            password: ['1234', Validators.required]
        });
    }

    signin() {
        this.loading = true;
        this.loadingText = 'Sigining in...';
        this.auth.signin(this.signinForm.value)
            .subscribe(res => {
                    this.auth.setCredentials(res);
                    this.router.navigateByUrl('/dashboard/v1');
                    this.loading = false;
                },
                error => {
                    this.modalService.open(this.errorModal, {ariaLabelledBy: 'modal-basic-title', size: 'sm'})
                        .result.then((result) => {
                        console.log(result);
                    }, (reason) => {
                        console.log('Err!', reason);
                    });
                    console.log(error);
                    this.loading = false;
                }
            );
    }

}
