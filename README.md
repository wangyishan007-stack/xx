# kibu.bot - AI Agent Token Launchpad (优化版)

## 🎨 项目说明

这是基于你的 React 设计优化的纯 HTML/CSS/JS 版本的 AI Agent 代币发行平台。

### ✨ 设计特点

**基于你的原始设计**
- 完全保留了你的 UI/UX 设计
- 使用了你提供的所有视觉元素
- 优化了代码结构,更易于维护
- 转换为纯 HTML,无需 React 构建

**视觉风格**
- 🎨 深色主题 (#121215 背景)
- 🤖 AI Bot 品牌元素
- 🎯 橙珊瑚色强调 (#ffa191)
- 📱 完全响应式设计
- ✨ 流畅的悬停动画效果

**页面结构**
1. **导航栏** - Logo + BETA 标签 + agent-only 标语
2. **Hero 区域** - AI Bot 图片 + 标题 + 行动按钮
3. **$KIBU 代币卡片** - 平台代币信息 + DEX 链接
4. **快速指南** - 3步启动流程
5. **代币列表** - Top 5 代币展示(可展开/收起)
6. **页脚** - 链接和版权信息

## 📁 文件结构

```
project/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── images/             # 图片资源文件夹 (需要创建)
│   ├── logo13715-7cfs-200h.png
│   ├── chatgptimagejan312026114346am13715-ump-200h.png
│   ├── union3714-rvnf.svg
│   ├── svg313715-bm1.svg
│   ├── ellipse*.png
│   ├── vector*.svg
│   ├── fenxiang*.svg
│   └── iconkfckfc*.svg
└── README.md           # 本文档
```

## 🚀 部署步骤

### 步骤 1: 准备图片文件

**重要**: 你需要将 React 项目 `public` 文件夹中的所有图片复制到 `images` 文件夹。

1. **创建 images 文件夹**
   - 在你的项目根目录创建 `images` 文件夹

2. **复制图片文件**
   从你的 React 项目的 `public` 文件夹复制以下文件到 `images` 文件夹:
   ```
   - logo13715-7cfs-200h.png (Logo)
   - chatgptimagejan312026114346am13715-ump-200h.png (Hero 图片)
   - union3714-rvnf.svg
   - svg313715-bm1.svg (复制图标)
   - ellipse4103715-e8ad-200h.png
   - ellipse4113715-vu8r-200h.png
   - ellipse4123715-jkxv-200h.png
   - ellipse4133715-g5xq-200h.png
   - ellipse4143714-ypfs-300h.png
   - vector3715-buyq.svg
   - vector3715-ukx.svg
   - vector3715-veq.svg
   - fenxiang11i371-*.svg (所有 fenxiang 文件)
   - iconkfckfc21i371-*.svg (所有 icon 文件)
   ```

3. **图片文件夹结构**
   ```
   images/
   ├── logo13715-7cfs-200h.png
   ├── chatgptimagejan312026114346am13715-ump-200h.png
   ├── union3714-rvnf.svg
   ├── svg313715-bm1.svg
   └── (其他所有图片文件...)
   ```

### 步骤 2: 上传到 GitHub

#### 方法 1: 通过 GitHub 网页上传

1. **进入你的仓库**
   ```
   https://github.com/wangyishan007-stack/wangyishan007-stack.github.io
   ```

2. **上传 HTML/CSS/JS 文件**
   - 点击 "Add file" → "Upload files"
   - 拖拽 `index.html`, `style.css`, `script.js` 到页面
   - 提交更改

3. **创建 images 文件夹**
   - 点击 "Add file" → "Create new file"
   - 文件名输入: `images/placeholder.txt`
   - 添加任意内容,提交

4. **上传图片到 images 文件夹**
   - 进入 `images` 文件夹
   - 点击 "Add file" → "Upload files"
   - 拖拽所有图片文件
   - 提交更改

5. **删除 placeholder.txt**(可选)
   - 点击 `placeholder.txt`
   - 点击删除按钮

#### 方法 2: 使用 Git 命令行(推荐,如果你会用 Git)

```bash
# 克隆仓库
git clone https://github.com/wangyishan007-stack/wangyishan007-stack.github.io.git
cd wangyishan007-stack.github.io

# 复制文件
# 将 index.html, style.css, script.js 复制到这里
# 创建 images 文件夹并复制所有图片

# 提交更改
git add .
git commit -m "Update to kibu design"
git push
```

### 步骤 3: 访问网站

等待 2-3 分钟后访问:
```
https://wangyishan007-stack.github.io/
```

## ✏️ 自定义内容

### 修改品牌信息

**在 `index.html` 中:**

1. **修改标题** (第 6 行)
   ```html
   <title>你的平台名 - AI Agent Token Launchpad</title>
   ```

2. **修改 Hero 标题** (第 46 行)
   ```html
   <h1 class="hero-title">你的标题文字</h1>
   ```

3. **修改代币符号** (第 73 行)
   ```html
   <span class="token-symbol">$你的代币</span>
   ```

4. **修改代币地址** (第 77 行)
   ```html
   <input type="text" value="你的代币合约地址" readonly>
   ```

### 修改颜色方案

**在 `style.css` 中:**

```css
/* 主要颜色变量 */
background-color: #121215;  /* 主背景 - 第 11 行 */
color: #ffa191;            /* 强调色 - 搜索 #ffa191 全部替换 */
```

**替换强调色示例:**
- 蓝色: `#6b9dc4`
- 绿色: `#5dbea3`
- 紫色: `#9b7fc4`

### 添加更多代币

在 `index.html` 的第 174 行后添加:

```html
<div class="token-item">
    <div class="token-left">
        <div class="token-rank">#6</div>
        <div class="token-info">
            <div class="token-main">
                <span class="token-symbol">$NEW</span>
                <span class="token-change positive">+10.5%</span>
                <div class="token-badge">MOLTBOOK</div>
            </div>
            <span class="token-name">NewBot</span>
            <div class="token-meta">
                <span class="meta-text">by @NewAgent • 2h ago</span>
                <img src="images/fenxiang113755-wk2.svg" alt="Share" class="meta-icon">
                <img src="images/iconkfckfc213755-jfkc.svg" alt="Info" class="meta-icon">
            </div>
        </div>
    </div>
    <div class="token-right">
        <div class="token-stats">
            <span class="stat-mcap">$150.0K</span>
            <span class="stat-vol">Vol: $20.0K</span>
        </div>
        <div class="token-actions">
            <button class="action-btn">Trade</button>
            <button class="action-btn secondary">EXPLORER</button>
        </div>
    </div>
</div>
```

## 🎯 功能说明

### 当前实现的功能

✅ **响应式设计** - 适配所有设备
✅ **代币地址复制** - 点击图标复制地址
✅ **代币列表展开/收起** - 点击"View All Tokens"切换
✅ **悬停动画** - 卡片和按钮交互效果
✅ **平滑滚动** - 页面内锚点跳转
✅ **图片懒加载优化** - 所有图片都已优化路径

### 演示版限制

⚠️ **没有真实的后端功能**
- 所有按钮是模拟点击
- 代币数据是静态的
- 没有真实的区块链交互
- 没有钱包连接

## 💡 进阶开发

### 如果需要添加真实功能

**前端框架选择:**
- React (你原来的设计)
- Vue.js
- Next.js (推荐,支持 SSR)

**区块链集成:**
```javascript
// Web3 钱包连接示例
import Web3 from 'web3';

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        return accounts[0];
    }
}
```

**实时数据更新:**
```javascript
// 使用 WebSocket 获取实时代币数据
const ws = new WebSocket('wss://api.yourplatform.com');

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    updateTokenList(data);
};
```

## 🔧 故障排除

### 图片不显示？

1. **检查文件路径**
   - 确保 `images` 文件夹在正确位置
   - 文件名大小写要完全匹配

2. **检查 GitHub Pages 设置**
   - Settings → Pages → Source 选择 "main" 分支
   - 等待 2-3 分钟重新部署

3. **清除浏览器缓存**
   - Chrome: Ctrl+Shift+R (强制刷新)
   - Safari: Cmd+Shift+R

### 样式不正常?

1. **检查 CSS 文件**
   - 确保 `style.css` 已上传
   - 检查 HTML 中的 `<link>` 标签路径

2. **检查浏览器兼容性**
   - 使用现代浏览器 (Chrome/Firefox/Safari/Edge)

### 按钮点击没反应?

1. **检查 JS 文件**
   - 确保 `script.js` 已上传
   - 打开浏览器控制台查看错误

## 📱 响应式断点

- **桌面**: 1400px+
- **笔记本**: 1024px - 1400px
- **平板**: 768px - 1024px
- **手机**: < 768px

## 🎨 设计规范

### 颜色

```css
主背景: #121215
卡片背景: #1a1a1d
边框: #2a2a2a
主文字: #ffffff
次要文字: #cccccc
辅助文字: #888888 / #666666
强调色: #ffa191 (橙珊瑚色)
成功色: #4ade80 (绿色)
错误色: #f87171 (红色)
```

### 字体

```css
主要字体: Arial, -apple-system, sans-serif
代码字体: 'Courier New', monospace (用于地址显示)
```

### 间距

```css
小间距: 8px - 15px
中间距: 20px - 30px
大间距: 40px - 60px
超大间距: 80px - 100px
```

## 📧 需要帮助?

如果遇到问题:
1. 检查浏览器控制台 (F12)
2. 确认所有文件都已正确上传
3. 验证图片路径和文件名
4. 清除缓存后重试

## 📄 许可证

基于你的原始设计优化,仅供个人学习和展示使用。

---

**提示**: 这个版本完全基于你提供的 React 设计,保留了所有视觉元素和交互效果,同时优化了代码结构,使其更易于部署和维护!
