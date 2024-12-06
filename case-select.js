class CaseSelectPage {
    constructor() {
        this.init();
    }

    init() {
        const caseList = document.querySelector('.case-list');
        // 创建多个案件卡片，后续关卡显示为锁定状态
        const casesHtml = `
            <div class="case-item">
                <div class="case-cover">
                    <img src="images/case1.jpg" alt="神秘的箱子">
                    <div class="case-status">可开始</div>
                </div>
                <div class="case-info">
                    <h2 class="case-title">神秘的箱子</h2>
                    <p class="case-description">一个神秘的箱子出现在警局门口...</p>
                    <button class="start-btn" data-case-id="1">开始调查</button>
                </div>
            </div>

            <div class="case-item locked">
                <div class="case-cover">
                    <img src="images/case-locked.jpg" alt="未解锁的案件">
                    <div class="case-status">未解锁</div>
                </div>
                <div class="case-info">
                    <h2 class="case-title">神秘案件 2</h2>
                    <p class="case-description">完成前一个案件后解锁...</p>
                    <button class="start-btn" disabled>未解锁</button>
                </div>
            </div>

            <div class="case-item locked">
                <div class="case-cover">
                    <img src="images/case-locked.jpg" alt="未解锁的案件">
                    <div class="case-status">未解锁</div>
                </div>
                <div class="case-info">
                    <h2 class="case-title">神秘案件 3</h2>
                    <p class="case-description">完成前一个案件后解锁...</p>
                    <button class="start-btn" disabled>未解锁</button>
                </div>
            </div>
        `;
        caseList.innerHTML = casesHtml;

        // 只给第一个案件绑定点击事件
        const startBtn = caseList.querySelector('.case-item:first-child .start-btn');
        startBtn.addEventListener('click', () => {
            window.location.href = 'game.html';
        });
    }
}

// 创建实例
new CaseSelectPage(); 