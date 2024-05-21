import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent implements OnInit {
  sexo!: string[];
  clima!: string[];
  distrito!: string[];
  siniestro!: string[];
  franjaHoraria!: string[];
  condincionVia!: string[];
  formGroup: FormGroup;
  showResult = false;
  probabilidad = 0.5;

  constructor() {
    this.formGroup = new FormGroup({
      edadCntrl: new FormControl<number | null>(null),
      sexoCntrl: new FormControl<string | null>(null),
      climaCntrl: new FormControl<string | null>(null),
      distritoCntrl: new FormControl<string | null>(null),
      siniestroCntrl: new FormControl<string | null>(null),
      viaCntrl: new FormControl<string | null>(null),
      horarioCntrl: new FormControl<string | null>(null),
    });
  }

  ngOnInit() {
    this.sexo = ['HOMBRE', 'MUJER'];

    this.clima = [
      'LLUVIOSO',
      'DESPEJADO',
      'SOLEADO',
      'NUBLADO',
      'NIEBLA',
      'GRANIZADO',
    ];

    this.distrito = [
      'SAN JUAN DE LURIGANCHO',
      'SAN JUAN DE MIRAFLORES',
      'SAN ISIDRO',
      'SAN MIGUEL',
      'SAN BORJA',
      'SAN LUIS',
      'SAN MARTIN DE PORRES',
      'LOS OLIVOS',
      'LA MOLINA',
      'LA VICTORIA',
      'LA PERLA',
      'LA PUNTA',
      'COMAS',
    ];

    this.siniestro = [
      'CHOQUE',
      'DESPISTE',
      'ATROPELLO',
      'ATROPELLO FUGA',
      'CHOQUE CON OBJETO FIJO',
      'ESPECIAL',
      'CAÍDA DE PASAJERO',
      'VOLCADURA',
      'CHOQUE FUGA',
      'INCENDIO',
      'FERROVIARIO',
    ];

    this.franjaHoraria = ['MADRUGADA', 'MAÑANA', 'TARDE', 'NOCHE'];

    this.condincionVia = [
      'CONCRETO',
      'TROCHA',
      'ASFALTADA',
      'AFIRMADO',
      'CASCAJO',
      'ADOQUINADO',
      'EMPEDRADO',
    ];
  }

  predecir() {
    console.log(this.formGroup.value);
    const arrValues = Object.values(this.formGroup.value);
    const isNull = arrValues.some((value) => value === null);
    this.showResult = !isNull;
  }
}
