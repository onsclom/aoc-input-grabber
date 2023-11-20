# aoc-input-grabber

Simple bun script that loads advent of code input files and writes to
`input.txt` in your current working directory.

To use make a `.env` file:

```
SESSION=[your AoC session cookie]
```

You can find your AoC session cookie in chrome dev tools. It will be in the
application tab -> storage -> cookies.

Build the script as an executeable and install it:

```
bun build index.ts --compile --outfile aoc-grab
sudo cp aoc-grab /usr/local/bin
```

Run it:

```
aoc-grab [year] [day]
```
