var employee = {
    id: 1, name: 'Vi', retire: function (date) { return console.log(date); }
};
var fun = employee.retire;
console.log(fun);
