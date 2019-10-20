import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from '../../model/user.entity';
import { UserMasterService } from './user-master.service';

@Crud({
    model: {
        type: User,
    },
})
@Controller('user-master')
export class UserMasterController {
    constructor(public service: UserMasterService) {}
}
