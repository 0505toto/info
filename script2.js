// ページの読み込みがすべて完了したら、中の処理を実行する
window.addEventListener('load', () => {

    // GSAPのタイムライン機能を使って、アニメーションを順番に実行
    const tl = gsap.timeline();

    // 1. bodyの非表示を解除
    tl.set("body", { visibility: "visible" });
    
    // 2. ローディング画面を1秒かけてフェードアウト
    tl.to("#loader-bg", {
        duration: 1.0,
        autoAlpha: 0, // opacity:0 と visibility:hidden を同時にやってくれる
    });

    // 3. メインコンテンツを0.5秒かけてフェードイン
    tl.to("#content", {
        duration: 0.5,
        autoAlpha: 1, // opacity:1 と visibility:visible を同時にやってくれる
    }, "-=0.5"); // 前のアニメーションが0.5秒進んだ時点から開始

    // 4. オープニング完了後、スクロールアニメーションを初期化
    tl.call(setupScrollAnimation);

});


/**
 * スクロール連動型のアニメーションを設定する関数
 */
function setupScrollAnimation() {

    // ご提示いただいたコードをここに記述
    gsap.defaults({ ease: "none" });

    const pulses = gsap.timeline({
        defaults: {
            duration: 0.05,
            autoAlpha: 1,
            scale: 2,
            transformOrigin: 'center',
            ease: "elastic(2.5, 1)"
        }
    })
    .to(".ball02, .text01", {}, 0.2)
    .to(".ball03, .text02", {}, 0.33)
    .to(".ball04, .text03", {}, 0.46);

    const main = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: "#svg-stage", // アニメーション開始のトリガーとなる要素
            scrub: true,           // スクロールとアニメーションを連動
            start: "top center",   // トリガー要素の上端が、画面の中央に来たら開始
            end: "bottom center"   // トリガー要素の下端が、画面の中央に来たら終了
        }
    })
    .to(".ball01", { duration: 0.01, autoAlpha: 1 })
    .from(".theLine", { drawSVG: 0 }, 0)
    .to(".ball01", {
        motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
        }
    }, 0)
    .add(pulses, 0);
}
