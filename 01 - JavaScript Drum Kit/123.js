// 1. 監聽鍵盤事件
window.addEventListener("keydown", function (event) {
  // 2. 找到對應音效
  const audio = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );

  // 3. 找到對應按鍵
  const key = document.querySelector(
    `.key[data-key="${event.keyCode}"]`
  );

  // 4. 找不到音效就結束
  if (!audio || !key) return;

  // 5. 重設音效播放位置
  audio.currentTime = 0;

  // 6. 播放音效
  audio.play();

  // 7. 新增 CSS class
  key.classList.add("playing");
});

// 8. 選取所有按鍵
const keys = document.querySelectorAll(".key");

// 9. 監聽每個按鍵的 transitionend
keys.forEach(function (key) {
  key.addEventListener("transitionend", function (event) {
    // 10. 只處理 transform 過渡結束
    if (event.propertyName !== "transform") return;

    // 11. 移除 playing
    key.classList.remove("playing");
  });
});