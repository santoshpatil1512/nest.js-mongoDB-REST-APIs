import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStratergy } from './jwt.stratergy';

@Module({
  imports:[

    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOption: {
            expiresIn : config.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStratergy],
  exports: [JwtStratergy, PassportModule]
})
export class AuthModule {}
