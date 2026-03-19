
let projects = []


const validateProject = (data) => {
    if (typeof data.title !== "string" || data.title.trim().length < 3) {
        alert("❌ Название должно быть минимум 3 символа")
        return false
    }

    const price = Number(data.price)
    if (isNaN(price) || price < 0) {
        alert("❌ Цена должна быть числом больше 0")
        return false
    }

    if (typeof data.skills === "string") {
        data.skills = data.skills.split(",").map(s => s.trim()).filter(s => s)
    }

    if (!data.skills || data.skills.length === 0) {
        alert("❌ Укажите хотя бы одну технологию")
        return false
    }

    data.title = data.title.trim()
    data.price = price
    data.description = data.description.trim()
    
    return true
}

function addProject(project) {
    projects.push(project)
    console.log(`✅ Проект "${project.title}" добавлен!`)
}

function renderProjects() {
    const container = document.getElementById('projects-list')
    
    if (projects.length === 0) {
        container.innerHTML = '<p class="no-projects">📭 Проектов пока нет. Добавьте первый!</p>'
        return
    }

    container.innerHTML = '' // Очищаем
    projects.forEach(project => {
        // Создаем карточку через createElement
        const card = document.createElement('div')
        card.className = 'project-card'
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <div class="project-price">💰 ${project.price.toLocaleString()}₽</div>
            <div class="project-tech">${project.skills.join(' • ')}</div>
            <p>${project.description}</p>
        `
        
        container.appendChild(card)
    })
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-project-form')
    
    form.addEventListener('submit', function(event) {
        event.preventDefault()  
        
        // Собираем данные из формы
        const formData = {
            title: document.getElementById('title').value,
            skills: document.getElementById('tech').value,
            description: document.getElementById('description').value,
            price: document.getElementById('price').value
        }
        
        
        if (validateProject(formData)) {
            addProject(formData)
            renderProjects()
            form.reset() // Очищаем форму
        }
    })
})
