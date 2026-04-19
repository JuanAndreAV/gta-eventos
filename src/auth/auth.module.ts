import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';

import { passportJwtSecret } from 'jwks-rsa';


@Module({
    imports: [
        PassportModule, JwtModule.register({})
    ],
    providers: [JwtStrategy],
    exports: [PassportModule, JwtStrategy, JwtModule]
})
export class AuthModule {}
