import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'Kathi') {
    // const service = new UserService();
    return this.service.getNinjas(weapon);
  }
  // @Get()
  // getUsers(@Query('id') id: string) {
  //   return { id };
  // }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id };
  }
  @Post()
  createNinja(@Body() bodyData: CreateUserDto) {
    return {
      name: bodyData.name,
    };
  }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() bodyData: UpdateUserDto) {
    return {
      id,
      name: bodyData,
    };
  }
  @Delete(':id')
  removeNinja() {
    return {};
  }
}
