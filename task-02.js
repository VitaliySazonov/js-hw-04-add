// Написати метод <strong> some </strong> який приймає масив і ф-ю
// callback. Цей метод поверне true якщо хоча б один елемент масиву
// пройже перевірку з callback callback приймає елемент масиву
let some = (arr, callback) => console.log(callback(arr))

let moreThan10 = arr => {
  for(let el of arr)
    if(el > 10)
      return true
  return false
}

let lessThan10 = arr => {
  for(let el of arr)
    if(el < 10)
      return true
  return false
}

some([1,2,3,23,5], moreThan10) // true (перевіряємо чи елементи > 10)
some([12,45,67,34], lessThan10) // false (перевіряємо чи елементи < 10)
