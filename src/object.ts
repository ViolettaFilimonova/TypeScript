let employee1:{
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1, name: 'Vi', retire: (date: Date) => console.log(date)
}
console.log(employee1.id)
