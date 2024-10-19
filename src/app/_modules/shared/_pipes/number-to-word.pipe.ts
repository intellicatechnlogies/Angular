import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWord'
})
export class NumberToWordPipe implements PipeTransform {

  units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 
    'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

  tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  transform(num: number | string): string {
    num = +num;


    if (num === 0) return 'Zero';

    const rupees = Math.floor(num);
    const paise = Math.round((num - rupees) * 100);

    let words = '';

    if (rupees > 0) {
      words += this.convertNumber(rupees) + ' Rupee' + (rupees > 1 ? 's' : '') + ' ';
    }

    if (paise > 0) {
      words += this.convertNumber(paise) + ' Paisa' + (paise > 1 ? 's' : '') + ' ';
    }

    return words.trim();
  }

   convertThreeDigitNumber(num: number) {
    let result = '';
    if (num > 99) {
      result += this.units[Math.floor(num / 100)] + ' Hundred ';
    }
    num %= 100;
    if (num > 19) {
      result += this.tens[Math.floor(num / 10)] + ' ';
      num %= 10;
    }
    if (num > 0) {
      result += this.units[num] + ' ';
    }
    return result.trim();
  }

  convertNumber(num: number) {
    const crore = Math.floor(num / 10000000);
    const lakh = Math.floor((num % 10000000) / 100000);
    const thousand = Math.floor((num % 100000) / 1000);
    const remainder = num % 1000;

    let result = '';

    if (crore > 0) {
      result += this.convertThreeDigitNumber(crore) + ' Crore ';
    }
    if (lakh > 0) {
      result += this.convertThreeDigitNumber(lakh) + ' Lakh ';
    }
    if (thousand > 0) {
      result += this.convertThreeDigitNumber(thousand) + ' Thousand ';
    }
    if (remainder > 0) {
      result += this.convertThreeDigitNumber(remainder);
    }

    return result.trim();
  }
}
