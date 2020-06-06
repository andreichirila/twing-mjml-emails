import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
    selector: 'emails-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    public hello$ = this.http.get<any>(environment.apiUrl + '/hello');

    constructor(private http: HttpClient) {
    }
}
