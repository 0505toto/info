// ページのHTMLがすべて読み込まれてから処理を開始します
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. オープニングアニメーションの制御 ---

    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const loaderTitle = document.querySelector('.loader-title');

    // CSSで設定したアニメーション（3秒）が終わるのを待ちます
    loaderTitle.addEventListener('animationend', () => {
        // アニメーションが終わったら、ローディング画面を非表示に
        loader.classList.add('loaded');
        // メインコンテンツを表示
        mainContent.classList.add('visible');
    });

    // もし何らかの理由でanimationendイベントが実行されなかった場合の保険
    setTimeout(() => {
        loader.classList.add('loaded');
        mainContent.classList.add('visible');
    }, 3500); // CSSのアニメーション時間より少し長く設定


    // --- 2. ドラッグ＆ドロップ機能 ---

    const draggableSections = document.querySelectorAll('.draggable-section');
    const mainArea = document.querySelector('.main-area');

    // ドラッグ可能な各セクションにイベントを設定
    draggableSections.forEach(draggable => {
        // ドラッグが開始した時のイベント
        draggable.addEventListener('dragstart', () => {
            // ドラッグ中の要素に 'dragging' クラスを追加して目印にする
            draggable.classList.add('dragging');
        });

        // ドラッグが終了した時のイベント
        draggable.addEventListener('dragend', () => {
            // 目印にしていた 'dragging' クラスを削除
            draggable.classList.remove('dragging');
        });
    });

    // ドラッグ中の要素が他の要素の上を通過する時のイベント
    mainArea.addEventListener('dragover', event => {
        // デフォルトの動作を無効にしないと、ドロップが機能しない
        event.preventDefault();

        // ドラッグ中の要素を取得
        const draggingElement = document.querySelector('.dragging');
        // ドラッグ中の要素以外の要素で、現在マウスカーソルの下にある要素を取得
        const afterElement = getDragAfterElement(mainArea, event.clientY);

        if (afterElement == null) {
            // もしカーソルより下の要素がなければ、末尾に追加
            mainArea.appendChild(draggingElement);
        } else {
            // カーソルより下の要素があれば、その直前に追加
            mainArea.insertBefore(draggingElement, afterElement);
        }
    });

    // マウスカーソルのY座標を元に、どの要素の前に挿入すべきかを判断する関数
    function getDragAfterElement(container, y) {
        // ドラッグ中の要素以外の全要素を取得
        const draggableElements = [...container.querySelectorAll('.draggable-section:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect(); // 要素の位置とサイズを取得
            const offset = y - box.top - box.height / 2; // 要素の中心からの距離を計算

            // カーソルに最も近い、かつカーソルより下にある要素を探す
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});
