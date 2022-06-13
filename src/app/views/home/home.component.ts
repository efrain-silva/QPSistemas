import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Output() aoClicar = new EventEmitter<any>();

  nome!: Text;
  email!: EmailValidator;
  telefone!: number;
  celular!: number;
  cpf!: number;
  data!: number;

  dados(){
    console.log('Solicitar dados');
    const dadosEmitir = { nome: this.nome, email: this.email, telefone: this.telefone, celular: this.celular, cpf: this.cpf, data: this.data };
    this.aoClicar.emit(dadosEmitir);
  }

  ngOnInit(): void {
  }

}


