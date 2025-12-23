import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Repository } from 'typeorm';
import { Workspace } from './entities/workspace.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { toPagedDto } from '../shared/helpers/toPaged.dto';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
    private workspaceRepository: Repository<Workspace>,
  ) {}
  async create(createWorkspaceDto: CreateWorkspaceDto, user: User) {
    const newWorksSpace = this.workspaceRepository.create({
      ...createWorkspaceDto,
      owner: user,
      creator: user,
    });
    await this.workspaceRepository.save(newWorksSpace);
    return newWorksSpace;
  }

  async findAll(page: number = 1, limit: number = 10) {
    const [data, total] = await this.workspaceRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return toPagedDto(data, page, limit, total);
  }

  async findOne(id: number) {
    return await this.workspaceRepository.findOneOrFail({
      where: { id },
    });
  }

  async update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    const result = await this.workspaceRepository.update(
      id,
      updateWorkspaceDto,
    );
    if (result.affected === 0) throw new Error('Workspace not found');
    return this.findOne(id);
  }

  async remove(id: number) {
    const existing = await this.findOne(id);
    await this.workspaceRepository.softRemove(existing);
    return {
      success: true,
      message: 'Workspace deleted successfully',
    };
  }
}
