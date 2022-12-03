import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RutasComponent } from './componentes/Rutas/Rutas.component';
import { SesionComponent } from './componentes/sesion/sesion.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { ReinicioComponent } from './componentes/reinicio/reinicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'Inicio', component:InicioComponent},
  {path: 'Rutas', component:RutasComponent},
  {path: 'Sesion', component:SesionComponent},
  {path: 'Crear_Cuenta', component:CrearComponent},
  {path: 'Recuperar_Cuenta', component:ReinicioComponent},
  {path: 'Acerca', component:AcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

