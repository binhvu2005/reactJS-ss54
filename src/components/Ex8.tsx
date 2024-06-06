
export default function Ex8() {
    function countDown(n: number): Promise<void> {
        return new Promise((resolve, reject) => {
            if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
                reject(new Error("Nhập số đi"));
                return;
            }
    
            const intervalId = setInterval(() => {
                console.log(n);
                n--;
    
                if (n <= 0) {
                    clearInterval(intervalId);
                    resolve();
                }
            }, 1000);
        });
    }
    countDown(5)
        .then(() => {
            console.log("Hoàn thành quá trình đếm");
        })
        .catch((error) => {
            console.error(`Error: ${(error as Error).message}`);
        });
    
  return (
    <div>Ex8</div>
  )
}
