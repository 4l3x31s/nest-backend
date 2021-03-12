import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from '../../../model/Estudiante';

@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(Estudiante)
        private _estudianteRepostory: Repository<Estudiante>,
    ) {}
    listarEstudiante(): Promise<Estudiante[]> {
        return this._estudianteRepostory.find();
    }
    registrarEstudiante(estudiante: Estudiante): Promise<Estudiante>{
        return this._estudianteRepostory.save(estudiante);
    }
    eliminarEstudiante(idEstudiante: number): Promise<any> {
        return this._estudianteRepostory.delete({idEstudiante: idEstudiante})
    }
    actualizarEstudiante(estudiante: Estudiante): Promise<any> {
        return this._estudianteRepostory.update({idEstudiante: estudiante.idEstudiante}, estudiante); 
    }
    listarEstudiantesClase(idClase: number): Promise<Estudiante[]> {
        return this._estudianteRepostory.query(
            `select es.* from estudiante es, estudiante_clase ec
                where ec.id_clase = `+ idClase+`
                and es.id_estudiante = ec.id_estudiante`);
    }
}
