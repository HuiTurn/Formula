// 工程公式数据
const formulas = [
  {
    "id": "eng_001",
    "name": "应力公式",
    "category": "工程",
    "subCategory": "材料力学",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "σ = F / A",
    "latex": "\\sigma = \\frac{F}{A}",
    "variables": [
      {
        "name": "σ",
        "description": "应力",
        "unit": "Pa (帕斯卡)"
      },
      {
        "name": "F",
        "description": "作用力",
        "unit": "N (牛顿)"
      },
      {
        "name": "A",
        "description": "横截面积",
        "unit": "m²"
      }
    ],
    "conditions": "A > 0",
    "notes": "单位面积上的作用力，用于分析材料的受力情况",
    "derivation": "材料力学定义",
    "related": [
      "eng_002"
    ],
    "calculator": {
      "inputs": [
        "F",
        "A"
      ],
      "output": "sigma"
    }
  },
  {
    "id": "eng_002",
    "name": "应变公式",
    "category": "工程",
    "subCategory": "材料力学",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ε = ΔL / L₀",
    "latex": "\\varepsilon = \\frac{\\Delta L}{L_0}",
    "variables": [
      {
        "name": "ε",
        "description": "应变",
        "unit": ""
      },
      {
        "name": "ΔL",
        "description": "长度变化量",
        "unit": "m"
      },
      {
        "name": "L₀",
        "description": "原始长度",
        "unit": "m"
      }
    ],
    "conditions": "L₀ > 0",
    "notes": "材料变形程度，无量纲",
    "derivation": "材料力学定义",
    "related": [
      "eng_001",
      "eng_003"
    ],
    "calculator": {
      "inputs": [
        "deltaL",
        "L0"
      ],
      "output": "epsilon"
    }
  },
  {
    "id": "eng_003",
    "name": "弹性模量（杨氏模量）",
    "category": "工程",
    "subCategory": "材料力学",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "E = σ / ε",
    "latex": "E = \\frac{\\sigma}{\\varepsilon}",
    "variables": [
      {
        "name": "E",
        "description": "弹性模量",
        "unit": "Pa"
      },
      {
        "name": "σ",
        "description": "应力",
        "unit": "Pa"
      },
      {
        "name": "ε",
        "description": "应变",
        "unit": ""
      }
    ],
    "conditions": "ε ≠ 0",
    "notes": "衡量材料抵抗弹性变形的能力，E越大材料越刚硬",
    "derivation": "胡克定律",
    "related": [
      "eng_001",
      "eng_002"
    ],
    "calculator": {
      "inputs": [
        "sigma",
        "epsilon"
      ],
      "output": "E"
    }
  },
  {
    "id": "eng_004",
    "name": "梁的弯曲应力",
    "category": "工程",
    "subCategory": "结构工程",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "σ = My / I",
    "latex": "\\sigma = \\frac{My}{I}",
    "variables": [
      {
        "name": "σ",
        "description": "弯曲应力",
        "unit": "Pa"
      },
      {
        "name": "M",
        "description": "弯矩",
        "unit": "N·m"
      },
      {
        "name": "y",
        "description": "距离中性轴的距离",
        "unit": "m"
      },
      {
        "name": "I",
        "description": "惯性矩",
        "unit": "m⁴"
      }
    ],
    "conditions": "I > 0",
    "notes": "用于计算梁在弯曲载荷下的应力分布",
    "derivation": "材料力学理论",
    "related": [
      "eng_001"
    ],
    "calculator": {
      "inputs": [
        "M",
        "y",
        "I"
      ],
      "output": "sigma"
    }
  },
  {
    "id": "eng_005",
    "name": "矩形截面惯性矩",
    "category": "工程",
    "subCategory": "结构工程",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "I = bh³ / 12",
    "latex": "I = \\frac{bh^3}{12}",
    "variables": [
      {
        "name": "I",
        "description": "惯性矩",
        "unit": "m⁴"
      },
      {
        "name": "b",
        "description": "截面宽度",
        "unit": "m"
      },
      {
        "name": "h",
        "description": "截面高度",
        "unit": "m"
      }
    ],
    "conditions": "b > 0, h > 0",
    "notes": "矩形截面绕中性轴的惯性矩",
    "derivation": "积分计算",
    "related": [
      "eng_004"
    ],
    "calculator": {
      "inputs": [
        "b",
        "h"
      ],
      "output": "I"
    }
  },
  {
    "id": "eng_006",
    "name": "圆形截面惯性矩",
    "category": "工程",
    "subCategory": "结构工程",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "I = πd⁴ / 64",
    "latex": "I = \\frac{\\pi d^4}{64}",
    "variables": [
      {
        "name": "I",
        "description": "惯性矩",
        "unit": "m⁴"
      },
      {
        "name": "d",
        "description": "直径",
        "unit": "m"
      }
    ],
    "conditions": "d > 0",
    "notes": "圆形截面绕中性轴的惯性矩",
    "derivation": "积分计算",
    "related": [
      "eng_004"
    ],
    "calculator": {
      "inputs": [
        "d"
      ],
      "output": "I"
    }
  },
  {
    "id": "eng_007",
    "name": "欧拉临界载荷",
    "category": "工程",
    "subCategory": "结构工程",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Pcr = π²EI / L²",
    "latex": "P_{cr} = \\frac{\\pi^2 EI}{L^2}",
    "variables": [
      {
        "name": "Pcr",
        "description": "临界载荷",
        "unit": "N"
      },
      {
        "name": "E",
        "description": "弹性模量",
        "unit": "Pa"
      },
      {
        "name": "I",
        "description": "惯性矩",
        "unit": "m⁴"
      },
      {
        "name": "L",
        "description": "柱的长度",
        "unit": "m"
      }
    ],
    "conditions": "L > 0, E > 0, I > 0",
    "notes": "细长柱发生屈曲的临界载荷，适用于两端铰接",
    "derivation": "弹性稳定性理论",
    "related": [
      "eng_003",
      "eng_004"
    ],
    "calculator": {
      "inputs": [
        "E",
        "I",
        "L"
      ],
      "output": "Pcr"
    }
  },
  {
    "id": "eng_008",
    "name": "伯努利方程",
    "category": "工程",
    "subCategory": "流体力学",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P + (1/2)ρv² + ρgh = 常数",
    "latex": "P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{常数}",
    "variables": [
      {
        "name": "P",
        "description": "压力",
        "unit": "Pa"
      },
      {
        "name": "ρ",
        "description": "流体密度",
        "unit": "kg/m³"
      },
      {
        "name": "v",
        "description": "流速",
        "unit": "m/s"
      },
      {
        "name": "g",
        "description": "重力加速度",
        "unit": "9.8 m/s²"
      },
      {
        "name": "h",
        "description": "高度",
        "unit": "m"
      }
    ],
    "conditions": "理想流体，定常流动",
    "notes": "描述理想流体在流动过程中能量守恒",
    "derivation": "流体力学理论",
    "related": [],
    "calculator": {
      "inputs": [
        "P1",
        "rho",
        "v1",
        "h1",
        "v2",
        "h2"
      ],
      "output": "P2"
    }
  },
  {
    "id": "eng_009",
    "name": "雷诺数",
    "category": "工程",
    "subCategory": "流体力学",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Re = ρvD / μ",
    "latex": "Re = \\frac{\\rho v D}{\\mu}",
    "variables": [
      {
        "name": "Re",
        "description": "雷诺数",
        "unit": ""
      },
      {
        "name": "ρ",
        "description": "流体密度",
        "unit": "kg/m³"
      },
      {
        "name": "v",
        "description": "流速",
        "unit": "m/s"
      },
      {
        "name": "D",
        "description": "特征长度（如管径）",
        "unit": "m"
      },
      {
        "name": "μ",
        "description": "动力粘度",
        "unit": "Pa·s"
      }
    ],
    "conditions": "μ > 0",
    "notes": "判断流动状态：Re < 2300为层流，Re > 4000为湍流",
    "derivation": "量纲分析",
    "related": [
      "eng_008"
    ],
    "calculator": {
      "inputs": [
        "rho",
        "v",
        "D",
        "mu"
      ],
      "output": "Re"
    }
  },
  {
    "id": "eng_010",
    "name": "传热速率（对流）",
    "category": "工程",
    "subCategory": "传热学",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "Q = hA(Ts - T∞)",
    "latex": "Q = hA(T_s - T_\\infty)",
    "variables": [
      {
        "name": "Q",
        "description": "传热速率",
        "unit": "W"
      },
      {
        "name": "h",
        "description": "对流传热系数",
        "unit": "W/(m²·K)"
      },
      {
        "name": "A",
        "description": "传热面积",
        "unit": "m²"
      },
      {
        "name": "Ts",
        "description": "表面温度",
        "unit": "K"
      },
      {
        "name": "T∞",
        "description": "流体温度",
        "unit": "K"
      }
    ],
    "conditions": "A > 0",
    "notes": "牛顿冷却定律，描述对流传热",
    "derivation": "传热学理论",
    "related": [],
    "calculator": {
      "inputs": [
        "h",
        "A",
        "Ts",
        "Tinf"
      ],
      "output": "Q"
    }
  },
  {
    "id": "eng_011",
    "name": "传热速率（传导）",
    "category": "工程",
    "subCategory": "传热学",
    "grade": "专业领域",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Q = kA(T₁ - T₂) / L",
    "latex": "Q = \\frac{kA(T_1 - T_2)}{L}",
    "variables": [
      {
        "name": "Q",
        "description": "传热速率",
        "unit": "W"
      },
      {
        "name": "k",
        "description": "热导率",
        "unit": "W/(m·K)"
      },
      {
        "name": "A",
        "description": "传热面积",
        "unit": "m²"
      },
      {
        "name": "T₁, T₂",
        "description": "两侧温度",
        "unit": "K"
      },
      {
        "name": "L",
        "description": "材料厚度",
        "unit": "m"
      }
    ],
    "conditions": "L > 0, A > 0",
    "notes": "傅里叶导热定律，描述热传导",
    "derivation": "传热学理论",
    "related": [
      "eng_010"
    ],
    "calculator": {
      "inputs": [
        "k",
        "A",
        "T1",
        "T2",
        "L"
      ],
      "output": "Q"
    }
  },
  {
    "id": "eng_013",
    "name": "效率公式",
    "category": "工程",
    "subCategory": "机械工程",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "η = (输出功率 / 输入功率) × 100%",
    "latex": "\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\%",
    "variables": [
      {
        "name": "η",
        "description": "效率",
        "unit": "%"
      },
      {
        "name": "Pout",
        "description": "输出功率",
        "unit": "W"
      },
      {
        "name": "Pin",
        "description": "输入功率",
        "unit": "W"
      }
    ],
    "conditions": "Pin > 0",
    "notes": "衡量能量转换效率，η ≤ 100%",
    "derivation": "工程定义",
    "related": [
      "middle_phy_006"
    ],
    "calculator": {
      "inputs": [
        "Pout",
        "Pin"
      ],
      "output": "eta"
    }
  },
  {
    "id": "eng_014",
    "name": "扭矩公式",
    "category": "工程",
    "subCategory": "机械工程",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "T = Fr",
    "latex": "T = Fr",
    "variables": [
      {
        "name": "T",
        "description": "扭矩",
        "unit": "N·m"
      },
      {
        "name": "F",
        "description": "切向力",
        "unit": "N"
      },
      {
        "name": "r",
        "description": "力臂（半径）",
        "unit": "m"
      }
    ],
    "conditions": "",
    "notes": "力对转轴的转动效应",
    "derivation": "力学定义",
    "related": [
      "middle_phy_006"
    ],
    "calculator": {
      "inputs": [
        "F",
        "r"
      ],
      "output": "T"
    }
  },
  {
    "id": "eng_015",
    "name": "齿轮传动比",
    "category": "工程",
    "subCategory": "机械工程",
    "grade": "专业领域",
    "tags": [
      "常用公式"
    ],
    "formula": "i = n₁ / n₂ = z₂ / z₁",
    "latex": "i = \\frac{n_1}{n_2} = \\frac{z_2}{z_1}",
    "variables": [
      {
        "name": "i",
        "description": "传动比",
        "unit": ""
      },
      {
        "name": "n₁, n₂",
        "description": "两齿轮转速",
        "unit": "rpm"
      },
      {
        "name": "z₁, z₂",
        "description": "两齿轮齿数",
        "unit": ""
      }
    ],
    "conditions": "n₂ ≠ 0, z₁ ≠ 0",
    "notes": "主动轮与从动轮的转速比或齿数反比",
    "derivation": "机械原理",
    "related": [],
    "calculator": {
      "inputs": [
        "z1",
        "z2"
      ],
      "output": "i"
    }
  }
];

module.exports = formulas;
