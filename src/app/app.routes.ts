import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { HomeRoutes } from './home/index';
import { UsuariosRoutes } from './usuarios/index';
import { ClientesRoutes } from './clientes/index';
import { CasosRoutes } from './casos/index';
import { RecursosRoutes } from './recursos/index';

export const routes: Routes = [
    ...HomeRoutes,
    ...LoginRoutes,
    ...UsuariosRoutes,
    ...ClientesRoutes,
    ...CasosRoutes,
    ...RecursosRoutes
];