import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {CompileTemplateParams} from '../../../shared/interfaces/compile-template-params';
import {map} from 'rxjs/operators';
import {CompileTemplateResponse} from '../../../shared/interfaces/compile-template-response';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'emails-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    public compiledTemplate$: Observable<SafeHtml>;

    constructor(private httpClient: HttpClient,
                private domSanitizer: DomSanitizer) {

        const emailID = 'confirmation';

        const exampleData = {
            users: [
                {name: 'NestJS'},
                {name: 'Twing'},
                {name: 'MJML'},
                {name: 'Angular'}
            ]
        };

        this.compiledTemplate$ = this.compileEmail(emailID, {values: exampleData});
    }

    private compileEmail(id: string, values: CompileTemplateParams): Observable<SafeHtml> {
        return this.httpClient.post<CompileTemplateResponse>(`${environment.apiUrl}/templates/compile/${id}`, values).pipe(
            map(response => response.compiledTemplate),
            map(template => this.domSanitizer.bypassSecurityTrustHtml(template))
        );
    }
}
