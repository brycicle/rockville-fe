import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private userToken: any;

    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.userToken = this.authService.getToken();

        if (this.userToken === null || this.userToken === undefined) {
            console.log('No AUTH');
            return next.handle(req);
        }
        let headers = req.clone().headers;
        headers.append('Authorization', 'Bearer ' + this.userToken);
        const authReq = req.clone({
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.userToken
            })
        });

        console.log('Request : ' + authReq.headers.get('Authorization'));
        return next.handle(authReq);
        // }
    }
}
