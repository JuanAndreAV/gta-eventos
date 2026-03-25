import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEventoDto {
    @IsString()
    @IsNotEmpty({ message: 'El nombre del evento es requerido' })
    nombre: string;
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha: Date;
    @IsString()
    lugar: string;
    @IsString()
    @IsOptional()
    descripcion: string;
    @IsOptional()
    @IsBoolean()
    inscripcion: boolean;

}
