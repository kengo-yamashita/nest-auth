import { Module } from '@nestjs/common';
import { UserMasterController } from './user-master.controller';
import { UserMasterService } from './user-master.service';

@Module({
  controllers: [UserMasterController],
  providers: [UserMasterService]
})
export class UserMasterModule {}
