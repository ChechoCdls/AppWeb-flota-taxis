import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  taxistas:any[] = [];
  taxistaSeleccionado:any = {};

  siguiendo:boolean = false;

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(afDB: AngularFireDatabase){

  	afDB.list('/usuarios').snapshotChanges()
  	.subscribe(taxistas => {

  		this.taxistas = [];

  		taxistas.forEach(taxista =>{
  			const $key = taxista.payload.key;
  			const data = { $key, ...taxista.payload.val()};

  			this.taxistas.push(data);
  			console.log(this.taxistas);

  			if(data.$key === this.taxistaSeleccionado.$key){
  				this.lat = data.lat;
  				this.lng = data.lng;
  			}
  		});


  	});

  	//console.log(this.conductores);
  }


  seguir_taxista(taxista:any){

  	//console.log(conductor);
  	this.lat = taxista.lat;
  	this.lng = taxista.lng;

  	this.siguiendo = true;

  	this.taxistaSeleccionado = taxista;

  }

  dejar_seguir(){

  	this.siguiendo = false;
  	this.taxistaSeleccionado = {};
  }

}
