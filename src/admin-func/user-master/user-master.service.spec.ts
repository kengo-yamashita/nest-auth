import { Test, TestingModule } from '@nestjs/testing';
import { UserMasterService } from './user-master.service';

describe('UserMasterService', () => {
  let service: UserMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMasterService],
    }).compile();

    service = module.get<UserMasterService>(UserMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
