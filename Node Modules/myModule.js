let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () =>count;

//exporting here
module.exports = {
    inc,
    dec,
    getCount,
};
