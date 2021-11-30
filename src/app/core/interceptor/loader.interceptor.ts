import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor  {

  constructor(private spinner: NgxSpinnerService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.spinner.show()
    return next.handle(req).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );

  }
}
