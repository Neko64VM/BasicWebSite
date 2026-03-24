let lastScrollY = window.scrollY; // 前回のスクロール位置を保持
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // 下にスクロール ＆ ある程度（100px以上）スクロールしていたら隠す
    header.classList.add('hide');
  } else {
    // 上にスクロールしたら表示
    header.classList.remove('hide');
  }

  lastScrollY = currentScrollY; // 位置を更新
});