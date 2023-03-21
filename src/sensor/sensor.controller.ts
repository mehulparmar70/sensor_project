import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Sensor } from './sensor.entity';
import { SensorService } from './sensor.service';

@ApiTags('sensor')
@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Get()
  async findAll(): Promise<Sensor[]> {
    return this.sensorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Sensor> {
    return this.sensorService.findOne(parseInt(id));
  }

  @Post()
  async create(@Body() sensor: Sensor): Promise<Sensor> {
    return this.sensorService.create(sensor);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.sensorService.remove(parseInt(id));
  }
}
