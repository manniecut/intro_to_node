const fs = require("fs");
const path = require("path");

const source = process.argv[2];
const target = process.argv[3];

const constentsOfSource = fs.readFileSync(source, "utf-8");

const linesInSource = constentsOfSource.split("\n").filter(Boolean);

if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
};

linesInSource.forEach((line) => {
    const [filename, ...contentArr] = line.split(" ");
    const newFilePath = path.join(__dirname, target, filename);

    fs.writeFileSync(newFilePath, contentArr.join(" "), {
        flag: "w+",
        encoding: "utf-8",
    })
})