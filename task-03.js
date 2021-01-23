// Створити метод <strong> compact </strong> який приймає масив і
// вертає новий де відсутні будь-які значення що при переведені в
// bool дають false

function compact(arr) {
  let result = [];
  for (let el of arr)
    if (el)
      result.push(el)
  return result;
}

console.log(compact([1, 0, '', null, 'Hello'])) // [1,'Hello']