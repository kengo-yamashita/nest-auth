import { Test, TestingModule } from '@nestjs/testing';
import { UserMasterController } from './user-master.controller';

describe('UserMaster Controller', () => {
  let controller: UserMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMasterController],
    }).compile();

    controller = module.get<UserMasterController>(UserMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
