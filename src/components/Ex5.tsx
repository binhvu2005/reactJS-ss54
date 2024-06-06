
export default function Ex5() {
    function isPrimeWithPromise(number: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (typeof number !== 'number' || !Number.isInteger(number)) {
                reject(new Error("Nhập sai rồi."));
                return;
            }
    
            if (number <= 1) {
                resolve(false);
                return;
            }
            if (number === 2) {
                resolve(true);
                return;
            }
            if (number % 2 === 0) {
                resolve(false);
                return;
            }
    
            for (let i = 3; i <= Math.sqrt(number); i += 2) {
                if (number % i === 0) {
                    resolve(false);
                    return;
                }
            }
    
            resolve(true);
        });
    }
    
    function runIsPrimeWithPromise() {
        const numberToCheck = 29;
    
        isPrimeWithPromise(numberToCheck)
            .then(isPrime => {
                console.log(`${isPrime}`);
            })
            .catch(error => {
                console.error(`Error: ${(error as Error).message}`);
            });
    }
    runIsPrimeWithPromise();   
  return (
    <div>Ex5</div>
  )
}
