# 儿童侦探游戏技术架构文档（优化版）

## 1. 项目结构
project/
├── index.html # 游戏首页
├── game.html # 游戏主页面
├── help.html # 帮助页面
├── style/ # 样式文件夹
│ ├── main.css # 主样式
│ ├── game.css # 游戏页面样式
│ └── dialog.css # 对话框样式
├── scripts/ # 脚本文件夹
│ ├── core/ # 核心功能
│ │ ├── engine.js # 游戏引擎核心
│ │ ├── scene.js # 场景管理器
│ │ ├── dialog.js # 对话系统
│ │ ├── clue.js # 线索系统
│ │ └── storage.js # 存档系统
│ ├── utils/ # 工具函数
│ │ ├── eventBus.js # 事件管理
│ │ └── storyParser.js # 剧情解析器
│ └── main.js # 入口文件
└── data/ # 数据文件夹
├── templates/ # 模板文件
│ ├── sceneTemplate.json # 场景模板
│ ├── dialogTemplate.json # 对话模板
│ └── clueTemplate.json # 线索模板
└── cases/ # 案件数据
├── case1/ # 第一关
│ ├── story.json # 剧情配置
│ ├── scenes.json # 场景配置
│ ├── dialogs.json# 对话配置
│ └── clues.json # 线索配置
└── case2/ # 第二关

## 2. 核心系统设计

### 2.1 游戏引擎 (engine.js)
javascript
class GameEngine {
constructor() {
this.sceneManager = new SceneManager();
this.dialogSystem = new DialogSystem();
this.clueSystem = new ClueSystem();
this.eventBus = new EventBus();
}
// 加载案件数据
loadCase(caseId) {
// 从模板加载基础结构
// 注入具体案件数据
}
// 注册通用事件处理
registerEvents() {
// 场景切换
// 对话触发
// 线索收集
// 进度保存
}
}
### 2.2 剧情数据结构
json
{
"caseInfo": {
"id": "case1",
"title": "神秘的保健室",
"template": "basic_investigation", // 使用基础调查模板
"difficulty": 1
},
"storyFlow": {
"scenes": ["scene1", "scene2", "scene3"],
"triggers": [
{
"type": "clue_collected",
"clueId": "medicine_list",
"unlocks": "scene2"
}
],
"endings": {
"perfect": {
"conditions": ["all_clues_found", "all_dialogs_completed"],
"reward": "detective_badge"
}
}
}
}

### 2.3 模板系统
json
{
"basic_investigation": {
"structure": {
"required_scenes": ["initial", "middle", "final"],
"required_elements": ["clues", "dialogs", "endings"],
"game_mechanics": ["scene_exploration", "dialog_choice", "clue_combination"]
},
"progression": {
"scene_unlock_rules": "sequential",
"clue_requirement": "percentage",
"dialog_system": "branching"
}
}
}

## 3. 扩展性设计

### 3.1 案件创建流程
1. 选择基础模板
2. 配置剧情数据
3. 设置触发条件
4. 定义结局分支

### 3.2 模块化设计
- 场景系统：可自定义场景类型和交互方式
- 对话系统：支持多种对话树结构
- 线索系统：灵活的线索组合规则
- 事件系统：自定义触发条件和响应

### 3.3 数据验证
javascript
class StoryValidator {
validateCase(caseData, template) {
// 验证必要元素
// 检查数据完整性
// 验证触发条件
// 检查结局可达性
}
}

这样的架构设计优势：

1. 模板化设计
- 使用模板系统快速创建新案件
- 保持游戏机制的一致性
- 减少重复开发工作

2. 高度解耦
- 核心系统与具体案件数据分离
- 各个系统之间通过事件通信
- 便于维护和更新

3. 易于扩展
- 新增案件只需配置数据
- 可以方便地添加新的游戏机制
- 支持不同类型的剧情模板

4. 数据驱动
- 所有游戏内容通过配置文件定义
- 便于非程序人员编辑内容
- 支持热更新

您觉得这样的架构设计如何？这样设计后，添加新案件主要就是编写剧情配置文件，而不需要修改核心代码。