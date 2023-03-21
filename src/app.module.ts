import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorModule } from './sensor/sensor.module';
import { Sensor } from './sensor/sensor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sensordb',
      entities: [Sensor],
      synchronize: true,
    }),
    SensorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}