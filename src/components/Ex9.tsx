
export default function Ex9() {
    function sortArrayWithPromise(numbers: number[]): Promise<number[]> {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(numbers) || !numbers.every(num => Number.isInteger(num))) {
                reject(new Error("Input must be an array of integers."));
                return;
            }
            const sortedArray = [...numbers].sort((a, b) => a - b);
            resolve(sortedArray);
        });
    }
    sortArrayWithPromise([1,7,2,5,9,51])
        .then(sortedArray => {
            console.log("Sorted array:", sortedArray);
        })
        .catch(error => {
            console.error(`Error: ${(error as Error).message}`);
        });
    
  return (
    <div>Ex9</div>
  )
}
