
export default function Ex7() {
    
const myFirstPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});
myFirstPromise.then((message) => {
    console.log(`Result! ${message}`);
}).catch((error) => {
    console.error(`Error: ${error}`);
});

  return (
    <div>Ex7</div>
  )
}
