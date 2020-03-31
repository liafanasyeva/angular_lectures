import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';
import { Pokemon } from '../../pokemon';
import { POKEMONS } from '../../../app/database_pokemons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {
  pokemons = POKEMONS;
  @Input() pokemon: Pokemon;
  @Output() changeButtonParent: EventEmitter<number> = new EventEmitter<number>();

  constructor( ) {
   }

  catchPokemon(id: number): void {
    const pokemon = this.pokemons.find(element => element.id === id);
    pokemon.caught = !pokemon.caught;

  }

  ngOnInit() {

  }

}
