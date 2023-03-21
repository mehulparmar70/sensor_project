import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from './sensor.entity';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(Sensor)
    private sensorRepository: Repository<Sensor>,
  ) {}

  async findAll(): Promise<Sensor[]> {
    return this.sensorRepository.find();
  }

  async findOne(id: number): Promise<Sensor> {
    return this.sensorRepository.findOne({ where: { id } });
  }

  async create(sensor: Sensor): Promise<Sensor> {
    return this.sensorRepository.save(sensor);
  }

  async remove(id: number): Promise<void> {
    await this.sensorRepository.delete(id);
  }
}
