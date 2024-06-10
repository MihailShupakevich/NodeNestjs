import { IsString, Length } from 'class-validator';

export class userCreateDto {
  @IsString()
  @Length(1, 256)
  firstName: string;
  lastName: string;
}
