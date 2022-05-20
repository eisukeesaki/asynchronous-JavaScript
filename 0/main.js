function getData(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, ms);
  });
}

async function main() {
  const data = await getData(1000);
  console.log(`data:` + data);
};

main();

