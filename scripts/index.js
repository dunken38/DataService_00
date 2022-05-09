//объявляем переменные
const page = document.querySelector('.page');
const pageTitle = document.querySelector('.page__title');
const darkTheme = document.querySelector('.header__theme-select');
const headerTitle = document.querySelector('.header__title');
const headerLanguage = document.querySelector('.header__language');
const headerImage = document.querySelector('.header__image');
const selectionInputLabel = document.querySelectorAll('.selection__input-label');
const footerCopyright = document.querySelector('.footer__copyright');
const headerThemeSelect = document.querySelector('.header__theme-select');
const loading = document.querySelector('.loading');
const calculate = document.querySelector('.calculate');
const data = document.querySelector('.data');
const loadingData = document.querySelector('#loading-data');
const calculateData = document.querySelector('#calculate-data');
const dataData = document.querySelector('#data-data');
const loadingTable = document.querySelectorAll('.loading__table');
const popup = document.querySelector('.popup');
const popupData = document.querySelector('#popupData');
const cancelButton = document.querySelector('.popup__cancel-button');
const converterCheckbox = document.querySelector('#converter');
const dataTimeConverter = document.querySelector('#data-time-converter');
const dataFormConverter = document.querySelector('#data-form-converter');
const buttonSelectionData = document.querySelector('#button-selection-data');
const helpCheckboxData = document.querySelector('#checkbox-help-data');
const helpCheckbox = document.querySelectorAll('#checkbox-help');
const helpBlockData = document.querySelector('.data__block-help');
const helpBlock = document.querySelector('.help');

//теперь пишем функции и слушатели
//функции
//функция для клика на пункты меню
const clickMenu = (menuOption,menuPage) => {
  menuOption.style.backgroundColor = 'rgb(73, 73, 73)';
  menuPage.classList.remove('section-hide');
  pageTitle.remove();
}

//закрываем окошки
function closePopup(popup) {
  popup.classList.remove('popup_active');
}

//функция закрытия окошка Данных агентов
function closePopupViaEsc(evt) {
  if ((evt.key === 'Escape')||(evt.target.classList.contains('popup'))) {
    closePopup(popupData);
  }
}

//слушатели
//темная тема
darkTheme.addEventListener('click', () => {
  headerTitle.classList.toggle('theme-color_text-white');
  headerLanguage.classList.toggle('theme-color_text-white');
  selectionInputLabel.forEach((label) => {
    label.classList.toggle('theme-color_text-white');
  });
  loadingTable.forEach((table) => {
    table.classList.toggle('theme-color_bckgrnd-white');
  });
  footerCopyright.classList.toggle('theme-color_text-white');
  page.classList.toggle('page_theme_dark');
  if (headerThemeSelect.src.includes('images/theme_dark.png')){
    headerThemeSelect.src = 'images/theme_light.png';
    headerImage.src = 'images/icon_dark.png';
  }
  else {
    headerThemeSelect.src = 'images/theme_dark.png';
    headerImage.src = 'images/icon_light.png';
  }
});

//переключения меню
loadingData.addEventListener('click', () => {
  clickMenu(loadingData,loading);
  if (!calculate.classList.contains('section-hide')){
    console.log(!calculate.classList.contains('section-hide'));
    calculate.classList.add('section-hide')
    calculateData.style.backgroundColor = 'black';
  }
  if (!data.classList.contains('section-hide')){
    data.classList.add('section-hide')
    dataData.style.backgroundColor = 'black';
  }
  
});

calculateData.addEventListener('click', () => {
  clickMenu(calculateData,calculate);
  if (!loading.classList.contains('section-hide')){
    loading.classList.add('section-hide')
    loadingData.style.backgroundColor = 'black';
  }
  if (!data.classList.contains('section-hide')){
    data.classList.add('section-hide')
    dataData.style.backgroundColor = 'black';
  }
});

dataData.addEventListener('click', () => {
  popupData.classList.add('popup_active');
});

//слушаем закрытие окошка на Esc
document.addEventListener('keydown',closePopupViaEsc);

//слушаем закрытие окошка на крестик
cancelButton.addEventListener('click', () => {
  closePopup(popupData);
});

//чекбоксы
//хелп в попапе Данные агента
helpCheckboxData.addEventListener('click', () => {
  if (helpCheckboxData.checked) {
    helpBlockData.classList.remove('section-hide');
  }
  else {
    helpBlockData.classList.add('section-hide');
  }
});

//хелп в остальных разделах
helpCheckbox.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      helpBlock.classList.remove('section-hide');
    }
    else {
      helpBlock.classList.add('section-hide');
    }
  });
});

//нажатие на галочку Конвертер
converterCheckbox.addEventListener('click', () => {
  if (converterCheckbox.checked) {
    buttonSelectionData.classList.add('section-hide');
    dataTimeConverter.classList.remove('section-hide');
    dataFormConverter.classList.remove('section-hide');
  }
  else {
    buttonSelectionData.classList.remove('section-hide');
    dataTimeConverter.classList.add('section-hide');
    dataFormConverter.classList.add('section-hide');
  }
});