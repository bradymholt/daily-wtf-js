import "./style/main.css";
import themes from "./style/themes.module.css";

import "prismjs/themes/prism.css";
import Prism from "prismjs";
Prism.manual = true;

// Load list of WTFs
const allWTFs = import.meta.glob("./wtfs/*.js", { as: "raw" });
const allWTFSourceFileNames = Object.keys(allWTFs);

const daysSinceEpoch = Math.floor(Date.now() / 8.64e7);
loadWTF(daysSinceEpoch);
setTheme(daysSinceEpoch);

function getRotatingTargetItemGivenSourceNumber(sourceNumber: number, targetList: Array<string>) {
  const sourceToTargetModulus = sourceNumber % targetList.length;
  const targetItemIndex = (sourceToTargetModulus === 0 ? targetList.length : sourceToTargetModulus) - 1;
  const targetItem = targetList[targetItemIndex];
  return targetItem;
}

function setTheme(daysSinceEpoch: number) {
  const targetBodyClass = getRotatingTargetItemGivenSourceNumber(daysSinceEpoch, Object.keys(themes));
  document.body.className = themes[targetBodyClass];
}

function loadWTF(daysSinceEpoch: number) {
  // Get the WTF filename to use for today.  We will rotate through the list of WTFs each day.
  const targetWTFSourceFileName = getRotatingTargetItemGivenSourceNumber(daysSinceEpoch, allWTFSourceFileNames);
  const codeElement = document.querySelector<HTMLDivElement>("#wtf code");
  // Load the WTF code content and display it
  if (codeElement) {
    allWTFs[targetWTFSourceFileName]().then((wtfContent) => {
      codeElement.innerHTML = wtfContent;
      // format the code
      Prism.highlightElement(codeElement);
    });
  }
}
