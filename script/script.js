const currentPath = window.location.pathname.split('/').pop(); // Получаем текущий файл
const pathToButtonId = {
    'index.html': 'button1',
    'practice.html': 'button2',
};

const activeButtonId = pathToButtonId[currentPath];
if (activeButtonId) {
    const activeButton = document.getElementById(activeButtonId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
document.getElementById('test-selector').addEventListener('change', function () {
  const selectedValue = this.value; 
  if (selectedValue) {
    window.location.href = selectedValue;
  } 
});
