import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCredentials } from './user.types.js';

@Controller('user')
export class UserController {
    @Post('/auth')
    findAll(@Body() userCredentials: UserCredentials): UserCredentials {
        return "Esta es la prueba de un endpoint"
    }
}