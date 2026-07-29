import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform',
})
export class TransformPipe implements PipeTransform {
  transform(ch:string): string {
    return ch.replace(/[aeiouy]/gi, "*");
  }
}
