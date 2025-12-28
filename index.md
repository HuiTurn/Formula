---
layout: default
title: Formula - 公式库
nav_order: 1
---

# Formula - 公式库

一个全面的全学科公式库，涵盖数学、物理、化学等多个学科，按年级和学科分类整理，方便快速查找和学习。

## 📱 快速访问

扫描下方二维码，使用小程序快速查询公式：

![公式大全速查](assets/qrcode.jpg)

---

## 📖 查看公式

所有公式已按年级和学科整理，点击下方链接快速跳转：

### 小学
- [数学](docs/小学/数学.md) (22个公式)

### 初中
- [数学](docs/初中/数学.md) (25个公式)
- [物理](docs/初中/物理.md) (15个公式)
- [化学](docs/初中/化学.md) (8个公式)

### 高中
- [数学](docs/高中/数学.md) (32个公式)
- [物理](docs/高中/物理.md) (25个公式)
- [化学](docs/高中/化学.md) (13个公式)
- [统计](docs/高中/统计.md) (1个公式)

### 大学
- [数学](docs/大学/数学.md) (367个公式)
- [物理](docs/大学/物理.md) (46个公式)
- [化学](docs/大学/化学.md) (7个公式)
- [统计](docs/大学/统计.md) (1个公式)

### 专业领域
- [工程](docs/专业领域/工程.md) (14个公式)
- [金融](docs/专业领域/金融.md) (18个公式)
- [物理](docs/专业领域/物理.md) (1个公式)
- [统计](docs/专业领域/统计.md) (8个公式)

### 其他
- [积分表 - 数学](docs/积分表/数学.md) (22个公式)

---

## 📊 公式统计

- **小学**：数学 (22个公式)
- **初中**：数学 (25个)、物理 (15个)、化学 (8个)
- **高中**：数学 (32个)、物理 (25个)、化学 (13个)、统计 (1个)
- **大学**：数学 (367个)、物理 (46个)、化学 (7个)、统计 (1个)
- **专业领域**：工程 (14个)、金融 (18个)、物理 (1个)、统计 (8个)
- **积分表**：数学 (22个)

**总计**：548个唯一公式

---

## 📚 关于本项目

### 公式分类

公式按以下方式组织：

- **年级分类**：小学、初中、高中、大学、专业领域
- **学科分类**：数学、物理、化学、统计、工程、金融等
- **文件结构**：
  - 公式数据（JS）：`formulas/学科.js`
  - 文档（Markdown）：`docs/年级/学科.md`
  - 生成脚本：`scripts/generateMarkdown.js`
  - 静态资源：`assets/`（图片等）

### 文档说明

每个公式文档包含以下信息：
- 公式名称和ID
- 公式表达式（文本和LaTeX格式）
- 变量说明和单位
- 适用条件
- 备注和推导过程
- 相关公式链接

---

## 🤝 如何提交公式

我们欢迎社区贡献！如果您想添加新的公式，请按以下步骤操作：

### 1. 找到对应的公式文件

根据公式的年级和学科，找到对应的文件：
- 数学公式：`formulas/math.js`
- 物理公式：`formulas/physics.js`
- 化学公式：`formulas/chemistry.js`
- 统计公式：`formulas/statistics.js`
- 工程公式：`formulas/engineering.js`
- 金融公式：`formulas/finance.js`
- 数论公式：`formulas/number-theory.js`
- 常用公式：`formulas/common.js`（仅限最常用的50个）

### 2. 公式格式

每个公式需要遵循以下JSON格式：

```json
{
  "id": "category_xxx",
  "name": "公式名称",
  "category": "学科（数学/物理/化学/统计/工程/金融）",
  "subCategory": "子分类（如：力学、几何、代数等）",
  "grade": "年级（小学/初中/高中/大学/专业领域）",
  "tags": ["常用公式", "必背公式"],
  "formula": "公式文本（如：F = ma）",
  "latex": "LaTeX格式（如：F = ma）",
  "variables": [
    {
      "name": "F",
      "description": "变量说明",
      "unit": "单位（如：N）"
    }
  ],
  "conditions": "适用条件",
  "notes": "备注说明",
  "derivation": "推导过程",
  "related": ["相关公式ID1", "相关公式ID2"]
}
```

### 3. ID命名规则

- 数学：`math_xxx`
- 物理：`physics_xxx` 或 `astro_xxx`（天文学）
- 化学：`chemistry_xxx`
- 统计：`stat_xxx`
- 工程：`eng_xxx`
- 金融：`finance_xxx`
- 数论：`number_theory_xxx`
- 微积分：`calc_xxx`

### 4. 提交步骤

1. **Fork** 本仓库
2. 在对应的公式文件中添加新公式
3. 确保ID唯一，不与现有公式重复
4. 提交 **Pull Request**
5. 在PR中说明添加的公式及其用途

### 5. 提交示例

```javascript
// 在 formulas/physics.js 中添加
{
  "id": "physics_100",
  "name": "示例公式",
  "category": "物理",
  "subCategory": "力学",
  "grade": "高中",
  "tags": ["常用公式"],
  "formula": "E = mc²",
  "latex": "E = mc^2",
  "variables": [
    {
      "name": "E",
      "description": "能量",
      "unit": "J"
    },
    {
      "name": "m",
      "description": "质量",
      "unit": "kg"
    },
    {
      "name": "c",
      "description": "光速",
      "unit": "3×10⁸ m/s"
    }
  ],
  "conditions": "适用于相对论",
  "notes": "爱因斯坦质能方程",
  "derivation": "由相对论推导得出",
  "related": []
}
```

---

## 🔄 更新Markdown文件

公式数据更新后，需要重新生成Markdown文件。运行以下命令：

```bash
node scripts/generateMarkdown.js
```

该脚本会读取 `formulas/` 目录下的所有公式文件，并生成对应的Markdown文档到 `docs/` 目录下。

---

## 📝 注意事项

1. **ID唯一性**：确保每个公式的ID在整个项目中唯一
2. **格式规范**：严格按照JSON格式，注意逗号和引号
3. **年级分类**：`grade` 可以是字符串或数组（如 `["高中", "大学"]`）
4. **LaTeX格式**：确保LaTeX语法正确，可以使用在线LaTeX编辑器验证
5. **变量说明**：尽量提供完整的变量说明和单位

---

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

MIT License 是一个宽松的开源协议，允许：
- ✅ 商业使用
- ✅ 修改
- ✅ 分发
- ✅ 私人使用
- ✅ 专利使用
- ✅ 放置版权和许可声明

**唯一要求**：在您的项目中保留原始的版权声明和 MIT License 文本。

---

## 🙏 致谢

感谢所有贡献者的支持！

如有问题或建议，欢迎提交 [Issue](https://github.com/HuiTurn/Formula/issues)！

