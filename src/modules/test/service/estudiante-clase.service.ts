import { Injectable } from '@nestjs/common';
import { EstudianteClase } from '../../../model/EstudianteClase';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteClaseService {
    constructor(
        @InjectRepository(EstudianteClase)
        private _claseRepository: Repository<EstudianteClase>,
    ) {}

    listar(): Promise<EstudianteClase[]> {
        return this._claseRepository.find();
    }
    registrar(estudianteClase: EstudianteClase): Promise<EstudianteClase>{
        return this._claseRepository.save(estudianteClase);
    }
    eliminar(idEstudianteClase: number): Promise<any> {
        return this._claseRepository.delete({idEstudianteClase: idEstudianteClase})
    }
    actualizar(estudianteClase: EstudianteClase): Promise<any> {
        return this._claseRepository.update({idEstudianteClase: estudianteClase.idEstudianteClase}, estudianteClase); 
    }
}
