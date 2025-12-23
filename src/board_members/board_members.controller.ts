import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardMembersService } from './board_members.service';
import { CreateBoardMemberDto } from './dto/create-board_member.dto';
import { UpdateBoardMemberDto } from './dto/update-board_member.dto';

@Controller('board-members')
export class BoardMembersController {
  constructor(private readonly boardMembersService: BoardMembersService) {}

  @Post()
  create(@Body() createBoardMemberDto: CreateBoardMemberDto) {
    return this.boardMembersService.create(createBoardMemberDto);
  }

  @Get()
  findAll() {
    return this.boardMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardMembersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardMemberDto: UpdateBoardMemberDto) {
    return this.boardMembersService.update(+id, updateBoardMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardMembersService.remove(+id);
  }
}
