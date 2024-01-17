export function maskMonetary(event) {
    const inputValue = event.target.value;
    const keyPress = event.key;

    if (!keyPress.match(/^[0-9]+$/)) {
        return inputValue.slice(0, -1);
    }

    const format = inputValue.replace(/\D/gim, '');
    const newValue = formatReal(format);

    return newValue;
}

export function formatReal(int) {
    let tmp = int + '';

    tmp = tmp.replace(/([0-9]{2})$/g, ',$1');

    if (tmp.length > 6) {
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
    }

    return tmp;
}