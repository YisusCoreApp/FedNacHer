import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(){
  }
  
  // menuOpen: boolean = false;

  menuOpen: boolean = false;
  dropdowns: { [key: string]: boolean } = {};

  closeMenu() {
    this.menuOpen = false;
    this.dropdowns = {}; // Cierra todos los dropdowns
  }

  toggleDropdown(dropdown: string) {
    this.dropdowns[dropdown] = !this.dropdowns[dropdown];
  }

  isDropdownOpen(dropdown: string): boolean {
    return this.dropdowns[dropdown];
  }
}
