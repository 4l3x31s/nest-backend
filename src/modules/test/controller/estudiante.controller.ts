import { Controller, Delete, Get, Post, Put, Body, Param, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { EstudianteService } from '../service/estudiante.service';
import { Estudiante } from '../../../model/Estudiante';
import { HttpExceptionFilter } from '../filter/global.filter';

@Controller('estudiante')
@UseFilters(new HttpExceptionFilter())
export class EstudianteController {
    constructor(
        private readonly _estudianteService: EstudianteService
    ){}
    @Get('listar')
    listarClase(){
        try{
            return this._estudianteService.listarEstudiante();
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Post()
    registrarClase(@Body() estudiante: Estudiante) {
        try{
            return this._estudianteService.registrarEstudiante(estudiante);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Delete(':idEstudiante')
    eliminarClase(@Param('idEstudiante') idEstudiante: number){
        try{
            return this._estudianteService.eliminarEstudiante(idEstudiante);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Put()
    actualizarClase(@Body() estudiante: Estudiante ) {
        try{
            return this._estudianteService.actualizarEstudiante(estudiante);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Get('mostrar-estudiantes/:idClase')
    listarEstudiantes(@Param('idClase') idClase: number) {
        try{
            return this._estudianteService.listarEstudiantesClase(idClase);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.message,
                }, 403);
        }
    }
}
