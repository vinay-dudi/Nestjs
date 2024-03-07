import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users = [
    { id: 0, name: 'ninjaA', weapon: 'stars' },
    { id: 1, name: 'ninjaB', weapon: 'Kathi' },
  ];
  getNinjas(weapon?: 'stars' | 'Kathi') {
    if (weapon) {
      return this.users.filter((user) => user.weapon === weapon);
    }
    return this.users;
  }
  getUserById(id: number) {
    const user = this.users.filter((user) => user.id === id);
    if (!user) {
      throw new Error('User not Found');
    }
    return user;
  }
  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: Date.now(),
    };
    this.users.push(newUser);
    return newUser;
  }
}
