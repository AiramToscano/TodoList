import { sign, SignOptions } from 'jsonwebtoken';
import md5 from 'md5';
import { Injectable } from '@nestjs/common';
// import { JwtPayloadHandler } from '../interfaces/IJwt';
import { User } from '../interfaces/users.dto';
import { PrismaService } from 'src/model/PrismaService';

@Injectable()
export class JWT {
  constructor(private prisma: PrismaService) {}

  async createJwt(data: User) {
    const md5password = md5(data.password);
    const verifyUser = await this.prisma.user.findFirst({
      where: { username: data.username, password: md5password },
    });
    const secret = String(process.env.JWT_SECRET);
    const signInOptions: SignOptions = {
      algorithm: 'HS256',
      expiresIn: '24h',
    };
    const payload = {
      name: verifyUser?.username,
    };
    return sign(payload, secret, signInOptions);
  }

  //   async validJwt(token: string) {
  //     const validToken = decode(token);
  //     if (validToken != null) {
  //       const { name } = validToken as JwtPayloadHandler;
  //       const listUser = await this.user.readUser(name);
  //       if (listUser != null) {
  //         return true;
  //       }
  //       return null;
  //     }
  //     return null;
  //   }
}
