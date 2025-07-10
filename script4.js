'use strict';

// イベントリスナーを一度だけ実行するための設定
const options = { once: true };

// 1. ページ全体の読み込みが完了したら実行
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // ローディング画面をゆっくり消す
    loadingScreen.classList.add('hidden');

    // ローディング画面が消えた後（800ms後）にメインコンテンツを表示
    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 500); // CSSのtransition時間と合わせるとスムーズ

}, options);


// 2. スクロール連動アニメーション
const scrollAnimationFunc = () => {
    // アニメーションさせたい要素をすべて取得
    const scrollElements = document.querySelectorAll('.scroll-animation');

    // 要素が画面内に入ったかどうかを判定する IntersectionObserver を作成
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // isIntersectingプロパティがtrueなら画面内に入ったと判定
            if (entry.isIntersecting) {
                // is-visibleクラスを追加して、CSSで定義したアニメーションを発火
                entry.target.classList.add('is-visible');
                // 一度表示されたら、監視を停止してパフォーマンスを向上
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // 要素が10%見えたらトリガー
    });

    // 各要素を監視対象に追加
    scrollElements.forEach(element => {
        observer.observe(element);
    });
};

// ページ読み込み完了後に関数を実行
window.addEventListener('DOMContentLoaded', scrollAnimationFunc, options);
