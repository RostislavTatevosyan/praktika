let root = document.querySelector(':root')
let button = document.querySelector('#themeToggle')

button.addEventListener('click', () => {
  event.preventDefault()
	root.classList.toggle('dark')
	if (button.textContent === 'Перейти на темную тему') {
		button.textContent = 'Перейти на светлую тему'
	} else {
		button.textContent = 'Перейти на темную тему'
	}
})