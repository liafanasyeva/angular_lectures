import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PokemonService } from '../../service/pokemon.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { DeactivationGuarded } from '../../guard/close-edit-form.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.sass']
})
export class EditDetailsComponent implements DeactivationGuarded {

  @Input() editingPokemon:Pokemon;
  @Input() editModeChild: boolean;
  @Output() changEditMode = new EventEmitter<boolean>();

  public editDetailsForm: FormGroup;
  public isUpdating = false;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
		private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(switchMap((params: Params) => this.pokemonService.editPokemon(this.editingPokemon.id, this.editingPokemon.name, this.editingPokemon.damage)))
    .subscribe(pokemon => {
    this.editingPokemon = pokemon;
        this.createForm(this.editingPokemon);
  });
  }

  public createForm(pokemon: Pokemon) {
		this.editDetailsForm = this.formBuilder.group({
		    name: this.editingPokemon.name,
        damage: this.editingPokemon.damage
		});	
  }
  
  public onFormSubmit() {
		this.isUpdating = true;  
		this.editingPokemon.name = this.editDetailsForm.get('name').value;
		this.editingPokemon.damage = this.editDetailsForm.get('damage').value;
	    this.pokemonService.editPokemon(this.editingPokemon.id, this.editingPokemon.name, this.editingPokemon.damage )
	    .subscribe(() => 
		    this.router.navigate([ '../../'], {relativeTo: this.route}))
		;
  }
  
  public goBack(): boolean {
    if(confirm("Do you wish to cancel?")) {
      console.log("Success");
      alert('Not saved')
      console.log(this.editingPokemon.name);
      return true
    } else {
      console.log("Not success");
      return false
    }

  }

  public canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log("canDeact has fired the component!");
    return true;
    
  }



}
