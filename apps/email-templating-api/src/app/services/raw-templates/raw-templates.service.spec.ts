import {Test, TestingModule} from '@nestjs/testing';
import {RawTemplatesService} from './raw-templates.service';

describe('RawTemplatesService', () => {
    let service: RawTemplatesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RawTemplatesService],
        }).compile();

        service = module.get<RawTemplatesService>(RawTemplatesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
