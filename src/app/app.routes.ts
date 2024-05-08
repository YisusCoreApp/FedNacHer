import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AfiliacionComponent } from './components/afiliacion/afiliacion.component';
import { HistoriaFeComponent } from './components/nosotros/historia-fe/historia-fe.component';
import { MvvComponent } from './components/nosotros/mvv/mvv.component';
import { CodigoEticaComponent } from './components/nosotros/codigo-etica/codigo-etica.component';
import { EquipoTrabajoComponent } from './components/nosotros/equipo-trabajo/equipo-trabajo.component';
import { FormularioComponent } from './components/afiliacion/formulario/formulario.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'historia',  component: HistoriaFeComponent},
    {path: 'mvv', component: MvvComponent},
    {path: 'codigoE', component: CodigoEticaComponent},
    {path: 'equipoT', component: EquipoTrabajoComponent},
    {path: 'recursos', component: RecursosComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'afiliacion', component: AfiliacionComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];
