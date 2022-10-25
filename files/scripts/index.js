const $nav_burger = document.querySelector('.index-header__nav-burger');
const $nav_responsive_menu = document.querySelector("#responsive_menu")
const $nav_open = document.querySelector('.index-header__nav-links-open-smenu')
const $nav_smenu = document.querySelector('.index-header__nav-links-smenu')
const $nav_arrow = document.querySelector('.index-header__nav-links-arrow')
const $nav_start_button = document.querySelector("#start-button");
const $animation_left_elements = document.querySelectorAll('.animation-left')
const $animation_right_elements = document.querySelectorAll('.animation-right')
const $animation_down_elements = document.querySelectorAll('.animation-down')
const $animation_card_elements = document.querySelectorAll('.animation-left-card')

$nav_open.addEventListener("click", () => {
	$nav_arrow.classList.toggle('rotate-arrow')
	$nav_smenu.classList.toggle('trigger-menu')
})
$nav_start_button.addEventListener("click", () => {
	$nav_responsive_menu.classList.toggle("index-header__nav-links-responsive");
})
$nav_burger.addEventListener("click", () => {
	$nav_responsive_menu.classList.toggle("index-header__nav-links-responsive");
})

const observerLeft = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) entry.target.classList.add('animation-from-left')
		// else entry.target.classList.remove('animation-from-left')
	})
}, { threshold: 0.4 })

const observerRight = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) entry.target.classList.add('animation-from-right')
		// else entry.target.classList.remove('animation-from-right')
	})
}, { threshold: 0.4 })
const observerDown = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) entry.target.classList.add('animation-from-down')
		// else entry.target.classList.remove('animation-from-down')
	})
}, { threshold: 0.4 })

$animation_left_elements.forEach(element => observerLeft.observe(element))
$animation_card_elements.forEach(element => observerLeft.observe(element))
$animation_right_elements.forEach(element => observerRight.observe(element))
$animation_down_elements.forEach(element => observerDown.observe(element))

