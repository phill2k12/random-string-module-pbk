export const getRandomChar = (_num) => {
    const chars = `${alphaNum.ascii_lowercase}${alphaNum.digits}`;
    if (!_num) _num = Math.random() * chars.length;
    let str = '';
    let i = 0;
    while (i < _num) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
        i++;
    }

    return str;
};

