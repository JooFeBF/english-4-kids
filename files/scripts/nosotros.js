const $nav_burger = document.querySelector('.nosotros-header__nav-burger');
const $nav_responsive_menu = document.querySelector("#responsive_menu")
const $nav_open = document.querySelector('.nosotros-header__nav-links-open-smenu')
const $nav_smenu = document.querySelector('.nosotros-header__nav-links-smenu')
const $nav_arrow = document.querySelector('.nosotros-header__nav-links-arrow')
const $nav_start_button = document.querySelector("#start-button");

$nav_open.addEventListener("click", () => {
	$nav_arrow.classList.toggle('rotate-arrow')
	$nav_smenu.classList.toggle('trigger-menu')
})
$nav_start_button.addEventListener("click", () => {
	$nav_responsive_menu.classList.toggle("nosotros-header__nav-links-responsive");
})
$nav_burger.addEventListener("click", () => {
	$nav_responsive_menu.classList.toggle("nosotros-header__nav-links-responsive");
})
