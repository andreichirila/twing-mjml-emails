import {Module} from '@nestjs/common';
import {MjmlService} from './services/mjml/mjml.service';
import {TwingService} from './services/twing/twing.service';
import {TemplatesController} from './controllers/templates/templates.controller';
import {PathsService} from './services/paths/paths.service';

@Module({
    imports: [],
    controllers: [TemplatesController],
    providers: [MjmlService, TwingService, PathsService]
})
export class AppModule {
}
