import { Controller, Get, Post } from '@nestjs/common';

@Controller('notes')
export class NotesController {
  @Get(':id')
  findOne(): string {
    return 'service find one';
  }

  @Get()
  findAll(): string {
    return 'all notes service';
  }

  @Post()
  createNote(): string {
    return 'created note';
  }
}
