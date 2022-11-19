// BEGIN (write your solution here)
const solution = (url) => {
    window.location.href = url;
    return `${navigator.appCodeName}/${navigator.appVersion} ${url}`;
};
// END

// TEACHER SOLUTION
export default (href) => {
    window.location.href = href;
    const { userAgent } = window.navigator;
    const [agentName] = userAgent.split(' ');
    return `${agentName} ${window.location.href}`;
};
// END