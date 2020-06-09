import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CompileTemplateParams} from '../../../../../shared/interfaces/compile-template-params';
import {TwingService} from '../../services/twing/twing.service';
import {CompileTemplateResponse} from '../../../../../shared/interfaces/compile-template-response';
import {MjmlService} from '../../services/mjml/mjml.service';

@Controller('templates')
export class TemplatesController {

    constructor(private twingService: TwingService,
                private mjmlService: MjmlService) {
    }

    @Get('examples')
    public async getExamples(): Promise<string> {
        return new Promise<string>((resolve, _) => {
            // TODO: implement this
            resolve('in progress');
        });
    }

    @Post('compile/:id')
    public async compileTemplate(@Param('id') id: string,
                           @Body() body: CompileTemplateParams): Promise<CompileTemplateResponse> {
        const renderedTemplate = await this.twingService.getRenderedTemplate(id, body.values);
        const compiledTemplate = await this.mjmlService.compileTemplate(renderedTemplate);
        console.log(compiledTemplate);
        return {compiledTemplate};
    }

}
