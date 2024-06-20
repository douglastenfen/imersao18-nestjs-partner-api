import { TicketKind } from '@prisma/client';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class ReserveSpotDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true }) // cada elemento do array será validado como string
  spots: string[]; //['A1', 'A2']

  @IsNotEmpty()
  @IsIn(['full', 'half'])
  ticket_kind: TicketKind;

  @IsEmail()
  email: string;
}
