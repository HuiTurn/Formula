// 公式数据加载入口
// 提供按需加载功能

const indexes = require('./indexes.js');

// 分类文件懒加载器（真正的按需加载）
const categoryLoaders = {
  '数学': () => require('./math.js'),
  '物理': () => require('./physics.js'),
  '化学': () => require('./chemistry.js'),
  '统计': () => require('./statistics.js'),
  '工程': () => require('./engineering.js'),
  '金融': () => require('./finance.js'),
  '数论': () => require('./number-theory.js')
};

// 常用公式
const commonFormulas = require('./common.js');

// 已加载的公式缓存
const loadedFormulas = new Map();

// 公式计算函数映射表（用于补充JSON格式文件中缺失的函数）
// 从自动生成的文件中加载所有公式函数
let formulaFunctions = {};
try {
  const formulaFuncModule = require('./formulaFunctions.js');
  formulaFunctions = formulaFuncModule.formulaFunctions || {};
} catch (e) {
  console.warn('无法加载 formulaFunctions.js，使用默认映射表:', e);
  // 降级处理：使用基本的映射表
  formulaFunctions = {
    'math_001': (a, b) => Math.sqrt(a * a + b * b),
    'math_002': (a, b, c) => {
      const delta = b * b - 4 * a * c;
      if (delta < 0) return '无实数解';
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return delta === 0 ? x1 : [x1, x2];
    },
    'math_003': (r) => Math.PI * r * r,
    'math_002b': (a1, q, n) => {
      if (Math.abs(q - 1) < 1e-10) return a1 * n;
      return a1 * (1 - Math.pow(q, n)) / (1 - q);
    }
  };
}

// 为公式补充缺失的 calculator.formula 函数
function enrichFormula(formula) {
  if (!formula || !formula.calculator) {
    return formula;
  }
  
  // 如果已经有 formula 函数，直接返回
  if (formula.calculator.formula && typeof formula.calculator.formula === 'function') {
    return formula;
  }
  
  // 尝试从映射表中获取函数
  if (formulaFunctions[formula.id]) {
    formula.calculator.formula = formulaFunctions[formula.id];
  }
  
  return formula;
}

// 初始化：加载常用公式
commonFormulas.forEach(formula => {
  if (formula && formula.id) {
    loadedFormulas.set(formula.id, enrichFormula(formula));
  }
});

// 按分类加载公式（懒加载）
function loadCategory(category) {
  if (loadedFormulas.has('_category_' + category)) {
    return; // 已加载
  }
  
  const loader = categoryLoaders[category];
  if (loader) {
    const formulas = loader(); // 懒加载：只在需要时才 require
    if (formulas && Array.isArray(formulas)) {
      formulas.forEach(formula => {
        if (formula && formula.id) {
          loadedFormulas.set(formula.id, enrichFormula(formula));
        }
      });
      loadedFormulas.set('_category_' + category, true);
    }
  }
}

// 按ID加载公式
function loadFormulasByIds(ids) {
  if (!Array.isArray(ids)) return [];
  
  const result = [];
  const needLoad = [];
  
  ids.forEach(id => {
    if (loadedFormulas.has(id)) {
      result.push(enrichFormula(loadedFormulas.get(id)));
    } else {
      needLoad.push(id);
    }
  });
  
  // 从索引中找到公式所属分类，然后加载
  if (needLoad.length > 0) {
    needLoad.forEach(id => {
      const indexInfo = indexes.byId[id];
      if (indexInfo) {
        // 优先检查数论（通过 subCategory 判断）
        if (indexInfo.subCategory && indexInfo.subCategory.startsWith('数论-')) {
          loadCategory('数论');
        } else if (indexInfo.category) {
          const category = indexInfo.category;
          if (categoryLoaders[category]) {
            loadCategory(category);
          }
        }
        
        // 再次尝试获取
        if (loadedFormulas.has(id)) {
          result.push(enrichFormula(loadedFormulas.get(id)));
        }
      }
    });
  }
  
  return result;
}

// 获取单个公式
function getFormulaById(id) {
  if (loadedFormulas.has(id)) {
    return enrichFormula(loadedFormulas.get(id));
  }
  
  // 尝试加载
  loadFormulasByIds([id]);
  const formula = loadedFormulas.get(id);
  return formula ? enrichFormula(formula) : null;
}

// 获取所有已加载的公式
function getAllLoadedFormulas() {
  const result = [];
  loadedFormulas.forEach((value, key) => {
    if (!key.startsWith('_category_') && value && value.id) {
      result.push(enrichFormula(value));
    }
  });
  return result;
}

// 获取常用公式
function getCommonFormulas() {
  return commonFormulas;
}

// 获取索引
function getIndexes() {
  return indexes;
}

module.exports = {
  loadCategory,
  loadFormulasByIds,
  getFormulaById,
  getAllLoadedFormulas,
  getCommonFormulas,
  getIndexes
};
