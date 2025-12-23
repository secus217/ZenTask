import { Module } from '@nestjs/common';
import { BoardMembersService } from './board_members.service';
import { BoardMembersController } from './board_members.controller';

@Module({
  controllers: [BoardMembersController],
  providers: [BoardMembersService],
})
export class BoardMembersModule {}
