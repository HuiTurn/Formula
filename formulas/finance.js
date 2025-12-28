// 金融公式数据
const formulas = [
  {
    "id": "finance_001",
    "name": "复利终值公式",
    "category": "金融",
    "subCategory": "复利计算",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "FV = PV(1 + r)ⁿ",
    "latex": "FV = PV(1 + r)^n",
    "variables": [
      {
        "name": "FV",
        "description": "终值（未来值）",
        "unit": "元"
      },
      {
        "name": "PV",
        "description": "现值",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "利率（年化）",
        "unit": ""
      },
      {
        "name": "n",
        "description": "期数（年）",
        "unit": ""
      }
    ],
    "conditions": "r ≥ 0, n ≥ 0",
    "notes": "计算本金按复利增长后的未来价值",
    "derivation": "金融数学",
    "related": [
      "finance_002"
    ],
    "calculator": {
      "inputs": [
        "PV",
        "r",
        "n"
      ],
      "output": "FV"
    }
  },
  {
    "id": "finance_002",
    "name": "复利现值公式",
    "category": "金融",
    "subCategory": "复利计算",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "PV = FV / (1 + r)ⁿ",
    "latex": "PV = \\frac{FV}{(1 + r)^n}",
    "variables": [
      {
        "name": "PV",
        "description": "现值",
        "unit": "元"
      },
      {
        "name": "FV",
        "description": "终值（未来值）",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "利率（年化）",
        "unit": ""
      },
      {
        "name": "n",
        "description": "期数（年）",
        "unit": ""
      }
    ],
    "conditions": "r ≥ 0, n ≥ 0",
    "notes": "将未来价值折现到现在的价值",
    "derivation": "由复利终值公式推导",
    "related": [
      "finance_001"
    ],
    "calculator": {
      "inputs": [
        "FV",
        "r",
        "n"
      ],
      "output": "PV"
    }
  },
  {
    "id": "finance_003",
    "name": "普通年金终值",
    "category": "金融",
    "subCategory": "年金计算",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "FVA = A[(1+r)ⁿ - 1] / r",
    "latex": "FVA = A\\frac{(1+r)^n - 1}{r}",
    "variables": [
      {
        "name": "FVA",
        "description": "年金终值",
        "unit": "元"
      },
      {
        "name": "A",
        "description": "每期支付金额",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "利率（每期）",
        "unit": ""
      },
      {
        "name": "n",
        "description": "期数",
        "unit": ""
      }
    ],
    "conditions": "r > 0, n > 0",
    "notes": "每期期末等额支付的未来价值总和",
    "derivation": "等比数列求和",
    "related": [
      "finance_001",
      "finance_004"
    ],
    "calculator": {
      "inputs": [
        "A",
        "r",
        "n"
      ],
      "output": "FVA"
    }
  },
  {
    "id": "finance_004",
    "name": "普通年金现值",
    "category": "金融",
    "subCategory": "年金计算",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "PVA = A[1 - (1+r)⁻ⁿ] / r",
    "latex": "PVA = A\\frac{1 - (1+r)^{-n}}{r}",
    "variables": [
      {
        "name": "PVA",
        "description": "年金现值",
        "unit": "元"
      },
      {
        "name": "A",
        "description": "每期支付金额",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "利率（每期）",
        "unit": ""
      },
      {
        "name": "n",
        "description": "期数",
        "unit": ""
      }
    ],
    "conditions": "r > 0, n > 0",
    "notes": "每期期末等额支付的现值总和",
    "derivation": "等比数列求和",
    "related": [
      "finance_002",
      "finance_003"
    ],
    "calculator": {
      "inputs": [
        "A",
        "r",
        "n"
      ],
      "output": "PVA"
    }
  },
  {
    "id": "finance_005",
    "name": "先付年金终值",
    "category": "金融",
    "subCategory": "年金计算",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "FVA = A[(1+r)ⁿ - 1](1+r) / r",
    "latex": "FVA = A\\frac{(1+r)^n - 1}{r}(1+r)",
    "variables": [
      {
        "name": "FVA",
        "description": "年金终值",
        "unit": "元"
      },
      {
        "name": "A",
        "description": "每期支付金额",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "利率（每期）",
        "unit": ""
      },
      {
        "name": "n",
        "description": "期数",
        "unit": ""
      }
    ],
    "conditions": "r > 0, n > 0",
    "notes": "每期期初等额支付的未来价值总和",
    "derivation": "由普通年金终值推导",
    "related": [
      "finance_003"
    ],
    "calculator": {
      "inputs": [
        "A",
        "r",
        "n"
      ],
      "output": "FVA"
    }
  },
  {
    "id": "finance_006",
    "name": "先付年金现值",
    "category": "金融",
    "subCategory": "年金计算",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "PVA = A[1 - (1+r)⁻ⁿ](1+r) / r",
    "latex": "PVA = A\\frac{1 - (1+r)^{-n}}{r}(1+r)",
    "variables": [
      {
        "name": "PVA",
        "description": "年金现值",
        "unit": "元"
      },
      {
        "name": "A",
        "description": "每期支付金额",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "利率（每期）",
        "unit": ""
      },
      {
        "name": "n",
        "description": "期数",
        "unit": ""
      }
    ],
    "conditions": "r > 0, n > 0",
    "notes": "每期期初等额支付的现值总和",
    "derivation": "由普通年金现值推导",
    "related": [
      "finance_004"
    ],
    "calculator": {
      "inputs": [
        "A",
        "r",
        "n"
      ],
      "output": "PVA"
    }
  },
  {
    "id": "finance_007",
    "name": "投资回报率（ROI）",
    "category": "金融",
    "subCategory": "投资分析",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ROI = (收益 - 成本) / 成本 × 100%",
    "latex": "ROI = \\frac{\\text{收益} - \\text{成本}}{\\text{成本}} \\times 100\\%",
    "variables": [
      {
        "name": "ROI",
        "description": "投资回报率",
        "unit": "%"
      },
      {
        "name": "收益",
        "description": "投资获得的收益",
        "unit": "元"
      },
      {
        "name": "成本",
        "description": "投资成本",
        "unit": "元"
      }
    ],
    "conditions": "成本 > 0",
    "notes": "衡量投资效率的指标，ROI越高表示投资效益越好",
    "derivation": "金融定义",
    "related": [
      "finance_008"
    ],
    "calculator": {
      "inputs": [
        "profit",
        "cost"
      ],
      "output": "ROI"
    }
  },
  {
    "id": "finance_008",
    "name": "年化收益率",
    "category": "金融",
    "subCategory": "投资分析",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "年化收益率 = [(终值/现值)^(1/n) - 1] × 100%",
    "latex": "\\text{年化收益率} = \\left[\\left(\\frac{FV}{PV}\\right)^{1/n} - 1\\right] \\times 100\\%",
    "variables": [
      {
        "name": "FV",
        "description": "终值",
        "unit": "元"
      },
      {
        "name": "PV",
        "description": "现值",
        "unit": "元"
      },
      {
        "name": "n",
        "description": "投资年数",
        "unit": "年"
      }
    ],
    "conditions": "PV > 0, n > 0",
    "notes": "将多期投资收益率转换为年化收益率，便于比较",
    "derivation": "由复利公式推导",
    "related": [
      "finance_001",
      "finance_007"
    ],
    "calculator": {
      "inputs": [
        "FV",
        "PV",
        "n"
      ],
      "output": "annualReturn"
    }
  },
  {
    "id": "finance_009",
    "name": "债券价格公式",
    "category": "金融",
    "subCategory": "债券定价",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P = Σ[C/(1+r)ᵗ] + F/(1+r)ⁿ",
    "latex": "P = \\sum_{t=1}^{n}\\frac{C}{(1+r)^t} + \\frac{F}{(1+r)^n}",
    "variables": [
      {
        "name": "P",
        "description": "债券价格",
        "unit": "元"
      },
      {
        "name": "C",
        "description": "每期利息（票息）",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "市场利率（折现率）",
        "unit": ""
      },
      {
        "name": "F",
        "description": "面值（本金）",
        "unit": "元"
      },
      {
        "name": "n",
        "description": "到期期数",
        "unit": ""
      }
    ],
    "conditions": "r > 0, n > 0",
    "notes": "债券价格等于未来现金流（利息和本金）的现值之和",
    "derivation": "现值理论",
    "related": [
      "finance_002",
      "finance_004"
    ],
    "calculator": {
      "inputs": [
        "C",
        "r",
        "F",
        "n"
      ],
      "output": "P"
    }
  },
  {
    "id": "finance_010",
    "name": "债券到期收益率（YTM）",
    "category": "金融",
    "subCategory": "债券定价",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "P = Σ[C/(1+YTM)ᵗ] + F/(1+YTM)ⁿ",
    "latex": "P = \\sum_{t=1}^{n}\\frac{C}{(1+YTM)^t} + \\frac{F}{(1+YTM)^n}",
    "variables": [
      {
        "name": "YTM",
        "description": "到期收益率",
        "unit": ""
      },
      {
        "name": "P",
        "description": "债券当前价格",
        "unit": "元"
      },
      {
        "name": "C",
        "description": "每期利息",
        "unit": "元"
      },
      {
        "name": "F",
        "description": "面值",
        "unit": "元"
      },
      {
        "name": "n",
        "description": "到期期数",
        "unit": ""
      }
    ],
    "conditions": "P > 0, n > 0",
    "notes": "使债券价格等于未来现金流现值的折现率，需用迭代法求解",
    "derivation": "由债券价格公式推导",
    "related": [
      "finance_009"
    ],
    "calculator": {
      "inputs": [
        "P",
        "C",
        "F",
        "n"
      ],
      "output": "YTM"
    }
  },
  {
    "id": "finance_011",
    "name": "净现值（NPV）",
    "category": "金融",
    "subCategory": "投资分析",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "NPV = Σ[CFₜ/(1+r)ᵗ] - I₀",
    "latex": "NPV = \\sum_{t=0}^{n}\\frac{CF_t}{(1+r)^t} - I_0",
    "variables": [
      {
        "name": "NPV",
        "description": "净现值",
        "unit": "元"
      },
      {
        "name": "CFₜ",
        "description": "第t期现金流",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "折现率",
        "unit": ""
      },
      {
        "name": "I₀",
        "description": "初始投资",
        "unit": "元"
      },
      {
        "name": "n",
        "description": "期数",
        "unit": ""
      }
    ],
    "conditions": "r > 0",
    "notes": "项目投资决策指标，NPV > 0表示项目可行",
    "derivation": "现值理论",
    "related": [
      "finance_002"
    ],
    "calculator": {
      "inputs": [
        "cashFlows",
        "r",
        "I0"
      ],
      "output": "NPV"
    }
  },
  {
    "id": "finance_012",
    "name": "内部收益率（IRR）",
    "category": "金融",
    "subCategory": "投资分析",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "NPV = 0 = Σ[CFₜ/(1+IRR)ᵗ] - I₀",
    "latex": "NPV = 0 = \\sum_{t=0}^{n}\\frac{CF_t}{(1+IRR)^t} - I_0",
    "variables": [
      {
        "name": "IRR",
        "description": "内部收益率",
        "unit": ""
      },
      {
        "name": "CFₜ",
        "description": "第t期现金流",
        "unit": "元"
      },
      {
        "name": "I₀",
        "description": "初始投资",
        "unit": "元"
      },
      {
        "name": "n",
        "description": "期数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "使NPV=0的折现率，需用迭代法求解，IRR > 折现率表示项目可行",
    "derivation": "由NPV公式推导",
    "related": [
      "finance_011"
    ],
    "calculator": {
      "inputs": [
        "cashFlows",
        "I0"
      ],
      "output": "IRR"
    }
  },
  {
    "id": "finance_013",
    "name": "72法则",
    "category": "金融",
    "subCategory": "复利计算",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "翻倍时间 ≈ 72 / 年化收益率(%)",
    "latex": "\\text{翻倍时间} \\approx \\frac{72}{\\text{年化收益率}(\\%)}",
    "variables": [
      {
        "name": "年化收益率",
        "description": "年化收益率",
        "unit": "%"
      }
    ],
    "conditions": "收益率 > 0",
    "notes": "快速估算投资翻倍所需年数的经验法则",
    "derivation": "经验公式",
    "related": [
      "finance_001"
    ],
    "calculator": {
      "inputs": [
        "rate"
      ],
      "output": "doublingTime"
    }
  },
  {
    "id": "finance_014",
    "name": "贷款月供（等额本息）",
    "category": "金融",
    "subCategory": "贷款计算",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "M = P[r(1+r)ⁿ] / [(1+r)ⁿ - 1]",
    "latex": "M = P\\frac{r(1+r)^n}{(1+r)^n - 1}",
    "variables": [
      {
        "name": "M",
        "description": "月供",
        "unit": "元"
      },
      {
        "name": "P",
        "description": "贷款本金",
        "unit": "元"
      },
      {
        "name": "r",
        "description": "月利率",
        "unit": ""
      },
      {
        "name": "n",
        "description": "还款月数",
        "unit": "月"
      }
    ],
    "conditions": "r > 0, n > 0",
    "notes": "每月还款金额相同，包含本金和利息",
    "derivation": "年金现值公式",
    "related": [
      "finance_004"
    ],
    "calculator": {
      "inputs": [
        "P",
        "r",
        "n"
      ],
      "output": "M"
    }
  },
  {
    "id": "finance_015",
    "name": "贷款月供（等额本金）",
    "category": "金融",
    "subCategory": "贷款计算",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "Mₜ = P/n + P(1 - (t-1)/n)r",
    "latex": "M_t = \\frac{P}{n} + P\\left(1 - \\frac{t-1}{n}\\right)r",
    "variables": [
      {
        "name": "Mₜ",
        "description": "第t期月供",
        "unit": "元"
      },
      {
        "name": "P",
        "description": "贷款本金",
        "unit": "元"
      },
      {
        "name": "n",
        "description": "还款月数",
        "unit": "月"
      },
      {
        "name": "r",
        "description": "月利率",
        "unit": ""
      },
      {
        "name": "t",
        "description": "期数",
        "unit": ""
      }
    ],
    "conditions": "r > 0, n > 0, 1 ≤ t ≤ n",
    "notes": "每月还款本金相同，利息递减，总还款额少于等额本息",
    "derivation": "贷款计算原理",
    "related": [
      "finance_014"
    ],
    "calculator": {
      "inputs": [
        "P",
        "n",
        "r",
        "t"
      ],
      "output": "Mt"
    }
  },
  {
    "id": "finance_016",
    "name": "有效年利率（EAR）",
    "category": "金融",
    "subCategory": "利率计算",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "EAR = (1 + r/m)ᵐ - 1",
    "latex": "EAR = \\left(1 + \\frac{r}{m}\\right)^m - 1",
    "variables": [
      {
        "name": "EAR",
        "description": "有效年利率",
        "unit": ""
      },
      {
        "name": "r",
        "description": "名义年利率",
        "unit": ""
      },
      {
        "name": "m",
        "description": "复利次数（每年）",
        "unit": ""
      }
    ],
    "conditions": "m > 0",
    "notes": "考虑复利频率后的实际年利率，m越大EAR越高",
    "derivation": "复利计算",
    "related": [
      "finance_001"
    ],
    "calculator": {
      "inputs": [
        "r",
        "m"
      ],
      "output": "EAR"
    }
  },
  {
    "id": "finance_017",
    "name": "股票市盈率（P/E）",
    "category": "金融",
    "subCategory": "股票分析",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "P/E = 股价 / 每股收益",
    "latex": "P/E = \\frac{\\text{股价}}{\\text{每股收益}}",
    "variables": [
      {
        "name": "P/E",
        "description": "市盈率",
        "unit": ""
      },
      {
        "name": "股价",
        "description": "股票价格",
        "unit": "元"
      },
      {
        "name": "每股收益",
        "description": "每股收益（EPS）",
        "unit": "元"
      }
    ],
    "conditions": "每股收益 > 0",
    "notes": "衡量股票估值水平，P/E越低可能表示股票被低估",
    "derivation": "金融定义",
    "related": [],
    "calculator": {
      "inputs": [
        "price",
        "eps"
      ],
      "output": "PE"
    }
  },
  {
    "id": "finance_018",
    "name": "股票市净率（P/B）",
    "category": "金融",
    "subCategory": "股票分析",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "P/B = 股价 / 每股净资产",
    "latex": "P/B = \\frac{\\text{股价}}{\\text{每股净资产}}",
    "variables": [
      {
        "name": "P/B",
        "description": "市净率",
        "unit": ""
      },
      {
        "name": "股价",
        "description": "股票价格",
        "unit": "元"
      },
      {
        "name": "每股净资产",
        "description": "每股净资产（BVPS）",
        "unit": "元"
      }
    ],
    "conditions": "每股净资产 > 0",
    "notes": "衡量股票相对账面价值的估值水平",
    "derivation": "金融定义",
    "related": [
      "finance_017"
    ],
    "calculator": {
      "inputs": [
        "price",
        "bvps"
      ],
      "output": "PB"
    }
  }
];

module.exports = formulas;
