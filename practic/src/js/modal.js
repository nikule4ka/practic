import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


const openModalBtnRef = document.querySelector('button[data-open-modal]'); 

console.log(basicLightbox);

const modalTemplate = document.getElementById('modal');

const instance = basicLightbox.create(modalTemplate, {
    onShow(instance) {
        const closeModalBtnRef = getCloseModalBtnRef(instance);
        closeModalBtnRef.addEventListener('click', instance.close);
        
        window.addEventListener('keydown', listenEvent);
    },
    onClose(instance) {
        const closeModalBtnRef = getCloseModalBtnRef(instance);

        closeModalBtnRef.removeEventListener('click', instance.close);
        window.removeEventListener('keydown', listenEvent);
    },
});

openModalBtnRef.addEventListener('click', instance.show);

function getCloseModalBtnRef(parent) {
    return parent
        .element()
        .querySelector('button[data-close-modal]');
};

function listenEvent(e) {
    if (e.code === 'Escape') {
                instance.close();
            }
};
