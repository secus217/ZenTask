import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';
import { PayloadDto } from '../dto/payload.dto';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_SECRET') ||
        'defaultSecretdfasdfashrtaeh',
    });
  }
  async validate(payload: PayloadDto): Promise<User> {
    const user = await this.authService.validate(payload.sub);
    if (!user) {
      throw new Error('Unauthorized');
    }
    return user;
  }
}
