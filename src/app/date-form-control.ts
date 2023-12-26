import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(enteredValue: string, options: any) {
    console.log(enteredValue);
    if (enteredValue.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (enteredValue.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (enteredValue.length === 2 && this.value.length === 3) {
      super.setValue(enteredValue, { ...options, emitModelToViewChange: true });
      return;
    }

    if (enteredValue.length === 2) {
      super.setValue(`${enteredValue}/`, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    super.setValue(enteredValue, {
      ...options,
      emitModelToViewChange: true,
    });
  }
}
