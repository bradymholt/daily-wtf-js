#!/usr/bin/env npx ts-node-esm
import "jsh";
import * as fs from "fs";
import * as path from "path";
import { JSDOM } from "jsdom";

usage(`\
Usage:
  convert-wtfjs.ts

Concerts WTF .html files from wtfjs.com to wtfs for use in this project.
`);

const wtfsRawPath = path.join(__dirname, "../src/wtfs/raw");
const wtfsDestPath = path.join(__dirname, "../src/wtfs/dest");

let counter = 1;
fs.readdirSync(wtfsRawPath).forEach((file) => {
  console.log(file);

  const contents = readFile(path.join(wtfsRawPath, file));
  const { window } = new JSDOM(contents);
  const codeContentElement = window.document.querySelector("code");
  const authorElement = window.document.querySelector("#content article p:last-child a");
  if (codeContentElement != null) {
    const codeContentFormatted = codeContentElement.innerHTML
      .replace(/^\n/, "")
      .replace(/\n$/, "")
      .split("\n")
      .map((line) => line.trim())
      .join("\n");
    echo(codeContentFormatted);

    let finalContent = codeContentFormatted;
    
    if (authorElement != null) {
      finalContent += `\n\n// Source: ${authorElement.innerHTML} (${authorElement.getAttribute("href")})`;      
    }

    let fileNumber = counter.toString();
    if (fileNumber.length === 1) {
      fileNumber = `00${fileNumber}`;
    } else if (fileNumber.length === 2) {
      fileNumber = `0${fileNumber}`;
    }

    const newFileName = `${fileNumber}_${file.substring(11)}`.replace(".html", ".js");
    writeFile(path.join(wtfsDestPath, newFileName), finalContent);
  }
  counter++;
});
