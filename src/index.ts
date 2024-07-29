const contactPanelBtn = document.getElementById('contact-panel') as HTMLElement;
const header = document.querySelector('header') as HTMLElement;

contactPanelBtn.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();
	const popUp = document.querySelector('.contactPopUp');
	if (header.contains(popUp)) {
		return 0;
	} else {
		closePopUp(appendCloseBtn(), appendEmailElement());
	}
});

function appendEmailElement(): HTMLElement {
	const div: HTMLElement = document.createElement('div');
	const link: HTMLElement = document.createElement('a');
	link.setAttribute('href', 'mailto:tomaszbaran401@gmail.com');
	link.textContent = 'tomaszbaran401@gmail.com';
	div.appendChild(link);
	div.classList.add('contactPopUp');
	header.appendChild(div);
	return div;
}

function appendCloseBtn(): HTMLElement {
	const btn: HTMLButtonElement = document.createElement('button');
	btn.textContent = 'X';
	btn.classList.add('closeBtn');
	header.appendChild(btn);
	return btn;
}

function closePopUp(button: HTMLElement, div: HTMLElement) {
	button.addEventListener('click', (e: MouseEvent): void => {
		e.preventDefault();
		header.removeChild(div);
		header.removeChild(button);
	});
}
