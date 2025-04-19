import { reset as resetScale } from "./scale.js";
import { isValid } from "./validation.js";

const body = document.body;
const photoUploadForm = document.querySelector('.img-upload__form');
const uploadFileControl = photoUploadForm.querySelector('#upload-file');
const descriptionField = photoUploadForm.querySelector('.text__description');
const photoUploadBtn = photoUploadForm.querySelector('.img-upload__input');
const photoEditModal = photoUploadForm.querySelector('.img-upload__overlay');
const photoBigPreview = photoUploadForm.querySelector('.img-upload__preview img');
const photoSmallPreviews = document.querySelectorAll('.effects__preview');
const closeButton = photoUploadForm.querySelector('.img-upload__cancel');

const openForm = () => {
    photoEditModal.classList.remove('hidden');
    body.classList.add('modal-open');
    const file = photoUploadBtn.files[0];

    if (file && file.type.startsWith('image/')) {
        const imageURL = URL.createObjectURL(file);
        photoBigPreview.src = imageURL;
        photoSmallPreviews.forEach((photoSmallPreview) => {
            photoSmallPreview.style.backgroundImage = `url(${imageURL})`;
        });
    } else {
        console.warn('Файл не является изображением или не выбран');
    }
};

const closeForm = () => {
    photoEditModal.classList.add('hidden');
    body.classList.remove('modal-open');
    //  photoUploadBtn.value = '';
    //photoBigPreview.src = '';
    // photoSmallPreviews.forEach((photoSmallPreview) => {
    //    photoSmallPreview.style.backgroundImage = '';
    // });

    photoUploadForm.reset();
    resetScale();
};

closeButton.addEventListener('click', () => {
    closeForm()
});

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        evt.preventDefault();
        photoEditModal.classList.add('hidden');
        body.classList.remove('modal-open');
    };
});

photoUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isValid()) {
        photoUploadForm.submit();
    } else {
        console.warn('Форма невалидна. Не отправляем.');
    }
});

descriptionField.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        evt.stopPropagation();
    }
});

uploadFileControl.addEventListener('change', () => {
    openForm();
})

export { openForm, closeForm };
