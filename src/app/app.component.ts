import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollService } from './services/scroll.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
                RouterLink,
                  NavBarComponent,
                    FooterComponent,
                      FontAwesomeModule,],
})
export class AppComponent implements OnInit{
  title = 'herbolaria';

  constructor(private scrollService: ScrollService){}

  ngOnInit() {
    this.scrollService.init();
  }
}
