import "./style.css";
const modules = import.meta.glob("./wtfs/*.html", { as: "raw" });
const moduleFileNames = Object.keys(modules);
const randomWtfFileName = moduleFileNames[Math.floor(Math.random() * moduleFileNames.length)];
modules[randomWtfFileName]().then((randomWtfContent) => {
  document.querySelector<HTMLDivElement>("#wtf")!.innerHTML = randomWtfContent;
});
