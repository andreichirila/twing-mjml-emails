import {Module} from '@nestjs/common';
import {CompileTemplateController} from './controllers/compile-template/compile-template.controller';
import {MjmlService} from './services/mjml/mjml.service';
import {TwingService} from './services/twing/twing.service';
import {RawTemplatesService} from './services/raw-templates/raw-templates.service';

@Module({
    imports: [],
    controllers: [CompileTemplateController],
    providers: [MjmlService, TwingService, RawTemplatesService]
})
export class AppModule {
}
