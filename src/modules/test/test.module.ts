import { Module } from '@nestjs/common';
import { EstudianteController } from './controller/estudiante.controller';
import { ClaseController } from './controller/clase.controller';
import { ClaseService } from './service/clase.service';
import { EstudianteService } from './service/estudiante.service';
import { EstudianteClaseService } from './service/estudiante-clase.service';
import { EstudianteClaseController } from './controller/estudiante-clase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from '../../model/Clase';
import { EstudianteClase } from '../../model/EstudianteClase';
import { Estudiante } from '../../model/Estudiante';


@Module({
  imports:[
    TypeOrmModule.forFeature([
      Clase,
      EstudianteClase,
      Estudiante
    ]),
  ],
  controllers: [
    EstudianteController, 
    ClaseController, 
    EstudianteClaseController
  ],
  providers: [
    ClaseService, 
    EstudianteService, 
    EstudianteClaseService]
})
export class TestModule {}
