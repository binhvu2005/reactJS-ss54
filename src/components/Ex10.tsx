import React from 'react'

export default function Ex10() {
    function findElement(numbers: number[], valueToFind: number): Promise<number | string> {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(numbers) || !numbers.every(num => Number.isInteger(num))) {
                reject(new Error("Nhập số đi"));
                return;
            }
            const foundElement = numbers.find(num => num === valueToFind);
            if (foundElement !== undefined) {
                resolve(foundElement);
            } else {
                resolve("Không tìm thấy phần tử");
            }
        });
    }
    findElement([1,2,3,4,5], 3)
        .then(result => {
            console.log("Kết quả tìm kiếm:", result);
        })
        .catch(error => {
            console.error(`Error: ${(error as Error).message}`);
        });
  return (
    <div>Ex10</div>
  )
}
