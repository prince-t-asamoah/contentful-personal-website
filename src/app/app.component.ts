import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentfulService } from './services/contentful/contentful.service';
import { ContentModel } from './model/content.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'contentful-personal-website';
  content: ContentModel | null = null;

  constructor(private readonly _contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this._contentfulService.getContent().then((res) => {
      this.content = res
      console.log(this.content)
    });
    console.log(this.content);
  }

}
