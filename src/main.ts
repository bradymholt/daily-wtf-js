import "./style.css";

import "prismjs/themes/prism.css";
import Prism from "prismjs";
Prism.manual = true;

const modules = import.meta.glob("./wtfs/*.html", { as: "raw" });
const moduleFileNames = Object.keys(modules);
const randomWtfFileName = moduleFileNames[Math.floor(Math.random() * moduleFileNames.length)];
modules[randomWtfFileName]().then((randomWtfContent) => {
  document.querySelector<HTMLDivElement>("#wtf")!.innerHTML = randomWtfContent;
  Prism.highlightAll();
});
