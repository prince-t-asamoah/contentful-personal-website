import { Component, Input } from '@angular/core';
import { ContentModel, ContentModelType } from '../../model/content.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input({ required: true }) content: ContentModelType['hero'] | null = null;

  // get content() {
  //   const heroContent = this._content?.fields['hero'];
  //   return heroContent;
  // }
}
