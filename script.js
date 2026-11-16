const tipList = [
  '專注於清楚的和弦轉換，不必追求音量。',
  '放慢速度練習，讓身體保持放鬆。',
  '每天短時間練習，勝過偶爾一次練很久。',
  '先聽清楚節奏，再逐步加快速度。',
  '按和弦時記得放鬆肩膀。'
];

const tipText = document.getElementById('tip-text');

if (tipText) {
  const randomTip = tipList[Math.floor(Math.random() * tipList.length)];
  tipText.textContent = randomTip;
}

const checkboxes = document.querySelectorAll('#practice-list input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const allChecked = [...checkboxes].every((item) => item.checked);
    if (allChecked && tipText) {
      tipText.textContent = '做得好，你正在建立穩定的練習習慣。';
    }
  });
});
