import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';
import { Pokemon } from '../../pokemon';

@Component({
  selector: 'app-catch-button',
  templateUrl: './catch-button.component.html',
  styleUrls: ['./catch-button.component.sass']
})

export class CatchButtonComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() changeButton: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  public onCatchButton( pokemon ): void {
    this.changeButton.emit(pokemon.id);
  }

}
