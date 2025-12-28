// 公式数据结构
const formulas = [
  // 数学公式
  {
    id: 'math_001',
    name: '勾股定理',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'a² + b² = c²',
    latex: 'a^2 + b^2 = c^2',
    variables: [
      { name: 'a', description: '直角边a的长度', unit: '长度单位' },
      { name: 'b', description: '直角边b的长度', unit: '长度单位' },
      { name: 'c', description: '斜边c的长度', unit: '长度单位' }
    ],
    conditions: '适用于直角三角形',
    notes: '在直角三角形中，两直角边的平方和等于斜边的平方',
    derivation: '可以通过面积法或相似三角形证明',
    related: ['math_002', 'math_003'],
    calculator: {
      inputs: ['a', 'b'],
      output: 'c',
      formula: (a, b) => Math.sqrt(a * a + b * b)
    }
  },
  {
    id: 'math_002',
    name: '一元二次方程求根公式',
    category: '数学',
    subCategory: '代数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'x = (-b ± √(b²-4ac)) / 2a',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}',
    variables: [
      { name: 'a', description: '二次项系数', unit: '' },
      { name: 'b', description: '一次项系数', unit: '' },
      { name: 'c', description: '常数项', unit: '' }
    ],
    conditions: 'a ≠ 0，且判别式 Δ = b²-4ac ≥ 0',
    notes: '当 Δ < 0 时，方程无实数解。\n\n极限情形：当 a→0 时，方程 ax²+bx+c=0 退化为一次方程 bx+c=0，因此 x = -c/b（b≠0）。\n\n也可通过洛必达法则验证：对 x = (-b+√(b²-4ac))/(2a) 在 a→0 时应用洛必达法则（设 b>0），分子对 a 求导得 -2c/√(b²-4ac)，分母对 a 求导得 2，因此 x = -c/√(b²-4ac)，当 a=0 时 x = -c/b',
    derivation: '通过配方法推导得出。\n\n极限情形推导：\n\n方法一（直接取极限）：当 a→0 时，ax²+bx+c=0 中 ax² 项可忽略，方程退化为 bx+c=0，直接得到 x = -c/b。\n\n方法二（洛必达法则）：对 x = (-b+√(b²-4ac))/(2a) 在 a→0 时应用洛必达法则，d/da[√(b²-4ac)] = -2c/√(b²-4ac)，d/da[2a] = 2，因此 x = -c/√(b²-4ac)，当 a=0 时 x = -c/b。\n\n方法三（泰勒展开）：√(b²-4ac) = b√(1-4ac/b²) = b(1-2ac/b²+O(a²))，代入得 x = -c/b。\n\n三种方法结果一致',
    related: ['math_001'],
    calculator: {
      inputs: ['a', 'b', 'c'],
      output: 'x',
      formula: (a, b, c) => {
        const delta = b * b - 4 * a * c;
        if (delta < 0) return '无实数解';
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return delta === 0 ? x1 : [x1, x2];
      }
    }
  },
  {
    id: 'math_002b',
    name: '等比数列求和公式',
    category: '数学',
    subCategory: '代数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'S = a₁(1-qⁿ)/(1-q)',
    latex: 'S = a_1\\frac{1-q^n}{1-q}',
    variables: [
      { name: 'S', description: '前n项和', unit: '' },
      { name: 'a₁', description: '首项', unit: '' },
      { name: 'q', description: '公比', unit: '' },
      { name: 'n', description: '项数', unit: '' }
    ],
    conditions: 'q ≠ 1',
    notes: '等比数列前n项和公式。极限情形：当 q→1 时，由洛必达法则可得 S = a₁n·q^(n-1)，代入 q=1 得极限 S = a₁n（此时数列退化为等差数列，S = na₁）',
    derivation: '等比数列求和：S = a₁ + a₁q + a₁q² + ... + a₁q^(n-1) = a₁(1-qⁿ)/(1-q)。极限情形推导：当 q→1 时，对 S = a₁(1-qⁿ)/(1-q) 应用洛必达法则，分子对 q 求导得 a₁(-n·q^(n-1))，分母对 q 求导得 -1，因此 S = a₁n·q^(n-1)，当 q=1 时 S = a₁n',
    related: ['math_002'],
    calculator: {
      inputs: ['a1', 'q', 'n'],
      output: 'S',
      formula: (a1, q, n) => {
        if (Math.abs(q - 1) < 1e-10) return a1 * n; // q→1 的极限情形
        return a1 * (1 - Math.pow(q, n)) / (1 - q);
      }
    }
  },
  {
    id: 'math_003',
    name: '圆的面积公式',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式'],
    formula: 'S = πr²',
    latex: 'S = \\pi r^2',
    variables: [
      { name: 'S', description: '圆的面积', unit: '面积单位' },
      { name: 'r', description: '圆的半径', unit: '长度单位' },
      { name: 'π', description: '圆周率', unit: '约等于3.14159' }
    ],
    conditions: 'r > 0',
    notes: 'π 是圆周率，约等于 3.14159',
    derivation: '通过极限思想，将圆分割成无数个小扇形推导',
    related: ['math_001'],
    calculator: {
      inputs: ['r'],
      output: 'S',
      formula: (r) => Math.PI * r * r
    }
  },
  // 物理公式
  {
    id: 'physics_001',
    name: '牛顿第二定律',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'F = ma',
    latex: 'F = ma',
    variables: [
      { name: 'F', description: '物体所受的合外力', unit: 'N (牛顿)' },
      { name: 'm', description: '物体的质量', unit: 'kg (千克)' },
      { name: 'a', description: '物体的加速度', unit: 'm/s² (米每二次方秒)' }
    ],
    conditions: '适用于宏观低速物体',
    notes: '这是经典力学的基础公式',
    derivation: '通过实验总结得出',
    related: ['physics_002'],
    calculator: {
      inputs: ['m', 'a'],
      output: 'F',
      formula: (m, a) => m * a
    }
  },
  {
    id: 'physics_002',
    name: '动能公式',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式'],
    formula: 'Ek = ½mv²',
    latex: 'E_k = \\frac{1}{2}mv^2',
    variables: [
      { name: 'Ek', description: '物体的动能', unit: 'J (焦耳)' },
      { name: 'm', description: '物体的质量', unit: 'kg (千克)' },
      { name: 'v', description: '物体的速度', unit: 'm/s (米每秒)' }
    ],
    conditions: '适用于宏观低速物体',
    notes: '动能与速度的平方成正比',
    derivation: '由功的定义和牛顿第二定律推导',
    related: ['physics_001'],
    calculator: {
      inputs: ['m', 'v'],
      output: 'Ek',
      formula: (m, v) => 0.5 * m * v * v
    }
  },
  {
    id: 'physics_003',
    name: '万有引力定律',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式'],
    formula: 'F = G(m₁m₂)/r²',
    latex: 'F = G\\frac{m_1m_2}{r^2}',
    variables: [
      { name: 'F', description: '万有引力', unit: 'N (牛顿)' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'm₁', description: '物体1的质量', unit: 'kg (千克)' },
      { name: 'm₂', description: '物体2的质量', unit: 'kg (千克)' },
      { name: 'r', description: '两物体间的距离', unit: 'm (米)' }
    ],
    conditions: '适用于质点或均匀球体',
    notes: 'G 是万有引力常数，约为 6.67×10⁻¹¹ N·m²/kg²',
    derivation: '由开普勒定律和牛顿运动定律推导',
    related: ['physics_001'],
    calculator: {
      inputs: ['m1', 'm2', 'r'],
      output: 'F',
      formula: (m1, m2, r) => {
        const G = 6.67e-11;
        return G * m1 * m2 / (r * r);
      }
    }
  },
  // 化学公式
  {
    id: 'chemistry_001',
    name: '理想气体状态方程',
    category: '化学',
    subCategory: '物理化学',
    grade: ['高中', '大学'],
    tags: ['常用公式', '必背公式'],
    formula: 'PV = nRT',
    latex: 'PV = nRT',
    variables: [
      { name: 'P', description: '气体压强', unit: 'Pa (帕斯卡)' },
      { name: 'V', description: '气体体积', unit: 'm³ (立方米)' },
      { name: 'n', description: '物质的量', unit: 'mol (摩尔)' },
      { name: 'R', description: '理想气体常数', unit: '8.314 J/(mol·K)' },
      { name: 'T', description: '绝对温度', unit: 'K (开尔文)' }
    ],
    conditions: '适用于理想气体，高温低压条件',
    notes: 'R 的值约为 8.314 J/(mol·K)',
    derivation: '由波义耳定律、查理定律和阿伏伽德罗定律综合得出',
    related: [],
    calculator: {
      inputs: ['n', 'T', 'V'],
      output: 'P',
      formula: (n, T, V) => {
        const R = 8.314;
        return n * R * T / V;
      }
    }
  },
  // 统计公式
  {
    id: 'stat_001',
    name: '平均值公式',
    category: '统计',
    subCategory: '描述统计',
    grade: '高中',
    tags: ['常用公式'],
    formula: 'x̄ = (x₁ + x₂ + ... + xₙ) / n',
    latex: '\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}',
    variables: [
      { name: 'x̄', description: '平均值', unit: '' },
      { name: 'x₁, x₂, ..., xₙ', description: '各个数据值', unit: '' },
      { name: 'n', description: '数据个数', unit: '' }
    ],
    conditions: 'n > 0',
    notes: '所有数据值的和除以数据个数',
    derivation: '统计定义',
    related: [],
    calculator: {
      inputs: ['values'],
      output: 'mean',
      formula: (values) => {
        const sum = values.reduce((a, b) => a + b, 0);
        return sum / values.length;
      }
    }
  },
  // 小学数学基础公式
  {
    id: 'primary_math_001',
    name: '分数加法',
    category: '数学',
    subCategory: '分数运算',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'a/b + c/d = (ad + bc) / bd',
    latex: '\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}',
    variables: [
      { name: 'a, c', description: '分子', unit: '' },
      { name: 'b, d', description: '分母', unit: '' }
    ],
    conditions: 'b ≠ 0, d ≠ 0',
    notes: '异分母分数相加，先通分再相加',
    derivation: '分数运算规则',
    related: ['primary_math_002'],
    calculator: {
      inputs: ['a', 'b', 'c', 'd'],
      output: 'result',
      formula: (a, b, c, d) => (a * d + b * c) / (b * d)
    }
  },
  {
    id: 'primary_math_002',
    name: '分数乘法',
    category: '数学',
    subCategory: '分数运算',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'a/b × c/d = ac / bd',
    latex: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}',
    variables: [
      { name: 'a, c', description: '分子', unit: '' },
      { name: 'b, d', description: '分母', unit: '' }
    ],
    conditions: 'b ≠ 0, d ≠ 0',
    notes: '分数相乘，分子乘分子，分母乘分母',
    derivation: '分数运算规则',
    related: ['primary_math_001'],
    calculator: {
      inputs: ['a', 'b', 'c', 'd'],
      output: 'result',
      formula: (a, b, c, d) => (a * c) / (b * d)
    }
  },
  {
    id: 'primary_math_003',
    name: '百分数转小数',
    category: '数学',
    subCategory: '百分数',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'a% = a / 100',
    latex: 'a\\% = \\frac{a}{100}',
    variables: [
      { name: 'a', description: '百分数', unit: '%' }
    ],
    conditions: '',
    notes: '百分数除以100得到小数',
    derivation: '百分数定义',
    related: ['primary_math_004'],
    calculator: {
      inputs: ['a'],
      output: 'decimal',
      formula: (a) => a / 100
    }
  },
  {
    id: 'primary_math_004',
    name: '小数转百分数',
    category: '数学',
    subCategory: '百分数',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'a = a × 100%',
    latex: 'a = a \\times 100\\%',
    variables: [
      { name: 'a', description: '小数', unit: '' }
    ],
    conditions: '',
    notes: '小数乘以100得到百分数',
    derivation: '百分数定义',
    related: ['primary_math_003'],
    calculator: {
      inputs: ['a'],
      output: 'percent',
      formula: (a) => a * 100
    }
  },
  {
    id: 'primary_math_005',
    name: '速度公式',
    category: '数学',
    subCategory: '应用题',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: '速度 = 路程 ÷ 时间',
    latex: 'v = \\frac{s}{t}',
    variables: [
      { name: 'v', description: '速度', unit: 'km/h 或 m/s' },
      { name: 's', description: '路程', unit: 'km 或 m' },
      { name: 't', description: '时间', unit: 'h 或 s' }
    ],
    conditions: 't > 0',
    notes: '路程除以时间等于速度',
    derivation: '速度定义',
    related: ['primary_math_006', 'primary_math_007'],
    calculator: {
      inputs: ['s', 't'],
      output: 'v',
      formula: (s, t) => s / t
    }
  },
  {
    id: 'primary_math_006',
    name: '路程公式',
    category: '数学',
    subCategory: '应用题',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: '路程 = 速度 × 时间',
    latex: 's = vt',
    variables: [
      { name: 's', description: '路程', unit: 'km 或 m' },
      { name: 'v', description: '速度', unit: 'km/h 或 m/s' },
      { name: 't', description: '时间', unit: 'h 或 s' }
    ],
    conditions: '',
    notes: '速度乘以时间等于路程',
    derivation: '速度定义',
    related: ['primary_math_005', 'primary_math_007'],
    calculator: {
      inputs: ['v', 't'],
      output: 's',
      formula: (v, t) => v * t
    }
  },
  {
    id: 'primary_math_007',
    name: '时间公式',
    category: '数学',
    subCategory: '应用题',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: '时间 = 路程 ÷ 速度',
    latex: 't = \\frac{s}{v}',
    variables: [
      { name: 't', description: '时间', unit: 'h 或 s' },
      { name: 's', description: '路程', unit: 'km 或 m' },
      { name: 'v', description: '速度', unit: 'km/h 或 m/s' }
    ],
    conditions: 'v > 0',
    notes: '路程除以速度等于时间',
    derivation: '速度定义',
    related: ['primary_math_005', 'primary_math_006'],
    calculator: {
      inputs: ['s', 'v'],
      output: 't',
      formula: (s, v) => s / v
    }
  },
  // 小学几何基础公式
  {
    id: 'primary_geo_001',
    name: '长方形周长',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'C = 2(a + b)',
    latex: 'C = 2(a + b)',
    variables: [
      { name: 'C', description: '周长', unit: '长度单位' },
      { name: 'a', description: '长', unit: '长度单位' },
      { name: 'b', description: '宽', unit: '长度单位' }
    ],
    conditions: 'a > 0, b > 0',
    notes: '长方形周长等于长加宽的和乘以2',
    derivation: '周长定义',
    related: ['primary_geo_002', 'primary_geo_003'],
    calculator: {
      inputs: ['a', 'b'],
      output: 'C',
      formula: (a, b) => 2 * (a + b)
    }
  },
  {
    id: 'primary_geo_002',
    name: '长方形面积',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'S = ab',
    latex: 'S = ab',
    variables: [
      { name: 'S', description: '面积', unit: '面积单位' },
      { name: 'a', description: '长', unit: '长度单位' },
      { name: 'b', description: '宽', unit: '长度单位' }
    ],
    conditions: 'a > 0, b > 0',
    notes: '长方形面积等于长乘以宽',
    derivation: '面积定义',
    related: ['primary_geo_001', 'primary_geo_003'],
    calculator: {
      inputs: ['a', 'b'],
      output: 'S',
      formula: (a, b) => a * b
    }
  },
  {
    id: 'primary_geo_003',
    name: '正方形周长',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'C = 4a',
    latex: 'C = 4a',
    variables: [
      { name: 'C', description: '周长', unit: '长度单位' },
      { name: 'a', description: '边长', unit: '长度单位' }
    ],
    conditions: 'a > 0',
    notes: '正方形周长等于边长乘以4',
    derivation: '正方形是特殊的长方形',
    related: ['primary_geo_001', 'primary_geo_004'],
    calculator: {
      inputs: ['a'],
      output: 'C',
      formula: (a) => 4 * a
    }
  },
  {
    id: 'primary_geo_004',
    name: '正方形面积',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'S = a²',
    latex: 'S = a^2',
    variables: [
      { name: 'S', description: '面积', unit: '面积单位' },
      { name: 'a', description: '边长', unit: '长度单位' }
    ],
    conditions: 'a > 0',
    notes: '正方形面积等于边长的平方',
    derivation: '正方形是特殊的长方形',
    related: ['primary_geo_002', 'primary_geo_003'],
    calculator: {
      inputs: ['a'],
      output: 'S',
      formula: (a) => a * a
    }
  },
  {
    id: 'primary_geo_005',
    name: '三角形面积',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'S = ½ah',
    latex: 'S = \\frac{1}{2}ah',
    variables: [
      { name: 'S', description: '面积', unit: '面积单位' },
      { name: 'a', description: '底边长', unit: '长度单位' },
      { name: 'h', description: '高', unit: '长度单位' }
    ],
    conditions: 'a > 0, h > 0',
    notes: '三角形面积等于底乘以高除以2',
    derivation: '通过长方形面积推导',
    related: ['primary_geo_002'],
    calculator: {
      inputs: ['a', 'h'],
      output: 'S',
      formula: (a, h) => 0.5 * a * h
    }
  },
  {
    id: 'primary_geo_006',
    name: '平行四边形面积',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'S = ah',
    latex: 'S = ah',
    variables: [
      { name: 'S', description: '面积', unit: '面积单位' },
      { name: 'a', description: '底边长', unit: '长度单位' },
      { name: 'h', description: '高', unit: '长度单位' }
    ],
    conditions: 'a > 0, h > 0',
    notes: '平行四边形面积等于底乘以高',
    derivation: '通过割补法推导',
    related: ['primary_geo_002', 'primary_geo_005'],
    calculator: {
      inputs: ['a', 'h'],
      output: 'S',
      formula: (a, h) => a * h
    }
  },
  {
    id: 'primary_geo_007',
    name: '梯形面积',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'S = ½(a + b)h',
    latex: 'S = \\frac{1}{2}(a + b)h',
    variables: [
      { name: 'S', description: '面积', unit: '面积单位' },
      { name: 'a', description: '上底', unit: '长度单位' },
      { name: 'b', description: '下底', unit: '长度单位' },
      { name: 'h', description: '高', unit: '长度单位' }
    ],
    conditions: 'a > 0, b > 0, h > 0',
    notes: '梯形面积等于上底加下底的和乘以高除以2',
    derivation: '通过两个三角形面积推导',
    related: ['primary_geo_005'],
    calculator: {
      inputs: ['a', 'b', 'h'],
      output: 'S',
      formula: (a, b, h) => 0.5 * (a + b) * h
    }
  },
  {
    id: 'primary_geo_008',
    name: '圆的周长',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'C = 2πr = πd',
    latex: 'C = 2\\pi r = \\pi d',
    variables: [
      { name: 'C', description: '周长', unit: '长度单位' },
      { name: 'r', description: '半径', unit: '长度单位' },
      { name: 'd', description: '直径', unit: '长度单位' },
      { name: 'π', description: '圆周率', unit: '约等于3.14159' }
    ],
    conditions: 'r > 0',
    notes: '圆的周长等于直径乘以π，或半径乘以2π',
    derivation: '通过实验测量得出',
    related: ['math_003'],
    calculator: {
      inputs: ['r'],
      output: 'C',
      formula: (r) => 2 * Math.PI * r
    }
  },
  {
    id: 'primary_geo_009',
    name: '长方体体积',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'V = abc',
    latex: 'V = abc',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'a', description: '长', unit: '长度单位' },
      { name: 'b', description: '宽', unit: '长度单位' },
      { name: 'c', description: '高', unit: '长度单位' }
    ],
    conditions: 'a > 0, b > 0, c > 0',
    notes: '长方体体积等于长乘以宽乘以高',
    derivation: '体积定义',
    related: ['primary_geo_010'],
    calculator: {
      inputs: ['a', 'b', 'c'],
      output: 'V',
      formula: (a, b, c) => a * b * c
    }
  },
  {
    id: 'primary_geo_010',
    name: '正方体体积',
    category: '数学',
    subCategory: '几何',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: 'V = a³',
    latex: 'V = a^3',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'a', description: '边长', unit: '长度单位' }
    ],
    conditions: 'a > 0',
    notes: '正方体体积等于边长的立方',
    derivation: '正方体是特殊的长方体',
    related: ['primary_geo_009'],
    calculator: {
      inputs: ['a'],
      output: 'V',
      formula: (a) => a * a * a
    }
  },
  // 单位换算公式
  {
    id: 'unit_001',
    name: '长度单位换算',
    category: '数学',
    subCategory: '单位换算',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: '1千米(km) = 1000米(m) = 100000厘米(cm) = 1000000毫米(mm)',
    latex: '1\\text{km} = 1000\\text{m} = 100000\\text{cm} = 1000000\\text{mm}',
    variables: [
      { name: 'km', description: '千米', unit: 'km' },
      { name: 'm', description: '米', unit: 'm' },
      { name: 'cm', description: '厘米', unit: 'cm' },
      { name: 'mm', description: '毫米', unit: 'mm' }
    ],
    conditions: '',
    notes: '1千米=1000米，1米=100厘米，1厘米=10毫米',
    derivation: '长度单位定义',
    related: ['unit_002', 'unit_003'],
    calculator: {
      inputs: ['value', 'fromUnit', 'toUnit'],
      output: 'result',
      formula: (value, fromUnit, toUnit) => {
        const units = { km: 1000000, m: 1000, cm: 10, mm: 1 };
        return value * units[fromUnit] / units[toUnit];
      }
    }
  },
  {
    id: 'unit_002',
    name: '面积单位换算',
    category: '数学',
    subCategory: '单位换算',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: '1平方千米(km²) = 1000000平方米(m²) = 10000平方厘米(cm²)',
    latex: '1\\text{km}^2 = 1000000\\text{m}^2 = 10000\\text{cm}^2',
    variables: [
      { name: 'km²', description: '平方千米', unit: 'km²' },
      { name: 'm²', description: '平方米', unit: 'm²' },
      { name: 'cm²', description: '平方厘米', unit: 'cm²' }
    ],
    conditions: '',
    notes: '1平方千米=1000000平方米，1平方米=10000平方厘米',
    derivation: '面积单位定义',
    related: ['unit_001', 'unit_003'],
    calculator: {
      inputs: ['value', 'fromUnit', 'toUnit'],
      output: 'result',
      formula: (value, fromUnit, toUnit) => {
        const units = { 'km²': 1000000, 'm²': 1, 'cm²': 0.0001 };
        return value * units[fromUnit] / units[toUnit];
      }
    }
  },
  {
    id: 'unit_003',
    name: '体积单位换算',
    category: '数学',
    subCategory: '单位换算',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: '1立方米(m³) = 1000升(L) = 1000000毫升(mL)',
    latex: '1\\text{m}^3 = 1000\\text{L} = 1000000\\text{mL}',
    variables: [
      { name: 'm³', description: '立方米', unit: 'm³' },
      { name: 'L', description: '升', unit: 'L' },
      { name: 'mL', description: '毫升', unit: 'mL' }
    ],
    conditions: '',
    notes: '1立方米=1000升，1升=1000毫升',
    derivation: '体积单位定义',
    related: ['unit_001', 'unit_002'],
    calculator: {
      inputs: ['value', 'fromUnit', 'toUnit'],
      output: 'result',
      formula: (value, fromUnit, toUnit) => {
        const units = { 'm³': 1000, 'L': 1, 'mL': 0.001 };
        return value * units[fromUnit] / units[toUnit];
      }
    }
  },
  {
    id: 'unit_004',
    name: '质量单位换算',
    category: '数学',
    subCategory: '单位换算',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: '1吨(t) = 1000千克(kg) = 1000000克(g)',
    latex: '1\\text{t} = 1000\\text{kg} = 1000000\\text{g}',
    variables: [
      { name: 't', description: '吨', unit: 't' },
      { name: 'kg', description: '千克', unit: 'kg' },
      { name: 'g', description: '克', unit: 'g' }
    ],
    conditions: '',
    notes: '1吨=1000千克，1千克=1000克',
    derivation: '质量单位定义',
    related: ['unit_001'],
    calculator: {
      inputs: ['value', 'fromUnit', 'toUnit'],
      output: 'result',
      formula: (value, fromUnit, toUnit) => {
        const units = { t: 1000, kg: 1, g: 0.001 };
        return value * units[fromUnit] / units[toUnit];
      }
    }
  },
  {
    id: 'unit_005',
    name: '时间单位换算',
    category: '数学',
    subCategory: '单位换算',
    grade: '小学',
    tags: ['基础公式', '必背公式'],
    formula: '1小时(h) = 60分钟(min) = 3600秒(s)',
    latex: '1\\text{h} = 60\\text{min} = 3600\\text{s}',
    variables: [
      { name: 'h', description: '小时', unit: 'h' },
      { name: 'min', description: '分钟', unit: 'min' },
      { name: 's', description: '秒', unit: 's' }
    ],
    conditions: '',
    notes: '1小时=60分钟，1分钟=60秒',
    derivation: '时间单位定义',
    related: ['primary_math_005'],
    calculator: {
      inputs: ['value', 'fromUnit', 'toUnit'],
      output: 'result',
      formula: (value, fromUnit, toUnit) => {
        const units = { h: 3600, min: 60, s: 1 };
        return value * units[fromUnit] / units[toUnit];
      }
    }
  },
  // 初中代数公式
  {
    id: 'middle_alg_001',
    name: '完全平方公式',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '(a ± b)² = a² ± 2ab + b²',
    latex: '(a \\pm b)^2 = a^2 \\pm 2ab + b^2',
    variables: [
      { name: 'a', description: '第一个数', unit: '' },
      { name: 'b', description: '第二个数', unit: '' }
    ],
    conditions: '',
    notes: '完全平方公式，展开后得到三项式',
    derivation: '通过多项式乘法展开',
    related: ['middle_alg_002', 'middle_alg_003'],
    calculator: {
      inputs: ['a', 'b', 'sign'],
      output: 'result',
      formula: (a, b, sign) => {
        const ab = sign === '+' ? 2 * a * b : -2 * a * b;
        return a * a + ab + b * b;
      }
    }
  },
  {
    id: 'middle_alg_002',
    name: '平方差公式',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'a² - b² = (a + b)(a - b)',
    latex: 'a^2 - b^2 = (a + b)(a - b)',
    variables: [
      { name: 'a', description: '第一个数', unit: '' },
      { name: 'b', description: '第二个数', unit: '' }
    ],
    conditions: '',
    notes: '两个数的平方差等于它们的和与差的乘积',
    derivation: '通过因式分解得出',
    related: ['middle_alg_001', 'middle_alg_003'],
    calculator: {
      inputs: ['a', 'b'],
      output: 'result',
      formula: (a, b) => a * a - b * b
    }
  },
  {
    id: 'middle_alg_003',
    name: '立方和公式',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式'],
    formula: 'a³ + b³ = (a + b)(a² - ab + b²)',
    latex: 'a^3 + b^3 = (a + b)(a^2 - ab + b^2)',
    variables: [
      { name: 'a', description: '第一个数', unit: '' },
      { name: 'b', description: '第二个数', unit: '' }
    ],
    conditions: '',
    notes: '两个数的立方和等于它们的和与差的平方的乘积',
    derivation: '通过因式分解得出',
    related: ['middle_alg_001', 'middle_alg_002'],
    calculator: {
      inputs: ['a', 'b'],
      output: 'result',
      formula: (a, b) => a * a * a + b * b * b
    }
  },
  {
    id: 'middle_alg_004',
    name: '立方差公式',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式'],
    formula: 'a³ - b³ = (a - b)(a² + ab + b²)',
    latex: 'a^3 - b^3 = (a - b)(a^2 + ab + b^2)',
    variables: [
      { name: 'a', description: '第一个数', unit: '' },
      { name: 'b', description: '第二个数', unit: '' }
    ],
    conditions: '',
    notes: '两个数的立方差等于它们的差与和的平方的乘积',
    derivation: '通过因式分解得出',
    related: ['middle_alg_001', 'middle_alg_003'],
    calculator: {
      inputs: ['a', 'b'],
      output: 'result',
      formula: (a, b) => a * a * a - b * b * b
    }
  },
  {
    id: 'middle_alg_005',
    name: '一元一次方程',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'ax + b = 0，解为 x = -b/a',
    latex: 'ax + b = 0, \\quad x = -\\frac{b}{a}',
    variables: [
      { name: 'a', description: '一次项系数', unit: '' },
      { name: 'b', description: '常数项', unit: '' },
      { name: 'x', description: '未知数', unit: '' }
    ],
    conditions: 'a ≠ 0',
    notes: '一元一次方程的标准形式',
    derivation: '通过移项和系数化1得出',
    related: ['math_002'],
    calculator: {
      inputs: ['a', 'b'],
      output: 'x',
      formula: (a, b) => -b / a
    }
  },
  {
    id: 'middle_alg_006',
    name: '二元一次方程组（代入法）',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'ax + by = c, dx + ey = f',
    latex: '\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}',
    variables: [
      { name: 'a, b, c', description: '第一个方程的系数', unit: '' },
      { name: 'd, e, f', description: '第二个方程的系数', unit: '' },
      { name: 'x, y', description: '未知数', unit: '' }
    ],
    conditions: 'ae - bd ≠ 0',
    notes: '二元一次方程组，可用代入法或加减法求解',
    derivation: '通过消元法求解',
    related: ['middle_alg_005'],
    calculator: {
      inputs: ['a', 'b', 'c', 'd', 'e', 'f'],
      output: 'result',
      formula: (a, b, c, d, e, f) => {
        const det = a * e - b * d;
        if (Math.abs(det) < 1e-10) return '无解或无穷多解';
        const x = (c * e - b * f) / det;
        const y = (a * f - c * d) / det;
        return { x, y };
      }
    }
  },
  {
    id: 'middle_alg_007',
    name: '幂的乘法法则',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ',
    latex: 'a^m \\times a^n = a^{m+n}',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'm, n', description: '指数', unit: '' }
    ],
    conditions: 'a ≠ 0',
    notes: '同底数幂相乘，底数不变，指数相加',
    derivation: '幂的定义',
    related: ['middle_alg_008', 'middle_alg_009'],
    calculator: {
      inputs: ['a', 'm', 'n'],
      output: 'result',
      formula: (a, m, n) => Math.pow(a, m + n)
    }
  },
  {
    id: 'middle_alg_008',
    name: '幂的除法法则',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
    latex: 'a^m \\div a^n = a^{m-n}',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'm, n', description: '指数', unit: '' }
    ],
    conditions: 'a ≠ 0',
    notes: '同底数幂相除，底数不变，指数相减',
    derivation: '幂的定义',
    related: ['middle_alg_007', 'middle_alg_009'],
    calculator: {
      inputs: ['a', 'm', 'n'],
      output: 'result',
      formula: (a, m, n) => Math.pow(a, m - n)
    }
  },
  {
    id: 'middle_alg_009',
    name: '幂的乘方法则',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '(aᵐ)ⁿ = aᵐⁿ',
    latex: '(a^m)^n = a^{mn}',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'm, n', description: '指数', unit: '' }
    ],
    conditions: '',
    notes: '幂的乘方，底数不变，指数相乘',
    derivation: '幂的定义',
    related: ['middle_alg_007', 'middle_alg_008'],
    calculator: {
      inputs: ['a', 'm', 'n'],
      output: 'result',
      formula: (a, m, n) => Math.pow(a, m * n)
    }
  },
  {
    id: 'middle_alg_010',
    name: '分式加减法',
    category: '数学',
    subCategory: '代数',
    grade: '初中',
    tags: ['常用公式'],
    formula: 'a/b ± c/d = (ad ± bc) / bd',
    latex: '\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}',
    variables: [
      { name: 'a, c', description: '分子', unit: '' },
      { name: 'b, d', description: '分母', unit: '' }
    ],
    conditions: 'b ≠ 0, d ≠ 0',
    notes: '异分母分式相加减，先通分再计算',
    derivation: '分式运算规则',
    related: ['primary_math_001'],
    calculator: {
      inputs: ['a', 'b', 'c', 'd', 'sign'],
      output: 'result',
      formula: (a, b, c, d, sign) => {
        return sign === '+' ? (a * d + b * c) / (b * d) : (a * d - b * c) / (b * d);
      }
    }
  },
  // 初中几何公式
  {
    id: 'middle_geo_001',
    name: '三角形内角和',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '∠A + ∠B + ∠C = 180°',
    latex: '\\angle A + \\angle B + \\angle C = 180^\\circ',
    variables: [
      { name: '∠A, ∠B, ∠C', description: '三角形的三个内角', unit: '度(°)' }
    ],
    conditions: '适用于任意三角形',
    notes: '三角形三个内角的和等于180度',
    derivation: '通过平行线性质证明',
    related: ['middle_geo_002'],
    calculator: {
      inputs: ['angleA', 'angleB'],
      output: 'angleC',
      formula: (angleA, angleB) => 180 - angleA - angleB
    }
  },
  {
    id: 'middle_geo_002',
    name: '三角形外角和',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式'],
    formula: '外角 = 不相邻两内角之和',
    latex: '\\text{外角} = \\text{不相邻两内角之和}',
    variables: [
      { name: '外角', description: '三角形的一个外角', unit: '度(°)' }
    ],
    conditions: '适用于任意三角形',
    notes: '三角形的一个外角等于与它不相邻的两个内角的和',
    derivation: '由三角形内角和定理推导',
    related: ['middle_geo_001'],
    calculator: {
      inputs: ['angle1', 'angle2'],
      output: 'exteriorAngle',
      formula: (angle1, angle2) => angle1 + angle2
    }
  },
  {
    id: 'middle_geo_003',
    name: '多边形内角和',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '内角和 = (n - 2) × 180°',
    latex: '\\text{内角和} = (n - 2) \\times 180^\\circ',
    variables: [
      { name: 'n', description: '多边形的边数', unit: '' }
    ],
    conditions: 'n ≥ 3',
    notes: 'n边形的内角和等于(n-2)×180度',
    derivation: '通过分割成三角形推导',
    related: ['middle_geo_001'],
    calculator: {
      inputs: ['n'],
      output: 'sum',
      formula: (n) => (n - 2) * 180
    }
  },
  {
    id: 'middle_geo_004',
    name: '多边形外角和',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '外角和 = 360°',
    latex: '\\text{外角和} = 360^\\circ',
    variables: [
      { name: 'n', description: '多边形的边数', unit: '' }
    ],
    conditions: 'n ≥ 3',
    notes: '任意多边形的外角和都等于360度',
    derivation: '通过旋转角度推导',
    related: ['middle_geo_003'],
    calculator: {
      inputs: [],
      output: 'sum',
      formula: () => 360
    }
  },
  {
    id: 'middle_geo_005',
    name: '扇形面积',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'S = (n/360) × πr² = (1/2)lr',
    latex: 'S = \\frac{n}{360} \\times \\pi r^2 = \\frac{1}{2}lr',
    variables: [
      { name: 'S', description: '扇形面积', unit: '面积单位' },
      { name: 'n', description: '圆心角度数', unit: '度(°)' },
      { name: 'r', description: '半径', unit: '长度单位' },
      { name: 'l', description: '弧长', unit: '长度单位' }
    ],
    conditions: 'r > 0, 0° < n ≤ 360°',
    notes: '扇形面积等于圆面积乘以圆心角比例，或等于弧长乘以半径的一半',
    derivation: '由圆的面积公式推导',
    related: ['math_003', 'middle_geo_006'],
    calculator: {
      inputs: ['n', 'r'],
      output: 'S',
      formula: (n, r) => (n / 360) * Math.PI * r * r
    }
  },
  {
    id: 'middle_geo_006',
    name: '扇形弧长',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'l = (n/360) × 2πr = (nπr)/180',
    latex: 'l = \\frac{n}{360} \\times 2\\pi r = \\frac{n\\pi r}{180}',
    variables: [
      { name: 'l', description: '弧长', unit: '长度单位' },
      { name: 'n', description: '圆心角度数', unit: '度(°)' },
      { name: 'r', description: '半径', unit: '长度单位' }
    ],
    conditions: 'r > 0, 0° < n ≤ 360°',
    notes: '扇形弧长等于圆周长的圆心角比例',
    derivation: '由圆的周长公式推导',
    related: ['primary_geo_008', 'middle_geo_005'],
    calculator: {
      inputs: ['n', 'r'],
      output: 'l',
      formula: (n, r) => (n / 360) * 2 * Math.PI * r
    }
  },
  {
    id: 'middle_geo_007',
    name: '圆柱体积',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'V = πr²h',
    latex: 'V = \\pi r^2 h',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'r', description: '底面半径', unit: '长度单位' },
      { name: 'h', description: '高', unit: '长度单位' }
    ],
    conditions: 'r > 0, h > 0',
    notes: '圆柱体积等于底面积乘以高',
    derivation: '由体积定义推导',
    related: ['math_003', 'middle_geo_008'],
    calculator: {
      inputs: ['r', 'h'],
      output: 'V',
      formula: (r, h) => Math.PI * r * r * h
    }
  },
  {
    id: 'middle_geo_008',
    name: '圆柱表面积',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'S = 2πr² + 2πrh = 2πr(r + h)',
    latex: 'S = 2\\pi r^2 + 2\\pi rh = 2\\pi r(r + h)',
    variables: [
      { name: 'S', description: '表面积', unit: '面积单位' },
      { name: 'r', description: '底面半径', unit: '长度单位' },
      { name: 'h', description: '高', unit: '长度单位' }
    ],
    conditions: 'r > 0, h > 0',
    notes: '圆柱表面积等于两个底面积加上侧面积',
    derivation: '由表面积定义推导',
    related: ['math_003', 'middle_geo_007'],
    calculator: {
      inputs: ['r', 'h'],
      output: 'S',
      formula: (r, h) => 2 * Math.PI * r * (r + h)
    }
  },
  {
    id: 'middle_geo_009',
    name: '圆锥体积',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'V = (1/3)πr²h',
    latex: 'V = \\frac{1}{3}\\pi r^2 h',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'r', description: '底面半径', unit: '长度单位' },
      { name: 'h', description: '高', unit: '长度单位' }
    ],
    conditions: 'r > 0, h > 0',
    notes: '圆锥体积等于同底等高的圆柱体积的三分之一',
    derivation: '通过积分或实验验证',
    related: ['middle_geo_007', 'middle_geo_010'],
    calculator: {
      inputs: ['r', 'h'],
      output: 'V',
      formula: (r, h) => (1 / 3) * Math.PI * r * r * h
    }
  },
  {
    id: 'middle_geo_010',
    name: '圆锥侧面积',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'S = πrl',
    latex: 'S = \\pi rl',
    variables: [
      { name: 'S', description: '侧面积', unit: '面积单位' },
      { name: 'r', description: '底面半径', unit: '长度单位' },
      { name: 'l', description: '母线长', unit: '长度单位' }
    ],
    conditions: 'r > 0, l > 0',
    notes: '圆锥侧面积等于π乘以半径乘以母线长',
    derivation: '通过展开扇形推导',
    related: ['middle_geo_009', 'middle_geo_005'],
    calculator: {
      inputs: ['r', 'l'],
      output: 'S',
      formula: (r, l) => Math.PI * r * l
    }
  },
  {
    id: 'middle_geo_011',
    name: '球体积',
    category: '数学',
    subCategory: '几何',
    grade: ['初中', '高中'],
    tags: ['常用公式', '必背公式'],
    formula: 'V = (4/3)πr³',
    latex: 'V = \\frac{4}{3}\\pi r^3',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'r', description: '半径', unit: '长度单位' }
    ],
    conditions: 'r > 0',
    notes: '球体积等于三分之四乘以π乘以半径的立方',
    derivation: '通过积分推导',
    related: ['middle_geo_012'],
    calculator: {
      inputs: ['r'],
      output: 'V',
      formula: (r) => (4 / 3) * Math.PI * r * r * r
    }
  },
  {
    id: 'middle_geo_012',
    name: '球表面积',
    category: '数学',
    subCategory: '几何',
    grade: ['初中', '高中'],
    tags: ['常用公式', '必背公式'],
    formula: 'S = 4πr²',
    latex: 'S = 4\\pi r^2',
    variables: [
      { name: 'S', description: '表面积', unit: '面积单位' },
      { name: 'r', description: '半径', unit: '长度单位' }
    ],
    conditions: 'r > 0',
    notes: '球表面积等于4π乘以半径的平方',
    derivation: '通过积分推导',
    related: ['math_003', 'middle_geo_011'],
    calculator: {
      inputs: ['r'],
      output: 'S',
      formula: (r) => 4 * Math.PI * r * r
    }
  },
  {
    id: 'middle_geo_013',
    name: '相似三角形性质',
    category: '数学',
    subCategory: '几何',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '对应边成比例，对应角相等',
    latex: '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}',
    variables: [
      { name: 'a₁, b₁, c₁', description: '第一个三角形的三边', unit: '长度单位' },
      { name: 'a₂, b₂, c₂', description: '第二个三角形的三边', unit: '长度单位' }
    ],
    conditions: '两个三角形相似',
    notes: '相似三角形的对应边成比例，对应角相等',
    derivation: '相似三角形定义',
    related: ['math_001'],
    calculator: {
      inputs: ['a1', 'a2', 'b1'],
      output: 'b2',
      formula: (a1, a2, b1) => (a2 * b1) / a1
    }
  },
  // 初中物理基础公式
  {
    id: 'middle_phy_001',
    name: '密度公式',
    category: '物理',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'ρ = m/V',
    latex: '\\rho = \\frac{m}{V}',
    variables: [
      { name: 'ρ', description: '密度', unit: 'kg/m³ (千克每立方米)' },
      { name: 'm', description: '质量', unit: 'kg (千克)' },
      { name: 'V', description: '体积', unit: 'm³ (立方米)' }
    ],
    conditions: 'V > 0',
    notes: '密度等于质量除以体积',
    derivation: '密度定义',
    related: ['middle_phy_002'],
    calculator: {
      inputs: ['m', 'V'],
      output: 'rho',
      formula: (m, V) => m / V
    }
  },
  {
    id: 'middle_phy_002',
    name: '压强公式',
    category: '物理',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'p = F/S',
    latex: 'p = \\frac{F}{S}',
    variables: [
      { name: 'p', description: '压强', unit: 'Pa (帕斯卡)' },
      { name: 'F', description: '压力', unit: 'N (牛顿)' },
      { name: 'S', description: '受力面积', unit: 'm² (平方米)' }
    ],
    conditions: 'S > 0',
    notes: '压强等于压力除以受力面积',
    derivation: '压强定义',
    related: ['middle_phy_003'],
    calculator: {
      inputs: ['F', 'S'],
      output: 'p',
      formula: (F, S) => F / S
    }
  },
  {
    id: 'middle_phy_003',
    name: '液体压强公式',
    category: '物理',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'p = ρgh',
    latex: 'p = \\rho gh',
    variables: [
      { name: 'p', description: '液体压强', unit: 'Pa (帕斯卡)' },
      { name: 'ρ', description: '液体密度', unit: 'kg/m³ (千克每立方米)' },
      { name: 'g', description: '重力加速度', unit: '9.8 m/s²' },
      { name: 'h', description: '深度', unit: 'm (米)' }
    ],
    conditions: 'h > 0',
    notes: '液体压强等于密度乘以重力加速度乘以深度',
    derivation: '由压强定义和液体性质推导',
    related: ['middle_phy_001', 'middle_phy_002'],
    calculator: {
      inputs: ['rho', 'h'],
      output: 'p',
      formula: (rho, h) => {
        const g = 9.8;
        return rho * g * h;
      }
    }
  },
  {
    id: 'middle_phy_004',
    name: '浮力公式（阿基米德原理）',
    category: '物理',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'F浮 = ρ液gV排',
    latex: 'F_{\\text{浮}} = \\rho_{\\text{液}} g V_{\\text{排}}',
    variables: [
      { name: 'F浮', description: '浮力', unit: 'N (牛顿)' },
      { name: 'ρ液', description: '液体密度', unit: 'kg/m³ (千克每立方米)' },
      { name: 'g', description: '重力加速度', unit: '9.8 m/s²' },
      { name: 'V排', description: '排开液体的体积', unit: 'm³ (立方米)' }
    ],
    conditions: '',
    notes: '物体受到的浮力等于它排开液体的重力',
    derivation: '阿基米德原理',
    related: ['middle_phy_001', 'middle_phy_003'],
    calculator: {
      inputs: ['rho', 'V'],
      output: 'F',
      formula: (rho, V) => {
        const g = 9.8;
        return rho * g * V;
      }
    }
  },
  {
    id: 'middle_phy_005',
    name: '功的公式',
    category: '物理',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'W = Fs',
    latex: 'W = Fs',
    variables: [
      { name: 'W', description: '功', unit: 'J (焦耳)' },
      { name: 'F', description: '力', unit: 'N (牛顿)' },
      { name: 's', description: '在力的方向上移动的距离', unit: 'm (米)' }
    ],
    conditions: '力与位移方向相同',
    notes: '功等于力乘以在力的方向上移动的距离',
    derivation: '功的定义',
    related: ['middle_phy_006'],
    calculator: {
      inputs: ['F', 's'],
      output: 'W',
      formula: (F, s) => F * s
    }
  },
  {
    id: 'middle_phy_006',
    name: '功率公式',
    category: '物理',
    subCategory: '基础',
    grade: ['初中', '专业领域'],
    tags: ['常用公式', '必背公式'],
    formula: 'P = W/t = Fv',
    latex: 'P = \\frac{W}{t} = Fv',
    variables: [
      { name: 'P', description: '功率', unit: 'W (瓦特)' },
      { name: 'W', description: '功', unit: 'J (焦耳)' },
      { name: 't', description: '时间', unit: 's (秒)' },
      { name: 'F', description: '力', unit: 'N (牛顿)' },
      { name: 'v', description: '速度', unit: 'm/s (米每秒)' }
    ],
    conditions: 't > 0',
    notes: '功率等于功除以时间，或等于力乘以速度',
    derivation: '功率定义',
    related: ['middle_phy_005'],
    calculator: {
      inputs: ['W', 't'],
      output: 'P',
      formula: (W, t) => W / t
    }
  },
  {
    id: 'middle_phy_007',
    name: '机械效率',
    category: '物理',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'η = (W有用/W总) × 100%',
    latex: '\\eta = \\frac{W_{\\text{有用}}}{W_{\\text{总}}} \\times 100\\%',
    variables: [
      { name: 'η', description: '机械效率', unit: '% (百分比)' },
      { name: 'W有用', description: '有用功', unit: 'J (焦耳)' },
      { name: 'W总', description: '总功', unit: 'J (焦耳)' }
    ],
    conditions: 'W总 > 0',
    notes: '机械效率等于有用功除以总功再乘以100%',
    derivation: '效率定义',
    related: ['middle_phy_005'],
    calculator: {
      inputs: ['W_useful', 'W_total'],
      output: 'eta',
      formula: (W_useful, W_total) => (W_useful / W_total) * 100
    }
  },
  {
    id: 'middle_phy_008',
    name: '杠杆平衡条件',
    category: '物理',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'F₁l₁ = F₂l₂',
    latex: 'F_1 l_1 = F_2 l_2',
    variables: [
      { name: 'F₁, F₂', description: '两个力', unit: 'N (牛顿)' },
      { name: 'l₁, l₂', description: '力臂', unit: 'm (米)' }
    ],
    conditions: '杠杆平衡',
    notes: '杠杆平衡时，动力乘以动力臂等于阻力乘以阻力臂',
    derivation: '杠杆原理',
    related: [],
    calculator: {
      inputs: ['F1', 'l1', 'l2'],
      output: 'F2',
      formula: (F1, l1, l2) => (F1 * l1) / l2
    }
  },
  {
    id: 'middle_phy_009',
    name: '比热容公式',
    category: '物理',
    subCategory: '热学',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'Q = cmΔt',
    latex: 'Q = cm\\Delta t',
    variables: [
      { name: 'Q', description: '吸收或放出的热量', unit: 'J (焦耳)' },
      { name: 'c', description: '比热容', unit: 'J/(kg·℃)' },
      { name: 'm', description: '质量', unit: 'kg (千克)' },
      { name: 'Δt', description: '温度变化量', unit: '℃ (摄氏度)' }
    ],
    conditions: '',
    notes: '物体吸收或放出的热量等于比热容乘以质量乘以温度变化量',
    derivation: '比热容定义',
    related: ['middle_phy_010'],
    calculator: {
      inputs: ['c', 'm', 'deltaT'],
      output: 'Q',
      formula: (c, m, deltaT) => c * m * deltaT
    }
  },
  {
    id: 'middle_phy_010',
    name: '热值公式',
    category: '物理',
    subCategory: '热学',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'Q = qm',
    latex: 'Q = qm',
    variables: [
      { name: 'Q', description: '放出的热量', unit: 'J (焦耳)' },
      { name: 'q', description: '热值', unit: 'J/kg 或 J/m³' },
      { name: 'm', description: '燃料质量或体积', unit: 'kg 或 m³' }
    ],
    conditions: '',
    notes: '燃料完全燃烧放出的热量等于热值乘以质量（或体积）',
    derivation: '热值定义',
    related: ['middle_phy_009'],
    calculator: {
      inputs: ['q', 'm'],
      output: 'Q',
      formula: (q, m) => q * m
    }
  },
  {
    id: 'middle_phy_011',
    name: '欧姆定律',
    category: '物理',
    subCategory: '电学',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'I = U/R',
    latex: 'I = \\frac{U}{R}',
    variables: [
      { name: 'I', description: '电流', unit: 'A (安培)' },
      { name: 'U', description: '电压', unit: 'V (伏特)' },
      { name: 'R', description: '电阻', unit: 'Ω (欧姆)' }
    ],
    conditions: 'R > 0',
    notes: '导体中的电流与导体两端的电压成正比，与导体的电阻成反比',
    derivation: '欧姆定律',
    related: ['middle_phy_012', 'middle_phy_013'],
    calculator: {
      inputs: ['U', 'R'],
      output: 'I',
      formula: (U, R) => U / R
    }
  },
  {
    id: 'middle_phy_012',
    name: '电功公式',
    category: '物理',
    subCategory: '电学',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'W = UIt = Pt',
    latex: 'W = UIt = Pt',
    variables: [
      { name: 'W', description: '电功', unit: 'J (焦耳) 或 kW·h (千瓦时)' },
      { name: 'U', description: '电压', unit: 'V (伏特)' },
      { name: 'I', description: '电流', unit: 'A (安培)' },
      { name: 't', description: '时间', unit: 's (秒)' },
      { name: 'P', description: '电功率', unit: 'W (瓦特)' }
    ],
    conditions: 't > 0',
    notes: '电功等于电压乘以电流乘以时间，或等于电功率乘以时间',
    derivation: '电功定义',
    related: ['middle_phy_011', 'middle_phy_013'],
    calculator: {
      inputs: ['U', 'I', 't'],
      output: 'W',
      formula: (U, I, t) => U * I * t
    }
  },
  {
    id: 'middle_phy_013',
    name: '电功率公式',
    category: '物理',
    subCategory: '电学',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'P = UI = I²R = U²/R',
    latex: 'P = UI = I^2R = \\frac{U^2}{R}',
    variables: [
      { name: 'P', description: '电功率', unit: 'W (瓦特)' },
      { name: 'U', description: '电压', unit: 'V (伏特)' },
      { name: 'I', description: '电流', unit: 'A (安培)' },
      { name: 'R', description: '电阻', unit: 'Ω (欧姆)' }
    ],
    conditions: 'R > 0',
    notes: '电功率等于电压乘以电流，或等于电流的平方乘以电阻，或等于电压的平方除以电阻',
    derivation: '由电功公式和欧姆定律推导',
    related: ['middle_phy_011', 'middle_phy_012'],
    calculator: {
      inputs: ['U', 'I'],
      output: 'P',
      formula: (U, I) => U * I
    }
  },
  {
    id: 'middle_phy_014',
    name: '串联电路总电阻',
    category: '物理',
    subCategory: '电学',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'R = R₁ + R₂ + ... + Rₙ',
    latex: 'R = R_1 + R_2 + \\cdots + R_n',
    variables: [
      { name: 'R', description: '总电阻', unit: 'Ω (欧姆)' },
      { name: 'R₁, R₂, ..., Rₙ', description: '各分电阻', unit: 'Ω (欧姆)' }
    ],
    conditions: '',
    notes: '串联电路的总电阻等于各分电阻之和',
    derivation: '由欧姆定律和串联电路特点推导',
    related: ['middle_phy_011', 'middle_phy_015'],
    calculator: {
      inputs: ['resistors'],
      output: 'R',
      formula: (resistors) => resistors.reduce((a, b) => a + b, 0)
    }
  },
  {
    id: 'middle_phy_015',
    name: '并联电路总电阻',
    category: '物理',
    subCategory: '电学',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '1/R = 1/R₁ + 1/R₂ + ... + 1/Rₙ',
    latex: '\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots + \\frac{1}{R_n}',
    variables: [
      { name: 'R', description: '总电阻', unit: 'Ω (欧姆)' },
      { name: 'R₁, R₂, ..., Rₙ', description: '各分电阻', unit: 'Ω (欧姆)' }
    ],
    conditions: '所有分电阻 > 0',
    notes: '并联电路总电阻的倒数等于各分电阻倒数之和',
    derivation: '由欧姆定律和并联电路特点推导',
    related: ['middle_phy_011', 'middle_phy_014'],
    calculator: {
      inputs: ['resistors'],
      output: 'R',
      formula: (resistors) => {
        const sum = resistors.reduce((a, b) => a + 1 / b, 0);
        return 1 / sum;
      }
    }
  },
  // 初中化学基础公式
  {
    id: 'middle_chem_001',
    name: '质量守恒定律',
    category: '化学',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '反应前各物质质量总和 = 反应后各物质质量总和',
    latex: '\\sum m_{\\text{反应前}} = \\sum m_{\\text{反应后}}',
    variables: [
      { name: 'm', description: '物质质量', unit: 'g (克)' }
    ],
    conditions: '化学反应',
    notes: '在化学反应中，参加反应的各物质的质量总和等于反应后生成的各物质的质量总和',
    derivation: '质量守恒定律',
    related: ['middle_chem_002'],
    calculator: {
      inputs: ['m_reactants'],
      output: 'm_products',
      formula: (m_reactants) => {
        const sum = Array.isArray(m_reactants) ? m_reactants.reduce((a, b) => a + b, 0) : m_reactants;
        return sum;
      }
    }
  },
  {
    id: 'middle_chem_002',
    name: '相对分子质量',
    category: '化学',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'Mr = 各原子相对原子质量之和',
    latex: 'M_r = \\sum M_{\\text{原子}}',
    variables: [
      { name: 'Mr', description: '相对分子质量', unit: '' },
      { name: 'M原子', description: '相对原子质量', unit: '' }
    ],
    conditions: '',
    notes: '相对分子质量等于组成分子的各原子的相对原子质量之和',
    derivation: '相对分子质量定义',
    related: ['middle_chem_003'],
    calculator: {
      inputs: ['atomicMasses'],
      output: 'Mr',
      formula: (atomicMasses) => {
        return Array.isArray(atomicMasses) ? atomicMasses.reduce((a, b) => a + b, 0) : atomicMasses;
      }
    }
  },
  {
    id: 'middle_chem_003',
    name: '质量分数',
    category: '化学',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'ω = (m质/m液) × 100%',
    latex: '\\omega = \\frac{m_{\\text{质}}}{m_{\\text{液}}} \\times 100\\%',
    variables: [
      { name: 'ω', description: '质量分数', unit: '% (百分比)' },
      { name: 'm质', description: '溶质质量', unit: 'g (克)' },
      { name: 'm液', description: '溶液质量', unit: 'g (克)' }
    ],
    conditions: 'm液 > 0',
    notes: '溶质的质量分数等于溶质质量除以溶液质量再乘以100%',
    derivation: '质量分数定义',
    related: ['high_chem_001'],
    calculator: {
      inputs: ['m_solute', 'm_solution'],
      output: 'omega',
      formula: (m_solute, m_solution) => (m_solute / m_solution) * 100
    }
  },
  {
    id: 'middle_chem_005',
    name: '溶质质量',
    category: '化学',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'm质 = m液 × ω',
    latex: 'm_{\\text{质}} = m_{\\text{液}} \\times \\omega',
    variables: [
      { name: 'm质', description: '溶质质量', unit: 'g (克)' },
      { name: 'm液', description: '溶液质量', unit: 'g (克)' },
      { name: 'ω', description: '质量分数', unit: '% (百分比)' }
    ],
    conditions: '',
    notes: '溶质质量等于溶液质量乘以质量分数',
    derivation: '由质量分数公式推导',
    related: ['middle_chem_003'],
    calculator: {
      inputs: ['m_solution', 'omega'],
      output: 'm_solute',
      formula: (m_solution, omega) => m_solution * (omega / 100)
    }
  },
  {
    id: 'middle_chem_006',
    name: '溶液质量',
    category: '化学',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: 'm液 = m质 + m剂',
    latex: 'm_{\\text{液}} = m_{\\text{质}} + m_{\\text{剂}}',
    variables: [
      { name: 'm液', description: '溶液质量', unit: 'g (克)' },
      { name: 'm质', description: '溶质质量', unit: 'g (克)' },
      { name: 'm剂', description: '溶剂质量', unit: 'g (克)' }
    ],
    conditions: '',
    notes: '溶液质量等于溶质质量加上溶剂质量',
    derivation: '溶液定义',
    related: ['middle_chem_003', 'middle_chem_005'],
    calculator: {
      inputs: ['m_solute', 'm_solvent'],
      output: 'm_solution',
      formula: (m_solute, m_solvent) => m_solute + m_solvent
    }
  },
  {
    id: 'middle_chem_007',
    name: '化学方程式配平',
    category: '化学',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式', '必背公式'],
    formula: '根据质量守恒定律配平',
    latex: '\\text{反应物} \\rightarrow \\text{生成物}',
    variables: [
      { name: '系数', description: '化学计量数', unit: '' }
    ],
    conditions: '化学反应',
    notes: '根据质量守恒定律，反应前后各元素的原子个数相等，确定化学计量数',
    derivation: '质量守恒定律',
    related: ['middle_chem_001'],
    calculator: {
      inputs: [],
      output: 'balanced',
      formula: () => '需要根据具体反应配平'
    }
  },
  {
    id: 'middle_chem_008',
    name: '原子个数比',
    category: '化学',
    subCategory: '基础',
    grade: '初中',
    tags: ['常用公式'],
    formula: '原子个数比 = 化学式中各元素右下角数字之比',
    latex: '\\text{原子个数比} = \\text{化学式下标比}',
    variables: [
      { name: 'n', description: '原子个数', unit: '' }
    ],
    conditions: '',
    notes: '化合物中各元素的原子个数比等于化学式中各元素右下角数字之比',
    derivation: '化学式定义',
    related: ['middle_chem_002'],
    calculator: {
      inputs: ['formula'],
      output: 'ratio',
      formula: (formula) => '需要解析化学式'
    }
  },
  // 高中函数公式
  {
    id: 'high_func_001',
    name: '指数函数',
    category: '数学',
    subCategory: '函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'y = aˣ (a > 0, a ≠ 1)',
    latex: 'y = a^x \\quad (a > 0, a \\neq 1)',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'x', description: '指数', unit: '' },
      { name: 'y', description: '函数值', unit: '' }
    ],
    conditions: 'a > 0 且 a ≠ 1',
    notes: '当 a > 1 时，函数单调递增；当 0 < a < 1 时，函数单调递减',
    derivation: '指数函数定义',
    related: ['high_func_002'],
    calculator: {
      inputs: ['a', 'x'],
      output: 'y',
      formula: (a, x) => Math.pow(a, x)
    }
  },
  {
    id: 'high_func_002',
    name: '对数函数',
    category: '数学',
    subCategory: '函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'y = logₐx (a > 0, a ≠ 1, x > 0)',
    latex: 'y = \\log_a x \\quad (a > 0, a \\neq 1, x > 0)',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'x', description: '真数', unit: '' },
      { name: 'y', description: '函数值', unit: '' }
    ],
    conditions: 'a > 0 且 a ≠ 1, x > 0',
    notes: '对数函数是指数函数的反函数',
    derivation: '对数函数定义',
    related: ['high_func_001', 'high_func_003'],
    calculator: {
      inputs: ['a', 'x'],
      output: 'y',
      formula: (a, x) => Math.log(x) / Math.log(a)
    }
  },
  {
    id: 'high_func_003',
    name: '对数运算法则',
    category: '数学',
    subCategory: '函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'logₐ(MN) = logₐM + logₐN, logₐ(M/N) = logₐM - logₐN, logₐMⁿ = nlogₐM',
    latex: '\\log_a(MN) = \\log_a M + \\log_a N, \\quad \\log_a(M/N) = \\log_a M - \\log_a N, \\quad \\log_a M^n = n\\log_a M',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'M, N', description: '真数', unit: '' },
      { name: 'n', description: '指数', unit: '' }
    ],
    conditions: 'a > 0, a ≠ 1, M > 0, N > 0',
    notes: '对数的乘法、除法和幂运算法则',
    derivation: '由对数定义推导',
    related: ['high_func_002'],
    calculator: {
      inputs: ['operation', 'a', 'M', 'N', 'n'],
      output: 'result',
      formula: (operation, a, M, N, n) => {
        const log = (x) => Math.log(x) / Math.log(a);
        if (operation === 'multiply') return log(M) + log(N);
        if (operation === 'divide') return log(M) - log(N);
        if (operation === 'power') return n * log(M);
        return null;
      }
    }
  },
  {
    id: 'high_func_004',
    name: '换底公式',
    category: '数学',
    subCategory: '函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'logₐb = logᵢb / logᵢa',
    latex: '\\log_a b = \\frac{\\log_c b}{\\log_c a}',
    variables: [
      { name: 'a, b', description: '底数和真数', unit: '' },
      { name: 'c', description: '新底数', unit: '' }
    ],
    conditions: 'a > 0, a ≠ 1, b > 0, c > 0, c ≠ 1',
    notes: '可以将任意底数的对数转换为以其他数为底的对数',
    derivation: '由对数定义推导',
    related: ['high_func_002'],
    calculator: {
      inputs: ['a', 'b', 'c'],
      output: 'result',
      formula: (a, b, c) => Math.log(b) / Math.log(c) / (Math.log(a) / Math.log(c))
    }
  },
  {
    id: 'high_func_005',
    name: '幂函数',
    category: '数学',
    subCategory: '函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'y = xⁿ',
    latex: 'y = x^n',
    variables: [
      { name: 'x', description: '底数', unit: '' },
      { name: 'n', description: '指数', unit: '' },
      { name: 'y', description: '函数值', unit: '' }
    ],
    conditions: '',
    notes: '当 n > 0 时，函数过原点且单调递增；当 n < 0 时，函数在第一象限单调递减',
    derivation: '幂函数定义',
    related: ['high_func_001'],
    calculator: {
      inputs: ['x', 'n'],
      output: 'y',
      formula: (x, n) => Math.pow(x, n)
    }
  },
  // 三角函数公式
  {
    id: 'high_trig_001',
    name: '正弦函数',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'y = sin x',
    latex: 'y = \\sin x',
    variables: [
      { name: 'x', description: '角度（弧度）', unit: 'rad' },
      { name: 'y', description: '函数值', unit: '' }
    ],
    conditions: '',
    notes: '周期为 2π，值域为 [-1, 1]',
    derivation: '三角函数定义',
    related: ['high_trig_002', 'high_trig_003'],
    calculator: {
      inputs: ['x'],
      output: 'y',
      formula: (x) => Math.sin(x)
    }
  },
  {
    id: 'high_trig_002',
    name: '余弦函数',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'y = cos x',
    latex: 'y = \\cos x',
    variables: [
      { name: 'x', description: '角度（弧度）', unit: 'rad' },
      { name: 'y', description: '函数值', unit: '' }
    ],
    conditions: '',
    notes: '周期为 2π，值域为 [-1, 1]',
    derivation: '三角函数定义',
    related: ['high_trig_001', 'high_trig_003'],
    calculator: {
      inputs: ['x'],
      output: 'y',
      formula: (x) => Math.cos(x)
    }
  },
  {
    id: 'high_trig_003',
    name: '正切函数',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'y = tan x = sin x / cos x',
    latex: 'y = \\tan x = \\frac{\\sin x}{\\cos x}',
    variables: [
      { name: 'x', description: '角度（弧度）', unit: 'rad' },
      { name: 'y', description: '函数值', unit: '' }
    ],
    conditions: 'x ≠ π/2 + kπ (k为整数)',
    notes: '周期为 π，值域为 (-∞, +∞)',
    derivation: '由正弦和余弦函数定义',
    related: ['high_trig_001', 'high_trig_002'],
    calculator: {
      inputs: ['x'],
      output: 'y',
      formula: (x) => Math.tan(x)
    }
  },
  {
    id: 'high_trig_004',
    name: '同角三角函数基本关系',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'sin²α + cos²α = 1, tan α = sin α / cos α',
    latex: '\\sin^2 \\alpha + \\cos^2 \\alpha = 1, \\quad \\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}',
    variables: [
      { name: 'α', description: '角度', unit: '度或弧度' }
    ],
    conditions: '',
    notes: '平方关系：sin²α + cos²α = 1；商数关系：tan α = sin α / cos α',
    derivation: '由单位圆和三角函数定义推导',
    related: ['high_trig_001', 'high_trig_002', 'high_trig_003'],
    calculator: {
      inputs: ['alpha'],
      output: 'check',
      formula: (alpha) => {
        const s = Math.sin(alpha);
        const c = Math.cos(alpha);
        return Math.abs(s * s + c * c - 1) < 1e-10;
      }
    }
  },
  {
    id: 'high_trig_005',
    name: '两角和公式',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'sin(α ± β) = sin α cos β ± cos α sin β, cos(α ± β) = cos α cos β ∓ sin α sin β',
    latex: '\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta, \\quad \\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta',
    variables: [
      { name: 'α, β', description: '角度', unit: '度或弧度' }
    ],
    conditions: '',
    notes: '两角和与差的正弦、余弦公式',
    derivation: '由单位圆和向量方法推导',
    related: ['high_trig_006', 'high_trig_007'],
    calculator: {
      inputs: ['alpha', 'beta', 'operation'],
      output: 'result',
      formula: (alpha, beta, operation) => {
        const sign = operation === '+' ? 1 : -1;
        const sinAB = Math.sin(alpha) * Math.cos(beta) + sign * Math.cos(alpha) * Math.sin(beta);
        const cosAB = Math.cos(alpha) * Math.cos(beta) - sign * Math.sin(alpha) * Math.sin(beta);
        return { sin: sinAB, cos: cosAB };
      }
    }
  },
  {
    id: 'high_trig_006',
    name: '两角差公式',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'tan(α ± β) = (tan α ± tan β) / (1 ∓ tan α tan β)',
    latex: '\\tan(\\alpha \\pm \\beta) = \\frac{\\tan \\alpha \\pm \\tan \\beta}{1 \\mp \\tan \\alpha \\tan \\beta}',
    variables: [
      { name: 'α, β', description: '角度', unit: '度或弧度' }
    ],
    conditions: '1 ∓ tan α tan β ≠ 0',
    notes: '两角和与差的正切公式',
    derivation: '由两角和公式和正切定义推导',
    related: ['high_trig_005', 'high_trig_003'],
    calculator: {
      inputs: ['alpha', 'beta', 'operation'],
      output: 'result',
      formula: (alpha, beta, operation) => {
        const sign = operation === '+' ? 1 : -1;
        const tanA = Math.tan(alpha);
        const tanB = Math.tan(beta);
        return (tanA + sign * tanB) / (1 - sign * tanA * tanB);
      }
    }
  },
  {
    id: 'high_trig_007',
    name: '二倍角公式',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'sin 2α = 2 sin α cos α, cos 2α = cos²α - sin²α = 2cos²α - 1 = 1 - 2sin²α, tan 2α = 2tan α / (1 - tan²α)',
    latex: '\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha, \\quad \\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha, \\quad \\tan 2\\alpha = \\frac{2\\tan \\alpha}{1 - \\tan^2 \\alpha}',
    variables: [
      { name: 'α', description: '角度', unit: '度或弧度' }
    ],
    conditions: '1 - tan²α ≠ 0',
    notes: '二倍角的正弦、余弦、正切公式',
    derivation: '由两角和公式推导（令 β = α）',
    related: ['high_trig_005'],
    calculator: {
      inputs: ['alpha'],
      output: 'result',
      formula: (alpha) => {
        const s = Math.sin(alpha);
        const c = Math.cos(alpha);
        const t = Math.tan(alpha);
        return {
          sin2a: 2 * s * c,
          cos2a: c * c - s * s,
          tan2a: (2 * t) / (1 - t * t)
        };
      }
    }
  },
  {
    id: 'high_trig_008',
    name: '半角公式',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'sin²(α/2) = (1 - cos α) / 2, cos²(α/2) = (1 + cos α) / 2, tan(α/2) = sin α / (1 + cos α)',
    latex: '\\sin^2 \\frac{\\alpha}{2} = \\frac{1 - \\cos \\alpha}{2}, \\quad \\cos^2 \\frac{\\alpha}{2} = \\frac{1 + \\cos \\alpha}{2}, \\quad \\tan \\frac{\\alpha}{2} = \\frac{\\sin \\alpha}{1 + \\cos \\alpha}',
    variables: [
      { name: 'α', description: '角度', unit: '度或弧度' }
    ],
    conditions: '1 + cos α ≠ 0',
    notes: '半角的正弦、余弦、正切公式',
    derivation: '由二倍角公式推导',
    related: ['high_trig_007'],
    calculator: {
      inputs: ['alpha'],
      output: 'result',
      formula: (alpha) => {
        const c = Math.cos(alpha);
        const s = Math.sin(alpha);
        return {
          sin2Half: (1 - c) / 2,
          cos2Half: (1 + c) / 2,
          tanHalf: s / (1 + c)
        };
      }
    }
  },
  {
    id: 'high_trig_009',
    name: '诱导公式',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'sin(π/2 ± α) = cos α, cos(π/2 ± α) = ∓ sin α, sin(π ± α) = ∓ sin α, cos(π ± α) = -cos α',
    latex: '\\sin(\\frac{\\pi}{2} \\pm \\alpha) = \\cos \\alpha, \\quad \\cos(\\frac{\\pi}{2} \\pm \\alpha) = \\mp \\sin \\alpha, \\quad \\sin(\\pi \\pm \\alpha) = \\mp \\sin \\alpha, \\quad \\cos(\\pi \\pm \\alpha) = -\\cos \\alpha',
    variables: [
      { name: 'α', description: '角度', unit: '度或弧度' }
    ],
    conditions: '',
    notes: '利用诱导公式可以将任意角的三角函数转化为锐角三角函数',
    derivation: '由单位圆和三角函数定义推导',
    related: ['high_trig_001', 'high_trig_002'],
    calculator: {
      inputs: ['alpha', 'formula'],
      output: 'result',
      formula: (alpha, formula) => {
        const s = Math.sin(alpha);
        const c = Math.cos(alpha);
        if (formula === 'sin_pi2_plus') return c;
        if (formula === 'sin_pi2_minus') return c;
        if (formula === 'cos_pi2_plus') return -s;
        if (formula === 'cos_pi2_minus') return s;
        if (formula === 'sin_pi_plus') return -s;
        if (formula === 'sin_pi_minus') return s;
        if (formula === 'cos_pi_plus') return -c;
        if (formula === 'cos_pi_minus') return -c;
        return null;
      }
    }
  },
  {
    id: 'high_trig_010',
    name: '正弦定理',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'a / sin A = b / sin B = c / sin C = 2R',
    latex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
    variables: [
      { name: 'a, b, c', description: '三角形的三边', unit: '长度单位' },
      { name: 'A, B, C', description: '三角形的三个角', unit: '度或弧度' },
      { name: 'R', description: '外接圆半径', unit: '长度单位' }
    ],
    conditions: '适用于任意三角形',
    notes: '三角形的各边与其对角的正弦值之比相等，且等于外接圆直径',
    derivation: '由三角形面积公式和圆的性质推导',
    related: ['high_trig_011'],
    calculator: {
      inputs: ['a', 'A'],
      output: 'R',
      formula: (a, A) => a / (2 * Math.sin(A))
    }
  },
  {
    id: 'high_trig_011',
    name: '余弦定理',
    category: '数学',
    subCategory: '三角函数',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'a² = b² + c² - 2bc cos A',
    latex: 'a^2 = b^2 + c^2 - 2bc\\cos A',
    variables: [
      { name: 'a, b, c', description: '三角形的三边', unit: '长度单位' },
      { name: 'A', description: '边a的对角', unit: '度或弧度' }
    ],
    conditions: '适用于任意三角形',
    notes: '勾股定理的推广，当 A = 90° 时，cos A = 0，即勾股定理',
    derivation: '由向量方法或坐标法推导',
    related: ['math_001', 'high_trig_010'],
    calculator: {
      inputs: ['b', 'c', 'A'],
      output: 'a',
      formula: (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(A))
    }
  },
  // 立体几何公式
  {
    id: 'high_geo_001',
    name: '棱柱体积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'V = Sh',
    latex: 'V = Sh',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'S', description: '底面积', unit: '面积单位' },
      { name: 'h', description: '高', unit: '长度单位' }
    ],
    conditions: 'S > 0, h > 0',
    notes: '棱柱体积等于底面积乘以高',
    derivation: '体积定义',
    related: ['high_geo_002'],
    calculator: {
      inputs: ['S', 'h'],
      output: 'V',
      formula: (S, h) => S * h
    }
  },
  {
    id: 'high_geo_002',
    name: '棱锥体积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'V = (1/3)Sh',
    latex: 'V = \\frac{1}{3}Sh',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'S', description: '底面积', unit: '面积单位' },
      { name: 'h', description: '高', unit: '长度单位' }
    ],
    conditions: 'S > 0, h > 0',
    notes: '棱锥体积等于同底等高的棱柱体积的三分之一',
    derivation: '通过积分或实验验证',
    related: ['high_geo_001', 'middle_geo_009'],
    calculator: {
      inputs: ['S', 'h'],
      output: 'V',
      formula: (S, h) => (1 / 3) * S * h
    }
  },
  {
    id: 'high_geo_003',
    name: '正四面体体积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式'],
    formula: 'V = (√2/12)a³',
    latex: 'V = \\frac{\\sqrt{2}}{12}a^3',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'a', description: '棱长', unit: '长度单位' }
    ],
    conditions: 'a > 0',
    notes: '正四面体（所有棱长相等）的体积公式',
    derivation: '由棱锥体积公式和正四面体性质推导',
    related: ['high_geo_002'],
    calculator: {
      inputs: ['a'],
      output: 'V',
      formula: (a) => (Math.sqrt(2) / 12) * a * a * a
    }
  },
  {
    id: 'high_geo_004',
    name: '正六面体（正方体）体积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'V = a³',
    latex: 'V = a^3',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'a', description: '棱长', unit: '长度单位' }
    ],
    conditions: 'a > 0',
    notes: '正方体体积等于棱长的立方',
    derivation: '由棱柱体积公式推导',
    related: ['high_geo_001', 'primary_geo_010'],
    calculator: {
      inputs: ['a'],
      output: 'V',
      formula: (a) => a * a * a
    }
  },
  {
    id: 'high_geo_005',
    name: '正八面体体积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式'],
    formula: 'V = (√2/3)a³',
    latex: 'V = \\frac{\\sqrt{2}}{3}a^3',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'a', description: '棱长', unit: '长度单位' }
    ],
    conditions: 'a > 0',
    notes: '正八面体的体积公式',
    derivation: '由两个正四棱锥组合推导',
    related: ['high_geo_002'],
    calculator: {
      inputs: ['a'],
      output: 'V',
      formula: (a) => (Math.sqrt(2) / 3) * a * a * a
    }
  },
  {
    id: 'high_geo_008',
    name: '圆台体积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'V = (1/3)πh(r₁² + r₁r₂ + r₂²)',
    latex: 'V = \\frac{1}{3}\\pi h(r_1^2 + r_1r_2 + r_2^2)',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'h', description: '高', unit: '长度单位' },
      { name: 'r₁', description: '上底半径', unit: '长度单位' },
      { name: 'r₂', description: '下底半径', unit: '长度单位' }
    ],
    conditions: 'h > 0, r₁ > 0, r₂ > 0',
    notes: '圆台体积公式，当 r₁ = r₂ 时，即为圆柱体积',
    derivation: '由圆锥体积公式推导',
    related: ['middle_geo_007', 'middle_geo_009'],
    calculator: {
      inputs: ['h', 'r1', 'r2'],
      output: 'V',
      formula: (h, r1, r2) => (1 / 3) * Math.PI * h * (r1 * r1 + r1 * r2 + r2 * r2)
    }
  },
  {
    id: 'high_geo_009',
    name: '圆台侧面积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'S = πl(r₁ + r₂)',
    latex: 'S = \\pi l(r_1 + r_2)',
    variables: [
      { name: 'S', description: '侧面积', unit: '面积单位' },
      { name: 'l', description: '母线长', unit: '长度单位' },
      { name: 'r₁', description: '上底半径', unit: '长度单位' },
      { name: 'r₂', description: '下底半径', unit: '长度单位' }
    ],
    conditions: 'l > 0, r₁ > 0, r₂ > 0',
    notes: '圆台侧面积等于π乘以母线长乘以两底半径之和',
    derivation: '由圆台展开图推导',
    related: ['high_geo_008', 'middle_geo_010'],
    calculator: {
      inputs: ['l', 'r1', 'r2'],
      output: 'S',
      formula: (l, r1, r2) => Math.PI * l * (r1 + r2)
    }
  },
  {
    id: 'high_geo_010',
    name: '球冠体积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式'],
    formula: 'V = (1/3)πh²(3r - h)',
    latex: 'V = \\frac{1}{3}\\pi h^2(3r - h)',
    variables: [
      { name: 'V', description: '体积', unit: '体积单位' },
      { name: 'h', description: '球冠高', unit: '长度单位' },
      { name: 'r', description: '球半径', unit: '长度单位' }
    ],
    conditions: '0 < h ≤ 2r',
    notes: '球冠（球被平面截去一部分）的体积公式',
    derivation: '通过积分推导',
    related: ['middle_geo_011'],
    calculator: {
      inputs: ['h', 'r'],
      output: 'V',
      formula: (h, r) => (1 / 3) * Math.PI * h * h * (3 * r - h)
    }
  },
  {
    id: 'high_geo_011',
    name: '球冠面积',
    category: '数学',
    subCategory: '立体几何',
    grade: '高中',
    tags: ['常用公式'],
    formula: 'S = 2πrh',
    latex: 'S = 2\\pi rh',
    variables: [
      { name: 'S', description: '面积', unit: '面积单位' },
      { name: 'r', description: '球半径', unit: '长度单位' },
      { name: 'h', description: '球冠高', unit: '长度单位' }
    ],
    conditions: '0 < h ≤ 2r',
    notes: '球冠的表面积公式',
    derivation: '通过积分推导',
    related: ['high_geo_010', 'middle_geo_012'],
    calculator: {
      inputs: ['r', 'h'],
      output: 'S',
      formula: (r, h) => 2 * Math.PI * r * h
    }
  },
  // 高中物理公式
  {
    id: 'high_phy_001',
    name: '匀变速直线运动速度公式',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'v = v₀ + at',
    latex: 'v = v_0 + at',
    variables: [
      { name: 'v', description: '末速度', unit: 'm/s' },
      { name: 'v₀', description: '初速度', unit: 'm/s' },
      { name: 'a', description: '加速度', unit: 'm/s²' },
      { name: 't', description: '时间', unit: 's' }
    ],
    conditions: '匀变速直线运动',
    notes: '速度与时间的关系式',
    derivation: '由加速度定义推导',
    related: ['high_phy_002', 'high_phy_003'],
    calculator: {
      inputs: ['v0', 'a', 't'],
      output: 'v',
      formula: (v0, a, t) => v0 + a * t
    }
  },
  {
    id: 'high_phy_002',
    name: '匀变速直线运动位移公式',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 's = v₀t + (1/2)at²',
    latex: 's = v_0t + \\frac{1}{2}at^2',
    variables: [
      { name: 's', description: '位移', unit: 'm' },
      { name: 'v₀', description: '初速度', unit: 'm/s' },
      { name: 'a', description: '加速度', unit: 'm/s²' },
      { name: 't', description: '时间', unit: 's' }
    ],
    conditions: '匀变速直线运动',
    notes: '位移与时间的关系式',
    derivation: '由速度-时间图像的面积推导',
    related: ['high_phy_001', 'high_phy_003'],
    calculator: {
      inputs: ['v0', 'a', 't'],
      output: 's',
      formula: (v0, a, t) => v0 * t + 0.5 * a * t * t
    }
  },
  {
    id: 'high_phy_003',
    name: '匀变速直线运动速度位移关系',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'v² = v₀² + 2as',
    latex: 'v^2 = v_0^2 + 2as',
    variables: [
      { name: 'v', description: '末速度', unit: 'm/s' },
      { name: 'v₀', description: '初速度', unit: 'm/s' },
      { name: 'a', description: '加速度', unit: 'm/s²' },
      { name: 's', description: '位移', unit: 'm' }
    ],
    conditions: '匀变速直线运动',
    notes: '速度与位移的关系式，不涉及时间',
    derivation: '由前两个公式消去时间t推导',
    related: ['high_phy_001', 'high_phy_002'],
    calculator: {
      inputs: ['v0', 'a', 's'],
      output: 'v',
      formula: (v0, a, s) => Math.sqrt(v0 * v0 + 2 * a * s)
    }
  },
  {
    id: 'high_phy_004',
    name: '自由落体运动',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'v = gt, h = (1/2)gt², v² = 2gh',
    latex: 'v = gt, \\quad h = \\frac{1}{2}gt^2, \\quad v^2 = 2gh',
    variables: [
      { name: 'v', description: '速度', unit: 'm/s' },
      { name: 'h', description: '下落高度', unit: 'm' },
      { name: 'g', description: '重力加速度', unit: '9.8 m/s²' },
      { name: 't', description: '时间', unit: 's' }
    ],
    conditions: '初速度为零，只受重力作用',
    notes: '自由落体是初速度为零的匀加速直线运动',
    derivation: '由匀变速直线运动公式，令 v₀ = 0, a = g',
    related: ['high_phy_001', 'high_phy_002', 'high_phy_003'],
    calculator: {
      inputs: ['t'],
      output: 'v',
      formula: (t) => {
        const g = 9.8;
        return g * t;
      }
    }
  },
  {
    id: 'high_phy_005',
    name: '平抛运动',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'x = v₀t, y = (1/2)gt², vₓ = v₀, vᵧ = gt',
    latex: 'x = v_0t, \\quad y = \\frac{1}{2}gt^2, \\quad v_x = v_0, \\quad v_y = gt',
    variables: [
      { name: 'x', description: '水平位移', unit: 'm' },
      { name: 'y', description: '竖直位移', unit: 'm' },
      { name: 'v₀', description: '初速度', unit: 'm/s' },
      { name: 'vₓ', description: '水平速度', unit: 'm/s' },
      { name: 'vᵧ', description: '竖直速度', unit: 'm/s' },
      { name: 't', description: '时间', unit: 's' }
    ],
    conditions: '初速度水平，只受重力作用',
    notes: '平抛运动可以分解为水平方向的匀速直线运动和竖直方向的自由落体运动',
    derivation: '运动的合成与分解',
    related: ['high_phy_004'],
    calculator: {
      inputs: ['v0', 't'],
      output: 'result',
      formula: (v0, t) => {
        const g = 9.8;
        return {
          x: v0 * t,
          y: 0.5 * g * t * t,
          vx: v0,
          vy: g * t
        };
      }
    }
  },
  {
    id: 'high_phy_006',
    name: '向心力公式',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'F = mv²/r = mω²r = 4π²mr/T²',
    latex: 'F = \\frac{mv^2}{r} = m\\omega^2r = \\frac{4\\pi^2mr}{T^2}',
    variables: [
      { name: 'F', description: '向心力', unit: 'N' },
      { name: 'm', description: '质量', unit: 'kg' },
      { name: 'v', description: '线速度', unit: 'm/s' },
      { name: 'ω', description: '角速度', unit: 'rad/s' },
      { name: 'r', description: '半径', unit: 'm' },
      { name: 'T', description: '周期', unit: 's' }
    ],
    conditions: '匀速圆周运动',
    notes: '向心力指向圆心，提供物体做圆周运动所需的向心加速度',
    derivation: '由牛顿第二定律和圆周运动加速度推导',
    related: ['physics_001'],
    calculator: {
      inputs: ['m', 'v', 'r'],
      output: 'F',
      formula: (m, v, r) => m * v * v / r
    }
  },
  {
    id: 'high_phy_007',
    name: '万有引力提供向心力',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'GMm/r² = mv²/r = mω²r',
    latex: 'G\\frac{Mm}{r^2} = \\frac{mv^2}{r} = m\\omega^2r',
    variables: [
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' },
      { name: 'm', description: '环绕天体质量', unit: 'kg' },
      { name: 'r', description: '轨道半径', unit: 'm' },
      { name: 'v', description: '线速度', unit: 'm/s' },
      { name: 'ω', description: '角速度', unit: 'rad/s' }
    ],
    conditions: '天体做圆周运动',
    notes: '万有引力提供天体做圆周运动的向心力',
    derivation: '由万有引力定律和向心力公式推导',
    related: ['physics_003', 'high_phy_006'],
    calculator: {
      inputs: ['M', 'r'],
      output: 'v',
      formula: (M, r) => {
        const G = 6.67e-11;
        return Math.sqrt(G * M / r);
      }
    }
  },
  {
    id: 'high_phy_008',
    name: '开普勒第三定律',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'T²/r³ = 4π²/(GM) = 常数',
    latex: '\\frac{T^2}{r^3} = \\frac{4\\pi^2}{GM} = \\text{常数}',
    variables: [
      { name: 'T', description: '周期', unit: 's' },
      { name: 'r', description: '轨道半径', unit: 'm' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' }
    ],
    conditions: '椭圆轨道，M远大于m',
    notes: '行星公转周期的平方与轨道半长轴的立方成正比',
    derivation: '由万有引力定律和向心力公式推导',
    related: ['high_phy_007'],
    calculator: {
      inputs: ['r', 'M'],
      output: 'T',
      formula: (r, M) => {
        const G = 6.67e-11;
        return 2 * Math.PI * Math.sqrt(r * r * r / (G * M));
      }
    }
  },
  {
    id: 'high_phy_009',
    name: '动量定理',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'Ft = mv - mv₀ = Δp',
    latex: 'Ft = mv - mv_0 = \\Delta p',
    variables: [
      { name: 'F', description: '合外力', unit: 'N' },
      { name: 't', description: '作用时间', unit: 's' },
      { name: 'm', description: '质量', unit: 'kg' },
      { name: 'v', description: '末速度', unit: 'm/s' },
      { name: 'v₀', description: '初速度', unit: 'm/s' },
      { name: 'Δp', description: '动量变化量', unit: 'kg·m/s' }
    ],
    conditions: '',
    notes: '物体所受合外力的冲量等于物体动量的变化量',
    derivation: '由牛顿第二定律推导',
    related: ['physics_001', 'high_phy_010'],
    calculator: {
      inputs: ['m', 'v', 'v0'],
      output: 'deltaP',
      formula: (m, v, v0) => m * (v - v0)
    }
  },
  {
    id: 'high_phy_010',
    name: '动量守恒定律',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'm₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'',
    latex: 'm_1v_1 + m_2v_2 = m_1v_1\' + m_2v_2\'',
    variables: [
      { name: 'm₁, m₂', description: '两物体质量', unit: 'kg' },
      { name: 'v₁, v₂', description: '碰撞前速度', unit: 'm/s' },
      { name: 'v₁\', v₂\'', description: '碰撞后速度', unit: 'm/s' }
    ],
    conditions: '系统不受外力或合外力为零',
    notes: '系统总动量在碰撞前后保持不变',
    derivation: '由动量定理和牛顿第三定律推导',
    related: ['high_phy_009'],
    calculator: {
      inputs: ['m1', 'v1', 'm2', 'v2'],
      output: 'totalP',
      formula: (m1, v1, m2, v2) => m1 * v1 + m2 * v2
    }
  },
  {
    id: 'high_phy_011',
    name: '机械能守恒定律',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'Ek₁ + Ep₁ = Ek₂ + Ep₂',
    latex: 'E_{k1} + E_{p1} = E_{k2} + E_{p2}',
    variables: [
      { name: 'Ek', description: '动能', unit: 'J' },
      { name: 'Ep', description: '势能', unit: 'J' }
    ],
    conditions: '只有重力或弹力做功',
    notes: '在只有重力或弹力做功的情况下，物体的动能和势能相互转化，但总机械能保持不变',
    derivation: '由功能关系推导',
    related: ['physics_002', 'high_phy_012'],
    calculator: {
      inputs: ['Ek1', 'Ep1'],
      output: 'totalE',
      formula: (Ek1, Ep1) => Ek1 + Ep1
    }
  },
  {
    id: 'high_phy_012',
    name: '重力势能',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'Ep = mgh',
    latex: 'E_p = mgh',
    variables: [
      { name: 'Ep', description: '重力势能', unit: 'J' },
      { name: 'm', description: '质量', unit: 'kg' },
      { name: 'g', description: '重力加速度', unit: '9.8 m/s²' },
      { name: 'h', description: '高度', unit: 'm' }
    ],
    conditions: '以地面或某一水平面为零势能面',
    notes: '重力势能等于质量乘以重力加速度乘以高度',
    derivation: '由功的定义推导',
    related: ['high_phy_011', 'physics_002'],
    calculator: {
      inputs: ['m', 'h'],
      output: 'Ep',
      formula: (m, h) => {
        const g = 9.8;
        return m * g * h;
      }
    }
  },
  {
    id: 'high_phy_013',
    name: '弹性势能',
    category: '物理',
    subCategory: '力学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'Ep = (1/2)kx²',
    latex: 'E_p = \\frac{1}{2}kx^2',
    variables: [
      { name: 'Ep', description: '弹性势能', unit: 'J' },
      { name: 'k', description: '弹簧劲度系数', unit: 'N/m' },
      { name: 'x', description: '形变量', unit: 'm' }
    ],
    conditions: '在弹性限度内',
    notes: '弹性势能等于二分之一乘以劲度系数乘以形变量的平方',
    derivation: '由胡克定律和功的定义推导',
    related: ['high_phy_011'],
    calculator: {
      inputs: ['k', 'x'],
      output: 'Ep',
      formula: (k, x) => 0.5 * k * x * x
    }
  },
  {
    id: 'high_phy_014',
    name: '库仑定律',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'F = k(q₁q₂)/r²',
    latex: 'F = k\\frac{q_1q_2}{r^2}',
    variables: [
      { name: 'F', description: '静电力', unit: 'N' },
      { name: 'k', description: '静电力常量', unit: '9×10⁹ N·m²/C²' },
      { name: 'q₁, q₂', description: '电荷量', unit: 'C' },
      { name: 'r', description: '距离', unit: 'm' }
    ],
    conditions: '点电荷，真空或空气中',
    notes: '真空中两个点电荷之间的相互作用力与它们的电荷量的乘积成正比，与它们之间距离的平方成反比',
    derivation: '库仑定律',
    related: ['high_phy_015'],
    calculator: {
      inputs: ['q1', 'q2', 'r'],
      output: 'F',
      formula: (q1, q2, r) => {
        const k = 9e9;
        return k * q1 * q2 / (r * r);
      }
    }
  },
  {
    id: 'high_phy_015',
    name: '电场强度',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'E = F/q = kQ/r²',
    latex: 'E = \\frac{F}{q} = k\\frac{Q}{r^2}',
    variables: [
      { name: 'E', description: '电场强度', unit: 'N/C 或 V/m' },
      { name: 'F', description: '电场力', unit: 'N' },
      { name: 'q', description: '试探电荷', unit: 'C' },
      { name: 'Q', description: '场源电荷', unit: 'C' },
      { name: 'r', description: '距离', unit: 'm' }
    ],
    conditions: '点电荷电场',
    notes: '电场强度等于单位正电荷所受的电场力',
    derivation: '由库仑定律推导',
    related: ['high_phy_014'],
    calculator: {
      inputs: ['Q', 'r'],
      output: 'E',
      formula: (Q, r) => {
        const k = 9e9;
        return k * Q / (r * r);
      }
    }
  },
  {
    id: 'high_phy_016',
    name: '电势能',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'Ep = qφ',
    latex: 'E_p = q\\varphi',
    variables: [
      { name: 'Ep', description: '电势能', unit: 'J' },
      { name: 'q', description: '电荷量', unit: 'C' },
      { name: 'φ', description: '电势', unit: 'V' }
    ],
    conditions: '',
    notes: '电荷在电场中某点的电势能等于电荷量乘以该点的电势',
    derivation: '由功的定义和电势定义推导',
    related: ['high_phy_015'],
    calculator: {
      inputs: ['q', 'phi'],
      output: 'Ep',
      formula: (q, phi) => q * phi
    }
  },
  {
    id: 'high_phy_017',
    name: '电容公式',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'C = Q/U = εS/(4πkd)',
    latex: 'C = \\frac{Q}{U} = \\frac{\\varepsilon S}{4\\pi kd}',
    variables: [
      { name: 'C', description: '电容', unit: 'F' },
      { name: 'Q', description: '电荷量', unit: 'C' },
      { name: 'U', description: '电压', unit: 'V' },
      { name: 'ε', description: '介电常数', unit: '' },
      { name: 'S', description: '极板面积', unit: 'm²' },
      { name: 'd', description: '极板间距', unit: 'm' }
    ],
    conditions: '平行板电容器',
    notes: '电容等于电荷量与电压的比值，对于平行板电容器，还与极板面积和间距有关',
    derivation: '由电容定义和电场强度公式推导',
    related: ['high_phy_015'],
    calculator: {
      inputs: ['Q', 'U'],
      output: 'C',
      formula: (Q, U) => Q / U
    }
  },
  {
    id: 'high_phy_018',
    name: '磁感应强度',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'B = F/(IL)',
    latex: 'B = \\frac{F}{IL}',
    variables: [
      { name: 'B', description: '磁感应强度', unit: 'T (特斯拉)' },
      { name: 'F', description: '安培力', unit: 'N' },
      { name: 'I', description: '电流', unit: 'A' },
      { name: 'L', description: '导线长度', unit: 'm' }
    ],
    conditions: '导线与磁场垂直',
    notes: '磁感应强度等于单位长度、单位电流的导线所受的安培力',
    derivation: '磁感应强度定义',
    related: ['high_phy_019'],
    calculator: {
      inputs: ['F', 'I', 'L'],
      output: 'B',
      formula: (F, I, L) => F / (I * L)
    }
  },
  {
    id: 'high_phy_019',
    name: '安培力公式',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'F = BIL sin θ',
    latex: 'F = BIL\\sin\\theta',
    variables: [
      { name: 'F', description: '安培力', unit: 'N' },
      { name: 'B', description: '磁感应强度', unit: 'T' },
      { name: 'I', description: '电流', unit: 'A' },
      { name: 'L', description: '导线长度', unit: 'm' },
      { name: 'θ', description: '电流与磁场方向的夹角', unit: '度或弧度' }
    ],
    conditions: '',
    notes: '当导线与磁场垂直时，sin θ = 1，F = BIL',
    derivation: '由磁感应强度定义推导',
    related: ['high_phy_018'],
    calculator: {
      inputs: ['B', 'I', 'L', 'theta'],
      output: 'F',
      formula: (B, I, L, theta) => B * I * L * Math.sin(theta)
    }
  },
  {
    id: 'high_phy_020',
    name: '洛伦兹力',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'F = qvB sin θ',
    latex: 'F = qvB\\sin\\theta',
    variables: [
      { name: 'F', description: '洛伦兹力', unit: 'N' },
      { name: 'q', description: '电荷量', unit: 'C' },
      { name: 'v', description: '速度', unit: 'm/s' },
      { name: 'B', description: '磁感应强度', unit: 'T' },
      { name: 'θ', description: '速度与磁场方向的夹角', unit: '度或弧度' }
    ],
    conditions: '',
    notes: '运动电荷在磁场中受到的力，方向由左手定则确定',
    derivation: '由安培力公式推导',
    related: ['high_phy_019'],
    calculator: {
      inputs: ['q', 'v', 'B', 'theta'],
      output: 'F',
      formula: (q, v, B, theta) => q * v * B * Math.sin(theta)
    }
  },
  {
    id: 'high_phy_021',
    name: '法拉第电磁感应定律',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'E = -nΔΦ/Δt',
    latex: 'E = -n\\frac{\\Delta\\Phi}{\\Delta t}',
    variables: [
      { name: 'E', description: '感应电动势', unit: 'V' },
      { name: 'n', description: '线圈匝数', unit: '' },
      { name: 'ΔΦ', description: '磁通量变化量', unit: 'Wb' },
      { name: 'Δt', description: '时间变化量', unit: 's' }
    ],
    conditions: '',
    notes: '感应电动势的大小与磁通量的变化率成正比，负号表示方向',
    derivation: '法拉第电磁感应定律',
    related: ['high_phy_022'],
    calculator: {
      inputs: ['n', 'deltaPhi', 'deltaT'],
      output: 'E',
      formula: (n, deltaPhi, deltaT) => -n * deltaPhi / deltaT
    }
  },
  {
    id: 'high_phy_022',
    name: '磁通量',
    category: '物理',
    subCategory: '电学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'Φ = BS cos θ',
    latex: '\\Phi = BS\\cos\\theta',
    variables: [
      { name: 'Φ', description: '磁通量', unit: 'Wb (韦伯)' },
      { name: 'B', description: '磁感应强度', unit: 'T' },
      { name: 'S', description: '面积', unit: 'm²' },
      { name: 'θ', description: '磁场与面积法线的夹角', unit: '度或弧度' }
    ],
    conditions: '',
    notes: '磁通量等于磁感应强度乘以面积再乘以夹角余弦',
    derivation: '磁通量定义',
    related: ['high_phy_021', 'high_phy_018'],
    calculator: {
      inputs: ['B', 'S', 'theta'],
      output: 'Phi',
      formula: (B, S, theta) => B * S * Math.cos(theta)
    }
  },
  // 高中化学公式
  {
    id: 'high_chem_001',
    name: '物质的量',
    category: '化学',
    subCategory: '基础',
    grade: ['初中', '高中'],
    tags: ['常用公式', '必背公式'],
    formula: 'n = m/M = N/NA = V/Vm',
    latex: 'n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{V_m}',
    variables: [
      { name: 'n', description: '物质的量', unit: 'mol' },
      { name: 'm', description: '质量', unit: 'g' },
      { name: 'M', description: '摩尔质量', unit: 'g/mol' },
      { name: 'N', description: '粒子数', unit: '' },
      { name: 'NA', description: '阿伏伽德罗常数', unit: '6.02×10²³ mol⁻¹' },
      { name: 'V', description: '气体体积', unit: 'L' },
      { name: 'Vm', description: '气体摩尔体积', unit: '22.4 L/mol (标准状况)' }
    ],
    conditions: '标准状况下，Vm = 22.4 L/mol',
    notes: '物质的量是联系宏观和微观的桥梁',
    derivation: '物质的量定义',
    related: ['high_chem_001', 'high_chem_002'],
    calculator: {
      inputs: ['m', 'M'],
      output: 'n',
      formula: (m, M) => m / M
    }
  },
  {
    id: 'high_chem_002',
    name: '物质的量浓度',
    category: '化学',
    subCategory: '基础',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'c = n/V',
    latex: 'c = \\frac{n}{V}',
    variables: [
      { name: 'c', description: '物质的量浓度', unit: 'mol/L' },
      { name: 'n', description: '物质的量', unit: 'mol' },
      { name: 'V', description: '溶液体积', unit: 'L' }
    ],
    conditions: 'V > 0',
    notes: '物质的量浓度等于溶质的物质的量除以溶液体积',
    derivation: '物质的量浓度定义',
    related: ['high_chem_001'],
    calculator: {
      inputs: ['n', 'V'],
      output: 'c',
      formula: (n, V) => n / V
    }
  },
  {
    id: 'high_chem_003',
    name: '质量分数与物质的量浓度换算',
    category: '化学',
    subCategory: '基础',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'c = 1000ρω/M',
    latex: 'c = \\frac{1000\\rho\\omega}{M}',
    variables: [
      { name: 'c', description: '物质的量浓度', unit: 'mol/L' },
      { name: 'ρ', description: '溶液密度', unit: 'g/mL' },
      { name: 'ω', description: '质量分数', unit: '%' },
      { name: 'M', description: '摩尔质量', unit: 'g/mol' }
    ],
    conditions: '',
    notes: '质量分数与物质的量浓度的换算关系',
    derivation: '由质量分数和物质的量浓度定义推导',
    related: ['high_chem_002', 'middle_chem_003'],
    calculator: {
      inputs: ['rho', 'omega', 'M'],
      output: 'c',
      formula: (rho, omega, M) => 1000 * rho * (omega / 100) / M
    }
  },
  {
    id: 'high_chem_004',
    name: '化学反应速率',
    category: '化学',
    subCategory: '化学反应',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'v = Δc/Δt',
    latex: 'v = \\frac{\\Delta c}{\\Delta t}',
    variables: [
      { name: 'v', description: '反应速率', unit: 'mol/(L·s)' },
      { name: 'Δc', description: '浓度变化量', unit: 'mol/L' },
      { name: 'Δt', description: '时间变化量', unit: 's' }
    ],
    conditions: 'Δt > 0',
    notes: '化学反应速率等于单位时间内反应物或生成物浓度的变化量',
    derivation: '反应速率定义',
    related: ['high_chem_005'],
    calculator: {
      inputs: ['deltaC', 'deltaT'],
      output: 'v',
      formula: (deltaC, deltaT) => deltaC / deltaT
    }
  },
  {
    id: 'high_chem_005',
    name: '化学平衡常数',
    category: '化学',
    subCategory: '化学反应',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'K = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ',
    latex: 'K = \\frac{[C]^c[D]^d}{[A]^a[B]^b}',
    variables: [
      { name: 'K', description: '平衡常数', unit: '' },
      { name: '[A], [B]', description: '反应物平衡浓度', unit: 'mol/L' },
      { name: '[C], [D]', description: '生成物平衡浓度', unit: 'mol/L' },
      { name: 'a, b, c, d', description: '化学计量数', unit: '' }
    ],
    conditions: '可逆反应达到平衡',
    notes: '平衡常数等于生成物浓度幂的乘积除以反应物浓度幂的乘积',
    derivation: '化学平衡定律',
    related: ['high_chem_004'],
    calculator: {
      inputs: ['C', 'c', 'D', 'd', 'A', 'a', 'B', 'b'],
      output: 'K',
      formula: (C, c, D, d, A, a, B, b) => {
        const numerator = Math.pow(C, c) * Math.pow(D, d);
        const denominator = Math.pow(A, a) * Math.pow(B, b);
        return numerator / denominator;
      }
    }
  },
  {
    id: 'high_chem_006',
    name: '电离平衡常数',
    category: '化学',
    subCategory: '化学反应',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'Ka = [H⁺][A⁻] / [HA]',
    latex: 'K_a = \\frac{[H^+][A^-]}{[HA]}',
    variables: [
      { name: 'Ka', description: '酸的电离平衡常数', unit: '' },
      { name: '[H⁺]', description: '氢离子浓度', unit: 'mol/L' },
      { name: '[A⁻]', description: '酸根离子浓度', unit: 'mol/L' },
      { name: '[HA]', description: '弱酸分子浓度', unit: 'mol/L' }
    ],
    conditions: '弱酸电离平衡',
    notes: '弱酸的电离平衡常数，Ka越大，酸性越强',
    derivation: '由化学平衡常数推导',
    related: ['high_chem_005', 'high_chem_007'],
    calculator: {
      inputs: ['H', 'A', 'HA'],
      output: 'Ka',
      formula: (H, A, HA) => (H * A) / HA
    }
  },
  {
    id: 'high_chem_007',
    name: 'pH值',
    category: '化学',
    subCategory: '化学反应',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'pH = -lg[H⁺]',
    latex: '\\text{pH} = -\\lg[H^+]',
    variables: [
      { name: 'pH', description: 'pH值', unit: '' },
      { name: '[H⁺]', description: '氢离子浓度', unit: 'mol/L' }
    ],
    conditions: '[H⁺] > 0',
    notes: 'pH值等于氢离子浓度的负对数，pH < 7为酸性，pH > 7为碱性，pH = 7为中性',
    derivation: 'pH定义',
    related: ['high_chem_006'],
    calculator: {
      inputs: ['H'],
      output: 'pH',
      formula: (H) => -Math.log10(H)
    }
  },
  {
    id: 'high_chem_008',
    name: 'pOH值',
    category: '化学',
    subCategory: '化学反应',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'pOH = -lg[OH⁻]',
    latex: '\\text{pOH} = -\\lg[OH^-]',
    variables: [
      { name: 'pOH', description: 'pOH值', unit: '' },
      { name: '[OH⁻]', description: '氢氧根离子浓度', unit: 'mol/L' }
    ],
    conditions: '[OH⁻] > 0',
    notes: 'pOH值等于氢氧根离子浓度的负对数，pH + pOH = 14',
    derivation: 'pOH定义',
    related: ['high_chem_007'],
    calculator: {
      inputs: ['OH'],
      output: 'pOH',
      formula: (OH) => -Math.log10(OH)
    }
  },
  {
    id: 'high_chem_009',
    name: '水的离子积',
    category: '化学',
    subCategory: '化学反应',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'Kw = [H⁺][OH⁻] = 1.0×10⁻¹⁴',
    latex: 'K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}',
    variables: [
      { name: 'Kw', description: '水的离子积常数', unit: '' },
      { name: '[H⁺]', description: '氢离子浓度', unit: 'mol/L' },
      { name: '[OH⁻]', description: '氢氧根离子浓度', unit: 'mol/L' }
    ],
    conditions: '25℃',
    notes: '在25℃时，水的离子积常数为1.0×10⁻¹⁴，pH + pOH = 14',
    derivation: '由水的电离平衡推导',
    related: ['high_chem_007', 'high_chem_008'],
    calculator: {
      inputs: ['H'],
      output: 'OH',
      formula: (H) => 1e-14 / H
    }
  },
  {
    id: 'high_chem_010',
    name: '原电池电动势',
    category: '化学',
    subCategory: '电化学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'E = E⁺ - E⁻',
    latex: 'E = E^+ - E^-',
    variables: [
      { name: 'E', description: '电池电动势', unit: 'V' },
      { name: 'E⁺', description: '正极电极电势', unit: 'V' },
      { name: 'E⁻', description: '负极电极电势', unit: 'V' }
    ],
    conditions: '',
    notes: '原电池电动势等于正极电极电势减去负极电极电势',
    derivation: '原电池原理',
    related: ['high_chem_011'],
    calculator: {
      inputs: ['E_plus', 'E_minus'],
      output: 'E',
      formula: (E_plus, E_minus) => E_plus - E_minus
    }
  },
  {
    id: 'high_chem_011',
    name: '能斯特方程',
    category: '化学',
    subCategory: '电化学',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'E = E° - (RT/nF)ln Q',
    latex: 'E = E^\\circ - \\frac{RT}{nF}\\ln Q',
    variables: [
      { name: 'E', description: '电极电势', unit: 'V' },
      { name: 'E°', description: '标准电极电势', unit: 'V' },
      { name: 'R', description: '气体常数', unit: '8.314 J/(mol·K)' },
      { name: 'T', description: '温度', unit: 'K' },
      { name: 'n', description: '电子转移数', unit: '' },
      { name: 'F', description: '法拉第常数', unit: '96485 C/mol' },
      { name: 'Q', description: '反应商', unit: '' }
    ],
    conditions: '',
    notes: '能斯特方程描述了电极电势与浓度、温度的关系',
    derivation: '由热力学和电化学原理推导',
    related: ['high_chem_010'],
    calculator: {
      inputs: ['E0', 'T', 'n', 'Q'],
      output: 'E',
      formula: (E0, T, n, Q) => {
        const R = 8.314;
        const F = 96485;
        return E0 - (R * T / (n * F)) * Math.log(Q);
      }
    }
  },
  {
    id: 'high_chem_012',
    name: '阿伦尼乌斯方程',
    category: '化学',
    subCategory: '化学反应',
    grade: '高中',
    tags: ['常用公式', '必背公式'],
    formula: 'k = Ae^(-Ea/RT)',
    latex: 'k = Ae^{-\\frac{E_a}{RT}}',
    variables: [
      { name: 'k', description: '反应速率常数', unit: '' },
      { name: 'A', description: '指前因子', unit: '' },
      { name: 'Ea', description: '活化能', unit: 'J/mol' },
      { name: 'R', description: '气体常数', unit: '8.314 J/(mol·K)' },
      { name: 'T', description: '温度', unit: 'K' }
    ],
    conditions: '',
    notes: '反应速率常数与温度、活化能的关系',
    derivation: '阿伦尼乌斯方程',
    related: ['high_chem_004'],
    calculator: {
      inputs: ['A', 'Ea', 'T'],
      output: 'k',
      formula: (A, Ea, T) => {
        const R = 8.314;
        return A * Math.exp(-Ea / (R * T));
      }
    }
  },
  // 高等数学公式 - 极限
  {
    id: 'calc_limit_001',
    name: '极限定义',
    category: '数学',
    subCategory: '高等数学-极限',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'lim(x→a) f(x) = L',
    latex: '\\lim_{x \\to a} f(x) = L',
    variables: [
      { name: 'a', description: '趋近值', unit: '' },
      { name: 'L', description: '极限值', unit: '' },
      { name: 'f(x)', description: '函数', unit: '' }
    ],
    conditions: '',
    notes: '当x无限接近a时，f(x)无限接近L',
    derivation: '极限定义',
    related: ['calc_limit_002'],
    calculator: {
      inputs: [],
      output: 'L',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_limit_002',
    name: '重要极限1',
    category: '数学',
    subCategory: '高等数学-极限',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'lim(x→0) sin x / x = 1',
    latex: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1',
    variables: [
      { name: 'x', description: '角度（弧度）', unit: 'rad' }
    ],
    conditions: 'x → 0',
    notes: '第一个重要极限，用于求含三角函数的极限',
    derivation: '由夹逼定理推导',
    related: ['calc_limit_001', 'calc_limit_003'],
    calculator: {
      inputs: ['x'],
      output: 'result',
      formula: (x) => x === 0 ? 1 : Math.sin(x) / x
    }
  },
  {
    id: 'calc_limit_003',
    name: '重要极限2',
    category: '数学',
    subCategory: '高等数学-极限',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'lim(x→∞) (1 + 1/x)^x = e',
    latex: '\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'e', description: '自然常数', unit: '约2.71828' }
    ],
    conditions: 'x → ∞',
    notes: '第二个重要极限，e的定义式',
    derivation: '由极限定义推导',
    related: ['calc_limit_001', 'calc_limit_002'],
    calculator: {
      inputs: ['x'],
      output: 'result',
      formula: (x) => Math.pow(1 + 1 / x, x)
    }
  },
  // 高等数学公式 - 导数
  {
    id: 'calc_derivative_001',
    name: '导数定义',
    category: '数学',
    subCategory: '高等数学-导数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: "f'(x) = lim(h→0) [f(x+h) - f(x)] / h",
    latex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
    variables: [
      { name: "f'(x)", description: '导数', unit: '' },
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'h', description: '增量', unit: '' }
    ],
    conditions: '函数在x处可导',
    notes: '导数是函数在某点的瞬时变化率',
    derivation: '导数定义',
    related: ['calc_derivative_002'],
    calculator: {
      inputs: [],
      output: "f'(x)",
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_derivative_002',
    name: '基本导数公式',
    category: '数学',
    subCategory: '高等数学-导数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: "(xⁿ)' = nxⁿ⁻¹, (sin x)' = cos x, (cos x)' = -sin x, (eˣ)' = eˣ, (ln x)' = 1/x",
    latex: "(x^n)' = nx^{n-1}, \\quad (\\sin x)' = \\cos x, \\quad (\\cos x)' = -\\sin x, \\quad (e^x)' = e^x, \\quad (\\ln x)' = \\frac{1}{x}",
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'n', description: '指数', unit: '' }
    ],
    conditions: '',
    notes: '基本初等函数的导数公式',
    derivation: '由导数定义推导',
    related: ['calc_derivative_001', 'calc_derivative_003'],
    calculator: {
      inputs: ['func', 'x', 'n'],
      output: 'result',
      formula: (func, x, n) => {
        if (func === 'power') return n * Math.pow(x, n - 1);
        if (func === 'sin') return Math.cos(x);
        if (func === 'cos') return -Math.sin(x);
        if (func === 'exp') return Math.exp(x);
        if (func === 'ln') return 1 / x;
        return null;
      }
    }
  },
  {
    id: 'calc_derivative_003',
    name: '求导法则',
    category: '数学',
    subCategory: '高等数学-导数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: "(u±v)' = u'±v', (uv)' = u'v + uv', (u/v)' = (u'v - uv')/v², [f(g(x))]' = f'(g(x))·g'(x)",
    latex: "(u \\pm v)' = u' \\pm v', \\quad (uv)' = u'v + uv', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}, \\quad [f(g(x))]' = f'(g(x)) \\cdot g'(x)",
    variables: [
      { name: 'u, v', description: '函数', unit: '' },
      { name: "u', v'", description: '导数', unit: '' }
    ],
    conditions: '函数可导',
    notes: '和差积商法则和复合函数求导法则（链式法则）',
    derivation: '由导数定义推导',
    related: ['calc_derivative_002'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_derivative_004',
    name: '高阶导数',
    category: '数学',
    subCategory: '高等数学-导数',
    grade: '大学',
    tags: ['常用公式'],
    formula: "f⁽ⁿ⁾(x) = dⁿf/dxⁿ",
    latex: "f^{(n)}(x) = \\frac{d^nf}{dx^n}",
    variables: [
      { name: 'n', description: '阶数', unit: '' },
      { name: "f⁽ⁿ⁾(x)", description: 'n阶导数', unit: '' }
    ],
    conditions: '函数n次可导',
    notes: '对函数连续求导n次',
    derivation: '高阶导数定义',
    related: ['calc_derivative_001'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_derivative_005',
    name: '隐函数求导',
    category: '数学',
    subCategory: '高等数学-导数',
    grade: '大学',
    tags: ['常用公式'],
    formula: "dy/dx = -Fx'/Fy'",
    latex: "\\frac{dy}{dx} = -\\frac{F'_x}{F'_y}",
    variables: [
      { name: 'F(x,y)', description: '隐函数', unit: '' },
      { name: "Fx', Fy'", description: '偏导数', unit: '' }
    ],
    conditions: 'Fy\' ≠ 0',
    notes: '对于隐函数F(x,y)=0，求dy/dx',
    derivation: '由链式法则推导',
    related: ['calc_derivative_003'],
    calculator: {
      inputs: [],
      output: 'dy/dx',
      formula: () => '需要具体函数计算'
    }
  },
  // 高等数学公式 - 积分
  {
    id: 'calc_integral_001',
    name: '不定积分定义',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫f(x)dx = F(x) + C，其中F\'(x) = f(x)',
    latex: '\\int f(x)dx = F(x) + C, \\quad \\text{其中} \\quad F\'(x) = f(x)',
    variables: [
      { name: 'f(x)', description: '被积函数', unit: '' },
      { name: 'F(x)', description: '原函数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'f(x)连续',
    notes: '不定积分是导数的逆运算',
    derivation: '积分定义',
    related: ['calc_integral_002'],
    calculator: {
      inputs: [],
      output: 'F(x)',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_002',
    name: '基本积分公式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫xⁿdx = xⁿ⁺¹/(n+1) + C, ∫1/x dx = ln|x| + C, ∫eˣdx = eˣ + C, ∫sin x dx = -cos x + C, ∫cos x dx = sin x + C',
    latex: '\\int x^ndx = \\frac{x^{n+1}}{n+1} + C, \\quad \\int \\frac{1}{x}dx = \\ln|x| + C, \\quad \\int e^xdx = e^x + C, \\quad \\int \\sin x dx = -\\cos x + C, \\quad \\int \\cos x dx = \\sin x + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'n', description: '指数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'n ≠ -1',
    notes: '基本初等函数的不定积分公式。极限情形：当 n→-1 时，由洛必达法则可得 ∫xⁿdx = xⁿ⁺¹ln(x) + C，代入 n=-1 得 ∫1/x dx = ln|x| + C（注意 x^(n+1) = exp((n+1)ln(x))，对 n 求导得 x^(n+1)ln(x)）',
    derivation: '由导数公式逆推。极限情形推导：当 n→-1 时，对 ∫xⁿdx = x^(n+1)/(n+1) + C 应用洛必达法则，由于 x^(n+1) = exp((n+1)ln(x))，对 n 求导得 x^(n+1)ln(x)，因此极限为 x^(n+1)ln(x) + C，当 n=-1 时即为 ln|x| + C',
    related: ['calc_integral_001', 'calc_derivative_002'],
    calculator: {
      inputs: ['func', 'x', 'n'],
      output: 'result',
      formula: (func, x, n) => {
        if (func === 'power') return Math.pow(x, n + 1) / (n + 1);
        if (func === '1/x') return Math.log(Math.abs(x));
        if (func === 'exp') return Math.exp(x);
        if (func === 'sin') return -Math.cos(x);
        if (func === 'cos') return Math.sin(x);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_003',
    name: '定积分定义',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫[a,b] f(x)dx = lim(n→∞) Σ(i=1 to n) f(ξᵢ)Δxᵢ',
    latex: '\\int_a^b f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(\\xi_i)\\Delta x_i',
    variables: [
      { name: 'a, b', description: '积分上下限', unit: '' },
      { name: 'f(x)', description: '被积函数', unit: '' },
      { name: 'Δxᵢ', description: '小区间长度', unit: '' }
    ],
    conditions: 'f(x)在[a,b]上可积',
    notes: '定积分是函数在区间上的面积',
    derivation: '黎曼积分定义',
    related: ['calc_integral_001', 'calc_integral_004'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_004',
    name: '牛顿-莱布尼茨公式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫[a,b] f(x)dx = F(b) - F(a)',
    latex: '\\int_a^b f(x)dx = F(b) - F(a)',
    variables: [
      { name: 'F(x)', description: 'f(x)的原函数', unit: '' },
      { name: 'a, b', description: '积分上下限', unit: '' }
    ],
    conditions: 'F\'(x) = f(x)，F(x)在[a,b]上连续',
    notes: '定积分计算的基本公式，连接了积分与导数',
    derivation: '微积分基本定理',
    related: ['calc_integral_001', 'calc_integral_003'],
    calculator: {
      inputs: ['F', 'a', 'b'],
      output: 'result',
      formula: (F, a, b) => F(b) - F(a)
    }
  },
  {
    id: 'calc_integral_005',
    name: '换元积分法',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫f(g(x))g\'(x)dx = ∫f(u)du，其中u = g(x)',
    latex: '\\int f(g(x))g\'(x)dx = \\int f(u)du, \\quad \\text{其中} \\quad u = g(x)',
    variables: [
      { name: 'f(x), g(x)', description: '函数', unit: '' },
      { name: 'u', description: '新变量', unit: '' }
    ],
    conditions: 'g(x)可导，f(u)可积',
    notes: '通过变量替换简化积分计算',
    derivation: '由链式法则推导',
    related: ['calc_integral_001', 'calc_derivative_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_006',
    name: '分部积分法',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫u dv = uv - ∫v du',
    latex: '\\int u dv = uv - \\int v du',
    variables: [
      { name: 'u, v', description: '函数', unit: '' },
      { name: 'du, dv', description: '微分', unit: '' }
    ],
    conditions: 'u, v可导',
    notes: '用于求两个函数乘积的积分',
    derivation: '由乘积求导法则推导',
    related: ['calc_integral_001', 'calc_derivative_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  // 高等数学公式 - 级数
  {
    id: 'calc_series_001',
    name: '泰勒级数',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'f(x) = Σ(n=0 to ∞) [f⁽ⁿ⁾(a)/n!](x-a)ⁿ',
    latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n',
    variables: [
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'a', description: '展开点', unit: '' },
      { name: 'n', description: '阶数', unit: '' }
    ],
    conditions: 'f(x)在a处无限次可导',
    notes: '将函数展开为幂级数',
    derivation: '泰勒定理',
    related: ['calc_series_002'],
    calculator: {
      inputs: [],
      output: 'series',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_series_002',
    name: '麦克劳林级数',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'f(x) = Σ(n=0 to ∞) [f⁽ⁿ⁾(0)/n!]xⁿ',
    latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}x^n',
    variables: [
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'n', description: '阶数', unit: '' }
    ],
    conditions: 'f(x)在0处无限次可导',
    notes: '泰勒级数在a=0时的特殊情况',
    derivation: '由泰勒级数推导',
    related: ['calc_series_001'],
    calculator: {
      inputs: [],
      output: 'series',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_series_003',
    name: '常见函数的麦克劳林展开',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'eˣ = Σ(n=0 to ∞) xⁿ/n!, sin x = Σ(n=0 to ∞) (-1)ⁿx²ⁿ⁺¹/(2n+1)!, cos x = Σ(n=0 to ∞) (-1)ⁿx²ⁿ/(2n)!, 1/(1-x) = Σ(n=0 to ∞) xⁿ',
    latex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}, \\quad \\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}, \\quad \\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'n', description: '项数', unit: '' }
    ],
    conditions: '|x| < 1（对于1/(1-x)）',
    notes: '常用函数的幂级数展开',
    derivation: '由麦克劳林级数推导',
    related: ['calc_series_002'],
    calculator: {
      inputs: ['func', 'x', 'n'],
      output: 'result',
      formula: (func, x, n) => {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
          if (func === 'exp') sum += Math.pow(x, i) / factorial(i);
          if (func === 'sin') sum += Math.pow(-1, i) * Math.pow(x, 2 * i + 1) / factorial(2 * i + 1);
          if (func === 'cos') sum += Math.pow(-1, i) * Math.pow(x, 2 * i) / factorial(2 * i);
          if (func === '1/(1-x)') sum += Math.pow(x, i);
        }
        return sum;
        function factorial(n) {
          if (n <= 1) return 1;
          return n * factorial(n - 1);
        }
      }
    }
  },
  // 线性代数公式 - 矩阵
  {
    id: 'linear_matrix_001',
    name: '矩阵加法',
    category: '数学',
    subCategory: '线性代数-矩阵',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '(A + B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ',
    latex: '(A + B)_{ij} = A_{ij} + B_{ij}',
    variables: [
      { name: 'A, B', description: '矩阵', unit: '' },
      { name: 'i, j', description: '行列索引', unit: '' }
    ],
    conditions: 'A和B同型（行数、列数相同）',
    notes: '对应元素相加',
    derivation: '矩阵运算定义',
    related: ['linear_matrix_002'],
    calculator: {
      inputs: ['A', 'B'],
      output: 'C',
      formula: (A, B) => {
        if (A.length !== B.length || A[0].length !== B[0].length) return '矩阵不同型';
        return A.map((row, i) => row.map((val, j) => val + B[i][j]));
      }
    }
  },
  {
    id: 'linear_matrix_002',
    name: '矩阵乘法',
    category: '数学',
    subCategory: '线性代数-矩阵',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '(AB)ᵢⱼ = Σ(k=1 to n) AᵢₖBₖⱼ',
    latex: '(AB)_{ij} = \\sum_{k=1}^n A_{ik}B_{kj}',
    variables: [
      { name: 'A', description: 'm×n矩阵', unit: '' },
      { name: 'B', description: 'n×p矩阵', unit: '' },
      { name: 'k', description: '求和索引', unit: '' }
    ],
    conditions: 'A的列数等于B的行数',
    notes: '矩阵乘法的定义，结果矩阵为m×p',
    derivation: '矩阵运算定义',
    related: ['linear_matrix_001', 'linear_matrix_003'],
    calculator: {
      inputs: ['A', 'B'],
      output: 'C',
      formula: (A, B) => {
        if (A[0].length !== B.length) return '矩阵不可乘';
        const C = Array(A.length).fill(0).map(() => Array(B[0].length).fill(0));
        for (let i = 0; i < A.length; i++) {
          for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < B.length; k++) {
              C[i][j] += A[i][k] * B[k][j];
            }
          }
        }
        return C;
      }
    }
  },
  {
    id: 'linear_matrix_003',
    name: '矩阵转置',
    category: '数学',
    subCategory: '线性代数-矩阵',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '(Aᵀ)ᵢⱼ = Aⱼᵢ',
    latex: '(A^T)_{ij} = A_{ji}',
    variables: [
      { name: 'A', description: '矩阵', unit: '' },
      { name: 'Aᵀ', description: '转置矩阵', unit: '' }
    ],
    conditions: '',
    notes: '将矩阵的行列互换',
    derivation: '转置定义',
    related: ['linear_matrix_002'],
    calculator: {
      inputs: ['A'],
      output: 'AT',
      formula: (A) => A[0].map((_, j) => A.map(row => row[j]))
    }
  },
  {
    id: 'linear_matrix_004',
    name: '矩阵的逆',
    category: '数学',
    subCategory: '线性代数-矩阵',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'AA⁻¹ = A⁻¹A = I',
    latex: 'AA^{-1} = A^{-1}A = I',
    variables: [
      { name: 'A', description: '可逆矩阵', unit: '' },
      { name: 'A⁻¹', description: '逆矩阵', unit: '' },
      { name: 'I', description: '单位矩阵', unit: '' }
    ],
    conditions: '|A| ≠ 0（A可逆）',
    notes: '只有方阵且行列式不为0的矩阵才有逆矩阵',
    derivation: '逆矩阵定义',
    related: ['linear_det_001'],
    calculator: {
      inputs: [],
      output: 'A_inv',
      formula: () => '需要具体矩阵计算'
    }
  },
  // 线性代数公式 - 行列式
  {
    id: 'linear_det_001',
    name: '行列式定义（2阶）',
    category: '数学',
    subCategory: '线性代数-行列式',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '|A| = a₁₁a₂₂ - a₁₂a₂₁',
    latex: '|A| = \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}',
    variables: [
      { name: 'aᵢⱼ', description: '矩阵元素', unit: '' }
    ],
    conditions: 'A为2×2矩阵',
    notes: '2阶行列式的计算公式',
    derivation: '行列式定义',
    related: ['linear_det_002'],
    calculator: {
      inputs: ['a11', 'a12', 'a21', 'a22'],
      output: 'det',
      formula: (a11, a12, a21, a22) => a11 * a22 - a12 * a21
    }
  },
  {
    id: 'linear_det_002',
    name: '行列式定义（3阶）',
    category: '数学',
    subCategory: '线性代数-行列式',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '|A| = a₁₁a₂₂a₃₃ + a₁₂a₂₃a₃₁ + a₁₃a₂₁a₃₂ - a₁₃a₂₂a₃₁ - a₁₂a₂₁a₃₃ - a₁₁a₂₃a₃₂',
    latex: '|A| = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} - a_{11}a_{23}a_{32}',
    variables: [
      { name: 'aᵢⱼ', description: '矩阵元素', unit: '' }
    ],
    conditions: 'A为3×3矩阵',
    notes: '3阶行列式的计算公式（对角线法则）',
    derivation: '行列式定义',
    related: ['linear_det_001', 'linear_det_003'],
    calculator: {
      inputs: ['a11', 'a12', 'a13', 'a21', 'a22', 'a23', 'a31', 'a32', 'a33'],
      output: 'det',
      formula: (a11, a12, a13, a21, a22, a23, a31, a32, a33) => {
        return a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32
          - a13 * a22 * a31 - a12 * a21 * a33 - a11 * a23 * a32;
      }
    }
  },
  {
    id: 'linear_det_003',
    name: '行列式按行（列）展开',
    category: '数学',
    subCategory: '线性代数-行列式',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '|A| = Σ(j=1 to n) aᵢⱼAᵢⱼ = Σ(i=1 to n) aᵢⱼAᵢⱼ',
    latex: '|A| = \\sum_{j=1}^n a_{ij}A_{ij} = \\sum_{i=1}^n a_{ij}A_{ij}',
    variables: [
      { name: 'Aᵢⱼ', description: '代数余子式', unit: '' },
      { name: 'aᵢⱼ', description: '矩阵元素', unit: '' }
    ],
    conditions: '',
    notes: '按第i行或第j列展开，Aᵢⱼ = (-1)ⁱ⁺ʲMᵢⱼ，Mᵢⱼ为余子式',
    derivation: '拉普拉斯展开定理',
    related: ['linear_det_001', 'linear_det_002'],
    calculator: {
      inputs: [],
      output: 'det',
      formula: () => '需要具体矩阵计算'
    }
  },
  // 线性代数公式 - 特征值与特征向量
  {
    id: 'linear_eigen_001',
    name: '特征值与特征向量',
    category: '数学',
    subCategory: '线性代数-特征值',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Av = λv，其中|A - λI| = 0',
    latex: 'Av = \\lambda v, \\quad \\text{其中} \\quad |A - \\lambda I| = 0',
    variables: [
      { name: 'A', description: '矩阵', unit: '' },
      { name: 'λ', description: '特征值', unit: '' },
      { name: 'v', description: '特征向量', unit: '' },
      { name: 'I', description: '单位矩阵', unit: '' }
    ],
    conditions: 'A为方阵',
    notes: '特征值λ是特征方程|A - λI| = 0的根，对应的非零向量v是特征向量',
    derivation: '特征值定义',
    related: ['linear_det_001'],
    calculator: {
      inputs: [],
      output: 'eigen',
      formula: () => '需要具体矩阵计算'
    }
  },
  // 概率论公式 - 概率
  {
    id: 'prob_basic_001',
    name: '概率定义',
    category: '数学',
    subCategory: '概率论-概率',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'P(A) = n(A) / n(S)',
    latex: 'P(A) = \\frac{n(A)}{n(S)}',
    variables: [
      { name: 'P(A)', description: '事件A的概率', unit: '' },
      { name: 'n(A)', description: '事件A的样本点数', unit: '' },
      { name: 'n(S)', description: '样本空间的总样本点数', unit: '' }
    ],
    conditions: '等可能事件',
    notes: '古典概型的概率定义',
    derivation: '概率定义',
    related: ['prob_basic_002'],
    calculator: {
      inputs: ['nA', 'nS'],
      output: 'P',
      formula: (nA, nS) => nA / nS
    }
  },
  {
    id: 'prob_basic_002',
    name: '条件概率',
    category: '数学',
    subCategory: '概率论-概率',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'P(A|B) = P(AB) / P(B)',
    latex: 'P(A|B) = \\frac{P(AB)}{P(B)}',
    variables: [
      { name: 'P(A|B)', description: '在B发生的条件下A发生的概率', unit: '' },
      { name: 'P(AB)', description: 'A和B同时发生的概率', unit: '' },
      { name: 'P(B)', description: 'B发生的概率', unit: '' }
    ],
    conditions: 'P(B) > 0',
    notes: '条件概率的定义',
    derivation: '条件概率定义',
    related: ['prob_basic_001', 'prob_basic_003'],
    calculator: {
      inputs: ['PAB', 'PB'],
      output: 'PA_given_B',
      formula: (PAB, PB) => PAB / PB
    }
  },
  {
    id: 'prob_basic_003',
    name: '乘法公式',
    category: '数学',
    subCategory: '概率论-概率',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'P(AB) = P(A|B)P(B) = P(B|A)P(A)',
    latex: 'P(AB) = P(A|B)P(B) = P(B|A)P(A)',
    variables: [
      { name: 'P(AB)', description: 'A和B同时发生的概率', unit: '' },
      { name: 'P(A|B), P(B|A)', description: '条件概率', unit: '' }
    ],
    conditions: '',
    notes: '由条件概率公式推导',
    derivation: '由条件概率公式推导',
    related: ['prob_basic_002'],
    calculator: {
      inputs: ['PA_given_B', 'PB'],
      output: 'PAB',
      formula: (PA_given_B, PB) => PA_given_B * PB
    }
  },
  {
    id: 'prob_basic_004',
    name: '全概率公式',
    category: '数学',
    subCategory: '概率论-概率',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'P(A) = Σ(i=1 to n) P(A|Bᵢ)P(Bᵢ)',
    latex: 'P(A) = \\sum_{i=1}^n P(A|B_i)P(B_i)',
    variables: [
      { name: 'Bᵢ', description: '完备事件组', unit: '' },
      { name: 'A', description: '事件', unit: '' }
    ],
    conditions: 'B₁, B₂, ..., Bₙ构成完备事件组',
    notes: '通过完备事件组计算事件A的概率',
    derivation: '由概率的加法公式和乘法公式推导',
    related: ['prob_basic_002', 'prob_basic_005'],
    calculator: {
      inputs: ['PA_given_B', 'PB'],
      output: 'PA',
      formula: (PA_given_B, PB) => {
        if (PA_given_B.length !== PB.length) return '数组长度不匹配';
        return PA_given_B.reduce((sum, p, i) => sum + p * PB[i], 0);
      }
    }
  },
  {
    id: 'prob_basic_005',
    name: '贝叶斯公式',
    category: '数学',
    subCategory: '概率论-概率',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'P(Bᵢ|A) = P(A|Bᵢ)P(Bᵢ) / Σ(j=1 to n) P(A|Bⱼ)P(Bⱼ)',
    latex: 'P(B_i|A) = \\frac{P(A|B_i)P(B_i)}{\\sum_{j=1}^n P(A|B_j)P(B_j)}',
    variables: [
      { name: 'Bᵢ', description: '完备事件组', unit: '' },
      { name: 'A', description: '事件', unit: '' }
    ],
    conditions: 'B₁, B₂, ..., Bₙ构成完备事件组',
    notes: '由结果反推原因的概率',
    derivation: '由条件概率和全概率公式推导',
    related: ['prob_basic_002', 'prob_basic_004'],
    calculator: {
      inputs: ['PA_given_Bi', 'PBi', 'PA_given_B', 'PB'],
      output: 'PBi_given_A',
      formula: (PA_given_Bi, PBi, PA_given_B, PB) => {
        const denominator = PA_given_B.reduce((sum, p, i) => sum + p * PB[i], 0);
        return (PA_given_Bi * PBi) / denominator;
      }
    }
  },
  // 概率论公式 - 随机变量
  {
    id: 'prob_rv_001',
    name: '数学期望',
    category: '数学',
    subCategory: '概率论-随机变量',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'E(X) = Σ(i=1 to n) xᵢP(X=xᵢ) 或 E(X) = ∫xf(x)dx',
    latex: 'E(X) = \\sum_{i=1}^n x_i P(X=x_i) \\quad \\text{或} \\quad E(X) = \\int xf(x)dx',
    variables: [
      { name: 'E(X)', description: '数学期望', unit: '' },
      { name: 'xᵢ', description: '随机变量取值', unit: '' },
      { name: 'P(X=xᵢ)', description: '概率', unit: '' },
      { name: 'f(x)', description: '概率密度函数', unit: '' }
    ],
    conditions: '',
    notes: '随机变量的平均值',
    derivation: '期望定义',
    related: ['prob_rv_002'],
    calculator: {
      inputs: ['x', 'p'],
      output: 'E',
      formula: (x, p) => {
        if (x.length !== p.length) return '数组长度不匹配';
        return x.reduce((sum, xi, i) => sum + xi * p[i], 0);
      }
    }
  },
  {
    id: 'prob_rv_002',
    name: '方差',
    category: '数学',
    subCategory: '概率论-随机变量',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'D(X) = E(X²) - [E(X)]² = E[(X - E(X))²]',
    latex: 'D(X) = E(X^2) - [E(X)]^2 = E[(X - E(X))^2]',
    variables: [
      { name: 'D(X)', description: '方差', unit: '' },
      { name: 'E(X)', description: '数学期望', unit: '' }
    ],
    conditions: '',
    notes: '方差衡量随机变量与其期望的偏离程度',
    derivation: '方差定义',
    related: ['prob_rv_001', 'prob_rv_003'],
    calculator: {
      inputs: ['x', 'p'],
      output: 'D',
      formula: (x, p) => {
        if (x.length !== p.length) return '数组长度不匹配';
        const E = x.reduce((sum, xi, i) => sum + xi * p[i], 0);
        const E2 = x.reduce((sum, xi, i) => sum + xi * xi * p[i], 0);
        return E2 - E * E;
      }
    }
  },
  {
    id: 'prob_rv_003',
    name: '标准差',
    category: '数学',
    subCategory: '概率论-随机变量',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'σ(X) = √D(X)',
    latex: '\\sigma(X) = \\sqrt{D(X)}',
    variables: [
      { name: 'σ(X)', description: '标准差', unit: '' },
      { name: 'D(X)', description: '方差', unit: '' }
    ],
    conditions: '',
    notes: '标准差是方差的平方根',
    derivation: '由方差定义',
    related: ['prob_rv_002'],
    calculator: {
      inputs: ['D'],
      output: 'sigma',
      formula: (D) => Math.sqrt(D)
    }
  },
  // 大学物理公式 - 相对论
  {
    id: 'univ_phy_relativity_001',
    name: '相对论时间膨胀',
    category: '物理',
    subCategory: '相对论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Δt = Δt₀ / √(1 - v²/c²)',
    latex: '\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}',
    variables: [
      { name: 'Δt', description: '运动参考系中的时间', unit: 's' },
      { name: 'Δt₀', description: '静止参考系中的时间（固有时）', unit: 's' },
      { name: 'v', description: '相对速度', unit: 'm/s' },
      { name: 'c', description: '光速', unit: '3×10⁸ m/s' }
    ],
    conditions: 'v < c',
    notes: '运动时钟变慢效应',
    derivation: '狭义相对论',
    related: ['univ_phy_relativity_002'],
    calculator: {
      inputs: ['t0', 'v'],
      output: 't',
      formula: (t0, v) => {
        const c = 3e8;
        return t0 / Math.sqrt(1 - v * v / (c * c));
      }
    }
  },
  {
    id: 'univ_phy_relativity_002',
    name: '相对论长度收缩',
    category: '物理',
    subCategory: '相对论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'L = L₀√(1 - v²/c²)',
    latex: 'L = L_0\\sqrt{1 - v^2/c^2}',
    variables: [
      { name: 'L', description: '运动参考系中的长度', unit: 'm' },
      { name: 'L₀', description: '静止参考系中的长度（固有长度）', unit: 'm' },
      { name: 'v', description: '相对速度', unit: 'm/s' },
      { name: 'c', description: '光速', unit: '3×10⁸ m/s' }
    ],
    conditions: 'v < c',
    notes: '运动物体在运动方向上长度缩短',
    derivation: '狭义相对论',
    related: ['univ_phy_relativity_001'],
    calculator: {
      inputs: ['L0', 'v'],
      output: 'L',
      formula: (L0, v) => {
        const c = 3e8;
        return L0 * Math.sqrt(1 - v * v / (c * c));
      }
    }
  },
  {
    id: 'univ_phy_relativity_003',
    name: '质能关系',
    category: '物理',
    subCategory: '相对论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'E = mc²',
    latex: 'E = mc^2',
    variables: [
      { name: 'E', description: '能量', unit: 'J' },
      { name: 'm', description: '质量', unit: 'kg' },
      { name: 'c', description: '光速', unit: '3×10⁸ m/s' }
    ],
    conditions: '',
    notes: '爱因斯坦质能关系式，质量和能量的等价性',
    derivation: '狭义相对论',
    related: ['univ_phy_relativity_004'],
    calculator: {
      inputs: ['m'],
      output: 'E',
      formula: (m) => {
        const c = 3e8;
        return m * c * c;
      }
    }
  },
  {
    id: 'univ_phy_relativity_004',
    name: '相对论动能',
    category: '物理',
    subCategory: '相对论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Ek = mc²(1/√(1 - v²/c²) - 1)',
    latex: 'E_k = mc^2\\left(\\frac{1}{\\sqrt{1 - v^2/c^2}} - 1\\right)',
    variables: [
      { name: 'Ek', description: '相对论动能', unit: 'J' },
      { name: 'm', description: '静质量', unit: 'kg' },
      { name: 'v', description: '速度', unit: 'm/s' },
      { name: 'c', description: '光速', unit: '3×10⁸ m/s' }
    ],
    conditions: 'v < c',
    notes: '当v << c时，近似为经典动能 Ek ≈ ½mv²',
    derivation: '由相对论总能量和静能推导',
    related: ['univ_phy_relativity_003', 'physics_002'],
    calculator: {
      inputs: ['m', 'v'],
      output: 'Ek',
      formula: (m, v) => {
        const c = 3e8;
        const gamma = 1 / Math.sqrt(1 - v * v / (c * c));
        return m * c * c * (gamma - 1);
      }
    }
  },
  // 大学物理公式 - 量子力学
  {
    id: 'univ_phy_quantum_001',
    name: '德布罗意波长',
    category: '物理',
    subCategory: '量子力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'λ = h / p = h / (mv)',
    latex: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}',
    variables: [
      { name: 'λ', description: '德布罗意波长', unit: 'm' },
      { name: 'h', description: '普朗克常数', unit: '6.626×10⁻³⁴ J·s' },
      { name: 'p', description: '动量', unit: 'kg·m/s' },
      { name: 'm', description: '质量', unit: 'kg' },
      { name: 'v', description: '速度', unit: 'm/s' }
    ],
    conditions: '',
    notes: '物质波波长与动量的关系',
    derivation: '德布罗意假设',
    related: ['univ_phy_quantum_002'],
    calculator: {
      inputs: ['m', 'v'],
      output: 'lambda',
      formula: (m, v) => {
        const h = 6.626e-34;
        return h / (m * v);
      }
    }
  },
  {
    id: 'univ_phy_quantum_002',
    name: '不确定性原理',
    category: '物理',
    subCategory: '量子力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Δx·Δp ≥ ℏ/2',
    latex: '\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}',
    variables: [
      { name: 'Δx', description: '位置不确定度', unit: 'm' },
      { name: 'Δp', description: '动量不确定度', unit: 'kg·m/s' },
      { name: 'ℏ', description: '约化普朗克常数', unit: 'h/(2π) = 1.055×10⁻³⁴ J·s' }
    ],
    conditions: '',
    notes: '位置和动量不能同时精确测量',
    derivation: '海森堡不确定性原理',
    related: ['univ_phy_quantum_001'],
    calculator: {
      inputs: ['deltaX'],
      output: 'deltaP',
      formula: (deltaX) => {
        const hbar = 1.055e-34;
        return hbar / (2 * deltaX);
      }
    }
  },
  {
    id: 'univ_phy_quantum_003',
    name: '薛定谔方程（一维）',
    category: '物理',
    subCategory: '量子力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'iℏ(∂ψ/∂t) = -ℏ²/(2m)(∂²ψ/∂x²) + Vψ',
    latex: 'i\\hbar\\frac{\\partial\\psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\psi}{\\partial x^2} + V\\psi',
    variables: [
      { name: 'ψ', description: '波函数', unit: '' },
      { name: 'V', description: '势能', unit: 'J' },
      { name: 'm', description: '质量', unit: 'kg' },
      { name: 'ℏ', description: '约化普朗克常数', unit: '1.055×10⁻³⁴ J·s' }
    ],
    conditions: '',
    notes: '量子力学的基本方程，描述微观粒子的运动',
    derivation: '薛定谔方程',
    related: ['univ_phy_quantum_001'],
    calculator: {
      inputs: [],
      output: 'psi',
      formula: () => '需要具体势能函数求解'
    }
  },
  // 大学物理公式 - 电学
  {
    id: 'univ_phy_electro_001',
    name: '麦克斯韦方程组 - 微分形式',
    category: '物理',
    subCategory: '电学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∇·E = ρ/ε₀, ∇·B = 0, ∇×E = -∂B/∂t, ∇×B = μ₀J + μ₀ε₀∂E/∂t',
    latex: '\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}',
    variables: [
      { name: 'E', description: '电场强度', unit: 'V/m' },
      { name: 'B', description: '磁感应强度', unit: 'T' },
      { name: 'ρ', description: '电荷密度', unit: 'C/m³' },
      { name: 'J', description: '电流密度', unit: 'A/m²' },
      { name: 'ε₀', description: '真空介电常数', unit: '8.85×10⁻¹² C²/(N·m²)' },
      { name: 'μ₀', description: '真空磁导率', unit: '4π×10⁻⁷ N/A²' }
    ],
    conditions: '真空中，适用于宏观电磁场',
    notes: '麦克斯韦方程组描述了电磁场的基本规律：1) 高斯定律（电场）：电场散度等于电荷密度除以介电常数；2) 高斯定律（磁场）：磁场散度为零，说明不存在磁单极子；3) 法拉第电磁感应定律：电场旋度等于负的磁场时间变化率；4) 安培环路定律（含修正项）：磁场旋度等于电流密度加上位移电流密度',
    derivation: '由库仑定律、安培定律、法拉第定律等实验定律总结，麦克斯韦添加了位移电流项',
    related: ['high_phy_021', 'high_phy_022'],
    calculator: {
      inputs: [],
      output: 'equations',
      formula: () => '理论方程组'
    }
  },
  {
    id: 'univ_phy_electro_002',
    name: '麦克斯韦方程组 - 积分形式',
    category: '物理',
    subCategory: '电学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∮E·dS = Q/ε₀, ∮B·dS = 0, ∮E·dl = -dΦB/dt, ∮B·dl = μ₀I + μ₀ε₀dΦE/dt',
    latex: '\\oint \\mathbf{E} \\cdot d\\mathbf{S} = \\frac{Q}{\\varepsilon_0}, \\quad \\oint \\mathbf{B} \\cdot d\\mathbf{S} = 0, \\quad \\oint \\mathbf{E} \\cdot d\\mathbf{l} = -\\frac{d\\Phi_B}{dt}, \\quad \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}',
    variables: [
      { name: 'E', description: '电场强度', unit: 'V/m' },
      { name: 'B', description: '磁感应强度', unit: 'T' },
      { name: 'Q', description: '闭合曲面内的总电荷', unit: 'C' },
      { name: 'I', description: '穿过闭合回路的电流', unit: 'A' },
      { name: 'ΦB', description: '磁通量', unit: 'Wb' },
      { name: 'ΦE', description: '电通量', unit: 'V·m' },
      { name: 'ε₀', description: '真空介电常数', unit: '8.85×10⁻¹² C²/(N·m²)' },
      { name: 'μ₀', description: '真空磁导率', unit: '4π×10⁻⁷ N/A²' }
    ],
    conditions: '真空中，适用于宏观电磁场',
    notes: '麦克斯韦方程组的积分形式：1) 高斯定律（电场）：通过闭合曲面的电通量等于曲面内电荷除以介电常数；2) 高斯定律（磁场）：通过闭合曲面的磁通量为零；3) 法拉第电磁感应定律：电场沿闭合回路的积分等于负的磁通量变化率；4) 安培环路定律（含修正项）：磁场沿闭合回路的积分等于电流加上位移电流',
    derivation: '由微分形式通过高斯定理和斯托克斯定理推导得出',
    related: ['high_phy_021', 'high_phy_022', 'univ_phy_electro_001'],
    calculator: {
      inputs: [],
      output: 'equations',
      formula: () => '理论方程组'
    }
  },
  // 大学物理公式 - 热力学
  {
    id: 'univ_phy_thermo_001',
    name: '热力学第一定律',
    category: '物理',
    subCategory: '热力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'ΔU = Q - W',
    latex: '\\Delta U = Q - W',
    variables: [
      { name: 'ΔU', description: '内能变化', unit: 'J' },
      { name: 'Q', description: '系统吸收的热量', unit: 'J' },
      { name: 'W', description: '系统对外做的功', unit: 'J' }
    ],
    conditions: '',
    notes: '能量守恒定律在热力学中的表达',
    derivation: '热力学第一定律',
    related: ['chemistry_001'],
    calculator: {
      inputs: ['Q', 'W'],
      output: 'deltaU',
      formula: (Q, W) => Q - W
    }
  },
  {
    id: 'univ_phy_thermo_003',
    name: '熵的定义',
    category: '物理',
    subCategory: '热力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'dS = dQ/T（可逆过程）',
    latex: 'dS = \\frac{dQ}{T} \\quad \\text{（可逆过程）}',
    variables: [
      { name: 'S', description: '熵', unit: 'J/K' },
      { name: 'Q', description: '热量', unit: 'J' },
      { name: 'T', description: '温度', unit: 'K' }
    ],
    conditions: '可逆过程',
    notes: '熵是系统无序度的量度',
    derivation: '热力学第二定律',
    related: ['univ_phy_thermo_001'],
    calculator: {
      inputs: ['dQ', 'T'],
      output: 'dS',
      formula: (dQ, T) => dQ / T
    }
  },
  {
    id: 'univ_phy_thermo_004',
    name: '卡诺效率',
    category: '物理',
    subCategory: '热力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'η = 1 - T₂/T₁',
    latex: '\\eta = 1 - \\frac{T_2}{T_1}',
    variables: [
      { name: 'η', description: '热机效率', unit: '' },
      { name: 'T₁', description: '高温热源温度', unit: 'K' },
      { name: 'T₂', description: '低温热源温度', unit: 'K' }
    ],
    conditions: '卡诺循环',
    notes: '理想热机的最大效率',
    derivation: '卡诺定理',
    related: ['univ_phy_thermo_003'],
    calculator: {
      inputs: ['T1', 'T2'],
      output: 'eta',
      formula: (T1, T2) => 1 - T2 / T1
    }
  },
  // 大学化学公式 - 热力学
  {
    id: 'univ_chem_thermo_001',
    name: '吉布斯自由能',
    category: '化学',
    subCategory: '物理化学-热力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'ΔG = ΔH - TΔS',
    latex: '\\Delta G = \\Delta H - T\\Delta S',
    variables: [
      { name: 'ΔG', description: '吉布斯自由能变化', unit: 'J/mol' },
      { name: 'ΔH', description: '焓变', unit: 'J/mol' },
      { name: 'T', description: '温度', unit: 'K' },
      { name: 'ΔS', description: '熵变', unit: 'J/(mol·K)' }
    ],
    conditions: '',
    notes: 'ΔG < 0时反应自发进行',
    derivation: '由热力学函数关系推导',
    related: ['univ_chem_thermo_002'],
    calculator: {
      inputs: ['deltaH', 'T', 'deltaS'],
      output: 'deltaG',
      formula: (deltaH, T, deltaS) => deltaH - T * deltaS
    }
  },
  {
    id: 'univ_chem_thermo_002',
    name: '范特霍夫方程',
    category: '化学',
    subCategory: '物理化学-热力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'ln(K₂/K₁) = (ΔH°/R)(1/T₁ - 1/T₂)',
    latex: '\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)',
    variables: [
      { name: 'K₁, K₂', description: '不同温度下的平衡常数', unit: '' },
      { name: 'ΔH°', description: '标准焓变', unit: 'J/mol' },
      { name: 'T₁, T₂', description: '温度', unit: 'K' },
      { name: 'R', description: '气体常数', unit: '8.314 J/(mol·K)' }
    ],
    conditions: '',
    notes: '描述平衡常数与温度的关系',
    derivation: '由热力学关系推导',
    related: ['univ_chem_thermo_001', 'high_chem_005'],
    calculator: {
      inputs: ['K1', 'T1', 'T2', 'deltaH'],
      output: 'K2',
      formula: (K1, T1, T2, deltaH) => {
        const R = 8.314;
        return K1 * Math.exp((deltaH / R) * (1 / T1 - 1 / T2));
      }
    }
  },
  {
    id: 'univ_chem_thermo_003',
    name: '克劳修斯-克拉珀龙方程',
    category: '化学',
    subCategory: '物理化学-热力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'ln(P₂/P₁) = (ΔHvap/R)(1/T₁ - 1/T₂)',
    latex: '\\ln\\left(\\frac{P_2}{P_1}\\right) = \\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)',
    variables: [
      { name: 'P₁, P₂', description: '不同温度下的蒸气压', unit: 'Pa' },
      { name: 'ΔHvap', description: '蒸发热', unit: 'J/mol' },
      { name: 'T₁, T₂', description: '温度', unit: 'K' },
      { name: 'R', description: '气体常数', unit: '8.314 J/(mol·K)' }
    ],
    conditions: '液-气平衡',
    notes: '描述蒸气压与温度的关系',
    derivation: '由热力学关系推导',
    related: ['univ_chem_thermo_002'],
    calculator: {
      inputs: ['P1', 'T1', 'T2', 'deltaHvap'],
      output: 'P2',
      formula: (P1, T1, T2, deltaHvap) => {
        const R = 8.314;
        return P1 * Math.exp((deltaHvap / R) * (1 / T1 - 1 / T2));
      }
    }
  },
  // 大学化学公式 - 动力学
  {
    id: 'univ_chem_kinetics_001',
    name: '一级反应速率方程',
    category: '化学',
    subCategory: '物理化学-动力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'ln([A]₀/[A]) = kt',
    latex: '\\ln\\left(\\frac{[A]_0}{[A]}\\right) = kt',
    variables: [
      { name: '[A]₀', description: '初始浓度', unit: 'mol/L' },
      { name: '[A]', description: 't时刻浓度', unit: 'mol/L' },
      { name: 'k', description: '速率常数', unit: 's⁻¹' },
      { name: 't', description: '时间', unit: 's' }
    ],
    conditions: '一级反应',
    notes: '一级反应的积分速率方程',
    derivation: '由速率方程积分',
    related: ['high_chem_004'],
    calculator: {
      inputs: ['A0', 'A', 'k'],
      output: 't',
      formula: (A0, A, k) => Math.log(A0 / A) / k
    }
  },
  {
    id: 'univ_chem_kinetics_002',
    name: '二级反应速率方程',
    category: '化学',
    subCategory: '物理化学-动力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '1/[A] - 1/[A]₀ = kt',
    latex: '\\frac{1}{[A]} - \\frac{1}{[A]_0} = kt',
    variables: [
      { name: '[A]₀', description: '初始浓度', unit: 'mol/L' },
      { name: '[A]', description: 't时刻浓度', unit: 'mol/L' },
      { name: 'k', description: '速率常数', unit: 'L/(mol·s)' },
      { name: 't', description: '时间', unit: 's' }
    ],
    conditions: '二级反应',
    notes: '二级反应的积分速率方程',
    derivation: '由速率方程积分',
    related: ['univ_chem_kinetics_001'],
    calculator: {
      inputs: ['A0', 'A', 'k'],
      output: 't',
      formula: (A0, A, k) => (1 / A - 1 / A0) / k
    }
  },
  {
    id: 'univ_chem_kinetics_003',
    name: '半衰期',
    category: '化学',
    subCategory: '物理化学-动力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 't₁/₂ = ln2/k（一级反应）, t₁/₂ = 1/(k[A]₀)（二级反应）',
    latex: 't_{1/2} = \\frac{\\ln 2}{k} \\text{（一级反应）}, \\quad t_{1/2} = \\frac{1}{k[A]_0} \\text{（二级反应）}',
    variables: [
      { name: 't₁/₂', description: '半衰期', unit: 's' },
      { name: 'k', description: '速率常数', unit: '' },
      { name: '[A]₀', description: '初始浓度', unit: 'mol/L' }
    ],
    conditions: '',
    notes: '反应物浓度减半所需的时间',
    derivation: '由速率方程推导',
    related: ['univ_chem_kinetics_001', 'univ_chem_kinetics_002'],
    calculator: {
      inputs: ['k', 'order', 'A0'],
      output: 't_half',
      formula: (k, order, A0) => {
        if (order === 1) return Math.log(2) / k;
        if (order === 2) return 1 / (k * A0);
        return null;
      }
    }
  },
  // 统计公式补充
  {
    id: 'stat_002',
    name: '方差公式',
    category: '统计',
    subCategory: '描述统计',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'σ² = Σ(xᵢ - x̄)² / n',
    latex: '\\sigma^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n}',
    variables: [
      { name: 'σ²', description: '方差', unit: '' },
      { name: 'xᵢ', description: '第i个数据值', unit: '' },
      { name: 'x̄', description: '平均值', unit: '' },
      { name: 'n', description: '数据个数', unit: '' }
    ],
    conditions: 'n > 0',
    notes: '衡量数据离散程度的指标，方差越大，数据越分散',
    derivation: '统计定义',
    related: ['stat_001', 'stat_003'],
    calculator: {
      inputs: ['values'],
      output: 'variance',
      formula: (values) => {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        return variance;
      }
    }
  },
  {
    id: 'stat_003',
    name: '标准差公式',
    category: '统计',
    subCategory: '描述统计',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'σ = √(Σ(xᵢ - x̄)² / n)',
    latex: '\\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n}}',
    variables: [
      { name: 'σ', description: '标准差', unit: '' },
      { name: 'xᵢ', description: '第i个数据值', unit: '' },
      { name: 'x̄', description: '平均值', unit: '' },
      { name: 'n', description: '数据个数', unit: '' }
    ],
    conditions: 'n > 0',
    notes: '方差的平方根，与原始数据单位相同',
    derivation: '由方差公式推导',
    related: ['stat_001', 'stat_002'],
    calculator: {
      inputs: ['values'],
      output: 'stdDev',
      formula: (values) => {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        return Math.sqrt(variance);
      }
    }
  },
  {
    id: 'stat_004',
    name: '样本方差公式',
    category: '统计',
    subCategory: '描述统计',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 's² = Σ(xᵢ - x̄)² / (n-1)',
    latex: 's^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}',
    variables: [
      { name: 's²', description: '样本方差', unit: '' },
      { name: 'xᵢ', description: '第i个数据值', unit: '' },
      { name: 'x̄', description: '样本平均值', unit: '' },
      { name: 'n', description: '样本容量', unit: '' }
    ],
    conditions: 'n > 1',
    notes: '使用n-1作为分母，是无偏估计量',
    derivation: '统计理论',
    related: ['stat_002', 'stat_005'],
    calculator: {
      inputs: ['values'],
      output: 'sampleVariance',
      formula: (values) => {
        if (values.length <= 1) return null;
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (values.length - 1);
        return variance;
      }
    }
  },
  {
    id: 'stat_005',
    name: '样本标准差公式',
    category: '统计',
    subCategory: '描述统计',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 's = √(Σ(xᵢ - x̄)² / (n-1))',
    latex: 's = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}}',
    variables: [
      { name: 's', description: '样本标准差', unit: '' },
      { name: 'xᵢ', description: '第i个数据值', unit: '' },
      { name: 'x̄', description: '样本平均值', unit: '' },
      { name: 'n', description: '样本容量', unit: '' }
    ],
    conditions: 'n > 1',
    notes: '样本方差的平方根',
    derivation: '由样本方差公式推导',
    related: ['stat_003', 'stat_004'],
    calculator: {
      inputs: ['values'],
      output: 'sampleStdDev',
      formula: (values) => {
        if (values.length <= 1) return null;
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (values.length - 1);
        return Math.sqrt(variance);
      }
    }
  },
  {
    id: 'stat_006',
    name: '相关系数公式（皮尔逊）',
    category: '统计',
    subCategory: '相关分析',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'r = Σ(xᵢ-x̄)(yᵢ-ȳ) / √(Σ(xᵢ-x̄)²Σ(yᵢ-ȳ)²)',
    latex: 'r = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2\\sum(y_i-\\bar{y})^2}}',
    variables: [
      { name: 'r', description: '相关系数', unit: '' },
      { name: 'xᵢ, yᵢ', description: '第i对数据值', unit: '' },
      { name: 'x̄, ȳ', description: 'x和y的平均值', unit: '' }
    ],
    conditions: '-1 ≤ r ≤ 1',
    notes: '衡量两个变量线性相关程度的指标，r接近±1表示强相关，接近0表示弱相关',
    derivation: '统计理论',
    related: ['stat_001'],
    calculator: {
      inputs: ['xValues', 'yValues'],
      output: 'correlation',
      formula: (xValues, yValues) => {
        if (xValues.length !== yValues.length || xValues.length === 0) return null;
        const xMean = xValues.reduce((a, b) => a + b, 0) / xValues.length;
        const yMean = yValues.reduce((a, b) => a + b, 0) / yValues.length;
        let numerator = 0, xSumSq = 0, ySumSq = 0;
        for (let i = 0; i < xValues.length; i++) {
          const xDiff = xValues[i] - xMean;
          const yDiff = yValues[i] - yMean;
          numerator += xDiff * yDiff;
          xSumSq += xDiff * xDiff;
          ySumSq += yDiff * yDiff;
        }
        return numerator / Math.sqrt(xSumSq * ySumSq);
      }
    }
  },
  {
    id: 'stat_007',
    name: '线性回归方程',
    category: '统计',
    subCategory: '回归分析',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'y = a + bx, 其中 b = r(sᵧ/sₓ), a = ȳ - bx̄',
    latex: 'y = a + bx, \\quad b = r\\frac{s_y}{s_x}, \\quad a = \\bar{y} - b\\bar{x}',
    variables: [
      { name: 'y', description: '因变量', unit: '' },
      { name: 'x', description: '自变量', unit: '' },
      { name: 'a', description: '截距', unit: '' },
      { name: 'b', description: '斜率', unit: '' },
      { name: 'r', description: '相关系数', unit: '' },
      { name: 'sₓ, sᵧ', description: 'x和y的标准差', unit: '' }
    ],
    conditions: '',
    notes: '用于预测因变量y与自变量x的线性关系',
    derivation: '最小二乘法',
    related: ['stat_006'],
    calculator: {
      inputs: ['xValues', 'yValues'],
      output: 'regression',
      formula: (xValues, yValues) => {
        if (xValues.length !== yValues.length || xValues.length === 0) return null;
        const n = xValues.length;
        const xMean = xValues.reduce((a, b) => a + b, 0) / n;
        const yMean = yValues.reduce((a, b) => a + b, 0) / n;
        let sumXY = 0, sumX2 = 0;
        for (let i = 0; i < n; i++) {
          sumXY += (xValues[i] - xMean) * (yValues[i] - yMean);
          sumX2 += Math.pow(xValues[i] - xMean, 2);
        }
        const b = sumXY / sumX2;
        const a = yMean - b * xMean;
        return { a, b };
      }
    }
  },
  {
    id: 'stat_008',
    name: '正态分布概率密度函数',
    category: '统计',
    subCategory: '概率分布',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'f(x) = (1/σ√(2π))e^(-(x-μ)²/(2σ²))',
    latex: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}',
    variables: [
      { name: 'f(x)', description: '概率密度函数', unit: '' },
      { name: 'μ', description: '均值', unit: '' },
      { name: 'σ', description: '标准差', unit: '' },
      { name: 'x', description: '随机变量值', unit: '' }
    ],
    conditions: 'σ > 0',
    notes: '描述正态分布的概率密度，钟形曲线',
    derivation: '概率论',
    related: ['stat_003'],
    calculator: {
      inputs: ['x', 'mu', 'sigma'],
      output: 'density',
      formula: (x, mu, sigma) => {
        const coefficient = 1 / (sigma * Math.sqrt(2 * Math.PI));
        const exponent = -Math.pow(x - mu, 2) / (2 * Math.pow(sigma, 2));
        return coefficient * Math.exp(exponent);
      }
    }
  },
  {
    id: 'stat_009',
    name: 'Z分数（标准化）',
    category: '统计',
    subCategory: '描述统计',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'z = (x - μ) / σ',
    latex: 'z = \\frac{x - \\mu}{\\sigma}',
    variables: [
      { name: 'z', description: 'Z分数', unit: '' },
      { name: 'x', description: '原始数据值', unit: '' },
      { name: 'μ', description: '均值', unit: '' },
      { name: 'σ', description: '标准差', unit: '' }
    ],
    conditions: 'σ > 0',
    notes: '将数据标准化为标准正态分布，z=0表示等于均值，z=±1表示距离均值1个标准差',
    derivation: '统计定义',
    related: ['stat_003', 'stat_008'],
    calculator: {
      inputs: ['x', 'mu', 'sigma'],
      output: 'z',
      formula: (x, mu, sigma) => (x - mu) / sigma
    }
  },
  {
    id: 'stat_010',
    name: 't检验统计量',
    category: '统计',
    subCategory: '假设检验',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 't = (x̄ - μ₀) / (s/√n)',
    latex: 't = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}',
    variables: [
      { name: 't', description: 't统计量', unit: '' },
      { name: 'x̄', description: '样本均值', unit: '' },
      { name: 'μ₀', description: '假设的总体均值', unit: '' },
      { name: 's', description: '样本标准差', unit: '' },
      { name: 'n', description: '样本容量', unit: '' }
    ],
    conditions: 'n > 1, s > 0',
    notes: '用于检验样本均值是否显著不同于假设的总体均值',
    derivation: '统计理论',
    related: ['stat_001', 'stat_005'],
    calculator: {
      inputs: ['xBar', 'mu0', 's', 'n'],
      output: 't',
      formula: (xBar, mu0, s, n) => (xBar - mu0) / (s / Math.sqrt(n))
    }
  },
  // 工程公式
  {
    id: 'eng_001',
    name: '应力公式',
    category: '工程',
    subCategory: '材料力学',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'σ = F / A',
    latex: '\\sigma = \\frac{F}{A}',
    variables: [
      { name: 'σ', description: '应力', unit: 'Pa (帕斯卡)' },
      { name: 'F', description: '作用力', unit: 'N (牛顿)' },
      { name: 'A', description: '横截面积', unit: 'm²' }
    ],
    conditions: 'A > 0',
    notes: '单位面积上的作用力，用于分析材料的受力情况',
    derivation: '材料力学定义',
    related: ['eng_002'],
    calculator: {
      inputs: ['F', 'A'],
      output: 'sigma',
      formula: (F, A) => F / A
    }
  },
  {
    id: 'eng_002',
    name: '应变公式',
    category: '工程',
    subCategory: '材料力学',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'ε = ΔL / L₀',
    latex: '\\varepsilon = \\frac{\\Delta L}{L_0}',
    variables: [
      { name: 'ε', description: '应变', unit: '' },
      { name: 'ΔL', description: '长度变化量', unit: 'm' },
      { name: 'L₀', description: '原始长度', unit: 'm' }
    ],
    conditions: 'L₀ > 0',
    notes: '材料变形程度，无量纲',
    derivation: '材料力学定义',
    related: ['eng_001', 'eng_003'],
    calculator: {
      inputs: ['deltaL', 'L0'],
      output: 'epsilon',
      formula: (deltaL, L0) => deltaL / L0
    }
  },
  {
    id: 'eng_003',
    name: '弹性模量（杨氏模量）',
    category: '工程',
    subCategory: '材料力学',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'E = σ / ε',
    latex: 'E = \\frac{\\sigma}{\\varepsilon}',
    variables: [
      { name: 'E', description: '弹性模量', unit: 'Pa' },
      { name: 'σ', description: '应力', unit: 'Pa' },
      { name: 'ε', description: '应变', unit: '' }
    ],
    conditions: 'ε ≠ 0',
    notes: '衡量材料抵抗弹性变形的能力，E越大材料越刚硬',
    derivation: '胡克定律',
    related: ['eng_001', 'eng_002'],
    calculator: {
      inputs: ['sigma', 'epsilon'],
      output: 'E',
      formula: (sigma, epsilon) => sigma / epsilon
    }
  },
  {
    id: 'eng_004',
    name: '梁的弯曲应力',
    category: '工程',
    subCategory: '结构工程',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'σ = My / I',
    latex: '\\sigma = \\frac{My}{I}',
    variables: [
      { name: 'σ', description: '弯曲应力', unit: 'Pa' },
      { name: 'M', description: '弯矩', unit: 'N·m' },
      { name: 'y', description: '距离中性轴的距离', unit: 'm' },
      { name: 'I', description: '惯性矩', unit: 'm⁴' }
    ],
    conditions: 'I > 0',
    notes: '用于计算梁在弯曲载荷下的应力分布',
    derivation: '材料力学理论',
    related: ['eng_001'],
    calculator: {
      inputs: ['M', 'y', 'I'],
      output: 'sigma',
      formula: (M, y, I) => (M * y) / I
    }
  },
  {
    id: 'eng_005',
    name: '矩形截面惯性矩',
    category: '工程',
    subCategory: '结构工程',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'I = bh³ / 12',
    latex: 'I = \\frac{bh^3}{12}',
    variables: [
      { name: 'I', description: '惯性矩', unit: 'm⁴' },
      { name: 'b', description: '截面宽度', unit: 'm' },
      { name: 'h', description: '截面高度', unit: 'm' }
    ],
    conditions: 'b > 0, h > 0',
    notes: '矩形截面绕中性轴的惯性矩',
    derivation: '积分计算',
    related: ['eng_004'],
    calculator: {
      inputs: ['b', 'h'],
      output: 'I',
      formula: (b, h) => (b * Math.pow(h, 3)) / 12
    }
  },
  {
    id: 'eng_006',
    name: '圆形截面惯性矩',
    category: '工程',
    subCategory: '结构工程',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'I = πd⁴ / 64',
    latex: 'I = \\frac{\\pi d^4}{64}',
    variables: [
      { name: 'I', description: '惯性矩', unit: 'm⁴' },
      { name: 'd', description: '直径', unit: 'm' }
    ],
    conditions: 'd > 0',
    notes: '圆形截面绕中性轴的惯性矩',
    derivation: '积分计算',
    related: ['eng_004'],
    calculator: {
      inputs: ['d'],
      output: 'I',
      formula: (d) => (Math.PI * Math.pow(d, 4)) / 64
    }
  },
  {
    id: 'eng_007',
    name: '欧拉临界载荷',
    category: '工程',
    subCategory: '结构工程',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'Pcr = π²EI / L²',
    latex: 'P_{cr} = \\frac{\\pi^2 EI}{L^2}',
    variables: [
      { name: 'Pcr', description: '临界载荷', unit: 'N' },
      { name: 'E', description: '弹性模量', unit: 'Pa' },
      { name: 'I', description: '惯性矩', unit: 'm⁴' },
      { name: 'L', description: '柱的长度', unit: 'm' }
    ],
    conditions: 'L > 0, E > 0, I > 0',
    notes: '细长柱发生屈曲的临界载荷，适用于两端铰接',
    derivation: '弹性稳定性理论',
    related: ['eng_003', 'eng_004'],
    calculator: {
      inputs: ['E', 'I', 'L'],
      output: 'Pcr',
      formula: (E, I, L) => (Math.PI * Math.PI * E * I) / (L * L)
    }
  },
  {
    id: 'eng_008',
    name: '伯努利方程',
    category: '工程',
    subCategory: '流体力学',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'P + (1/2)ρv² + ρgh = 常数',
    latex: 'P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{常数}',
    variables: [
      { name: 'P', description: '压力', unit: 'Pa' },
      { name: 'ρ', description: '流体密度', unit: 'kg/m³' },
      { name: 'v', description: '流速', unit: 'm/s' },
      { name: 'g', description: '重力加速度', unit: '9.8 m/s²' },
      { name: 'h', description: '高度', unit: 'm' }
    ],
    conditions: '理想流体，定常流动',
    notes: '描述理想流体在流动过程中能量守恒',
    derivation: '流体力学理论',
    related: [],
    calculator: {
      inputs: ['P1', 'rho', 'v1', 'h1', 'v2', 'h2'],
      output: 'P2',
      formula: (P1, rho, v1, h1, v2, h2) => {
        const g = 9.8;
        return P1 + 0.5 * rho * (v1 * v1 - v2 * v2) + rho * g * (h1 - h2);
      }
    }
  },
  {
    id: 'eng_009',
    name: '雷诺数',
    category: '工程',
    subCategory: '流体力学',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'Re = ρvD / μ',
    latex: 'Re = \\frac{\\rho v D}{\\mu}',
    variables: [
      { name: 'Re', description: '雷诺数', unit: '' },
      { name: 'ρ', description: '流体密度', unit: 'kg/m³' },
      { name: 'v', description: '流速', unit: 'm/s' },
      { name: 'D', description: '特征长度（如管径）', unit: 'm' },
      { name: 'μ', description: '动力粘度', unit: 'Pa·s' }
    ],
    conditions: 'μ > 0',
    notes: '判断流动状态：Re < 2300为层流，Re > 4000为湍流',
    derivation: '量纲分析',
    related: ['eng_008'],
    calculator: {
      inputs: ['rho', 'v', 'D', 'mu'],
      output: 'Re',
      formula: (rho, v, D, mu) => (rho * v * D) / mu
    }
  },
  {
    id: 'eng_010',
    name: '传热速率（对流）',
    category: '工程',
    subCategory: '传热学',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'Q = hA(Ts - T∞)',
    latex: 'Q = hA(T_s - T_\\infty)',
    variables: [
      { name: 'Q', description: '传热速率', unit: 'W' },
      { name: 'h', description: '对流传热系数', unit: 'W/(m²·K)' },
      { name: 'A', description: '传热面积', unit: 'm²' },
      { name: 'Ts', description: '表面温度', unit: 'K' },
      { name: 'T∞', description: '流体温度', unit: 'K' }
    ],
    conditions: 'A > 0',
    notes: '牛顿冷却定律，描述对流传热',
    derivation: '传热学理论',
    related: [],
    calculator: {
      inputs: ['h', 'A', 'Ts', 'Tinf'],
      output: 'Q',
      formula: (h, A, Ts, Tinf) => h * A * (Ts - Tinf)
    }
  },
  {
    id: 'eng_011',
    name: '传热速率（传导）',
    category: '工程',
    subCategory: '传热学',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'Q = kA(T₁ - T₂) / L',
    latex: 'Q = \\frac{kA(T_1 - T_2)}{L}',
    variables: [
      { name: 'Q', description: '传热速率', unit: 'W' },
      { name: 'k', description: '热导率', unit: 'W/(m·K)' },
      { name: 'A', description: '传热面积', unit: 'm²' },
      { name: 'T₁, T₂', description: '两侧温度', unit: 'K' },
      { name: 'L', description: '材料厚度', unit: 'm' }
    ],
    conditions: 'L > 0, A > 0',
    notes: '傅里叶导热定律，描述热传导',
    derivation: '传热学理论',
    related: ['eng_010'],
    calculator: {
      inputs: ['k', 'A', 'T1', 'T2', 'L'],
      output: 'Q',
      formula: (k, A, T1, T2, L) => (k * A * (T1 - T2)) / L
    }
  },
  {
    id: 'eng_013',
    name: '效率公式',
    category: '工程',
    subCategory: '机械工程',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'η = (输出功率 / 输入功率) × 100%',
    latex: '\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\%',
    variables: [
      { name: 'η', description: '效率', unit: '%' },
      { name: 'Pout', description: '输出功率', unit: 'W' },
      { name: 'Pin', description: '输入功率', unit: 'W' }
    ],
    conditions: 'Pin > 0',
    notes: '衡量能量转换效率，η ≤ 100%',
    derivation: '工程定义',
    related: ['middle_phy_006'],
    calculator: {
      inputs: ['Pout', 'Pin'],
      output: 'eta',
      formula: (Pout, Pin) => (Pout / Pin) * 100
    }
  },
  {
    id: 'eng_014',
    name: '扭矩公式',
    category: '工程',
    subCategory: '机械工程',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'T = Fr',
    latex: 'T = Fr',
    variables: [
      { name: 'T', description: '扭矩', unit: 'N·m' },
      { name: 'F', description: '切向力', unit: 'N' },
      { name: 'r', description: '力臂（半径）', unit: 'm' }
    ],
    conditions: '',
    notes: '力对转轴的转动效应',
    derivation: '力学定义',
    related: ['middle_phy_006'],
    calculator: {
      inputs: ['F', 'r'],
      output: 'T',
      formula: (F, r) => F * r
    }
  },
  {
    id: 'eng_015',
    name: '齿轮传动比',
    category: '工程',
    subCategory: '机械工程',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'i = n₁ / n₂ = z₂ / z₁',
    latex: 'i = \\frac{n_1}{n_2} = \\frac{z_2}{z_1}',
    variables: [
      { name: 'i', description: '传动比', unit: '' },
      { name: 'n₁, n₂', description: '两齿轮转速', unit: 'rpm' },
      { name: 'z₁, z₂', description: '两齿轮齿数', unit: '' }
    ],
    conditions: 'n₂ ≠ 0, z₁ ≠ 0',
    notes: '主动轮与从动轮的转速比或齿数反比',
    derivation: '机械原理',
    related: [],
    calculator: {
      inputs: ['z1', 'z2'],
      output: 'i',
      formula: (z1, z2) => z2 / z1
    }
  },
  // 金融公式
  {
    id: 'finance_001',
    name: '复利终值公式',
    category: '金融',
    subCategory: '复利计算',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'FV = PV(1 + r)ⁿ',
    latex: 'FV = PV(1 + r)^n',
    variables: [
      { name: 'FV', description: '终值（未来值）', unit: '元' },
      { name: 'PV', description: '现值', unit: '元' },
      { name: 'r', description: '利率（年化）', unit: '' },
      { name: 'n', description: '期数（年）', unit: '' }
    ],
    conditions: 'r ≥ 0, n ≥ 0',
    notes: '计算本金按复利增长后的未来价值',
    derivation: '金融数学',
    related: ['finance_002'],
    calculator: {
      inputs: ['PV', 'r', 'n'],
      output: 'FV',
      formula: (PV, r, n) => PV * Math.pow(1 + r, n)
    }
  },
  {
    id: 'finance_002',
    name: '复利现值公式',
    category: '金融',
    subCategory: '复利计算',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'PV = FV / (1 + r)ⁿ',
    latex: 'PV = \\frac{FV}{(1 + r)^n}',
    variables: [
      { name: 'PV', description: '现值', unit: '元' },
      { name: 'FV', description: '终值（未来值）', unit: '元' },
      { name: 'r', description: '利率（年化）', unit: '' },
      { name: 'n', description: '期数（年）', unit: '' }
    ],
    conditions: 'r ≥ 0, n ≥ 0',
    notes: '将未来价值折现到现在的价值',
    derivation: '由复利终值公式推导',
    related: ['finance_001'],
    calculator: {
      inputs: ['FV', 'r', 'n'],
      output: 'PV',
      formula: (FV, r, n) => FV / Math.pow(1 + r, n)
    }
  },
  {
    id: 'finance_003',
    name: '普通年金终值',
    category: '金融',
    subCategory: '年金计算',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'FVA = A[(1+r)ⁿ - 1] / r',
    latex: 'FVA = A\\frac{(1+r)^n - 1}{r}',
    variables: [
      { name: 'FVA', description: '年金终值', unit: '元' },
      { name: 'A', description: '每期支付金额', unit: '元' },
      { name: 'r', description: '利率（每期）', unit: '' },
      { name: 'n', description: '期数', unit: '' }
    ],
    conditions: 'r > 0, n > 0',
    notes: '每期期末等额支付的未来价值总和',
    derivation: '等比数列求和',
    related: ['finance_001', 'finance_004'],
    calculator: {
      inputs: ['A', 'r', 'n'],
      output: 'FVA',
      formula: (A, r, n) => A * (Math.pow(1 + r, n) - 1) / r
    }
  },
  {
    id: 'finance_004',
    name: '普通年金现值',
    category: '金融',
    subCategory: '年金计算',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'PVA = A[1 - (1+r)⁻ⁿ] / r',
    latex: 'PVA = A\\frac{1 - (1+r)^{-n}}{r}',
    variables: [
      { name: 'PVA', description: '年金现值', unit: '元' },
      { name: 'A', description: '每期支付金额', unit: '元' },
      { name: 'r', description: '利率（每期）', unit: '' },
      { name: 'n', description: '期数', unit: '' }
    ],
    conditions: 'r > 0, n > 0',
    notes: '每期期末等额支付的现值总和',
    derivation: '等比数列求和',
    related: ['finance_002', 'finance_003'],
    calculator: {
      inputs: ['A', 'r', 'n'],
      output: 'PVA',
      formula: (A, r, n) => A * (1 - Math.pow(1 + r, -n)) / r
    }
  },
  {
    id: 'finance_005',
    name: '先付年金终值',
    category: '金融',
    subCategory: '年金计算',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'FVA = A[(1+r)ⁿ - 1](1+r) / r',
    latex: 'FVA = A\\frac{(1+r)^n - 1}{r}(1+r)',
    variables: [
      { name: 'FVA', description: '年金终值', unit: '元' },
      { name: 'A', description: '每期支付金额', unit: '元' },
      { name: 'r', description: '利率（每期）', unit: '' },
      { name: 'n', description: '期数', unit: '' }
    ],
    conditions: 'r > 0, n > 0',
    notes: '每期期初等额支付的未来价值总和',
    derivation: '由普通年金终值推导',
    related: ['finance_003'],
    calculator: {
      inputs: ['A', 'r', 'n'],
      output: 'FVA',
      formula: (A, r, n) => A * (Math.pow(1 + r, n) - 1) * (1 + r) / r
    }
  },
  {
    id: 'finance_006',
    name: '先付年金现值',
    category: '金融',
    subCategory: '年金计算',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'PVA = A[1 - (1+r)⁻ⁿ](1+r) / r',
    latex: 'PVA = A\\frac{1 - (1+r)^{-n}}{r}(1+r)',
    variables: [
      { name: 'PVA', description: '年金现值', unit: '元' },
      { name: 'A', description: '每期支付金额', unit: '元' },
      { name: 'r', description: '利率（每期）', unit: '' },
      { name: 'n', description: '期数', unit: '' }
    ],
    conditions: 'r > 0, n > 0',
    notes: '每期期初等额支付的现值总和',
    derivation: '由普通年金现值推导',
    related: ['finance_004'],
    calculator: {
      inputs: ['A', 'r', 'n'],
      output: 'PVA',
      formula: (A, r, n) => A * (1 - Math.pow(1 + r, -n)) * (1 + r) / r
    }
  },
  {
    id: 'finance_007',
    name: '投资回报率（ROI）',
    category: '金融',
    subCategory: '投资分析',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'ROI = (收益 - 成本) / 成本 × 100%',
    latex: 'ROI = \\frac{\\text{收益} - \\text{成本}}{\\text{成本}} \\times 100\\%',
    variables: [
      { name: 'ROI', description: '投资回报率', unit: '%' },
      { name: '收益', description: '投资获得的收益', unit: '元' },
      { name: '成本', description: '投资成本', unit: '元' }
    ],
    conditions: '成本 > 0',
    notes: '衡量投资效率的指标，ROI越高表示投资效益越好',
    derivation: '金融定义',
    related: ['finance_008'],
    calculator: {
      inputs: ['profit', 'cost'],
      output: 'ROI',
      formula: (profit, cost) => ((profit - cost) / cost) * 100
    }
  },
  {
    id: 'finance_008',
    name: '年化收益率',
    category: '金融',
    subCategory: '投资分析',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: '年化收益率 = [(终值/现值)^(1/n) - 1] × 100%',
    latex: '\\text{年化收益率} = \\left[\\left(\\frac{FV}{PV}\\right)^{1/n} - 1\\right] \\times 100\\%',
    variables: [
      { name: 'FV', description: '终值', unit: '元' },
      { name: 'PV', description: '现值', unit: '元' },
      { name: 'n', description: '投资年数', unit: '年' }
    ],
    conditions: 'PV > 0, n > 0',
    notes: '将多期投资收益率转换为年化收益率，便于比较',
    derivation: '由复利公式推导',
    related: ['finance_001', 'finance_007'],
    calculator: {
      inputs: ['FV', 'PV', 'n'],
      output: 'annualReturn',
      formula: (FV, PV, n) => (Math.pow(FV / PV, 1 / n) - 1) * 100
    }
  },
  {
    id: 'finance_009',
    name: '债券价格公式',
    category: '金融',
    subCategory: '债券定价',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'P = Σ[C/(1+r)ᵗ] + F/(1+r)ⁿ',
    latex: 'P = \\sum_{t=1}^{n}\\frac{C}{(1+r)^t} + \\frac{F}{(1+r)^n}',
    variables: [
      { name: 'P', description: '债券价格', unit: '元' },
      { name: 'C', description: '每期利息（票息）', unit: '元' },
      { name: 'r', description: '市场利率（折现率）', unit: '' },
      { name: 'F', description: '面值（本金）', unit: '元' },
      { name: 'n', description: '到期期数', unit: '' }
    ],
    conditions: 'r > 0, n > 0',
    notes: '债券价格等于未来现金流（利息和本金）的现值之和',
    derivation: '现值理论',
    related: ['finance_002', 'finance_004'],
    calculator: {
      inputs: ['C', 'r', 'F', 'n'],
      output: 'P',
      formula: (C, r, F, n) => {
        let price = 0;
        for (let t = 1; t <= n; t++) {
          price += C / Math.pow(1 + r, t);
        }
        price += F / Math.pow(1 + r, n);
        return price;
      }
    }
  },
  {
    id: 'finance_010',
    name: '债券到期收益率（YTM）',
    category: '金融',
    subCategory: '债券定价',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'P = Σ[C/(1+YTM)ᵗ] + F/(1+YTM)ⁿ',
    latex: 'P = \\sum_{t=1}^{n}\\frac{C}{(1+YTM)^t} + \\frac{F}{(1+YTM)^n}',
    variables: [
      { name: 'YTM', description: '到期收益率', unit: '' },
      { name: 'P', description: '债券当前价格', unit: '元' },
      { name: 'C', description: '每期利息', unit: '元' },
      { name: 'F', description: '面值', unit: '元' },
      { name: 'n', description: '到期期数', unit: '' }
    ],
    conditions: 'P > 0, n > 0',
    notes: '使债券价格等于未来现金流现值的折现率，需用迭代法求解',
    derivation: '由债券价格公式推导',
    related: ['finance_009'],
    calculator: {
      inputs: ['P', 'C', 'F', 'n'],
      output: 'YTM',
      formula: (P, C, F, n) => {
        // 简化计算：使用近似公式
        const annualCoupon = C * n;
        const avgPrice = (P + F) / 2;
        return ((annualCoupon + (F - P) / n) / avgPrice);
      }
    }
  },
  {
    id: 'finance_011',
    name: '净现值（NPV）',
    category: '金融',
    subCategory: '投资分析',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'NPV = Σ[CFₜ/(1+r)ᵗ] - I₀',
    latex: 'NPV = \\sum_{t=0}^{n}\\frac{CF_t}{(1+r)^t} - I_0',
    variables: [
      { name: 'NPV', description: '净现值', unit: '元' },
      { name: 'CFₜ', description: '第t期现金流', unit: '元' },
      { name: 'r', description: '折现率', unit: '' },
      { name: 'I₀', description: '初始投资', unit: '元' },
      { name: 'n', description: '期数', unit: '' }
    ],
    conditions: 'r > 0',
    notes: '项目投资决策指标，NPV > 0表示项目可行',
    derivation: '现值理论',
    related: ['finance_002'],
    calculator: {
      inputs: ['cashFlows', 'r', 'I0'],
      output: 'NPV',
      formula: (cashFlows, r, I0) => {
        let npv = -I0;
        cashFlows.forEach((cf, t) => {
          npv += cf / Math.pow(1 + r, t + 1);
        });
        return npv;
      }
    }
  },
  {
    id: 'finance_012',
    name: '内部收益率（IRR）',
    category: '金融',
    subCategory: '投资分析',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'NPV = 0 = Σ[CFₜ/(1+IRR)ᵗ] - I₀',
    latex: 'NPV = 0 = \\sum_{t=0}^{n}\\frac{CF_t}{(1+IRR)^t} - I_0',
    variables: [
      { name: 'IRR', description: '内部收益率', unit: '' },
      { name: 'CFₜ', description: '第t期现金流', unit: '元' },
      { name: 'I₀', description: '初始投资', unit: '元' },
      { name: 'n', description: '期数', unit: '' }
    ],
    conditions: '',
    notes: '使NPV=0的折现率，需用迭代法求解，IRR > 折现率表示项目可行',
    derivation: '由NPV公式推导',
    related: ['finance_011'],
    calculator: {
      inputs: ['cashFlows', 'I0'],
      output: 'IRR',
      formula: (cashFlows, I0) => {
        // 简化计算：使用试错法近似
        let irr = 0.1;
        for (let i = 0; i < 100; i++) {
          let npv = -I0;
          cashFlows.forEach((cf, t) => {
            npv += cf / Math.pow(1 + irr, t + 1);
          });
          if (Math.abs(npv) < 0.01) break;
          irr += npv > 0 ? 0.01 : -0.01;
        }
        return irr;
      }
    }
  },
  {
    id: 'finance_013',
    name: '72法则',
    category: '金融',
    subCategory: '复利计算',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: '翻倍时间 ≈ 72 / 年化收益率(%)',
    latex: '\\text{翻倍时间} \\approx \\frac{72}{\\text{年化收益率}(\\%)}',
    variables: [
      { name: '年化收益率', description: '年化收益率', unit: '%' }
    ],
    conditions: '收益率 > 0',
    notes: '快速估算投资翻倍所需年数的经验法则',
    derivation: '经验公式',
    related: ['finance_001'],
    calculator: {
      inputs: ['rate'],
      output: 'doublingTime',
      formula: (rate) => 72 / rate
    }
  },
  {
    id: 'finance_014',
    name: '贷款月供（等额本息）',
    category: '金融',
    subCategory: '贷款计算',
    grade: '专业领域',
    tags: ['常用公式', '必背公式'],
    formula: 'M = P[r(1+r)ⁿ] / [(1+r)ⁿ - 1]',
    latex: 'M = P\\frac{r(1+r)^n}{(1+r)^n - 1}',
    variables: [
      { name: 'M', description: '月供', unit: '元' },
      { name: 'P', description: '贷款本金', unit: '元' },
      { name: 'r', description: '月利率', unit: '' },
      { name: 'n', description: '还款月数', unit: '月' }
    ],
    conditions: 'r > 0, n > 0',
    notes: '每月还款金额相同，包含本金和利息',
    derivation: '年金现值公式',
    related: ['finance_004'],
    calculator: {
      inputs: ['P', 'r', 'n'],
      output: 'M',
      formula: (P, r, n) => {
        const numerator = r * Math.pow(1 + r, n);
        const denominator = Math.pow(1 + r, n) - 1;
        return P * numerator / denominator;
      }
    }
  },
  {
    id: 'finance_015',
    name: '贷款月供（等额本金）',
    category: '金融',
    subCategory: '贷款计算',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'Mₜ = P/n + P(1 - (t-1)/n)r',
    latex: 'M_t = \\frac{P}{n} + P\\left(1 - \\frac{t-1}{n}\\right)r',
    variables: [
      { name: 'Mₜ', description: '第t期月供', unit: '元' },
      { name: 'P', description: '贷款本金', unit: '元' },
      { name: 'n', description: '还款月数', unit: '月' },
      { name: 'r', description: '月利率', unit: '' },
      { name: 't', description: '期数', unit: '' }
    ],
    conditions: 'r > 0, n > 0, 1 ≤ t ≤ n',
    notes: '每月还款本金相同，利息递减，总还款额少于等额本息',
    derivation: '贷款计算原理',
    related: ['finance_014'],
    calculator: {
      inputs: ['P', 'n', 'r', 't'],
      output: 'Mt',
      formula: (P, n, r, t) => P / n + P * (1 - (t - 1) / n) * r
    }
  },
  {
    id: 'finance_016',
    name: '有效年利率（EAR）',
    category: '金融',
    subCategory: '利率计算',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'EAR = (1 + r/m)ᵐ - 1',
    latex: 'EAR = \\left(1 + \\frac{r}{m}\\right)^m - 1',
    variables: [
      { name: 'EAR', description: '有效年利率', unit: '' },
      { name: 'r', description: '名义年利率', unit: '' },
      { name: 'm', description: '复利次数（每年）', unit: '' }
    ],
    conditions: 'm > 0',
    notes: '考虑复利频率后的实际年利率，m越大EAR越高',
    derivation: '复利计算',
    related: ['finance_001'],
    calculator: {
      inputs: ['r', 'm'],
      output: 'EAR',
      formula: (r, m) => Math.pow(1 + r / m, m) - 1
    }
  },
  {
    id: 'finance_017',
    name: '股票市盈率（P/E）',
    category: '金融',
    subCategory: '股票分析',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'P/E = 股价 / 每股收益',
    latex: 'P/E = \\frac{\\text{股价}}{\\text{每股收益}}',
    variables: [
      { name: 'P/E', description: '市盈率', unit: '' },
      { name: '股价', description: '股票价格', unit: '元' },
      { name: '每股收益', description: '每股收益（EPS）', unit: '元' }
    ],
    conditions: '每股收益 > 0',
    notes: '衡量股票估值水平，P/E越低可能表示股票被低估',
    derivation: '金融定义',
    related: [],
    calculator: {
      inputs: ['price', 'eps'],
      output: 'PE',
      formula: (price, eps) => price / eps
    }
  },
  {
    id: 'finance_018',
    name: '股票市净率（P/B）',
    category: '金融',
    subCategory: '股票分析',
    grade: '专业领域',
    tags: ['常用公式'],
    formula: 'P/B = 股价 / 每股净资产',
    latex: 'P/B = \\frac{\\text{股价}}{\\text{每股净资产}}',
    variables: [
      { name: 'P/B', description: '市净率', unit: '' },
      { name: '股价', description: '股票价格', unit: '元' },
      { name: '每股净资产', description: '每股净资产（BVPS）', unit: '元' }
    ],
    conditions: '每股净资产 > 0',
    notes: '衡量股票相对账面价值的估值水平',
    derivation: '金融定义',
    related: ['finance_017'],
    calculator: {
      inputs: ['price', 'bvps'],
      output: 'PB',
      formula: (price, bvps) => price / bvps
    }
  },
  // 高等数学公式 - 参数方程与极坐标求导
  {
    id: 'calc_derivative_006',
    name: '参数方程求导',
    category: '数学',
    subCategory: '高等数学-导数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: "dy/dx = (dy/dt) / (dx/dt)",
    latex: "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
    variables: [
      { name: 'x = x(t)', description: 'x的参数方程', unit: '' },
      { name: 'y = y(t)', description: 'y的参数方程', unit: '' },
      { name: 't', description: '参数', unit: '' }
    ],
    conditions: 'dx/dt ≠ 0',
    notes: '参数方程确定函数的导数',
    derivation: '由链式法则推导',
    related: ['calc_derivative_003'],
    calculator: {
      inputs: [],
      output: 'dy/dx',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_derivative_007',
    name: '极坐标求导',
    category: '数学',
    subCategory: '高等数学-导数',
    grade: '大学',
    tags: ['常用公式'],
    formula: "dy/dx = (r' sin θ + r cos θ) / (r' cos θ - r sin θ)",
    latex: "\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}",
    variables: [
      { name: 'r = r(θ)', description: '极坐标方程', unit: '' },
      { name: "r'", description: 'r对θ的导数', unit: '' },
      { name: 'θ', description: '极角', unit: '' }
    ],
    conditions: '分母不为0',
    notes: '极坐标形式下曲线的切线斜率',
    derivation: '由参数方程求导推导',
    related: ['calc_derivative_006'],
    calculator: {
      inputs: [],
      output: 'dy/dx',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_derivative_008',
    name: '对数求导法',
    category: '数学',
    subCategory: '高等数学-导数',
    grade: '大学',
    tags: ['常用公式'],
    formula: "对于 y = [u(x)]ᵛ⁽ˣ⁾，先取对数：ln y = v(x)ln u(x)，再求导：y'/y = v'(x)ln u(x) + v(x)u'(x)/u(x)",
    latex: "\\text{对于} \\quad y = [u(x)]^{v(x)}, \\quad \\text{先取对数：} \\quad \\ln y = v(x)\\ln u(x), \\quad \\text{再求导：} \\quad \\frac{y'}{y} = v'(x)\\ln u(x) + \\frac{v(x)u'(x)}{u(x)}",
    variables: [
      { name: 'u(x), v(x)', description: '函数', unit: '' },
      { name: "y', u', v'", description: '导数', unit: '' }
    ],
    conditions: 'u(x) > 0',
    notes: '用于求幂指函数的导数',
    derivation: '由对数函数求导法则推导',
    related: ['calc_derivative_003', 'high_func_002'],
    calculator: {
      inputs: [],
      output: "y'",
      formula: () => '需要具体函数计算'
    }
  },
  // 高等数学公式 - 更多积分方法
  {
    id: 'calc_integral_007',
    name: '有理函数积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '将有理函数分解为部分分式后积分',
    latex: '\\int \\frac{P(x)}{Q(x)}dx = \\int \\left[\\sum \\frac{A}{(x-a)^n} + \\sum \\frac{Bx+C}{(x^2+px+q)^m}\\right]dx',
    variables: [
      { name: 'P(x), Q(x)', description: '多项式', unit: '' },
      { name: 'A, B, C', description: '待定系数', unit: '' }
    ],
    conditions: 'Q(x)的次数大于P(x)的次数',
    notes: '通过部分分式分解，将有理函数积分转化为简单函数的积分',
    derivation: '代数理论',
    related: ['calc_integral_002'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_008',
    name: '三角换元法',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '√(a²-x²) → x = a sin t, √(a²+x²) → x = a tan t, √(x²-a²) → x = a sec t',
    latex: '\\sqrt{a^2-x^2} \\to x = a\\sin t, \\quad \\sqrt{a^2+x^2} \\to x = a\\tan t, \\quad \\sqrt{x^2-a^2} \\to x = a\\sec t',
    variables: [
      { name: 'a', description: '常数', unit: '' },
      { name: 't', description: '新变量', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '通过三角代换消除根号',
    derivation: '三角恒等式',
    related: ['calc_integral_005'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_009',
    name: '反常积分（无穷限）',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[a,∞) f(x)dx = lim(b→∞) ∫[a,b] f(x)dx',
    latex: '\\int_a^{\\infty} f(x)dx = \\lim_{b \\to \\infty} \\int_a^b f(x)dx',
    variables: [
      { name: 'a', description: '积分下限', unit: '' },
      { name: 'b', description: '积分上限', unit: '' },
      { name: 'f(x)', description: '被积函数', unit: '' }
    ],
    conditions: '极限存在',
    notes: '积分区间为无穷的反常积分',
    derivation: '极限定义',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_010',
    name: '反常积分（瑕积分）',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[a,b] f(x)dx = lim(ε→0⁺) ∫[a+ε,b] f(x)dx（f(x)在a处无界）',
    latex: '\\int_a^b f(x)dx = \\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x)dx \\quad \\text{（f(x)在a处无界）}',
    variables: [
      { name: 'a, b', description: '积分上下限', unit: '' },
      { name: 'ε', description: '无穷小量', unit: '' }
    ],
    conditions: '极限存在',
    notes: '被积函数在积分区间内有无穷间断点的反常积分',
    derivation: '极限定义',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_011',
    name: '定积分应用 - 平面图形面积',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'S = ∫[a,b] |f(x) - g(x)|dx',
    latex: 'S = \\int_a^b |f(x) - g(x)|dx',
    variables: [
      { name: 'S', description: '面积', unit: '' },
      { name: 'f(x), g(x)', description: '曲线函数', unit: '' },
      { name: 'a, b', description: '积分区间', unit: '' }
    ],
    conditions: 'f(x), g(x)在[a,b]上连续',
    notes: '两条曲线围成的平面图形面积',
    derivation: '定积分的几何意义',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'S',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_012',
    name: '定积分应用 - 旋转体体积',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'V = π∫[a,b] f²(x)dx（绕x轴旋转）',
    latex: 'V = \\pi \\int_a^b f^2(x)dx \\quad \\text{（绕x轴旋转）}',
    variables: [
      { name: 'V', description: '体积', unit: '' },
      { name: 'f(x)', description: '曲线函数', unit: '' },
      { name: 'a, b', description: '积分区间', unit: '' }
    ],
    conditions: 'f(x) ≥ 0，在[a,b]上连续',
    notes: '曲线绕坐标轴旋转形成的旋转体体积',
    derivation: '圆盘法（切片法）',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'V',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_013',
    name: '定积分应用 - 弧长公式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'L = ∫[a,b] √(1 + [f\'(x)]²)dx',
    latex: 'L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}dx',
    variables: [
      { name: 'L', description: '弧长', unit: '' },
      { name: 'f(x)', description: '曲线函数', unit: '' },
      { name: 'a, b', description: '积分区间', unit: '' }
    ],
    conditions: 'f\'(x)连续',
    notes: '平面曲线的弧长',
    derivation: '微分几何',
    related: ['calc_integral_003', 'calc_derivative_001'],
    calculator: {
      inputs: [],
      output: 'L',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_014',
    name: '三角函数积分 - 正切余切',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫tan x dx = -ln|cos x| + C, ∫cot x dx = ln|sin x| + C',
    latex: '\\int \\tan x dx = -\\ln|\\cos x| + C, \\quad \\int \\cot x dx = \\ln|\\sin x| + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'cos x ≠ 0（tan x），sin x ≠ 0（cot x）',
    notes: '正切和余切函数的不定积分',
    derivation: '由导数公式逆推',
    related: ['calc_integral_002'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'tan') return -Math.log(Math.abs(Math.cos(x)));
        if (func === 'cot') return Math.log(Math.abs(Math.sin(x)));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_015',
    name: '三角函数积分 - 正割余割',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫sec x dx = ln|sec x + tan x| + C, ∫csc x dx = ln|csc x - cot x| + C',
    latex: '\\int \\sec x dx = \\ln|\\sec x + \\tan x| + C, \\quad \\int \\csc x dx = \\ln|\\csc x - \\cot x| + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'cos x ≠ 0（sec x），sin x ≠ 0（csc x）',
    notes: '正割和余割函数的不定积分',
    derivation: '通过换元法推导',
    related: ['calc_integral_002', 'calc_integral_005'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'sec') return Math.log(Math.abs(1/Math.cos(x) + Math.tan(x)));
        if (func === 'csc') return Math.log(Math.abs(1/Math.sin(x) - 1/Math.tan(x)));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_016',
    name: '三角函数平方积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫sin²x dx = x/2 - sin(2x)/4 + C, ∫cos²x dx = x/2 + sin(2x)/4 + C, ∫tan²x dx = tan x - x + C',
    latex: '\\int \\sin^2 x dx = \\frac{x}{2} - \\frac{\\sin(2x)}{4} + C, \\quad \\int \\cos^2 x dx = \\frac{x}{2} + \\frac{\\sin(2x)}{4} + C, \\quad \\int \\tan^2 x dx = \\tan x - x + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: '',
    notes: '利用倍角公式或恒等式化简后积分',
    derivation: '利用三角恒等式：sin²x = (1-cos2x)/2, cos²x = (1+cos2x)/2',
    related: ['calc_integral_002'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'sin2') return x/2 - Math.sin(2*x)/4;
        if (func === 'cos2') return x/2 + Math.sin(2*x)/4;
        if (func === 'tan2') return Math.tan(x) - x;
        return null;
      }
    }
  },
  {
    id: 'calc_integral_017',
    name: '指数函数积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫aˣ dx = aˣ/ln a + C (a>0, a≠1), ∫eᵏˣ dx = eᵏˣ/k + C',
    latex: '\\int a^x dx = \\frac{a^x}{\\ln a} + C \\quad (a>0, a\\neq 1), \\quad \\int e^{kx} dx = \\frac{e^{kx}}{k} + C',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'k', description: '常数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'a > 0, a ≠ 1',
    notes: '一般指数函数和自然指数函数的积分',
    derivation: '由导数公式逆推',
    related: ['calc_integral_002'],
    calculator: {
      inputs: ['func', 'a', 'k', 'x'],
      output: 'result',
      formula: (func, a, k, x) => {
        if (func === 'a^x') return Math.pow(a, x) / Math.log(a);
        if (func === 'e^kx') return Math.exp(k * x) / k;
        return null;
      }
    }
  },
  {
    id: 'calc_integral_018',
    name: '对数函数积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫ln x dx = x ln x - x + C, ∫logₐ x dx = x(logₐ x - 1/ln a) + C',
    latex: '\\int \\ln x dx = x\\ln x - x + C, \\quad \\int \\log_a x dx = x\\left(\\log_a x - \\frac{1}{\\ln a}\\right) + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'a', description: '底数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'x > 0, a > 0, a ≠ 1',
    notes: '自然对数和一般对数函数的积分',
    derivation: '使用分部积分法',
    related: ['calc_integral_002', 'calc_integral_006'],
    calculator: {
      inputs: ['func', 'x', 'a'],
      output: 'result',
      formula: (func, x, a) => {
        if (func === 'ln') return x * Math.log(x) - x;
        if (func === 'log_a') return x * (Math.log(x) / Math.log(a) - 1 / Math.log(a));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_019',
    name: '反三角函数积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫1/√(1-x²) dx = arcsin x + C, ∫1/(1+x²) dx = arctan x + C, ∫1/(x√(x²-1)) dx = arcsec |x| + C',
    latex: '\\int \\frac{1}{\\sqrt{1-x^2}} dx = \\arcsin x + C, \\quad \\int \\frac{1}{1+x^2} dx = \\arctan x + C, \\quad \\int \\frac{1}{x\\sqrt{x^2-1}} dx = \\text{arcsec}|x| + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: '|x| < 1（arcsin），|x| > 1（arcsec）',
    notes: '反三角函数的不定积分公式',
    derivation: '由反三角函数导数公式逆推',
    related: ['calc_integral_002'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === '1/sqrt(1-x^2)') return Math.asin(x);
        if (func === '1/(1+x^2)') return Math.atan(x);
        if (func === '1/(x*sqrt(x^2-1))') return Math.acos(1/Math.abs(x));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_020',
    name: '双曲函数积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫sinh x dx = cosh x + C, ∫cosh x dx = sinh x + C, ∫tanh x dx = ln(cosh x) + C',
    latex: '\\int \\sinh x dx = \\cosh x + C, \\quad \\int \\cosh x dx = \\sinh x + C, \\quad \\int \\tanh x dx = \\ln(\\cosh x) + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: '',
    notes: '双曲正弦、双曲余弦、双曲正切函数的积分',
    derivation: '由双曲函数导数公式逆推',
    related: ['calc_integral_002'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'sinh') return (Math.exp(x) - Math.exp(-x)) / 2;
        if (func === 'cosh') return (Math.exp(x) + Math.exp(-x)) / 2;
        if (func === 'tanh') return Math.log((Math.exp(x) + Math.exp(-x)) / 2);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_021',
    name: '定积分性质 - 线性性',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫[a,b] [αf(x) + βg(x)]dx = α∫[a,b] f(x)dx + β∫[a,b] g(x)dx',
    latex: '\\int_a^b [\\alpha f(x) + \\beta g(x)]dx = \\alpha \\int_a^b f(x)dx + \\beta \\int_a^b g(x)dx',
    variables: [
      { name: 'α, β', description: '常数', unit: '' },
      { name: 'f(x), g(x)', description: '函数', unit: '' },
      { name: 'a, b', description: '积分上下限', unit: '' }
    ],
    conditions: 'f(x), g(x)在[a,b]上可积',
    notes: '定积分的线性性质',
    derivation: '积分定义',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_022',
    name: '定积分性质 - 区间可加性',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫[a,b] f(x)dx = ∫[a,c] f(x)dx + ∫[c,b] f(x)dx',
    latex: '\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx',
    variables: [
      { name: 'a, b, c', description: '积分区间端点', unit: '' },
      { name: 'f(x)', description: '被积函数', unit: '' }
    ],
    conditions: 'a ≤ c ≤ b，f(x)在[a,b]上可积',
    notes: '定积分对积分区间的可加性',
    derivation: '积分定义',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_023',
    name: '定积分性质 - 积分中值定理',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫[a,b] f(x)dx = f(ξ)(b-a)，其中ξ ∈ [a,b]',
    latex: '\\int_a^b f(x)dx = f(\\xi)(b-a), \\quad \\text{其中} \\quad \\xi \\in [a,b]',
    variables: [
      { name: 'f(x)', description: '连续函数', unit: '' },
      { name: 'ξ', description: '中值点', unit: '' },
      { name: 'a, b', description: '积分上下限', unit: '' }
    ],
    conditions: 'f(x)在[a,b]上连续',
    notes: '积分第一中值定理，存在ξ使得积分值等于函数值乘以区间长度',
    derivation: '连续函数的介值定理',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_024',
    name: '定积分性质 - 奇偶性',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若f(x)为奇函数，则∫[-a,a] f(x)dx = 0；若f(x)为偶函数，则∫[-a,a] f(x)dx = 2∫[0,a] f(x)dx',
    latex: '\\text{若}f(x)\\text{为奇函数，则}\\int_{-a}^a f(x)dx = 0; \\quad \\text{若}f(x)\\text{为偶函数，则}\\int_{-a}^a f(x)dx = 2\\int_0^a f(x)dx',
    variables: [
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'a', description: '正数', unit: '' }
    ],
    conditions: 'f(x)在[-a,a]上可积',
    notes: '利用函数的奇偶性简化定积分计算',
    derivation: '奇偶函数的性质',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_025',
    name: '定积分性质 - 周期性',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '若f(x)周期为T，则∫[a,a+T] f(x)dx = ∫[0,T] f(x)dx',
    latex: '\\text{若}f(x)\\text{周期为}T, \\text{则}\\int_a^{a+T} f(x)dx = \\int_0^T f(x)dx',
    variables: [
      { name: 'f(x)', description: '周期函数', unit: '' },
      { name: 'T', description: '周期', unit: '' },
      { name: 'a', description: '任意实数', unit: '' }
    ],
    conditions: 'f(x)周期为T',
    notes: '周期函数在任意一个周期上的积分值相等',
    derivation: '周期函数的性质',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_026',
    name: '定积分应用 - 旋转体体积（绕y轴）',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'V = π∫[c,d] g²(y)dy（绕y轴旋转）',
    latex: 'V = \\pi \\int_c^d g^2(y)dy \\quad \\text{（绕y轴旋转）}',
    variables: [
      { name: 'V', description: '体积', unit: '' },
      { name: 'g(y)', description: '曲线函数（y为自变量）', unit: '' },
      { name: 'c, d', description: '积分区间', unit: '' }
    ],
    conditions: 'g(y) ≥ 0，在[c,d]上连续',
    notes: '曲线绕y轴旋转形成的旋转体体积',
    derivation: '圆盘法（切片法）',
    related: ['calc_integral_012'],
    calculator: {
      inputs: [],
      output: 'V',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_027',
    name: '定积分应用 - 旋转体体积（壳法）',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'V = 2π∫[a,b] x f(x)dx（绕y轴旋转，壳法）',
    latex: 'V = 2\\pi \\int_a^b x f(x)dx \\quad \\text{（绕y轴旋转，壳法）}',
    variables: [
      { name: 'V', description: '体积', unit: '' },
      { name: 'f(x)', description: '曲线函数', unit: '' },
      { name: 'a, b', description: '积分区间', unit: '' }
    ],
    conditions: 'f(x) ≥ 0，在[a,b]上连续',
    notes: '使用柱壳法计算旋转体体积，适用于绕y轴旋转的情况',
    derivation: '柱壳法',
    related: ['calc_integral_012', 'calc_integral_026'],
    calculator: {
      inputs: [],
      output: 'V',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_028',
    name: '定积分应用 - 旋转体侧面积',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'S = 2π∫[a,b] f(x)√(1 + [f\'(x)]²)dx（绕x轴旋转）',
    latex: 'S = 2\\pi \\int_a^b f(x)\\sqrt{1 + [f\'(x)]^2}dx \\quad \\text{（绕x轴旋转）}',
    variables: [
      { name: 'S', description: '侧面积', unit: '' },
      { name: 'f(x)', description: '曲线函数', unit: '' },
      { name: 'a, b', description: '积分区间', unit: '' }
    ],
    conditions: 'f(x) ≥ 0，f\'(x)连续',
    notes: '曲线绕坐标轴旋转形成的旋转体侧面积',
    derivation: '旋转体表面积公式',
    related: ['calc_integral_013'],
    calculator: {
      inputs: [],
      output: 'S',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_029',
    name: '定积分应用 - 质心坐标',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'x̄ = ∫[a,b] x f(x)dx / ∫[a,b] f(x)dx, ȳ = (1/2)∫[a,b] f²(x)dx / ∫[a,b] f(x)dx',
    latex: '\\bar{x} = \\frac{\\int_a^b x f(x)dx}{\\int_a^b f(x)dx}, \\quad \\bar{y} = \\frac{\\frac{1}{2}\\int_a^b f^2(x)dx}{\\int_a^b f(x)dx}',
    variables: [
      { name: 'x̄, ȳ', description: '质心坐标', unit: '' },
      { name: 'f(x)', description: '曲线函数', unit: '' },
      { name: 'a, b', description: '积分区间', unit: '' }
    ],
    conditions: 'f(x) ≥ 0，在[a,b]上连续',
    notes: '平面图形质心的坐标计算公式',
    derivation: '质心定义',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'centroid',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_030',
    name: '定积分应用 - 功',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'W = ∫[a,b] F(x)dx',
    latex: 'W = \\int_a^b F(x)dx',
    variables: [
      { name: 'W', description: '功', unit: '焦耳(J)' },
      { name: 'F(x)', description: '变力函数', unit: '牛顿(N)' },
      { name: 'a, b', description: '位移区间', unit: '米(m)' }
    ],
    conditions: 'F(x)在[a,b]上连续',
    notes: '变力沿直线做功的计算公式',
    derivation: '功的定义',
    related: ['calc_integral_003'],
    calculator: {
      inputs: [],
      output: 'W',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_031',
    name: '有理函数积分表 - 基本形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫1/(x-a) dx = ln|x-a| + C, ∫1/(x²+a²) dx = (1/a)arctan(x/a) + C, ∫1/(x²-a²) dx = (1/2a)ln|(x-a)/(x+a)| + C',
    latex: '\\int \\frac{1}{x-a} dx = \\ln|x-a| + C, \\quad \\int \\frac{1}{x^2+a^2} dx = \\frac{1}{a}\\arctan\\frac{x}{a} + C, \\quad \\int \\frac{1}{x^2-a^2} dx = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C',
    variables: [
      { name: 'a', description: '常数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'a ≠ 0',
    notes: '有理函数积分的基本形式',
    derivation: '直接积分或换元法',
    related: ['calc_integral_002', 'calc_integral_007'],
    calculator: {
      inputs: ['func', 'x', 'a'],
      output: 'result',
      formula: (func, x, a) => {
        if (func === '1/(x-a)') return Math.log(Math.abs(x - a));
        if (func === '1/(x^2+a^2)') return (1/a) * Math.atan(x/a);
        if (func === '1/(x^2-a^2)') return (1/(2*a)) * Math.log(Math.abs((x-a)/(x+a)));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_032',
    name: '有理函数积分表 - 高次形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫1/(x-a)ⁿ dx = -1/[(n-1)(x-a)ⁿ⁻¹] + C (n>1), ∫x/(x²+a²) dx = (1/2)ln(x²+a²) + C',
    latex: '\\int \\frac{1}{(x-a)^n} dx = -\\frac{1}{(n-1)(x-a)^{n-1}} + C \\quad (n>1), \\quad \\int \\frac{x}{x^2+a^2} dx = \\frac{1}{2}\\ln(x^2+a^2) + C',
    variables: [
      { name: 'a', description: '常数', unit: '' },
      { name: 'n', description: '正整数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'n > 1',
    notes: '有理函数的高次幂积分',
    derivation: '直接积分',
    related: ['calc_integral_031'],
    calculator: {
      inputs: ['func', 'x', 'a', 'n'],
      output: 'result',
      formula: (func, x, a, n) => {
        if (func === '1/(x-a)^n') return -1 / ((n-1) * Math.pow(x-a, n-1));
        if (func === 'x/(x^2+a^2)') return 0.5 * Math.log(x*x + a*a);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_033',
    name: '无理函数积分表 - 根式形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫1/√(x²+a²) dx = ln|x+√(x²+a²)| + C, ∫1/√(x²-a²) dx = ln|x+√(x²-a²)| + C, ∫√(x²+a²) dx = (x/2)√(x²+a²) + (a²/2)ln|x+√(x²+a²)| + C',
    latex: '\\int \\frac{1}{\\sqrt{x^2+a^2}} dx = \\ln|x+\\sqrt{x^2+a^2}| + C, \\quad \\int \\frac{1}{\\sqrt{x^2-a^2}} dx = \\ln|x+\\sqrt{x^2-a^2}| + C, \\quad \\int \\sqrt{x^2+a^2} dx = \\frac{x}{2}\\sqrt{x^2+a^2} + \\frac{a^2}{2}\\ln|x+\\sqrt{x^2+a^2}| + C',
    variables: [
      { name: 'a', description: '常数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'a > 0, |x| > a（对于√(x²-a²)）',
    notes: '含根式的无理函数积分',
    derivation: '三角换元法或分部积分法',
    related: ['calc_integral_008', 'calc_integral_006'],
    calculator: {
      inputs: ['func', 'x', 'a'],
      output: 'result',
      formula: (func, x, a) => {
        if (func === '1/sqrt(x^2+a^2)') return Math.log(Math.abs(x + Math.sqrt(x*x + a*a)));
        if (func === '1/sqrt(x^2-a^2)') return Math.log(Math.abs(x + Math.sqrt(x*x - a*a)));
        if (func === 'sqrt(x^2+a^2)') return (x/2)*Math.sqrt(x*x + a*a) + (a*a/2)*Math.log(Math.abs(x + Math.sqrt(x*x + a*a)));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_034',
    name: '无理函数积分表 - 线性根式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫√(ax+b) dx = (2/3a)(ax+b)^(3/2) + C, ∫1/√(ax+b) dx = (2/a)√(ax+b) + C',
    latex: '\\int \\sqrt{ax+b} dx = \\frac{2}{3a}(ax+b)^{3/2} + C, \\quad \\int \\frac{1}{\\sqrt{ax+b}} dx = \\frac{2}{a}\\sqrt{ax+b} + C',
    variables: [
      { name: 'a, b', description: '常数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'a ≠ 0, ax+b > 0',
    notes: '线性根式函数的积分',
    derivation: '换元法',
    related: ['calc_integral_005'],
    calculator: {
      inputs: ['func', 'x', 'a', 'b'],
      output: 'result',
      formula: (func, x, a, b) => {
        if (func === 'sqrt(ax+b)') return (2/(3*a)) * Math.pow(a*x + b, 1.5);
        if (func === '1/sqrt(ax+b)') return (2/a) * Math.sqrt(a*x + b);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_035',
    name: '三角函数积分表 - 完整版',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫sin x dx = -cos x + C, ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C, ∫csc²x dx = -cot x + C, ∫sec x tan x dx = sec x + C, ∫csc x cot x dx = -csc x + C',
    latex: '\\int \\sin x dx = -\\cos x + C, \\quad \\int \\cos x dx = \\sin x + C, \\quad \\int \\sec^2 x dx = \\tan x + C, \\quad \\int \\csc^2 x dx = -\\cot x + C, \\quad \\int \\sec x \\tan x dx = \\sec x + C, \\quad \\int \\csc x \\cot x dx = -\\csc x + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: '',
    notes: '完整的三角函数积分表',
    derivation: '由导数公式逆推',
    related: ['calc_integral_002', 'calc_integral_014', 'calc_integral_015'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'sin') return -Math.cos(x);
        if (func === 'cos') return Math.sin(x);
        if (func === 'sec^2') return Math.tan(x);
        if (func === 'csc^2') return -1/Math.tan(x);
        if (func === 'sec*tan') return 1/Math.cos(x);
        if (func === 'csc*cot') return -1/Math.sin(x);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_036',
    name: '三角函数积分表 - 乘积形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫sin mx sin nx dx = sin(m-n)x/[2(m-n)] - sin(m+n)x/[2(m+n)] + C, ∫cos mx cos nx dx = sin(m-n)x/[2(m-n)] + sin(m+n)x/[2(m+n)] + C, ∫sin mx cos nx dx = -cos(m-n)x/[2(m-n)] - cos(m+n)x/[2(m+n)] + C',
    latex: '\\int \\sin mx \\sin nx dx = \\frac{\\sin(m-n)x}{2(m-n)} - \\frac{\\sin(m+n)x}{2(m+n)} + C, \\quad \\int \\cos mx \\cos nx dx = \\frac{\\sin(m-n)x}{2(m-n)} + \\frac{\\sin(m+n)x}{2(m+n)} + C, \\quad \\int \\sin mx \\cos nx dx = -\\frac{\\cos(m-n)x}{2(m-n)} - \\frac{\\cos(m+n)x}{2(m+n)} + C',
    variables: [
      { name: 'm, n', description: '常数', unit: '' },
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'm ≠ n',
    notes: '三角函数乘积的积分，利用积化和差公式',
    derivation: '积化和差公式',
    related: ['calc_integral_035'],
    calculator: {
      inputs: ['func', 'm', 'n', 'x'],
      output: 'result',
      formula: (func, m, n, x) => {
        if (func === 'sin*sin') return Math.sin((m-n)*x)/(2*(m-n)) - Math.sin((m+n)*x)/(2*(m+n));
        if (func === 'cos*cos') return Math.sin((m-n)*x)/(2*(m-n)) + Math.sin((m+n)*x)/(2*(m+n));
        if (func === 'sin*cos') return -Math.cos((m-n)*x)/(2*(m-n)) - Math.cos((m+n)*x)/(2*(m+n));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_037',
    name: '指数函数积分表 - 完整版',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫eˣ dx = eˣ + C, ∫aˣ dx = aˣ/ln a + C, ∫eᵏˣ dx = eᵏˣ/k + C, ∫x eˣ dx = eˣ(x-1) + C, ∫x² eˣ dx = eˣ(x²-2x+2) + C',
    latex: '\\int e^x dx = e^x + C, \\quad \\int a^x dx = \\frac{a^x}{\\ln a} + C, \\quad \\int e^{kx} dx = \\frac{e^{kx}}{k} + C, \\quad \\int x e^x dx = e^x(x-1) + C, \\quad \\int x^2 e^x dx = e^x(x^2-2x+2) + C',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'k', description: '常数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'a > 0, a ≠ 1, k ≠ 0',
    notes: '完整的指数函数积分表，包括与多项式乘积的积分',
    derivation: '直接积分或分部积分法',
    related: ['calc_integral_002', 'calc_integral_006', 'calc_integral_017'],
    calculator: {
      inputs: ['func', 'x', 'a', 'k'],
      output: 'result',
      formula: (func, x, a, k) => {
        if (func === 'e^x') return Math.exp(x);
        if (func === 'a^x') return Math.pow(a, x) / Math.log(a);
        if (func === 'e^kx') return Math.exp(k*x) / k;
        if (func === 'x*e^x') return Math.exp(x) * (x - 1);
        if (func === 'x^2*e^x') return Math.exp(x) * (x*x - 2*x + 2);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_038',
    name: '对数函数积分表 - 完整版',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫ln x dx = x ln x - x + C, ∫logₐ x dx = x(logₐ x - 1/ln a) + C, ∫x ln x dx = (x²/2)(ln x - 1/2) + C, ∫xⁿ ln x dx = xⁿ⁺¹[ln x/(n+1) - 1/(n+1)²] + C',
    latex: '\\int \\ln x dx = x\\ln x - x + C, \\quad \\int \\log_a x dx = x\\left(\\log_a x - \\frac{1}{\\ln a}\\right) + C, \\quad \\int x \\ln x dx = \\frac{x^2}{2}\\left(\\ln x - \\frac{1}{2}\\right) + C, \\quad \\int x^n \\ln x dx = x^{n+1}\\left[\\frac{\\ln x}{n+1} - \\frac{1}{(n+1)^2}\\right] + C',
    variables: [
      { name: 'a', description: '底数', unit: '' },
      { name: 'n', description: '指数', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'x > 0, a > 0, a ≠ 1, n ≠ -1',
    notes: '完整的对数函数积分表，包括与多项式乘积的积分',
    derivation: '分部积分法',
    related: ['calc_integral_006', 'calc_integral_018'],
    calculator: {
      inputs: ['func', 'x', 'a', 'n'],
      output: 'result',
      formula: (func, x, a, n) => {
        if (func === 'ln') return x * Math.log(x) - x;
        if (func === 'log_a') return x * (Math.log(x)/Math.log(a) - 1/Math.log(a));
        if (func === 'x*ln') return (x*x/2) * (Math.log(x) - 0.5);
        if (func === 'x^n*ln') return Math.pow(x, n+1) * (Math.log(x)/(n+1) - 1/Math.pow(n+1, 2));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_039',
    name: '反三角函数积分表 - 直接积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫arcsin x dx = x arcsin x + √(1-x²) + C, ∫arccos x dx = x arccos x - √(1-x²) + C, ∫arctan x dx = x arctan x - (1/2)ln(1+x²) + C',
    latex: '\\int \\arcsin x dx = x\\arcsin x + \\sqrt{1-x^2} + C, \\quad \\int \\arccos x dx = x\\arccos x - \\sqrt{1-x^2} + C, \\quad \\int \\arctan x dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: '|x| ≤ 1（arcsin, arccos）',
    notes: '反三角函数的直接积分公式',
    derivation: '分部积分法',
    related: ['calc_integral_006', 'calc_integral_019'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'arcsin') return x * Math.asin(x) + Math.sqrt(1 - x*x);
        if (func === 'arccos') return x * Math.acos(x) - Math.sqrt(1 - x*x);
        if (func === 'arctan') return x * Math.atan(x) - 0.5 * Math.log(1 + x*x);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_040',
    name: '反三角函数积分表 - 其他形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫arccot x dx = x arccot x + (1/2)ln(1+x²) + C, ∫arcsec x dx = x arcsec x - ln|x+√(x²-1)| + C, ∫arccsc x dx = x arccsc x + ln|x+√(x²-1)| + C',
    latex: '\\int \\text{arccot} x dx = x\\text{arccot} x + \\frac{1}{2}\\ln(1+x^2) + C, \\quad \\int \\text{arcsec} x dx = x\\text{arcsec} x - \\ln|x+\\sqrt{x^2-1}| + C, \\quad \\int \\text{arccsc} x dx = x\\text{arccsc} x + \\ln|x+\\sqrt{x^2-1}| + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: '|x| ≥ 1（arcsec, arccsc）',
    notes: '其他反三角函数的积分',
    derivation: '分部积分法',
    related: ['calc_integral_039'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'arccot') return x * (Math.PI/2 - Math.atan(x)) + 0.5 * Math.log(1 + x*x);
        if (func === 'arcsec') return x * Math.acos(1/x) - Math.log(Math.abs(x + Math.sqrt(x*x - 1)));
        if (func === 'arccsc') return x * Math.asin(1/x) + Math.log(Math.abs(x + Math.sqrt(x*x - 1)));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_041',
    name: '双曲函数积分表 - 完整版',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫sinh x dx = cosh x + C, ∫cosh x dx = sinh x + C, ∫tanh x dx = ln(cosh x) + C, ∫coth x dx = ln|sinh x| + C, ∫sech x dx = 2arctan(eˣ) + C, ∫csch x dx = ln|tanh(x/2)| + C',
    latex: '\\int \\sinh x dx = \\cosh x + C, \\quad \\int \\cosh x dx = \\sinh x + C, \\quad \\int \\tanh x dx = \\ln(\\cosh x) + C, \\quad \\int \\coth x dx = \\ln|\\sinh x| + C, \\quad \\int \\text{sech} x dx = 2\\arctan(e^x) + C, \\quad \\int \\text{csch} x dx = \\ln|\\tanh(x/2)| + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'x ≠ 0（coth, csch）',
    notes: '完整的双曲函数积分表',
    derivation: '由双曲函数导数公式逆推',
    related: ['calc_integral_020'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        const sinh = (Math.exp(x) - Math.exp(-x)) / 2;
        const cosh = (Math.exp(x) + Math.exp(-x)) / 2;
        if (func === 'sinh') return cosh;
        if (func === 'cosh') return sinh;
        if (func === 'tanh') return Math.log(cosh);
        if (func === 'coth') return Math.log(Math.abs(sinh));
        if (func === 'sech') return 2 * Math.atan(Math.exp(x));
        if (func === 'csch') return Math.log(Math.abs(Math.tanh(x/2)));
        return null;
      }
    }
  },
  {
    id: 'calc_integral_042',
    name: '反双曲函数积分表',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫arsinh x dx = x arsinh x - √(x²+1) + C, ∫arcosh x dx = x arcosh x - √(x²-1) + C, ∫artanh x dx = x artanh x + (1/2)ln(1-x²) + C',
    latex: '\\int \\text{arsinh} x dx = x\\text{arsinh} x - \\sqrt{x^2+1} + C, \\quad \\int \\text{arcosh} x dx = x\\text{arcosh} x - \\sqrt{x^2-1} + C, \\quad \\int \\text{artanh} x dx = x\\text{artanh} x + \\frac{1}{2}\\ln(1-x^2) + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'x ≥ 1（arcosh），|x| < 1（artanh）',
    notes: '反双曲函数的积分公式，arsinh x = ln(x+√(x²+1))，arcosh x = ln(x+√(x²-1))，artanh x = (1/2)ln[(1+x)/(1-x)]',
    derivation: '分部积分法',
    related: ['calc_integral_006', 'calc_integral_041'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'arsinh') {
          const arsinh = Math.log(x + Math.sqrt(x*x + 1));
          return x * arsinh - Math.sqrt(x*x + 1);
        }
        if (func === 'arcosh') {
          const arcosh = Math.log(x + Math.sqrt(x*x - 1));
          return x * arcosh - Math.sqrt(x*x - 1);
        }
        if (func === 'artanh') {
          const artanh = 0.5 * Math.log((1+x)/(1-x));
          return x * artanh + 0.5 * Math.log(1 - x*x);
        }
        return null;
      }
    }
  },
  {
    id: 'calc_integral_043',
    name: '反双曲函数积分表 - 其他形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫arcoth x dx = x arcoth x + (1/2)ln(x²-1) + C, ∫arsech x dx = x arsech x + arcsin x + C, ∫arcsch x dx = x arcsch x + arsinh x + C',
    latex: '\\int \\text{arcoth} x dx = x\\text{arcoth} x + \\frac{1}{2}\\ln(x^2-1) + C, \\quad \\int \\text{arsech} x dx = x\\text{arsech} x + \\arcsin x + C, \\quad \\int \\text{arcsch} x dx = x\\text{arcsch} x + \\text{arsinh} x + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: '|x| > 1（arcoth），0 < x ≤ 1（arsech），x ≠ 0（arcsch）',
    notes: '其他反双曲函数的积分',
    derivation: '分部积分法',
    related: ['calc_integral_042'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        if (func === 'arcoth') {
          const arcoth = 0.5 * Math.log((x+1)/(x-1));
          return x * arcoth + 0.5 * Math.log(x*x - 1);
        }
        if (func === 'arsech') {
          const arsech = Math.log((1 + Math.sqrt(1-x*x))/x);
          return x * arsech + Math.asin(x);
        }
        if (func === 'arcsch') {
          const arcsch = Math.log((1 + Math.sqrt(1+x*x))/Math.abs(x));
          const arsinh = Math.log(x + Math.sqrt(x*x + 1));
          return x * arcsch + arsinh;
        }
        return null;
      }
    }
  },
  {
    id: 'calc_integral_044',
    name: '三角函数积分表 - 高次幂',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫sinⁿx dx = -sinⁿ⁻¹x cos x/n + (n-1)/n ∫sinⁿ⁻²x dx, ∫cosⁿx dx = cosⁿ⁻¹x sin x/n + (n-1)/n ∫cosⁿ⁻²x dx',
    latex: '\\int \\sin^n x dx = -\\frac{\\sin^{n-1}x \\cos x}{n} + \\frac{n-1}{n}\\int \\sin^{n-2}x dx, \\quad \\int \\cos^n x dx = \\frac{\\cos^{n-1}x \\sin x}{n} + \\frac{n-1}{n}\\int \\cos^{n-2}x dx',
    variables: [
      { name: 'n', description: '正整数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'n ≥ 2',
    notes: '三角函数高次幂的递推积分公式',
    derivation: '分部积分法',
    related: ['calc_integral_006', 'calc_integral_016'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_045',
    name: '三角函数积分表 - 其他形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫tanⁿx dx = tanⁿ⁻¹x/(n-1) - ∫tanⁿ⁻²x dx, ∫cotⁿx dx = -cotⁿ⁻¹x/(n-1) - ∫cotⁿ⁻²x dx, ∫secⁿx dx = secⁿ⁻²x tan x/(n-1) + (n-2)/(n-1)∫secⁿ⁻²x dx',
    latex: '\\int \\tan^n x dx = \\frac{\\tan^{n-1}x}{n-1} - \\int \\tan^{n-2}x dx, \\quad \\int \\cot^n x dx = -\\frac{\\cot^{n-1}x}{n-1} - \\int \\cot^{n-2}x dx, \\quad \\int \\sec^n x dx = \\frac{\\sec^{n-2}x \\tan x}{n-1} + \\frac{n-2}{n-1}\\int \\sec^{n-2}x dx',
    variables: [
      { name: 'n', description: '正整数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'n ≥ 2',
    notes: '正切、余切、正割高次幂的递推积分公式',
    derivation: '分部积分法或恒等变换',
    related: ['calc_integral_006', 'calc_integral_014', 'calc_integral_015'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_046',
    name: '有理函数积分表 - 其他形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫x/(x²+a²)ⁿ dx = -1/[2(n-1)(x²+a²)ⁿ⁻¹] + C, ∫1/(x²+a²)ⁿ dx = x/[2(n-1)a²(x²+a²)ⁿ⁻¹] + (2n-3)/[2(n-1)a²]∫1/(x²+a²)ⁿ⁻¹ dx',
    latex: '\\int \\frac{x}{(x^2+a^2)^n} dx = -\\frac{1}{2(n-1)(x^2+a^2)^{n-1}} + C, \\quad \\int \\frac{1}{(x^2+a^2)^n} dx = \\frac{x}{2(n-1)a^2(x^2+a^2)^{n-1}} + \\frac{2n-3}{2(n-1)a^2}\\int \\frac{1}{(x^2+a^2)^{n-1}} dx',
    variables: [
      { name: 'a', description: '常数', unit: '' },
      { name: 'n', description: '正整数', unit: '' }
    ],
    conditions: 'n ≥ 2, a ≠ 0',
    notes: '有理函数高次幂的递推积分公式',
    derivation: '分部积分法',
    related: ['calc_integral_006', 'calc_integral_031'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_047',
    name: '无理函数积分表 - 其他根式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫1/√(a²-x²) dx = arcsin(x/a) + C, ∫1/√(x²-a²) dx = ln|x+√(x²-a²)| + C, ∫√(a²-x²) dx = (x/2)√(a²-x²) + (a²/2)arcsin(x/a) + C',
    latex: '\\int \\frac{1}{\\sqrt{a^2-x^2}} dx = \\arcsin\\frac{x}{a} + C, \\quad \\int \\frac{1}{\\sqrt{x^2-a^2}} dx = \\ln|x+\\sqrt{x^2-a^2}| + C, \\quad \\int \\sqrt{a^2-x^2} dx = \\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a^2}{2}\\arcsin\\frac{x}{a} + C',
    variables: [
      { name: 'a', description: '常数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'a > 0, |x| < a（对于√(a²-x²)），|x| > a（对于√(x²-a²)）',
    notes: '其他形式的根式积分',
    derivation: '三角换元法',
    related: ['calc_integral_008', 'calc_integral_033'],
    calculator: {
      inputs: ['func', 'x', 'a'],
      output: 'result',
      formula: (func, x, a) => {
        if (func === '1/sqrt(a^2-x^2)') return Math.asin(x/a);
        if (func === '1/sqrt(x^2-a^2)') return Math.log(Math.abs(x + Math.sqrt(x*x - a*a)));
        if (func === 'sqrt(a^2-x^2)') return (x/2)*Math.sqrt(a*a - x*x) + (a*a/2)*Math.asin(x/a);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_048',
    name: '常见定积分值',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式', '必背公式'],
    formula: '∫[0,π] sin x dx = 2, ∫[0,π/2] sin x dx = 1, ∫[0,∞] e⁻ˣ dx = 1, ∫[-∞,∞] e⁻ˣ² dx = √π, ∫[0,1] xⁿ(1-x)ᵐ dx = n!m!/(n+m+1)!',
    latex: '\\int_0^{\\pi} \\sin x dx = 2, \\quad \\int_0^{\\pi/2} \\sin x dx = 1, \\quad \\int_0^{\\infty} e^{-x} dx = 1, \\quad \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}, \\quad \\int_0^1 x^n(1-x)^m dx = \\frac{n!m!}{(n+m+1)!}',
    variables: [
      { name: 'n, m', description: '非负整数', unit: '' }
    ],
    conditions: '',
    notes: '常用的定积分值，包括欧拉积分',
    derivation: '直接计算或利用特殊函数',
    related: ['calc_integral_003', 'calc_integral_004'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_049',
    name: '含绝对值的积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫|x-a| dx = (x-a)|x-a|/2 + C, ∫|f(x)| dx = ∫f(x)dx (f(x)≥0时) 或 -∫f(x)dx (f(x)<0时)',
    latex: '\\int |x-a| dx = \\frac{(x-a)|x-a|}{2} + C, \\quad \\int |f(x)| dx = \\begin{cases} \\int f(x)dx & f(x) \\geq 0 \\\\ -\\int f(x)dx & f(x) < 0 \\end{cases}',
    variables: [
      { name: 'a', description: '常数', unit: '' },
      { name: 'f(x)', description: '函数', unit: '' }
    ],
    conditions: '',
    notes: '含绝对值函数的积分，需要分段处理',
    derivation: '分段积分',
    related: ['calc_integral_001'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_050',
    name: '分式积分 - 其他形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫1/(x²+px+q) dx = 2/√(4q-p²) arctan[(2x+p)/√(4q-p²)] + C (当p²<4q), ∫(ax+b)/(x²+px+q) dx = (a/2)ln(x²+px+q) + [b-ap/2]/√(4q-p²) arctan[(2x+p)/√(4q-p²)] + C',
    latex: '\\int \\frac{1}{x^2+px+q} dx = \\frac{2}{\\sqrt{4q-p^2}} \\arctan\\frac{2x+p}{\\sqrt{4q-p^2}} + C \\quad (p^2<4q), \\quad \\int \\frac{ax+b}{x^2+px+q} dx = \\frac{a}{2}\\ln(x^2+px+q) + \\frac{b-ap/2}{\\sqrt{4q-p^2}} \\arctan\\frac{2x+p}{\\sqrt{4q-p^2}} + C',
    variables: [
      { name: 'a, b, p, q', description: '常数', unit: '' }
    ],
    conditions: 'p² < 4q（判别式小于0）',
    notes: '二次分式的积分，当判别式小于0时',
    derivation: '配方法',
    related: ['calc_integral_031'],
    calculator: {
      inputs: [],
      output: 'result',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'calc_integral_051',
    name: '指数与三角函数的积分',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫eᵃˣ sin bx dx = eᵃˣ(a sin bx - b cos bx)/(a²+b²) + C, ∫eᵃˣ cos bx dx = eᵃˣ(a cos bx + b sin bx)/(a²+b²) + C',
    latex: '\\int e^{ax} \\sin bx dx = \\frac{e^{ax}(a\\sin bx - b\\cos bx)}{a^2+b^2} + C, \\quad \\int e^{ax} \\cos bx dx = \\frac{e^{ax}(a\\cos bx + b\\sin bx)}{a^2+b^2} + C',
    variables: [
      { name: 'a, b', description: '常数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'a²+b² ≠ 0',
    notes: '指数函数与三角函数乘积的积分',
    derivation: '分部积分法（两次）',
    related: ['calc_integral_006', 'calc_integral_037'],
    calculator: {
      inputs: ['func', 'a', 'b', 'x'],
      output: 'result',
      formula: (func, a, b, x) => {
        const exp = Math.exp(a*x);
        if (func === 'e^ax*sin') return exp * (a*Math.sin(b*x) - b*Math.cos(b*x)) / (a*a + b*b);
        if (func === 'e^ax*cos') return exp * (a*Math.cos(b*x) + b*Math.sin(b*x)) / (a*a + b*b);
        return null;
      }
    }
  },
  {
    id: 'calc_integral_052',
    name: '双曲函数积分表 - 其他形式',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: ['大学', '积分表'],
    tags: ['常用公式'],
    formula: '∫sech²x dx = tanh x + C, ∫csch²x dx = -coth x + C, ∫sech x tanh x dx = -sech x + C, ∫csch x coth x dx = -csch x + C',
    latex: '\\int \\text{sech}^2 x dx = \\tanh x + C, \\quad \\int \\text{csch}^2 x dx = -\\coth x + C, \\quad \\int \\text{sech} x \\tanh x dx = -\\text{sech} x + C, \\quad \\int \\text{csch} x \\coth x dx = -\\text{csch} x + C',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'C', description: '积分常数', unit: '' }
    ],
    conditions: 'x ≠ 0（csch, coth）',
    notes: '双曲函数其他形式的积分',
    derivation: '由双曲函数导数公式逆推',
    related: ['calc_integral_041'],
    calculator: {
      inputs: ['func', 'x'],
      output: 'result',
      formula: (func, x) => {
        const sinh = (Math.exp(x) - Math.exp(-x)) / 2;
        const cosh = (Math.exp(x) + Math.exp(-x)) / 2;
        if (func === 'sech^2') return Math.tanh(x);
        if (func === 'csch^2') return -1/Math.tanh(x);
        if (func === 'sech*tanh') return -1/cosh;
        if (func === 'csch*coth') return -1/sinh;
        return null;
      }
    }
  },
  // 微分方程
  {
    id: 'calc_ode_001',
    name: '可分离变量微分方程',
    category: '数学',
    subCategory: '高等数学-微分方程',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'dy/dx = f(x)g(y) → ∫dy/g(y) = ∫f(x)dx',
    latex: '\\frac{dy}{dx} = f(x)g(y) \\quad \\to \\quad \\int \\frac{dy}{g(y)} = \\int f(x)dx',
    variables: [
      { name: 'f(x), g(y)', description: '函数', unit: '' },
      { name: 'x, y', description: '变量', unit: '' }
    ],
    conditions: 'g(y) ≠ 0',
    notes: '变量可分离的一阶微分方程',
    derivation: '分离变量法',
    related: ['calc_integral_001'],
    calculator: {
      inputs: [],
      output: 'y(x)',
      formula: () => '需要具体方程计算'
    }
  },
  {
    id: 'calc_ode_002',
    name: '齐次微分方程',
    category: '数学',
    subCategory: '高等数学-微分方程',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'dy/dx = f(y/x) → 令 u = y/x，化为可分离变量方程',
    latex: '\\frac{dy}{dx} = f\\left(\\frac{y}{x}\\right) \\quad \\to \\quad \\text{令} \\quad u = \\frac{y}{x}, \\quad \\text{化为可分离变量方程}',
    variables: [
      { name: 'f(u)', description: '函数', unit: '' },
      { name: 'u', description: '新变量', unit: '' }
    ],
    conditions: '',
    notes: '可通过变量替换化为可分离变量方程',
    derivation: '变量替换法',
    related: ['calc_ode_001'],
    calculator: {
      inputs: [],
      output: 'y(x)',
      formula: () => '需要具体方程计算'
    }
  },
  {
    id: 'calc_ode_003',
    name: '一阶线性微分方程',
    category: '数学',
    subCategory: '高等数学-微分方程',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: "dy/dx + P(x)y = Q(x) → y = e^(-∫Pdx)[∫Qe^(∫Pdx)dx + C]",
    latex: "\\frac{dy}{dx} + P(x)y = Q(x) \\quad \\to \\quad y = e^{-\\int Pdx}\\left[\\int Qe^{\\int Pdx}dx + C\\right]",
    variables: [
      { name: 'P(x), Q(x)', description: '函数', unit: '' },
      { name: 'C', description: '常数', unit: '' }
    ],
    conditions: 'P(x), Q(x)连续',
    notes: '一阶线性非齐次微分方程的通解公式',
    derivation: '常数变易法',
    related: ['calc_ode_001'],
    calculator: {
      inputs: [],
      output: 'y(x)',
      formula: () => '需要具体方程计算'
    }
  },
  {
    id: 'calc_ode_004',
    name: '二阶常系数齐次线性微分方程',
    category: '数学',
    subCategory: '高等数学-微分方程',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: "y'' + py' + qy = 0 → 特征方程 r² + pr + q = 0，根据根的三种情况求解",
    latex: "y'' + py' + qy = 0 \\quad \\to \\quad \\text{特征方程} \\quad r^2 + pr + q = 0, \\quad \\text{根据根的三种情况求解}",
    variables: [
      { name: 'p, q', description: '常数', unit: '' },
      { name: 'r', description: '特征根', unit: '' }
    ],
    conditions: '',
    notes: '特征方程有两个不同实根、重根或共轭复根时，通解形式不同',
    derivation: '特征方程法',
    related: ['calc_ode_003'],
    calculator: {
      inputs: [],
      output: 'y(x)',
      formula: () => '需要具体方程计算'
    }
  },
  {
    id: 'calc_ode_005',
    name: '欧拉方程',
    category: '数学',
    subCategory: '高等数学-微分方程',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'x²y\'\' + pxy\' + qy = 0 → 令 x = eᵗ，化为常系数方程',
    latex: 'x^2y\'\' + pxy\' + qy = 0 \\quad \\to \\quad \\text{令} \\quad x = e^t, \\quad \\text{化为常系数方程}',
    variables: [
      { name: 'p, q', description: '常数', unit: '' },
      { name: 't', description: '新变量', unit: '' }
    ],
    conditions: 'x > 0',
    notes: '可通过变量替换化为常系数线性微分方程',
    derivation: '变量替换法',
    related: ['calc_ode_004'],
    calculator: {
      inputs: [],
      output: 'y(x)',
      formula: () => '需要具体方程计算'
    }
  },
  // 级数审敛法
  {
    id: 'calc_series_004',
    name: '正项级数审敛法 - 比较判别法',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若 0 ≤ aₙ ≤ bₙ，则：Σbₙ收敛 → Σaₙ收敛，Σaₙ发散 → Σbₙ发散',
    latex: '\\text{若} \\quad 0 \\leq a_n \\leq b_n, \\quad \\text{则：} \\quad \\sum b_n \\text{收敛} \\to \\sum a_n \\text{收敛}, \\quad \\sum a_n \\text{发散} \\to \\sum b_n \\text{发散}',
    variables: [
      { name: 'aₙ, bₙ', description: '级数通项', unit: '' }
    ],
    conditions: 'aₙ ≥ 0, bₙ ≥ 0',
    notes: '通过比较判断正项级数的敛散性',
    derivation: '级数理论',
    related: ['calc_series_001'],
    calculator: {
      inputs: [],
      output: 'convergence',
      formula: () => '需要具体级数判断'
    }
  },
  {
    id: 'calc_series_005',
    name: '正项级数审敛法 - 比值判别法（达朗贝尔）',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'lim(n→∞) |aₙ₊₁/aₙ| = ρ，ρ < 1 收敛，ρ > 1 发散，ρ = 1 失效',
    latex: '\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\rho, \\quad \\rho < 1 \\text{收敛}, \\quad \\rho > 1 \\text{发散}, \\quad \\rho = 1 \\text{失效}',
    variables: [
      { name: 'aₙ', description: '级数通项', unit: '' },
      { name: 'ρ', description: '极限值', unit: '' }
    ],
    conditions: 'aₙ > 0',
    notes: '通过相邻项的比值判断级数敛散性',
    derivation: '级数理论',
    related: ['calc_series_004'],
    calculator: {
      inputs: [],
      output: 'convergence',
      formula: () => '需要具体级数判断'
    }
  },
  {
    id: 'calc_series_006',
    name: '正项级数审敛法 - 根值判别法（柯西）',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'lim(n→∞) ⁿ√|aₙ| = ρ，ρ < 1 收敛，ρ > 1 发散，ρ = 1 失效',
    latex: '\\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} = \\rho, \\quad \\rho < 1 \\text{收敛}, \\quad \\rho > 1 \\text{发散}, \\quad \\rho = 1 \\text{失效}',
    variables: [
      { name: 'aₙ', description: '级数通项', unit: '' },
      { name: 'ρ', description: '极限值', unit: '' }
    ],
    conditions: '',
    notes: '通过通项的n次方根判断级数敛散性',
    derivation: '级数理论',
    related: ['calc_series_005'],
    calculator: {
      inputs: [],
      output: 'convergence',
      formula: () => '需要具体级数判断'
    }
  },
  {
    id: 'calc_series_007',
    name: '交错级数审敛法 - 莱布尼茨判别法',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若 aₙ ≥ aₙ₊₁ > 0 且 lim aₙ = 0，则 Σ(-1)ⁿaₙ 收敛',
    latex: '\\text{若} \\quad a_n \\geq a_{n+1} > 0 \\quad \\text{且} \\quad \\lim a_n = 0, \\quad \\text{则} \\quad \\sum (-1)^n a_n \\text{收敛}',
    variables: [
      { name: 'aₙ', description: '级数通项', unit: '' }
    ],
    conditions: 'aₙ > 0',
    notes: '判断交错级数的收敛性',
    derivation: '级数理论',
    related: ['calc_series_004'],
    calculator: {
      inputs: [],
      output: 'convergence',
      formula: () => '需要具体级数判断'
    }
  },
  {
    id: 'calc_series_008',
    name: '傅里叶级数',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'f(x) = a₀/2 + Σ(n=1 to ∞)[aₙcos(nπx/L) + bₙsin(nπx/L)]',
    latex: 'f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}[a_n\\cos\\frac{n\\pi x}{L} + b_n\\sin\\frac{n\\pi x}{L}]',
    variables: [
      { name: 'f(x)', description: '周期函数', unit: '' },
      { name: 'aₙ, bₙ', description: '傅里叶系数', unit: '' },
      { name: 'L', description: '半周期', unit: '' }
    ],
    conditions: 'f(x)周期为2L，满足狄利克雷条件',
    notes: '将周期函数展开为三角函数级数',
    derivation: '傅里叶分析',
    related: ['calc_series_001'],
    calculator: {
      inputs: [],
      output: 'series',
      formula: () => '需要具体函数计算'
    }
  },
  // 复变函数
  {
    id: 'calc_complex_001',
    name: '欧拉公式',
    category: '数学',
    subCategory: '复变函数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'e^(iθ) = cos θ + i sin θ',
    latex: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta',
    variables: [
      { name: 'θ', description: '角度（弧度）', unit: 'rad' },
      { name: 'i', description: '虚数单位', unit: 'i² = -1' },
      { name: 'e', description: '自然常数', unit: '' }
    ],
    conditions: '',
    notes: '连接指数函数和三角函数的桥梁，复数的指数形式',
    derivation: '幂级数展开',
    related: ['calc_series_003'],
    calculator: {
      inputs: ['theta'],
      output: 'result',
      formula: (theta) => {
        return {
          real: Math.cos(theta),
          imag: Math.sin(theta)
        };
      }
    }
  },
  {
    id: 'calc_complex_002',
    name: '复数指数形式',
    category: '数学',
    subCategory: '复变函数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'z = r(cos θ + i sin θ) = re^(iθ)',
    latex: 'z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}',
    variables: [
      { name: 'z', description: '复数', unit: '' },
      { name: 'r', description: '模长', unit: '' },
      { name: 'θ', description: '幅角', unit: 'rad' }
    ],
    conditions: '',
    notes: '复数的极坐标形式（三角形式）和指数形式',
    derivation: '欧拉公式',
    related: ['calc_complex_001'],
    calculator: {
      inputs: ['r', 'theta'],
      output: 'z',
      formula: (r, theta) => {
        return {
          real: r * Math.cos(theta),
          imag: r * Math.sin(theta)
        };
      }
    }
  },
  {
    id: 'calc_complex_003',
    name: '棣莫弗公式',
    category: '数学',
    subCategory: '复变函数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '[r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)',
    latex: '[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)',
    variables: [
      { name: 'r', description: '模长', unit: '' },
      { name: 'θ', description: '幅角', unit: 'rad' },
      { name: 'n', description: '幂次', unit: '' }
    ],
    conditions: '',
    notes: '复数乘幂公式，用指数形式表示为 (re^(iθ))ⁿ = rⁿe^(inθ)',
    derivation: '欧拉公式和指数运算',
    related: ['calc_complex_002'],
    calculator: {
      inputs: ['r', 'theta', 'n'],
      output: 'result',
      formula: (r, theta, n) => {
        return {
          real: Math.pow(r, n) * Math.cos(n * theta),
          imag: Math.pow(r, n) * Math.sin(n * theta)
        };
      }
    }
  },
  {
    id: 'calc_complex_004',
    name: '复数开方公式',
    category: '数学',
    subCategory: '复变函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'ⁿ√z = ⁿ√r[cos((θ + 2kπ)/n) + i sin((θ + 2kπ)/n)], k = 0,1,...,n-1',
    latex: '\\sqrt[n]{z} = \\sqrt[n]{r}\\left[\\cos\\frac{\\theta + 2k\\pi}{n} + i\\sin\\frac{\\theta + 2k\\pi}{n}\\right], \\quad k = 0,1,\\ldots,n-1',
    variables: [
      { name: 'z', description: '复数', unit: '' },
      { name: 'r', description: '模长', unit: '' },
      { name: 'θ', description: '幅角', unit: 'rad' },
      { name: 'n', description: '开方次数', unit: '' },
      { name: 'k', description: '整数', unit: '' }
    ],
    conditions: '',
    notes: '复数的n次方根有n个不同的值',
    derivation: '棣莫弗公式',
    related: ['calc_complex_003'],
    calculator: {
      inputs: [],
      output: 'roots',
      formula: () => '需要具体计算'
    }
  },
  // 更多线性代数公式
  {
    id: 'linear_matrix_005',
    name: '矩阵的秩',
    category: '数学',
    subCategory: '线性代数-矩阵',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'r(A) = 矩阵A中非零子式的最高阶数',
    latex: 'r(A) = \\text{矩阵A中非零子式的最高阶数}',
    variables: [
      { name: 'A', description: '矩阵', unit: '' },
      { name: 'r(A)', description: '矩阵的秩', unit: '' }
    ],
    conditions: '',
    notes: '矩阵的秩等于其行向量组或列向量组的最大线性无关组的向量个数',
    derivation: '线性代数理论',
    related: ['linear_matrix_002'],
    calculator: {
      inputs: [],
      output: 'rank',
      formula: () => '需要具体矩阵计算'
    }
  },
  {
    id: 'linear_matrix_006',
    name: '相似矩阵',
    category: '数学',
    subCategory: '线性代数-矩阵',
    grade: '大学',
    tags: ['常用公式'],
    formula: '若存在可逆矩阵P，使得 B = P⁻¹AP，则A与B相似',
    latex: '\\text{若存在可逆矩阵P，使得} \\quad B = P^{-1}AP, \\quad \\text{则A与B相似}',
    variables: [
      { name: 'A, B', description: '矩阵', unit: '' },
      { name: 'P', description: '可逆矩阵', unit: '' }
    ],
    conditions: 'P可逆',
    notes: '相似矩阵有相同的特征值、行列式和迹',
    derivation: '相似变换定义',
    related: ['linear_matrix_004', 'linear_eigen_001'],
    calculator: {
      inputs: [],
      output: 'similar',
      formula: () => '需要具体矩阵判断'
    }
  },
  {
    id: 'linear_vector_001',
    name: '施密特正交化',
    category: '数学',
    subCategory: '线性代数-向量',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'β₁ = α₁, β₂ = α₂ - (α₂,β₁)/(β₁,β₁)·β₁, β₃ = α₃ - (α₃,β₁)/(β₁,β₁)·β₁ - (α₃,β₂)/(β₂,β₂)·β₂, ...',
    latex: '\\beta_1 = \\alpha_1, \\quad \\beta_2 = \\alpha_2 - \\frac{(\\alpha_2,\\beta_1)}{(\\beta_1,\\beta_1)}\\cdot\\beta_1, \\quad \\beta_3 = \\alpha_3 - \\frac{(\\alpha_3,\\beta_1)}{(\\beta_1,\\beta_1)}\\cdot\\beta_1 - \\frac{(\\alpha_3,\\beta_2)}{(\\beta_2,\\beta_2)}\\cdot\\beta_2, \\ldots',
    variables: [
      { name: 'αᵢ', description: '原向量组', unit: '' },
      { name: 'βᵢ', description: '正交化后的向量组', unit: '' },
      { name: '(·,·)', description: '内积', unit: '' }
    ],
    conditions: 'α₁, α₂, ..., αₙ 线性无关',
    notes: '将线性无关向量组正交化',
    derivation: '正交投影',
    related: ['linear_eigen_001'],
    calculator: {
      inputs: [],
      output: 'orthogonal',
      formula: () => '需要具体向量计算'
    }
  },
  {
    id: 'linear_eigen_002',
    name: '特征值的性质',
    category: '数学',
    subCategory: '线性代数-特征值',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σλᵢ = tr(A)（迹），Πλᵢ = |A|（行列式）',
    latex: '\\sum \\lambda_i = \\text{tr}(A) \\text{（迹）}, \\quad \\prod \\lambda_i = |A| \\text{（行列式）}',
    variables: [
      { name: 'λᵢ', description: '特征值', unit: '' },
      { name: 'A', description: '矩阵', unit: '' },
      { name: 'tr(A)', description: '矩阵的迹', unit: '' }
    ],
    conditions: 'A为n阶方阵',
    notes: '特征值的和等于矩阵的迹，特征值的积等于矩阵的行列式',
    derivation: '特征多项式',
    related: ['linear_eigen_001', 'linear_det_001'],
    calculator: {
      inputs: [],
      output: 'properties',
      formula: () => '需要具体矩阵计算'
    }
  },
  // 更多概率论公式
  {
    id: 'prob_dist_001',
    name: '二项分布',
    category: '数学',
    subCategory: '概率论-分布',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'P(X = k) = C(n,k) pᵏ(1-p)ⁿ⁻ᵏ, E(X) = np, D(X) = np(1-p)',
    latex: 'P(X = k) = C_n^k p^k(1-p)^{n-k}, \\quad E(X) = np, \\quad D(X) = np(1-p)',
    variables: [
      { name: 'n', description: '试验次数', unit: '' },
      { name: 'k', description: '成功次数', unit: '' },
      { name: 'p', description: '成功概率', unit: '' },
      { name: 'E(X)', description: '数学期望', unit: '' },
      { name: 'D(X)', description: '方差', unit: '' }
    ],
    conditions: '0 ≤ p ≤ 1, k = 0,1,...,n',
    notes: 'n次独立重复试验中成功k次的概率',
    derivation: '概率定义',
    related: ['prob_basic_001'],
    calculator: {
      inputs: ['n', 'k', 'p'],
      output: 'P',
      formula: (n, k, p) => {
        const comb = (n, k) => {
          if (k > n) return 0;
          let res = 1;
          for (let i = 0; i < k; i++) {
            res = res * (n - i) / (i + 1);
          }
          return res;
        };
        return comb(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
      }
    }
  },
  {
    id: 'prob_dist_002',
    name: '泊松分布',
    category: '数学',
    subCategory: '概率论-分布',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'P(X = k) = λᵏe⁻ᵏ/k!, E(X) = λ, D(X) = λ',
    latex: 'P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad E(X) = \\lambda, \\quad D(X) = \\lambda',
    variables: [
      { name: 'λ', description: '参数（平均次数）', unit: '' },
      { name: 'k', description: '事件发生次数', unit: '' },
      { name: 'E(X)', description: '数学期望', unit: '' },
      { name: 'D(X)', description: '方差', unit: '' }
    ],
    conditions: 'λ > 0, k = 0,1,2,...',
    notes: '描述单位时间内随机事件发生次数的概率分布',
    derivation: '二项分布的极限形式',
    related: ['prob_dist_001'],
    calculator: {
      inputs: ['lambda', 'k'],
      output: 'P',
      formula: (lambda, k) => {
        const factorial = (n) => {
          if (n <= 1) return 1;
          return n * factorial(n - 1);
        };
        return Math.pow(lambda, k) * Math.exp(-lambda) / factorial(k);
      }
    }
  },
  {
    id: 'prob_dist_003',
    name: '正态分布',
    category: '数学',
    subCategory: '概率论-分布',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'f(x) = (1/√(2π)σ) e^(-(x-μ)²/(2σ²)), E(X) = μ, D(X) = σ²',
    latex: 'f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad E(X) = \\mu, \\quad D(X) = \\sigma^2',
    variables: [
      { name: 'μ', description: '均值', unit: '' },
      { name: 'σ', description: '标准差', unit: '' },
      { name: 'E(X)', description: '数学期望', unit: '' },
      { name: 'D(X)', description: '方差', unit: '' }
    ],
    conditions: 'σ > 0',
    notes: '最重要的连续型概率分布，许多随机现象都服从或近似服从正态分布',
    derivation: '概率密度函数定义',
    related: ['prob_basic_001'],
    calculator: {
      inputs: ['x', 'mu', 'sigma'],
      output: 'f',
      formula: (x, mu, sigma) => {
        return (1 / (Math.sqrt(2 * Math.PI) * sigma)) * Math.exp(-Math.pow(x - mu, 2) / (2 * sigma * sigma));
      }
    }
  },
  {
    id: 'prob_dist_004',
    name: '标准正态分布',
    category: '数学',
    subCategory: '概率论-分布',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若 X ~ N(μ,σ²)，则 Z = (X-μ)/σ ~ N(0,1)',
    latex: '\\text{若} \\quad X \\sim N(\\mu,\\sigma^2), \\quad \\text{则} \\quad Z = \\frac{X-\\mu}{\\sigma} \\sim N(0,1)',
    variables: [
      { name: 'X', description: '随机变量', unit: '' },
      { name: 'μ', description: '均值', unit: '' },
      { name: 'σ', description: '标准差', unit: '' },
      { name: 'Z', description: '标准化随机变量', unit: '' }
    ],
    conditions: 'σ > 0',
    notes: '将一般正态分布标准化为标准正态分布',
    derivation: '线性变换',
    related: ['prob_dist_003'],
    calculator: {
      inputs: ['x', 'mu', 'sigma'],
      output: 'z',
      formula: (x, mu, sigma) => (x - mu) / sigma
    }
  },
  {
    id: 'prob_stat_001',
    name: '中心极限定理',
    category: '数学',
    subCategory: '概率论-统计',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若 X₁,X₂,...,Xₙ 独立同分布，E(Xᵢ) = μ, D(Xᵢ) = σ²，则 (X̄-μ)/(σ/√n) 近似服从 N(0,1)',
    latex: '\\text{若} \\quad X_1,X_2,\\ldots,X_n \\text{独立同分布}, \\quad E(X_i) = \\mu, D(X_i) = \\sigma^2, \\quad \\text{则} \\quad \\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\text{近似服从} N(0,1)',
    variables: [
      { name: 'Xᵢ', description: '随机变量', unit: '' },
      { name: 'X̄', description: '样本均值', unit: '' },
      { name: 'μ', description: '总体均值', unit: '' },
      { name: 'σ', description: '总体标准差', unit: '' },
      { name: 'n', description: '样本容量', unit: '' }
    ],
    conditions: 'n充分大',
    notes: '无论总体分布如何，样本均值的分布都近似正态分布',
    derivation: '概率论极限理论',
    related: ['prob_dist_003'],
    calculator: {
      inputs: [],
      output: 'approximation',
      formula: () => '需要具体数据计算'
    }
  },
  {
    id: 'prob_stat_002',
    name: '大数定律',
    category: '数学',
    subCategory: '概率论-统计',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'lim(n→∞) P(|X̄ - μ| < ε) = 1',
    latex: '\\lim_{n \\to \\infty} P(|\\bar{X} - \\mu| < \\varepsilon) = 1',
    variables: [
      { name: 'X̄', description: '样本均值', unit: '' },
      { name: 'μ', description: '总体均值', unit: '' },
      { name: 'ε', description: '任意正数', unit: '' },
      { name: 'n', description: '样本容量', unit: '' }
    ],
    conditions: 'n → ∞',
    notes: '样本均值依概率收敛于总体均值',
    derivation: '概率论极限理论',
    related: ['prob_stat_001'],
    calculator: {
      inputs: [],
      output: 'convergence',
      formula: () => '理论结果'
    }
  },
  // 数学分析
  {
    id: 'math_analysis_001',
    name: '函数连续性定义',
    category: '数学',
    subCategory: '数学分析-连续性',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'lim(x→x₀) f(x) = f(x₀)',
    latex: '\\lim_{x \\to x_0} f(x) = f(x_0)',
    variables: [
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'x₀', description: '点', unit: '' }
    ],
    conditions: 'f(x)在x₀的邻域内有定义',
    notes: '函数在某点连续的定义',
    derivation: '连续性定义',
    related: ['calc_limit_001'],
    calculator: {
      inputs: [],
      output: 'continuous',
      formula: () => '需要具体函数判断'
    }
  },
  {
    id: 'math_analysis_002',
    name: '一致连续性',
    category: '数学',
    subCategory: '数学分析-连续性',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∀ε > 0, ∃δ > 0, 使得当 |x₁ - x₂| < δ 时，|f(x₁) - f(x₂)| < ε 对所有 x₁,x₂ ∈ I 成立',
    latex: '\\forall \\varepsilon > 0, \\exists \\delta > 0, \\text{使得当} |x_1 - x_2| < \\delta \\text{时}, |f(x_1) - f(x_2)| < \\varepsilon \\text{对所有} x_1,x_2 \\in I \\text{成立}',
    variables: [
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'I', description: '区间', unit: '' },
      { name: 'ε, δ', description: '正数', unit: '' }
    ],
    conditions: 'f(x)在区间I上有定义',
    notes: 'δ的选取与x无关，只与ε有关',
    derivation: '一致连续性定义',
    related: ['math_analysis_001'],
    calculator: {
      inputs: [],
      output: 'uniform_continuous',
      formula: () => '需要具体函数判断'
    }
  },
  {
    id: 'math_analysis_003',
    name: '可微性定义',
    category: '数学',
    subCategory: '数学分析-可微性',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'f(x) = f(x₀) + f\'(x₀)(x-x₀) + o(x-x₀)',
    latex: 'f(x) = f(x_0) + f\'(x_0)(x-x_0) + o(x-x_0)',
    variables: [
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'x₀', description: '点', unit: '' },
      { name: "f'(x₀)", description: '导数', unit: '' }
    ],
    conditions: 'f(x)在x₀可导',
    notes: '可微函数的线性近似',
    derivation: '可微性定义',
    related: ['calc_derivative_001'],
    calculator: {
      inputs: [],
      output: 'differentiable',
      formula: () => '需要具体函数判断'
    }
  },
  {
    id: 'math_analysis_004',
    name: '拉格朗日中值定理',
    category: '数学',
    subCategory: '数学分析-微分中值定理',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若f(x)在[a,b]连续，在(a,b)可导，则存在ξ∈(a,b)，使得 f\'(ξ) = [f(b)-f(a)]/(b-a)',
    latex: '\\text{若f(x)在[a,b]连续，在(a,b)可导，则存在} \\xi \\in (a,b), \\text{使得} \\quad f\'(\\xi) = \\frac{f(b)-f(a)}{b-a}',
    variables: [
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'a, b', description: '区间端点', unit: '' },
      { name: 'ξ', description: '中值点', unit: '' }
    ],
    conditions: 'f(x)在[a,b]连续，在(a,b)可导',
    notes: '连接函数值和导数值的重要定理',
    derivation: '罗尔定理',
    related: ['calc_derivative_001', 'math_analysis_001'],
    calculator: {
      inputs: [],
      output: 'xi',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'math_analysis_005',
    name: '柯西中值定理',
    category: '数学',
    subCategory: '数学分析-微分中值定理',
    grade: '大学',
    tags: ['常用公式'],
    formula: '若f(x),g(x)在[a,b]连续，在(a,b)可导，且g\'(x)≠0，则存在ξ∈(a,b)，使得 [f(b)-f(a)]/[g(b)-g(a)] = f\'(ξ)/g\'(ξ)',
    latex: '\\text{若f(x),g(x)在[a,b]连续，在(a,b)可导，且g\'(x)≠0，则存在} \\xi \\in (a,b), \\text{使得} \\quad \\frac{f(b)-f(a)}{g(b)-g(a)} = \\frac{f\'(\\xi)}{g\'(\\xi)}',
    variables: [
      { name: 'f(x), g(x)', description: '函数', unit: '' },
      { name: 'a, b', description: '区间端点', unit: '' },
      { name: 'ξ', description: '中值点', unit: '' }
    ],
    conditions: 'f(x),g(x)在[a,b]连续，在(a,b)可导，g\'(x)≠0',
    notes: '拉格朗日中值定理的推广',
    derivation: '拉格朗日中值定理',
    related: ['math_analysis_004'],
    calculator: {
      inputs: [],
      output: 'xi',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'math_analysis_006',
    name: '洛必达法则',
    category: '数学',
    subCategory: '数学分析-极限',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若 lim f(x)/g(x) 为 0/0 或 ∞/∞，且 lim f\'(x)/g\'(x) 存在，则 lim f(x)/g(x) = lim f\'(x)/g\'(x)',
    latex: '\\text{若} \\lim \\frac{f(x)}{g(x)} \\text{为} 0/0 \\text{或} \\infty/\\infty, \\text{且} \\lim \\frac{f\'(x)}{g\'(x)} \\text{存在，则} \\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}',
    variables: [
      { name: 'f(x), g(x)', description: '函数', unit: '' },
      { name: "f'(x), g'(x)", description: '导数', unit: '' }
    ],
    conditions: '0/0或∞/∞型未定式，导数极限存在',
    notes: '用于计算未定式极限',
    derivation: '柯西中值定理',
    related: ['calc_limit_001', 'math_analysis_005'],
    calculator: {
      inputs: [],
      output: 'limit',
      formula: () => '需要具体函数计算'
    }
  },
  // Sobolev空间
  {
    id: 'sobolev_001',
    name: 'Sobolev空间定义',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'W^(k,p)(Ω) = {u ∈ L^p(Ω) : D^αu ∈ L^p(Ω), |α| ≤ k}',
    latex: 'W^{k,p}(\\Omega) = \\{u \\in L^p(\\Omega) : D^{\\alpha}u \\in L^p(\\Omega), |\\alpha| \\leq k\\}',
    variables: [
      { name: 'W^(k,p)(Ω)', description: 'Sobolev空间', unit: '' },
      { name: 'k', description: '阶数', unit: '' },
      { name: 'p', description: '指数，1 ≤ p ≤ ∞', unit: '' },
      { name: 'Ω', description: '开区域', unit: '' },
      { name: 'α', description: '多重指标', unit: '' },
      { name: 'D^αu', description: '弱导数', unit: '' },
      { name: 'L^p(Ω)', description: 'Lebesgue空间', unit: '' }
    ],
    conditions: '1 ≤ p ≤ ∞, k ∈ ℕ',
    notes: 'Sobolev空间是所有直到k阶的弱导数都属于L^p空间的函数组成的Banach空间',
    derivation: '泛函分析理论',
    related: ['sobolev_002'],
    calculator: {
      inputs: [],
      output: 'space',
      formula: () => '理论定义'
    }
  },
  {
    id: 'sobolev_002',
    name: 'Sobolev范数',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '||u||_(W^(k,p)) = (Σ(|α|≤k) ∫_Ω |D^αu|^p dx)^(1/p)',
    latex: '\\|u\\|_{W^{k,p}} = \\left(\\sum_{|\\alpha|\\leq k} \\int_{\\Omega} |D^{\\alpha}u|^p dx\\right)^{1/p}',
    variables: [
      { name: '||u||_(W^(k,p))', description: 'Sobolev范数', unit: '' },
      { name: 'k', description: '阶数', unit: '' },
      { name: 'p', description: '指数', unit: '' },
      { name: 'D^αu', description: '弱导数', unit: '' },
      { name: 'α', description: '多重指标', unit: '' }
    ],
    conditions: '1 ≤ p < ∞',
    notes: '当p = ∞时，范数定义为 ||u||_(W^(k,∞)) = max(|α|≤k) ||D^αu||_(L^∞)',
    derivation: 'Sobolev空间定义',
    related: ['sobolev_001'],
    calculator: {
      inputs: [],
      output: 'norm',
      formula: () => '需要具体函数计算'
    }
  },
  {
    id: 'sobolev_003',
    name: 'H^k空间（Hilbert-Sobolev空间）',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'H^k(Ω) = W^(k,2)(Ω)',
    latex: 'H^k(\\Omega) = W^{k,2}(\\Omega)',
    variables: [
      { name: 'H^k(Ω)', description: 'Hilbert-Sobolev空间', unit: '' },
      { name: 'W^(k,2)(Ω)', description: 'Sobolev空间（p=2）', unit: '' },
      { name: 'k', description: '阶数', unit: '' }
    ],
    conditions: '',
    notes: '当p=2时，Sobolev空间是Hilbert空间，具有内积：<u,v>_(H^k) = Σ(|α|≤k) ∫_Ω D^αu · D^αv dx',
    derivation: 'Sobolev空间定义',
    related: ['sobolev_001', 'sobolev_002'],
    calculator: {
      inputs: [],
      output: 'space',
      formula: () => '理论定义'
    }
  },
  {
    id: 'sobolev_004',
    name: 'Sobolev嵌入定理（基本形式）',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若 kp < n，则 W^(k,p)(ℝⁿ) ⊂ L^(p*)(ℝⁿ)，其中 p* = np/(n-kp)',
    latex: '\\text{若} \\quad kp < n, \\quad \\text{则} \\quad W^{k,p}(\\mathbb{R}^n) \\subset L^{p^*}(\\mathbb{R}^n), \\quad \\text{其中} \\quad p^* = \\frac{np}{n-kp}',
    variables: [
      { name: 'k', description: '阶数', unit: '' },
      { name: 'p', description: '指数', unit: '' },
      { name: 'n', description: '空间维数', unit: '' },
      { name: 'p*', description: '临界指数', unit: '' }
    ],
    conditions: 'kp < n, Ω有界且边界充分光滑时也成立',
    notes: 'Sobolev空间可以连续嵌入到Lebesgue空间中，是偏微分方程理论的基础',
    derivation: 'Sobolev嵌入定理',
    related: ['sobolev_001'],
    calculator: {
      inputs: ['k', 'p', 'n'],
      output: 'p_star',
      formula: (k, p, n) => (n * p) / (n - k * p)
    }
  },
  {
    id: 'sobolev_005',
    name: 'Sobolev嵌入定理（临界情况）',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式'],
    formula: '若 kp = n，则 W^(k,p)(ℝⁿ) ⊂ L^q(ℝⁿ) 对所有 q ∈ [p,∞) 成立',
    latex: '\\text{若} \\quad kp = n, \\quad \\text{则} \\quad W^{k,p}(\\mathbb{R}^n) \\subset L^q(\\mathbb{R}^n) \\quad \\text{对所有} \\quad q \\in [p,\\infty) \\text{成立}',
    variables: [
      { name: 'k', description: '阶数', unit: '' },
      { name: 'p', description: '指数', unit: '' },
      { name: 'n', description: '空间维数', unit: '' },
      { name: 'q', description: 'Lebesgue空间指数', unit: '' }
    ],
    conditions: 'kp = n',
    notes: '临界情况下的Sobolev嵌入',
    derivation: 'Sobolev嵌入定理',
    related: ['sobolev_004'],
    calculator: {
      inputs: [],
      output: 'embedding',
      formula: () => '理论结果'
    }
  },
  {
    id: 'sobolev_006',
    name: 'Morrey不等式',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式'],
    formula: '若 kp > n，则 W^(k,p)(ℝⁿ) ⊂ C^0,α(ℝⁿ)，其中 α = k - n/p',
    latex: '\\text{若} \\quad kp > n, \\quad \\text{则} \\quad W^{k,p}(\\mathbb{R}^n) \\subset C^{0,\\alpha}(\\mathbb{R}^n), \\quad \\text{其中} \\quad \\alpha = k - n/p',
    variables: [
      { name: 'k', description: '阶数', unit: '' },
      { name: 'p', description: '指数', unit: '' },
      { name: 'n', description: '空间维数', unit: '' },
      { name: 'α', description: 'Hölder指数', unit: '' },
      { name: 'C^0,α', description: 'Hölder连续函数空间', unit: '' }
    ],
    conditions: 'kp > n',
    notes: '当kp > n时，Sobolev空间可以嵌入到连续函数空间中',
    derivation: 'Morrey不等式',
    related: ['sobolev_004'],
    calculator: {
      inputs: ['k', 'p', 'n'],
      output: 'alpha',
      formula: (k, p, n) => k - n / p
    }
  },
  {
    id: 'sobolev_007',
    name: 'Poincaré不等式',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '对于 u ∈ H₀¹(Ω)，有 ||u||_(L²) ≤ C ||∇u||_(L²)',
    latex: '\\text{对于} \\quad u \\in H_0^1(\\Omega), \\quad \\text{有} \\quad \\|u\\|_{L^2} \\leq C \\|\\nabla u\\|_{L^2}',
    variables: [
      { name: 'u', description: '函数', unit: '' },
      { name: 'H₀¹(Ω)', description: '零边界条件的Sobolev空间', unit: '' },
      { name: 'C', description: 'Poincaré常数', unit: '' },
      { name: '∇u', description: '梯度', unit: '' }
    ],
    conditions: 'Ω有界，u在边界上为零',
    notes: '在零边界条件下，L²范数可以用梯度的L²范数控制',
    derivation: '变分法',
    related: ['sobolev_003'],
    calculator: {
      inputs: [],
      output: 'inequality',
      formula: () => '理论结果'
    }
  },
  {
    id: 'sobolev_008',
    name: '弱导数定义',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '对于 u ∈ L^p(Ω)，若存在 v ∈ L^p(Ω) 使得 ∫_Ω u·D^αφ dx = (-1)^|α| ∫_Ω v·φ dx 对所有 φ ∈ C₀^∞(Ω)，则称 v = D^αu',
    latex: '\\text{对于} \\quad u \\in L^p(\\Omega), \\quad \\text{若存在} \\quad v \\in L^p(\\Omega) \\quad \\text{使得} \\quad \\int_{\\Omega} u \\cdot D^{\\alpha}\\varphi dx = (-1)^{|\\alpha|} \\int_{\\Omega} v \\cdot \\varphi dx \\quad \\text{对所有} \\quad \\varphi \\in C_0^{\\infty}(\\Omega), \\quad \\text{则称} \\quad v = D^{\\alpha}u',
    variables: [
      { name: 'u', description: '函数', unit: '' },
      { name: 'v = D^αu', description: '弱导数', unit: '' },
      { name: 'α', description: '多重指标', unit: '' },
      { name: 'φ', description: '测试函数（紧支光滑函数）', unit: '' }
    ],
    conditions: '',
    notes: '弱导数是对经典导数的推广，适用于不可微的函数',
    derivation: '分布理论',
    related: ['sobolev_001'],
    calculator: {
      inputs: [],
      output: 'weak_derivative',
      formula: () => '理论定义'
    }
  },
  {
    id: 'sobolev_009',
    name: 'Rellich-Kondrachov紧嵌入定理',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式'],
    formula: '若 kp < n，Ω有界且边界Lipschitz，则 W^(k,p)(Ω) 紧嵌入到 L^q(Ω)，其中 1 ≤ q < p*',
    latex: '\\text{若} \\quad kp < n, \\Omega \\text{有界且边界Lipschitz}, \\quad \\text{则} \\quad W^{k,p}(\\Omega) \\text{紧嵌入到} L^q(\\Omega), \\quad \\text{其中} \\quad 1 \\leq q < p^*',
    variables: [
      { name: 'k', description: '阶数', unit: '' },
      { name: 'p', description: '指数', unit: '' },
      { name: 'n', description: '空间维数', unit: '' },
      { name: 'q', description: 'Lebesgue空间指数', unit: '' },
      { name: 'p*', description: '临界指数', unit: '' }
    ],
    conditions: 'Ω有界，边界Lipschitz连续，kp < n',
    notes: '紧嵌入意味着有界序列存在收敛子列，在偏微分方程存在性理论中非常重要',
    derivation: 'Rellich-Kondrachov定理',
    related: ['sobolev_004'],
    calculator: {
      inputs: [],
      output: 'compact_embedding',
      formula: () => '理论结果'
    }
  },
  {
    id: 'sobolev_010',
    name: '分数阶Sobolev空间',
    category: '数学',
    subCategory: '泛函分析-Sobolev空间',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'W^(s,p)(Ω) = {u ∈ L^p(Ω) : [u]_(W^(s,p)) < ∞}，其中 [u]_(W^(s,p))^p = ∫_Ω∫_Ω |u(x)-u(y)|^p/|x-y|^(n+sp) dxdy',
    latex: 'W^{s,p}(\\Omega) = \\{u \\in L^p(\\Omega) : [u]_{W^{s,p}} < \\infty\\}, \\quad \\text{其中} \\quad [u]_{W^{s,p}}^p = \\int_{\\Omega}\\int_{\\Omega} \\frac{|u(x)-u(y)|^p}{|x-y|^{n+sp}} dxdy',
    variables: [
      { name: 'W^(s,p)(Ω)', description: '分数阶Sobolev空间', unit: '' },
      { name: 's', description: '分数阶数', unit: '' },
      { name: 'p', description: '指数', unit: '' },
      { name: '[u]_(W^(s,p))', description: 'Gagliardo半范数', unit: '' }
    ],
    conditions: '0 < s < 1',
    notes: '分数阶Sobolev空间允许非整数阶的导数，在分数阶偏微分方程中非常重要',
    derivation: '分数阶微积分理论',
    related: ['sobolev_001'],
    calculator: {
      inputs: [],
      output: 'space',
      formula: () => '理论定义'
    }
  },
  // 初等数论
  {
    id: 'number_theory_001',
    name: '欧几里得算法（最大公约数）',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'gcd(a, b) = gcd(b, a mod b)，直到余数为0，最后的除数即为最大公约数',
    latex: '\\gcd(a, b) = \\gcd(b, a \\bmod b), \\quad \\text{直到余数为0}',
    variables: [
      { name: 'a, b', description: '正整数', unit: '' },
      { name: 'gcd(a, b)', description: 'a和b的最大公约数', unit: '' }
    ],
    conditions: 'a, b 为正整数',
    notes: '经典的递归算法，时间复杂度为O(log min(a,b))',
    derivation: '基于整除性质',
    related: ['number_theory_002'],
    calculator: {
      inputs: ['a', 'b'],
      output: 'gcd',
      formula: (a, b) => {
        while (b !== 0) {
          [a, b] = [b, a % b];
        }
        return a;
      }
    }
  },
  {
    id: 'number_theory_002',
    name: '扩展欧几里得算法',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '对于gcd(a, b) = d，存在整数x, y使得 ax + by = d',
    latex: '\\gcd(a, b) = d \\Rightarrow \\exists x, y \\in \\mathbb{Z}: ax + by = d',
    variables: [
      { name: 'a, b', description: '正整数', unit: '' },
      { name: 'x, y', description: '贝祖等式系数', unit: '' },
      { name: 'd', description: '最大公约数', unit: '' }
    ],
    conditions: 'a, b 为正整数',
    notes: '用于求解线性丢番图方程，在密码学中应用广泛',
    derivation: '扩展欧几里得算法',
    related: ['number_theory_001', 'number_theory_004'],
    calculator: {
      inputs: ['a', 'b'],
      output: '[d, x, y]',
      formula: (a, b) => {
        if (b === 0) return [a, 1, 0];
        const [d, x1, y1] = arguments.callee(b, a % b);
        return [d, y1, x1 - Math.floor(a / b) * y1];
      }
    }
  },
  {
    id: 'number_theory_003',
    name: '费马小定理',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若p是素数，且gcd(a, p) = 1，则 a^(p-1) ≡ 1 (mod p)',
    latex: '\\text{若}p\\text{是素数，且}\\gcd(a, p) = 1\\text{，则} \\quad a^{p-1} \\equiv 1 \\pmod{p}',
    variables: [
      { name: 'p', description: '素数', unit: '' },
      { name: 'a', description: '与p互质的整数', unit: '' }
    ],
    conditions: 'p为素数，gcd(a, p) = 1',
    notes: '数论中的基本定理，在密码学（如RSA算法）中有重要应用',
    derivation: '群论或组合证明',
    related: ['number_theory_004'],
    calculator: {
      inputs: ['a', 'p'],
      output: 'result',
      formula: (a, p) => {
        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        if (gcd(a, p) !== 1) return 'a与p必须互质';
        let result = 1;
        for (let i = 0; i < p - 1; i++) {
          result = (result * a) % p;
        }
        return result;
      }
    }
  },
  {
    id: 'number_theory_004',
    name: '欧拉定理',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若gcd(a, n) = 1，则 a^φ(n) ≡ 1 (mod n)，其中φ(n)是欧拉函数',
    latex: '\\text{若}\\gcd(a, n) = 1\\text{，则} \\quad a^{\\varphi(n)} \\equiv 1 \\pmod{n}',
    variables: [
      { name: 'a', description: '与n互质的整数', unit: '' },
      { name: 'n', description: '正整数', unit: '' },
      { name: 'φ(n)', description: '欧拉函数，小于n且与n互质的正整数个数', unit: '' }
    ],
    conditions: 'gcd(a, n) = 1',
    notes: '费马小定理的推广，当n为素数时退化为费马小定理',
    derivation: '群论（乘法群的阶）',
    related: ['number_theory_003', 'number_theory_005'],
    calculator: {
      inputs: ['a', 'n'],
      output: 'result',
      formula: (a, n) => {
        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        if (gcd(a, n) !== 1) return 'a与n必须互质';
        const phi = (m) => {
          let count = 0;
          for (let i = 1; i < m; i++) {
            if (gcd(i, m) === 1) count++;
          }
          return count;
        };
        const phiN = phi(n);
        let result = 1;
        for (let i = 0; i < phiN; i++) {
          result = (result * a) % n;
        }
        return result;
      }
    }
  },
  {
    id: 'number_theory_005',
    name: '欧拉函数公式',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若n = p₁^α₁·p₂^α₂·...·pₖ^αₖ，则 φ(n) = n·∏(1 - 1/pᵢ)',
    latex: '\\text{若}n = p_1^{\\alpha_1}p_2^{\\alpha_2}\\cdots p_k^{\\alpha_k}\\text{，则} \\quad \\varphi(n) = n\\prod_{i=1}^{k}\\left(1-\\frac{1}{p_i}\\right)',
    variables: [
      { name: 'n', description: '正整数', unit: '' },
      { name: 'pᵢ', description: 'n的素因子', unit: '' },
      { name: 'αᵢ', description: '素因子的指数', unit: '' }
    ],
    conditions: 'n为正整数',
    notes: '计算欧拉函数的高效公式，基于容斥原理',
    derivation: '容斥原理',
    related: ['number_theory_004'],
    calculator: {
      inputs: ['n'],
      output: 'phi',
      formula: (n) => {
        let result = n;
        for (let i = 2; i * i <= n; i++) {
          if (n % i === 0) {
            result -= result / i;
            while (n % i === 0) n /= i;
          }
        }
        if (n > 1) result -= result / n;
        return result;
      }
    }
  },
  {
    id: 'number_theory_006',
    name: '中国剩余定理',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若m₁, m₂, ..., mₖ两两互质，则同余方程组 x ≡ aᵢ (mod mᵢ) 有唯一解模 M = m₁m₂...mₖ',
    latex: '\\text{若}m_1, m_2, \\ldots, m_k\\text{两两互质，则} \\quad x \\equiv a_i \\pmod{m_i} \\quad \\text{有唯一解模}M = \\prod_{i=1}^{k} m_i',
    variables: [
      { name: 'mᵢ', description: '两两互质的模数', unit: '' },
      { name: 'aᵢ', description: '余数', unit: '' },
      { name: 'x', description: '同余方程组的解', unit: '' }
    ],
    conditions: 'm₁, m₂, ..., mₖ两两互质',
    notes: '数论中的经典定理，在密码学和计算机科学中有广泛应用',
    derivation: '扩展欧几里得算法构造解',
    related: ['number_theory_002'],
    calculator: {
      inputs: ['mods', 'rems'],
      output: 'x',
      formula: (mods, rems) => {
        const M = mods.reduce((a, b) => a * b, 1);
        let x = 0;
        for (let i = 0; i < mods.length; i++) {
          const Mi = M / mods[i];
          const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
          const extgcd = (a, b) => {
            if (b === 0) return [a, 1, 0];
            const [d, x1, y1] = extgcd(b, a % b);
            return [d, y1, x1 - Math.floor(a / b) * y1];
          };
          const [d, yi] = extgcd(Mi, mods[i]);
          x = (x + rems[i] * Mi * yi) % M;
        }
        return (x % M + M) % M;
      }
    }
  },
  {
    id: 'number_theory_007',
    name: '威尔逊定理',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'p是素数当且仅当 (p-1)! ≡ -1 (mod p)',
    latex: 'p\\text{是素数} \\Leftrightarrow (p-1)! \\equiv -1 \\pmod{p}',
    variables: [
      { name: 'p', description: '正整数', unit: '' }
    ],
    conditions: 'p > 1',
    notes: '判断素数的充要条件，但计算阶乘效率低，主要用于理论',
    derivation: '群论（模p乘法群的逆元配对）',
    related: ['number_theory_003'],
    calculator: {
      inputs: ['p'],
      output: 'isPrime',
      formula: (p) => {
        if (p <= 1) return false;
        let fact = 1;
        for (let i = 1; i < p; i++) {
          fact = (fact * i) % p;
        }
        return fact === p - 1;
      }
    }
  },
  {
    id: 'number_theory_008',
    name: '二次剩余（欧拉判别准则）',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '设p为奇素数，a与p互质，则a是模p的二次剩余当且仅当 a^((p-1)/2) ≡ 1 (mod p)',
    latex: '\\text{设}p\\text{为奇素数，}a\\text{与}p\\text{互质，则}a\\text{是模}p\\text{的二次剩余} \\Leftrightarrow a^{(p-1)/2} \\equiv 1 \\pmod{p}',
    variables: [
      { name: 'a', description: '与p互质的整数', unit: '' },
      { name: 'p', description: '奇素数', unit: '' }
    ],
    conditions: 'p为奇素数，gcd(a, p) = 1',
    notes: '用于判断是否存在x使得x² ≡ a (mod p)',
    derivation: '费马小定理和群论',
    related: ['number_theory_003'],
    calculator: {
      inputs: ['a', 'p'],
      output: 'isQuadraticResidue',
      formula: (a, p) => {
        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        if (gcd(a, p) !== 1) return false;
        let exp = (p - 1) / 2;
        let result = 1;
        let base = a % p;
        while (exp > 0) {
          if (exp % 2 === 1) result = (result * base) % p;
          base = (base * base) % p;
          exp = Math.floor(exp / 2);
        }
        return result === 1;
      }
    }
  },
  {
    id: 'number_theory_009',
    name: '勒让德符号',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '(a/p) = a^((p-1)/2) mod p，值为1表示二次剩余，-1表示二次非剩余，0表示p|a',
    latex: '\\left(\\frac{a}{p}\\right) = a^{(p-1)/2} \\bmod p',
    variables: [
      { name: 'a', description: '整数', unit: '' },
      { name: 'p', description: '奇素数', unit: '' },
      { name: '(a/p)', description: '勒让德符号', unit: '' }
    ],
    conditions: 'p为奇素数',
    notes: '勒让德符号是二次剩余的简洁表示，满足乘法性质',
    derivation: '欧拉判别准则',
    related: ['number_theory_008'],
    calculator: {
      inputs: ['a', 'p'],
      output: 'legendre',
      formula: (a, p) => {
        if (a % p === 0) return 0;
        let exp = (p - 1) / 2;
        let result = 1;
        let base = a % p;
        while (exp > 0) {
          if (exp % 2 === 1) result = (result * base) % p;
          base = (base * base) % p;
          exp = Math.floor(exp / 2);
        }
        return result === 1 ? 1 : -1;
      }
    }
  },
  {
    id: 'number_theory_010',
    name: '二次互反律',
    category: '数学',
    subCategory: '数论-初等数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '若p和q是不同的奇素数，则 (p/q)(q/p) = (-1)^((p-1)(q-1)/4)',
    latex: '\\text{若}p\\text{和}q\\text{是不同的奇素数，则} \\quad \\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{(p-1)(q-1)}{4}}',
    variables: [
      { name: 'p, q', description: '不同的奇素数', unit: '' },
      { name: '(p/q), (q/p)', description: '勒让德符号', unit: '' }
    ],
    conditions: 'p和q是不同的奇素数',
    notes: '数论中的核心定理，由高斯首次完整证明，被称为"数论之母"',
    derivation: '高斯引理或其他方法',
    related: ['number_theory_009'],
    calculator: {
      inputs: ['p', 'q'],
      output: 'reciprocity',
      formula: (p, q) => {
        const legendre = (a, mod) => {
          if (a % mod === 0) return 0;
          let exp = (mod - 1) / 2;
          let result = 1;
          let base = a % mod;
          while (exp > 0) {
            if (exp % 2 === 1) result = (result * base) % mod;
            base = (base * base) % mod;
            exp = Math.floor(exp / 2);
          }
          return result === 1 ? 1 : -1;
        };
        const power = ((p - 1) * (q - 1)) / 4;
        return legendre(p, q) * legendre(q, p) === Math.pow(-1, power);
      }
    }
  },
  // 代数数论
  {
    id: 'algebraic_number_theory_001',
    name: '代数整数',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '代数整数α是某个首一整数系数多项式的根，即存在整数cᵢ使得 αⁿ + cₙ₋₁αⁿ⁻¹ + ... + c₀ = 0',
    latex: '\\text{代数整数}\\alpha\\text{满足} \\quad \\alpha^n + c_{n-1}\\alpha^{n-1} + \\cdots + c_0 = 0, \\quad c_i \\in \\mathbb{Z}',
    variables: [
      { name: 'α', description: '代数整数', unit: '' },
      { name: 'cᵢ', description: '整数系数', unit: '' },
      { name: 'n', description: '次数', unit: '' }
    ],
    conditions: 'α是代数数',
    notes: '代数整数是整数在代数数域中的推广，构成数域的整数环',
    derivation: '代数数论基础定义',
    related: ['algebraic_number_theory_002'],
    calculator: {
      inputs: [],
      output: 'definition',
      formula: () => '理论定义'
    }
  },
  {
    id: 'algebraic_number_theory_002',
    name: '数域的整数环',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '设K为代数数域，K的整数环Oₖ由K中所有代数整数组成，是K的子环',
    latex: 'O_K = \\{\\alpha \\in K : \\alpha\\text{是代数整数}\\}',
    variables: [
      { name: 'K', description: '代数数域', unit: '' },
      { name: 'Oₖ', description: 'K的整数环', unit: '' }
    ],
    conditions: 'K为代数数域',
    notes: '整数环是代数数论研究的基本对象，是Dedekind整环',
    derivation: '代数数论基础',
    related: ['algebraic_number_theory_001', 'algebraic_number_theory_003'],
    calculator: {
      inputs: [],
      output: 'ring',
      formula: () => '理论定义'
    }
  },
  {
    id: 'algebraic_number_theory_003',
    name: '理想分解唯一性',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '在Dedekind整环（如整数环Oₖ）中，每个非零理想都可以唯一地分解为素理想的乘积',
    latex: '\\text{在}O_K\\text{中，每个非零理想}I\\text{可以唯一分解为} \\quad I = \\mathfrak{p}_1^{e_1}\\mathfrak{p}_2^{e_2}\\cdots\\mathfrak{p}_k^{e_k}',
    variables: [
      { name: 'I', description: '理想', unit: '' },
      { name: '𝔭ᵢ', description: '素理想', unit: '' },
      { name: 'eᵢ', description: '指数', unit: '' }
    ],
    conditions: 'I为非零理想',
    notes: '这是代数数论的核心定理，解决了普通整数分解唯一性在代数数域中的推广问题',
    derivation: 'Dedekind整环理论',
    related: ['algebraic_number_theory_002'],
    calculator: {
      inputs: [],
      output: 'decomposition',
      formula: () => '理论结果'
    }
  },
  {
    id: 'algebraic_number_theory_004',
    name: '理想范数',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '理想𝔞的范数N(𝔞) = |Oₖ/𝔞|，即商环的基数',
    latex: 'N(\\mathfrak{a}) = |O_K/\\mathfrak{a}|',
    variables: [
      { name: '𝔞', description: '理想', unit: '' },
      { name: 'N(𝔞)', description: '理想范数', unit: '' },
      { name: 'Oₖ/𝔞', description: '商环', unit: '' }
    ],
    conditions: '𝔞为非零理想',
    notes: '理想范数是有限正整数，满足乘法性：N(𝔞𝔟) = N(𝔞)N(𝔟)',
    derivation: '环论',
    related: ['algebraic_number_theory_003'],
    calculator: {
      inputs: [],
      output: 'norm',
      formula: () => '理论定义'
    }
  },
  {
    id: 'algebraic_number_theory_005',
    name: '类数公式',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'hₖ = (2^r₁(2π)^r₂Rₖwₖ/√|dₖ|) · L(1, χ)，其中hₖ是类数，Rₖ是调节子，dₖ是判别式',
    latex: 'h_K = \\frac{2^{r_1}(2\\pi)^{r_2}R_K}{w_K\\sqrt{|d_K|}} \\cdot L(1, \\chi)',
    variables: [
      { name: 'hₖ', description: '类数', unit: '' },
      { name: 'Rₖ', description: '调节子', unit: '' },
      { name: 'dₖ', description: '判别式', unit: '' },
      { name: 'r₁, r₂', description: '实嵌入和复嵌入的对数', unit: '' },
      { name: 'wₖ', description: '单位根的个数', unit: '' }
    ],
    conditions: 'K为代数数域',
    notes: '类数衡量整数环中理想类群的有限性，是数论中的重要不变量',
    derivation: '解析数论和类域论',
    related: ['algebraic_number_theory_002'],
    calculator: {
      inputs: [],
      output: 'class_number',
      formula: () => '理论公式'
    }
  },
  {
    id: 'algebraic_number_theory_006',
    name: '狄利克雷单位定理',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Oₖ的单位群Oₖ*是有限生成的，秩为r₁ + r₂ - 1，其中r₁是实嵌入数，r₂是复嵌入对数',
    latex: 'O_K^* \\cong \\mu_K \\times \\mathbb{Z}^{r_1 + r_2 - 1}',
    variables: [
      { name: 'Oₖ*', description: '单位群', unit: '' },
      { name: 'μₖ', description: '单位根群（有限循环群）', unit: '' },
      { name: 'r₁', description: '实嵌入数', unit: '' },
      { name: 'r₂', description: '复嵌入对数', unit: '' }
    ],
    conditions: 'K为代数数域',
    notes: '描述了整数环中单位的结构，是代数数论的基本定理之一',
    derivation: '几何数论方法',
    related: ['algebraic_number_theory_002'],
    calculator: {
      inputs: [],
      output: 'unit_structure',
      formula: () => '理论结果'
    }
  },
  {
    id: 'algebraic_number_theory_007',
    name: '分圆域',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '分圆域Q(ζₙ)是Q添加n次单位原根ζₙ得到的域，次数为φ(n)',
    latex: '\\mathbb{Q}(\\zeta_n), \\quad [\\mathbb{Q}(\\zeta_n):\\mathbb{Q}] = \\varphi(n)',
    variables: [
      { name: 'ζₙ', description: 'n次单位原根', unit: '' },
      { name: 'Q(ζₙ)', description: '分圆域', unit: '' },
      { name: 'φ(n)', description: '欧拉函数', unit: '' }
    ],
    conditions: 'n为正整数',
    notes: '分圆域在代数数论中具有特殊地位，其整数环有很好的性质',
    derivation: '域论',
    related: ['number_theory_005'],
    calculator: {
      inputs: ['n'],
      output: 'degree',
      formula: (n) => {
        const phi = (m) => {
          let result = m;
          for (let i = 2; i * i <= m; i++) {
            if (m % i === 0) {
              result -= result / i;
              while (m % i === 0) m /= i;
            }
          }
          if (m > 1) result -= result / m;
          return result;
        };
        return phi(n);
      }
    }
  },
  {
    id: 'algebraic_number_theory_008',
    name: '二次域的整数环',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '对于无平方因子的d，Q(√d)的整数环为：O = Z[√d]（d≡2,3 mod 4）或 Z[(1+√d)/2]（d≡1 mod 4）',
    latex: 'O_{\\mathbb{Q}(\\sqrt{d})} = \\begin{cases} \\mathbb{Z}[\\sqrt{d}] & d \\equiv 2,3 \\pmod{4} \\\\ \\mathbb{Z}\\left[\\frac{1+\\sqrt{d}}{2}\\right] & d \\equiv 1 \\pmod{4} \\end{cases}',
    variables: [
      { name: 'd', description: '无平方因子的整数', unit: '' },
      { name: 'Q(√d)', description: '二次域', unit: '' },
      { name: 'O', description: '整数环', unit: '' }
    ],
    conditions: 'd无平方因子',
    notes: '二次域是最简单的代数数域之一，其整数环结构明确',
    derivation: '代数数论基础',
    related: ['algebraic_number_theory_002'],
    calculator: {
      inputs: ['d'],
      output: 'basis',
      formula: (d) => {
        const absD = Math.abs(d);
        if (absD % 4 === 1) {
          return `Z[(1+√${d})/2]`;
        } else {
          return `Z[√${d}]`;
        }
      }
    }
  },
  {
    id: 'algebraic_number_theory_009',
    name: '素理想在扩张中的分解',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '设L/K为有限扩张，p为K的素理想，则pO_L = (P₁...Pₖ)^e，其中e为分歧指数，Σeᵢfᵢ = [L:K]',
    latex: 'pO_L = (\\mathfrak{P}_1\\cdots\\mathfrak{P}_k)^e, \\quad \\sum_{i=1}^{k} e_i f_i = [L:K]',
    variables: [
      { name: 'p', description: 'K的素理想', unit: '' },
      { name: 'Pᵢ', description: 'L中位于p上的素理想', unit: '' },
      { name: 'e', description: '分歧指数', unit: '' },
      { name: 'fᵢ', description: '剩余类域次数', unit: '' }
    ],
    conditions: 'L/K为有限扩张',
    notes: '描述了素理想在域扩张中的分解行为，是代数数论的核心内容',
    derivation: 'Dedekind分解定理',
    related: ['algebraic_number_theory_003'],
    calculator: {
      inputs: [],
      output: 'decomposition',
      formula: () => '理论结果'
    }
  },
  {
    id: 'algebraic_number_theory_010',
    name: '判别式',
    category: '数学',
    subCategory: '数论-代数数论',
    grade: '大学',
    tags: ['常用公式'],
    formula: '数域K的判别式dₖ = det(Tr(αᵢαⱼ))，其中{αᵢ}是Oₖ的一组整基',
    latex: 'd_K = \\det(\\text{Tr}(\\alpha_i\\alpha_j))',
    variables: [
      { name: 'dₖ', description: 'K的判别式', unit: '' },
      { name: 'αᵢ', description: '整数环的一组整基', unit: '' },
      { name: 'Tr', description: '迹映射', unit: '' }
    ],
    conditions: 'K为代数数域',
    notes: '判别式是整数环的不变量，用于研究理想类和单位',
    derivation: '线性代数和域论',
    related: ['algebraic_number_theory_005'],
    calculator: {
      inputs: [],
      output: 'discriminant',
      formula: () => '理论定义'
    }
  },
  // 三角函数与双曲函数关系
  {
    id: 'trig_hyperbolic_001',
    name: '正弦函数的复指数表示',
    category: '数学',
    subCategory: '高等数学-三角函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'sin x = (e^(ix) - e^(-ix)) / (2i) = -i sinh (ix)',
    latex: '\\sin x = \\frac{e^{ix} - e^{-ix}}{2i} = -i \\sinh (ix)',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'i', description: '虚数单位', unit: '' }
    ],
    conditions: 'x为实数或复数',
    notes: '正弦函数与复指数函数的关系',
    derivation: '欧拉公式',
    related: ['trig_hyperbolic_002']
  },
  {
    id: 'trig_hyperbolic_002',
    name: '余弦函数的复指数表示',
    category: '数学',
    subCategory: '高等数学-三角函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'cos x = (e^(ix) + e^(-ix)) / 2 = cosh (ix)',
    latex: '\\cos x = \\frac{e^{ix} + e^{-ix}}{2} = \\cosh (ix)',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'i', description: '虚数单位', unit: '' }
    ],
    conditions: 'x为实数或复数',
    notes: '余弦函数与复指数函数的关系',
    derivation: '欧拉公式',
    related: ['trig_hyperbolic_001']
  },
  {
    id: 'trig_hyperbolic_003',
    name: '三角函数与双曲函数的复数关系',
    category: '数学',
    subCategory: '高等数学-三角函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'sin (ix) = i sinh x, cos (ix) = cosh x',
    latex: '\\sin (ix) = i \\sinh x, \\quad \\cos (ix) = \\cosh x',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'i', description: '虚数单位', unit: '' }
    ],
    conditions: 'x为实数',
    notes: '三角函数与双曲函数通过虚数单位的关系',
    derivation: '双曲函数定义',
    related: ['trig_hyperbolic_001', 'trig_hyperbolic_002']
  },
  {
    id: 'trig_hyperbolic_004',
    name: '反正弦函数的对数表示',
    category: '数学',
    subCategory: '高等数学-三角函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'sin^(-1)x = -i log (ix + sqrt(1-x²))',
    latex: '\\sin^{-1}x = -i \\log (ix + \\sqrt{1-x^2})',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'i', description: '虚数单位', unit: '' }
    ],
    conditions: '|x| ≤ 1',
    notes: '反正弦函数的复数对数形式',
    derivation: '从sin x的复指数表示推导',
    related: ['trig_hyperbolic_005', 'trig_hyperbolic_006']
  },
  {
    id: 'trig_hyperbolic_005',
    name: '反余弦函数的对数表示',
    category: '数学',
    subCategory: '高等数学-三角函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'cos^(-1)x = -i log (x + sqrt(x² - 1))',
    latex: '\\cos^{-1}x = -i \\log (x + \\sqrt{x^2 - 1})',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'i', description: '虚数单位', unit: '' }
    ],
    conditions: '|x| ≥ 1',
    notes: '反余弦函数的复数对数形式',
    derivation: '从cos x的复指数表示推导',
    related: ['trig_hyperbolic_004', 'trig_hyperbolic_006']
  },
  {
    id: 'trig_hyperbolic_006',
    name: '反正切函数的对数表示',
    category: '数学',
    subCategory: '高等数学-三角函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'tan^(-1)x = (i/2) log ((1-ix) / (1+ix))',
    latex: '\\tan^{-1}x = \\frac{i}{2} \\log \\frac{1-ix}{1+ix}',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'i', description: '虚数单位', unit: '' }
    ],
    conditions: 'x为实数',
    notes: '反正切函数的复数对数形式',
    derivation: '从tan x的复指数表示推导',
    related: ['trig_hyperbolic_004', 'trig_hyperbolic_005']
  },
  {
    id: 'trig_hyperbolic_007',
    name: '双曲正弦函数定义',
    category: '数学',
    subCategory: '高等数学-双曲函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'sinh x = (e^x - e^(-x)) / 2 = 1 / csch x',
    latex: '\\sinh x = \\frac{e^x - e^{-x}}{2} = \\frac{1}{\\text{csch } x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x为实数或复数',
    notes: '双曲正弦函数的定义及其与双曲余割函数的关系',
    derivation: '双曲函数定义',
    related: ['trig_hyperbolic_008', 'trig_hyperbolic_009']
  },
  {
    id: 'trig_hyperbolic_008',
    name: '双曲余弦函数定义',
    category: '数学',
    subCategory: '高等数学-双曲函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'cosh x = (e^x + e^(-x)) / 2 = 1 / sech x',
    latex: '\\cosh x = \\frac{e^x + e^{-x}}{2} = \\frac{1}{\\text{sech } x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x为实数或复数',
    notes: '双曲余弦函数的定义及其与双曲正割函数的关系',
    derivation: '双曲函数定义',
    related: ['trig_hyperbolic_007', 'trig_hyperbolic_009']
  },
  {
    id: 'trig_hyperbolic_009',
    name: '双曲正切函数定义',
    category: '数学',
    subCategory: '高等数学-双曲函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'tanh x = sinh x / cosh x = (e^x - e^(-x)) / (e^x + e^(-x)) = 1 / coth x',
    latex: '\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}} = \\frac{1}{\\coth x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x为实数或复数',
    notes: '双曲正切函数的定义及其与双曲余切函数的关系',
    derivation: '双曲函数定义',
    related: ['trig_hyperbolic_007', 'trig_hyperbolic_008']
  },
  {
    id: 'trig_hyperbolic_010',
    name: '反双曲正弦函数',
    category: '数学',
    subCategory: '高等数学-双曲函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'sinh^(-1)x = log(x + sqrt(x² + 1))',
    latex: '\\sinh^{-1}x = \\log(x + \\sqrt{x^2 + 1})',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x为实数',
    notes: '反双曲正弦函数的对数形式',
    derivation: '从sinh x的定义推导',
    related: ['trig_hyperbolic_011', 'trig_hyperbolic_012']
  },
  {
    id: 'trig_hyperbolic_011',
    name: '反双曲余弦函数',
    category: '数学',
    subCategory: '高等数学-双曲函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'cosh^(-1)x = log(x + sqrt(x² - 1))',
    latex: '\\cosh^{-1}x = \\log(x + \\sqrt{x^2 - 1})',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x ≥ 1',
    notes: '反双曲余弦函数的对数形式',
    derivation: '从cosh x的定义推导',
    related: ['trig_hyperbolic_010', 'trig_hyperbolic_012']
  },
  {
    id: 'trig_hyperbolic_012',
    name: '反双曲正切函数',
    category: '数学',
    subCategory: '高等数学-双曲函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'tanh^(-1)x = (1/2) log((1+x)/(1-x)), coth^(-1)x = (1/2) log((x+1)/(x-1))',
    latex: '\\tanh^{-1}x = \\frac{1}{2} \\log\\frac{1+x}{1-x}, \\quad \\coth^{-1}x = \\frac{1}{2} \\log\\frac{x+1}{x-1}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < 1 (tanh^(-1)), |x| > 1 (coth^(-1))',
    notes: '反双曲正切和反双曲余切函数的对数形式',
    derivation: '从tanh x和coth x的定义推导',
    related: ['trig_hyperbolic_010', 'trig_hyperbolic_011']
  },
  {
    id: 'trig_hyperbolic_013',
    name: '双曲函数与三角函数的复数关系',
    category: '数学',
    subCategory: '高等数学-双曲函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'tanh x = -i tan (ix), coth x = i cot (ix)',
    latex: '\\tanh x = -i \\tan (ix), \\quad \\coth x = i \\cot (ix)',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'i', description: '虚数单位', unit: '' }
    ],
    conditions: 'x为实数',
    notes: '双曲函数与三角函数通过虚数单位的关系',
    derivation: '从双曲函数和三角函数的定义推导',
    related: ['trig_hyperbolic_003', 'trig_hyperbolic_014']
  },
  {
    id: 'trig_hyperbolic_014',
    name: '双曲函数与三角函数的复数关系（续）',
    category: '数学',
    subCategory: '高等数学-双曲函数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'sech x = sec (ix), csch x = i csc (ix)',
    latex: '\\text{sech } x = \\sec (ix), \\quad \\text{csch } x = i \\csc (ix)',
    variables: [
      { name: 'x', description: '变量', unit: '' },
      { name: 'i', description: '虚数单位', unit: '' }
    ],
    conditions: 'x为实数',
    notes: '双曲正割和双曲余割函数与三角函数的复数关系',
    derivation: '从双曲函数和三角函数的定义推导',
    related: ['trig_hyperbolic_013']
  },
  // 常用求和公式（级数）
  {
    id: 'series_sum_001',
    name: '常用求和公式 1',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Σ(n=0 to ∞) x^n = 1 / (1 - x)',
    latex: '\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < 1',
    notes: '几何级数求和公式',
    derivation: '等比数列求和公式的极限形式',
    related: ['series_sum_002', 'series_sum_003']
  },
  {
    id: 'series_sum_002',
    name: '常用求和公式 2',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) nx^n = x / (1 - x)²',
    latex: '\\sum_{n=1}^{\\infty} nx^n = \\frac{x}{(1-x)^2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < 1',
    notes: '几何级数的加权求和',
    derivation: '对几何级数求导',
    related: ['series_sum_001', 'series_sum_003']
  },
  {
    id: 'series_sum_003',
    name: '常用求和公式 3',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) n²x^n = x(1 + x) / (1 - x)³',
    latex: '\\sum_{n=1}^{\\infty} n^2x^n = \\frac{x(1+x)}{(1-x)^3}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < 1',
    notes: '几何级数的平方加权求和',
    derivation: '对几何级数多次求导',
    related: ['series_sum_001', 'series_sum_002']
  },
  {
    id: 'series_sum_004',
    name: '常用求和公式 4',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) x^n / n = -ln(1 - x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{x^n}{n} = -\\ln(1-x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '-1 ≤ x < 1',
    notes: '对数函数的幂级数展开',
    derivation: '对几何级数积分',
    related: ['series_sum_005']
  },
  {
    id: 'series_sum_005',
    name: '常用求和公式 5',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) x^n / n = ln(1 + x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}x^n}{n} = \\ln(1+x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '-1 < x ≤ 1',
    notes: '对数函数的交错级数展开',
    derivation: '对交错几何级数积分',
    related: ['series_sum_004', 'series_sum_006']
  },
  {
    id: 'series_sum_006',
    name: '常用求和公式 6',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) / n = ln2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n} = \\ln 2',
    variables: [],
    conditions: '级数收敛',
    notes: 'ln2的级数表示',
    derivation: '公式5°中令x=1',
    related: ['series_sum_005']
  },
  {
    id: 'series_sum_007',
    name: '常用求和公式 7',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=2 to ∞) x^n / (n(n-1)) = (1 - x)ln(1 - x) + x',
    latex: '\\sum_{n=2}^{\\infty} \\frac{x^n}{n(n-1)} = (1-x)\\ln(1-x) + x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ 1',
    notes: '涉及对数函数的级数求和',
    derivation: '部分分式分解后积分',
    related: ['series_sum_004']
  },
  {
    id: 'series_sum_008',
    name: '常用求和公式 8',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / (n(n+1)) = 1',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = 1',
    variables: [],
    conditions: '级数收敛',
    notes: '望远镜级数求和',
    derivation: '部分分式分解',
    related: ['series_sum_009']
  },
  {
    id: 'series_sum_009',
    name: '常用求和公式 9',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) / (n(n+1)) = ln4 - 1',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n(n+1)} = \\ln 4 - 1',
    variables: [],
    conditions: '级数收敛',
    notes: '交错望远镜级数求和',
    derivation: '交错级数的部分分式分解',
    related: ['series_sum_008']
  },
  {
    id: 'series_sum_010',
    name: '常用求和公式 10',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) x^(2n-1) / (2n-1) = (1/2) ln((1 + x) / (1 - x))',
    latex: '\\sum_{n=1}^{\\infty} \\frac{x^{2n-1}}{2n-1} = \\frac{1}{2} \\ln\\frac{1+x}{1-x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < 1',
    notes: '反双曲正切函数的级数展开',
    derivation: '从对数级数推导',
    related: ['series_sum_011']
  },
  {
    id: 'series_sum_011',
    name: '常用求和公式 11',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) x^(2n-1) / (2n-1) = arctan x',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}x^{2n-1}}{2n-1} = \\arctan x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ 1',
    notes: '反正切函数的幂级数展开（莱布尼茨级数）',
    derivation: '对几何级数积分并代入x²',
    related: ['series_sum_010', 'series_sum_012']
  },
  {
    id: 'series_sum_012',
    name: '常用求和公式 12',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) / (2n-1) = π/4',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{2n-1} = \\frac{\\pi}{4}',
    variables: [],
    conditions: '级数收敛',
    notes: 'π/4的级数表示（莱布尼茨公式）',
    derivation: '公式11°中令x=1',
    related: ['series_sum_011']
  },
  {
    id: 'series_sum_013',
    name: '常用求和公式 13',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=2 to ∞) x^n / (n² - 1) = (2 + x) / 4 + (1 - x²) / (2x) ln(1 - x)',
    latex: '\\sum_{n=2}^{\\infty} \\frac{x^n}{n^2-1} = \\frac{2+x}{4} + \\frac{1-x^2}{2x} \\ln(1-x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ 1',
    notes: '涉及对数函数的级数求和',
    derivation: '部分分式分解后积分',
    related: ['series_sum_014', 'series_sum_015']
  },
  {
    id: 'series_sum_014',
    name: '常用求和公式 14',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=2 to ∞) 1 / (n² - 1) = 3/4',
    latex: '\\sum_{n=2}^{\\infty} \\frac{1}{n^2-1} = \\frac{3}{4}',
    variables: [],
    conditions: '级数收敛',
    notes: '常数级数求和',
    derivation: '公式13°中令x=1',
    related: ['series_sum_013', 'series_sum_015']
  },
  {
    id: 'series_sum_015',
    name: '常用求和公式 15',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=2 to ∞) (-1)^n / (n² - 1) = 1/4',
    latex: '\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{n^2-1} = \\frac{1}{4}',
    variables: [],
    conditions: '级数收敛',
    notes: '交错常数级数求和',
    derivation: '交错级数的部分分式分解',
    related: ['series_sum_013', 'series_sum_014']
  },
  {
    id: 'series_sum_016',
    name: '常用求和公式 16',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) x^(2n) / (n(2n-1)) = x ln((1 + x) / (1 - x)) + ln(1 - x²)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{x^{2n}}{n(2n-1)} = x \\ln\\frac{1+x}{1-x} + \\ln(1-x^2)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < 1',
    notes: '涉及对数函数的级数求和',
    derivation: '部分分式分解后积分',
    related: ['series_sum_017']
  },
  {
    id: 'series_sum_017',
    name: '常用求和公式 17',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) x^(2n) / (n(2n-1)) = 2x arctan x - ln(1 + x²)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}x^{2n}}{n(2n-1)} = 2x \\arctan x - \\ln(1+x^2)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ 1',
    notes: '涉及反正切和对数函数的级数求和',
    derivation: '部分分式分解后积分',
    related: ['series_sum_016', 'series_sum_018', 'series_sum_019']
  },
  {
    id: 'series_sum_018',
    name: '常用求和公式 18',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / (n(2n-1)) = 2ln2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n(2n-1)} = 2\\ln 2',
    variables: [],
    conditions: '级数收敛',
    notes: '常数级数求和',
    derivation: '公式16°中令x=1',
    related: ['series_sum_016', 'series_sum_019']
  },
  {
    id: 'series_sum_019',
    name: '常用求和公式 19',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) / (n(2n-1)) = π/2 - ln2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n(2n-1)} = \\frac{\\pi}{2} - \\ln 2',
    variables: [],
    conditions: '级数收敛',
    notes: '交错常数级数求和',
    derivation: '公式17°中令x=1',
    related: ['series_sum_017', 'series_sum_018']
  },
  {
    id: 'series_sum_020',
    name: '常用求和公式 20',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Σ(n=0 to ∞) x^n / n! = e^x',
    latex: '\\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = e^x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '指数函数的泰勒级数展开',
    derivation: '泰勒级数',
    related: ['series_sum_021', 'series_sum_022']
  },
  {
    id: 'series_sum_021',
    name: '常用求和公式 21',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=0 to ∞) x^(2n+1) / (2n+1)! = sinh x',
    latex: '\\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{(2n+1)!} = \\sinh x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '双曲正弦函数的泰勒级数展开',
    derivation: '泰勒级数',
    related: ['series_sum_020', 'series_sum_022']
  },
  {
    id: 'series_sum_022',
    name: '常用求和公式 22',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Σ(n=0 to ∞) (-1)^n x^(2n+1) / (2n+1)! = sin x',
    latex: '\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = \\sin x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '正弦函数的泰勒级数展开',
    derivation: '泰勒级数',
    related: ['series_sum_020', 'series_sum_021']
  },
  {
    id: 'series_sum_023',
    name: '常用求和公式 23',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=0 to ∞) x^(2n) / (2n)! = cosh x',
    latex: '\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!} = \\cosh x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '双曲余弦函数的泰勒级数展开',
    derivation: '泰勒级数',
    related: ['series_sum_021', 'series_sum_024']
  },
  {
    id: 'series_sum_024',
    name: '常用求和公式 24',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Σ(n=0 to ∞) (-1)^n x^(2n) / (2n)! = cos x',
    latex: '\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = \\cos x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '余弦函数的泰勒级数展开',
    derivation: '泰勒级数',
    related: ['series_sum_022', 'series_sum_023']
  },
  {
    id: 'series_sum_025',
    name: '常用求和公式 25',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (2n-1)!! / (2n)!! x^n = 1 / √(1 - x) - 1',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(2n-1)!!}{(2n)!!} x^n = \\frac{1}{\\sqrt{1-x}} - 1',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '-1 ≤ x < 1',
    notes: '涉及双阶乘的幂级数展开',
    derivation: '二项式级数',
    related: ['series_sum_026']
  },
  {
    id: 'series_sum_026',
    name: '常用求和公式 26',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^n (2n-1)!! / (2n)!! = 1 / √2 - 1',
    latex: '\\sum_{n=1}^{\\infty} (-1)^n \\frac{(2n-1)!!}{(2n)!!} = \\frac{1}{\\sqrt{2}} - 1',
    variables: [],
    conditions: '级数收敛',
    notes: '常数级数求和',
    derivation: '公式25°中令x=1',
    related: ['series_sum_025']
  },
  {
    id: 'series_sum_027',
    name: '常用求和公式 27',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (2n-1)!! / (2n)!! x^(2n+1) / (2n + 1) = arcsin x - x',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(2n-1)!!}{(2n)!!} \\frac{x^{2n+1}}{2n+1} = \\arcsin x - x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ 1',
    notes: '反正弦函数的级数展开',
    derivation: '对公式25°积分',
    related: ['series_sum_028', 'series_sum_029']
  },
  {
    id: 'series_sum_028',
    name: '常用求和公式 28',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^n (2n-1)!! / (2n)!! x^(2n+1) / (2n + 1) = arsinh x - x',
    latex: '\\sum_{n=1}^{\\infty} (-1)^n \\frac{(2n-1)!!}{(2n)!!} \\frac{x^{2n+1}}{2n+1} = \\text{arsinh } x - x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ 1',
    notes: '反双曲正弦函数的级数展开',
    derivation: '对交错级数积分',
    related: ['series_sum_027', 'series_sum_029']
  },
  {
    id: 'series_sum_029',
    name: '常用求和公式 29',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (2n-1)!! / (2n)!! 1 / (2n + 1) = π/2 - 1',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(2n-1)!!}{(2n)!!} \\frac{1}{2n+1} = \\frac{\\pi}{2} - 1',
    variables: [],
    conditions: '级数收敛',
    notes: '常数级数求和',
    derivation: '公式27°中令x=1',
    related: ['series_sum_027', 'series_sum_030']
  },
  {
    id: 'series_sum_030',
    name: '常用求和公式 30',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (2n-1)!! (-1)^n / (2n)!! 1 / (2n + 1) = ln(1 + √2) - 1',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(2n-1)!!(-1)^n}{(2n)!!} \\frac{1}{2n+1} = \\ln(1+\\sqrt{2}) - 1',
    variables: [],
    conditions: '级数收敛',
    notes: '常数级数求和',
    derivation: '公式28°中令x=1',
    related: ['series_sum_028', 'series_sum_029']
  },
  {
    id: 'series_sum_031',
    name: '常用求和公式 31',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) sin(nx) / n = π/2 - x',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\sin(nx)}{n} = \\frac{\\pi}{2} - x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 < x < 2π',
    notes: '正弦函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['series_sum_032', 'series_sum_033', 'series_sum_034']
  },
  {
    id: 'series_sum_032',
    name: '常用求和公式 32',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) cos(nx) / n = -ln|2sin(x/2)|',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\cos(nx)}{n} = -\\ln|2\\sin(x/2)|',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 < |x| ≤ π',
    notes: '余弦函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['series_sum_031', 'series_sum_033', 'series_sum_034']
  },
  {
    id: 'series_sum_033',
    name: '常用求和公式 33',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) cos(nx) / n = ln(2cos(x/2))',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos(nx)}{n} = \\ln(2\\cos(x/2))',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '交错余弦函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['series_sum_032', 'series_sum_034']
  },
  {
    id: 'series_sum_034',
    name: '常用求和公式 34',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) sin(nx) / n = x/2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin(nx)}{n} = \\frac{x}{2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '交错正弦函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['series_sum_031', 'series_sum_033']
  },
  {
    id: 'series_sum_035',
    name: '常用求和公式 35',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) cos((2n-1)x) / n = (π/2 - x)cos x - cos x ln(2sin x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\cos((2n-1)x)}{n} = (\\frac{\\pi}{2}-x)\\cos x - \\cos x \\ln(2\\sin x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 < x < π',
    notes: '复杂三角函数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_036']
  },
  {
    id: 'series_sum_036',
    name: '常用求和公式 36',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) sin((2n-1)x) / n = (π/2 - x)cos x + sin x ln(2sin x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\sin((2n-1)x)}{n} = (\\frac{\\pi}{2}-x)\\cos x + \\sin x \\ln(2\\sin x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 < x < π',
    notes: '复杂三角函数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_035', 'series_sum_037', 'series_sum_038']
  },
  {
    id: 'series_sum_037',
    name: '常用求和公式 37',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) cos((2n-1)x) / n = x sin x + cos x ln(2cos x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos((2n-1)x)}{n} = x\\sin x + \\cos x \\ln(2\\cos x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π/2',
    notes: '复杂交错三角函数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_036', 'series_sum_038']
  },
  {
    id: 'series_sum_038',
    name: '常用求和公式 38',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) sin((2n-1)x) / n = x cos x - sin x ln(2cos x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin((2n-1)x)}{n} = x\\cos x - \\sin x \\ln(2\\cos x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π/2',
    notes: '复杂交错三角函数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_036', 'series_sum_037']
  },
  {
    id: 'series_sum_039',
    name: '常用求和公式 39',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) cos((2n-1)x) / (2n-1) = (1/2) ln|cot(x/2)|',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\cos((2n-1)x)}{2n-1} = \\frac{1}{2} \\ln|\\cot(x/2)|',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 < |x| < π',
    notes: '余弦函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['series_sum_040']
  },
  {
    id: 'series_sum_040',
    name: '常用求和公式 40',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) sin((2n-1)x) / (2n-1) = (π/4) sgn x',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\sin((2n-1)x)}{2n-1} = \\frac{\\pi}{4} \\text{sgn } x',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '正弦函数的傅里叶级数，sgn为符号函数',
    derivation: '傅里叶级数',
    related: ['series_sum_039']
  },
  {
    id: 'series_sum_041',
    name: '常用求和公式 41',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) cos((2n-1)x) / (2n-1) = π/4 (0 ≤ x < π/2), -π/4 (π/2 < x ≤ π)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos((2n-1)x)}{2n-1} = \\begin{cases} \\frac{\\pi}{4} & 0 \\leq x < \\frac{\\pi}{2} \\\\ -\\frac{\\pi}{4} & \\frac{\\pi}{2} < x \\leq \\pi \\end{cases}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 ≤ x ≤ π',
    notes: '分段函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['series_sum_042']
  },
  {
    id: 'series_sum_042',
    name: '常用求和公式 42',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) sin((2n-1)x) / (2n-1) = (1/2) ln|tan(x/2 + π/4)|',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin((2n-1)x)}{2n-1} = \\frac{1}{2} \\ln|\\tan(x/2 + \\pi/4)|',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 ≤ x ≤ π',
    notes: '复杂三角函数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_041']
  },
  {
    id: 'series_sum_043',
    name: '常用求和公式 43',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) cos(nx) / n² = (3x² - 6πx + 2π²) / 12',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\cos(nx)}{n^2} = \\frac{3x^2 - 6\\pi x + 2\\pi^2}{12}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 ≤ x ≤ 2π',
    notes: '余弦函数的平方倒数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_044', 'series_sum_045']
  },
  {
    id: 'series_sum_044',
    name: '常用求和公式 44',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) cos²(nx) / n² = (3x² - 3πx + π²) / 6',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\cos^2(nx)}{n^2} = \\frac{3x^2 - 3\\pi x + \\pi^2}{6}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 ≤ x ≤ π',
    notes: '余弦平方的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_043', 'series_sum_045']
  },
  {
    id: 'series_sum_045',
    name: '常用求和公式 45',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) sin²(nx) / n² = x(π - x) / 2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\sin^2(nx)}{n^2} = \\frac{x(\\pi-x)}{2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 ≤ x ≤ π',
    notes: '正弦平方的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_043', 'series_sum_044']
  },
  {
    id: 'series_sum_046',
    name: '常用求和公式 46',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) cos((2n-1)x) / (2n-1)² = π²/8 - (π/4)|x|',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\cos((2n-1)x)}{(2n-1)^2} = \\frac{\\pi^2}{8} - \\frac{\\pi}{4}|x|',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ π',
    notes: '余弦函数的平方倒数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_047']
  },
  {
    id: 'series_sum_047',
    name: '常用求和公式 47',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / (2n-1)² = π²/8 = 1.2337...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{(2n-1)^2} = \\frac{\\pi^2}{8} = 1.2337...',
    variables: [],
    conditions: '级数收敛',
    notes: 'π²/8的级数表示',
    derivation: '公式46°中令x=0',
    related: ['series_sum_046']
  },
  {
    id: 'series_sum_048',
    name: '常用求和公式 48',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^n cos(nx) / (n² + 1) = πcosh(x) / (2sinh(π)) - 1/2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^n\\cos(nx)}{n^2+1} = \\frac{\\pi\\cosh(x)}{2\\sinh(\\pi)} - \\frac{1}{2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ π',
    notes: '涉及双曲函数的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_049', 'series_sum_050', 'series_sum_051']
  },
  {
    id: 'series_sum_049',
    name: '常用求和公式 49',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) n sin(nx) / (n² + 1) = πsinh(x) / (2sinh(π))',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}n\\sin(nx)}{n^2+1} = \\frac{\\pi\\sinh(x)}{2\\sinh(\\pi)}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '涉及双曲函数的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_048', 'series_sum_050', 'series_sum_051']
  },
  {
    id: 'series_sum_050',
    name: '常用求和公式 50',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / (n² + 1) = (1/2)(πcoth(π) - 1) = 1.07667...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1} = \\frac{1}{2}(\\pi\\coth(\\pi) - 1) = 1.07667...',
    variables: [],
    conditions: '级数收敛',
    notes: '常数级数求和',
    derivation: '傅里叶级数',
    related: ['series_sum_048', 'series_sum_051']
  },
  {
    id: 'series_sum_051',
    name: '常用求和公式 51',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^n / (n² + 1) = π / (2sinh(π)) - 1/2 = -0.36398...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2+1} = \\frac{\\pi}{2\\sinh(\\pi)} - \\frac{1}{2} = -0.36398...',
    variables: [],
    conditions: '级数收敛',
    notes: '交错常数级数求和',
    derivation: '公式48°中令x=0',
    related: ['series_sum_048', 'series_sum_050']
  },
  {
    id: 'series_sum_052',
    name: '常用求和公式 52',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=2 to ∞) cos(nx) / (n² - 1) = 1/2 + (x - π)/2 sin(x) + cos(x)/4',
    latex: '\\sum_{n=2}^{\\infty} \\frac{\\cos(nx)}{n^2-1} = \\frac{1}{2} + \\frac{x-\\pi}{2}\\sin(x) + \\frac{\\cos(x)}{4}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 ≤ x ≤ π',
    notes: '涉及三角函数的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_053', 'series_sum_054', 'series_sum_055']
  },
  {
    id: 'series_sum_053',
    name: '常用求和公式 53',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=2 to ∞) sin(nx) / (n² - 1) = sin(x)(1/4 - ln|2sin(x/2)|)',
    latex: '\\sum_{n=2}^{\\infty} \\frac{\\sin(nx)}{n^2-1} = \\sin(x)(\\frac{1}{4} - \\ln|2\\sin(x/2)|)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ π',
    notes: '涉及三角函数的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_052', 'series_sum_054', 'series_sum_055']
  },
  {
    id: 'series_sum_054',
    name: '常用求和公式 54',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=2 to ∞) (-1)^n cos(nx) / (n² - 1) = 1/2 - cos(x)/4 - x sin(x)/2',
    latex: '\\sum_{n=2}^{\\infty} \\frac{(-1)^n\\cos(nx)}{n^2-1} = \\frac{1}{2} - \\frac{\\cos(x)}{4} - \\frac{x\\sin(x)}{2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ π',
    notes: '交错三角函数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_052', 'series_sum_053', 'series_sum_055']
  },
  {
    id: 'series_sum_055',
    name: '常用求和公式 55',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=2 to ∞) (-1)^n sin(nx) / (n² - 1) = sin(x)(ln|2cos(x/2)| - 1/4)',
    latex: '\\sum_{n=2}^{\\infty} \\frac{(-1)^n\\sin(nx)}{n^2-1} = \\sin(x)(\\ln|2\\cos(x/2)| - \\frac{1}{4})',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '交错三角函数级数',
    derivation: '傅里叶级数',
    related: ['series_sum_052', 'series_sum_053', 'series_sum_054']
  },
  {
    id: 'series_sum_056',
    name: '常用求和公式 56',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) cos(2nx) / (4n² - 1) = 1/2 - (π/4)|sin(x)|',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\cos(2nx)}{4n^2-1} = \\frac{1}{2} - \\frac{\\pi}{4}|\\sin(x)|',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '余弦函数的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_057', 'series_sum_058']
  },
  {
    id: 'series_sum_057',
    name: '常用求和公式 57',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) sin(2nx) / (4n² - 1) = (1/2) sin(x) ln|cot(x/2)|',
    latex: '\\sum_{n=1}^{\\infty} \\frac{\\sin(2nx)}{4n^2-1} = \\frac{1}{2}\\sin(x)\\ln|\\cot(x/2)|',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '正弦函数的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_056', 'series_sum_058']
  },
  {
    id: 'series_sum_058',
    name: '常用求和公式 58',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) cos(2nx) / (4n² - 1) = (π/4)|cos(x)| - 1/2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos(2nx)}{4n^2-1} = \\frac{\\pi}{4}|\\cos(x)| - \\frac{1}{2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '交错余弦函数的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_056', 'series_sum_057']
  },
  {
    id: 'series_sum_059',
    name: '常用求和公式 59',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) sin(2nx) / (4n² - 1) = (cos(x)/2) ln|(1 + sin(x)) / cos(x)|',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin(2nx)}{4n^2-1} = \\frac{\\cos(x)}{2} \\ln|\\frac{1+\\sin(x)}{\\cos(x)}|',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '交错正弦函数的级数',
    derivation: '傅里叶级数',
    related: ['series_sum_056', 'series_sum_057', 'series_sum_058']
  },
  {
    id: 'series_sum_060',
    name: '常用求和公式 60',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / (4n² - 1) = 1/2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{4n^2-1} = \\frac{1}{2}',
    variables: [],
    conditions: '级数收敛',
    notes: '常数级数求和',
    derivation: '部分分式分解',
    related: ['series_sum_061']
  },
  {
    id: 'series_sum_061',
    name: '常用求和公式 61',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) / (4n² - 1) = π/4 - 1/2 = 0.285398...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{4n^2-1} = \\frac{\\pi}{4} - \\frac{1}{2} = 0.285398...',
    variables: [],
    conditions: '级数收敛',
    notes: '交错常数级数求和',
    derivation: '交错级数的部分分式分解',
    related: ['series_sum_060']
  },
  {
    id: 'series_sum_062',
    name: '常用求和公式 62',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=0 to ∞) cos(nx) / n! = e^(cos x) cos(sin x)',
    latex: '\\sum_{n=0}^{\\infty} \\frac{\\cos(nx)}{n!} = e^{\\cos x} \\cos(\\sin x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '涉及指数和三角函数的级数',
    derivation: '欧拉公式',
    related: ['series_sum_063']
  },
  {
    id: 'series_sum_063',
    name: '常用求和公式 63',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=0 to ∞) sin(nx) / n! = e^(cos x) sin(sin x)',
    latex: '\\sum_{n=0}^{\\infty} \\frac{\\sin(nx)}{n!} = e^{\\cos x} \\sin(\\sin x)',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '涉及指数和三角函数的级数',
    derivation: '欧拉公式',
    related: ['series_sum_062']
  },
  {
    id: 'series_sum_064',
    name: '常用求和公式 64',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=0 to ∞) q^n cos(nx) = (1 - q cos x) / (1 - 2q cos x + q²)',
    latex: '\\sum_{n=0}^{\\infty} q^n \\cos(nx) = \\frac{1-q\\cos x}{1-2q\\cos x + q^2}',
    variables: [
      { name: 'q', description: '参数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|q| < 1, |x| < +∞',
    notes: '几何级数的余弦加权',
    derivation: '几何级数与欧拉公式',
    related: ['series_sum_065', 'series_sum_066', 'series_sum_067']
  },
  {
    id: 'series_sum_065',
    name: '常用求和公式 65',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) q^n sin(nx) = (q sin x) / (1 - 2q cos x + q²)',
    latex: '\\sum_{n=1}^{\\infty} q^n \\sin(nx) = \\frac{q\\sin x}{1-2q\\cos x + q^2}',
    variables: [
      { name: 'q', description: '参数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|q| < 1, |x| < +∞',
    notes: '几何级数的正弦加权',
    derivation: '几何级数与欧拉公式',
    related: ['series_sum_064', 'series_sum_066', 'series_sum_067']
  },
  {
    id: 'series_sum_066',
    name: '常用求和公式 66',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) q^n cos(nx) / n = -(1/2) ln(1 - 2q cos x + q²)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{q^n\\cos(nx)}{n} = -\\frac{1}{2} \\ln(1-2q\\cos x + q^2)',
    variables: [
      { name: 'q', description: '参数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|q| < 1, |x| < +∞',
    notes: '几何级数的余弦加权积分',
    derivation: '对几何级数积分',
    related: ['series_sum_064', 'series_sum_065', 'series_sum_067']
  },
  {
    id: 'series_sum_067',
    name: '常用求和公式 67',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) q^n sin(nx) / n = arctan(q sin x / (1 - q cos x))',
    latex: '\\sum_{n=1}^{\\infty} \\frac{q^n\\sin(nx)}{n} = \\arctan\\left(\\frac{q\\sin x}{1-q\\cos x}\\right)',
    variables: [
      { name: 'q', description: '参数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|q| < 1, |x| < +∞',
    notes: '几何级数的正弦加权积分',
    derivation: '对几何级数积分',
    related: ['series_sum_064', 'series_sum_065', 'series_sum_066']
  },
  {
    id: 'series_sum_068',
    name: '常用求和公式 68',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) x / (x² + n²π²) = (coth x) / 2 - 1 / (2x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{x}{x^2 + n^2\\pi^2} = \\frac{\\coth x}{2} - \\frac{1}{2x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x ≠ 0',
    notes: '涉及双曲余切函数的级数',
    derivation: '复分析',
    related: ['series_sum_069', 'series_sum_070', 'series_sum_071']
  },
  {
    id: 'series_sum_069',
    name: '常用求和公式 69',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^n x / (x² + n²π²) = 1 / (2sinh x) - 1 / (2x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^n x}{x^2 + n^2\\pi^2} = \\frac{1}{2\\sinh x} - \\frac{1}{2x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x ≠ 0',
    notes: '涉及双曲正弦函数的级数',
    derivation: '复分析',
    related: ['series_sum_068', 'series_sum_070', 'series_sum_071']
  },
  {
    id: 'series_sum_070',
    name: '常用求和公式 70',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) x / (x² - n²π²) = (cot x) / 2 - 1 / (2x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{x}{x^2 - n^2\\pi^2} = \\frac{\\cot x}{2} - \\frac{1}{2x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x ≠ nπ, n = 0, ±1, ...',
    notes: '涉及余切函数的级数',
    derivation: '复分析',
    related: ['series_sum_068', 'series_sum_069', 'series_sum_071']
  },
  {
    id: 'series_sum_071',
    name: '常用求和公式 71',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^n x / (x² - n²π²) = 1 / (2sin x) - 1 / (2x)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^n x}{x^2 - n^2\\pi^2} = \\frac{1}{2\\sin x} - \\frac{1}{2x}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x ≠ nπ, n = 0, ±1, ...',
    notes: '涉及正弦函数的级数',
    derivation: '复分析',
    related: ['series_sum_068', 'series_sum_069', 'series_sum_070']
  },
  {
    id: 'series_sum_072',
    name: '常用求和公式 72',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) x / (x² - (n-1/2)²π²) = -tan x / 2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{x}{x^2 - (n-1/2)^2\\pi^2} = -\\frac{\\tan x}{2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x ≠ (n-1/2)π, n = 0, ±1, ...',
    notes: '涉及正切函数的级数',
    derivation: '复分析',
    related: ['series_sum_073']
  },
  {
    id: 'series_sum_073',
    name: '常用求和公式 73',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) x / (x² + (n-1/2)²π²) = tanh x / 2',
    latex: '\\sum_{n=1}^{\\infty} \\frac{x}{x^2 + (n-1/2)^2\\pi^2} = \\frac{\\tanh x}{2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: 'x为实数',
    notes: '涉及双曲正切函数的级数',
    derivation: '复分析',
    related: ['series_sum_072']
  },
  {
    id: 'series_sum_074',
    name: '常用求和公式 74',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / ((2n-1)² + 4) = πtanh(π) / 8 = 0.391235...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{(2n-1)^2 + 4} = \\frac{\\pi\\tanh(\\pi)}{8} = 0.391235...',
    variables: [],
    conditions: '级数收敛',
    notes: '常数级数求和',
    derivation: '复分析',
    related: ['series_sum_075', 'series_sum_076']
  },
  {
    id: 'series_sum_075',
    name: '常用求和公式 75',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / n^(2k) = (2π)^(2k) B_k / (2(2k)!)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^{2k}} = \\frac{(2\\pi)^{2k}B_k}{2(2k)!}',
    variables: [
      { name: 'k', description: '正整数', unit: '' },
      { name: 'B_k', description: '第k个伯努利数', unit: '' }
    ],
    conditions: 'k = 1, 2, ...',
    notes: '黎曼ζ函数在偶数点的值',
    derivation: '欧拉公式',
    related: ['series_sum_076']
  },
  {
    id: 'series_sum_076',
    name: '常用求和公式 76',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'Σ(n=1 to ∞) 1 / n² = π²/6 = 1.6449...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} = 1.6449...',
    variables: [],
    conditions: '级数收敛',
    notes: '巴塞尔问题，π²/6的级数表示',
    derivation: '公式75°中令k=1',
    related: ['series_sum_075', 'series_sum_077', 'series_sum_078', 'series_sum_080']
  },
  {
    id: 'series_sum_077',
    name: '常用求和公式 77',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / n⁴ = π⁴/90 = 1.082323...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^4} = \\frac{\\pi^4}{90} = 1.082323...',
    variables: [],
    conditions: '级数收敛',
    notes: 'π⁴/90的级数表示',
    derivation: '公式75°中令k=2',
    related: ['series_sum_076', 'series_sum_080']
  },
  {
    id: 'series_sum_078',
    name: '常用求和公式 78',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) / n² = π²/12 = 0.822467...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n^2} = \\frac{\\pi^2}{12} = 0.822467...',
    variables: [],
    conditions: '级数收敛',
    notes: 'π²/12的级数表示',
    derivation: '从ζ(2)推导',
    related: ['series_sum_076']
  },
  {
    id: 'series_sum_079',
    name: '常用求和公式 79',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) (-1)^(n-1) / (2n-1)² = ∫[0,1] (arctan x / x) dx = 0.915965...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{(2n-1)^2} = \\int_0^1 \\frac{\\arctan x}{x} dx = 0.915965...',
    variables: [],
    conditions: '级数收敛',
    notes: '卡特兰常数G的级数表示',
    derivation: '积分表示',
    related: ['series_sum_012']
  },
  {
    id: 'series_sum_080',
    name: '常用求和公式 80',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / n⁶ = π⁶/945 = 1.01734...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^6} = \\frac{\\pi^6}{945} = 1.01734...',
    variables: [],
    conditions: '级数收敛',
    notes: 'π⁶/945的级数表示',
    derivation: '公式75°中令k=3',
    related: ['series_sum_076', 'series_sum_077']
  },
  {
    id: 'series_sum_081',
    name: '常用求和公式 81',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / n^n = ∫[0,1] x^(-x) dx = 1.29128...',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^n} = \\int_0^1 x^{-x} dx = 1.29128...',
    variables: [],
    conditions: '级数收敛',
    notes: '索菲-日耳曼常数的级数表示',
    derivation: '积分表示',
    related: []
  },
  {
    id: 'series_sum_082',
    name: '常用求和公式 82',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'Σ(n=1 to ∞) 1 / (n(n+m)) = (1/m)(1 + 1/2 + ... + 1/m)',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n(n+m)} = \\frac{1}{m}\\left(1 + \\frac{1}{2} + \\cdots + \\frac{1}{m}\\right)',
    variables: [
      { name: 'm', description: '正整数', unit: '' }
    ],
    conditions: 'm为正整数',
    notes: '调和级数的推广',
    derivation: '部分分式分解',
    related: ['series_sum_008']
  },
  // 常用积分公式
  {
    id: 'integral_common_001',
    name: '常用积分公式 1°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(n-1) / (a+bx^m)^p dx = (1/(ma^p)) (a/b)^(n/m) B(p - n/m, n/m)',
    latex: '\\int_0^{\\infty} \\frac{x^{n-1}}{(a+bx^m)^p} dx = \\frac{1}{ma^p}\\left(\\frac{a}{b}\\right)^{\\frac{n}{m}} B\\left(p - \\frac{n}{m}, \\frac{n}{m}\\right)',
    variables: [
      { name: 'a, b, m, p', description: '参数', unit: '' },
      { name: 'n', description: '参数', unit: '' },
      { name: 'B', description: 'Beta函数', unit: '' }
    ],
    conditions: 'a, b, m, p > 0, 0 < n < mp',
    notes: '涉及Beta函数的广义积分',
    derivation: 'Beta函数定义',
    related: ['integral_common_002', 'integral_common_003']
  },
  {
    id: 'integral_common_002',
    name: '常用积分公式 2°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(n-1) / (a+bx^m) dx = (1/(ma)) (a/b)^(n/m) π / sin(nπ/m)',
    latex: '\\int_0^{\\infty} \\frac{x^{n-1}}{a+bx^m} dx = \\frac{1}{ma}\\left(\\frac{a}{b}\\right)^{\\frac{n}{m}} \\frac{\\pi}{\\sin(n\\pi/m)}',
    variables: [
      { name: 'a, b', description: '参数', unit: '' },
      { name: 'm, n', description: '参数', unit: '' }
    ],
    conditions: 'a, b > 0, 0 < n < m',
    notes: 'Beta函数的特殊形式',
    derivation: '从公式1°推导',
    related: ['integral_common_001', 'integral_common_003']
  },
  {
    id: 'integral_common_003',
    name: '常用积分公式 3°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(n-1) / (1+x^m) dx = π / (m sin(nπ/m))',
    latex: '\\int_0^{\\infty} \\frac{x^{n-1}}{1+x^m} dx = \\frac{\\pi}{m\\sin(n\\pi/m)}',
    variables: [
      { name: 'm, n', description: '参数', unit: '' }
    ],
    conditions: '0 < n < m',
    notes: '公式2°中a=b=1的特殊情况',
    derivation: '从公式2°推导',
    related: ['integral_common_002', 'integral_common_004', 'integral_common_005', 'integral_common_006', 'integral_common_007']
  },
  {
    id: 'integral_common_004',
    name: '常用积分公式 4°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] dx / (1+x^n) = π / (n sin(π/n))',
    latex: '\\int_0^{\\infty} \\frac{dx}{1+x^n} = \\frac{\\pi}{n\\sin(\\pi/n)}',
    variables: [
      { name: 'n', description: '参数', unit: '' }
    ],
    conditions: 'n > 1',
    notes: '公式3°中n=1的特殊情况',
    derivation: '从公式3°推导',
    related: ['integral_common_003', 'integral_common_005', 'integral_common_006', 'integral_common_007']
  },
  {
    id: 'integral_common_005',
    name: '常用积分公式 5°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] dx / (1+x³) = 2π / (3√3)',
    latex: '\\int_0^{\\infty} \\frac{dx}{1+x^3} = \\frac{2\\pi}{3\\sqrt{3}}',
    variables: [],
    conditions: '无',
    notes: '公式4°中n=3的特殊情况',
    derivation: '从公式4°推导',
    related: ['integral_common_004', 'integral_common_006', 'integral_common_007']
  },
  {
    id: 'integral_common_006',
    name: '常用积分公式 6°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] dx / (1+x⁴) = π / (2√2)',
    latex: '\\int_0^{\\infty} \\frac{dx}{1+x^4} = \\frac{\\pi}{2\\sqrt{2}}',
    variables: [],
    conditions: '无',
    notes: '公式4°中n=4的特殊情况',
    derivation: '从公式4°推导',
    related: ['integral_common_004', 'integral_common_005', 'integral_common_007']
  },
  {
    id: 'integral_common_007',
    name: '常用积分公式 7°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] dx / (1+x⁶) = π / 3',
    latex: '\\int_0^{\\infty} \\frac{dx}{1+x^6} = \\frac{\\pi}{3}',
    variables: [],
    conditions: '无',
    notes: '公式4°中n=6的特殊情况',
    derivation: '从公式4°推导',
    related: ['integral_common_004', 'integral_common_005', 'integral_common_006']
  },
  {
    id: 'integral_common_008',
    name: '常用积分公式 8°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] dx / (a²+x²)^n = (π/(2a^(2n-1))) ((2n-3)!! / (2n-2)!!)',
    latex: '\\int_0^{\\infty} \\frac{dx}{(a^2+x^2)^n} = \\frac{\\pi}{2a^{2n-1}} \\frac{(2n-3)!!}{(2n-2)!!}',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'n', description: '参数', unit: '' }
    ],
    conditions: 'a > 0, n ≥ 2',
    notes: '涉及双阶乘的积分',
    derivation: '递推公式',
    related: ['integral_common_009', 'integral_common_010']
  },
  {
    id: 'integral_common_009',
    name: '常用积分公式 9°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,1] dx / (1-x^n)^(1/m) = (1/n) B(1 - 1/n, 1/m)',
    latex: '\\int_0^1 \\frac{dx}{\\sqrt[m]{1-x^n}} = \\frac{1}{n} B\\left(1 - \\frac{1}{n}, \\frac{1}{m}\\right)',
    variables: [
      { name: 'm, n', description: '参数', unit: '' },
      { name: 'B', description: 'Beta函数', unit: '' }
    ],
    conditions: 'n > 1, m > 0',
    notes: '涉及Beta函数的积分',
    derivation: 'Beta函数定义',
    related: ['integral_common_010']
  },
  {
    id: 'integral_common_010',
    name: '常用积分公式 10°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,1] dx / √(1-x^m) = (√π/m) (Γ(1/m) / Γ(1/m + 1/2))',
    latex: '\\int_0^1 \\frac{dx}{\\sqrt{1-x^m}} = \\frac{\\sqrt{\\pi}}{m} \\frac{\\Gamma(1/m)}{\\Gamma(1/m + 1/2)}',
    variables: [
      { name: 'm', description: '参数', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: 'm > 0',
    notes: '涉及Gamma函数的积分',
    derivation: 'Beta函数与Gamma函数的关系',
    related: ['integral_common_009']
  },
  {
    id: 'integral_common_011',
    name: '常用积分公式 11°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(a-1) e^(-bx) dx = b^(-a) Γ(a)',
    latex: '\\int_0^{\\infty} x^{a-1}e^{-bx} dx = b^{-a}\\Gamma(a)',
    variables: [
      { name: 'a, b', description: '参数', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: 'a, b > 0',
    notes: 'Gamma函数的积分表示',
    derivation: 'Gamma函数定义',
    related: ['integral_common_012', 'integral_common_013']
  },
  {
    id: 'integral_common_012',
    name: '常用积分公式 12°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] e^(-ax) cos(bx) dx = a / (a² + b²)',
    latex: '\\int_0^{\\infty} e^{-ax}\\cos(bx) dx = \\frac{a}{a^2+b^2}',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '拉普拉斯变换',
    derivation: '复分析',
    related: ['integral_common_011', 'integral_common_013']
  },
  {
    id: 'integral_common_013',
    name: '常用积分公式 13°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] e^(-ax) sin(bx) dx = b / (a² + b²)',
    latex: '\\int_0^{\\infty} e^{-ax}\\sin(bx) dx = \\frac{b}{a^2+b^2}',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '拉普拉斯变换',
    derivation: '复分析',
    related: ['integral_common_011', 'integral_common_012']
  },
  {
    id: 'integral_common_014',
    name: '常用积分公式 14°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(p-1) e^(-ax) cos(bx) dx = Γ(p) cos(pθ) / (a² + b²)^(p/2), θ = arctan(b/a)',
    latex: '\\int_0^{\\infty} x^{p-1}e^{-ax}\\cos(bx) dx = \\frac{\\Gamma(p)\\cos(p\\theta)}{(a^2+b^2)^{p/2}}, \\quad \\theta = \\arctan(b/a)',
    variables: [
      { name: 'a, p', description: '参数', unit: '' },
      { name: 'b', description: '参数', unit: '' },
      { name: 'θ', description: '角度', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: 'a, p > 0',
    notes: '广义拉普拉斯变换',
    derivation: '复分析',
    related: ['integral_common_015']
  },
  {
    id: 'integral_common_015',
    name: '常用积分公式 15°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(p-1) e^(-ax) sin(bx) dx = Γ(p) sin(pθ) / (a² + b²)^(p/2)',
    latex: '\\int_0^{\\infty} x^{p-1}e^{-ax}\\sin(bx) dx = \\frac{\\Gamma(p)\\sin(p\\theta)}{(a^2+b^2)^{p/2}}',
    variables: [
      { name: 'a, p', description: '参数', unit: '' },
      { name: 'b', description: '参数', unit: '' },
      { name: 'θ', description: '角度', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: 'a, p > 0',
    notes: '广义拉普拉斯变换',
    derivation: '复分析',
    related: ['integral_common_014']
  },
  {
    id: 'integral_common_016',
    name: '常用积分公式 16°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] e^(-ax) (sin(bx) / x) dx = arctan(b/a)',
    latex: '\\int_0^{\\infty} e^{-ax}\\frac{\\sin(bx)}{x} dx = \\arctan(b/a)',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '狄利克雷积分',
    derivation: '对参数a求导',
    related: ['integral_common_012', 'integral_common_013']
  },
  {
    id: 'integral_common_017',
    name: '常用积分公式 17°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(a-1) e^(-bx²) dx = (1/2) b^(-a/2) Γ(a/2)',
    latex: '\\int_0^{\\infty} x^{a-1}e^{-bx^2} dx = \\frac{1}{2}b^{-a/2}\\Gamma(a/2)',
    variables: [
      { name: 'a, b', description: '参数', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: 'a, b > 0',
    notes: '高斯积分',
    derivation: 'Gamma函数',
    related: ['integral_common_018', 'integral_common_019', 'integral_common_020', 'integral_common_021']
  },
  {
    id: 'integral_common_018',
    name: '常用积分公式 18°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(2n) e^(-bx²) dx = ((2n-1)!! / (2^(n+1) b^n)) √(π/b)',
    latex: '\\int_0^{\\infty} x^{2n}e^{-bx^2} dx = \\frac{(2n-1)!!}{2^{n+1}b^n}\\sqrt{\\frac{\\pi}{b}}',
    variables: [
      { name: 'n', description: '参数', unit: '' },
      { name: 'b', description: '参数', unit: '' }
    ],
    conditions: 'n ≥ 1, b > 0',
    notes: '偶数次幂的高斯积分',
    derivation: '从公式17°推导',
    related: ['integral_common_017', 'integral_common_019', 'integral_common_020', 'integral_common_021']
  },
  {
    id: 'integral_common_019',
    name: '常用积分公式 19°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(2n-1) e^(-bx²) dx = ((n-1)! / (2b^n))',
    latex: '\\int_0^{\\infty} x^{2n-1}e^{-bx^2} dx = \\frac{(n-1)!}{2b^n}',
    variables: [
      { name: 'n', description: '参数', unit: '' },
      { name: 'b', description: '参数', unit: '' }
    ],
    conditions: 'n ≥ 1, b > 0',
    notes: '奇数次幂的高斯积分',
    derivation: '从公式17°推导',
    related: ['integral_common_017', 'integral_common_018', 'integral_common_020', 'integral_common_021']
  },
  {
    id: 'integral_common_020',
    name: '常用积分公式 20°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫[0,∞] e^(-bx²) dx = (1/2) √(π/b)',
    latex: '\\int_0^{\\infty} e^{-bx^2} dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{b}}',
    variables: [
      { name: 'b', description: '参数', unit: '' }
    ],
    conditions: 'b > 0',
    notes: '高斯积分',
    derivation: '从公式17°推导',
    related: ['integral_common_017', 'integral_common_021']
  },
  {
    id: 'integral_common_021',
    name: '常用积分公式 21°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫[-∞,∞] e^(-x²) dx = √π',
    latex: '\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}',
    variables: [],
    conditions: '无',
    notes: '欧拉-泊松积分',
    derivation: '高斯积分',
    related: ['integral_common_017', 'integral_common_020']
  },
  {
    id: 'integral_common_022',
    name: '常用积分公式 22°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] e^(-ax²) cos(bx) dx = (1/2) √(π/a) e^(-b²/(4a))',
    latex: '\\int_0^{\\infty} e^{-ax^2}\\cos(bx) dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{a}}e^{-b^2/(4a)}',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '高斯-傅里叶积分',
    derivation: '复分析',
    related: ['integral_common_023']
  },
  {
    id: 'integral_common_023',
    name: '常用积分公式 23°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] e^(-ax²) cosh(bx) dx = (1/2) √(π/a) e^(b²/(4a))',
    latex: '\\int_0^{\\infty} e^{-ax^2}\\cosh(bx) dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{a}}e^{b^2/(4a)}',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '高斯-双曲余弦积分',
    derivation: '复分析',
    related: ['integral_common_022']
  },
  {
    id: 'integral_common_024',
    name: '常用积分公式 24°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] e^(-ax) sin^(2n)(x) dx = (2n)! / (a(2²+a²)(4²+a²)...(4n²+a²))',
    latex: '\\int_0^{\\infty} e^{-ax}\\sin^{2n}(x) dx = \\frac{(2n)!}{a(2^2+a^2)(4^2+a^2)\\cdots(4n^2+a^2)}',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'n', description: '参数', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '涉及正弦偶数次幂的积分',
    derivation: '递推公式',
    related: ['integral_common_025']
  },
  {
    id: 'integral_common_025',
    name: '常用积分公式 25°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] e^(-ax) sin^(2n-1)(x) dx = (2n-1)! / ((1+a²)(3²+a²)...((2n-1)²+a²))',
    latex: '\\int_0^{\\infty} e^{-ax}\\sin^{2n-1}(x) dx = \\frac{(2n-1)!}{(1+a^2)(3^2+a^2)\\cdots((2n-1)^2+a^2)}',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'n', description: '参数', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '涉及正弦奇数次幂的积分',
    derivation: '递推公式',
    related: ['integral_common_024']
  },
  {
    id: 'integral_common_026',
    name: '常用积分公式 26°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(a-1) e^(-bx^n) dx = (1/(nb^(a/n))) Γ(a/n)',
    latex: '\\int_0^{\\infty} x^{a-1}e^{-bx^n} dx = \\frac{1}{nb^{a/n}}\\Gamma(a/n)',
    variables: [
      { name: 'a, b, n', description: '参数', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: 'a, b, n > 0',
    notes: '广义Gamma函数积分',
    derivation: 'Gamma函数',
    related: ['integral_common_011', 'integral_common_017']
  },
  {
    id: 'integral_common_027',
    name: '常用积分公式 27°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π/2] sin^m(x) cos^n(x) dx = (1/2) B((m+1)/2, (n+1)/2)',
    latex: '\\int_0^{\\pi/2} \\sin^m(x)\\cos^n(x) dx = \\frac{1}{2}B\\left(\\frac{m+1}{2}, \\frac{n+1}{2}\\right)',
    variables: [
      { name: 'm, n', description: '参数', unit: '' },
      { name: 'B', description: 'Beta函数', unit: '' }
    ],
    conditions: 'm, n > -1',
    notes: 'Beta函数积分',
    derivation: 'Beta函数定义',
    related: ['integral_common_028', 'integral_common_029']
  },
  {
    id: 'integral_common_028',
    name: '常用积分公式 28°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π/2] sin^(2n)(x) dx = ((2n-1)!! / (2n)!!) π/2',
    latex: '\\int_0^{\\pi/2} \\sin^{2n}(x) dx = \\frac{(2n-1)!!}{(2n)!!}\\frac{\\pi}{2}',
    variables: [
      { name: 'n', description: '参数', unit: '' }
    ],
    conditions: 'n ≥ 1',
    notes: '正弦偶数次幂的积分',
    derivation: '从公式27°推导',
    related: ['integral_common_027', 'integral_common_029']
  },
  {
    id: 'integral_common_029',
    name: '常用积分公式 29°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π/2] sin^(2n+1)(x) dx = ((2n)!! / (2n+1)!!)',
    latex: '\\int_0^{\\pi/2} \\sin^{2n+1}(x) dx = \\frac{(2n)!!}{(2n+1)!!}',
    variables: [
      { name: 'n', description: '参数', unit: '' }
    ],
    conditions: 'n ≥ 0',
    notes: '正弦奇数次幂的积分',
    derivation: '从公式27°推导',
    related: ['integral_common_027', 'integral_common_028']
  },
  {
    id: 'integral_common_030',
    name: '常用积分公式 30°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π/2] dx / (a + sin²(x))² = (π(2a+1)) / (4(a²+a)^(3/2))',
    latex: '\\int_0^{\\pi/2} \\frac{dx}{(a+\\sin^2(x))^2} = \\frac{\\pi(2a+1)}{4(a^2+a)^{3/2}}',
    variables: [
      { name: 'a', description: '参数', unit: '' }
    ],
    conditions: 'a > 0',
    notes: '涉及正弦平方的积分',
    derivation: 'Beta函数',
    related: ['integral_common_027']
  },
  {
    id: 'integral_common_031',
    name: '常用积分公式 31°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π/2] (sin²(nx) / sin²(x)) dx = nπ/2',
    latex: '\\int_0^{\\pi/2} \\frac{\\sin^2(nx)}{\\sin^2(x)} dx = \\frac{n\\pi}{2}',
    variables: [
      { name: 'n', description: '正整数', unit: '' }
    ],
    conditions: 'n为正整数',
    notes: '费耶积分',
    derivation: '费耶积分',
    related: ['integral_common_032']
  },
  {
    id: 'integral_common_032',
    name: '常用积分公式 32°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: '∫[0,∞] (sin(ax) / x) dx = (π/2) sgn(a)',
    latex: '\\int_0^{\\infty} \\frac{\\sin(ax)}{x} dx = \\frac{\\pi}{2}\\text{sgn}(a)',
    variables: [
      { name: 'a', description: '参数', unit: '' }
    ],
    conditions: 'a为实数',
    notes: '狄利克雷积分',
    derivation: '复分析',
    related: ['integral_common_033', 'integral_common_034', 'integral_common_035']
  },
  {
    id: 'integral_common_033',
    name: '常用积分公式 33°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (tan(ax) / x) dx = (π/2) sgn(a)',
    latex: '\\int_0^{\\infty} \\frac{\\tan(ax)}{x} dx = \\frac{\\pi}{2}\\text{sgn}(a)',
    variables: [
      { name: 'a', description: '参数', unit: '' }
    ],
    conditions: 'a为实数',
    notes: '正切函数的积分',
    derivation: '复分析',
    related: ['integral_common_032']
  },
  {
    id: 'integral_common_034',
    name: '常用积分公式 34°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (sin(ax) / x)² dx = (π/2)|a|',
    latex: '\\int_0^{\\infty} \\left(\\frac{\\sin(ax)}{x}\\right)^2 dx = \\frac{\\pi}{2}|a|',
    variables: [
      { name: 'a', description: '参数', unit: '' }
    ],
    conditions: 'a为实数',
    notes: '正弦平方的积分',
    derivation: '从公式32°推导',
    related: ['integral_common_032', 'integral_common_035']
  },
  {
    id: 'integral_common_035',
    name: '常用积分公式 35°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (sin(ax) / x)³ dx = (3π/8) a |a|',
    latex: '\\int_0^{\\infty} \\left(\\frac{\\sin(ax)}{x}\\right)^3 dx = \\frac{3\\pi}{8}a|a|',
    variables: [
      { name: 'a', description: '参数', unit: '' }
    ],
    conditions: 'a为实数',
    notes: '正弦三次方的积分',
    derivation: '从公式32°推导',
    related: ['integral_common_032', 'integral_common_034']
  },
  {
    id: 'integral_common_036',
    name: '常用积分公式 36°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] ((cos(ax) - cos(bx)) / x) dx = ln(b/a)',
    latex: '\\int_0^{\\infty} \\frac{\\cos(ax) - \\cos(bx)}{x} dx = \\ln(b/a)',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: 'a, b > 0',
    notes: '余弦差分的积分',
    derivation: '从公式32°推导',
    related: ['integral_common_032']
  },
  {
    id: 'integral_common_037',
    name: '常用积分公式 37°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] sin(x²) dx = ∫[0,∞] cos(x²) dx = (1/2)√(π/2)',
    latex: '\\int_0^{\\infty} \\sin(x^2) dx = \\int_0^{\\infty} \\cos(x^2) dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{2}}',
    variables: [],
    conditions: '无',
    notes: '菲涅耳积分',
    derivation: '复分析',
    related: ['integral_common_038']
  },
  {
    id: 'integral_common_038',
    name: '常用积分公式 38°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (sin x / √x) dx = ∫[0,∞] (cos x / √x) dx = √(π/2)',
    latex: '\\int_0^{\\infty} \\frac{\\sin x}{\\sqrt{x}} dx = \\int_0^{\\infty} \\frac{\\cos x}{\\sqrt{x}} dx = \\sqrt{\\frac{\\pi}{2}}',
    variables: [],
    conditions: '无',
    notes: '涉及平方根的三角函数积分',
    derivation: 'Gamma函数',
    related: ['integral_common_037']
  },
  {
    id: 'integral_common_039',
    name: '常用积分公式 39°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (cos(ax) / x^p) dx = (πa^(p-1)) / (2Γ(p)cos(pπ/2))',
    latex: '\\int_0^{\\infty} \\frac{\\cos(ax)}{x^p} dx = \\frac{\\pi a^{p-1}}{2\\Gamma(p)\\cos(p\\pi/2)}',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'p', description: '参数', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: '0 < p < 1, a > 0',
    notes: '涉及Gamma函数的积分',
    derivation: 'Gamma函数',
    related: ['integral_common_040']
  },
  {
    id: 'integral_common_040',
    name: '常用积分公式 40°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (sin(ax) / x^p) dx = (πa^(p-1)) / (2Γ(p)sin(pπ/2))',
    latex: '\\int_0^{\\infty} \\frac{\\sin(ax)}{x^p} dx = \\frac{\\pi a^{p-1}}{2\\Gamma(p)\\sin(p\\pi/2)}',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'p', description: '参数', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: '0 < p < 2, a > 0',
    notes: '涉及Gamma函数的积分',
    derivation: 'Gamma函数',
    related: ['integral_common_039']
  },
  {
    id: 'integral_common_041',
    name: '常用积分公式 41°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (sin^p x / x) dx = 2^(p-2) (Γ²(p/2) / Γ(p))',
    latex: '\\int_0^{\\infty} \\frac{\\sin^p x}{x} dx = 2^{p-2}\\frac{\\Gamma^2(p/2)}{\\Gamma(p)}',
    variables: [
      { name: 'p', description: '参数', unit: '' },
      { name: 'Γ', description: 'Gamma函数', unit: '' }
    ],
    conditions: 'p = m/n, m,n为正奇数',
    notes: '涉及Gamma函数的积分',
    derivation: 'Gamma函数',
    related: ['integral_common_032']
  },
  {
    id: 'integral_common_042',
    name: '常用积分公式 42°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (cos(bx) / (a² + x²)) dx = (π/(2a)) e^(-ab)',
    latex: '\\int_0^{\\infty} \\frac{\\cos(bx)}{a^2+x^2} dx = \\frac{\\pi}{2a}e^{-ab}',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: 'a, b > 0',
    notes: '拉普拉斯积分',
    derivation: '复分析',
    related: ['integral_common_043']
  },
  {
    id: 'integral_common_043',
    name: '常用积分公式 43°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] (x sin(bx) / (a² + x²)) dx = (π/2) e^(-ab)',
    latex: '\\int_0^{\\infty} \\frac{x\\sin(bx)}{a^2+x^2} dx = \\frac{\\pi}{2}e^{-ab}',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: 'a, b > 0',
    notes: '拉普拉斯积分',
    derivation: '复分析',
    related: ['integral_common_042']
  },
  {
    id: 'integral_common_044',
    name: '常用积分公式 44°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,1] x^(a-1) (ln x)^n dx = ((-1)^n n!) / a^(n+1)',
    latex: '\\int_0^1 x^{a-1}(\\ln x)^n dx = \\frac{(-1)^n n!}{a^{n+1}}',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'n', description: '参数', unit: '' }
    ],
    conditions: 'a > 0, n ≥ 0',
    notes: '涉及对数的积分',
    derivation: '对参数a求导',
    related: ['integral_common_045']
  },
  {
    id: 'integral_common_045',
    name: '常用积分公式 45°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] e^(-x) ln x dx = -γ',
    latex: '\\int_0^{\\infty} e^{-x}\\ln x dx = -\\gamma',
    variables: [
      { name: 'γ', description: '欧拉常数', unit: '' }
    ],
    conditions: '无',
    notes: '欧拉常数的积分表示',
    derivation: 'Gamma函数',
    related: ['integral_common_044']
  },
  {
    id: 'integral_common_046',
    name: '常用积分公式 46°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,1] ln x ln(1+x) dx = 2 - ln4 - π²/12',
    latex: '\\int_0^1 \\ln x \\ln(1+x) dx = 2 - \\ln 4 - \\frac{\\pi^2}{12}',
    variables: [],
    conditions: '无',
    notes: '涉及对数的积分',
    derivation: '级数展开',
    related: ['integral_common_047']
  },
  {
    id: 'integral_common_047',
    name: '常用积分公式 47°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,1] (ln(1+x) / x) dx = π²/12',
    latex: '\\int_0^1 \\frac{\\ln(1+x)}{x} dx = \\frac{\\pi^2}{12}',
    variables: [],
    conditions: '无',
    notes: 'π²/12的积分表示',
    derivation: '级数展开',
    related: ['integral_common_046', 'series_sum_078']
  },
  {
    id: 'integral_common_048',
    name: '常用积分公式 48°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,1] ln x ln(1-x) dx = 2 - π²/6',
    latex: '\\int_0^1 \\ln x \\ln(1-x) dx = 2 - \\frac{\\pi^2}{6}',
    variables: [],
    conditions: '无',
    notes: '涉及对数的积分',
    derivation: '级数展开',
    related: ['integral_common_046', 'series_sum_076']
  },
  {
    id: 'integral_common_049',
    name: '常用积分公式 49°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,1] (ln(1+x) / (1+x²)) dx = (π/8) ln2',
    latex: '\\int_0^1 \\frac{\\ln(1+x)}{1+x^2} dx = \\frac{\\pi}{8}\\ln 2',
    variables: [],
    conditions: '无',
    notes: '涉及对数和反正切的积分',
    derivation: '复分析',
    related: ['integral_common_047']
  },
  {
    id: 'integral_common_050',
    name: '常用积分公式 50°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π/2] ln(sin x) dx = -(π/2)ln2',
    latex: '\\int_0^{\\pi/2} \\ln(\\sin x) dx = -\\frac{\\pi}{2}\\ln 2',
    variables: [],
    conditions: '无',
    notes: '欧拉积分',
    derivation: '对称性',
    related: ['integral_common_051']
  },
  {
    id: 'integral_common_051',
    name: '常用积分公式 51°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π] ln(a ± b cos x) dx = π ln((a + √(a² - b²))/2)',
    latex: '\\int_0^{\\pi} \\ln(a \\pm b\\cos x) dx = \\pi \\ln\\left(\\frac{a + \\sqrt{a^2-b^2}}{2}\\right)',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: '0 < b ≤ a',
    notes: '涉及对数和余弦的积分',
    derivation: '复分析',
    related: ['integral_common_050', 'integral_common_052']
  },
  {
    id: 'integral_common_052',
    name: '常用积分公式 52°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π] ln(a² - 2ab cos x + b²) dx = 2π ln a',
    latex: '\\int_0^{\\pi} \\ln(a^2 - 2ab\\cos x + b^2) dx = 2\\pi \\ln a',
    variables: [
      { name: 'a, b', description: '参数', unit: '' }
    ],
    conditions: '0 < b ≤ a',
    notes: '涉及对数和余弦的积分',
    derivation: '复分析',
    related: ['integral_common_051', 'integral_common_053']
  },
  {
    id: 'integral_common_053',
    name: '常用积分公式 53°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π] ln(1 - 2q cos x + q²) dx = 0 (|q| ≤ 1), 2π ln|q| (|q| > 1)',
    latex: '\\int_0^{\\pi} \\ln(1 - 2q\\cos x + q^2) dx = \\begin{cases} 0 & |q| \\leq 1 \\\\ 2\\pi \\ln|q| & |q| > 1 \\end{cases}',
    variables: [
      { name: 'q', description: '参数', unit: '' }
    ],
    conditions: 'q为实数',
    notes: '分段函数的积分',
    derivation: '复分析',
    related: ['integral_common_052', 'integral_common_054']
  },
  {
    id: 'integral_common_054',
    name: '常用积分公式 54°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π] (ln(1 + q cos x) / cos x) dx = π arcsin(q)',
    latex: '\\int_0^{\\pi} \\frac{\\ln(1+q\\cos x)}{\\cos x} dx = \\pi \\arcsin(q)',
    variables: [
      { name: 'q', description: '参数', unit: '' }
    ],
    conditions: '|q| < 1',
    notes: '涉及对数和余弦的积分',
    derivation: '级数展开',
    related: ['integral_common_053', 'integral_common_055']
  },
  {
    id: 'integral_common_055',
    name: '常用积分公式 55°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,2π] ((1 - q²) / (1 - 2q cos x + q²)) dx = 2π',
    latex: '\\int_0^{2\\pi} \\frac{1-q^2}{1-2q\\cos x + q^2} dx = 2\\pi',
    variables: [
      { name: 'q', description: '参数', unit: '' }
    ],
    conditions: '|q| < 1',
    notes: '泊松核的积分',
    derivation: '复分析',
    related: ['integral_common_054', 'integral_common_056']
  },
  {
    id: 'integral_common_056',
    name: '常用积分公式 56°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,π] (cos(nx) / (1 - 2q cos x + q²)) dx = (πq^n) / (1 - q²)',
    latex: '\\int_0^{\\pi} \\frac{\\cos(nx)}{1-2q\\cos x + q^2} dx = \\frac{\\pi q^n}{1-q^2}',
    variables: [
      { name: 'q', description: '参数', unit: '' },
      { name: 'n', description: '自然数', unit: '' }
    ],
    conditions: '|q| < 1, n为自然数',
    notes: '涉及余弦的积分',
    derivation: '复分析',
    related: ['integral_common_055', 'integral_common_057']
  },
  {
    id: 'integral_common_057',
    name: '常用积分公式 57°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,1] dx / (1 + 2x cos α + x²) = α / (2 sin α)',
    latex: '\\int_0^1 \\frac{dx}{1+2x\\cos\\alpha + x^2} = \\frac{\\alpha}{2\\sin\\alpha}',
    variables: [
      { name: 'α', description: '角度', unit: '' }
    ],
    conditions: '0 < α < π/2',
    notes: '涉及三角函数的积分',
    derivation: '部分分式分解',
    related: ['integral_common_058']
  },
  {
    id: 'integral_common_058',
    name: '常用积分公式 58°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] dx / (1 + 2x cos α + x²) = α / sin α',
    latex: '\\int_0^{\\infty} \\frac{dx}{1+2x\\cos\\alpha + x^2} = \\frac{\\alpha}{\\sin\\alpha}',
    variables: [
      { name: 'α', description: '角度', unit: '' }
    ],
    conditions: '0 < α < π/2',
    notes: '涉及三角函数的广义积分',
    derivation: '复分析',
    related: ['integral_common_057']
  },
  {
    id: 'integral_common_059',
    name: '常用积分公式 59°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x / (e^x + 1) dx = π²/12',
    latex: '\\int_0^{\\infty} \\frac{x}{e^x + 1} dx = \\frac{\\pi^2}{12}',
    variables: [],
    conditions: '无',
    notes: 'π²/12的积分表示',
    derivation: '级数展开',
    related: ['integral_common_060', 'integral_common_061', 'integral_common_062', 'integral_common_063', 'integral_common_064']
  },
  {
    id: 'integral_common_060',
    name: '常用积分公式 60°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] sin(ax) / (e^x + 1) dx = (1/2)(1/a - π / sinh(aπ))',
    latex: '\\int_0^{\\infty} \\frac{\\sin(ax)}{e^x + 1} dx = \\frac{1}{2}\\left(\\frac{1}{a} - \\frac{\\pi}{\\sinh(a\\pi)}\\right)',
    variables: [
      { name: 'a', description: '参数', unit: '' }
    ],
    conditions: 'a ≠ 0',
    notes: '涉及双曲正弦的积分',
    derivation: '级数展开',
    related: ['integral_common_059', 'integral_common_061', 'integral_common_062']
  },
  {
    id: 'integral_common_061',
    name: '常用积分公式 61°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x / (e^x - 1) dx = π²/6',
    latex: '\\int_0^{\\infty} \\frac{x}{e^x - 1} dx = \\frac{\\pi^2}{6}',
    variables: [],
    conditions: '无',
    notes: 'π²/6的积分表示',
    derivation: '级数展开',
    related: ['integral_common_059', 'integral_common_062', 'integral_common_063', 'integral_common_064', 'series_sum_076']
  },
  {
    id: 'integral_common_062',
    name: '常用积分公式 62°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] sin(ax) / (e^x - 1) dx = (1/2)(π coth(aπ) - 1/a)',
    latex: '\\int_0^{\\infty} \\frac{\\sin(ax)}{e^x - 1} dx = \\frac{1}{2}\\left(\\pi\\coth(a\\pi) - \\frac{1}{a}\\right)',
    variables: [
      { name: 'a', description: '参数', unit: '' }
    ],
    conditions: 'a ≠ 0',
    notes: '涉及双曲余切的积分',
    derivation: '级数展开',
    related: ['integral_common_060', 'integral_common_061']
  },
  {
    id: 'integral_common_063',
    name: '常用积分公式 63°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x^(2n-1) / (e^x - 1) dx = (2π)^(2n) B_n / (4n)',
    latex: '\\int_0^{\\infty} \\frac{x^{2n-1}}{e^x - 1} dx = \\frac{(2\\pi)^{2n}B_n}{4n}',
    variables: [
      { name: 'n', description: '参数', unit: '' },
      { name: 'B_n', description: '第n个伯努利数', unit: '' }
    ],
    conditions: 'n为正整数',
    notes: '涉及伯努利数的积分',
    derivation: '级数展开',
    related: ['integral_common_061', 'integral_common_064']
  },
  {
    id: 'integral_common_064',
    name: '常用积分公式 64°',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['常用公式'],
    formula: '∫[0,∞] x³ / (e^x - 1) dx = π⁴/15',
    latex: '\\int_0^{\\infty} \\frac{x^3}{e^x - 1} dx = \\frac{\\pi^4}{15}',
    variables: [],
    conditions: '无',
    notes: 'π⁴/15的积分表示',
    derivation: '公式63°中令n=2',
    related: ['integral_common_061', 'integral_common_063']
  },
  // 傅里叶展开式
  {
    id: 'fourier_001',
    name: 'sgn(x)的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'sgn(x) = (4/π) Σ(n=1 to ∞) sin((2n-1)x) / (2n-1)',
    latex: '\\text{sgn}(x) = \\frac{4}{\\pi}\\sum_{n=1}^{\\infty} \\frac{\\sin((2n-1)x)}{2n-1}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '符号函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_002', 'fourier_003', 'fourier_004']
  },
  {
    id: 'fourier_002',
    name: 'x的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'x = 2 Σ(n=1 to ∞) (-1)^(n-1) sin(nx) / n',
    latex: 'x = 2\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin(nx)}{n}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '线性函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_001', 'fourier_003', 'fourier_004']
  },
  {
    id: 'fourier_003',
    name: 'π-x的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'π - x = 2 Σ(n=1 to ∞) sin(nx) / n',
    latex: '\\pi - x = 2\\sum_{n=1}^{\\infty} \\frac{\\sin(nx)}{n}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '0 < x < 2π',
    notes: '线性函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_002', 'fourier_004']
  },
  {
    id: 'fourier_004',
    name: '|x|的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: '|x| = π/2 - (4/π) Σ(n=1 to ∞) cos((2n-1)x) / (2n-1)²',
    latex: '|x| = \\frac{\\pi}{2} - \\frac{4}{\\pi}\\sum_{n=1}^{\\infty} \\frac{\\cos((2n-1)x)}{(2n-1)^2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ π',
    notes: '绝对值函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_001', 'fourier_002', 'fourier_005']
  },
  {
    id: 'fourier_005',
    name: 'x²的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'x² = π²/3 + 4 Σ(n=1 to ∞) (-1)^n cos(nx) / n²',
    latex: 'x^2 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^{\\infty} \\frac{(-1)^n\\cos(nx)}{n^2}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ π',
    notes: '二次函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_004', 'fourier_006']
  },
  {
    id: 'fourier_006',
    name: 'x³的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'x³ = Σ(n=1 to ∞) (-1)^n (12 - 2n²π²) sin(nx) / n³',
    latex: 'x^3 = \\sum_{n=1}^{\\infty} \\frac{(-1)^n(12-2n^2\\pi^2)\\sin(nx)}{n^3}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '三次函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_005', 'fourier_007', 'fourier_008']
  },
  {
    id: 'fourier_007',
    name: 'x sin x的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'x sin x = 1 - cos(x)/2 - 2 Σ(n=2 to ∞) (-1)^n cos(nx) / (n² - 1)',
    latex: 'x\\sin x = 1 - \\frac{\\cos(x)}{2} - 2\\sum_{n=2}^{\\infty} \\frac{(-1)^n\\cos(nx)}{n^2-1}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ π',
    notes: '乘积函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_006', 'fourier_008']
  },
  {
    id: 'fourier_008',
    name: 'x cos x的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'x cos x = -sin(x)/2 - 2 Σ(n=2 to ∞) (-1)^n n sin(nx) / (n² - 1)',
    latex: 'x\\cos x = -\\frac{\\sin(x)}{2} - 2\\sum_{n=2}^{\\infty} \\frac{(-1)^n n\\sin(nx)}{n^2-1}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '乘积函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_006', 'fourier_007']
  },
  {
    id: 'fourier_009',
    name: '|sin x|的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: '|sin x| = 2/π - (4/π) Σ(n=1 to ∞) cos(2nx) / (4n² - 1)',
    latex: '|\\sin x| = \\frac{2}{\\pi} - \\frac{4}{\\pi}\\sum_{n=1}^{\\infty} \\frac{\\cos(2nx)}{4n^2-1}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '正弦绝对值函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_010']
  },
  {
    id: 'fourier_010',
    name: '|cos x|的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: '|cos x| = 2/π + (4/π) Σ(n=1 to ∞) (-1)^(n-1) cos(2nx) / (4n² - 1)',
    latex: '|\\cos x| = \\frac{2}{\\pi} + \\frac{4}{\\pi}\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos(2nx)}{4n^2-1}',
    variables: [
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < +∞',
    notes: '余弦绝对值函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_009']
  },
  {
    id: 'fourier_011',
    name: 'e^(ax)的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'e^(ax) = (2sinh(aπ)/π) [1/(2a) + Σ(n=1 to ∞) (-1)^n (a cos(nx) - n sin(nx)) / (n² + a²)]',
    latex: 'e^{ax} = \\frac{2\\sinh(a\\pi)}{\\pi}\\left[\\frac{1}{2a} + \\sum_{n=1}^{\\infty} \\frac{(-1)^n(a\\cos(nx) - n\\sin(nx))}{n^2+a^2}\\right]',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '指数函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_012', 'fourier_013']
  },
  {
    id: 'fourier_012',
    name: 'sinh(ax)的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'sinh(ax) = (2sinh(aπ)/π) Σ(n=1 to ∞) (-1)^(n-1) n sin(nx) / (n² + a²)',
    latex: '\\sinh(ax) = \\frac{2\\sinh(a\\pi)}{\\pi}\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}n\\sin(nx)}{n^2+a^2}',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| < π',
    notes: '双曲正弦函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_011', 'fourier_013']
  },
  {
    id: 'fourier_013',
    name: 'cosh(ax)的傅里叶展开式',
    category: '数学',
    subCategory: '高等数学-傅里叶分析',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'cosh(ax) = (sinh(aπ)/π) [1/a + 2 Σ(n=1 to ∞) (-1)^n a cos(nx) / (n² + a²)]',
    latex: '\\cosh(ax) = \\frac{\\sinh(a\\pi)}{\\pi}\\left[\\frac{1}{a} + 2\\sum_{n=1}^{\\infty} \\frac{(-1)^n a\\cos(nx)}{n^2+a^2}\\right]',
    variables: [
      { name: 'a', description: '参数', unit: '' },
      { name: 'x', description: '变量', unit: '' }
    ],
    conditions: '|x| ≤ π',
    notes: '双曲余弦函数的傅里叶级数',
    derivation: '傅里叶级数',
    related: ['fourier_011', 'fourier_012']
  },
  // 特殊定理
  {
    id: 'theorem_gauss_digamma',
    name: '高斯伽马函数定理',
    category: '数学',
    subCategory: '高等数学-特殊函数',
    grade: '大学',
    tags: ['定理'],
    formula: 'ψ(r/m) = -γ - log(2m) - (π/2)cot(rπ/m) + 2 Σ(n=1 to ⌊(m-1)/2⌋) cos(2πnr/m) log(sin(πn/m))',
    latex: '\\psi(r/m) = -\\gamma - \\log(2m) - \\frac{\\pi}{2}\\cot(r\\pi/m) + 2\\sum_{n=1}^{\\lfloor(m-1)/2\\rfloor} \\cos(2\\pi nr/m)\\log(\\sin(\\pi n/m))',
    variables: [
      { name: 'r, m', description: '自然数', unit: '' },
      { name: 'ψ', description: 'Digamma函数', unit: '' },
      { name: 'γ', description: '欧拉-马歇罗尼常数', unit: '' }
    ],
    conditions: '∀r, m ∈ N, 0 < r < m',
    notes: '利用Gauss\'s digamma theorem计算Digamma函数在有理数点的值',
    derivation: 'Gauss\'s digamma theorem',
    related: []
  },
  {
    id: 'theorem_lobachevsky',
    name: '罗巴切夫斯基积分法',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['定理'],
    formula: '设f(x)在0 ≤ x < +∞范围内，f(x+π) = f(x)及f(π-x) = f(x)，则：∫[0,+∞] f(x)(sin x / x) dx = ∫[0,π/2] f(x) dx',
    latex: '\\text{设}f(x)\\text{在}0 \\leq x < +\\infty\\text{范围内，}f(x+\\pi) = f(x)\\text{及}f(\\pi-x) = f(x)\\text{，则：}\\int_0^{+\\infty} f(x)\\frac{\\sin x}{x} dx = \\int_0^{\\pi/2} f(x) dx',
    variables: [
      { name: 'f(x)', description: '满足条件的函数', unit: '' }
    ],
    conditions: 'f(x+π) = f(x) 及 f(π-x) = f(x)',
    notes: '罗巴切夫斯基(Lobachevsky)积分法。当f(x) = 1时，便是狄利克雷积分',
    derivation: '罗巴切夫斯基积分法',
    related: ['theorem_lobachevsky_2', 'integral_common_032']
  },
  {
    id: 'theorem_lobachevsky_2',
    name: '罗巴切夫斯基积分法（续）',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['定理'],
    formula: '类似的，在同样条件下：∫[0,+∞] f(x)(sin² x / x²) dx = ∫[0,π/2] f(x) dx',
    latex: '\\text{类似的，在同样条件下：}\\int_0^{+\\infty} f(x)\\frac{\\sin^2 x}{x^2} dx = \\int_0^{\\pi/2} f(x) dx',
    variables: [
      { name: 'f(x)', description: '满足条件的函数', unit: '' }
    ],
    conditions: 'f(x+π) = f(x) 及 f(π-x) = f(x)',
    notes: '罗巴切夫斯基积分法的另一种形式',
    derivation: '罗巴切夫斯基积分法',
    related: ['theorem_lobachevsky']
  },
  {
    id: 'theorem_chebyshev',
    name: '切比雪夫定理',
    category: '数学',
    subCategory: '高等数学-积分',
    grade: '大学',
    tags: ['定理'],
    formula: '设∫x^m (a+bx^n)^p dx为一个二项微分式，其中p, m, n为有理数，则其可表示为初等函数的充分必要条件是p, (m+1)/n, (m+1)/n + p中至少有一个为整数',
    latex: '\\text{设}\\int x^m (a+bx^n)^p dx\\text{为一个二项微分式，其中}p, m, n\\text{为有理数，则其可表示为初等函数的充分必要条件是}p, (m+1)/n, (m+1)/n + p\\text{中至少有一个为整数}',
    variables: [
      { name: 'p, m, n', description: '有理数', unit: '' },
      { name: 'a, b', description: '常数', unit: '' }
    ],
    conditions: 'p, m, n为有理数',
    notes: '定理2.1 (Chebyshev定理)。当p为整数时，可令x = t^q，其中q为m和n的公分母；当(m+1)/n为整数时，可令a+bx^n = t^r，其中r为有理数p的分母；当(m+1)/n + p为整数时，可令(a+bx^n)/x^n = t^r，其中r为有理数p的分母',
    derivation: '切比雪夫定理',
    related: []
  },
  {
    id: 'theorem_euler_maclaurin',
    name: '欧拉-麦克劳林公式',
    category: '数学',
    subCategory: '高等数学-级数',
    grade: '大学',
    tags: ['定理', '必背公式'],
    formula: 'Σ(n=a to b) f(n) = ∫[a,b] f(x) dx + (f(a) + f(b))/2 + Σ(k=1 to ∞) (B_(2k) / (2k)!) (f^((2k-1))(b) - f^((2k-1))(a))',
    latex: '\\sum_{n=a}^{b} f(n) = \\int_a^b f(x) dx + \\frac{f(a) + f(b)}{2} + \\sum_{k=1}^{\\infty} \\frac{B_{2k}}{(2k)!}(f^{(2k-1)}(b) - f^{(2k-1)}(a))',
    variables: [
      { name: 'a, b', description: '整数', unit: '' },
      { name: 'f(x)', description: '函数', unit: '' },
      { name: 'B_n', description: '第n个伯努利数', unit: '' }
    ],
    conditions: 'a与b均为整数',
    notes: '欧拉-麦克劳林公式(Euler-Maclaurin formula)，其中B_n表示第n个伯努利数(Bernoulli number)',
    derivation: '欧拉-麦克劳林公式',
    related: []
  },
  // 天文学公式 - 天体力学基础
  {
    id: 'astro_001',
    name: '开普勒第一定律（椭圆轨道定律）',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['必背公式', '定律'],
    formula: '行星轨道为椭圆，太阳位于椭圆的一个焦点上',
    latex: '\\text{行星轨道为椭圆，太阳位于椭圆的一个焦点上}',
    variables: [
      { name: 'a', description: '轨道半长轴', unit: 'm' },
      { name: 'b', description: '轨道半短轴', unit: 'm' },
      { name: 'e', description: '偏心率', unit: '0 ≤ e < 1' },
      { name: 'r', description: '距离', unit: 'm' },
      { name: 'f', description: '真近点角', unit: 'rad' }
    ],
    conditions: '二体问题，中心天体质量远大于轨道天体',
    notes: '开普勒第一定律描述了行星的轨道形状。椭圆方程：r = a(1-e²)/(1+e·cos f)，其中e = √(1-b²/a²)',
    derivation: '由牛顿万有引力定律和角动量守恒推导得出',
    related: ['high_phy_008', 'astro_002', 'astro_003']
  },
  {
    id: 'astro_002',
    name: '开普勒第二定律（面积定律）',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['必背公式', '定律'],
    formula: 'dA/dt = h/2 = 常数，或 r²(dθ/dt) = h = 常数',
    latex: '\\frac{dA}{dt} = \\frac{h}{2} = \\text{常数}, \\quad \\text{或} \\quad r^2\\frac{d\\theta}{dt} = h = \\text{常数}',
    variables: [
      { name: 'A', description: '扫过面积', unit: 'm²' },
      { name: 't', description: '时间', unit: 's' },
      { name: 'h', description: '比角动量（单位质量角动量）', unit: 'm²/s' },
      { name: 'r', description: '距离', unit: 'm' },
      { name: 'θ', description: '极角', unit: 'rad' }
    ],
    conditions: '二体问题，中心力场',
    notes: '开普勒第二定律说明：行星与太阳的连线在相等时间内扫过相等的面积。这是角动量守恒的体现。在近日点速度最大，在远日点速度最小',
    derivation: '由角动量守恒定律推导：L = mr²(dθ/dt) = 常数，其中L为角动量，m为质量',
    related: ['astro_001', 'astro_003', 'high_phy_007']
  },
  {
    id: 'astro_003',
    name: '开普勒第三定律（调和定律）',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['必背公式', '定律'],
    formula: 'T²/a³ = 4π²/(G(M+m)) ≈ 4π²/(GM)',
    latex: '\\frac{T^2}{a^3} = \\frac{4\\pi^2}{G(M+m)} \\approx \\frac{4\\pi^2}{GM}',
    variables: [
      { name: 'T', description: '轨道周期', unit: 's' },
      { name: 'a', description: '轨道半长轴', unit: 'm' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' },
      { name: 'm', description: '轨道天体质量', unit: 'kg' }
    ],
    conditions: '椭圆轨道，当M >> m时可简化为T²/a³ = 4π²/(GM)',
    notes: '行星公转周期的平方与轨道半长轴的立方成正比。这是万有引力定律的直接结果。精确形式包含(M+m)，当中心天体质量远大于轨道天体时，可忽略m',
    derivation: '由万有引力定律、角动量守恒和能量守恒联合推导',
    related: ['high_phy_008', 'astro_001', 'astro_002'],
    calculator: {
      inputs: ['a', 'M'],
      output: 'T',
      formula: (a, M) => {
        const G = 6.67e-11;
        return 2 * Math.PI * Math.sqrt(a * a * a / (G * M));
      }
    }
  },
  {
    id: 'astro_004',
    name: '圆形轨道速度',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'v = √(GM/r)',
    latex: 'v = \\sqrt{\\frac{GM}{r}}',
    variables: [
      { name: 'v', description: '轨道速度', unit: 'm/s' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' },
      { name: 'r', description: '轨道半径', unit: 'm' }
    ],
    conditions: '圆形轨道',
    notes: '圆形轨道速度公式。轨道速度只与中心天体质量和轨道半径有关，与轨道天体质量无关',
    derivation: '由万有引力等于向心力：GMm/r² = mv²/r，得 v = √(GM/r)',
    related: ['high_phy_007', 'astro_005', 'astro_006'],
    calculator: {
      inputs: ['M', 'r'],
      output: 'v',
      formula: (M, r) => {
        const G = 6.67e-11;
        return Math.sqrt(G * M / r);
      }
    }
  },
  {
    id: 'astro_005',
    name: '椭圆轨道速度（一般形式）',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'v² = GM(2/r - 1/a)',
    latex: 'v^2 = GM\\left(\\frac{2}{r} - \\frac{1}{a}\\right)',
    variables: [
      { name: 'v', description: '轨道速度', unit: 'm/s' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' },
      { name: 'r', description: '当前距离', unit: 'm' },
      { name: 'a', description: '轨道半长轴', unit: 'm' }
    ],
    conditions: '椭圆轨道',
    notes: '活力公式（vis-viva equation），适用于任意圆锥曲线轨道。当r = a（圆形轨道）时，退化为v = √(GM/r)。在近日点(r = a(1-e))速度最大，在远日点(r = a(1+e))速度最小',
    derivation: '由轨道能量守恒和角动量守恒推导',
    related: ['astro_004', 'astro_006', 'astro_007'],
    calculator: {
      inputs: ['M', 'r', 'a'],
      output: 'v',
      formula: (M, r, a) => {
        const G = 6.67e-11;
        return Math.sqrt(G * M * (2 / r - 1 / a));
      }
    }
  },
  {
    id: 'astro_006',
    name: '逃逸速度',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'vₑ = √(2GM/r) = √2 · v₀',
    latex: 'v_e = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} \\cdot v_0',
    variables: [
      { name: 'vₑ', description: '逃逸速度', unit: 'm/s' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' },
      { name: 'r', description: '距离中心天体的距离', unit: 'm' },
      { name: 'v₀', description: '该距离处的圆形轨道速度', unit: 'm/s' }
    ],
    conditions: '从距离r处逃逸到无穷远',
    notes: '逃逸速度是使物体能够摆脱中心天体引力束缚的最小速度。等于该距离处圆形轨道速度的√2倍。当速度大于逃逸速度时，轨道为双曲线',
    derivation: '由能量守恒：动能 = 引力势能，即(1/2)mv² = GMm/r，得 v = √(2GM/r)',
    related: ['astro_004', 'astro_005', 'astro_007'],
    calculator: {
      inputs: ['M', 'r'],
      output: 'vₑ',
      formula: (M, r) => {
        const G = 6.67e-11;
        return Math.sqrt(2 * G * M / r);
      }
    }
  },
  {
    id: 'astro_007',
    name: '轨道总能量',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'E = -GMm/(2a) = (1/2)mv² - GMm/r',
    latex: 'E = -\\frac{GMm}{2a} = \\frac{1}{2}mv^2 - \\frac{GMm}{r}',
    variables: [
      { name: 'E', description: '轨道总能量（单位质量能量为ε = E/m）', unit: 'J' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' },
      { name: 'm', description: '轨道天体质量', unit: 'kg' },
      { name: 'a', description: '轨道半长轴', unit: 'm' },
      { name: 'v', description: '速度', unit: 'm/s' },
      { name: 'r', description: '距离', unit: 'm' }
    ],
    conditions: '闭合轨道（椭圆，圆形）',
    notes: '轨道总能量为负值，说明是束缚轨道。圆形轨道时a = r，E = -GMm/(2r)。能量仅取决于半长轴a，与偏心率e无关。当E = 0时为抛物线轨道，E > 0时为双曲线轨道',
    derivation: '由能量守恒：E = 动能 + 势能 = (1/2)mv² - GMm/r。结合活力公式可得 E = -GMm/(2a)',
    related: ['astro_005', 'astro_006', 'astro_008']
  },
  {
    id: 'astro_008',
    name: '比角动量（单位质量角动量）',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'h = r × v = r²(dθ/dt) = √(GMp) = √(GMa(1-e²))',
    latex: 'h = |\\mathbf{r} \\times \\mathbf{v}| = r^2\\frac{d\\theta}{dt} = \\sqrt{GMp} = \\sqrt{GMa(1-e^2)}',
    variables: [
      { name: 'h', description: '比角动量', unit: 'm²/s' },
      { name: 'r', description: '位置矢量', unit: 'm' },
      { name: 'v', description: '速度矢量', unit: 'm/s' },
      { name: 'θ', description: '极角', unit: 'rad' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' },
      { name: 'p', description: '半正焦弦（半通径）', unit: 'm' },
      { name: 'a', description: '轨道半长轴', unit: 'm' },
      { name: 'e', description: '偏心率', unit: '' }
    ],
    conditions: '任意轨道',
    notes: '比角动量h在中心力场中守恒。p = a(1-e²)为半正焦弦（半通径）。对于圆形轨道，e = 0，h = √(GMa)',
    derivation: '角动量守恒：L = mr × v = mh = 常数。由轨道几何关系可得 h = √(GMp)',
    related: ['astro_002', 'astro_003', 'astro_007']
  },
  {
    id: 'astro_009',
    name: '轨道偏心率',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'e = √(1 - (b²/a²)) = √(1 - (h²/(GMa)))',
    latex: 'e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{h^2}{GMa}}',
    variables: [
      { name: 'e', description: '偏心率', unit: '0 ≤ e < 1（椭圆）' },
      { name: 'a', description: '轨道半长轴', unit: 'm' },
      { name: 'b', description: '轨道半短轴', unit: 'm' },
      { name: 'h', description: '比角动量', unit: 'm²/s' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '中心天体质量', unit: 'kg' }
    ],
    conditions: '椭圆轨道：0 ≤ e < 1，圆形：e = 0，抛物线：e = 1，双曲线：e > 1',
    notes: '偏心率描述轨道的扁平程度。e = 0为圆形，e接近1为极扁椭圆。地球轨道e ≈ 0.0167，水星轨道e ≈ 0.206',
    derivation: '由椭圆几何关系：b² = a²(1-e²)，结合角动量公式可得',
    related: ['astro_001', 'astro_008']
  },
  {
    id: 'astro_010',
    name: '近日点和远日点距离',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'r_peri = a(1-e), r_apo = a(1+e)',
    latex: 'r_{\\text{peri}} = a(1-e), \\quad r_{\\text{apo}} = a(1+e)',
    variables: [
      { name: 'r_peri', description: '近日点距离', unit: 'm' },
      { name: 'r_apo', description: '远日点距离', unit: 'm' },
      { name: 'a', description: '轨道半长轴', unit: 'm' },
      { name: 'e', description: '偏心率', unit: '' }
    ],
    conditions: '椭圆轨道',
    notes: '近日点（periapsis）是轨道上距离中心最近的点，远日点（apoapsis）是距离最远的点。半长轴 a = (r_peri + r_apo)/2',
    derivation: '由椭圆极坐标方程 r = a(1-e²)/(1+e·cos f)，当f = 0时得近日点，f = π时得远日点',
    related: ['astro_001', 'astro_005', 'astro_009']
  },
  {
    id: 'astro_011',
    name: '视星等与绝对星等关系',
    category: '物理',
    subCategory: '天文学-观测',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'm - M = 5lg(d) - 5',
    latex: 'm - M = 5\\lg(d) - 5',
    variables: [
      { name: 'm', description: '视星等', unit: '等' },
      { name: 'M', description: '绝对星等', unit: '等' },
      { name: 'd', description: '距离', unit: 'pc（秒差距）' }
    ],
    conditions: 'd以秒差距(pc)为单位',
    notes: '距离模数公式。视星等m是观测到的亮度，绝对星等M是距离10 pc处的视星等。星等越小，亮度越大。每差5个星等，亮度差100倍',
    derivation: '由亮度与距离平方反比关系和对数定义推导',
    related: ['astro_012', 'astro_013'],
    calculator: {
      inputs: ['m', 'd'],
      output: 'M',
      formula: (m, d) => {
        return m - 5 * Math.log10(d) + 5;
      }
    }
  },
  {
    id: 'astro_012',
    name: '距离模数',
    category: '物理',
    subCategory: '天文学-观测',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'μ = m - M = 5lg(d/pc) - 5',
    latex: '\\mu = m - M = 5\\lg(d/\\text{pc}) - 5',
    variables: [
      { name: 'μ', description: '距离模数', unit: '等' },
      { name: 'm', description: '视星等', unit: '等' },
      { name: 'M', description: '绝对星等', unit: '等' },
      { name: 'd', description: '距离', unit: 'pc（秒差距）' }
    ],
    conditions: 'd以秒差距为单位',
    notes: '距离模数μ = m - M，用于通过视星等和绝对星等确定距离，或通过距离确定绝对星等',
    derivation: '由视星等与绝对星等关系式',
    related: ['astro_011', 'astro_013']
  },
  {
    id: 'astro_013',
    name: '视差与距离关系',
    category: '物理',
    subCategory: '天文学-观测',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'd = 1/π',
    latex: 'd = \\frac{1}{\\pi}',
    variables: [
      { name: 'd', description: '距离', unit: 'pc（秒差距）' },
      { name: 'π', description: '周年视差', unit: '角秒(arcsec)' }
    ],
    conditions: 'π以角秒为单位，d以秒差距为单位',
    notes: '当视差π = 1角秒时，距离d = 1秒差距(pc)。1 pc = 3.086×10¹⁶ m = 3.26 光年。这是测量恒星距离最基本的方法',
    derivation: '由三角视差定义：当基线为1 AU，视差角为1角秒时，距离定义为1秒差距',
    related: ['astro_011', 'astro_012'],
    calculator: {
      inputs: ['π'],
      output: 'd',
      formula: (pi) => {
        return 1 / pi;
      }
    }
  },
  {
    id: 'astro_014',
    name: '光度与亮度关系',
    category: '物理',
    subCategory: '天文学-观测',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'F = L/(4πd²)',
    latex: 'F = \\frac{L}{4\\pi d^2}',
    variables: [
      { name: 'F', description: '能流（观测到的亮度）', unit: 'W/m²' },
      { name: 'L', description: '光度（总辐射功率）', unit: 'W' },
      { name: 'd', description: '距离', unit: 'm' }
    ],
    conditions: '各向同性辐射',
    notes: '光度L是恒星的总辐射功率，能流F是单位面积接收到的功率。由于能量在球面上扩散，F与距离的平方成反比',
    derivation: '由能量守恒：总功率L在距离d处的球面(4πd²)上均匀分布，因此 F = L/(4πd²)',
    related: ['astro_011', 'astro_012']
  },
  {
    id: 'astro_015',
    name: '星等与亮度关系',
    category: '物理',
    subCategory: '天文学-观测',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'm₁ - m₂ = -2.5lg(F₁/F₂)',
    latex: 'm_1 - m_2 = -2.5\\lg\\left(\\frac{F_1}{F_2}\\right)',
    variables: [
      { name: 'm₁, m₂', description: '视星等', unit: '等' },
      { name: 'F₁, F₂', description: '能流（亮度）', unit: 'W/m²或任意单位' }
    ],
    conditions: '使用相同的观测波段',
    notes: '星等系统：星等每差5等，亮度差100倍（10²倍）。因此每差1等，亮度比约为2.512倍（100^(1/5)）。星等越小，亮度越大',
    derivation: '由星等定义：m = -2.5lg(F/F₀) + 常数，其中F₀为参考亮度',
    related: ['astro_011', 'astro_014']
  },
  {
    id: 'astro_016',
    name: '多普勒效应（径向速度）',
    category: '物理',
    subCategory: '天文学-观测',
    grade: '大学',
    tags: ['常用公式', '必背公式'],
    formula: 'v_r/c = (λ_obs - λ_rest)/λ_rest = z',
    latex: '\\frac{v_r}{c} = \\frac{\\lambda_{\\text{obs}} - \\lambda_{\\text{rest}}}{\\lambda_{\\text{rest}}} = z',
    variables: [
      { name: 'v_r', description: '径向速度（沿视线方向）', unit: 'm/s' },
      { name: 'c', description: '光速', unit: '3×10⁸ m/s' },
      { name: 'λ_obs', description: '观测到的波长', unit: 'm' },
      { name: 'λ_rest', description: '静止波长（实验室值）', unit: 'm' },
      { name: 'z', description: '红移（z > 0为红移，z < 0为蓝移）', unit: '' }
    ],
    conditions: '非相对论近似（v_r << c）',
    notes: '当v_r << c时，z ≈ v_r/c。当速度接近光速时，需要使用相对论多普勒效应：z = √((1+β)/(1-β)) - 1，其中β = v_r/c',
    derivation: '由多普勒效应：当源远离观测者时，波长变长（红移）；当源靠近时，波长变短（蓝移）',
    related: ['astro_017']
  },
  {
    id: 'astro_017',
    name: '相对论多普勒效应',
    category: '物理',
    subCategory: '天文学-观测',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'z = √((1+β)/(1-β)) - 1, 其中β = v_r/c',
    latex: 'z = \\sqrt{\\frac{1+\\beta}{1-\\beta}} - 1, \\quad \\text{其中}\\quad \\beta = \\frac{v_r}{c}',
    variables: [
      { name: 'z', description: '红移', unit: '' },
      { name: 'β', description: '速度与光速的比值', unit: '' },
      { name: 'v_r', description: '径向速度', unit: 'm/s' },
      { name: 'c', description: '光速', unit: '3×10⁸ m/s' }
    ],
    conditions: '任意速度',
    notes: '相对论多普勒效应的精确公式。当β << 1时，退化为z ≈ β = v_r/c。当β接近1时（接近光速），红移会非常大',
    derivation: '由狭义相对论推导，考虑时间膨胀和长度收缩',
    related: ['astro_016']
  },
  {
    id: 'astro_018',
    name: '哈勃定律',
    category: '物理',
    subCategory: '天文学-宇宙学',
    grade: '大学',
    tags: ['常用公式', '必背公式', '定律'],
    formula: 'v = H₀d',
    latex: 'v = H_0 d',
    variables: [
      { name: 'v', description: '退行速度', unit: 'km/s' },
      { name: 'H₀', description: '哈勃常数', unit: '约70 km/s/Mpc' },
      { name: 'd', description: '距离', unit: 'Mpc（百万秒差距）' }
    ],
    conditions: '大尺度上，宇宙均匀膨胀',
    notes: '哈勃定律表明宇宙正在膨胀，星系退行速度与距离成正比。H₀的当前最佳估计值约为70 km/s/Mpc。这导致宇宙学红移：z = H₀d/c（非相对论近似）',
    derivation: '由观测发现，基于多普勒效应和距离测量',
    related: ['astro_016', 'astro_017']
  },
  {
    id: 'astro_019',
    name: '史瓦西半径（黑洞视界）',
    category: '物理',
    subCategory: '天文学-相对论',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'R_s = 2GM/c²',
    latex: 'R_s = \\frac{2GM}{c^2}',
    variables: [
      { name: 'R_s', description: '史瓦西半径', unit: 'm' },
      { name: 'G', description: '万有引力常数', unit: '6.67×10⁻¹¹ N·m²/kg²' },
      { name: 'M', description: '质量', unit: 'kg' },
      { name: 'c', description: '光速', unit: '3×10⁸ m/s' }
    ],
    conditions: '非旋转、不带电的黑洞',
    notes: '史瓦西半径是黑洞的视界半径。当物体压缩到这个半径以内时，即使光也无法逃逸。太阳的史瓦西半径约3 km，地球的约9 mm',
    derivation: '由广义相对论的史瓦西度规推导，使逃逸速度等于光速',
    related: ['astro_006'],
    calculator: {
      inputs: ['M'],
      output: 'R_s',
      formula: (M) => {
        const G = 6.67e-11;
        const c = 3e8;
        return 2 * G * M / (c * c);
      }
    }
  },
  {
    id: 'astro_020',
    name: '洛希极限（潮汐瓦解半径）',
    category: '物理',
    subCategory: '天文学-天体力学',
    grade: '大学',
    tags: ['常用公式'],
    formula: 'd_Roche ≈ 2.456 R_p (ρ_p/ρ_s)^(1/3)',
    latex: 'd_{\\text{Roche}} \\approx 2.456 R_p \\left(\\frac{\\rho_p}{\\rho_s}\\right)^{1/3}',
    variables: [
      { name: 'd_Roche', description: '洛希极限', unit: 'm' },
      { name: 'R_p', description: '主星半径', unit: 'm' },
      { name: 'ρ_p', description: '主星密度', unit: 'kg/m³' },
      { name: 'ρ_s', description: '卫星密度', unit: 'kg/m³' }
    ],
    conditions: '刚体卫星，轨道周期远大于卫星自转周期',
    notes: '洛希极限是卫星能够稳定存在而不被主星潮汐力撕碎的最小距离。当卫星进入洛希极限内时，会被潮汐力瓦解。对于流体卫星，系数约为2.456；对于刚体，系数约为1.260',
    derivation: '由潮汐力与卫星自身引力平衡条件推导',
    related: ['astro_004']
  }
];

module.exports = formulas;

