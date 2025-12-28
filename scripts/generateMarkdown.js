const fs = require('fs');
const path = require('path');

// 加载所有公式文件（从formulas目录）
const commonFormulas = require('../formulas/common.js');
const mathFormulas = require('../formulas/math.js');
const physicsFormulas = require('../formulas/physics.js');
const chemistryFormulas = require('../formulas/chemistry.js');
const statisticsFormulas = require('../formulas/statistics.js');
const engineeringFormulas = require('../formulas/engineering.js');
const financeFormulas = require('../formulas/finance.js');
const numberTheoryFormulas = require('../formulas/number-theory.js');

// 合并所有公式
const allFormulas = [
  ...commonFormulas,
  ...mathFormulas,
  ...physicsFormulas,
  ...chemistryFormulas,
  ...statisticsFormulas,
  ...engineeringFormulas,
  ...financeFormulas,
  ...numberTheoryFormulas
];

// 按年级和学科分类
const categorizedFormulas = {};

allFormulas.forEach(formula => {
  if (!formula || !formula.id) return;
  
  // 处理grade可能是字符串或数组的情况
  const grades = Array.isArray(formula.grade) ? formula.grade : [formula.grade];
  const category = formula.category || '其他';
  
  grades.forEach(grade => {
    if (!grade) return;
    
    if (!categorizedFormulas[grade]) {
      categorizedFormulas[grade] = {};
    }
    
    if (!categorizedFormulas[grade][category]) {
      categorizedFormulas[grade][category] = [];
    }
    
    categorizedFormulas[grade][category].push(formula);
  });
});

// 生成markdown文件到docs目录
const outputDir = path.join(__dirname, '..', 'docs');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 为每个年级和学科组合生成markdown文件
Object.keys(categorizedFormulas).forEach(grade => {
  const gradeDir = path.join(outputDir, grade);
  
  // 创建年级目录
  if (!fs.existsSync(gradeDir)) {
    fs.mkdirSync(gradeDir, { recursive: true });
  }
  
  Object.keys(categorizedFormulas[grade]).forEach(category => {
    const formulas = categorizedFormulas[grade][category];
    
    // 按子分类分组
    const subCategoryGroups = {};
    formulas.forEach(formula => {
      const subCategory = formula.subCategory || '其他';
      if (!subCategoryGroups[subCategory]) {
        subCategoryGroups[subCategory] = [];
      }
      subCategoryGroups[subCategory].push(formula);
    });
    
    // 生成markdown内容
    let markdown = `# ${grade} - ${category}\n\n`;
    markdown += `本文档包含 ${formulas.length} 个公式。\n\n`;
    markdown += `[← 返回目录](../../README.md)\n\n`;
    markdown += `---\n\n`;
    
    // 按子分类组织
    Object.keys(subCategoryGroups).sort().forEach(subCategory => {
      const subFormulas = subCategoryGroups[subCategory];
      markdown += `## ${subCategory}\n\n`;
      
      subFormulas.forEach(formula => {
        markdown += `### ${formula.name}\n\n`;
        markdown += `**公式ID**: \`${formula.id}\`\n\n`;
        markdown += `**公式**: \`${formula.formula}\`\n\n`;
        
        if (formula.latex) {
          markdown += `**LaTeX**: \`${formula.latex}\`\n\n`;
        }
        
        if (formula.variables && formula.variables.length > 0) {
          markdown += `**变量说明**:\n\n`;
          formula.variables.forEach(variable => {
            markdown += `- **${variable.name}**: ${variable.description}`;
            if (variable.unit) {
              markdown += ` (单位: ${variable.unit})`;
            }
            markdown += `\n`;
          });
          markdown += `\n`;
        }
        
        if (formula.conditions) {
          markdown += `**适用条件**: ${formula.conditions}\n\n`;
        }
        
        if (formula.notes) {
          markdown += `**备注**: ${formula.notes}\n\n`;
        }
        
        if (formula.derivation) {
          markdown += `**推导**: ${formula.derivation}\n\n`;
        }
        
        if (formula.tags && formula.tags.length > 0) {
          markdown += `**标签**: ${formula.tags.join(', ')}\n\n`;
        }
        
        markdown += `---\n\n`;
      });
    });
    
    // 写入文件
    const fileName = `${category}.md`;
    const filePath = path.join(gradeDir, fileName);
    fs.writeFileSync(filePath, markdown, 'utf8');
    console.log(`已生成: ${grade}/${fileName} (${formulas.length} 个公式)`);
  });
});

console.log('\n所有markdown文件已生成完成！');
