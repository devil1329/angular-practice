import { IterableDiffers, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

	transform(value: number, tempType: string): number {
		let iTemperatureToReturn = 0;
		if (value && !isNaN(value)) {
			if (tempType == 'ToCelsius')
				iTemperatureToReturn = (value - 32) / 1.8;
			else if (tempType == 'ToFarent')
				iTemperatureToReturn = (value * 1.8) + 32;
		}
		return iTemperatureToReturn;
	}
}
