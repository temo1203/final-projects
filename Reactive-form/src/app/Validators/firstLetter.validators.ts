import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noCap(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value as string;

  if (controlValue && /^[a-z]/.test(controlValue)) {
    return { firstLetterCapitalized: true };
  }
  return null;
}
