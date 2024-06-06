
export default function Ex4() {
    async function sumWithAsyncAwait(numbers: number[]): Promise<number> {
        if (!Array.isArray(numbers) || !numbers.every(num => Number.isInteger(num))) {
            throw new Error("Nhập số đi");
        }
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum;
    }
    async function runSumWithAsyncAwait() {
        try {
            const array = [1, 2, 3, 4, 5, 6, 7];
            const result = await sumWithAsyncAwait(array);
            console.log(`Tổng: ${result}`);
        } catch (error) {
            console.error(`Error: ${(error as Error).message}`);
        }
    
    }   
    runSumWithAsyncAwait();
  return (
    <div>Ex4</div>
  )
}

