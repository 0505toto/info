// ページの全ての要素が読み込まれてから処理を開始します
window.addEventListener('DOMContentLoaded', () => {

    // HTMLの要素を取得
    const splash = document.getElementById('splash');
    const splashText = document.getElementById('splash-text');
    const mainContent = document.getElementById('main-content');
    const body = document.body;

    // --- アニメーションの開始 ---

    // 1. ロゴをふわっと表示させる
    setTimeout(() => {
        splashText.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        splashText.style.opacity = '1';
        splashText.style.transform = 'translateY(0)';
    }, 500); // 0.5秒後に開始

    // 2. ロゴ表示後、スプラッシュ画面を消してコンテンツを表示
    setTimeout(() => {
        splash.style.transition = 'opacity 1s ease';
        splash.style.opacity = '0';
        
        // スプラッシュ画面が完全に消えたら...
        splash.addEventListener('transitionend', () => {
            splash.style.display = 'none'; // スプラッシュ画面をDOMから消す
            body.style.overflow = 'auto'; // 本体のスクロールを許可
            mainContent.style.visibility = 'visible'; // コンテンツを表示
            mainContent.style.opacity = '1';
        }, { once: true }); // イベントを一回だけ実行する

    }, 2500); // 2.5秒後に開始 (ロゴ表示時間より長く設定)

});
