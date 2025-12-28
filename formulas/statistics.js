// 统计公式数据
const formulas = [
  {
    "id": "stat_001",
    "name": "平均值公式",
    "category": "统计",
    "subCategory": "描述统计",
    "grade": "高中",
    "tags": [
      "常用公式"
    ],
    "formula": "x̄ = (x₁ + x₂ + ... + xₙ) / n",
    "latex": "\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}",
    "variables": [
      {
        "name": "x̄",
        "description": "平均值",
        "unit": ""
      },
      {
        "name": "x₁, x₂, ..., xₙ",
        "description": "各个数据值",
        "unit": ""
      },
      {
        "name": "n",
        "description": "数据个数",
        "unit": ""
      }
    ],
    "conditions": "n > 0",
    "notes": "所有数据值的和除以数据个数",
    "derivation": "统计定义",
    "related": [],
    "calculator": {
      "inputs": [
        "values"
      ],
      "output": "mean"
    }
  },
  {
    "id": "stat_002",
    "name": "方差公式",
    "category": "统计",
    "subCategory": "描述统计",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "σ² = Σ(xᵢ - x̄)² / n",
    "latex": "\\sigma^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n}",
    "variables": [
      {
        "name": "σ²",
        "description": "方差",
        "unit": ""
      },
      {
        "name": "xᵢ",
        "description": "第i个数据值",
        "unit": ""
      },
      {
        "name": "x̄",
        "description": "平均值",
        "unit": ""
      },
      {
        "name": "n",
        "description": "数据个数",
        "unit": ""
      }
    ],
    "conditions": "n > 0",
    "notes": "衡量数据离散程度的指标，方差越大，数据越分散",
    "derivation": "统计定义",
    "related": [
      "stat_001",
      "stat_003"
    ],
    "calculator": {
      "inputs": [
        "values"
      ],
      "output": "variance"
    }
  },
  {
    "id": "stat_003",
    "name": "标准差公式",
    "category": "统计",
    "subCategory": "描述统计",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "σ = √(Σ(xᵢ - x̄)² / n)",
    "latex": "\\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n}}",
    "variables": [
      {
        "name": "σ",
        "description": "标准差",
        "unit": ""
      },
      {
        "name": "xᵢ",
        "description": "第i个数据值",
        "unit": ""
      },
      {
        "name": "x̄",
        "description": "平均值",
        "unit": ""
      },
      {
        "name": "n",
        "description": "数据个数",
        "unit": ""
      }
    ],
    "conditions": "n > 0",
    "notes": "方差的平方根，与原始数据单位相同",
    "derivation": "由方差公式推导",
    "related": [
      "stat_001",
      "stat_002"
    ],
    "calculator": {
      "inputs": [
        "values"
      ],
      "output": "stdDev"
    }
  },
  {
    "id": "stat_004",
    "name": "样本方差公式",
    "category": "统计",
    "subCategory": "描述统计",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "s² = Σ(xᵢ - x̄)² / (n-1)",
    "latex": "s^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}",
    "variables": [
      {
        "name": "s²",
        "description": "样本方差",
        "unit": ""
      },
      {
        "name": "xᵢ",
        "description": "第i个数据值",
        "unit": ""
      },
      {
        "name": "x̄",
        "description": "样本平均值",
        "unit": ""
      },
      {
        "name": "n",
        "description": "样本容量",
        "unit": ""
      }
    ],
    "conditions": "n > 1",
    "notes": "使用n-1作为分母，是无偏估计量",
    "derivation": "统计理论",
    "related": [
      "stat_002",
      "stat_005"
    ],
    "calculator": {
      "inputs": [
        "values"
      ],
      "output": "sampleVariance"
    }
  },
  {
    "id": "stat_005",
    "name": "样本标准差公式",
    "category": "统计",
    "subCategory": "描述统计",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "s = √(Σ(xᵢ - x̄)² / (n-1))",
    "latex": "s = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}}",
    "variables": [
      {
        "name": "s",
        "description": "样本标准差",
        "unit": ""
      },
      {
        "name": "xᵢ",
        "description": "第i个数据值",
        "unit": ""
      },
      {
        "name": "x̄",
        "description": "样本平均值",
        "unit": ""
      },
      {
        "name": "n",
        "description": "样本容量",
        "unit": ""
      }
    ],
    "conditions": "n > 1",
    "notes": "样本方差的平方根",
    "derivation": "由样本方差公式推导",
    "related": [
      "stat_003",
      "stat_004"
    ],
    "calculator": {
      "inputs": [
        "values"
      ],
      "output": "sampleStdDev"
    }
  },
  {
    "id": "stat_006",
    "name": "相关系数公式（皮尔逊）",
    "category": "统计",
    "subCategory": "相关分析",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "r = Σ(xᵢ-x̄)(yᵢ-ȳ) / √(Σ(xᵢ-x̄)²Σ(yᵢ-ȳ)²)",
    "latex": "r = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2\\sum(y_i-\\bar{y})^2}}",
    "variables": [
      {
        "name": "r",
        "description": "相关系数",
        "unit": ""
      },
      {
        "name": "xᵢ, yᵢ",
        "description": "第i对数据值",
        "unit": ""
      },
      {
        "name": "x̄, ȳ",
        "description": "x和y的平均值",
        "unit": ""
      }
    ],
    "conditions": "-1 ≤ r ≤ 1",
    "notes": "衡量两个变量线性相关程度的指标，r接近±1表示强相关，接近0表示弱相关",
    "derivation": "统计理论",
    "related": [
      "stat_001"
    ],
    "calculator": {
      "inputs": [
        "xValues",
        "yValues"
      ],
      "output": "correlation"
    }
  },
  {
    "id": "stat_007",
    "name": "线性回归方程",
    "category": "统计",
    "subCategory": "回归分析",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "y = a + bx, 其中 b = r(sᵧ/sₓ), a = ȳ - bx̄",
    "latex": "y = a + bx, \\quad b = r\\frac{s_y}{s_x}, \\quad a = \\bar{y} - b\\bar{x}",
    "variables": [
      {
        "name": "y",
        "description": "因变量",
        "unit": ""
      },
      {
        "name": "x",
        "description": "自变量",
        "unit": ""
      },
      {
        "name": "a",
        "description": "截距",
        "unit": ""
      },
      {
        "name": "b",
        "description": "斜率",
        "unit": ""
      },
      {
        "name": "r",
        "description": "相关系数",
        "unit": ""
      },
      {
        "name": "sₓ, sᵧ",
        "description": "x和y的标准差",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "用于预测因变量y与自变量x的线性关系",
    "derivation": "最小二乘法",
    "related": [
      "stat_006"
    ],
    "calculator": {
      "inputs": [
        "xValues",
        "yValues"
      ],
      "output": "regression"
    }
  },
  {
    "id": "stat_008",
    "name": "正态分布概率密度函数",
    "category": "统计",
    "subCategory": "概率分布",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "f(x) = (1/σ√(2π))e^(-(x-μ)²/(2σ²))",
    "latex": "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
    "variables": [
      {
        "name": "f(x)",
        "description": "概率密度函数",
        "unit": ""
      },
      {
        "name": "μ",
        "description": "均值",
        "unit": ""
      },
      {
        "name": "σ",
        "description": "标准差",
        "unit": ""
      },
      {
        "name": "x",
        "description": "随机变量值",
        "unit": ""
      }
    ],
    "conditions": "σ > 0",
    "notes": "描述正态分布的概率密度，钟形曲线",
    "derivation": "概率论",
    "related": [
      "stat_003"
    ],
    "calculator": {
      "inputs": [
        "x",
        "mu",
        "sigma"
      ],
      "output": "density"
    }
  },
  {
    "id": "stat_009",
    "name": "Z分数（标准化）",
    "category": "统计",
    "subCategory": "描述统计",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "z = (x - μ) / σ",
    "latex": "z = \\frac{x - \\mu}{\\sigma}",
    "variables": [
      {
        "name": "z",
        "description": "Z分数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "原始数据值",
        "unit": ""
      },
      {
        "name": "μ",
        "description": "均值",
        "unit": ""
      },
      {
        "name": "σ",
        "description": "标准差",
        "unit": ""
      }
    ],
    "conditions": "σ > 0",
    "notes": "将数据标准化为标准正态分布，z=0表示等于均值，z=±1表示距离均值1个标准差",
    "derivation": "统计定义",
    "related": [
      "stat_003",
      "stat_008"
    ],
    "calculator": {
      "inputs": [
        "x",
        "mu",
        "sigma"
      ],
      "output": "z"
    }
  },
  {
    "id": "stat_010",
    "name": "t检验统计量",
    "category": "统计",
    "subCategory": "假设检验",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "t = (x̄ - μ₀) / (s/√n)",
    "latex": "t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}",
    "variables": [
      {
        "name": "t",
        "description": "t统计量",
        "unit": ""
      },
      {
        "name": "x̄",
        "description": "样本均值",
        "unit": ""
      },
      {
        "name": "μ₀",
        "description": "假设的总体均值",
        "unit": ""
      },
      {
        "name": "s",
        "description": "样本标准差",
        "unit": ""
      },
      {
        "name": "n",
        "description": "样本容量",
        "unit": ""
      }
    ],
    "conditions": "n > 1, s > 0",
    "notes": "用于检验样本均值是否显著不同于假设的总体均值",
    "derivation": "统计理论",
    "related": [
      "stat_001",
      "stat_005"
    ],
    "calculator": {
      "inputs": [
        "xBar",
        "mu0",
        "s",
        "n"
      ],
      "output": "t"
    }
  }
];

module.exports = formulas;
