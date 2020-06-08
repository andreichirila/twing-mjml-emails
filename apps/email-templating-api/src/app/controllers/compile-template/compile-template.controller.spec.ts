import {Test, TestingModule} from '@nestjs/testing';
import {CompileTemplateController} from './compile-template.controller';

describe('CompileTemplate Controller', () => {
    let controller: CompileTemplateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CompileTemplateController],
        }).compile();

        controller = module.get<CompileTemplateController>(CompileTemplateController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
