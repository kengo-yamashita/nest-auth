import { Module } from '@nestjs/common';
import { UserMasterController } from './user-master.controller';
import { UserMasterService } from './user-master.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../model/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserMasterController],
  providers: [UserMasterService]
})
export class UserMasterModule {}
