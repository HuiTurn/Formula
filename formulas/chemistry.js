// 化学公式数据
const formulas = [
  {
    "id": "chemistry_001",
    "name": "理想气体状态方程",
    "category": "化学",
    "subCategory": "物理化学",
    "grade": [
      "高中",
      "大学"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "PV = nRT",
    "latex": "PV = nRT",
    "variables": [
      {
        "name": "P",
        "description": "气体压强",
        "unit": "Pa (帕斯卡)"
      },
      {
        "name": "V",
        "description": "气体体积",
        "unit": "m³ (立方米)"
      },
      {
        "name": "n",
        "description": "物质的量",
        "unit": "mol (摩尔)"
      },
      {
        "name": "R",
        "description": "理想气体常数",
        "unit": "8.314 J/(mol·K)"
      },
      {
        "name": "T",
        "description": "绝对温度",
        "unit": "K (开尔文)"
      }
    ],
    "conditions": "适用于理想气体，高温低压条件",
    "notes": "R 的值约为 8.314 J/(mol·K)",
    "derivation": "由波义耳定律、查理定律和阿伏伽德罗定律综合得出",
    "related": [],
    "calculator": {
      "inputs": [
        "n",
        "T",
        "V"
      ],
      "output": "P"
    }
  },
  {
    "id": "middle_chem_001",
    "name": "质量守恒定律",
    "category": "化学",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "反应前各物质质量总和 = 反应后各物质质量总和",
    "latex": "\\sum m_{\\text{反应前}} = \\sum m_{\\text{反应后}}",
    "variables": [
      {
        "name": "m",
        "description": "物质质量",
        "unit": "g (克)"
      }
    ],
    "conditions": "化学反应",
    "notes": "在化学反应中，参加反应的各物质的质量总和等于反应后生成的各物质的质量总和",
    "derivation": "质量守恒定律",
    "related": [
      "middle_chem_002"
    ],
    "calculator": {
      "inputs": [
        "m_reactants"
      ],
      "output": "m_products"
    }
  },
  {
    "id": "middle_chem_002",
    "name": "相对分子质量",
    "category": "化学",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Mr = 各原子相对原子质量之和",
    "latex": "M_r = \\sum M_{\\text{原子}}",
    "variables": [
      {
        "name": "Mr",
        "description": "相对分子质量",
        "unit": ""
      },
      {
        "name": "M原子",
        "description": "相对原子质量",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "相对分子质量等于组成分子的各原子的相对原子质量之和",
    "derivation": "相对分子质量定义",
    "related": [
      "middle_chem_003"
    ],
    "calculator": {
      "inputs": [
        "atomicMasses"
      ],
      "output": "Mr"
    }
  },
  {
    "id": "middle_chem_003",
    "name": "质量分数",
    "category": "化学",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ω = (m质/m液) × 100%",
    "latex": "\\omega = \\frac{m_{\\text{质}}}{m_{\\text{液}}} \\times 100\\%",
    "variables": [
      {
        "name": "ω",
        "description": "质量分数",
        "unit": "% (百分比)"
      },
      {
        "name": "m质",
        "description": "溶质质量",
        "unit": "g (克)"
      },
      {
        "name": "m液",
        "description": "溶液质量",
        "unit": "g (克)"
      }
    ],
    "conditions": "m液 > 0",
    "notes": "溶质的质量分数等于溶质质量除以溶液质量再乘以100%",
    "derivation": "质量分数定义",
    "related": [
      "high_chem_001"
    ],
    "calculator": {
      "inputs": [
        "m_solute",
        "m_solution"
      ],
      "output": "omega"
    }
  },
  {
    "id": "middle_chem_005",
    "name": "溶质质量",
    "category": "化学",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "m质 = m液 × ω",
    "latex": "m_{\\text{质}} = m_{\\text{液}} \\times \\omega",
    "variables": [
      {
        "name": "m质",
        "description": "溶质质量",
        "unit": "g (克)"
      },
      {
        "name": "m液",
        "description": "溶液质量",
        "unit": "g (克)"
      },
      {
        "name": "ω",
        "description": "质量分数",
        "unit": "% (百分比)"
      }
    ],
    "conditions": "",
    "notes": "溶质质量等于溶液质量乘以质量分数",
    "derivation": "由质量分数公式推导",
    "related": [
      "middle_chem_003"
    ],
    "calculator": {
      "inputs": [
        "m_solution",
        "omega"
      ],
      "output": "m_solute"
    }
  },
  {
    "id": "middle_chem_006",
    "name": "溶液质量",
    "category": "化学",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "m液 = m质 + m剂",
    "latex": "m_{\\text{液}} = m_{\\text{质}} + m_{\\text{剂}}",
    "variables": [
      {
        "name": "m液",
        "description": "溶液质量",
        "unit": "g (克)"
      },
      {
        "name": "m质",
        "description": "溶质质量",
        "unit": "g (克)"
      },
      {
        "name": "m剂",
        "description": "溶剂质量",
        "unit": "g (克)"
      }
    ],
    "conditions": "",
    "notes": "溶液质量等于溶质质量加上溶剂质量",
    "derivation": "溶液定义",
    "related": [
      "middle_chem_003",
      "middle_chem_005"
    ],
    "calculator": {
      "inputs": [
        "m_solute",
        "m_solvent"
      ],
      "output": "m_solution"
    }
  },
  {
    "id": "middle_chem_007",
    "name": "化学方程式配平",
    "category": "化学",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "根据质量守恒定律配平",
    "latex": "\\text{反应物} \\rightarrow \\text{生成物}",
    "variables": [
      {
        "name": "系数",
        "description": "化学计量数",
        "unit": ""
      }
    ],
    "conditions": "化学反应",
    "notes": "根据质量守恒定律，反应前后各元素的原子个数相等，确定化学计量数",
    "derivation": "质量守恒定律",
    "related": [
      "middle_chem_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "balanced"
    }
  },
  {
    "id": "middle_chem_008",
    "name": "原子个数比",
    "category": "化学",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式"
    ],
    "formula": "原子个数比 = 化学式中各元素右下角数字之比",
    "latex": "\\text{原子个数比} = \\text{化学式下标比}",
    "variables": [
      {
        "name": "n",
        "description": "原子个数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "化合物中各元素的原子个数比等于化学式中各元素右下角数字之比",
    "derivation": "化学式定义",
    "related": [
      "middle_chem_002"
    ],
    "calculator": {
      "inputs": [
        "formula"
      ],
      "output": "ratio"
    }
  },
  {
    "id": "high_chem_001",
    "name": "物质的量",
    "category": "化学",
    "subCategory": "基础",
    "grade": [
      "初中",
      "高中"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "n = m/M = N/NA = V/Vm",
    "latex": "n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{V_m}",
    "variables": [
      {
        "name": "n",
        "description": "物质的量",
        "unit": "mol"
      },
      {
        "name": "m",
        "description": "质量",
        "unit": "g"
      },
      {
        "name": "M",
        "description": "摩尔质量",
        "unit": "g/mol"
      },
      {
        "name": "N",
        "description": "粒子数",
        "unit": ""
      },
      {
        "name": "NA",
        "description": "阿伏伽德罗常数",
        "unit": "6.02×10²³ mol⁻¹"
      },
      {
        "name": "V",
        "description": "气体体积",
        "unit": "L"
      },
      {
        "name": "Vm",
        "description": "气体摩尔体积",
        "unit": "22.4 L/mol (标准状况)"
      }
    ],
    "conditions": "标准状况下，Vm = 22.4 L/mol",
    "notes": "物质的量是联系宏观和微观的桥梁",
    "derivation": "物质的量定义",
    "related": [
      "high_chem_001",
      "high_chem_002"
    ],
    "calculator": {
      "inputs": [
        "m",
        "M"
      ],
      "output": "n"
    }
  },
  {
    "id": "high_chem_002",
    "name": "物质的量浓度",
    "category": "化学",
    "subCategory": "基础",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "c = n/V",
    "latex": "c = \\frac{n}{V}",
    "variables": [
      {
        "name": "c",
        "description": "物质的量浓度",
        "unit": "mol/L"
      },
      {
        "name": "n",
        "description": "物质的量",
        "unit": "mol"
      },
      {
        "name": "V",
        "description": "溶液体积",
        "unit": "L"
      }
    ],
    "conditions": "V > 0",
    "notes": "物质的量浓度等于溶质的物质的量除以溶液体积",
    "derivation": "物质的量浓度定义",
    "related": [
      "high_chem_001"
    ],
    "calculator": {
      "inputs": [
        "n",
        "V"
      ],
      "output": "c"
    }
  },
  {
    "id": "high_chem_003",
    "name": "质量分数与物质的量浓度换算",
    "category": "化学",
    "subCategory": "基础",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "c = 1000ρω/M",
    "latex": "c = \\frac{1000\\rho\\omega}{M}",
    "variables": [
      {
        "name": "c",
        "description": "物质的量浓度",
        "unit": "mol/L"
      },
      {
        "name": "ρ",
        "description": "溶液密度",
        "unit": "g/mL"
      },
      {
        "name": "ω",
        "description": "质量分数",
        "unit": "%"
      },
      {
        "name": "M",
        "description": "摩尔质量",
        "unit": "g/mol"
      }
    ],
    "conditions": "",
    "notes": "质量分数与物质的量浓度的换算关系",
    "derivation": "由质量分数和物质的量浓度定义推导",
    "related": [
      "high_chem_002",
      "middle_chem_003"
    ],
    "calculator": {
      "inputs": [
        "rho",
        "omega",
        "M"
      ],
      "output": "c"
    }
  },
  {
    "id": "high_chem_004",
    "name": "化学反应速率",
    "category": "化学",
    "subCategory": "化学反应",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "v = Δc/Δt",
    "latex": "v = \\frac{\\Delta c}{\\Delta t}",
    "variables": [
      {
        "name": "v",
        "description": "反应速率",
        "unit": "mol/(L·s)"
      },
      {
        "name": "Δc",
        "description": "浓度变化量",
        "unit": "mol/L"
      },
      {
        "name": "Δt",
        "description": "时间变化量",
        "unit": "s"
      }
    ],
    "conditions": "Δt > 0",
    "notes": "化学反应速率等于单位时间内反应物或生成物浓度的变化量",
    "derivation": "反应速率定义",
    "related": [
      "high_chem_005"
    ],
    "calculator": {
      "inputs": [
        "deltaC",
        "deltaT"
      ],
      "output": "v"
    }
  },
  {
    "id": "high_chem_005",
    "name": "化学平衡常数",
    "category": "化学",
    "subCategory": "化学反应",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "K = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ",
    "latex": "K = \\frac{[C]^c[D]^d}{[A]^a[B]^b}",
    "variables": [
      {
        "name": "K",
        "description": "平衡常数",
        "unit": ""
      },
      {
        "name": "[A], [B]",
        "description": "反应物平衡浓度",
        "unit": "mol/L"
      },
      {
        "name": "[C], [D]",
        "description": "生成物平衡浓度",
        "unit": "mol/L"
      },
      {
        "name": "a, b, c, d",
        "description": "化学计量数",
        "unit": ""
      }
    ],
    "conditions": "可逆反应达到平衡",
    "notes": "平衡常数等于生成物浓度幂的乘积除以反应物浓度幂的乘积",
    "derivation": "化学平衡定律",
    "related": [
      "high_chem_004"
    ],
    "calculator": {
      "inputs": [
        "C",
        "c",
        "D",
        "d",
        "A",
        "a",
        "B",
        "b"
      ],
      "output": "K"
    }
  },
  {
    "id": "high_chem_006",
    "name": "电离平衡常数",
    "category": "化学",
    "subCategory": "化学反应",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Ka = [H⁺][A⁻] / [HA]",
    "latex": "K_a = \\frac{[H^+][A^-]}{[HA]}",
    "variables": [
      {
        "name": "Ka",
        "description": "酸的电离平衡常数",
        "unit": ""
      },
      {
        "name": "[H⁺]",
        "description": "氢离子浓度",
        "unit": "mol/L"
      },
      {
        "name": "[A⁻]",
        "description": "酸根离子浓度",
        "unit": "mol/L"
      },
      {
        "name": "[HA]",
        "description": "弱酸分子浓度",
        "unit": "mol/L"
      }
    ],
    "conditions": "弱酸电离平衡",
    "notes": "弱酸的电离平衡常数，Ka越大，酸性越强",
    "derivation": "由化学平衡常数推导",
    "related": [
      "high_chem_005",
      "high_chem_007"
    ],
    "calculator": {
      "inputs": [
        "H",
        "A",
        "HA"
      ],
      "output": "Ka"
    }
  },
  {
    "id": "high_chem_007",
    "name": "pH值",
    "category": "化学",
    "subCategory": "化学反应",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "pH = -lg[H⁺]",
    "latex": "\\text{pH} = -\\lg[H^+]",
    "variables": [
      {
        "name": "pH",
        "description": "pH值",
        "unit": ""
      },
      {
        "name": "[H⁺]",
        "description": "氢离子浓度",
        "unit": "mol/L"
      }
    ],
    "conditions": "[H⁺] > 0",
    "notes": "pH值等于氢离子浓度的负对数，pH < 7为酸性，pH > 7为碱性，pH = 7为中性",
    "derivation": "pH定义",
    "related": [
      "high_chem_006"
    ],
    "calculator": {
      "inputs": [
        "H"
      ],
      "output": "pH"
    }
  },
  {
    "id": "high_chem_008",
    "name": "pOH值",
    "category": "化学",
    "subCategory": "化学反应",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "pOH = -lg[OH⁻]",
    "latex": "\\text{pOH} = -\\lg[OH^-]",
    "variables": [
      {
        "name": "pOH",
        "description": "pOH值",
        "unit": ""
      },
      {
        "name": "[OH⁻]",
        "description": "氢氧根离子浓度",
        "unit": "mol/L"
      }
    ],
    "conditions": "[OH⁻] > 0",
    "notes": "pOH值等于氢氧根离子浓度的负对数，pH + pOH = 14",
    "derivation": "pOH定义",
    "related": [
      "high_chem_007"
    ],
    "calculator": {
      "inputs": [
        "OH"
      ],
      "output": "pOH"
    }
  },
  {
    "id": "high_chem_009",
    "name": "水的离子积",
    "category": "化学",
    "subCategory": "化学反应",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Kw = [H⁺][OH⁻] = 1.0×10⁻¹⁴",
    "latex": "K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}",
    "variables": [
      {
        "name": "Kw",
        "description": "水的离子积常数",
        "unit": ""
      },
      {
        "name": "[H⁺]",
        "description": "氢离子浓度",
        "unit": "mol/L"
      },
      {
        "name": "[OH⁻]",
        "description": "氢氧根离子浓度",
        "unit": "mol/L"
      }
    ],
    "conditions": "25℃",
    "notes": "在25℃时，水的离子积常数为1.0×10⁻¹⁴，pH + pOH = 14",
    "derivation": "由水的电离平衡推导",
    "related": [
      "high_chem_007",
      "high_chem_008"
    ],
    "calculator": {
      "inputs": [
        "H"
      ],
      "output": "OH"
    }
  },
  {
    "id": "high_chem_010",
    "name": "原电池电动势",
    "category": "化学",
    "subCategory": "电化学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "E = E⁺ - E⁻",
    "latex": "E = E^+ - E^-",
    "variables": [
      {
        "name": "E",
        "description": "电池电动势",
        "unit": "V"
      },
      {
        "name": "E⁺",
        "description": "正极电极电势",
        "unit": "V"
      },
      {
        "name": "E⁻",
        "description": "负极电极电势",
        "unit": "V"
      }
    ],
    "conditions": "",
    "notes": "原电池电动势等于正极电极电势减去负极电极电势",
    "derivation": "原电池原理",
    "related": [
      "high_chem_011"
    ],
    "calculator": {
      "inputs": [
        "E_plus",
        "E_minus"
      ],
      "output": "E"
    }
  },
  {
    "id": "high_chem_011",
    "name": "能斯特方程",
    "category": "化学",
    "subCategory": "电化学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "E = E° - (RT/nF)ln Q",
    "latex": "E = E^\\circ - \\frac{RT}{nF}\\ln Q",
    "variables": [
      {
        "name": "E",
        "description": "电极电势",
        "unit": "V"
      },
      {
        "name": "E°",
        "description": "标准电极电势",
        "unit": "V"
      },
      {
        "name": "R",
        "description": "气体常数",
        "unit": "8.314 J/(mol·K)"
      },
      {
        "name": "T",
        "description": "温度",
        "unit": "K"
      },
      {
        "name": "n",
        "description": "电子转移数",
        "unit": ""
      },
      {
        "name": "F",
        "description": "法拉第常数",
        "unit": "96485 C/mol"
      },
      {
        "name": "Q",
        "description": "反应商",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "能斯特方程描述了电极电势与浓度、温度的关系",
    "derivation": "由热力学和电化学原理推导",
    "related": [
      "high_chem_010"
    ],
    "calculator": {
      "inputs": [
        "E0",
        "T",
        "n",
        "Q"
      ],
      "output": "E"
    }
  },
  {
    "id": "high_chem_012",
    "name": "阿伦尼乌斯方程",
    "category": "化学",
    "subCategory": "化学反应",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "k = Ae^(-Ea/RT)",
    "latex": "k = Ae^{-\\frac{E_a}{RT}}",
    "variables": [
      {
        "name": "k",
        "description": "反应速率常数",
        "unit": ""
      },
      {
        "name": "A",
        "description": "指前因子",
        "unit": ""
      },
      {
        "name": "Ea",
        "description": "活化能",
        "unit": "J/mol"
      },
      {
        "name": "R",
        "description": "气体常数",
        "unit": "8.314 J/(mol·K)"
      },
      {
        "name": "T",
        "description": "温度",
        "unit": "K"
      }
    ],
    "conditions": "",
    "notes": "反应速率常数与温度、活化能的关系",
    "derivation": "阿伦尼乌斯方程",
    "related": [
      "high_chem_004"
    ],
    "calculator": {
      "inputs": [
        "A",
        "Ea",
        "T"
      ],
      "output": "k"
    }
  },
  {
    "id": "univ_chem_thermo_001",
    "name": "吉布斯自由能",
    "category": "化学",
    "subCategory": "物理化学-热力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ΔG = ΔH - TΔS",
    "latex": "\\Delta G = \\Delta H - T\\Delta S",
    "variables": [
      {
        "name": "ΔG",
        "description": "吉布斯自由能变化",
        "unit": "J/mol"
      },
      {
        "name": "ΔH",
        "description": "焓变",
        "unit": "J/mol"
      },
      {
        "name": "T",
        "description": "温度",
        "unit": "K"
      },
      {
        "name": "ΔS",
        "description": "熵变",
        "unit": "J/(mol·K)"
      }
    ],
    "conditions": "",
    "notes": "ΔG < 0时反应自发进行",
    "derivation": "由热力学函数关系推导",
    "related": [
      "univ_chem_thermo_002"
    ],
    "calculator": {
      "inputs": [
        "deltaH",
        "T",
        "deltaS"
      ],
      "output": "deltaG"
    }
  },
  {
    "id": "univ_chem_thermo_002",
    "name": "范特霍夫方程",
    "category": "化学",
    "subCategory": "物理化学-热力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ln(K₂/K₁) = (ΔH°/R)(1/T₁ - 1/T₂)",
    "latex": "\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)",
    "variables": [
      {
        "name": "K₁, K₂",
        "description": "不同温度下的平衡常数",
        "unit": ""
      },
      {
        "name": "ΔH°",
        "description": "标准焓变",
        "unit": "J/mol"
      },
      {
        "name": "T₁, T₂",
        "description": "温度",
        "unit": "K"
      },
      {
        "name": "R",
        "description": "气体常数",
        "unit": "8.314 J/(mol·K)"
      }
    ],
    "conditions": "",
    "notes": "描述平衡常数与温度的关系",
    "derivation": "由热力学关系推导",
    "related": [
      "univ_chem_thermo_001",
      "high_chem_005"
    ],
    "calculator": {
      "inputs": [
        "K1",
        "T1",
        "T2",
        "deltaH"
      ],
      "output": "K2"
    }
  },
  {
    "id": "univ_chem_thermo_003",
    "name": "克劳修斯-克拉珀龙方程",
    "category": "化学",
    "subCategory": "物理化学-热力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ln(P₂/P₁) = (ΔHvap/R)(1/T₁ - 1/T₂)",
    "latex": "\\ln\\left(\\frac{P_2}{P_1}\\right) = \\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)",
    "variables": [
      {
        "name": "P₁, P₂",
        "description": "不同温度下的蒸气压",
        "unit": "Pa"
      },
      {
        "name": "ΔHvap",
        "description": "蒸发热",
        "unit": "J/mol"
      },
      {
        "name": "T₁, T₂",
        "description": "温度",
        "unit": "K"
      },
      {
        "name": "R",
        "description": "气体常数",
        "unit": "8.314 J/(mol·K)"
      }
    ],
    "conditions": "液-气平衡",
    "notes": "描述蒸气压与温度的关系",
    "derivation": "由热力学关系推导",
    "related": [
      "univ_chem_thermo_002"
    ],
    "calculator": {
      "inputs": [
        "P1",
        "T1",
        "T2",
        "deltaHvap"
      ],
      "output": "P2"
    }
  },
  {
    "id": "univ_chem_kinetics_001",
    "name": "一级反应速率方程",
    "category": "化学",
    "subCategory": "物理化学-动力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ln([A]₀/[A]) = kt",
    "latex": "\\ln\\left(\\frac{[A]_0}{[A]}\\right) = kt",
    "variables": [
      {
        "name": "[A]₀",
        "description": "初始浓度",
        "unit": "mol/L"
      },
      {
        "name": "[A]",
        "description": "t时刻浓度",
        "unit": "mol/L"
      },
      {
        "name": "k",
        "description": "速率常数",
        "unit": "s⁻¹"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s"
      }
    ],
    "conditions": "一级反应",
    "notes": "一级反应的积分速率方程",
    "derivation": "由速率方程积分",
    "related": [
      "high_chem_004"
    ],
    "calculator": {
      "inputs": [
        "A0",
        "A",
        "k"
      ],
      "output": "t"
    }
  },
  {
    "id": "univ_chem_kinetics_002",
    "name": "二级反应速率方程",
    "category": "化学",
    "subCategory": "物理化学-动力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "1/[A] - 1/[A]₀ = kt",
    "latex": "\\frac{1}{[A]} - \\frac{1}{[A]_0} = kt",
    "variables": [
      {
        "name": "[A]₀",
        "description": "初始浓度",
        "unit": "mol/L"
      },
      {
        "name": "[A]",
        "description": "t时刻浓度",
        "unit": "mol/L"
      },
      {
        "name": "k",
        "description": "速率常数",
        "unit": "L/(mol·s)"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s"
      }
    ],
    "conditions": "二级反应",
    "notes": "二级反应的积分速率方程",
    "derivation": "由速率方程积分",
    "related": [
      "univ_chem_kinetics_001"
    ],
    "calculator": {
      "inputs": [
        "A0",
        "A",
        "k"
      ],
      "output": "t"
    }
  },
  {
    "id": "univ_chem_kinetics_003",
    "name": "半衰期",
    "category": "化学",
    "subCategory": "物理化学-动力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "t₁/₂ = ln2/k（一级反应）, t₁/₂ = 1/(k[A]₀)（二级反应）",
    "latex": "t_{1/2} = \\frac{\\ln 2}{k} \\text{（一级反应）}, \\quad t_{1/2} = \\frac{1}{k[A]_0} \\text{（二级反应）}",
    "variables": [
      {
        "name": "t₁/₂",
        "description": "半衰期",
        "unit": "s"
      },
      {
        "name": "k",
        "description": "速率常数",
        "unit": ""
      },
      {
        "name": "[A]₀",
        "description": "初始浓度",
        "unit": "mol/L"
      }
    ],
    "conditions": "",
    "notes": "反应物浓度减半所需的时间",
    "derivation": "由速率方程推导",
    "related": [
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002"
    ],
    "calculator": {
      "inputs": [
        "k",
        "order",
        "A0"
      ],
      "output": "t_half"
    }
  }
];

module.exports = formulas;
