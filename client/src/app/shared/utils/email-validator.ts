import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    const domainString = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+@[A-Za-z0-9]+\.(${domainString})`);


    return (control) => {

        const isEmailInvalid = control.value === '' || regExp.test(control.value);
        
        return isEmailInvalid ? null : { emailValidator: true };
    };
}