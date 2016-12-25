import { UsuarioI } from '../interfaces/usuario';
export class Usuario implements UsuarioI {
    id: number;
    nombre: string;
    cedula: string;
    email: string;
    clave: string;
    cargo: string;
    telefono: string;
    celular: string;

    constructor(obj?: UsuarioI) {
        this.id = obj && obj.id ||0;
        this.nombre = obj && obj.nombre ||"" ;
        this.cedula = obj && obj.cedula ||"";
        this.email = obj && obj.email ||"";
        this.clave = obj && obj.clave ||"";
        this.cargo = obj && obj.cargo ||"";
        this.telefono = obj && obj.telefono ||"";
        this.celular = obj && obj.celular ||"";
    }
    toString(){
        return this.nombre + " C.C. "+this.cedula+" Cargo: "+this.cargo;
    }
}
