import { Controller, Delete, Get, Param, Post, Put, Body, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { EstudianteClaseService } from '../service/estudiante-clase.service';
import { EstudianteClase } from '../../../model/EstudianteClase';
import { HttpExceptionFilter } from '../filter/global.filter';

@Controller('estudiante-clase')
@UseFilters(new HttpExceptionFilter())
export class EstudianteClaseController {
    constructor(
        private readonly _estudianteClaseService: EstudianteClaseService
    ){}
    @Get('listar')
    listarClase(){
        try{
            return this._estudianteClaseService.listar();
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Post()
    registrarClase(@Body() estudianteClase: EstudianteClase) {
        try{
            estudianteClase.fecha = new Date();
            return this._estudianteClaseService.registrar(estudianteClase);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Delete(':idEstudianteClase')
    eliminarClase(@Param('idEstudianteClase') idEstudianteClase: number){
        try{
            return this._estudianteClaseService.eliminar(idEstudianteClase);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Put()
    actualizarClase(@Body() estudianteClase: EstudianteClase ) {
        try{
            return this._estudianteClaseService.actualizar(estudianteClase);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
}
