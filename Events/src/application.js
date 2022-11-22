export default () => {
    // BEGIN (write your solution here)
    const btn = document.getElementById('alert-generator');
    btn.addEventListener('click', () => {
        const el = document.querySelector('.alerts');
        const num = document.getElementsByClassName('alert').length;
        const alert = document.createElement('div');
        alert.innerHTML = `Alert ${num + 1}`;
        alert.classList.add('alert', 'alert-primary');
        el.prepend(alert);
    });
    // END

    // TEACHER SOLUTION
    const button = document.getElementById('alert-generator');
    const alertsBox = document.querySelector('.alerts');
    let i = 1;
    button.addEventListener('click', () => {
        const alert = document.createElement('div');
        alert.classList.add('alert', 'alert-primary');
        alert.textContent = `Alert ${i}`;

        alertsBox.prepend(alert);

        i += 1;
    });
    // END
};