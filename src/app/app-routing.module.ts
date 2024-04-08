import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonEditComponent } from './pokemon/pokemon-edit/pokemon-edit.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/pokemon', pathMatch: 'full'},
    { path: 'pokemon', component: PokemonComponent, children: [
        { path: 'new', component: PokemonEditComponent },
        { path: ':id', component: PokemonDetailsComponent },
        { path: ':id/edit', component: PokemonEditComponent }
    ]}
];


@NgModule(
    {
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    }
)

export class AppRoutingModule{

}




