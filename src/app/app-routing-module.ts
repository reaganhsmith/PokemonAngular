import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/pokemon'},
    {path: 'pokemon', component: PokemonComponent}
];

@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    }
)

export class appRoutingModule{


}