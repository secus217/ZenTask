import { Test, TestingModule } from '@nestjs/testing';
import { BoardMembersController } from './board_members.controller';
import { BoardMembersService } from './board_members.service';

describe('BoardMembersController', () => {
  let controller: BoardMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardMembersController],
      providers: [BoardMembersService],
    }).compile();

    controller = module.get<BoardMembersController>(BoardMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
