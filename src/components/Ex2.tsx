
export default function Ex2() {
    function divideNumbers(num1: number, num2: number): number | string{
        try{
            if(typeof num1 !== 'number' || typeof num2 !== 'number'){
                throw new Error("Nhập lại đi")
            }
            if (num2 === 0) {
                throw new Error("không phải là số 0 đâuuuuu")
            }
            const result = num1/num2;
            return result;
        } catch (error) {
            return `Error: ${(error as Error).message}`;
        } finally {
            console.log("Kết thúc.");
        }
    }
    const num1 = 10;
    const num2 = 2;
    
    const result = divideNumbers(num1, num2);
    console.log(`Result: ${result}`);
  return (
    <div>Ex2</div>
  )
}
