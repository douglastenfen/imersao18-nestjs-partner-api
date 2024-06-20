import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseFilters,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ReserveSpotDto } from './dto/reserve-spot.dto';
import { ReservationExceptionFilter } from 'src/core/exceptions/reservation-exception.filter';

@Controller('events')
@UseFilters(new ReservationExceptionFilter())
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Post(':id/reserve')
  @UsePipes(new ValidationPipe({ transform: true }))
  reserveSpots(
    @Body() reserveRequest: ReserveSpotDto,
    @Param('id') eventId: string,
  ) {
    return this.eventsService.reserveSpot({ ...reserveRequest, eventId });
  }
}
