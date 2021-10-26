const form = document.querySelector('#my-form');
const overlay = document.querySelector('.overlay');

// okay

form.onsubmit = () => {
	const allModals = document.querySelector('#modals')
	const allNotes = document.querySelector('#your-notes')

	const addNote = document.querySelector('#add-note');
	const note = document.createElement('div');
	const modal = document.createElement('div');
	const p = document.createElement('p');
	const h4 = document.createElement('h4');
	const pModal = document.createElement('p');
	const h4Modal = document.createElement('p');
	const buttonDetail = document.createElement('button');
	const buttonDelete = document.createElement('button');
	const closeModal = document.createElement('button');
	const yourNotesLength = allNotes.childElementCount;

	note.className = 'note';
	modal.className = `modal modal-${yourNotesLength}`;
	buttonDetail.className = 'detail';
	buttonDelete.className = 'delete-note';
	closeModal.className = 'close-modal';
	p.className = 'text-width'
	pModal.className = 'text-wrap'

	modal.style.display = 'none';

	note.dataset.index = yourNotesLength;
	buttonDetail.dataset.index = yourNotesLength;
	closeModal.dataset.value = yourNotesLength;

	h4.innerHTML = `Note ${yourNotesLength}`;
	p.innerHTML = addNote.value;
	h4Modal.innerHTML = `Note ${yourNotesLength}`;
	pModal.innerHTML = addNote.value;
	buttonDetail.innerHTML = 'View Detail';
	buttonDelete.innerHTML = 'Delete Note';
	closeModal.innerHTML = 'Close modal'

	buttonDetail.onclick = () => {
		const value = buttonDetail.dataset.index;
		const modal = document.querySelector(`.modal-${value}`);
		const modalVizibility = modal.style.display;
		console.log(modalVizibility);
		if (modalVizibility === 'none') {
			modal.style.display = 'block';
			overlay.style.display = 'block';
		} else {
			modal.style.display = 'none';
			overlay.style.display = 'none';
		}
	}

	closeModal.onclick = () => {
		const value = closeModal.dataset.value;
		const modal = document.querySelector(`.modal-${value}`);
		modal.style.display = 'none';
		overlay.style.display = 'none';
	}

	overlay.onclick = () => {
		// const value = closeModal.dataset.value;
		// const modal = document.querySelector(`.modal-${value}`);
		console.log(modals)
		modals.forEach(modal => {
			modal.style.display = 'none';
		})
		modal.style.display = 'none';
		overlay.style.display = 'none';
	}

	buttonDelete.onclick = () => {
		const note = buttonDelete.parentElement;
		console.log(note)
		note.remove()
		modal.remove()
	}

	note.append(h4, p, buttonDetail, buttonDelete);
	modal.append(h4Modal, pModal, closeModal)

	allNotes.append(note);
	allModals.append(modal)

	const modals = document.querySelectorAll('.modal');

	addNote.value = ''
	
	return false;
}
