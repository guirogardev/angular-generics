import { AbstractControl } from '@angular/forms';

export function urlValidator(control: AbstractControl): any {
    if (!control.value.startsWith('https') || !control.value.includes('.me')) {
      return { urlValidator: true };
    }
    return null;
}

export function requiredValidator(control: AbstractControl): any {
  if (!control.value || control.value.trim() === '') {
    return { requiredValidator: true };
  }
  return null;
}
