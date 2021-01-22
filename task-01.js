// Написати метод <strong> every </strong>який приймає масив і ф-ю
// callback (в якій ми будемо робити різні перевірки) Цей метод
// повертає true якщо кожен елемент масиву пройшов перевірку з
// callback. Якщо хоча б один елемент не проходить перевірку то
// повертає false, callback приймає елемент масиву

let every = (arr, callback) => console.log(callback(arr))
let check = arr => Math.max(...arr) < 10
every([1, 2, 3, 4, 5], check) // true (перевіряємо чи елементи < 10)
every([2, 45, 67, 34], check) // false (перевіряємо чи елементи > 10)