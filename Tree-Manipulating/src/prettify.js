// BEGIN (write your solution here)
const prettify = (body) => {
    const divs = Array.from(body.getElementsByTagName('div'));
    divs.map((div) => {
        const children = Array.from(div.childNodes);
        return children
            .filter((child) => child instanceof Text)
            .filter((child) => child.textContent.trim())
            .map((child) => {
                const newChild = document.createElement('p');
                newChild.textContent = child.nodeValue.trim();
                child.replaceWith(newChild);
            });
    });
};
// END

// My Version 2
const prettify1 = (body) => {
    const divs = Array.from(body.getElementsByTagName('div'));
    divs.map((div) => {
        const children = Array.from(div.childNodes);
        return children
            .filter((child) => child instanceof Text)
            .filter((child) => child.textContent.trim())
            .map((child) => {
                const p = body.createElement('p');
                p.textContent = child.textContent;
                child.replaceWith(p);
            });
    });
};
//

// TEACHER SOLUTION
export default (document) => {
    const divs = [...document.getElementsByTagName('div')];
    divs.forEach((div) => {
        const textNodes = [...div.childNodes]
            .filter((child) => child instanceof Text)
            .filter((child) => child.textContent.trim() !== '');
        textNodes.forEach((node) => {
            const p = document.createElement('p');
            p.textContent = node.textContent;
            node.replaceWith(p);
        });
    });
};
// END