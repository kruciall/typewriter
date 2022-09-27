const sentence = "Hello from the other side! THE DARK SIDE!!\n";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
