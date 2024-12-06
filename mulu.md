# 游戏目录结构

## 1. 页面结构
### 1.1 静态页面 (HTML)
- index.html（首页）
- game.html（游戏主页面）
- help.html（帮助页面）

### 1.2 样式文件 (CSS)
- style/
  - main.css（基础样式）
  - game.css（游戏页面样式）
  - dialog.css（对话框样式）

### 1.3 脚本文件 (JS)
- scripts/
  - main.js（主要逻辑）
  - game.js（游戏核心逻辑）
  - dialog.js（对话系统）
  - storage.js（存档系统）

## 2. 数据结构
### 2.1 案件数据 (data/)
- cases/
  - case1.json（第一关：神秘的保健室）  ```json
  {
    "title": "神秘的保健室",
    "level": 1,
    "scenes": [...],
    "items": [...],
    "dialogs": [...]
  }  ```

### 2.2 存档数据 (localStorage)
json
{
"currentCase": 1,
"progress": {
"scenes": ["保健室", "走廊"],
"items": ["药柜", "纸条"],
"dialogs": ["张老师_1", "小红_1"]
}
}