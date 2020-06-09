import {Test, TestingModule} from '@nestjs/testing';
import {TwingService} from './twing.service';

describe('TwingService', () => {
    let service: TwingService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TwingService],
        }).compile();

        service = module.get<TwingService>(TwingService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
