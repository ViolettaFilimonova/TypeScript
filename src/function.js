function f(num, year) {
    if (year || 2008 < 2022)
        return num * 2;
    return num * 3;
}
console.log(f(2, 2010));
