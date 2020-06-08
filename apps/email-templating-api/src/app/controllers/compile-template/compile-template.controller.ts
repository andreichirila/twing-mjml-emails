import {Body, Controller, Param, Post} from '@nestjs/common';
import {CompileTemplateParams} from '../../../../../shared/interfaces/compile-template-params';
import {CompileTemplateResponse} from '../../../../../shared/interfaces/compile-template-response';
import {TwingService} from '../../services/twing/twing.service';

@Controller()
export class CompileTemplateController {

    constructor(private twingService: TwingService) {
    }


    @Post('compile-template/:id')
    public compileTemplate(@Param('id') params: string,
                           @Body() values: CompileTemplateParams): CompileTemplateResponse {

        this.twingService.getTemplates();

        console.log(params);
        console.log(values);

        return {
            compiledTemplate: JSON.stringify(values)
        };
    }
}
