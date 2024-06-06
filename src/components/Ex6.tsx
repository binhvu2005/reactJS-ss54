
export default function Ex6() {
    async function isPrimeWithAsyncAwait(number: number): Promise<boolean> {
        if (typeof number !== 'number' || !Number.isInteger(number)) {
            throw new Error("Nhập số đi");
        }
        if (number <= 1) {
            return false;
        }
        if (number === 2) {
            return true;
        }
        if (number % 2 === 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
    
        return true;
    }
    async function runIsPrimeWithAsyncAwait() {
        try {
            const numberToCheck = 29;
            const isPrime = await isPrimeWithAsyncAwait(numberToCheck);
            console.log(`${isPrime}`);
        } catch (error) {
            console.error(`Error: ${(error as Error).message}`);
        }
    }
    runIsPrimeWithAsyncAwait();
    
  return (
    <div>Ex6</div>
  )
}
