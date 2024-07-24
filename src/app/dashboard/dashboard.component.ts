import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.type === 'mail' || input.type === 'password') {
      this.error = ''; // Réinitialise l'erreur lorsqu'il y a une entrée
    }
  }

  openModal(event: MouseEvent) {
    event.preventDefault(); // Empêche la redirection par défaut du lien
    this.modal = true;
  }

   closeModal() {
    this.modal = false;
  }
  

  modal = false;
  login = '';
  password = '';
  error = '';
recup: any;

validation(event: MouseEvent) {
  event.stopPropagation();
  this.modal = true;
}

  récupe() {
    // Ajouter la logique de récupération ici
  }


  modal2: boolean = false;
  modal3: boolean = false;


  openModal2() {
    this.modal2 = true;
  }

  toggleModal2() {
    this.modal2 = !this.modal2;
  }

  closeModals() {
    this.modal2 = false;
  }


  openModal3() {
    this.modal3 = true;
  }

  toggleModal3() {
    this.modal3 = !this.modal2;
  }

  closeModals3() {
    this.modal3 = false;
  }


}
