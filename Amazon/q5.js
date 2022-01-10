// Phone directory

function displayContacts(n, contact, s) {
  strArray = s.split``;
  for (let i = 0; i < strArray.length; i++) {
    const sub = strArray.slice(0, i + 1);
    const output = [];
    contact.forEach((element) => {
      if (element.includes(sub.join``)) {
        output.push(element);
      }
    });
    console.log(output.length !== 0 ? output.join` ` : 0);
  }
}

displayContacts(3, ["geeikistest", "geeksforgeeks", "geeksfortest"], "geee");
