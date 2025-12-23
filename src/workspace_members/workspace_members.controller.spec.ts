import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceMembersController } from './workspace_members.controller';
import { WorkspaceMembersService } from './workspace_members.service';

describe('WorkspaceMembersController', () => {
  let controller: WorkspaceMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkspaceMembersController],
      providers: [WorkspaceMembersService],
    }).compile();

    controller = module.get<WorkspaceMembersController>(WorkspaceMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
