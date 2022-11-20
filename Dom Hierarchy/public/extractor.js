// BEGIN (write your solution here)
const extractor = (page = document.documentElement) => {
    const result = [];
    const nodes = page.parentNode.body.childNodes;
    const list = Array.from(nodes);
    const filtered = list.filter((item) => item.tagName === 'P');
    const filteredTags = filtered.map((item) => result.push(item.innerHTML.trim()));
    return result;
};
// END


// TEACHER SOLUTION
export default (root) => {
    const children = Array.from(root.parentNode.body.children);
    return children
        .filter((element) => element.tagName === 'P')
        .map((element) => element.innerHTML.trim());
};
// END