// An altered Version of "document.getElementById()"
export function getElementByIdPlus(id) {
  const e = document.getElementById(id);
  if (e) {
    return e;
  } else {
    console.log("ERROR: element with ID '" + i + "' not found");
  }
}
