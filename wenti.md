# 问题记录与解决思路模板

## 1. 组合面板不显示问题案例

### 问题描述
- 现象：点击组合线索按钮后，组合面板没有显示
- 期望行为：点击按钮后应该显示组合面板和遮罩层
- 相关文件：game.html, style/game.css, scripts/core/combination.js

### 调试信息
javascript
// 控制台输出的关键调试信息
combination.js:22 打开组合面板
combination.js:64 显示组合面板 - 开始
combination.js:68 显示组合面板 - 完成


### 解决思路
1. 首先检查CSS样式是否正确
   - 检查z-index确保层级正确
   - 检查display、opacity等显示相关属性
   
2. 检查JavaScript代码
   - 检查DOM元素是否正确获取
   - 检查事件绑定是否成功
   - 检查类名是否匹配（hidden vs active）

3. 添加调试信息
   ```javascript
   console.log('组合面板元素:', this.combinationArea);
   console.log('组合面板当前类名:', this.combinationArea.className);
   console.log('组合面板的计算样式:', window.getComputedStyle(this.combinationArea).display);
   ```

### 最终解决方案
问题出在CSS类名和JavaScript代码不匹配：
- CSS使用.active类控制显示
- JavaScript代码却在使用.hidden类
- 统一使用.active类解决了问题

## 提问技巧总结

### 1. 提供完整的上下文
- 相关的文件列表
- 问题发生的具体场景
- 期望的行为vs实际行为

### 2. 提供有效的调试信息
- 控制台输出的日志
- 相关的代码片段
- 已尝试过的解决方案

### 3. 分步骤描述问题
1. 做了什么操作
2. 期望看到什么
3. 实际发生了什么
4. 相关的错误信息

### 4. 提供最小复现示例
- 相关的HTML结构
- 必要的CSS样式
- 关键的JavaScript代码

### 5. 说明已尝试的方案
- 已经尝试过哪些解决方法
- 这些方法为什么没有解决问题
- 通过尝试得到的任何线索

这样的记录方式可以帮助：
1. 快速定位问题
2. 理清解决思路
3. 积累经验供日后参考
4. 帮助他人更好地理解和协助解决问题
这个模板可以帮助你：
更系统地描述问题
提供关键的上下文信息
记录解决问题的思路
积累经验以便将来遇到类似问题时更快解决
当你遇到新问题时，可以参考这个模板来组织信息，这样不仅可以帮助你更清晰地思考问题，也能帮助我更快地理解和定位问题所在。