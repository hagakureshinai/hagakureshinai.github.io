// ページが読み込まれたら動く処理
document.addEventListener('DOMContentLoaded', () => {
    
    const toggleBtn = document.getElementById('modeToggleBtn');
    const novelText = document.getElementById('novel-text');

    // 1. 以前の設定（記憶）があればそれを適用する
    const currentMode = localStorage.getItem('novelMode');
    if (currentMode === 'vertical') {
        enableVertical();
    }

    // 2. ボタンが押されたら切り替える
    toggleBtn.addEventListener('click', () => {
        // 今、縦書きクラスがついているかチェック
        if (novelText.classList.contains('vertical')) {
            enableHorizontal(); // 横書きにする
        } else {
            enableVertical(); // 縦書きにする
        }
    });

    // --- 便利な関数たち ---

    // 縦書きにする関数
    function enableVertical() {
        novelText.classList.add('vertical');
        novelText.classList.remove('horizontal');
        toggleBtn.textContent = '横書きに戻す'; // ボタンの文字を変える
        localStorage.setItem('novelMode', 'vertical'); // 設定を記憶

        // 「最初の段落」を目印にする
        setTimeout(() => {
            // 小説の中の、最初の <p> タグを探す
            const firstP = novelText.querySelector('p');
            
            if (firstP) {
                // その要素が見える位置まで自動でスクロールしてもらう
                firstP.scrollIntoView({ inline: "end" });
            }
        }, 50); // 時間も少しだけ余裕を持たせて 10 → 50 に変更
    }

    // 横書きにする関数
    function enableHorizontal() {
        novelText.classList.remove('vertical');
        novelText.classList.add('horizontal');
        toggleBtn.textContent = '縦書きで読む'; // ボタンの文字を変える
        localStorage.setItem('novelMode', 'horizontal'); // 設定を記憶
    }
});