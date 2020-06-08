import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {CompileTemplateParams} from '../../../shared/interfaces/compile-template-params';
import {map} from 'rxjs/operators';
import {CompileTemplateResponse} from '../../../shared/interfaces/compile-template-response';

@Component({
    selector: 'emails-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    public compiledTemplate$: Observable<string>;

    constructor(private httpClient: HttpClient) {

        const emailID = 'confirmation';

        const exampleData = {
            users: [
                {name: 'Node'},
                {name: 'Twig'},
                {name: 'MJML'},
                {name: 'Angular'}
            ]
        };

        this.compiledTemplate$ = this.compileEmail(emailID, {values: exampleData});
    }

    private compileEmail(id: string, values: CompileTemplateParams): Observable<string> {
        return this.httpClient.post<CompileTemplateResponse>(`${environment.apiUrl}/compile-template/${id}`, values).pipe(
            map(response => response.compiledTemplate)
        );
    }
}
