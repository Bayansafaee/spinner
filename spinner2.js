const spinner = () => {
  const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n']
  let count = 0;
  for (const elm of arr) {
    setTimeout(() => {
      process.stdout.write(elm);
    }, 100 + count);
    count += 200;
  }
}
spinner();