import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './database_pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Pokemon app';
  data: Pokemon[] = POKEMONS;

  constructor() {

  }

  ngOnInit() {
  }
}
