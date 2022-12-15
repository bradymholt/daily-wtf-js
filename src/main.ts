import "./style.css";

import "prismjs/themes/prism.css";
import Prism from "prismjs";
Prism.manual = true;

// Load list of wtfs
const allWtfs = import.meta.glob("./wtfs/*.js", { as: "raw" });
const allWtfFileNames = Object.keys(allWtfs);

// Get the wtf filename to use for today.  We will rotate through the list of wtfs each day.
const daysSinceEpoch = Math.floor(Date.now() / 8.64e7);
const daysToFileNamesModulus = daysSinceEpoch % allWtfFileNames.length;
const todaysFileName =
  allWtfFileNames[daysToFileNamesModulus === 0 ? allWtfFileNames.length : daysToFileNamesModulus - 1];

// Load the wtf content and display it
const codeElement = document.querySelector<HTMLDivElement>("#wtf code");
if (codeElement) {
  allWtfs[todaysFileName]().then((randomWtfContent) => {
    codeElement.innerHTML = randomWtfContent;
    // format the code
    Prism.highlightElement(codeElement);
  });
}
