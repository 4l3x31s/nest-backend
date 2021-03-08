import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EstudianteClase } from "./EstudianteClase";

@Index("pk_clase", ["idClase"], { unique: true })
@Entity("clase", { schema: "public" })
export class Clase {
  @ApiProperty({ required: true })
  @PrimaryGeneratedColumn({ type: "integer", name: "id_clase" })
  idClase: number;

  @ApiProperty({ required: true })
  @Column("character varying", { name: "codigo", length: 50 })
  codigo: string;

  @ApiProperty({ required: true })
  @Column("character varying", { name: "titulo", length: 150 })
  titulo: string;

  @ApiProperty({ required: true })
  @Column("text", { name: "descripcion" })
  descripcion: string;

  @OneToMany(
    () => EstudianteClase,
    (estudianteClase) => estudianteClase.idClase2
  )
  estudianteClases: EstudianteClase[];
}
