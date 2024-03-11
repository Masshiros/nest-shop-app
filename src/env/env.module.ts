import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_VALIDATION_SCHEMA } from './env.constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      expandVariables: true,
      validationSchema: ENV_VALIDATION_SCHEMA,
    }),
  ],
})
export class EnvModule {}
