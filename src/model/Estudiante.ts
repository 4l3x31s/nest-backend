import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EstudianteClase } from "./EstudianteClase";

@Index("pk_estudiante", ["idEstudiante"], { unique: true })
@Entity("estudiante", { schema: "public" })
export class Estudiante {
  @ApiProperty({ required: true })
  @PrimaryGeneratedColumn({ type: "integer", name: "id_estudiante" })
  idEstudiante: number;

  @ApiProperty({ required: true })
  @Column("character varying", {
    name: "identificacion_estudiante",
    length: 50,
  })
  identificacionEstudiante: string;

  @ApiProperty({ required: true })
  @Column("character varying", { name: "nombre", length: 200 })
  nombre: string;

  @ApiProperty({ required: true })
  @Column("character varying", { name: "apellido", length: 200 })
  apellido: string;

  @OneToMany(
    () => EstudianteClase,
    (estudianteClase) => estudianteClase.idEstudiante2
  )
  estudianteClases: EstudianteClase[];
}
