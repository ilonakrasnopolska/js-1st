let ingredientCalories = 0 //Калорийность ингредиента
let totalCalories = 0 //Общая калорийность блюда
let ingredientArray = [] //Массив для хранения калорий ингредиентов

// Функция выводит текст в документ
function printText (text) {
  document.write(text)
}

// Функция выводит один ингредиент с описанием
function listItemIngredient(index, title, calories, weight) {
  ingredientCalories = calories *  weight //калорийность 1 ингредиента
  totalCalories = totalCalories + ingredientCalories // Прибавляем к общей калорийности блюда
  printText(`<li class = 'list__item'>
            ${index + ')'}
            ${title},
            калорийность: ${calories} ккал,
            вес: ${weight} гр,
            всего: ${ingredientCalories} ккал
            </li>`)
}

// Функция вывода суммарной калорийности блюда
function totalAllDishCalories(value) {
  printText(`<div class="total">
                    Калорийность всего блюда: ${totalCalories} ккал
                  </div>`)
}

printText(`<div class = 'container'>`)

printText(`<h1 class = 'subtitle'>
                Калькулятор калорийности блюда
                </h1>`)

printText(`<ul class = 'list'>`)

let index = 0


// Ингредиент 1 
index++
let nameOfIngredient = prompt(`Введите название ингедиента ${index}`)
let caloriesOfIngredient = Number(prompt(`Введите калорийность ингредиента ${index}`))
let weightOfIngredient = Number(prompt(`Введите вес ингредиента ${index}`))
listItemIngredient(index, nameOfIngredient, caloriesOfIngredient, weightOfIngredient)

// Ингредиент 2
index++
nameOfIngredient = prompt(`Введите название ингедиента ${index}`)
caloriesOfIngredient = Number(prompt(`Введите калорийность ингредиента ${index}`))
weightOfIngredient = Number(prompt(`Введите вес ингредиента ${index}`))
listItemIngredient(index, nameOfIngredient, caloriesOfIngredient, weightOfIngredient)

// Ингредиент 3
index++
nameOfIngredient = prompt(`Введите название ингедиента ${index}`)
caloriesOfIngredient = Number(prompt(`Введите калорийность ингредиента ${index}`))
weightOfIngredient = Number(prompt(`Введите вес ингредиента ${index}`))
listItemIngredient(index, nameOfIngredient, caloriesOfIngredient, weightOfIngredient)

printText(`</ul>`)

printText(`<div class = 'total-calories-wrapper'>`)

totalAllDishCalories(totalCalories)
                
printText(`</div>`)

printText(`</div>`)

