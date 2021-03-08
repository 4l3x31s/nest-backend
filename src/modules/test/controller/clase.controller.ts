import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseFilters } from '@nestjs/common';
import { ClaseService } from '../service/clase.service';
import { Clase } from '../../../model/Clase';
import { HttpExceptionFilter } from '../filter/global.filter';

@Controller('clase')
@UseFilters(new HttpExceptionFilter())
export class ClaseController {
    constructor(
        private readonly _claseService: ClaseService
    ){}
    @Get('listar')
    listarClase(){
        try{
            return this._claseService.listarClases();
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.message,
                }, 403);
        }
    }
    @Post()
    registrarClase(@Body() clase: Clase) {
        try{
            return this._claseService.registrarClase(clase);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.message,
                }, 403);
        }
        
    }
    @Delete(':idClase')
    eliminarClase(@Param('idClase') idClase: number){
        try{
            return this._claseService.eliminarClase(idClase);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Put()
    actualizarClase(@Body() clase: Clase ) {
        try{
            return this._claseService.actualizarClase(clase);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }
    @Get('mostrar-clase/:idEstudiante')
    listarEstudiantes(@Param('idEstudiante') idEstudiante: number) {
        try{
            return this._claseService.listarClasesEstudiante(idEstudiante);
        }catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Access to this site is forbidden',
                }, 403);
        }
    }

}
