import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('prime/:number')
  checkPrime(@Param('number') number: string) {
    const num = parseInt(number, 10);
    const isPrime = this.isPrime(num);
    return { isPrime };
  }

  private isPrime(n: number): boolean {
    if (n <= 1) return false; // 0 and 1 are not prime numbers
    if (n <= 3) return true; // 2 and 3 are prime numbers
    if (n % 2 === 0 || n % 3 === 0) return false; // Exclude multiples of 2 and 3

    // Check divisors up to √n
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
}
