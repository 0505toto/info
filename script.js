/* ===== 全体設定 ===== */
body {
    margin: 0;
    font-family: sans-serif;
    background-color: #f0f0f0;
}
* {
    box-sizing: border-box;
}

/* ============================================= */
/* ▼▼ スクロール連動ナビゲーションのスタイル ▼▼ */
/* ============================================= */
#scroll-navigation {
    /* 画面の左側に固定で表示 */
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    padding-left: 5vw;
    font-family: 'Saira Extra Condensed', sans-serif;
    color: #333;
    /* コンテンツより手前に表示 */
    z-index: 10;
}

#scroll-navigation .cols2 {
    display: flex;
}

#scroll-navigation h1 {
    margin: 0;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: clamp(30px, 8vw, 60px);
}

#scroll-navigation ul.navigator {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
}

#scroll-navigation li {
    padding-left: 0.2em;
    line-height: 1.1;
}

/* ▼▼ ナビゲーションリンクのスタイル ▼▼ */
#scroll-navigation li a {
    display: inline-block;
    font-size: clamp(30px, 8vw, 60px);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    text-decoration: none;
    color: #ccc; /* 通常時の色を薄く */
    transition: color 0.3s ease;
}

/* ▼▼ 現在地をハイライトするスタイル ▼▼ */
#scroll-navigation li a.is-active {
    color: #0896a6; /* アクティブなリンクの色 */
}


/* ============================================= */
/* ▼▼ 社内リンク集コンテンツのスタイル ▼▼ */
/* ============================================= */
.portal-contents {
    /* ナビゲーションの分だけ右側に配置 */
    width: 50%;
    margin-left: 50%;
    padding: 5vh 5vw;
}

.item_base_simple_linklist_grn_tpl {
    margin-bottom: 30px;
    padding: 20px 25px;
    background: #edf4fb;
    border-radius: 4px;
    border-left: 5px solid transparent; /* ハイライト用の左線を準備 */
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* ▼▼ 現在地をハイライトするスタイル ▼▼ */
.item_base_simple_linklist_grn_tpl.is-active-section {
    border-left-color: #0896a6;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* --- (以下、既存のリンク集スタイル) --- */
.content_simple_linklist_grn_tpl .title_l_simple_linklist_grn_tpl {
    display: block; min-height: 26px; margin: 5px 0; padding: 10px 0 0 40px; line-height: 1.2;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPjxwYXRoIGQ9Ik0zMS4xNCAxNkExNS4yNCAxNS4yNCAwIDEgMSAxNS45Ljc4IDE1LjI0IDE1LjI0IDAgMCAxIDMxLjE0IDE2ek0xNS44OCA5Ljg2QTYuMTUgNi4xNSAwIDEgMCAyMiAxNmE2LjE1IDYuMTUgMCAwIDAtNi4xMi02LjE0eiIgZmlsbD0iIzY0YmRkNCIvPjwvc3ZnPgo=") no-repeat left 4px;
    background-size: 32px 32px; font-size: 20px; color: #888;
}
.content_simple_linklist_grn_tpl .title_m_simple_linklist_grn_tpl {
    display: block; margin: 10px 0 3px 40px; line-height: 1.2; font-size: 20px; font-weight: 700; color: #0896a6;
}
.item_base_simple_linklist_grn_tpl ul { margin: 0; padding: 0; }
.item_simple_linklist_grn_tpl { margin: 0 0 13px 47px; list-style: none; color: #666; word-break: break-all; }
.link_simple_linklist_grn_tpl {
    margin-bottom: 2px; padding-left: 16px; font-size: 18px;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoOHY4SDB6Ii8+PGNpcmNsZSBjeD0iMy45OSIgY3k9IjQuMDIiIHI9IjMuOTgiIGZpbGw9IiNjY2MiLz48L3N2Zz4K") no-repeat left 7px;
    background-size: 8px 8px;
}
.link_simple_linklist_grn_tpl a { color: #0066cc; }
.link_simple_linklist_grn_tpl a:hover { text-decoration: underline; }
.item_description_simple_linklist_grn_tpl { margin-left: 21px; line-height: 1.3; font-size: 14px; color: #666; }
