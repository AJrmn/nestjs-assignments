import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('factorial/:number')
  getFactorial(@Param('number') number: string) {
    const num = parseInt(number, 10);
    const factorial = this.calculateFactorial(num);
    return { factorial };
  }

  private calculateFactorial(n: number): number {
    if (n < 0) return -1; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Factorial of 0 or 1 is 1

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}