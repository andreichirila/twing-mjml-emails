import {Injectable} from '@nestjs/common';
import {TwingEnvironment, TwingLoaderFilesystem} from 'twing';
import {PathsService} from '../paths/paths.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class TwingService {

    private readonly twing: TwingEnvironment;

    constructor(private pathsService: PathsService) {
        this.twing = this.createTwingEnvironment();
    }

    public async getRenderedTemplate(id: string, values: object): Promise<string> {
        const templatePath = `${id}/index.twig`;
        return this.twing.load(templatePath)
            .then(tpl => tpl.render(values))
            .catch(err => {
                // TODO: implement proper error handling
                console.error(err);
                throw new Error('omfg');
            });
    }

    private createTwingEnvironment(): TwingEnvironment {
        // TODO: use handlebars instead and implement template fetching in a separate service with caching?
        const templatesPath = this.pathsService.templatesPath;
        const twingLoader = new TwingLoaderFilesystem(templatesPath);
        return new TwingEnvironment(twingLoader, {
            auto_reload: !environment.production, // TODO: implement live reload via websockets for dev
            strict_variables: true
        });
    }

}

