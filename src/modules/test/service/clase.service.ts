import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from '../../../model/Clase';

@Injectable()
export class ClaseService {
    constructor(
        @InjectRepository(Clase)
        private _claseRepository: Repository<Clase>,
    ) {}

    async listarClases(): Promise<Clase[]> {
        return await this._claseRepository.find();
    }
    registrarClase(clase: Clase): Promise<Clase>{
        return this._claseRepository.save(clase);
    }
    eliminarClase(idClase: number): Promise<any> {
        return this._claseRepository.delete({idClase: idClase})
    }
    actualizarClase(clase: Clase): Promise<any> {
        return this._claseRepository.update({idClase: clase.idClase}, clase); 
    }
    listarClasesEstudiante(idEstudiante: number): Promise<Clase[]> {
        return this._claseRepository.query(
            `select cl.id_clase as idClase, cl.codigo, cl.titulo, cl.descripcion from clase cl, estudiante_clase ec
            where ec.id_estudiante = `+idEstudiante+`
            and cl.id_clase = ec.id_clase`);
    }
}
