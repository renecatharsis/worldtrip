function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello webpack 123456';

    return element;
}

document.body.appendChild(component());
