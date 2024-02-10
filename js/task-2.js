// Задача 2. Розрахунок калорій
// функція calcAverageCalories(days), повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня.
// Функція очікує один параметр: days — масив об'єктів.
// Кожен об'єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.
function calcAverageCalories(days) {
    // змінна суми калорій
    let totalCalories = 0;
    // кількість днів
    const quantityDays = days.length;
    // якщо кількість днів дорівнює нулю, то повертаємо 0
    if (quantityDays === 0) {
        return 0;
    }
    // в іншому випадку (якщо кількість днів більше нуля) перебираємо масив об'єктів,
    // на кожній ітерації до змінної суми калорій (totalCalories) додаємо значення calories
    // отримуємо загальну суму калорій
    for (const day of days) {
        totalCalories += day.calories;
    }
    // обчислюємо середньодобове значення кількості калорій, поділивши загальну кількість калорій за всі дни на кількість днів
    const averageCalories = totalCalories / quantityDays;
    // повертаємо результат
    return averageCalories;
}

    
    console.log(calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])); // 3180

console.log(calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])); // 2270

console.log(calcAverageCalories([])); // 0