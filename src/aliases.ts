type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
const employee2: Employee = {
    id: 1,
    name: 'Vi',
    retire: (date: Date) => console.log(date)
}
console.log(employee2.id)
