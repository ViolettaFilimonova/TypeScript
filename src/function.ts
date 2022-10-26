function f(num: number, year?: number): number{
    if (year || 2008 < 2022)
        return num * 2
    return num * 3
}

console.log(f(2, 2010))
