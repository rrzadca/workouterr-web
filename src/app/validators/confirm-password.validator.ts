import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: (
    passwordFieldName: string,
    passwordFieldName2: string,
) => ValidatorFn = (passwordFieldName, passwordFieldName2) => {
    return (form: AbstractControl): ValidationErrors | null => {
        const password = form.get(passwordFieldName)?.value;
        const password2 = form.get(passwordFieldName2)?.value;

        if (password === password2 || !password || !password2) {
            return null;
        }

        return { passwordsDoNotMatch: true };
    };
};
