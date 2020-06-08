import {Body, Controller, Param, Post} from '@nestjs/common';
import {CompileTemplateParams} from '../../../../../shared/interfaces/compile-template-params';
import {CompileTemplateResponse} from '../../../../../shared/interfaces/compile-template-response';

@Controller()
export class CompileTemplateController {

    // constructor(private rawTemplatesService: RawTemplatesService,
    //             private mjmlService: MjmlService,
    //             private twingService: TwingService) {
    // }


    @Post('compile-template/:id')
    public compileTemplate(@Param('id') params: string,
                           @Body() values: CompileTemplateParams): CompileTemplateResponse {

        console.log(params);
        console.log(values);

        return {
            compiledTemplate: JSON.stringify(values)
        };
    }
}
