function greet(name: string | null){
    if (name)
        console.log(name.toUpperCase())
    console.log('Holla')
}
greet(null)
