// 物理公式数据
const formulas = [
  {
    "id": "physics_001",
    "name": "牛顿第二定律",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "F = ma",
    "latex": "F = ma",
    "variables": [
      {
        "name": "F",
        "description": "物体所受的合外力",
        "unit": "N (牛顿)"
      },
      {
        "name": "m",
        "description": "物体的质量",
        "unit": "kg (千克)"
      },
      {
        "name": "a",
        "description": "物体的加速度",
        "unit": "m/s² (米每二次方秒)"
      }
    ],
    "conditions": "适用于宏观低速物体",
    "notes": "这是经典力学的基础公式",
    "derivation": "通过实验总结得出",
    "related": [
      "physics_002"
    ],
    "calculator": {
      "inputs": [
        "m",
        "a"
      ],
      "output": "F"
    }
  },
  {
    "id": "physics_002",
    "name": "动能公式",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式"
    ],
    "formula": "Ek = ½mv²",
    "latex": "E_k = \\frac{1}{2}mv^2",
    "variables": [
      {
        "name": "Ek",
        "description": "物体的动能",
        "unit": "J (焦耳)"
      },
      {
        "name": "m",
        "description": "物体的质量",
        "unit": "kg (千克)"
      },
      {
        "name": "v",
        "description": "物体的速度",
        "unit": "m/s (米每秒)"
      }
    ],
    "conditions": "适用于宏观低速物体",
    "notes": "动能与速度的平方成正比",
    "derivation": "由功的定义和牛顿第二定律推导",
    "related": [
      "physics_001"
    ],
    "calculator": {
      "inputs": [
        "m",
        "v"
      ],
      "output": "Ek"
    }
  },
  {
    "id": "physics_003",
    "name": "万有引力定律",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式"
    ],
    "formula": "F = G(m₁m₂)/r²",
    "latex": "F = G\\frac{m_1m_2}{r^2}",
    "variables": [
      {
        "name": "F",
        "description": "万有引力",
        "unit": "N (牛顿)"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "m₁",
        "description": "物体1的质量",
        "unit": "kg (千克)"
      },
      {
        "name": "m₂",
        "description": "物体2的质量",
        "unit": "kg (千克)"
      },
      {
        "name": "r",
        "description": "两物体间的距离",
        "unit": "m (米)"
      }
    ],
    "conditions": "适用于质点或均匀球体",
    "notes": "G 是万有引力常数，约为 6.67×10⁻¹¹ N·m²/kg²",
    "derivation": "由开普勒定律和牛顿运动定律推导",
    "related": [
      "physics_001"
    ],
    "calculator": {
      "inputs": [
        "m1",
        "m2",
        "r"
      ],
      "output": "F"
    }
  },
  {
    "id": "middle_phy_001",
    "name": "密度公式",
    "category": "物理",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ρ = m/V",
    "latex": "\\rho = \\frac{m}{V}",
    "variables": [
      {
        "name": "ρ",
        "description": "密度",
        "unit": "kg/m³ (千克每立方米)"
      },
      {
        "name": "m",
        "description": "质量",
        "unit": "kg (千克)"
      },
      {
        "name": "V",
        "description": "体积",
        "unit": "m³ (立方米)"
      }
    ],
    "conditions": "V > 0",
    "notes": "密度等于质量除以体积",
    "derivation": "密度定义",
    "related": [
      "middle_phy_002"
    ],
    "calculator": {
      "inputs": [
        "m",
        "V"
      ],
      "output": "rho"
    }
  },
  {
    "id": "middle_phy_002",
    "name": "压强公式",
    "category": "物理",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "p = F/S",
    "latex": "p = \\frac{F}{S}",
    "variables": [
      {
        "name": "p",
        "description": "压强",
        "unit": "Pa (帕斯卡)"
      },
      {
        "name": "F",
        "description": "压力",
        "unit": "N (牛顿)"
      },
      {
        "name": "S",
        "description": "受力面积",
        "unit": "m² (平方米)"
      }
    ],
    "conditions": "S > 0",
    "notes": "压强等于压力除以受力面积",
    "derivation": "压强定义",
    "related": [
      "middle_phy_003"
    ],
    "calculator": {
      "inputs": [
        "F",
        "S"
      ],
      "output": "p"
    }
  },
  {
    "id": "middle_phy_003",
    "name": "液体压强公式",
    "category": "物理",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "p = ρgh",
    "latex": "p = \\rho gh",
    "variables": [
      {
        "name": "p",
        "description": "液体压强",
        "unit": "Pa (帕斯卡)"
      },
      {
        "name": "ρ",
        "description": "液体密度",
        "unit": "kg/m³ (千克每立方米)"
      },
      {
        "name": "g",
        "description": "重力加速度",
        "unit": "9.8 m/s²"
      },
      {
        "name": "h",
        "description": "深度",
        "unit": "m (米)"
      }
    ],
    "conditions": "h > 0",
    "notes": "液体压强等于密度乘以重力加速度乘以深度",
    "derivation": "由压强定义和液体性质推导",
    "related": [
      "middle_phy_001",
      "middle_phy_002"
    ],
    "calculator": {
      "inputs": [
        "rho",
        "h"
      ],
      "output": "p"
    }
  },
  {
    "id": "middle_phy_004",
    "name": "浮力公式（阿基米德原理）",
    "category": "物理",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "F浮 = ρ液gV排",
    "latex": "F_{\\text{浮}} = \\rho_{\\text{液}} g V_{\\text{排}}",
    "variables": [
      {
        "name": "F浮",
        "description": "浮力",
        "unit": "N (牛顿)"
      },
      {
        "name": "ρ液",
        "description": "液体密度",
        "unit": "kg/m³ (千克每立方米)"
      },
      {
        "name": "g",
        "description": "重力加速度",
        "unit": "9.8 m/s²"
      },
      {
        "name": "V排",
        "description": "排开液体的体积",
        "unit": "m³ (立方米)"
      }
    ],
    "conditions": "",
    "notes": "物体受到的浮力等于它排开液体的重力",
    "derivation": "阿基米德原理",
    "related": [
      "middle_phy_001",
      "middle_phy_003"
    ],
    "calculator": {
      "inputs": [
        "rho",
        "V"
      ],
      "output": "F"
    }
  },
  {
    "id": "middle_phy_005",
    "name": "功的公式",
    "category": "物理",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "W = Fs",
    "latex": "W = Fs",
    "variables": [
      {
        "name": "W",
        "description": "功",
        "unit": "J (焦耳)"
      },
      {
        "name": "F",
        "description": "力",
        "unit": "N (牛顿)"
      },
      {
        "name": "s",
        "description": "在力的方向上移动的距离",
        "unit": "m (米)"
      }
    ],
    "conditions": "力与位移方向相同",
    "notes": "功等于力乘以在力的方向上移动的距离",
    "derivation": "功的定义",
    "related": [
      "middle_phy_006"
    ],
    "calculator": {
      "inputs": [
        "F",
        "s"
      ],
      "output": "W"
    }
  },
  {
    "id": "middle_phy_006",
    "name": "功率公式",
    "category": "物理",
    "subCategory": "基础",
    "grade": [
      "初中",
      "专业领域"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P = W/t = Fv",
    "latex": "P = \\frac{W}{t} = Fv",
    "variables": [
      {
        "name": "P",
        "description": "功率",
        "unit": "W (瓦特)"
      },
      {
        "name": "W",
        "description": "功",
        "unit": "J (焦耳)"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s (秒)"
      },
      {
        "name": "F",
        "description": "力",
        "unit": "N (牛顿)"
      },
      {
        "name": "v",
        "description": "速度",
        "unit": "m/s (米每秒)"
      }
    ],
    "conditions": "t > 0",
    "notes": "功率等于功除以时间，或等于力乘以速度",
    "derivation": "功率定义",
    "related": [
      "middle_phy_005"
    ],
    "calculator": {
      "inputs": [
        "W",
        "t"
      ],
      "output": "P"
    }
  },
  {
    "id": "middle_phy_007",
    "name": "机械效率",
    "category": "物理",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "η = (W有用/W总) × 100%",
    "latex": "\\eta = \\frac{W_{\\text{有用}}}{W_{\\text{总}}} \\times 100\\%",
    "variables": [
      {
        "name": "η",
        "description": "机械效率",
        "unit": "% (百分比)"
      },
      {
        "name": "W有用",
        "description": "有用功",
        "unit": "J (焦耳)"
      },
      {
        "name": "W总",
        "description": "总功",
        "unit": "J (焦耳)"
      }
    ],
    "conditions": "W总 > 0",
    "notes": "机械效率等于有用功除以总功再乘以100%",
    "derivation": "效率定义",
    "related": [
      "middle_phy_005"
    ],
    "calculator": {
      "inputs": [
        "W_useful",
        "W_total"
      ],
      "output": "eta"
    }
  },
  {
    "id": "middle_phy_008",
    "name": "杠杆平衡条件",
    "category": "物理",
    "subCategory": "基础",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "F₁l₁ = F₂l₂",
    "latex": "F_1 l_1 = F_2 l_2",
    "variables": [
      {
        "name": "F₁, F₂",
        "description": "两个力",
        "unit": "N (牛顿)"
      },
      {
        "name": "l₁, l₂",
        "description": "力臂",
        "unit": "m (米)"
      }
    ],
    "conditions": "杠杆平衡",
    "notes": "杠杆平衡时，动力乘以动力臂等于阻力乘以阻力臂",
    "derivation": "杠杆原理",
    "related": [],
    "calculator": {
      "inputs": [
        "F1",
        "l1",
        "l2"
      ],
      "output": "F2"
    }
  },
  {
    "id": "middle_phy_009",
    "name": "比热容公式",
    "category": "物理",
    "subCategory": "热学",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Q = cmΔt",
    "latex": "Q = cm\\Delta t",
    "variables": [
      {
        "name": "Q",
        "description": "吸收或放出的热量",
        "unit": "J (焦耳)"
      },
      {
        "name": "c",
        "description": "比热容",
        "unit": "J/(kg·℃)"
      },
      {
        "name": "m",
        "description": "质量",
        "unit": "kg (千克)"
      },
      {
        "name": "Δt",
        "description": "温度变化量",
        "unit": "℃ (摄氏度)"
      }
    ],
    "conditions": "",
    "notes": "物体吸收或放出的热量等于比热容乘以质量乘以温度变化量",
    "derivation": "比热容定义",
    "related": [
      "middle_phy_010"
    ],
    "calculator": {
      "inputs": [
        "c",
        "m",
        "deltaT"
      ],
      "output": "Q"
    }
  },
  {
    "id": "middle_phy_010",
    "name": "热值公式",
    "category": "物理",
    "subCategory": "热学",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Q = qm",
    "latex": "Q = qm",
    "variables": [
      {
        "name": "Q",
        "description": "放出的热量",
        "unit": "J (焦耳)"
      },
      {
        "name": "q",
        "description": "热值",
        "unit": "J/kg 或 J/m³"
      },
      {
        "name": "m",
        "description": "燃料质量或体积",
        "unit": "kg 或 m³"
      }
    ],
    "conditions": "",
    "notes": "燃料完全燃烧放出的热量等于热值乘以质量（或体积）",
    "derivation": "热值定义",
    "related": [
      "middle_phy_009"
    ],
    "calculator": {
      "inputs": [
        "q",
        "m"
      ],
      "output": "Q"
    }
  },
  {
    "id": "middle_phy_011",
    "name": "欧姆定律",
    "category": "物理",
    "subCategory": "电学",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "I = U/R",
    "latex": "I = \\frac{U}{R}",
    "variables": [
      {
        "name": "I",
        "description": "电流",
        "unit": "A (安培)"
      },
      {
        "name": "U",
        "description": "电压",
        "unit": "V (伏特)"
      },
      {
        "name": "R",
        "description": "电阻",
        "unit": "Ω (欧姆)"
      }
    ],
    "conditions": "R > 0",
    "notes": "导体中的电流与导体两端的电压成正比，与导体的电阻成反比",
    "derivation": "欧姆定律",
    "related": [
      "middle_phy_012",
      "middle_phy_013"
    ],
    "calculator": {
      "inputs": [
        "U",
        "R"
      ],
      "output": "I"
    }
  },
  {
    "id": "middle_phy_012",
    "name": "电功公式",
    "category": "物理",
    "subCategory": "电学",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "W = UIt = Pt",
    "latex": "W = UIt = Pt",
    "variables": [
      {
        "name": "W",
        "description": "电功",
        "unit": "J (焦耳) 或 kW·h (千瓦时)"
      },
      {
        "name": "U",
        "description": "电压",
        "unit": "V (伏特)"
      },
      {
        "name": "I",
        "description": "电流",
        "unit": "A (安培)"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s (秒)"
      },
      {
        "name": "P",
        "description": "电功率",
        "unit": "W (瓦特)"
      }
    ],
    "conditions": "t > 0",
    "notes": "电功等于电压乘以电流乘以时间，或等于电功率乘以时间",
    "derivation": "电功定义",
    "related": [
      "middle_phy_011",
      "middle_phy_013"
    ],
    "calculator": {
      "inputs": [
        "U",
        "I",
        "t"
      ],
      "output": "W"
    }
  },
  {
    "id": "middle_phy_013",
    "name": "电功率公式",
    "category": "物理",
    "subCategory": "电学",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P = UI = I²R = U²/R",
    "latex": "P = UI = I^2R = \\frac{U^2}{R}",
    "variables": [
      {
        "name": "P",
        "description": "电功率",
        "unit": "W (瓦特)"
      },
      {
        "name": "U",
        "description": "电压",
        "unit": "V (伏特)"
      },
      {
        "name": "I",
        "description": "电流",
        "unit": "A (安培)"
      },
      {
        "name": "R",
        "description": "电阻",
        "unit": "Ω (欧姆)"
      }
    ],
    "conditions": "R > 0",
    "notes": "电功率等于电压乘以电流，或等于电流的平方乘以电阻，或等于电压的平方除以电阻",
    "derivation": "由电功公式和欧姆定律推导",
    "related": [
      "middle_phy_011",
      "middle_phy_012"
    ],
    "calculator": {
      "inputs": [
        "U",
        "I"
      ],
      "output": "P"
    }
  },
  {
    "id": "middle_phy_014",
    "name": "串联电路总电阻",
    "category": "物理",
    "subCategory": "电学",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "R = R₁ + R₂ + ... + Rₙ",
    "latex": "R = R_1 + R_2 + \\cdots + R_n",
    "variables": [
      {
        "name": "R",
        "description": "总电阻",
        "unit": "Ω (欧姆)"
      },
      {
        "name": "R₁, R₂, ..., Rₙ",
        "description": "各分电阻",
        "unit": "Ω (欧姆)"
      }
    ],
    "conditions": "",
    "notes": "串联电路的总电阻等于各分电阻之和",
    "derivation": "由欧姆定律和串联电路特点推导",
    "related": [
      "middle_phy_011",
      "middle_phy_015"
    ],
    "calculator": {
      "inputs": [
        "resistors"
      ],
      "output": "R"
    }
  },
  {
    "id": "middle_phy_015",
    "name": "并联电路总电阻",
    "category": "物理",
    "subCategory": "电学",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "1/R = 1/R₁ + 1/R₂ + ... + 1/Rₙ",
    "latex": "\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots + \\frac{1}{R_n}",
    "variables": [
      {
        "name": "R",
        "description": "总电阻",
        "unit": "Ω (欧姆)"
      },
      {
        "name": "R₁, R₂, ..., Rₙ",
        "description": "各分电阻",
        "unit": "Ω (欧姆)"
      }
    ],
    "conditions": "所有分电阻 > 0",
    "notes": "并联电路总电阻的倒数等于各分电阻倒数之和",
    "derivation": "由欧姆定律和并联电路特点推导",
    "related": [
      "middle_phy_011",
      "middle_phy_014"
    ],
    "calculator": {
      "inputs": [
        "resistors"
      ],
      "output": "R"
    }
  },
  {
    "id": "high_phy_001",
    "name": "匀变速直线运动速度公式",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "v = v₀ + at",
    "latex": "v = v_0 + at",
    "variables": [
      {
        "name": "v",
        "description": "末速度",
        "unit": "m/s"
      },
      {
        "name": "v₀",
        "description": "初速度",
        "unit": "m/s"
      },
      {
        "name": "a",
        "description": "加速度",
        "unit": "m/s²"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s"
      }
    ],
    "conditions": "匀变速直线运动",
    "notes": "速度与时间的关系式",
    "derivation": "由加速度定义推导",
    "related": [
      "high_phy_002",
      "high_phy_003"
    ],
    "calculator": {
      "inputs": [
        "v0",
        "a",
        "t"
      ],
      "output": "v"
    }
  },
  {
    "id": "high_phy_002",
    "name": "匀变速直线运动位移公式",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "s = v₀t + (1/2)at²",
    "latex": "s = v_0t + \\frac{1}{2}at^2",
    "variables": [
      {
        "name": "s",
        "description": "位移",
        "unit": "m"
      },
      {
        "name": "v₀",
        "description": "初速度",
        "unit": "m/s"
      },
      {
        "name": "a",
        "description": "加速度",
        "unit": "m/s²"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s"
      }
    ],
    "conditions": "匀变速直线运动",
    "notes": "位移与时间的关系式",
    "derivation": "由速度-时间图像的面积推导",
    "related": [
      "high_phy_001",
      "high_phy_003"
    ],
    "calculator": {
      "inputs": [
        "v0",
        "a",
        "t"
      ],
      "output": "s"
    }
  },
  {
    "id": "high_phy_003",
    "name": "匀变速直线运动速度位移关系",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "v² = v₀² + 2as",
    "latex": "v^2 = v_0^2 + 2as",
    "variables": [
      {
        "name": "v",
        "description": "末速度",
        "unit": "m/s"
      },
      {
        "name": "v₀",
        "description": "初速度",
        "unit": "m/s"
      },
      {
        "name": "a",
        "description": "加速度",
        "unit": "m/s²"
      },
      {
        "name": "s",
        "description": "位移",
        "unit": "m"
      }
    ],
    "conditions": "匀变速直线运动",
    "notes": "速度与位移的关系式，不涉及时间",
    "derivation": "由前两个公式消去时间t推导",
    "related": [
      "high_phy_001",
      "high_phy_002"
    ],
    "calculator": {
      "inputs": [
        "v0",
        "a",
        "s"
      ],
      "output": "v"
    }
  },
  {
    "id": "high_phy_004",
    "name": "自由落体运动",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "v = gt, h = (1/2)gt², v² = 2gh",
    "latex": "v = gt, \\quad h = \\frac{1}{2}gt^2, \\quad v^2 = 2gh",
    "variables": [
      {
        "name": "v",
        "description": "速度",
        "unit": "m/s"
      },
      {
        "name": "h",
        "description": "下落高度",
        "unit": "m"
      },
      {
        "name": "g",
        "description": "重力加速度",
        "unit": "9.8 m/s²"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s"
      }
    ],
    "conditions": "初速度为零，只受重力作用",
    "notes": "自由落体是初速度为零的匀加速直线运动",
    "derivation": "由匀变速直线运动公式，令 v₀ = 0, a = g",
    "related": [
      "high_phy_001",
      "high_phy_002",
      "high_phy_003"
    ],
    "calculator": {
      "inputs": [
        "t"
      ],
      "output": "v"
    }
  },
  {
    "id": "high_phy_005",
    "name": "平抛运动",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "x = v₀t, y = (1/2)gt², vₓ = v₀, vᵧ = gt",
    "latex": "x = v_0t, \\quad y = \\frac{1}{2}gt^2, \\quad v_x = v_0, \\quad v_y = gt",
    "variables": [
      {
        "name": "x",
        "description": "水平位移",
        "unit": "m"
      },
      {
        "name": "y",
        "description": "竖直位移",
        "unit": "m"
      },
      {
        "name": "v₀",
        "description": "初速度",
        "unit": "m/s"
      },
      {
        "name": "vₓ",
        "description": "水平速度",
        "unit": "m/s"
      },
      {
        "name": "vᵧ",
        "description": "竖直速度",
        "unit": "m/s"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s"
      }
    ],
    "conditions": "初速度水平，只受重力作用",
    "notes": "平抛运动可以分解为水平方向的匀速直线运动和竖直方向的自由落体运动",
    "derivation": "运动的合成与分解",
    "related": [
      "high_phy_004"
    ],
    "calculator": {
      "inputs": [
        "v0",
        "t"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_phy_006",
    "name": "向心力公式",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "F = mv²/r = mω²r = 4π²mr/T²",
    "latex": "F = \\frac{mv^2}{r} = m\\omega^2r = \\frac{4\\pi^2mr}{T^2}",
    "variables": [
      {
        "name": "F",
        "description": "向心力",
        "unit": "N"
      },
      {
        "name": "m",
        "description": "质量",
        "unit": "kg"
      },
      {
        "name": "v",
        "description": "线速度",
        "unit": "m/s"
      },
      {
        "name": "ω",
        "description": "角速度",
        "unit": "rad/s"
      },
      {
        "name": "r",
        "description": "半径",
        "unit": "m"
      },
      {
        "name": "T",
        "description": "周期",
        "unit": "s"
      }
    ],
    "conditions": "匀速圆周运动",
    "notes": "向心力指向圆心，提供物体做圆周运动所需的向心加速度",
    "derivation": "由牛顿第二定律和圆周运动加速度推导",
    "related": [
      "physics_001"
    ],
    "calculator": {
      "inputs": [
        "m",
        "v",
        "r"
      ],
      "output": "F"
    }
  },
  {
    "id": "high_phy_007",
    "name": "万有引力提供向心力",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "GMm/r² = mv²/r = mω²r",
    "latex": "G\\frac{Mm}{r^2} = \\frac{mv^2}{r} = m\\omega^2r",
    "variables": [
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      },
      {
        "name": "m",
        "description": "环绕天体质量",
        "unit": "kg"
      },
      {
        "name": "r",
        "description": "轨道半径",
        "unit": "m"
      },
      {
        "name": "v",
        "description": "线速度",
        "unit": "m/s"
      },
      {
        "name": "ω",
        "description": "角速度",
        "unit": "rad/s"
      }
    ],
    "conditions": "天体做圆周运动",
    "notes": "万有引力提供天体做圆周运动的向心力",
    "derivation": "由万有引力定律和向心力公式推导",
    "related": [
      "physics_003",
      "high_phy_006"
    ],
    "calculator": {
      "inputs": [
        "M",
        "r"
      ],
      "output": "v"
    }
  },
  {
    "id": "high_phy_008",
    "name": "开普勒第三定律",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "T²/r³ = 4π²/(GM) = 常数",
    "latex": "\\frac{T^2}{r^3} = \\frac{4\\pi^2}{GM} = \\text{常数}",
    "variables": [
      {
        "name": "T",
        "description": "周期",
        "unit": "s"
      },
      {
        "name": "r",
        "description": "轨道半径",
        "unit": "m"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      }
    ],
    "conditions": "椭圆轨道，M远大于m",
    "notes": "行星公转周期的平方与轨道半长轴的立方成正比",
    "derivation": "由万有引力定律和向心力公式推导",
    "related": [
      "high_phy_007"
    ],
    "calculator": {
      "inputs": [
        "r",
        "M"
      ],
      "output": "T"
    }
  },
  {
    "id": "high_phy_009",
    "name": "动量定理",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Ft = mv - mv₀ = Δp",
    "latex": "Ft = mv - mv_0 = \\Delta p",
    "variables": [
      {
        "name": "F",
        "description": "合外力",
        "unit": "N"
      },
      {
        "name": "t",
        "description": "作用时间",
        "unit": "s"
      },
      {
        "name": "m",
        "description": "质量",
        "unit": "kg"
      },
      {
        "name": "v",
        "description": "末速度",
        "unit": "m/s"
      },
      {
        "name": "v₀",
        "description": "初速度",
        "unit": "m/s"
      },
      {
        "name": "Δp",
        "description": "动量变化量",
        "unit": "kg·m/s"
      }
    ],
    "conditions": "",
    "notes": "物体所受合外力的冲量等于物体动量的变化量",
    "derivation": "由牛顿第二定律推导",
    "related": [
      "physics_001",
      "high_phy_010"
    ],
    "calculator": {
      "inputs": [
        "m",
        "v",
        "v0"
      ],
      "output": "deltaP"
    }
  },
  {
    "id": "high_phy_010",
    "name": "动量守恒定律",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'",
    "latex": "m_1v_1 + m_2v_2 = m_1v_1' + m_2v_2'",
    "variables": [
      {
        "name": "m₁, m₂",
        "description": "两物体质量",
        "unit": "kg"
      },
      {
        "name": "v₁, v₂",
        "description": "碰撞前速度",
        "unit": "m/s"
      },
      {
        "name": "v₁', v₂'",
        "description": "碰撞后速度",
        "unit": "m/s"
      }
    ],
    "conditions": "系统不受外力或合外力为零",
    "notes": "系统总动量在碰撞前后保持不变",
    "derivation": "由动量定理和牛顿第三定律推导",
    "related": [
      "high_phy_009"
    ],
    "calculator": {
      "inputs": [
        "m1",
        "v1",
        "m2",
        "v2"
      ],
      "output": "totalP"
    }
  },
  {
    "id": "high_phy_011",
    "name": "机械能守恒定律",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Ek₁ + Ep₁ = Ek₂ + Ep₂",
    "latex": "E_{k1} + E_{p1} = E_{k2} + E_{p2}",
    "variables": [
      {
        "name": "Ek",
        "description": "动能",
        "unit": "J"
      },
      {
        "name": "Ep",
        "description": "势能",
        "unit": "J"
      }
    ],
    "conditions": "只有重力或弹力做功",
    "notes": "在只有重力或弹力做功的情况下，物体的动能和势能相互转化，但总机械能保持不变",
    "derivation": "由功能关系推导",
    "related": [
      "physics_002",
      "high_phy_012"
    ],
    "calculator": {
      "inputs": [
        "Ek1",
        "Ep1"
      ],
      "output": "totalE"
    }
  },
  {
    "id": "high_phy_012",
    "name": "重力势能",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Ep = mgh",
    "latex": "E_p = mgh",
    "variables": [
      {
        "name": "Ep",
        "description": "重力势能",
        "unit": "J"
      },
      {
        "name": "m",
        "description": "质量",
        "unit": "kg"
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
    "conditions": "以地面或某一水平面为零势能面",
    "notes": "重力势能等于质量乘以重力加速度乘以高度",
    "derivation": "由功的定义推导",
    "related": [
      "high_phy_011",
      "physics_002"
    ],
    "calculator": {
      "inputs": [
        "m",
        "h"
      ],
      "output": "Ep"
    }
  },
  {
    "id": "high_phy_013",
    "name": "弹性势能",
    "category": "物理",
    "subCategory": "力学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Ep = (1/2)kx²",
    "latex": "E_p = \\frac{1}{2}kx^2",
    "variables": [
      {
        "name": "Ep",
        "description": "弹性势能",
        "unit": "J"
      },
      {
        "name": "k",
        "description": "弹簧劲度系数",
        "unit": "N/m"
      },
      {
        "name": "x",
        "description": "形变量",
        "unit": "m"
      }
    ],
    "conditions": "在弹性限度内",
    "notes": "弹性势能等于二分之一乘以劲度系数乘以形变量的平方",
    "derivation": "由胡克定律和功的定义推导",
    "related": [
      "high_phy_011"
    ],
    "calculator": {
      "inputs": [
        "k",
        "x"
      ],
      "output": "Ep"
    }
  },
  {
    "id": "high_phy_014",
    "name": "库仑定律",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "F = k(q₁q₂)/r²",
    "latex": "F = k\\frac{q_1q_2}{r^2}",
    "variables": [
      {
        "name": "F",
        "description": "静电力",
        "unit": "N"
      },
      {
        "name": "k",
        "description": "静电力常量",
        "unit": "9×10⁹ N·m²/C²"
      },
      {
        "name": "q₁, q₂",
        "description": "电荷量",
        "unit": "C"
      },
      {
        "name": "r",
        "description": "距离",
        "unit": "m"
      }
    ],
    "conditions": "点电荷，真空或空气中",
    "notes": "真空中两个点电荷之间的相互作用力与它们的电荷量的乘积成正比，与它们之间距离的平方成反比",
    "derivation": "库仑定律",
    "related": [
      "high_phy_015"
    ],
    "calculator": {
      "inputs": [
        "q1",
        "q2",
        "r"
      ],
      "output": "F"
    }
  },
  {
    "id": "high_phy_015",
    "name": "电场强度",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "E = F/q = kQ/r²",
    "latex": "E = \\frac{F}{q} = k\\frac{Q}{r^2}",
    "variables": [
      {
        "name": "E",
        "description": "电场强度",
        "unit": "N/C 或 V/m"
      },
      {
        "name": "F",
        "description": "电场力",
        "unit": "N"
      },
      {
        "name": "q",
        "description": "试探电荷",
        "unit": "C"
      },
      {
        "name": "Q",
        "description": "场源电荷",
        "unit": "C"
      },
      {
        "name": "r",
        "description": "距离",
        "unit": "m"
      }
    ],
    "conditions": "点电荷电场",
    "notes": "电场强度等于单位正电荷所受的电场力",
    "derivation": "由库仑定律推导",
    "related": [
      "high_phy_014"
    ],
    "calculator": {
      "inputs": [
        "Q",
        "r"
      ],
      "output": "E"
    }
  },
  {
    "id": "high_phy_016",
    "name": "电势能",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Ep = qφ",
    "latex": "E_p = q\\varphi",
    "variables": [
      {
        "name": "Ep",
        "description": "电势能",
        "unit": "J"
      },
      {
        "name": "q",
        "description": "电荷量",
        "unit": "C"
      },
      {
        "name": "φ",
        "description": "电势",
        "unit": "V"
      }
    ],
    "conditions": "",
    "notes": "电荷在电场中某点的电势能等于电荷量乘以该点的电势",
    "derivation": "由功的定义和电势定义推导",
    "related": [
      "high_phy_015"
    ],
    "calculator": {
      "inputs": [
        "q",
        "phi"
      ],
      "output": "Ep"
    }
  },
  {
    "id": "high_phy_017",
    "name": "电容公式",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "C = Q/U = εS/(4πkd)",
    "latex": "C = \\frac{Q}{U} = \\frac{\\varepsilon S}{4\\pi kd}",
    "variables": [
      {
        "name": "C",
        "description": "电容",
        "unit": "F"
      },
      {
        "name": "Q",
        "description": "电荷量",
        "unit": "C"
      },
      {
        "name": "U",
        "description": "电压",
        "unit": "V"
      },
      {
        "name": "ε",
        "description": "介电常数",
        "unit": ""
      },
      {
        "name": "S",
        "description": "极板面积",
        "unit": "m²"
      },
      {
        "name": "d",
        "description": "极板间距",
        "unit": "m"
      }
    ],
    "conditions": "平行板电容器",
    "notes": "电容等于电荷量与电压的比值，对于平行板电容器，还与极板面积和间距有关",
    "derivation": "由电容定义和电场强度公式推导",
    "related": [
      "high_phy_015"
    ],
    "calculator": {
      "inputs": [
        "Q",
        "U"
      ],
      "output": "C"
    }
  },
  {
    "id": "high_phy_018",
    "name": "磁感应强度",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "B = F/(IL)",
    "latex": "B = \\frac{F}{IL}",
    "variables": [
      {
        "name": "B",
        "description": "磁感应强度",
        "unit": "T (特斯拉)"
      },
      {
        "name": "F",
        "description": "安培力",
        "unit": "N"
      },
      {
        "name": "I",
        "description": "电流",
        "unit": "A"
      },
      {
        "name": "L",
        "description": "导线长度",
        "unit": "m"
      }
    ],
    "conditions": "导线与磁场垂直",
    "notes": "磁感应强度等于单位长度、单位电流的导线所受的安培力",
    "derivation": "磁感应强度定义",
    "related": [
      "high_phy_019"
    ],
    "calculator": {
      "inputs": [
        "F",
        "I",
        "L"
      ],
      "output": "B"
    }
  },
  {
    "id": "high_phy_019",
    "name": "安培力公式",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "F = BIL sin θ",
    "latex": "F = BIL\\sin\\theta",
    "variables": [
      {
        "name": "F",
        "description": "安培力",
        "unit": "N"
      },
      {
        "name": "B",
        "description": "磁感应强度",
        "unit": "T"
      },
      {
        "name": "I",
        "description": "电流",
        "unit": "A"
      },
      {
        "name": "L",
        "description": "导线长度",
        "unit": "m"
      },
      {
        "name": "θ",
        "description": "电流与磁场方向的夹角",
        "unit": "度或弧度"
      }
    ],
    "conditions": "",
    "notes": "当导线与磁场垂直时，sin θ = 1，F = BIL",
    "derivation": "由磁感应强度定义推导",
    "related": [
      "high_phy_018"
    ],
    "calculator": {
      "inputs": [
        "B",
        "I",
        "L",
        "theta"
      ],
      "output": "F"
    }
  },
  {
    "id": "high_phy_020",
    "name": "洛伦兹力",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "F = qvB sin θ",
    "latex": "F = qvB\\sin\\theta",
    "variables": [
      {
        "name": "F",
        "description": "洛伦兹力",
        "unit": "N"
      },
      {
        "name": "q",
        "description": "电荷量",
        "unit": "C"
      },
      {
        "name": "v",
        "description": "速度",
        "unit": "m/s"
      },
      {
        "name": "B",
        "description": "磁感应强度",
        "unit": "T"
      },
      {
        "name": "θ",
        "description": "速度与磁场方向的夹角",
        "unit": "度或弧度"
      }
    ],
    "conditions": "",
    "notes": "运动电荷在磁场中受到的力，方向由左手定则确定",
    "derivation": "由安培力公式推导",
    "related": [
      "high_phy_019"
    ],
    "calculator": {
      "inputs": [
        "q",
        "v",
        "B",
        "theta"
      ],
      "output": "F"
    }
  },
  {
    "id": "high_phy_021",
    "name": "法拉第电磁感应定律",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "E = -nΔΦ/Δt",
    "latex": "E = -n\\frac{\\Delta\\Phi}{\\Delta t}",
    "variables": [
      {
        "name": "E",
        "description": "感应电动势",
        "unit": "V"
      },
      {
        "name": "n",
        "description": "线圈匝数",
        "unit": ""
      },
      {
        "name": "ΔΦ",
        "description": "磁通量变化量",
        "unit": "Wb"
      },
      {
        "name": "Δt",
        "description": "时间变化量",
        "unit": "s"
      }
    ],
    "conditions": "",
    "notes": "感应电动势的大小与磁通量的变化率成正比，负号表示方向",
    "derivation": "法拉第电磁感应定律",
    "related": [
      "high_phy_022"
    ],
    "calculator": {
      "inputs": [
        "n",
        "deltaPhi",
        "deltaT"
      ],
      "output": "E"
    }
  },
  {
    "id": "high_phy_022",
    "name": "磁通量",
    "category": "物理",
    "subCategory": "电学",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Φ = BS cos θ",
    "latex": "\\Phi = BS\\cos\\theta",
    "variables": [
      {
        "name": "Φ",
        "description": "磁通量",
        "unit": "Wb (韦伯)"
      },
      {
        "name": "B",
        "description": "磁感应强度",
        "unit": "T"
      },
      {
        "name": "S",
        "description": "面积",
        "unit": "m²"
      },
      {
        "name": "θ",
        "description": "磁场与面积法线的夹角",
        "unit": "度或弧度"
      }
    ],
    "conditions": "",
    "notes": "磁通量等于磁感应强度乘以面积再乘以夹角余弦",
    "derivation": "磁通量定义",
    "related": [
      "high_phy_021",
      "high_phy_018"
    ],
    "calculator": {
      "inputs": [
        "B",
        "S",
        "theta"
      ],
      "output": "Phi"
    }
  },
  {
    "id": "univ_phy_relativity_001",
    "name": "相对论时间膨胀",
    "category": "物理",
    "subCategory": "相对论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Δt = Δt₀ / √(1 - v²/c²)",
    "latex": "\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}",
    "variables": [
      {
        "name": "Δt",
        "description": "运动参考系中的时间",
        "unit": "s"
      },
      {
        "name": "Δt₀",
        "description": "静止参考系中的时间（固有时）",
        "unit": "s"
      },
      {
        "name": "v",
        "description": "相对速度",
        "unit": "m/s"
      },
      {
        "name": "c",
        "description": "光速",
        "unit": "3×10⁸ m/s"
      }
    ],
    "conditions": "v < c",
    "notes": "运动时钟变慢效应",
    "derivation": "狭义相对论",
    "related": [
      "univ_phy_relativity_002"
    ],
    "calculator": {
      "inputs": [
        "t0",
        "v"
      ],
      "output": "t"
    }
  },
  {
    "id": "univ_phy_relativity_002",
    "name": "相对论长度收缩",
    "category": "物理",
    "subCategory": "相对论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "L = L₀√(1 - v²/c²)",
    "latex": "L = L_0\\sqrt{1 - v^2/c^2}",
    "variables": [
      {
        "name": "L",
        "description": "运动参考系中的长度",
        "unit": "m"
      },
      {
        "name": "L₀",
        "description": "静止参考系中的长度（固有长度）",
        "unit": "m"
      },
      {
        "name": "v",
        "description": "相对速度",
        "unit": "m/s"
      },
      {
        "name": "c",
        "description": "光速",
        "unit": "3×10⁸ m/s"
      }
    ],
    "conditions": "v < c",
    "notes": "运动物体在运动方向上长度缩短",
    "derivation": "狭义相对论",
    "related": [
      "univ_phy_relativity_001"
    ],
    "calculator": {
      "inputs": [
        "L0",
        "v"
      ],
      "output": "L"
    }
  },
  {
    "id": "univ_phy_relativity_003",
    "name": "质能关系",
    "category": "物理",
    "subCategory": "相对论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
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
    "conditions": "",
    "notes": "爱因斯坦质能关系式，质量和能量的等价性",
    "derivation": "狭义相对论",
    "related": [
      "univ_phy_relativity_004"
    ],
    "calculator": {
      "inputs": [
        "m"
      ],
      "output": "E"
    }
  },
  {
    "id": "univ_phy_relativity_004",
    "name": "相对论动能",
    "category": "物理",
    "subCategory": "相对论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Ek = mc²(1/√(1 - v²/c²) - 1)",
    "latex": "E_k = mc^2\\left(\\frac{1}{\\sqrt{1 - v^2/c^2}} - 1\\right)",
    "variables": [
      {
        "name": "Ek",
        "description": "相对论动能",
        "unit": "J"
      },
      {
        "name": "m",
        "description": "静质量",
        "unit": "kg"
      },
      {
        "name": "v",
        "description": "速度",
        "unit": "m/s"
      },
      {
        "name": "c",
        "description": "光速",
        "unit": "3×10⁸ m/s"
      }
    ],
    "conditions": "v < c",
    "notes": "当v << c时，近似为经典动能 Ek ≈ ½mv²",
    "derivation": "由相对论总能量和静能推导",
    "related": [
      "univ_phy_relativity_003",
      "physics_002"
    ],
    "calculator": {
      "inputs": [
        "m",
        "v"
      ],
      "output": "Ek"
    }
  },
  {
    "id": "univ_phy_relativity_005",
    "name": "相对论质能方程（完整形式）",
    "category": "物理",
    "subCategory": "相对论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "E² = (pc)² + (mc²)²",
    "latex": "E^2 = (pc)^2 + (mc^2)^2",
    "variables": [
      {
        "name": "E",
        "description": "总能量",
        "unit": "J"
      },
      {
        "name": "p",
        "description": "动量",
        "unit": "kg·m/s"
      },
      {
        "name": "m",
        "description": "静质量",
        "unit": "kg"
      },
      {
        "name": "c",
        "description": "光速",
        "unit": "3×10⁸ m/s"
      }
    ],
    "conditions": "",
    "notes": "相对论质能方程的完整形式。当 p = 0（静止粒子）时，退化为 E = mc²。当 m = 0（光子等无质量粒子）时，E = pc。这是狭义相对论中最重要的公式之一",
    "derivation": "由相对论动量和能量关系推导：E = γmc², p = γmv，其中 γ = 1/√(1-v²/c²)。通过代数运算可得 E² - (pc)² = (mc²)²，即 E² = (pc)² + (mc²)²",
    "related": [
      "univ_phy_relativity_003",
      "univ_phy_relativity_004"
    ],
    "calculator": {
      "inputs": [
        "p",
        "m"
      ],
      "output": "E"
    }
  },
  {
    "id": "univ_phy_quantum_001",
    "name": "德布罗意波长",
    "category": "物理",
    "subCategory": "量子力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "λ = h / p = h / (mv)",
    "latex": "\\lambda = \\frac{h}{p} = \\frac{h}{mv}",
    "variables": [
      {
        "name": "λ",
        "description": "德布罗意波长",
        "unit": "m"
      },
      {
        "name": "h",
        "description": "普朗克常数",
        "unit": "6.626×10⁻³⁴ J·s"
      },
      {
        "name": "p",
        "description": "动量",
        "unit": "kg·m/s"
      },
      {
        "name": "m",
        "description": "质量",
        "unit": "kg"
      },
      {
        "name": "v",
        "description": "速度",
        "unit": "m/s"
      }
    ],
    "conditions": "",
    "notes": "物质波波长与动量的关系",
    "derivation": "德布罗意假设",
    "related": [
      "univ_phy_quantum_002"
    ],
    "calculator": {
      "inputs": [
        "m",
        "v"
      ],
      "output": "lambda"
    }
  },
  {
    "id": "univ_phy_quantum_002",
    "name": "不确定性原理",
    "category": "物理",
    "subCategory": "量子力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Δx·Δp ≥ ℏ/2",
    "latex": "\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}",
    "variables": [
      {
        "name": "Δx",
        "description": "位置不确定度",
        "unit": "m"
      },
      {
        "name": "Δp",
        "description": "动量不确定度",
        "unit": "kg·m/s"
      },
      {
        "name": "ℏ",
        "description": "约化普朗克常数",
        "unit": "h/(2π) = 1.055×10⁻³⁴ J·s"
      }
    ],
    "conditions": "",
    "notes": "位置和动量不能同时精确测量",
    "derivation": "海森堡不确定性原理",
    "related": [
      "univ_phy_quantum_001"
    ],
    "calculator": {
      "inputs": [
        "deltaX"
      ],
      "output": "deltaP"
    }
  },
  {
    "id": "univ_phy_quantum_003",
    "name": "薛定谔方程（一维）",
    "category": "物理",
    "subCategory": "量子力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "iℏ(∂ψ/∂t) = -ℏ²/(2m)(∂²ψ/∂x²) + Vψ",
    "latex": "i\\hbar\\frac{\\partial\\psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\psi}{\\partial x^2} + V\\psi",
    "variables": [
      {
        "name": "ψ",
        "description": "波函数",
        "unit": ""
      },
      {
        "name": "V",
        "description": "势能",
        "unit": "J"
      },
      {
        "name": "m",
        "description": "质量",
        "unit": "kg"
      },
      {
        "name": "ℏ",
        "description": "约化普朗克常数",
        "unit": "1.055×10⁻³⁴ J·s"
      }
    ],
    "conditions": "",
    "notes": "量子力学的基本方程，描述微观粒子的运动",
    "derivation": "薛定谔方程",
    "related": [
      "univ_phy_quantum_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "psi"
    }
  },
  {
    "id": "univ_phy_electro_001",
    "name": "麦克斯韦方程组 - 微分形式",
    "category": "物理",
    "subCategory": "电学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∇·E = ρ/ε₀, ∇·B = 0, ∇×E = -∂B/∂t, ∇×B = μ₀J + μ₀ε₀∂E/∂t",
    "latex": "\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}",
    "variables": [
      {
        "name": "E",
        "description": "电场强度",
        "unit": "V/m"
      },
      {
        "name": "B",
        "description": "磁感应强度",
        "unit": "T"
      },
      {
        "name": "ρ",
        "description": "电荷密度",
        "unit": "C/m³"
      },
      {
        "name": "J",
        "description": "电流密度",
        "unit": "A/m²"
      },
      {
        "name": "ε₀",
        "description": "真空介电常数",
        "unit": "8.85×10⁻¹² C²/(N·m²)"
      },
      {
        "name": "μ₀",
        "description": "真空磁导率",
        "unit": "4π×10⁻⁷ N/A²"
      }
    ],
    "conditions": "真空中，适用于宏观电磁场",
    "notes": "麦克斯韦方程组描述了电磁场的基本规律：1) 高斯定律（电场）：电场散度等于电荷密度除以介电常数；2) 高斯定律（磁场）：磁场散度为零，说明不存在磁单极子；3) 法拉第电磁感应定律：电场旋度等于负的磁场时间变化率；4) 安培环路定律（含修正项）：磁场旋度等于电流密度加上位移电流密度",
    "derivation": "由库仑定律、安培定律、法拉第定律等实验定律总结，麦克斯韦添加了位移电流项",
    "related": [
      "high_phy_021",
      "high_phy_022"
    ],
    "calculator": {
      "inputs": [],
      "output": "equations"
    }
  },
  {
    "id": "univ_phy_electro_002",
    "name": "麦克斯韦方程组 - 积分形式",
    "category": "物理",
    "subCategory": "电学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∮E·dS = Q/ε₀, ∮B·dS = 0, ∮E·dl = -dΦB/dt, ∮B·dl = μ₀I + μ₀ε₀dΦE/dt",
    "latex": "\\oint \\mathbf{E} \\cdot d\\mathbf{S} = \\frac{Q}{\\varepsilon_0}, \\quad \\oint \\mathbf{B} \\cdot d\\mathbf{S} = 0, \\quad \\oint \\mathbf{E} \\cdot d\\mathbf{l} = -\\frac{d\\Phi_B}{dt}, \\quad \\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}",
    "variables": [
      {
        "name": "E",
        "description": "电场强度",
        "unit": "V/m"
      },
      {
        "name": "B",
        "description": "磁感应强度",
        "unit": "T"
      },
      {
        "name": "Q",
        "description": "闭合曲面内的总电荷",
        "unit": "C"
      },
      {
        "name": "I",
        "description": "穿过闭合回路的电流",
        "unit": "A"
      },
      {
        "name": "ΦB",
        "description": "磁通量",
        "unit": "Wb"
      },
      {
        "name": "ΦE",
        "description": "电通量",
        "unit": "V·m"
      },
      {
        "name": "ε₀",
        "description": "真空介电常数",
        "unit": "8.85×10⁻¹² C²/(N·m²)"
      },
      {
        "name": "μ₀",
        "description": "真空磁导率",
        "unit": "4π×10⁻⁷ N/A²"
      }
    ],
    "conditions": "真空中，适用于宏观电磁场",
    "notes": "麦克斯韦方程组的积分形式：1) 高斯定律（电场）：通过闭合曲面的电通量等于曲面内电荷除以介电常数；2) 高斯定律（磁场）：通过闭合曲面的磁通量为零；3) 法拉第电磁感应定律：电场沿闭合回路的积分等于负的磁通量变化率；4) 安培环路定律（含修正项）：磁场沿闭合回路的积分等于电流加上位移电流",
    "derivation": "由微分形式通过高斯定理和斯托克斯定理推导得出",
    "related": [
      "high_phy_021",
      "high_phy_022",
      "univ_phy_electro_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "equations"
    }
  },
  {
    "id": "univ_phy_thermo_001",
    "name": "热力学第一定律",
    "category": "物理",
    "subCategory": "热力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ΔU = Q - W",
    "latex": "\\Delta U = Q - W",
    "variables": [
      {
        "name": "ΔU",
        "description": "内能变化",
        "unit": "J"
      },
      {
        "name": "Q",
        "description": "系统吸收的热量",
        "unit": "J"
      },
      {
        "name": "W",
        "description": "系统对外做的功",
        "unit": "J"
      }
    ],
    "conditions": "",
    "notes": "能量守恒定律在热力学中的表达",
    "derivation": "热力学第一定律",
    "related": [
      "chemistry_001"
    ],
    "calculator": {
      "inputs": [
        "Q",
        "W"
      ],
      "output": "deltaU"
    }
  },
  {
    "id": "univ_phy_thermo_003",
    "name": "熵的定义",
    "category": "物理",
    "subCategory": "热力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "dS = dQ/T（可逆过程）",
    "latex": "dS = \\frac{dQ}{T} \\quad \\text{（可逆过程）}",
    "variables": [
      {
        "name": "S",
        "description": "熵",
        "unit": "J/K"
      },
      {
        "name": "Q",
        "description": "热量",
        "unit": "J"
      },
      {
        "name": "T",
        "description": "温度",
        "unit": "K"
      }
    ],
    "conditions": "可逆过程",
    "notes": "熵是系统无序度的量度",
    "derivation": "热力学第二定律",
    "related": [
      "univ_phy_thermo_001"
    ],
    "calculator": {
      "inputs": [
        "dQ",
        "T"
      ],
      "output": "dS"
    }
  },
  {
    "id": "univ_phy_thermo_004",
    "name": "卡诺效率",
    "category": "物理",
    "subCategory": "热力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "η = 1 - T₂/T₁",
    "latex": "\\eta = 1 - \\frac{T_2}{T_1}",
    "variables": [
      {
        "name": "η",
        "description": "热机效率",
        "unit": ""
      },
      {
        "name": "T₁",
        "description": "高温热源温度",
        "unit": "K"
      },
      {
        "name": "T₂",
        "description": "低温热源温度",
        "unit": "K"
      }
    ],
    "conditions": "卡诺循环",
    "notes": "理想热机的最大效率",
    "derivation": "卡诺定理",
    "related": [
      "univ_phy_thermo_003"
    ],
    "calculator": {
      "inputs": [
        "T1",
        "T2"
      ],
      "output": "eta"
    }
  },
  {
    "id": "astro_001",
    "name": "开普勒第一定律（椭圆轨道定律）",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "必背公式",
      "定律"
    ],
    "formula": "行星轨道为椭圆，太阳位于椭圆的一个焦点上",
    "latex": "\\text{行星轨道为椭圆，太阳位于椭圆的一个焦点上}",
    "variables": [
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      },
      {
        "name": "b",
        "description": "轨道半短轴",
        "unit": "m"
      },
      {
        "name": "e",
        "description": "偏心率",
        "unit": "0 ≤ e < 1"
      },
      {
        "name": "r",
        "description": "距离",
        "unit": "m"
      },
      {
        "name": "f",
        "description": "真近点角",
        "unit": "rad"
      }
    ],
    "conditions": "二体问题，中心天体质量远大于轨道天体",
    "notes": "开普勒第一定律描述了行星的轨道形状。椭圆方程：r = a(1-e²)/(1+e·cos f)，其中e = √(1-b²/a²)",
    "derivation": "由牛顿万有引力定律和角动量守恒推导得出",
    "related": [
      "high_phy_008",
      "astro_002",
      "astro_003"
    ]
  },
  {
    "id": "astro_002",
    "name": "开普勒第二定律（面积定律）",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "必背公式",
      "定律"
    ],
    "formula": "dA/dt = h/2 = 常数，或 r²(dθ/dt) = h = 常数",
    "latex": "\\frac{dA}{dt} = \\frac{h}{2} = \\text{常数}, \\quad \\text{或} \\quad r^2\\frac{d\\theta}{dt} = h = \\text{常数}",
    "variables": [
      {
        "name": "A",
        "description": "扫过面积",
        "unit": "m²"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "s"
      },
      {
        "name": "h",
        "description": "比角动量（单位质量角动量）",
        "unit": "m²/s"
      },
      {
        "name": "r",
        "description": "距离",
        "unit": "m"
      },
      {
        "name": "θ",
        "description": "极角",
        "unit": "rad"
      }
    ],
    "conditions": "二体问题，中心力场",
    "notes": "开普勒第二定律说明：行星与太阳的连线在相等时间内扫过相等的面积。这是角动量守恒的体现。在近日点速度最大，在远日点速度最小",
    "derivation": "由角动量守恒定律推导：L = mr²(dθ/dt) = 常数，其中L为角动量，m为质量",
    "related": [
      "astro_001",
      "astro_003",
      "high_phy_007"
    ]
  },
  {
    "id": "astro_003",
    "name": "开普勒第三定律（调和定律）",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "必背公式",
      "定律"
    ],
    "formula": "T²/a³ = 4π²/(G(M+m)) ≈ 4π²/(GM)",
    "latex": "\\frac{T^2}{a^3} = \\frac{4\\pi^2}{G(M+m)} \\approx \\frac{4\\pi^2}{GM}",
    "variables": [
      {
        "name": "T",
        "description": "轨道周期",
        "unit": "s"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      },
      {
        "name": "m",
        "description": "轨道天体质量",
        "unit": "kg"
      }
    ],
    "conditions": "椭圆轨道，当M >> m时可简化为T²/a³ = 4π²/(GM)",
    "notes": "行星公转周期的平方与轨道半长轴的立方成正比。这是万有引力定律的直接结果。精确形式包含(M+m)，当中心天体质量远大于轨道天体时，可忽略m",
    "derivation": "由万有引力定律、角动量守恒和能量守恒联合推导",
    "related": [
      "high_phy_008",
      "astro_001",
      "astro_002"
    ],
    "calculator": {
      "inputs": [
        "a",
        "M"
      ],
      "output": "T"
    }
  },
  {
    "id": "astro_004",
    "name": "圆形轨道速度",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "v = √(GM/r)",
    "latex": "v = \\sqrt{\\frac{GM}{r}}",
    "variables": [
      {
        "name": "v",
        "description": "轨道速度",
        "unit": "m/s"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      },
      {
        "name": "r",
        "description": "轨道半径",
        "unit": "m"
      }
    ],
    "conditions": "圆形轨道",
    "notes": "圆形轨道速度公式。轨道速度只与中心天体质量和轨道半径有关，与轨道天体质量无关",
    "derivation": "由万有引力等于向心力：GMm/r² = mv²/r，得 v = √(GM/r)",
    "related": [
      "high_phy_007",
      "astro_005",
      "astro_006"
    ],
    "calculator": {
      "inputs": [
        "M",
        "r"
      ],
      "output": "v"
    }
  },
  {
    "id": "astro_005",
    "name": "椭圆轨道速度（一般形式）",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "v² = GM(2/r - 1/a)",
    "latex": "v^2 = GM\\left(\\frac{2}{r} - \\frac{1}{a}\\right)",
    "variables": [
      {
        "name": "v",
        "description": "轨道速度",
        "unit": "m/s"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      },
      {
        "name": "r",
        "description": "当前距离",
        "unit": "m"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      }
    ],
    "conditions": "椭圆轨道",
    "notes": "活力公式（vis-viva equation），适用于任意圆锥曲线轨道。当r = a（圆形轨道）时，退化为v = √(GM/r)。在近日点(r = a(1-e))速度最大，在远日点(r = a(1+e))速度最小",
    "derivation": "由轨道能量守恒和角动量守恒推导",
    "related": [
      "astro_004",
      "astro_006",
      "astro_007"
    ],
    "calculator": {
      "inputs": [
        "M",
        "r",
        "a"
      ],
      "output": "v"
    }
  },
  {
    "id": "astro_006",
    "name": "逃逸速度",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "vₑ = √(2GM/r) = √2 · v₀",
    "latex": "v_e = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} \\cdot v_0",
    "variables": [
      {
        "name": "vₑ",
        "description": "逃逸速度",
        "unit": "m/s"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      },
      {
        "name": "r",
        "description": "距离中心天体的距离",
        "unit": "m"
      },
      {
        "name": "v₀",
        "description": "该距离处的圆形轨道速度",
        "unit": "m/s"
      }
    ],
    "conditions": "从距离r处逃逸到无穷远",
    "notes": "逃逸速度是使物体能够摆脱中心天体引力束缚的最小速度。等于该距离处圆形轨道速度的√2倍。当速度大于逃逸速度时，轨道为双曲线",
    "derivation": "由能量守恒：动能 = 引力势能，即(1/2)mv² = GMm/r，得 v = √(2GM/r)",
    "related": [
      "astro_004",
      "astro_005",
      "astro_007"
    ],
    "calculator": {
      "inputs": [
        "M",
        "r"
      ],
      "output": "vₑ"
    }
  },
  {
    "id": "astro_007",
    "name": "轨道总能量",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "E = -GMm/(2a) = (1/2)mv² - GMm/r",
    "latex": "E = -\\frac{GMm}{2a} = \\frac{1}{2}mv^2 - \\frac{GMm}{r}",
    "variables": [
      {
        "name": "E",
        "description": "轨道总能量（单位质量能量为ε = E/m）",
        "unit": "J"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      },
      {
        "name": "m",
        "description": "轨道天体质量",
        "unit": "kg"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      },
      {
        "name": "v",
        "description": "速度",
        "unit": "m/s"
      },
      {
        "name": "r",
        "description": "距离",
        "unit": "m"
      }
    ],
    "conditions": "闭合轨道（椭圆，圆形）",
    "notes": "轨道总能量为负值，说明是束缚轨道。圆形轨道时a = r，E = -GMm/(2r)。能量仅取决于半长轴a，与偏心率e无关。当E = 0时为抛物线轨道，E > 0时为双曲线轨道",
    "derivation": "由能量守恒：E = 动能 + 势能 = (1/2)mv² - GMm/r。结合活力公式可得 E = -GMm/(2a)",
    "related": [
      "astro_005",
      "astro_006",
      "astro_008"
    ]
  },
  {
    "id": "astro_008",
    "name": "比角动量（单位质量角动量）",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "h = r × v = r²(dθ/dt) = √(GMp) = √(GMa(1-e²))",
    "latex": "h = |\\mathbf{r} \\times \\mathbf{v}| = r^2\\frac{d\\theta}{dt} = \\sqrt{GMp} = \\sqrt{GMa(1-e^2)}",
    "variables": [
      {
        "name": "h",
        "description": "比角动量",
        "unit": "m²/s"
      },
      {
        "name": "r",
        "description": "位置矢量",
        "unit": "m"
      },
      {
        "name": "v",
        "description": "速度矢量",
        "unit": "m/s"
      },
      {
        "name": "θ",
        "description": "极角",
        "unit": "rad"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      },
      {
        "name": "p",
        "description": "半正焦弦（半通径）",
        "unit": "m"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      },
      {
        "name": "e",
        "description": "偏心率",
        "unit": ""
      }
    ],
    "conditions": "任意轨道",
    "notes": "比角动量h在中心力场中守恒。p = a(1-e²)为半正焦弦（半通径）。对于圆形轨道，e = 0，h = √(GMa)",
    "derivation": "角动量守恒：L = mr × v = mh = 常数。由轨道几何关系可得 h = √(GMp)",
    "related": [
      "astro_002",
      "astro_003",
      "astro_007"
    ]
  },
  {
    "id": "astro_009",
    "name": "轨道偏心率",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "e = √(1 - (b²/a²)) = √(1 - (h²/(GMa)))",
    "latex": "e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{h^2}{GMa}}",
    "variables": [
      {
        "name": "e",
        "description": "偏心率",
        "unit": "0 ≤ e < 1（椭圆）"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      },
      {
        "name": "b",
        "description": "轨道半短轴",
        "unit": "m"
      },
      {
        "name": "h",
        "description": "比角动量",
        "unit": "m²/s"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      }
    ],
    "conditions": "椭圆轨道：0 ≤ e < 1，圆形：e = 0，抛物线：e = 1，双曲线：e > 1",
    "notes": "偏心率描述轨道的扁平程度。e = 0为圆形，e接近1为极扁椭圆。地球轨道e ≈ 0.0167，水星轨道e ≈ 0.206",
    "derivation": "由椭圆几何关系：b² = a²(1-e²)，结合角动量公式可得",
    "related": [
      "astro_001",
      "astro_008"
    ]
  },
  {
    "id": "astro_010",
    "name": "近日点和远日点距离",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "r_peri = a(1-e), r_apo = a(1+e)",
    "latex": "r_{\\text{peri}} = a(1-e), \\quad r_{\\text{apo}} = a(1+e)",
    "variables": [
      {
        "name": "r_peri",
        "description": "近日点距离",
        "unit": "m"
      },
      {
        "name": "r_apo",
        "description": "远日点距离",
        "unit": "m"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      },
      {
        "name": "e",
        "description": "偏心率",
        "unit": ""
      }
    ],
    "conditions": "椭圆轨道",
    "notes": "近日点（periapsis）是轨道上距离中心最近的点，远日点（apoapsis）是距离最远的点。半长轴 a = (r_peri + r_apo)/2",
    "derivation": "由椭圆极坐标方程 r = a(1-e²)/(1+e·cos f)，当f = 0时得近日点，f = π时得远日点",
    "related": [
      "astro_001",
      "astro_005",
      "astro_009"
    ]
  },
  {
    "id": "astro_011",
    "name": "视星等与绝对星等关系",
    "category": "物理",
    "subCategory": "天文学-观测",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "m - M = 5lg(d) - 5",
    "latex": "m - M = 5\\lg(d) - 5",
    "variables": [
      {
        "name": "m",
        "description": "视星等",
        "unit": "等"
      },
      {
        "name": "M",
        "description": "绝对星等",
        "unit": "等"
      },
      {
        "name": "d",
        "description": "距离",
        "unit": "pc（秒差距）"
      }
    ],
    "conditions": "d以秒差距(pc)为单位",
    "notes": "距离模数公式。视星等m是观测到的亮度，绝对星等M是距离10 pc处的视星等。星等越小，亮度越大。每差5个星等，亮度差100倍",
    "derivation": "由亮度与距离平方反比关系和对数定义推导",
    "related": [
      "astro_012",
      "astro_013"
    ],
    "calculator": {
      "inputs": [
        "m",
        "d"
      ],
      "output": "M"
    }
  },
  {
    "id": "astro_012",
    "name": "距离模数",
    "category": "物理",
    "subCategory": "天文学-观测",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "μ = m - M = 5lg(d/pc) - 5",
    "latex": "\\mu = m - M = 5\\lg(d/\\text{pc}) - 5",
    "variables": [
      {
        "name": "μ",
        "description": "距离模数",
        "unit": "等"
      },
      {
        "name": "m",
        "description": "视星等",
        "unit": "等"
      },
      {
        "name": "M",
        "description": "绝对星等",
        "unit": "等"
      },
      {
        "name": "d",
        "description": "距离",
        "unit": "pc（秒差距）"
      }
    ],
    "conditions": "d以秒差距为单位",
    "notes": "距离模数μ = m - M，用于通过视星等和绝对星等确定距离，或通过距离确定绝对星等",
    "derivation": "由视星等与绝对星等关系式",
    "related": [
      "astro_011",
      "astro_013"
    ]
  },
  {
    "id": "astro_013",
    "name": "视差与距离关系",
    "category": "物理",
    "subCategory": "天文学-观测",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "d = 1/π",
    "latex": "d = \\frac{1}{\\pi}",
    "variables": [
      {
        "name": "d",
        "description": "距离",
        "unit": "pc（秒差距）"
      },
      {
        "name": "π",
        "description": "周年视差",
        "unit": "角秒(arcsec)"
      }
    ],
    "conditions": "π以角秒为单位，d以秒差距为单位",
    "notes": "当视差π = 1角秒时，距离d = 1秒差距(pc)。1 pc = 3.086×10¹⁶ m = 3.26 光年。这是测量恒星距离最基本的方法",
    "derivation": "由三角视差定义：当基线为1 AU，视差角为1角秒时，距离定义为1秒差距",
    "related": [
      "astro_011",
      "astro_012"
    ],
    "calculator": {
      "inputs": [
        "π"
      ],
      "output": "d"
    }
  },
  {
    "id": "astro_014",
    "name": "光度与亮度关系",
    "category": "物理",
    "subCategory": "天文学-观测",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "F = L/(4πd²)",
    "latex": "F = \\frac{L}{4\\pi d^2}",
    "variables": [
      {
        "name": "F",
        "description": "能流（观测到的亮度）",
        "unit": "W/m²"
      },
      {
        "name": "L",
        "description": "光度（总辐射功率）",
        "unit": "W"
      },
      {
        "name": "d",
        "description": "距离",
        "unit": "m"
      }
    ],
    "conditions": "各向同性辐射",
    "notes": "光度L是恒星的总辐射功率，能流F是单位面积接收到的功率。由于能量在球面上扩散，F与距离的平方成反比",
    "derivation": "由能量守恒：总功率L在距离d处的球面(4πd²)上均匀分布，因此 F = L/(4πd²)",
    "related": [
      "astro_011",
      "astro_012"
    ]
  },
  {
    "id": "astro_015",
    "name": "星等与亮度关系",
    "category": "物理",
    "subCategory": "天文学-观测",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "m₁ - m₂ = -2.5lg(F₁/F₂)",
    "latex": "m_1 - m_2 = -2.5\\lg\\left(\\frac{F_1}{F_2}\\right)",
    "variables": [
      {
        "name": "m₁, m₂",
        "description": "视星等",
        "unit": "等"
      },
      {
        "name": "F₁, F₂",
        "description": "能流（亮度）",
        "unit": "W/m²或任意单位"
      }
    ],
    "conditions": "使用相同的观测波段",
    "notes": "星等系统：星等每差5等，亮度差100倍（10²倍）。因此每差1等，亮度比约为2.512倍（100^(1/5)）。星等越小，亮度越大",
    "derivation": "由星等定义：m = -2.5lg(F/F₀) + 常数，其中F₀为参考亮度",
    "related": [
      "astro_011",
      "astro_014"
    ]
  },
  {
    "id": "astro_016",
    "name": "多普勒效应（径向速度）",
    "category": "物理",
    "subCategory": "天文学-观测",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "v_r/c = (λ_obs - λ_rest)/λ_rest = z",
    "latex": "\\frac{v_r}{c} = \\frac{\\lambda_{\\text{obs}} - \\lambda_{\\text{rest}}}{\\lambda_{\\text{rest}}} = z",
    "variables": [
      {
        "name": "v_r",
        "description": "径向速度（沿视线方向）",
        "unit": "m/s"
      },
      {
        "name": "c",
        "description": "光速",
        "unit": "3×10⁸ m/s"
      },
      {
        "name": "λ_obs",
        "description": "观测到的波长",
        "unit": "m"
      },
      {
        "name": "λ_rest",
        "description": "静止波长（实验室值）",
        "unit": "m"
      },
      {
        "name": "z",
        "description": "红移（z > 0为红移，z < 0为蓝移）",
        "unit": ""
      }
    ],
    "conditions": "非相对论近似（v_r << c）",
    "notes": "当v_r << c时，z ≈ v_r/c。当速度接近光速时，需要使用相对论多普勒效应：z = √((1+β)/(1-β)) - 1，其中β = v_r/c",
    "derivation": "由多普勒效应：当源远离观测者时，波长变长（红移）；当源靠近时，波长变短（蓝移）",
    "related": [
      "astro_017"
    ]
  },
  {
    "id": "astro_017",
    "name": "相对论多普勒效应",
    "category": "物理",
    "subCategory": "天文学-观测",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "z = √((1+β)/(1-β)) - 1, 其中β = v_r/c",
    "latex": "z = \\sqrt{\\frac{1+\\beta}{1-\\beta}} - 1, \\quad \\text{其中}\\quad \\beta = \\frac{v_r}{c}",
    "variables": [
      {
        "name": "z",
        "description": "红移",
        "unit": ""
      },
      {
        "name": "β",
        "description": "速度与光速的比值",
        "unit": ""
      },
      {
        "name": "v_r",
        "description": "径向速度",
        "unit": "m/s"
      },
      {
        "name": "c",
        "description": "光速",
        "unit": "3×10⁸ m/s"
      }
    ],
    "conditions": "任意速度",
    "notes": "相对论多普勒效应的精确公式。当β << 1时，退化为z ≈ β = v_r/c。当β接近1时（接近光速），红移会非常大",
    "derivation": "由狭义相对论推导，考虑时间膨胀和长度收缩",
    "related": [
      "astro_016"
    ]
  },
  {
    "id": "astro_018",
    "name": "哈勃定律",
    "category": "物理",
    "subCategory": "天文学-宇宙学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式",
      "定律"
    ],
    "formula": "v = H₀d",
    "latex": "v = H_0 d",
    "variables": [
      {
        "name": "v",
        "description": "退行速度",
        "unit": "km/s"
      },
      {
        "name": "H₀",
        "description": "哈勃常数",
        "unit": "约70 km/s/Mpc"
      },
      {
        "name": "d",
        "description": "距离",
        "unit": "Mpc（百万秒差距）"
      }
    ],
    "conditions": "大尺度上，宇宙均匀膨胀",
    "notes": "哈勃定律表明宇宙正在膨胀，星系退行速度与距离成正比。H₀的当前最佳估计值约为70 km/s/Mpc。这导致宇宙学红移：z = H₀d/c（非相对论近似）",
    "derivation": "由观测发现，基于多普勒效应和距离测量",
    "related": [
      "astro_016",
      "astro_017"
    ]
  },
  {
    "id": "astro_019",
    "name": "史瓦西半径（黑洞视界）",
    "category": "物理",
    "subCategory": "天文学-相对论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "R_s = 2GM/c²",
    "latex": "R_s = \\frac{2GM}{c^2}",
    "variables": [
      {
        "name": "R_s",
        "description": "史瓦西半径",
        "unit": "m"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "质量",
        "unit": "kg"
      },
      {
        "name": "c",
        "description": "光速",
        "unit": "3×10⁸ m/s"
      }
    ],
    "conditions": "非旋转、不带电的黑洞",
    "notes": "史瓦西半径是黑洞的视界半径。当物体压缩到这个半径以内时，即使光也无法逃逸。太阳的史瓦西半径约3 km，地球的约9 mm",
    "derivation": "由广义相对论的史瓦西度规推导，使逃逸速度等于光速",
    "related": [
      "astro_006"
    ],
    "calculator": {
      "inputs": [
        "M"
      ],
      "output": "R_s"
    }
  },
  {
    "id": "astro_020",
    "name": "洛希极限（潮汐瓦解半径）",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "d_Roche ≈ 2.456 R_p (ρ_p/ρ_s)^(1/3)",
    "latex": "d_{\\text{Roche}} \\approx 2.456 R_p \\left(\\frac{\\rho_p}{\\rho_s}\\right)^{1/3}",
    "variables": [
      {
        "name": "d_Roche",
        "description": "洛希极限",
        "unit": "m"
      },
      {
        "name": "R_p",
        "description": "主星半径",
        "unit": "m"
      },
      {
        "name": "ρ_p",
        "description": "主星密度",
        "unit": "kg/m³"
      },
      {
        "name": "ρ_s",
        "description": "卫星密度",
        "unit": "kg/m³"
      }
    ],
    "conditions": "刚体卫星，轨道周期远大于卫星自转周期",
    "notes": "洛希极限是卫星能够稳定存在而不被主星潮汐力撕碎的最小距离。当卫星进入洛希极限内时，会被潮汐力瓦解。对于流体卫星，系数约为2.456；对于刚体，系数约为1.260",
    "derivation": "由潮汐力与卫星自身引力平衡条件推导",
    "related": [
      "astro_004"
    ]
  },
  {
    "id": "astro_021",
    "name": "开普勒方程",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "M = E - e·sin E",
    "latex": "M = E - e\\sin E",
    "variables": [
      {
        "name": "M",
        "description": "平近点角",
        "unit": "rad"
      },
      {
        "name": "E",
        "description": "偏近点角",
        "unit": "rad"
      },
      {
        "name": "e",
        "description": "偏心率",
        "unit": "0 ≤ e < 1"
      }
    ],
    "conditions": "椭圆轨道，0 ≤ e < 1",
    "notes": "开普勒方程是连接平近点角M和偏近点角E的超越方程。平近点角M = n(t - t₀)，其中n为平均角速度，t₀为过近地点时刻。该方程无法用初等函数求解，通常用迭代法（如牛顿法）求解E",
    "derivation": "由椭圆轨道运动学和几何关系推导。平近点角是假设天体以平均角速度运动时的角度，偏近点角是辅助圆上对应的角度",
    "related": [
      "astro_001",
      "astro_022",
      "astro_023"
    ],
    "calculator": {
      "inputs": [
        "M",
        "e"
      ],
      "output": "E"
    }
  },
  {
    "id": "astro_022",
    "name": "偏近点角与轨道半径的关系",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "r = a(1 - e·cos E)",
    "latex": "r = a(1 - e\\cos E)",
    "variables": [
      {
        "name": "r",
        "description": "轨道半径（距离）",
        "unit": "m"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      },
      {
        "name": "e",
        "description": "偏心率",
        "unit": "0 ≤ e < 1"
      },
      {
        "name": "E",
        "description": "偏近点角",
        "unit": "rad"
      }
    ],
    "conditions": "椭圆轨道，0 ≤ e < 1",
    "notes": "用偏近点角表示轨道半径的公式。当E = 0时，r = a(1-e)为近地点距离；当E = π时，r = a(1+e)为远地点距离。这是椭圆轨道参数方程的一种形式",
    "derivation": "由椭圆几何和辅助圆方法推导。偏近点角E是辅助圆上对应的角度，通过几何投影关系得到轨道半径",
    "related": [
      "astro_001",
      "astro_021",
      "astro_023"
    ],
    "calculator": {
      "inputs": [
        "a",
        "e",
        "E"
      ],
      "output": "r"
    }
  },
  {
    "id": "astro_023",
    "name": "偏近点角与真近点角的转换关系",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "tan(f/2) = √((1+e)/(1-e))·tan(E/2)",
    "latex": "\\tan\\frac{f}{2} = \\sqrt{\\frac{1+e}{1-e}}\\cdot\\tan\\frac{E}{2}",
    "variables": [
      {
        "name": "f",
        "description": "真近点角",
        "unit": "rad"
      },
      {
        "name": "E",
        "description": "偏近点角",
        "unit": "rad"
      },
      {
        "name": "e",
        "description": "偏心率",
        "unit": "0 ≤ e < 1"
      }
    ],
    "conditions": "椭圆轨道，0 ≤ e < 1",
    "notes": "真近点角f是从近地点到当前位置的角度，偏近点角E是辅助圆上对应的角度。该公式用于在两者之间转换。当e = 0（圆形轨道）时，f = E",
    "derivation": "由椭圆几何和三角恒等式推导。通过辅助圆方法和半角公式得到转换关系",
    "related": [
      "astro_001",
      "astro_021",
      "astro_022"
    ],
    "calculator": {
      "inputs": [
        "E",
        "e"
      ],
      "output": "f"
    }
  },
  {
    "id": "astro_024",
    "name": "偏近点角的坐标表示",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "x = a(cos E - e), y = b·sin E",
    "latex": "x = a(\\cos E - e), \\quad y = b\\sin E",
    "variables": [
      {
        "name": "x, y",
        "description": "辅助圆坐标系中的坐标",
        "unit": "m"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      },
      {
        "name": "b",
        "description": "轨道半短轴",
        "unit": "m"
      },
      {
        "name": "e",
        "description": "偏心率",
        "unit": "0 ≤ e < 1"
      },
      {
        "name": "E",
        "description": "偏近点角",
        "unit": "rad"
      }
    ],
    "conditions": "椭圆轨道，0 ≤ e < 1，坐标系原点在椭圆中心",
    "notes": "在辅助圆坐标系中，偏近点角E对应的坐标。x轴沿椭圆长轴方向，y轴沿短轴方向。这是椭圆参数方程的标准形式，其中E为参数。当E = 0时，位于近地点；当E = π时，位于远地点",
    "derivation": "由椭圆参数方程推导。偏近点角E是辅助圆（半径为a的圆）上的角度，通过几何投影得到椭圆上的坐标",
    "related": [
      "astro_001",
      "astro_021",
      "astro_022",
      "high_geo_012"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "e",
        "E"
      ],
      "output": "x, y"
    }
  },
  {
    "id": "astro_025",
    "name": "平近点角定义",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "M = n(t - t₀)",
    "latex": "M = n(t - t_0)",
    "variables": [
      {
        "name": "M",
        "description": "平近点角",
        "unit": "rad"
      },
      {
        "name": "n",
        "description": "平均角速度（平运动角速度）",
        "unit": "rad/s"
      },
      {
        "name": "t",
        "description": "当前时刻",
        "unit": "s"
      },
      {
        "name": "t₀",
        "description": "过近地点时刻（历元）",
        "unit": "s"
      }
    ],
    "conditions": "椭圆轨道",
    "notes": "平近点角是假设天体以平均角速度n做匀速圆周运动时，从近地点起算的角度。它是时间的线性函数，与偏近点角E通过开普勒方程M = E - e·sin E关联",
    "derivation": "由开普勒第三定律和平均角速度定义推导。平均角速度n = 2π/T，其中T为轨道周期",
    "related": [
      "astro_003",
      "astro_021",
      "astro_026"
    ],
    "calculator": {
      "inputs": [
        "n",
        "t",
        "t0"
      ],
      "output": "M"
    }
  },
  {
    "id": "astro_026",
    "name": "平均角速度",
    "category": "物理",
    "subCategory": "天文学-天体力学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "n = 2π/T = √(GM/a³)",
    "latex": "n = \\frac{2\\pi}{T} = \\sqrt{\\frac{GM}{a^3}}",
    "variables": [
      {
        "name": "n",
        "description": "平均角速度（平运动角速度）",
        "unit": "rad/s"
      },
      {
        "name": "T",
        "description": "轨道周期",
        "unit": "s"
      },
      {
        "name": "G",
        "description": "万有引力常数",
        "unit": "6.67×10⁻¹¹ N·m²/kg²"
      },
      {
        "name": "M",
        "description": "中心天体质量",
        "unit": "kg"
      },
      {
        "name": "a",
        "description": "轨道半长轴",
        "unit": "m"
      }
    ],
    "conditions": "椭圆轨道，M >> m（中心天体质量远大于轨道天体）",
    "notes": "平均角速度是平近点角的变化率。第一个等式是定义式，第二个等式由开普勒第三定律T²/a³ = 4π²/(GM)推导得出。平均角速度只与中心天体质量和轨道半长轴有关",
    "derivation": "由开普勒第三定律T²/a³ = 4π²/(GM)和平均角速度定义n = 2π/T推导：n² = (2π/T)² = 4π²/T² = 4π²/(a³·4π²/(GM)) = GM/a³，因此n = √(GM/a³)",
    "related": [
      "astro_003",
      "astro_025"
    ],
    "calculator": {
      "inputs": [
        "T"
      ],
      "output": "n"
    }
  }
];

module.exports = formulas;
