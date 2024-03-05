import {
  IsEmail,
  IsPhoneNumber,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @Length(2, 50)
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsPhoneNumber('VN')
  readonly phone: string;
  @IsStrongPassword()
  readonly password: string;
}
