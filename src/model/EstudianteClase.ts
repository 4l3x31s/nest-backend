import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clase } from "./Clase";
import { Estudiante } from "./Estudiante";

@Index("ixfk_estudiante_clase_clase", ["idClase"], {})
@Index("ixfk_estudiante_clase_estudiante", ["idEstudiante"], {})
@Index("pk_estudiante_clase", ["idEstudianteClase"], { unique: true })
@Entity("estudiante_clase", { schema: "public" })
export class EstudianteClase {
  
  @PrimaryGeneratedColumn({ type: "integer", name: "id_estudiante_clase" })
  idEstudianteClase: number;

  @Column("integer", { name: "id_estudiante" })
  idEstudiante: number;

  @Column("integer", { name: "id_clase" })
  idClase: number;

  @Column("timestamp without time zone", { name: "fecha" })
  fecha: Date;

  @ManyToOne(() => Clase, (clase) => clase.estudianteClases)
  @JoinColumn([{ name: "id_clase", referencedColumnName: "idClase" }])
  idClase2: Clase;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.estudianteClases)
  @JoinColumn([{ name: "id_estudiante", referencedColumnName: "idEstudiante" }])
  idEstudiante2: Estudiante;
}
