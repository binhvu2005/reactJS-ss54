
export default function Ex1() {
  function calculateBMI(weight: number, height: number): number | string {
  try{
    if (typeof weight !== 'number' || typeof height !== 'number') {
      throw new Error("Nhập lại đi");
    }
    if (isNaN(weight) || isNaN(height)) {
    throw new Error("Nhập lại đi");
    }
    if (weight <= 0 || height <= 0) {
    throw new Error("Lớn hơn 0.");
    }
    const bmi = weight /(height*height);
    return bmi;
  }catch (error){
    return `Error: ${(error as Error).message}`;
  }
  }
  const weight = 78;
  const height = 1.9;
  const Bmi = calculateBMI(weight, height);
  console.log(`BMI: ${Bmi}`);
  
  return (
    <div>Ex1</div>
  )
}