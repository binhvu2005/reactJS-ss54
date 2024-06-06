
export default function Ex3() {
    function sumWithPromise(numbers: number[]): Promise<number> {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(numbers) || !numbers.every(num => Number.isInteger(num))) {
                reject(new Error("Nhập số đi."));
                return;
            }
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    
            resolve(sum);
        });
    }
    
    const sumArrayWithPromise = [1, 2, 3, 4, 5, 6, 7];
    
    sumWithPromise(sumArrayWithPromise)
        .then(result => {
            console.log(`Tổng: ${result}`);
        })
        .catch(error => {
            console.error(`Error: ${(error as Error).message}`);
        });
  return (
    <div>Ex3</div>
  )
}

