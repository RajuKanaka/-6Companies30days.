// Phone directory

function displayContacts(n, contact, s) {
  strArray = s.split``;
  for (let i in strArray) {
    const sub = strArray.splice(0, i + 1);
    const output = [];
    contact.forEach((element) => {
      if (element.includes(sub)) {
        ouput.push(element);
      }
    });
    console.log(output.length !== 0 ? output.join`` : 0);
  }
}

displayContacts(3, ["geeikistest", "geeksforgeeks", "geeksfortest"], "geeips");
