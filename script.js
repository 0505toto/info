// GSAPでアニメーションを動かすために、使用するプラグインを最初に登録します
gsap.registerPlugin(ScrollTrigger, Flip);

/* ======================================= */
/* ▼▼ 1つ目のアニメーション (FLIP) の処理 ▼▼ */
/* ======================================= */
// アニメーションの対象を #flip-animation-section 内に限定します
const flipSection = document.querySelector("#flip-animation-section");
if (flipSection) {
    const container = flipSection.querySelector(".container");
    const letters = flipSection.querySelectorAll(".letter");
    const forText = flipSection.querySelector(".for");
    const gsapText = flipSection.querySelector(".gsap");
    
    // 状態を保存（色や背景色もアニメーションの対象に含める）
    const state = Flip.getState([letters, forText, gsapText], {props: "color,backgroundColor"});

    // いったんシンプルな状態にクラスを変更
    container.classList.remove("final");
    container.classList.add("plain");

    // "F L I P" の文字をコンテナの末尾に移動させて整列
    letters.forEach(letter => container.appendChild(letter));

    // 保存した状態（final）から現在の状態（plain）へアニメーション
    Flip.from(state, {
        duration: 0.5,
        stagger: 0.08,
        ease: "power1.inOut"
    });

    // 1秒待ってから次のアニメーションへ
    setTimeout(() => {
        const state = Flip.getState([letters, forText, gsapText], {props: "color,backgroundColor"});
        container.classList.remove("plain");
        container.classList.add("grid"); // グリッド表示へ

        Flip.from(state, {
            duration: 0.5,
            stagger: 0.08,
            ease: "power1.inOut"
        });

        // さらに1.2秒待ってから最後のアニメーションへ
        setTimeout(() => {
            const state = Flip.getState([letters, forText, gsapText], { props: "color,backgroundColor" });
            
            // 最終形態（final）に戻す
            container.classList.remove("grid");
            container.classList.add("final");

            // "for" と "gsap" のテキストを正しい順序に戻す
            const pLetter = flipSection.querySelector('.p');
            pLetter.insertAdjacentElement('afterend', forText);
            forText.insertAdjacentElement('afterend', gsapText);

            Flip.from(state, {
                duration: 0.7,
                stagger: 0.08,
                ease: "power2.inOut"
            });
        }, 1200);

    }, 1000);
}


/* ========================================= */
/* ▼▼ 2つ目のアニメーション (スクロール) の処理 ▼▼ */
/* ========================================= */
// アニメーションの対象を #scroll-animation-section 内に限定します
const scrollSection = document.querySelector("#scroll-animation-section");
if (scrollSection) {
    const listItems = scrollSection.querySelectorAll("li > span");
    const otherListItems = scrollSection.querySelectorAll("li:not(:first-of-type) span");
    const h1 = scrollSection.querySelector("h1");
    const lastListItem = scrollSection.querySelector("li:last-of-type");

    // 初期状態を設定
    gsap.set(listItems, { transformOrigin: "0 50%" });
    gsap.set(otherListItems, { opacity: 0.2, scale: 0.8 });

    // スクロールに応じたアニメーションのタイムラインを作成
    const tl = gsap.timeline()
        .to(otherListItems, {
            opacity: 1,
            scale: 1,
            stagger: 0.5
        })
        .to(scrollSection.querySelectorAll("li:not(:last-of-type) span"), {
            opacity: 0.2,
            scale: 0.8,
            stagger: 0.5
        }, 0); // タイムラインの先頭から同時に開始

    // ScrollTriggerを作成
    ScrollTrigger.create({
        trigger: h1,              // アニメーション開始のきっかけとなる要素
        start: "center center",   // trigger要素が画面中央に来たら開始
        endTrigger: lastListItem, // アニメーション終了のきっかけとなる要素
        end: "center center",     // endTrigger要素が画面中央に来たら終了
        pin: h1,                  // アニメーション中、h1要素を画面に固定する
        pinSpacing: true,         // pinによるスペースを確保
        animation: tl,            // このタイムラインを再生
        scrub: true,              // スクロール量に応じてアニメーションを進める
        markers: false            // 開発中の目印（不要な場合はfalseに）
    });
}