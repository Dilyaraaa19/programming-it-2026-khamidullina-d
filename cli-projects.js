// массив проектов
let projects = []

// проверка проекта
const validateProject = (data) => {
     
    if (typeof data.title !== "string" || data.title.length < 3) {
        console.log("Ошибка: название должно быть минимум 3 символа")
        return false
    }

    
    const price = Number(data.price)
    
    
    if (isNaN(price) || price < 0) {
        console.log("Ошибка: цена должна быть числом больше 0")
        return false
    }
    
    // Присваиваем проверенную цену
    data.price = price

    // Проверка и преобразование skills
    if (typeof data.skills === "string") {
        data.skills = data.skills.split(",").map(s => s.trim())
    }

    return true
}

// добавление проекта
function addProject(project) {
    projects.push(project)
    console.log(`✅ Проект "${project.title}" добавлен!`)
}

// вывод проектов
function renderProjects() {
    if (projects.length === 0) {
        console.log("📭 Проектов нет")
        return
    }
    console.table(projects)
}

// пример добавления проектов
let project1 = {
    title: "Лендинг для кафе",
    link: "https://example.ru",
    skills: "HTML, CSS, JS",
    description: "Адаптивный сайт с формой заказа",
    price: 45000
}

if (validateProject(project1)) {
    addProject(project1)
}

renderProjects()