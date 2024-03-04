import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly phone: string;
  @IsStrongPassword()
  readonly password: string;
}
