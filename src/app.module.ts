import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './shared-func/auth/auth.module';
import { UsersModule } from './shared-func/users/users.module';
import { UserMasterModule } from './admin-func/user-master/user-master.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [AuthModule, UsersModule, UserMasterModule,
            TypeOrmModule.forRoot(),
           ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
