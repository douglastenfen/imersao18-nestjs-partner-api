import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSpotDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;
}
