# explore JavaScript's asynchronous behaviors

[0/main.js](0/main.js)
```JavaScript
function getData(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, ms);
  });
}

async function main() {
  const data = await getData(1000);
  console.log(`data:` + data); // does not execute until the promise in the previous line is settled
};

main();

```

