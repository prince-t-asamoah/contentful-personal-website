import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../../environments/environment';
import { ContentModel } from '../../model/content.model';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private readonly client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken,
    host: environment.contentful.host,
  });

  getContent(): Promise<ContentModel> {
    const content = this.client.getEntry(environment.contentful.contentId)
    return content
  }
}
