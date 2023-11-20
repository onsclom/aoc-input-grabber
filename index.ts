const year = Number(process.argv.at(-2))
const day = Number(process.argv.at(-1))

if (!year || !day) {
  console.error("Need valid year and day")
  process.exit(1)
}

console.log(`Downloading input for ${year} day ${day}`)
const req = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
  headers: { cookie: `session=${process.env.SESSION}` },
})
const text = await req.text()

Bun.write(`input.txt`, text)
console.log(`Wrote to input.txt`)
