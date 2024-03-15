import { ChangeDetectorRef, DestroyRef, Injectable } from '@angular/core';
import { StatefulClass } from '@core/stateful-class';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type DateLocaleType = 'pl' | 'pl-PL' | 'en' | 'en-US';

export interface NumberSeparators {
    group: string;
    decimal: string;
}

interface LanguageServiceState {
    currentLanguageId: string;
    currentLocale: string;
}

@Injectable({
    providedIn: 'root',
})
export class LanguageService extends StatefulClass<LanguageServiceState> {
    constructor() {
        super();

        this.createState({
            currentLanguageId: 'pl',
            currentLocale: 'pl-PL',
        });
    }

    getCurrentLanguageId(): string {
        return this.state.currentLanguageId;
    }

    getCurrentLocale(): string {
        return this.state.currentLocale;
    }

    getCurrentLocaleAsDateLocaleType(): DateLocaleType {
        return this.state.currentLocale as DateLocaleType;
    }

    setLanguage(language: string, locale: string): void {
        this.setState({
            currentLanguageId: language,
            currentLocale: locale,
        });
    }

    runDetectChangesOnLanguageChange(
        changeDetectorRef: ChangeDetectorRef,
        destroyRef: DestroyRef,
    ): void {
        this.observeStateChange('currentLanguageId')
            .pipe(takeUntilDestroyed(destroyRef))
            .subscribe((_) => {
                changeDetectorRef.detectChanges();
            });
    }

    getNumberSeparators(): NumberSeparators {
        const number = 99999.99;

        const numberSeparators: NumberSeparators = {
            group: Intl.NumberFormat(this.getCurrentLocale())
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                .formatToParts(number)
                .filter((part: any) => part.type === 'group')[0]?.value,
            decimal: Intl.NumberFormat(this.getCurrentLocale())
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                .formatToParts(number)
                .filter((part: any) => part.type === 'decimal')[0]?.value,
        };

        return numberSeparators;
    }
}
