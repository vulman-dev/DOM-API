import camelCase from 'lodash/camelCase';

// BEGIN (write your solution here)
const normalize = (document) => {
    const allElements = Array.from(document.body.getElementsByTagName('*'));
    return allElements.map((element) => {
        const classes = element.classList;
        return classes.forEach((item) => {
            element.classList.replace(item, camelCase(item));
        });
    });
};
// END

// TEACHER SOLUTION
export default (document) => {
    const allNodes = [...document.body.getElementsByTagName('*')];
    allNodes.forEach((node) => {
        const process = (item) => node.classList.replace(item, camelCase(item));
        node.classList.forEach(process);
    });
};
// END