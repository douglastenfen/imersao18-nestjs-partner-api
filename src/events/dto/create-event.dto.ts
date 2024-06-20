import {
  IsString,
  IsNumber,
  IsNotEmpty,
  MaxLength,
  IsISO8601,
  Min,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;

  @IsISO8601()
  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;
}
