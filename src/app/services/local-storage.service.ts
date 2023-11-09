import { Injectable } from '@angular/core';

export type LocalStorageItem = 'auth-token';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    getItem(key: LocalStorageItem): string | null {
        return localStorage.getItem(key);
    }

    setItem(key: LocalStorageItem, value: string): void {
        localStorage.setItem(key, value);
    }

    removeItem(key: LocalStorageItem): void {
        localStorage.removeItem(key);
    }
}
