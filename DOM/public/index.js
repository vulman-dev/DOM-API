// BEGIN (write your solution here)
const htmlBody = document.body.innerHTML;
htmlBody.trim();
const arrayHTMLbody = htmlBody.trim().split('\n');
const result = arrayHTMLbody.map((line) => `<p>${line}</p>`);
document.body.innerHTML = result.join('\n');
// END

// TEACHER SOLUTION
const text = document.body.innerHTML.trim();
const lines = text.split('\n');
const tags = lines.map((lina) => `<p>${line}</p>`);
document.body.innerHTML = tags.join('\n');
// END