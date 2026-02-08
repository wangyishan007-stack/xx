// 复制代币地址功能
document.querySelector('.copy-icon').addEventListener('click', function() {
    const addressInput = document.querySelector('.token-address input');
    addressInput.select();
    document.execCommand('copy');
    
    // 临时提示
    const originalSrc = this.src;
    alert('地址已复制到剪贴板！');
});

// 按钮点击处理
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const btnText = this.textContent.trim();
        console.log('点击了按钮:', btnText);
        
        if (btnText === 'DOCUMENTATION' || btnText === 'FULL DOCUMENTATION') {
            alert('演示版本：实际应用中这里会打开文档页面');
        } else if (btnText === 'TELEGRAM ALERTS') {
            alert('演示版本：实际应用中这里会打开 Telegram');
        }
    });
});

// 代币链接按钮
document.querySelectorAll('.btn-link').forEach(btn => {
    btn.addEventListener('click', function() {
        const btnText = this.textContent.trim();
        alert(`演示版本：打开 ${btnText}`);
    });
});

// 交易和浏览器按钮
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const btnText = this.textContent.trim();
        const tokenSymbol = this.closest('.token-item').querySelector('.token-symbol').textContent;
        alert(`演示版本：${btnText} ${tokenSymbol}`);
    });
});

// View All Tokens 展开/收起
let tokensExpanded = false;
document.querySelector('.view-all-btn').addEventListener('click', function() {
    tokensExpanded = !tokensExpanded;
    const tokensSection = document.querySelector('.tokens-section');
    
    if (tokensExpanded) {
        this.textContent = '↑ Hide Tokens';
        tokensSection.style.display = 'block';
        tokensSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        this.textContent = '↓ View All Tokens';
        tokensSection.style.display = 'none';
    }
});

// 初始隐藏代币列表
document.querySelector('.tokens-section').style.display = 'none';

// 分享图标点击
document.querySelectorAll('.meta-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.stopPropagation();
        const tokenSymbol = this.closest('.token-item').querySelector('.token-symbol').textContent;
        
        if (this.src.includes('fenxiang')) {
            alert(`分享 ${tokenSymbol}`);
        } else {
            alert(`查看 ${tokenSymbol} 详情`);
        }
    });
});

// 平台链接悬停效果
document.querySelectorAll('.platform-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`演示版本：跳转到 ${this.textContent}`);
    });
});

// 页脚链接
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`演示版本：打开 ${this.textContent}`);
    });
});

// 代币卡片悬停动画
document.querySelectorAll('.token-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    console.log('kibu.bot 演示版本已加载');
    console.log('这是基于你的 React 设计优化的纯 HTML 版本');
    
    // 淡入动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 添加滚动监听,显示返回顶部按钮(可选)
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 500) {
            // 可以在这里添加返回顶部按钮显示逻辑
        }
    }, 150);
});
