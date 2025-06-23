// storage-wrapper.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageWrapper {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {}

  async ready() {
    if (!this._storage) {
      this._storage = await this.storage.create();
    }
    return this._storage;
  }
}