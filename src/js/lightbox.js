import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'basiclightbox/src/styles/main.scss';

const btnOpenRef = document.querySelector('button[data-open-modal]');
const btnOpenImgRef = document.querySelector('button[data-open-img]');

const modalTemplateImg = `<img src="./images/intro.png" alt="fxdgfd" width="800" height= "600">`;

const instanceImg = basicLightbox.create(modalTemplateImg, {
  //   onShow(instanceImg) {
  //     instanceImg.element().addEventListener('click', event => {
  //       //   console.log(event.target, event.currentTarget);
  //     });
  //   },
  closable: true,
});

btnOpenImgRef.addEventListener('click', instanceImg.show);

const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
  onShow(instance) {
    const closeModalBtnRef = getCloseModalRef(instance);
    closeModalBtnRef.addEventListener('click', instance.close);
    window.addEventListener('keydown', onCloseModalOfEscape);
  },
  onClose(instance) {
    const closeModalBtnRef = getCloseModalRef(instance);
    closeModalBtnRef.removeEventListener('click', instance.close);
    window.removeEventListener('keydown', onCloseModalOfEscape);
  },

  closable: false,
});

function onCloseModalOfEscape(event) {
  const { code } = event;
  if (code === 'Escape') {
    instance.close();
  }
}

function getCloseModalRef(parent) {
  return parent.element().querySelector('button[data-close-modal]');
}

btnOpenRef.addEventListener('click', instance.show);
