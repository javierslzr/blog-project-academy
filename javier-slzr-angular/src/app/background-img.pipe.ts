import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'backgroundImg'
})
export class BackgroundImgPipe implements PipeTransform {

  constructor(private sanitization : DomSanitizer){}

  transform(value: any, args?: any): any {
    return this.sanitization.bypassSecurityTrustStyle(`url(${value})`)
  }

}
