import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private readonly client = contentful.createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
    host: environment.contentful.host,
  });
}
