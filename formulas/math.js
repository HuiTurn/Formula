// 数学公式数据
const formulas = [
  {
    "id": "math_001",
    "name": "勾股定理",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "a² + b² = c²",
    "latex": "a^2 + b^2 = c^2",
    "variables": [
      {
        "name": "a",
        "description": "直角边a的长度",
        "unit": "长度单位"
      },
      {
        "name": "b",
        "description": "直角边b的长度",
        "unit": "长度单位"
      },
      {
        "name": "c",
        "description": "斜边c的长度",
        "unit": "长度单位"
      }
    ],
    "conditions": "适用于直角三角形",
    "notes": "在直角三角形中，两直角边的平方和等于斜边的平方",
    "derivation": "可以通过面积法或相似三角形证明",
    "related": [
      "math_002",
      "math_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "c"
    }
  },
  {
    "id": "math_002",
    "name": "一元二次方程求根公式",
    "category": "数学",
    "subCategory": "代数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "x = (-b ± √(b²-4ac)) / 2a",
    "latex": "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}",
    "variables": [
      {
        "name": "a",
        "description": "二次项系数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "一次项系数",
        "unit": ""
      },
      {
        "name": "c",
        "description": "常数项",
        "unit": ""
      }
    ],
    "conditions": "a ≠ 0，且判别式 Δ = b²-4ac ≥ 0",
    "notes": "当 Δ < 0 时，方程无实数解。\n\n极限情形：当 a→0 时，方程 ax²+bx+c=0 退化为一次方程 bx+c=0，因此 x = -c/b（b≠0）。\n\n也可通过洛必达法则验证：对 x = (-b+√(b²-4ac))/(2a) 在 a→0 时应用洛必达法则（设 b>0），分子对 a 求导得 -2c/√(b²-4ac)，分母对 a 求导得 2，因此 x = -c/√(b²-4ac)，当 a=0 时 x = -c/b",
    "derivation": "通过配方法推导得出。\n\n极限情形推导：\n\n方法一（直接取极限）：当 a→0 时，ax²+bx+c=0 中 ax² 项可忽略，方程退化为 bx+c=0，直接得到 x = -c/b。\n\n方法二（洛必达法则）：对 x = (-b+√(b²-4ac))/(2a) 在 a→0 时应用洛必达法则，d/da[√(b²-4ac)] = -2c/√(b²-4ac)，d/da[2a] = 2，因此 x = -c/√(b²-4ac)，当 a=0 时 x = -c/b。\n\n方法三（泰勒展开）：√(b²-4ac) = b√(1-4ac/b²) = b(1-2ac/b²+O(a²))，代入得 x = -c/b。\n\n三种方法结果一致",
    "related": [
      "math_001"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c"
      ],
      "output": "x"
    }
  },
  {
    "id": "math_002b",
    "name": "等比数列求和公式",
    "category": "数学",
    "subCategory": "代数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "S = a₁(1-qⁿ)/(1-q)",
    "latex": "S = a_1\\frac{1-q^n}{1-q}",
    "variables": [
      {
        "name": "S",
        "description": "前n项和",
        "unit": ""
      },
      {
        "name": "a₁",
        "description": "首项",
        "unit": ""
      },
      {
        "name": "q",
        "description": "公比",
        "unit": ""
      },
      {
        "name": "n",
        "description": "项数",
        "unit": ""
      }
    ],
    "conditions": "q ≠ 1",
    "notes": "等比数列前n项和公式。极限情形：当 q→1 时，由洛必达法则可得 S = a₁n·q^(n-1)，代入 q=1 得极限 S = a₁n（此时数列退化为等差数列，S = na₁）",
    "derivation": "等比数列求和：S = a₁ + a₁q + a₁q² + ... + a₁q^(n-1) = a₁(1-qⁿ)/(1-q)。极限情形推导：当 q→1 时，对 S = a₁(1-qⁿ)/(1-q) 应用洛必达法则，分子对 q 求导得 a₁(-n·q^(n-1))，分母对 q 求导得 -1，因此 S = a₁n·q^(n-1)，当 q=1 时 S = a₁n",
    "related": [
      "math_002"
    ],
    "calculator": {
      "inputs": [
        "a1",
        "q",
        "n"
      ],
      "output": "S"
    }
  },
  {
    "id": "math_003",
    "name": "圆的面积公式",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式"
    ],
    "formula": "S = πr²",
    "latex": "S = \\pi r^2",
    "variables": [
      {
        "name": "S",
        "description": "圆的面积",
        "unit": "面积单位"
      },
      {
        "name": "r",
        "description": "圆的半径",
        "unit": "长度单位"
      },
      {
        "name": "π",
        "description": "圆周率",
        "unit": "约等于3.14159"
      }
    ],
    "conditions": "r > 0",
    "notes": "π 是圆周率，约等于 3.14159",
    "derivation": "通过极限思想，将圆分割成无数个小扇形推导",
    "related": [
      "math_001"
    ],
    "calculator": {
      "inputs": [
        "r"
      ],
      "output": "S"
    }
  },
  {
    "id": "primary_math_001",
    "name": "分数加法",
    "category": "数学",
    "subCategory": "分数运算",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "a/b + c/d = (ad + bc) / bd",
    "latex": "\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}",
    "variables": [
      {
        "name": "a, c",
        "description": "分子",
        "unit": ""
      },
      {
        "name": "b, d",
        "description": "分母",
        "unit": ""
      }
    ],
    "conditions": "b ≠ 0, d ≠ 0",
    "notes": "异分母分数相加，先通分再相加",
    "derivation": "分数运算规则",
    "related": [
      "primary_math_002"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c",
        "d"
      ],
      "output": "result"
    }
  },
  {
    "id": "primary_math_002",
    "name": "分数乘法",
    "category": "数学",
    "subCategory": "分数运算",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "a/b × c/d = ac / bd",
    "latex": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}",
    "variables": [
      {
        "name": "a, c",
        "description": "分子",
        "unit": ""
      },
      {
        "name": "b, d",
        "description": "分母",
        "unit": ""
      }
    ],
    "conditions": "b ≠ 0, d ≠ 0",
    "notes": "分数相乘，分子乘分子，分母乘分母",
    "derivation": "分数运算规则",
    "related": [
      "primary_math_001"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c",
        "d"
      ],
      "output": "result"
    }
  },
  {
    "id": "primary_math_003",
    "name": "百分数转小数",
    "category": "数学",
    "subCategory": "百分数",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "a% = a / 100",
    "latex": "a\\% = \\frac{a}{100}",
    "variables": [
      {
        "name": "a",
        "description": "百分数",
        "unit": "%"
      }
    ],
    "conditions": "",
    "notes": "百分数除以100得到小数",
    "derivation": "百分数定义",
    "related": [
      "primary_math_004"
    ],
    "calculator": {
      "inputs": [
        "a"
      ],
      "output": "decimal"
    }
  },
  {
    "id": "primary_math_004",
    "name": "小数转百分数",
    "category": "数学",
    "subCategory": "百分数",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "a = a × 100%",
    "latex": "a = a \\times 100\\%",
    "variables": [
      {
        "name": "a",
        "description": "小数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "小数乘以100得到百分数",
    "derivation": "百分数定义",
    "related": [
      "primary_math_003"
    ],
    "calculator": {
      "inputs": [
        "a"
      ],
      "output": "percent"
    }
  },
  {
    "id": "primary_math_005",
    "name": "速度公式",
    "category": "数学",
    "subCategory": "应用题",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "速度 = 路程 ÷ 时间",
    "latex": "v = \\frac{s}{t}",
    "variables": [
      {
        "name": "v",
        "description": "速度",
        "unit": "km/h 或 m/s"
      },
      {
        "name": "s",
        "description": "路程",
        "unit": "km 或 m"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "h 或 s"
      }
    ],
    "conditions": "t > 0",
    "notes": "路程除以时间等于速度",
    "derivation": "速度定义",
    "related": [
      "primary_math_006",
      "primary_math_007"
    ],
    "calculator": {
      "inputs": [
        "s",
        "t"
      ],
      "output": "v"
    }
  },
  {
    "id": "primary_math_006",
    "name": "路程公式",
    "category": "数学",
    "subCategory": "应用题",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "路程 = 速度 × 时间",
    "latex": "s = vt",
    "variables": [
      {
        "name": "s",
        "description": "路程",
        "unit": "km 或 m"
      },
      {
        "name": "v",
        "description": "速度",
        "unit": "km/h 或 m/s"
      },
      {
        "name": "t",
        "description": "时间",
        "unit": "h 或 s"
      }
    ],
    "conditions": "",
    "notes": "速度乘以时间等于路程",
    "derivation": "速度定义",
    "related": [
      "primary_math_005",
      "primary_math_007"
    ],
    "calculator": {
      "inputs": [
        "v",
        "t"
      ],
      "output": "s"
    }
  },
  {
    "id": "primary_math_007",
    "name": "时间公式",
    "category": "数学",
    "subCategory": "应用题",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "时间 = 路程 ÷ 速度",
    "latex": "t = \\frac{s}{v}",
    "variables": [
      {
        "name": "t",
        "description": "时间",
        "unit": "h 或 s"
      },
      {
        "name": "s",
        "description": "路程",
        "unit": "km 或 m"
      },
      {
        "name": "v",
        "description": "速度",
        "unit": "km/h 或 m/s"
      }
    ],
    "conditions": "v > 0",
    "notes": "路程除以速度等于时间",
    "derivation": "速度定义",
    "related": [
      "primary_math_005",
      "primary_math_006"
    ],
    "calculator": {
      "inputs": [
        "s",
        "v"
      ],
      "output": "t"
    }
  },
  {
    "id": "primary_geo_001",
    "name": "长方形周长",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "C = 2(a + b)",
    "latex": "C = 2(a + b)",
    "variables": [
      {
        "name": "C",
        "description": "周长",
        "unit": "长度单位"
      },
      {
        "name": "a",
        "description": "长",
        "unit": "长度单位"
      },
      {
        "name": "b",
        "description": "宽",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0, b > 0",
    "notes": "长方形周长等于长加宽的和乘以2",
    "derivation": "周长定义",
    "related": [
      "primary_geo_002",
      "primary_geo_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "C"
    }
  },
  {
    "id": "primary_geo_002",
    "name": "长方形面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "S = ab",
    "latex": "S = ab",
    "variables": [
      {
        "name": "S",
        "description": "面积",
        "unit": "面积单位"
      },
      {
        "name": "a",
        "description": "长",
        "unit": "长度单位"
      },
      {
        "name": "b",
        "description": "宽",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0, b > 0",
    "notes": "长方形面积等于长乘以宽",
    "derivation": "面积定义",
    "related": [
      "primary_geo_001",
      "primary_geo_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "S"
    }
  },
  {
    "id": "primary_geo_003",
    "name": "正方形周长",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "C = 4a",
    "latex": "C = 4a",
    "variables": [
      {
        "name": "C",
        "description": "周长",
        "unit": "长度单位"
      },
      {
        "name": "a",
        "description": "边长",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0",
    "notes": "正方形周长等于边长乘以4",
    "derivation": "正方形是特殊的长方形",
    "related": [
      "primary_geo_001",
      "primary_geo_004"
    ],
    "calculator": {
      "inputs": [
        "a"
      ],
      "output": "C"
    }
  },
  {
    "id": "primary_geo_004",
    "name": "正方形面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "S = a²",
    "latex": "S = a^2",
    "variables": [
      {
        "name": "S",
        "description": "面积",
        "unit": "面积单位"
      },
      {
        "name": "a",
        "description": "边长",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0",
    "notes": "正方形面积等于边长的平方",
    "derivation": "正方形是特殊的长方形",
    "related": [
      "primary_geo_002",
      "primary_geo_003"
    ],
    "calculator": {
      "inputs": [
        "a"
      ],
      "output": "S"
    }
  },
  {
    "id": "primary_geo_005",
    "name": "三角形面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "S = ½ah",
    "latex": "S = \\frac{1}{2}ah",
    "variables": [
      {
        "name": "S",
        "description": "面积",
        "unit": "面积单位"
      },
      {
        "name": "a",
        "description": "底边长",
        "unit": "长度单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0, h > 0",
    "notes": "三角形面积等于底乘以高除以2",
    "derivation": "通过长方形面积推导",
    "related": [
      "primary_geo_002"
    ],
    "calculator": {
      "inputs": [
        "a",
        "h"
      ],
      "output": "S"
    }
  },
  {
    "id": "primary_geo_006",
    "name": "平行四边形面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "S = ah",
    "latex": "S = ah",
    "variables": [
      {
        "name": "S",
        "description": "面积",
        "unit": "面积单位"
      },
      {
        "name": "a",
        "description": "底边长",
        "unit": "长度单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0, h > 0",
    "notes": "平行四边形面积等于底乘以高",
    "derivation": "通过割补法推导",
    "related": [
      "primary_geo_002",
      "primary_geo_005"
    ],
    "calculator": {
      "inputs": [
        "a",
        "h"
      ],
      "output": "S"
    }
  },
  {
    "id": "primary_geo_007",
    "name": "梯形面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "S = ½(a + b)h",
    "latex": "S = \\frac{1}{2}(a + b)h",
    "variables": [
      {
        "name": "S",
        "description": "面积",
        "unit": "面积单位"
      },
      {
        "name": "a",
        "description": "上底",
        "unit": "长度单位"
      },
      {
        "name": "b",
        "description": "下底",
        "unit": "长度单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0, b > 0, h > 0",
    "notes": "梯形面积等于上底加下底的和乘以高除以2",
    "derivation": "通过两个三角形面积推导",
    "related": [
      "primary_geo_005"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "h"
      ],
      "output": "S"
    }
  },
  {
    "id": "primary_geo_008",
    "name": "圆的周长",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "C = 2πr = πd",
    "latex": "C = 2\\pi r = \\pi d",
    "variables": [
      {
        "name": "C",
        "description": "周长",
        "unit": "长度单位"
      },
      {
        "name": "r",
        "description": "半径",
        "unit": "长度单位"
      },
      {
        "name": "d",
        "description": "直径",
        "unit": "长度单位"
      },
      {
        "name": "π",
        "description": "圆周率",
        "unit": "约等于3.14159"
      }
    ],
    "conditions": "r > 0",
    "notes": "圆的周长等于直径乘以π，或半径乘以2π",
    "derivation": "通过实验测量得出",
    "related": [
      "math_003"
    ],
    "calculator": {
      "inputs": [
        "r"
      ],
      "output": "C"
    }
  },
  {
    "id": "primary_geo_009",
    "name": "长方体体积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "V = abc",
    "latex": "V = abc",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "a",
        "description": "长",
        "unit": "长度单位"
      },
      {
        "name": "b",
        "description": "宽",
        "unit": "长度单位"
      },
      {
        "name": "c",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0, b > 0, c > 0",
    "notes": "长方体体积等于长乘以宽乘以高",
    "derivation": "体积定义",
    "related": [
      "primary_geo_010"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c"
      ],
      "output": "V"
    }
  },
  {
    "id": "primary_geo_010",
    "name": "正方体体积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "V = a³",
    "latex": "V = a^3",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "a",
        "description": "边长",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0",
    "notes": "正方体体积等于边长的立方",
    "derivation": "正方体是特殊的长方体",
    "related": [
      "primary_geo_009"
    ],
    "calculator": {
      "inputs": [
        "a"
      ],
      "output": "V"
    }
  },
  {
    "id": "unit_001",
    "name": "长度单位换算",
    "category": "数学",
    "subCategory": "单位换算",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "1千米(km) = 1000米(m) = 100000厘米(cm) = 1000000毫米(mm)",
    "latex": "1\\text{km} = 1000\\text{m} = 100000\\text{cm} = 1000000\\text{mm}",
    "variables": [
      {
        "name": "km",
        "description": "千米",
        "unit": "km"
      },
      {
        "name": "m",
        "description": "米",
        "unit": "m"
      },
      {
        "name": "cm",
        "description": "厘米",
        "unit": "cm"
      },
      {
        "name": "mm",
        "description": "毫米",
        "unit": "mm"
      }
    ],
    "conditions": "",
    "notes": "1千米=1000米，1米=100厘米，1厘米=10毫米",
    "derivation": "长度单位定义",
    "related": [
      "unit_002",
      "unit_003"
    ],
    "calculator": {
      "inputs": [
        "value",
        "fromUnit",
        "toUnit"
      ],
      "output": "result"
    }
  },
  {
    "id": "unit_002",
    "name": "面积单位换算",
    "category": "数学",
    "subCategory": "单位换算",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "1平方千米(km²) = 1000000平方米(m²) = 10000平方厘米(cm²)",
    "latex": "1\\text{km}^2 = 1000000\\text{m}^2 = 10000\\text{cm}^2",
    "variables": [
      {
        "name": "km²",
        "description": "平方千米",
        "unit": "km²"
      },
      {
        "name": "m²",
        "description": "平方米",
        "unit": "m²"
      },
      {
        "name": "cm²",
        "description": "平方厘米",
        "unit": "cm²"
      }
    ],
    "conditions": "",
    "notes": "1平方千米=1000000平方米，1平方米=10000平方厘米",
    "derivation": "面积单位定义",
    "related": [
      "unit_001",
      "unit_003"
    ],
    "calculator": {
      "inputs": [
        "value",
        "fromUnit",
        "toUnit"
      ],
      "output": "result"
    }
  },
  {
    "id": "unit_003",
    "name": "体积单位换算",
    "category": "数学",
    "subCategory": "单位换算",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "1立方米(m³) = 1000升(L) = 1000000毫升(mL)",
    "latex": "1\\text{m}^3 = 1000\\text{L} = 1000000\\text{mL}",
    "variables": [
      {
        "name": "m³",
        "description": "立方米",
        "unit": "m³"
      },
      {
        "name": "L",
        "description": "升",
        "unit": "L"
      },
      {
        "name": "mL",
        "description": "毫升",
        "unit": "mL"
      }
    ],
    "conditions": "",
    "notes": "1立方米=1000升，1升=1000毫升",
    "derivation": "体积单位定义",
    "related": [
      "unit_001",
      "unit_002"
    ],
    "calculator": {
      "inputs": [
        "value",
        "fromUnit",
        "toUnit"
      ],
      "output": "result"
    }
  },
  {
    "id": "unit_004",
    "name": "质量单位换算",
    "category": "数学",
    "subCategory": "单位换算",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "1吨(t) = 1000千克(kg) = 1000000克(g)",
    "latex": "1\\text{t} = 1000\\text{kg} = 1000000\\text{g}",
    "variables": [
      {
        "name": "t",
        "description": "吨",
        "unit": "t"
      },
      {
        "name": "kg",
        "description": "千克",
        "unit": "kg"
      },
      {
        "name": "g",
        "description": "克",
        "unit": "g"
      }
    ],
    "conditions": "",
    "notes": "1吨=1000千克，1千克=1000克",
    "derivation": "质量单位定义",
    "related": [
      "unit_001"
    ],
    "calculator": {
      "inputs": [
        "value",
        "fromUnit",
        "toUnit"
      ],
      "output": "result"
    }
  },
  {
    "id": "unit_005",
    "name": "时间单位换算",
    "category": "数学",
    "subCategory": "单位换算",
    "grade": "小学",
    "tags": [
      "基础公式",
      "必背公式"
    ],
    "formula": "1小时(h) = 60分钟(min) = 3600秒(s)",
    "latex": "1\\text{h} = 60\\text{min} = 3600\\text{s}",
    "variables": [
      {
        "name": "h",
        "description": "小时",
        "unit": "h"
      },
      {
        "name": "min",
        "description": "分钟",
        "unit": "min"
      },
      {
        "name": "s",
        "description": "秒",
        "unit": "s"
      }
    ],
    "conditions": "",
    "notes": "1小时=60分钟，1分钟=60秒",
    "derivation": "时间单位定义",
    "related": [
      "primary_math_005"
    ],
    "calculator": {
      "inputs": [
        "value",
        "fromUnit",
        "toUnit"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_001",
    "name": "完全平方公式",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "(a ± b)² = a² ± 2ab + b²",
    "latex": "(a \\pm b)^2 = a^2 \\pm 2ab + b^2",
    "variables": [
      {
        "name": "a",
        "description": "第一个数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "第二个数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "完全平方公式，展开后得到三项式",
    "derivation": "通过多项式乘法展开",
    "related": [
      "middle_alg_002",
      "middle_alg_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "sign"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_002",
    "name": "平方差公式",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "a² - b² = (a + b)(a - b)",
    "latex": "a^2 - b^2 = (a + b)(a - b)",
    "variables": [
      {
        "name": "a",
        "description": "第一个数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "第二个数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "两个数的平方差等于它们的和与差的乘积",
    "derivation": "通过因式分解得出",
    "related": [
      "middle_alg_001",
      "middle_alg_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_003",
    "name": "立方和公式",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式"
    ],
    "formula": "a³ + b³ = (a + b)(a² - ab + b²)",
    "latex": "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
    "variables": [
      {
        "name": "a",
        "description": "第一个数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "第二个数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "两个数的立方和等于它们的和与差的平方的乘积",
    "derivation": "通过因式分解得出",
    "related": [
      "middle_alg_001",
      "middle_alg_002"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_004",
    "name": "立方差公式",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式"
    ],
    "formula": "a³ - b³ = (a - b)(a² + ab + b²)",
    "latex": "a^3 - b^3 = (a - b)(a^2 + ab + b^2)",
    "variables": [
      {
        "name": "a",
        "description": "第一个数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "第二个数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "两个数的立方差等于它们的差与和的平方的乘积",
    "derivation": "通过因式分解得出",
    "related": [
      "middle_alg_001",
      "middle_alg_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_005",
    "name": "一元一次方程",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ax + b = 0，解为 x = -b/a",
    "latex": "ax + b = 0, \\quad x = -\\frac{b}{a}",
    "variables": [
      {
        "name": "a",
        "description": "一次项系数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "常数项",
        "unit": ""
      },
      {
        "name": "x",
        "description": "未知数",
        "unit": ""
      }
    ],
    "conditions": "a ≠ 0",
    "notes": "一元一次方程的标准形式",
    "derivation": "通过移项和系数化1得出",
    "related": [
      "math_002"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "x"
    }
  },
  {
    "id": "middle_alg_006",
    "name": "二元一次方程组（代入法）",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "ax + by = c, dx + ey = f",
    "latex": "\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}",
    "variables": [
      {
        "name": "a, b, c",
        "description": "第一个方程的系数",
        "unit": ""
      },
      {
        "name": "d, e, f",
        "description": "第二个方程的系数",
        "unit": ""
      },
      {
        "name": "x, y",
        "description": "未知数",
        "unit": ""
      }
    ],
    "conditions": "ae - bd ≠ 0",
    "notes": "二元一次方程组，可用代入法或加减法求解",
    "derivation": "通过消元法求解",
    "related": [
      "middle_alg_005"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_007",
    "name": "幂的乘法法则",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "aᵐ × aⁿ = aᵐ⁺ⁿ",
    "latex": "a^m \\times a^n = a^{m+n}",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "m, n",
        "description": "指数",
        "unit": ""
      }
    ],
    "conditions": "a ≠ 0",
    "notes": "同底数幂相乘，底数不变，指数相加",
    "derivation": "幂的定义",
    "related": [
      "middle_alg_008",
      "middle_alg_009"
    ],
    "calculator": {
      "inputs": [
        "a",
        "m",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_008",
    "name": "幂的除法法则",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
    "latex": "a^m \\div a^n = a^{m-n}",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "m, n",
        "description": "指数",
        "unit": ""
      }
    ],
    "conditions": "a ≠ 0",
    "notes": "同底数幂相除，底数不变，指数相减",
    "derivation": "幂的定义",
    "related": [
      "middle_alg_007",
      "middle_alg_009"
    ],
    "calculator": {
      "inputs": [
        "a",
        "m",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_009",
    "name": "幂的乘方法则",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "(aᵐ)ⁿ = aᵐⁿ",
    "latex": "(a^m)^n = a^{mn}",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "m, n",
        "description": "指数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "幂的乘方，底数不变，指数相乘",
    "derivation": "幂的定义",
    "related": [
      "middle_alg_007",
      "middle_alg_008"
    ],
    "calculator": {
      "inputs": [
        "a",
        "m",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_alg_010",
    "name": "分式加减法",
    "category": "数学",
    "subCategory": "代数",
    "grade": "初中",
    "tags": [
      "常用公式"
    ],
    "formula": "a/b ± c/d = (ad ± bc) / bd",
    "latex": "\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}",
    "variables": [
      {
        "name": "a, c",
        "description": "分子",
        "unit": ""
      },
      {
        "name": "b, d",
        "description": "分母",
        "unit": ""
      }
    ],
    "conditions": "b ≠ 0, d ≠ 0",
    "notes": "异分母分式相加减，先通分再计算",
    "derivation": "分式运算规则",
    "related": [
      "primary_math_001"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c",
        "d",
        "sign"
      ],
      "output": "result"
    }
  },
  {
    "id": "middle_geo_001",
    "name": "三角形内角和",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∠A + ∠B + ∠C = 180°",
    "latex": "\\angle A + \\angle B + \\angle C = 180^\\circ",
    "variables": [
      {
        "name": "∠A, ∠B, ∠C",
        "description": "三角形的三个内角",
        "unit": "度(°)"
      }
    ],
    "conditions": "适用于任意三角形",
    "notes": "三角形三个内角的和等于180度",
    "derivation": "通过平行线性质证明",
    "related": [
      "middle_geo_002"
    ],
    "calculator": {
      "inputs": [
        "angleA",
        "angleB"
      ],
      "output": "angleC"
    }
  },
  {
    "id": "middle_geo_002",
    "name": "三角形外角和",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式"
    ],
    "formula": "外角 = 不相邻两内角之和",
    "latex": "\\text{外角} = \\text{不相邻两内角之和}",
    "variables": [
      {
        "name": "外角",
        "description": "三角形的一个外角",
        "unit": "度(°)"
      }
    ],
    "conditions": "适用于任意三角形",
    "notes": "三角形的一个外角等于与它不相邻的两个内角的和",
    "derivation": "由三角形内角和定理推导",
    "related": [
      "middle_geo_001"
    ],
    "calculator": {
      "inputs": [
        "angle1",
        "angle2"
      ],
      "output": "exteriorAngle"
    }
  },
  {
    "id": "middle_geo_003",
    "name": "多边形内角和",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "内角和 = (n - 2) × 180°",
    "latex": "\\text{内角和} = (n - 2) \\times 180^\\circ",
    "variables": [
      {
        "name": "n",
        "description": "多边形的边数",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 3",
    "notes": "n边形的内角和等于(n-2)×180度",
    "derivation": "通过分割成三角形推导",
    "related": [
      "middle_geo_001"
    ],
    "calculator": {
      "inputs": [
        "n"
      ],
      "output": "sum"
    }
  },
  {
    "id": "middle_geo_004",
    "name": "多边形外角和",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "外角和 = 360°",
    "latex": "\\text{外角和} = 360^\\circ",
    "variables": [
      {
        "name": "n",
        "description": "多边形的边数",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 3",
    "notes": "任意多边形的外角和都等于360度",
    "derivation": "通过旋转角度推导",
    "related": [
      "middle_geo_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "sum"
    }
  },
  {
    "id": "middle_geo_005",
    "name": "扇形面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "S = (n/360) × πr² = (1/2)lr",
    "latex": "S = \\frac{n}{360} \\times \\pi r^2 = \\frac{1}{2}lr",
    "variables": [
      {
        "name": "S",
        "description": "扇形面积",
        "unit": "面积单位"
      },
      {
        "name": "n",
        "description": "圆心角度数",
        "unit": "度(°)"
      },
      {
        "name": "r",
        "description": "半径",
        "unit": "长度单位"
      },
      {
        "name": "l",
        "description": "弧长",
        "unit": "长度单位"
      }
    ],
    "conditions": "r > 0, 0° < n ≤ 360°",
    "notes": "扇形面积等于圆面积乘以圆心角比例，或等于弧长乘以半径的一半",
    "derivation": "由圆的面积公式推导",
    "related": [
      "math_003",
      "middle_geo_006"
    ],
    "calculator": {
      "inputs": [
        "n",
        "r"
      ],
      "output": "S"
    }
  },
  {
    "id": "middle_geo_006",
    "name": "扇形弧长",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "l = (n/360) × 2πr = (nπr)/180",
    "latex": "l = \\frac{n}{360} \\times 2\\pi r = \\frac{n\\pi r}{180}",
    "variables": [
      {
        "name": "l",
        "description": "弧长",
        "unit": "长度单位"
      },
      {
        "name": "n",
        "description": "圆心角度数",
        "unit": "度(°)"
      },
      {
        "name": "r",
        "description": "半径",
        "unit": "长度单位"
      }
    ],
    "conditions": "r > 0, 0° < n ≤ 360°",
    "notes": "扇形弧长等于圆周长的圆心角比例",
    "derivation": "由圆的周长公式推导",
    "related": [
      "primary_geo_008",
      "middle_geo_005"
    ],
    "calculator": {
      "inputs": [
        "n",
        "r"
      ],
      "output": "l"
    }
  },
  {
    "id": "middle_geo_007",
    "name": "圆柱体积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = πr²h",
    "latex": "V = \\pi r^2 h",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "r",
        "description": "底面半径",
        "unit": "长度单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "r > 0, h > 0",
    "notes": "圆柱体积等于底面积乘以高",
    "derivation": "由体积定义推导",
    "related": [
      "math_003",
      "middle_geo_008"
    ],
    "calculator": {
      "inputs": [
        "r",
        "h"
      ],
      "output": "V"
    }
  },
  {
    "id": "middle_geo_008",
    "name": "圆柱表面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "S = 2πr² + 2πrh = 2πr(r + h)",
    "latex": "S = 2\\pi r^2 + 2\\pi rh = 2\\pi r(r + h)",
    "variables": [
      {
        "name": "S",
        "description": "表面积",
        "unit": "面积单位"
      },
      {
        "name": "r",
        "description": "底面半径",
        "unit": "长度单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "r > 0, h > 0",
    "notes": "圆柱表面积等于两个底面积加上侧面积",
    "derivation": "由表面积定义推导",
    "related": [
      "math_003",
      "middle_geo_007"
    ],
    "calculator": {
      "inputs": [
        "r",
        "h"
      ],
      "output": "S"
    }
  },
  {
    "id": "middle_geo_009",
    "name": "圆锥体积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = (1/3)πr²h",
    "latex": "V = \\frac{1}{3}\\pi r^2 h",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "r",
        "description": "底面半径",
        "unit": "长度单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "r > 0, h > 0",
    "notes": "圆锥体积等于同底等高的圆柱体积的三分之一",
    "derivation": "通过积分或实验验证",
    "related": [
      "middle_geo_007",
      "middle_geo_010"
    ],
    "calculator": {
      "inputs": [
        "r",
        "h"
      ],
      "output": "V"
    }
  },
  {
    "id": "middle_geo_010",
    "name": "圆锥侧面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "S = πrl",
    "latex": "S = \\pi rl",
    "variables": [
      {
        "name": "S",
        "description": "侧面积",
        "unit": "面积单位"
      },
      {
        "name": "r",
        "description": "底面半径",
        "unit": "长度单位"
      },
      {
        "name": "l",
        "description": "母线长",
        "unit": "长度单位"
      }
    ],
    "conditions": "r > 0, l > 0",
    "notes": "圆锥侧面积等于π乘以半径乘以母线长",
    "derivation": "通过展开扇形推导",
    "related": [
      "middle_geo_009",
      "middle_geo_005"
    ],
    "calculator": {
      "inputs": [
        "r",
        "l"
      ],
      "output": "S"
    }
  },
  {
    "id": "middle_geo_011",
    "name": "球体积",
    "category": "数学",
    "subCategory": "几何",
    "grade": [
      "初中",
      "高中"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = (4/3)πr³",
    "latex": "V = \\frac{4}{3}\\pi r^3",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "r",
        "description": "半径",
        "unit": "长度单位"
      }
    ],
    "conditions": "r > 0",
    "notes": "球体积等于三分之四乘以π乘以半径的立方",
    "derivation": "通过积分推导",
    "related": [
      "middle_geo_012"
    ],
    "calculator": {
      "inputs": [
        "r"
      ],
      "output": "V"
    }
  },
  {
    "id": "middle_geo_012",
    "name": "球表面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": [
      "初中",
      "高中"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "S = 4πr²",
    "latex": "S = 4\\pi r^2",
    "variables": [
      {
        "name": "S",
        "description": "表面积",
        "unit": "面积单位"
      },
      {
        "name": "r",
        "description": "半径",
        "unit": "长度单位"
      }
    ],
    "conditions": "r > 0",
    "notes": "球表面积等于4π乘以半径的平方",
    "derivation": "通过积分推导",
    "related": [
      "math_003",
      "middle_geo_011"
    ],
    "calculator": {
      "inputs": [
        "r"
      ],
      "output": "S"
    }
  },
  {
    "id": "middle_geo_013",
    "name": "相似三角形性质",
    "category": "数学",
    "subCategory": "几何",
    "grade": "初中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "对应边成比例，对应角相等",
    "latex": "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}",
    "variables": [
      {
        "name": "a₁, b₁, c₁",
        "description": "第一个三角形的三边",
        "unit": "长度单位"
      },
      {
        "name": "a₂, b₂, c₂",
        "description": "第二个三角形的三边",
        "unit": "长度单位"
      }
    ],
    "conditions": "两个三角形相似",
    "notes": "相似三角形的对应边成比例，对应角相等",
    "derivation": "相似三角形定义",
    "related": [
      "math_001"
    ],
    "calculator": {
      "inputs": [
        "a1",
        "a2",
        "b1"
      ],
      "output": "b2"
    }
  },
  {
    "id": "high_func_001",
    "name": "指数函数",
    "category": "数学",
    "subCategory": "函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "y = aˣ (a > 0, a ≠ 1)",
    "latex": "y = a^x \\quad (a > 0, a \\neq 1)",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "y",
        "description": "函数值",
        "unit": ""
      }
    ],
    "conditions": "a > 0 且 a ≠ 1",
    "notes": "当 a > 1 时，函数单调递增；当 0 < a < 1 时，函数单调递减",
    "derivation": "指数函数定义",
    "related": [
      "high_func_002"
    ],
    "calculator": {
      "inputs": [
        "a",
        "x"
      ],
      "output": "y"
    }
  },
  {
    "id": "high_func_002",
    "name": "对数函数",
    "category": "数学",
    "subCategory": "函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "y = logₐx (a > 0, a ≠ 1, x > 0)",
    "latex": "y = \\log_a x \\quad (a > 0, a \\neq 1, x > 0)",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "真数",
        "unit": ""
      },
      {
        "name": "y",
        "description": "函数值",
        "unit": ""
      }
    ],
    "conditions": "a > 0 且 a ≠ 1, x > 0",
    "notes": "对数函数是指数函数的反函数",
    "derivation": "对数函数定义",
    "related": [
      "high_func_001",
      "high_func_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "x"
      ],
      "output": "y"
    }
  },
  {
    "id": "high_func_003",
    "name": "对数运算法则",
    "category": "数学",
    "subCategory": "函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "logₐ(MN) = logₐM + logₐN, logₐ(M/N) = logₐM - logₐN, logₐMⁿ = nlogₐM",
    "latex": "\\log_a(MN) = \\log_a M + \\log_a N, \\quad \\log_a(M/N) = \\log_a M - \\log_a N, \\quad \\log_a M^n = n\\log_a M",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "M, N",
        "description": "真数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "指数",
        "unit": ""
      }
    ],
    "conditions": "a > 0, a ≠ 1, M > 0, N > 0",
    "notes": "对数的乘法、除法和幂运算法则",
    "derivation": "由对数定义推导",
    "related": [
      "high_func_002"
    ],
    "calculator": {
      "inputs": [
        "operation",
        "a",
        "M",
        "N",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_func_004",
    "name": "换底公式",
    "category": "数学",
    "subCategory": "函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "logₐb = logᵢb / logᵢa",
    "latex": "\\log_a b = \\frac{\\log_c b}{\\log_c a}",
    "variables": [
      {
        "name": "a, b",
        "description": "底数和真数",
        "unit": ""
      },
      {
        "name": "c",
        "description": "新底数",
        "unit": ""
      }
    ],
    "conditions": "a > 0, a ≠ 1, b > 0, c > 0, c ≠ 1",
    "notes": "可以将任意底数的对数转换为以其他数为底的对数",
    "derivation": "由对数定义推导",
    "related": [
      "high_func_002"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_func_005",
    "name": "幂函数",
    "category": "数学",
    "subCategory": "函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "y = xⁿ",
    "latex": "y = x^n",
    "variables": [
      {
        "name": "x",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "y",
        "description": "函数值",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "当 n > 0 时，函数过原点且单调递增；当 n < 0 时，函数在第一象限单调递减",
    "derivation": "幂函数定义",
    "related": [
      "high_func_001"
    ],
    "calculator": {
      "inputs": [
        "x",
        "n"
      ],
      "output": "y"
    }
  },
  {
    "id": "high_trig_001",
    "name": "正弦函数",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "y = sin x",
    "latex": "y = \\sin x",
    "variables": [
      {
        "name": "x",
        "description": "角度（弧度）",
        "unit": "rad"
      },
      {
        "name": "y",
        "description": "函数值",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "周期为 2π，值域为 [-1, 1]",
    "derivation": "三角函数定义",
    "related": [
      "high_trig_002",
      "high_trig_003"
    ],
    "calculator": {
      "inputs": [
        "x"
      ],
      "output": "y"
    }
  },
  {
    "id": "high_trig_002",
    "name": "余弦函数",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "y = cos x",
    "latex": "y = \\cos x",
    "variables": [
      {
        "name": "x",
        "description": "角度（弧度）",
        "unit": "rad"
      },
      {
        "name": "y",
        "description": "函数值",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "周期为 2π，值域为 [-1, 1]",
    "derivation": "三角函数定义",
    "related": [
      "high_trig_001",
      "high_trig_003"
    ],
    "calculator": {
      "inputs": [
        "x"
      ],
      "output": "y"
    }
  },
  {
    "id": "high_trig_003",
    "name": "正切函数",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "y = tan x = sin x / cos x",
    "latex": "y = \\tan x = \\frac{\\sin x}{\\cos x}",
    "variables": [
      {
        "name": "x",
        "description": "角度（弧度）",
        "unit": "rad"
      },
      {
        "name": "y",
        "description": "函数值",
        "unit": ""
      }
    ],
    "conditions": "x ≠ π/2 + kπ (k为整数)",
    "notes": "周期为 π，值域为 (-∞, +∞)",
    "derivation": "由正弦和余弦函数定义",
    "related": [
      "high_trig_001",
      "high_trig_002"
    ],
    "calculator": {
      "inputs": [
        "x"
      ],
      "output": "y"
    }
  },
  {
    "id": "high_trig_004",
    "name": "同角三角函数基本关系",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "sin²α + cos²α = 1, tan α = sin α / cos α",
    "latex": "\\sin^2 \\alpha + \\cos^2 \\alpha = 1, \\quad \\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}",
    "variables": [
      {
        "name": "α",
        "description": "角度",
        "unit": "度或弧度"
      }
    ],
    "conditions": "",
    "notes": "平方关系：sin²α + cos²α = 1；商数关系：tan α = sin α / cos α",
    "derivation": "由单位圆和三角函数定义推导",
    "related": [
      "high_trig_001",
      "high_trig_002",
      "high_trig_003"
    ],
    "calculator": {
      "inputs": [
        "alpha"
      ],
      "output": "check"
    }
  },
  {
    "id": "high_trig_005",
    "name": "两角和公式",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "sin(α ± β) = sin α cos β ± cos α sin β, cos(α ± β) = cos α cos β ∓ sin α sin β",
    "latex": "\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta, \\quad \\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta",
    "variables": [
      {
        "name": "α, β",
        "description": "角度",
        "unit": "度或弧度"
      }
    ],
    "conditions": "",
    "notes": "两角和与差的正弦、余弦公式",
    "derivation": "由单位圆和向量方法推导",
    "related": [
      "high_trig_006",
      "high_trig_007"
    ],
    "calculator": {
      "inputs": [
        "alpha",
        "beta",
        "operation"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_trig_006",
    "name": "两角差公式",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "tan(α ± β) = (tan α ± tan β) / (1 ∓ tan α tan β)",
    "latex": "\\tan(\\alpha \\pm \\beta) = \\frac{\\tan \\alpha \\pm \\tan \\beta}{1 \\mp \\tan \\alpha \\tan \\beta}",
    "variables": [
      {
        "name": "α, β",
        "description": "角度",
        "unit": "度或弧度"
      }
    ],
    "conditions": "1 ∓ tan α tan β ≠ 0",
    "notes": "两角和与差的正切公式",
    "derivation": "由两角和公式和正切定义推导",
    "related": [
      "high_trig_005",
      "high_trig_003"
    ],
    "calculator": {
      "inputs": [
        "alpha",
        "beta",
        "operation"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_trig_007",
    "name": "二倍角公式",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "sin 2α = 2 sin α cos α, cos 2α = cos²α - sin²α = 2cos²α - 1 = 1 - 2sin²α, tan 2α = 2tan α / (1 - tan²α)",
    "latex": "\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha, \\quad \\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha, \\quad \\tan 2\\alpha = \\frac{2\\tan \\alpha}{1 - \\tan^2 \\alpha}",
    "variables": [
      {
        "name": "α",
        "description": "角度",
        "unit": "度或弧度"
      }
    ],
    "conditions": "1 - tan²α ≠ 0",
    "notes": "二倍角的正弦、余弦、正切公式",
    "derivation": "由两角和公式推导（令 β = α）",
    "related": [
      "high_trig_005"
    ],
    "calculator": {
      "inputs": [
        "alpha"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_trig_008",
    "name": "半角公式",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "sin²(α/2) = (1 - cos α) / 2, cos²(α/2) = (1 + cos α) / 2, tan(α/2) = sin α / (1 + cos α)",
    "latex": "\\sin^2 \\frac{\\alpha}{2} = \\frac{1 - \\cos \\alpha}{2}, \\quad \\cos^2 \\frac{\\alpha}{2} = \\frac{1 + \\cos \\alpha}{2}, \\quad \\tan \\frac{\\alpha}{2} = \\frac{\\sin \\alpha}{1 + \\cos \\alpha}",
    "variables": [
      {
        "name": "α",
        "description": "角度",
        "unit": "度或弧度"
      }
    ],
    "conditions": "1 + cos α ≠ 0",
    "notes": "半角的正弦、余弦、正切公式",
    "derivation": "由二倍角公式推导",
    "related": [
      "high_trig_007"
    ],
    "calculator": {
      "inputs": [
        "alpha"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_trig_009",
    "name": "诱导公式",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "sin(π/2 ± α) = cos α, cos(π/2 ± α) = ∓ sin α, sin(π ± α) = ∓ sin α, cos(π ± α) = -cos α",
    "latex": "\\sin(\\frac{\\pi}{2} \\pm \\alpha) = \\cos \\alpha, \\quad \\cos(\\frac{\\pi}{2} \\pm \\alpha) = \\mp \\sin \\alpha, \\quad \\sin(\\pi \\pm \\alpha) = \\mp \\sin \\alpha, \\quad \\cos(\\pi \\pm \\alpha) = -\\cos \\alpha",
    "variables": [
      {
        "name": "α",
        "description": "角度",
        "unit": "度或弧度"
      }
    ],
    "conditions": "",
    "notes": "利用诱导公式可以将任意角的三角函数转化为锐角三角函数",
    "derivation": "由单位圆和三角函数定义推导",
    "related": [
      "high_trig_001",
      "high_trig_002"
    ],
    "calculator": {
      "inputs": [
        "alpha",
        "formula"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_trig_010",
    "name": "正弦定理",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "a / sin A = b / sin B = c / sin C = 2R",
    "latex": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
    "variables": [
      {
        "name": "a, b, c",
        "description": "三角形的三边",
        "unit": "长度单位"
      },
      {
        "name": "A, B, C",
        "description": "三角形的三个角",
        "unit": "度或弧度"
      },
      {
        "name": "R",
        "description": "外接圆半径",
        "unit": "长度单位"
      }
    ],
    "conditions": "适用于任意三角形",
    "notes": "三角形的各边与其对角的正弦值之比相等，且等于外接圆直径",
    "derivation": "由三角形面积公式和圆的性质推导",
    "related": [
      "high_trig_011"
    ],
    "calculator": {
      "inputs": [
        "a",
        "A"
      ],
      "output": "R"
    }
  },
  {
    "id": "high_trig_011",
    "name": "余弦定理",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "a² = b² + c² - 2bc cos A",
    "latex": "a^2 = b^2 + c^2 - 2bc\\cos A",
    "variables": [
      {
        "name": "a, b, c",
        "description": "三角形的三边",
        "unit": "长度单位"
      },
      {
        "name": "A",
        "description": "边a的对角",
        "unit": "度或弧度"
      }
    ],
    "conditions": "适用于任意三角形",
    "notes": "勾股定理的推广，当 A = 90° 时，cos A = 0，即勾股定理",
    "derivation": "由向量方法或坐标法推导",
    "related": [
      "math_001",
      "high_trig_010"
    ],
    "calculator": {
      "inputs": [
        "b",
        "c",
        "A"
      ],
      "output": "a"
    }
  },
  {
    "id": "high_geo_001",
    "name": "棱柱体积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = Sh",
    "latex": "V = Sh",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "S",
        "description": "底面积",
        "unit": "面积单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "S > 0, h > 0",
    "notes": "棱柱体积等于底面积乘以高",
    "derivation": "体积定义",
    "related": [
      "high_geo_002"
    ],
    "calculator": {
      "inputs": [
        "S",
        "h"
      ],
      "output": "V"
    }
  },
  {
    "id": "high_geo_002",
    "name": "棱锥体积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = (1/3)Sh",
    "latex": "V = \\frac{1}{3}Sh",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "S",
        "description": "底面积",
        "unit": "面积单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      }
    ],
    "conditions": "S > 0, h > 0",
    "notes": "棱锥体积等于同底等高的棱柱体积的三分之一",
    "derivation": "通过积分或实验验证",
    "related": [
      "high_geo_001",
      "middle_geo_009"
    ],
    "calculator": {
      "inputs": [
        "S",
        "h"
      ],
      "output": "V"
    }
  },
  {
    "id": "high_geo_003",
    "name": "正四面体体积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式"
    ],
    "formula": "V = (√2/12)a³",
    "latex": "V = \\frac{\\sqrt{2}}{12}a^3",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "a",
        "description": "棱长",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0",
    "notes": "正四面体（所有棱长相等）的体积公式",
    "derivation": "由棱锥体积公式和正四面体性质推导",
    "related": [
      "high_geo_002"
    ],
    "calculator": {
      "inputs": [
        "a"
      ],
      "output": "V"
    }
  },
  {
    "id": "high_geo_004",
    "name": "正六面体（正方体）体积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = a³",
    "latex": "V = a^3",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "a",
        "description": "棱长",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0",
    "notes": "正方体体积等于棱长的立方",
    "derivation": "由棱柱体积公式推导",
    "related": [
      "high_geo_001",
      "primary_geo_010"
    ],
    "calculator": {
      "inputs": [
        "a"
      ],
      "output": "V"
    }
  },
  {
    "id": "high_geo_005",
    "name": "正八面体体积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式"
    ],
    "formula": "V = (√2/3)a³",
    "latex": "V = \\frac{\\sqrt{2}}{3}a^3",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "a",
        "description": "棱长",
        "unit": "长度单位"
      }
    ],
    "conditions": "a > 0",
    "notes": "正八面体的体积公式",
    "derivation": "由两个正四棱锥组合推导",
    "related": [
      "high_geo_002"
    ],
    "calculator": {
      "inputs": [
        "a"
      ],
      "output": "V"
    }
  },
  {
    "id": "high_geo_008",
    "name": "圆台体积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = (1/3)πh(r₁² + r₁r₂ + r₂²)",
    "latex": "V = \\frac{1}{3}\\pi h(r_1^2 + r_1r_2 + r_2^2)",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "h",
        "description": "高",
        "unit": "长度单位"
      },
      {
        "name": "r₁",
        "description": "上底半径",
        "unit": "长度单位"
      },
      {
        "name": "r₂",
        "description": "下底半径",
        "unit": "长度单位"
      }
    ],
    "conditions": "h > 0, r₁ > 0, r₂ > 0",
    "notes": "圆台体积公式，当 r₁ = r₂ 时，即为圆柱体积",
    "derivation": "由圆锥体积公式推导",
    "related": [
      "middle_geo_007",
      "middle_geo_009"
    ],
    "calculator": {
      "inputs": [
        "h",
        "r1",
        "r2"
      ],
      "output": "V"
    }
  },
  {
    "id": "high_geo_009",
    "name": "圆台侧面积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "S = πl(r₁ + r₂)",
    "latex": "S = \\pi l(r_1 + r_2)",
    "variables": [
      {
        "name": "S",
        "description": "侧面积",
        "unit": "面积单位"
      },
      {
        "name": "l",
        "description": "母线长",
        "unit": "长度单位"
      },
      {
        "name": "r₁",
        "description": "上底半径",
        "unit": "长度单位"
      },
      {
        "name": "r₂",
        "description": "下底半径",
        "unit": "长度单位"
      }
    ],
    "conditions": "l > 0, r₁ > 0, r₂ > 0",
    "notes": "圆台侧面积等于π乘以母线长乘以两底半径之和",
    "derivation": "由圆台展开图推导",
    "related": [
      "high_geo_008",
      "middle_geo_010"
    ],
    "calculator": {
      "inputs": [
        "l",
        "r1",
        "r2"
      ],
      "output": "S"
    }
  },
  {
    "id": "high_geo_010",
    "name": "球冠体积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式"
    ],
    "formula": "V = (1/3)πh²(3r - h)",
    "latex": "V = \\frac{1}{3}\\pi h^2(3r - h)",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": "体积单位"
      },
      {
        "name": "h",
        "description": "球冠高",
        "unit": "长度单位"
      },
      {
        "name": "r",
        "description": "球半径",
        "unit": "长度单位"
      }
    ],
    "conditions": "0 < h ≤ 2r",
    "notes": "球冠（球被平面截去一部分）的体积公式",
    "derivation": "通过积分推导",
    "related": [
      "middle_geo_011"
    ],
    "calculator": {
      "inputs": [
        "h",
        "r"
      ],
      "output": "V"
    }
  },
  {
    "id": "high_geo_011",
    "name": "球冠面积",
    "category": "数学",
    "subCategory": "立体几何",
    "grade": "高中",
    "tags": [
      "常用公式"
    ],
    "formula": "S = 2πrh",
    "latex": "S = 2\\pi rh",
    "variables": [
      {
        "name": "S",
        "description": "面积",
        "unit": "面积单位"
      },
      {
        "name": "r",
        "description": "球半径",
        "unit": "长度单位"
      },
      {
        "name": "h",
        "description": "球冠高",
        "unit": "长度单位"
      }
    ],
    "conditions": "0 < h ≤ 2r",
    "notes": "球冠的表面积公式",
    "derivation": "通过积分推导",
    "related": [
      "high_geo_010",
      "middle_geo_012"
    ],
    "calculator": {
      "inputs": [
        "r",
        "h"
      ],
      "output": "S"
    }
  },
  {
    "id": "calc_limit_001",
    "name": "极限定义",
    "category": "数学",
    "subCategory": "高等数学-极限",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "lim(x→a) f(x) = L",
    "latex": "\\lim_{x \\to a} f(x) = L",
    "variables": [
      {
        "name": "a",
        "description": "趋近值",
        "unit": ""
      },
      {
        "name": "L",
        "description": "极限值",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "当x无限接近a时，f(x)无限接近L",
    "derivation": "极限定义",
    "related": [
      "calc_limit_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "L"
    }
  },
  {
    "id": "calc_limit_002",
    "name": "重要极限1",
    "category": "数学",
    "subCategory": "高等数学-极限",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "lim(x→0) sin x / x = 1",
    "latex": "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
    "variables": [
      {
        "name": "x",
        "description": "角度（弧度）",
        "unit": "rad"
      }
    ],
    "conditions": "x → 0",
    "notes": "第一个重要极限，用于求含三角函数的极限",
    "derivation": "由夹逼定理推导",
    "related": [
      "calc_limit_001",
      "calc_limit_003"
    ],
    "calculator": {
      "inputs": [
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_limit_003",
    "name": "重要极限2",
    "category": "数学",
    "subCategory": "高等数学-极限",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "lim(x→∞) (1 + 1/x)^x = e",
    "latex": "\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "e",
        "description": "自然常数",
        "unit": "约2.71828"
      }
    ],
    "conditions": "x → ∞",
    "notes": "第二个重要极限，e的定义式",
    "derivation": "由极限定义推导",
    "related": [
      "calc_limit_001",
      "calc_limit_002"
    ],
    "calculator": {
      "inputs": [
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_derivative_001",
    "name": "导数定义",
    "category": "数学",
    "subCategory": "高等数学-导数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "f'(x) = lim(h→0) [f(x+h) - f(x)] / h",
    "latex": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
    "variables": [
      {
        "name": "f'(x)",
        "description": "导数",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "h",
        "description": "增量",
        "unit": ""
      }
    ],
    "conditions": "函数在x处可导",
    "notes": "导数是函数在某点的瞬时变化率",
    "derivation": "导数定义",
    "related": [
      "calc_derivative_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "f'(x)"
    }
  },
  {
    "id": "calc_derivative_002",
    "name": "基本导数公式",
    "category": "数学",
    "subCategory": "高等数学-导数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "(xⁿ)' = nxⁿ⁻¹, (sin x)' = cos x, (cos x)' = -sin x, (eˣ)' = eˣ, (ln x)' = 1/x",
    "latex": "(x^n)' = nx^{n-1}, \\quad (\\sin x)' = \\cos x, \\quad (\\cos x)' = -\\sin x, \\quad (e^x)' = e^x, \\quad (\\ln x)' = \\frac{1}{x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "n",
        "description": "指数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "基本初等函数的导数公式",
    "derivation": "由导数定义推导",
    "related": [
      "calc_derivative_001",
      "calc_derivative_003"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_derivative_003",
    "name": "求导法则",
    "category": "数学",
    "subCategory": "高等数学-导数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "(u±v)' = u'±v', (uv)' = u'v + uv', (u/v)' = (u'v - uv')/v², [f(g(x))]' = f'(g(x))·g'(x)",
    "latex": "(u \\pm v)' = u' \\pm v', \\quad (uv)' = u'v + uv', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}, \\quad [f(g(x))]' = f'(g(x)) \\cdot g'(x)",
    "variables": [
      {
        "name": "u, v",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "u', v'",
        "description": "导数",
        "unit": ""
      }
    ],
    "conditions": "函数可导",
    "notes": "和差积商法则和复合函数求导法则（链式法则）",
    "derivation": "由导数定义推导",
    "related": [
      "calc_derivative_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_derivative_004",
    "name": "高阶导数",
    "category": "数学",
    "subCategory": "高等数学-导数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "f⁽ⁿ⁾(x) = dⁿf/dxⁿ",
    "latex": "f^{(n)}(x) = \\frac{d^nf}{dx^n}",
    "variables": [
      {
        "name": "n",
        "description": "阶数",
        "unit": ""
      },
      {
        "name": "f⁽ⁿ⁾(x)",
        "description": "n阶导数",
        "unit": ""
      }
    ],
    "conditions": "函数n次可导",
    "notes": "对函数连续求导n次",
    "derivation": "高阶导数定义",
    "related": [
      "calc_derivative_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_derivative_005",
    "name": "隐函数求导",
    "category": "数学",
    "subCategory": "高等数学-导数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "dy/dx = -Fx'/Fy'",
    "latex": "\\frac{dy}{dx} = -\\frac{F'_x}{F'_y}",
    "variables": [
      {
        "name": "F(x,y)",
        "description": "隐函数",
        "unit": ""
      },
      {
        "name": "Fx', Fy'",
        "description": "偏导数",
        "unit": ""
      }
    ],
    "conditions": "Fy' ≠ 0",
    "notes": "对于隐函数F(x,y)=0，求dy/dx",
    "derivation": "由链式法则推导",
    "related": [
      "calc_derivative_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "dy/dx"
    }
  },
  {
    "id": "calc_integral_001",
    "name": "不定积分定义",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫f(x)dx = F(x) + C，其中F'(x) = f(x)",
    "latex": "\\int f(x)dx = F(x) + C, \\quad \\text{其中} \\quad F'(x) = f(x)",
    "variables": [
      {
        "name": "f(x)",
        "description": "被积函数",
        "unit": ""
      },
      {
        "name": "F(x)",
        "description": "原函数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "f(x)连续",
    "notes": "不定积分是导数的逆运算",
    "derivation": "积分定义",
    "related": [
      "calc_integral_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "F(x)"
    }
  },
  {
    "id": "calc_integral_002",
    "name": "基本积分公式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫xⁿdx = xⁿ⁺¹/(n+1) + C, ∫1/x dx = ln|x| + C, ∫eˣdx = eˣ + C, ∫sin x dx = -cos x + C, ∫cos x dx = sin x + C",
    "latex": "\\int x^ndx = \\frac{x^{n+1}}{n+1} + C, \\quad \\int \\frac{1}{x}dx = \\ln|x| + C, \\quad \\int e^xdx = e^x + C, \\quad \\int \\sin x dx = -\\cos x + C, \\quad \\int \\cos x dx = \\sin x + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "n",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "n ≠ -1",
    "notes": "基本初等函数的不定积分公式。极限情形：当 n→-1 时，由洛必达法则可得 ∫xⁿdx = xⁿ⁺¹ln(x) + C，代入 n=-1 得 ∫1/x dx = ln|x| + C（注意 x^(n+1) = exp((n+1)ln(x))，对 n 求导得 x^(n+1)ln(x)）",
    "derivation": "由导数公式逆推。极限情形推导：当 n→-1 时，对 ∫xⁿdx = x^(n+1)/(n+1) + C 应用洛必达法则，由于 x^(n+1) = exp((n+1)ln(x))，对 n 求导得 x^(n+1)ln(x)，因此极限为 x^(n+1)ln(x) + C，当 n=-1 时即为 ln|x| + C",
    "related": [
      "calc_integral_001",
      "calc_derivative_002"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_003",
    "name": "定积分定义",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[a,b] f(x)dx = lim(n→∞) Σ(i=1 to n) f(ξᵢ)Δxᵢ",
    "latex": "\\int_a^b f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(\\xi_i)\\Delta x_i",
    "variables": [
      {
        "name": "a, b",
        "description": "积分上下限",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "被积函数",
        "unit": ""
      },
      {
        "name": "Δxᵢ",
        "description": "小区间长度",
        "unit": ""
      }
    ],
    "conditions": "f(x)在[a,b]上可积",
    "notes": "定积分是函数在区间上的面积",
    "derivation": "黎曼积分定义",
    "related": [
      "calc_integral_001",
      "calc_integral_004"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_004",
    "name": "牛顿-莱布尼茨公式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[a,b] f(x)dx = F(b) - F(a)",
    "latex": "\\int_a^b f(x)dx = F(b) - F(a)",
    "variables": [
      {
        "name": "F(x)",
        "description": "f(x)的原函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分上下限",
        "unit": ""
      }
    ],
    "conditions": "F'(x) = f(x)，F(x)在[a,b]上连续",
    "notes": "定积分计算的基本公式，连接了积分与导数",
    "derivation": "微积分基本定理",
    "related": [
      "calc_integral_001",
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [
        "F",
        "a",
        "b"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_005",
    "name": "换元积分法",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫f(g(x))g'(x)dx = ∫f(u)du，其中u = g(x)",
    "latex": "\\int f(g(x))g'(x)dx = \\int f(u)du, \\quad \\text{其中} \\quad u = g(x)",
    "variables": [
      {
        "name": "f(x), g(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "u",
        "description": "新变量",
        "unit": ""
      }
    ],
    "conditions": "g(x)可导，f(u)可积",
    "notes": "通过变量替换简化积分计算",
    "derivation": "由链式法则推导",
    "related": [
      "calc_integral_001",
      "calc_derivative_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_006",
    "name": "分部积分法",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫u dv = uv - ∫v du",
    "latex": "\\int u dv = uv - \\int v du",
    "variables": [
      {
        "name": "u, v",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "du, dv",
        "description": "微分",
        "unit": ""
      }
    ],
    "conditions": "u, v可导",
    "notes": "用于求两个函数乘积的积分",
    "derivation": "由乘积求导法则推导",
    "related": [
      "calc_integral_001",
      "calc_derivative_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_series_001",
    "name": "泰勒级数",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "f(x) = Σ(n=0 to ∞) [f⁽ⁿ⁾(a)/n!](x-a)ⁿ",
    "latex": "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n",
    "variables": [
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "a",
        "description": "展开点",
        "unit": ""
      },
      {
        "name": "n",
        "description": "阶数",
        "unit": ""
      }
    ],
    "conditions": "f(x)在a处无限次可导",
    "notes": "将函数展开为幂级数",
    "derivation": "泰勒定理",
    "related": [
      "calc_series_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "series"
    }
  },
  {
    "id": "calc_series_002",
    "name": "麦克劳林级数",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "f(x) = Σ(n=0 to ∞) [f⁽ⁿ⁾(0)/n!]xⁿ",
    "latex": "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}x^n",
    "variables": [
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "阶数",
        "unit": ""
      }
    ],
    "conditions": "f(x)在0处无限次可导",
    "notes": "泰勒级数在a=0时的特殊情况",
    "derivation": "由泰勒级数推导",
    "related": [
      "calc_series_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "series"
    }
  },
  {
    "id": "calc_series_003",
    "name": "常见函数的麦克劳林展开",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "eˣ = Σ(n=0 to ∞) xⁿ/n!, sin x = Σ(n=0 to ∞) (-1)ⁿx²ⁿ⁺¹/(2n+1)!, cos x = Σ(n=0 to ∞) (-1)ⁿx²ⁿ/(2n)!, 1/(1-x) = Σ(n=0 to ∞) xⁿ",
    "latex": "e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}, \\quad \\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}, \\quad \\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "n",
        "description": "项数",
        "unit": ""
      }
    ],
    "conditions": "|x| < 1（对于1/(1-x)）",
    "notes": "常用函数的幂级数展开",
    "derivation": "由麦克劳林级数推导",
    "related": [
      "calc_series_002"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "linear_matrix_001",
    "name": "矩阵加法",
    "category": "数学",
    "subCategory": "线性代数-矩阵",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "(A + B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ",
    "latex": "(A + B)_{ij} = A_{ij} + B_{ij}",
    "variables": [
      {
        "name": "A, B",
        "description": "矩阵",
        "unit": ""
      },
      {
        "name": "i, j",
        "description": "行列索引",
        "unit": ""
      }
    ],
    "conditions": "A和B同型（行数、列数相同）",
    "notes": "对应元素相加",
    "derivation": "矩阵运算定义",
    "related": [
      "linear_matrix_002"
    ],
    "calculator": {
      "inputs": [
        "A",
        "B"
      ],
      "output": "C"
    }
  },
  {
    "id": "linear_matrix_002",
    "name": "矩阵乘法",
    "category": "数学",
    "subCategory": "线性代数-矩阵",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "(AB)ᵢⱼ = Σ(k=1 to n) AᵢₖBₖⱼ",
    "latex": "(AB)_{ij} = \\sum_{k=1}^n A_{ik}B_{kj}",
    "variables": [
      {
        "name": "A",
        "description": "m×n矩阵",
        "unit": ""
      },
      {
        "name": "B",
        "description": "n×p矩阵",
        "unit": ""
      },
      {
        "name": "k",
        "description": "求和索引",
        "unit": ""
      }
    ],
    "conditions": "A的列数等于B的行数",
    "notes": "矩阵乘法的定义，结果矩阵为m×p",
    "derivation": "矩阵运算定义",
    "related": [
      "linear_matrix_001",
      "linear_matrix_003"
    ],
    "calculator": {
      "inputs": [
        "A",
        "B"
      ],
      "output": "C"
    }
  },
  {
    "id": "linear_matrix_003",
    "name": "矩阵转置",
    "category": "数学",
    "subCategory": "线性代数-矩阵",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "(Aᵀ)ᵢⱼ = Aⱼᵢ",
    "latex": "(A^T)_{ij} = A_{ji}",
    "variables": [
      {
        "name": "A",
        "description": "矩阵",
        "unit": ""
      },
      {
        "name": "Aᵀ",
        "description": "转置矩阵",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "将矩阵的行列互换",
    "derivation": "转置定义",
    "related": [
      "linear_matrix_002"
    ],
    "calculator": {
      "inputs": [
        "A"
      ],
      "output": "AT"
    }
  },
  {
    "id": "linear_matrix_004",
    "name": "矩阵的逆",
    "category": "数学",
    "subCategory": "线性代数-矩阵",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "AA⁻¹ = A⁻¹A = I",
    "latex": "AA^{-1} = A^{-1}A = I",
    "variables": [
      {
        "name": "A",
        "description": "可逆矩阵",
        "unit": ""
      },
      {
        "name": "A⁻¹",
        "description": "逆矩阵",
        "unit": ""
      },
      {
        "name": "I",
        "description": "单位矩阵",
        "unit": ""
      }
    ],
    "conditions": "|A| ≠ 0（A可逆）",
    "notes": "只有方阵且行列式不为0的矩阵才有逆矩阵",
    "derivation": "逆矩阵定义",
    "related": [
      "linear_det_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "A_inv"
    }
  },
  {
    "id": "linear_det_001",
    "name": "行列式定义（2阶）",
    "category": "数学",
    "subCategory": "线性代数-行列式",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "|A| = a₁₁a₂₂ - a₁₂a₂₁",
    "latex": "|A| = \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}",
    "variables": [
      {
        "name": "aᵢⱼ",
        "description": "矩阵元素",
        "unit": ""
      }
    ],
    "conditions": "A为2×2矩阵",
    "notes": "2阶行列式的计算公式",
    "derivation": "行列式定义",
    "related": [
      "linear_det_002"
    ],
    "calculator": {
      "inputs": [
        "a11",
        "a12",
        "a21",
        "a22"
      ],
      "output": "det"
    }
  },
  {
    "id": "linear_det_002",
    "name": "行列式定义（3阶）",
    "category": "数学",
    "subCategory": "线性代数-行列式",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "|A| = a₁₁a₂₂a₃₃ + a₁₂a₂₃a₃₁ + a₁₃a₂₁a₃₂ - a₁₃a₂₂a₃₁ - a₁₂a₂₁a₃₃ - a₁₁a₂₃a₃₂",
    "latex": "|A| = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} - a_{11}a_{23}a_{32}",
    "variables": [
      {
        "name": "aᵢⱼ",
        "description": "矩阵元素",
        "unit": ""
      }
    ],
    "conditions": "A为3×3矩阵",
    "notes": "3阶行列式的计算公式（对角线法则）",
    "derivation": "行列式定义",
    "related": [
      "linear_det_001",
      "linear_det_003"
    ],
    "calculator": {
      "inputs": [
        "a11",
        "a12",
        "a13",
        "a21",
        "a22",
        "a23",
        "a31",
        "a32",
        "a33"
      ],
      "output": "det"
    }
  },
  {
    "id": "linear_det_003",
    "name": "行列式按行（列）展开",
    "category": "数学",
    "subCategory": "线性代数-行列式",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "|A| = Σ(j=1 to n) aᵢⱼAᵢⱼ = Σ(i=1 to n) aᵢⱼAᵢⱼ",
    "latex": "|A| = \\sum_{j=1}^n a_{ij}A_{ij} = \\sum_{i=1}^n a_{ij}A_{ij}",
    "variables": [
      {
        "name": "Aᵢⱼ",
        "description": "代数余子式",
        "unit": ""
      },
      {
        "name": "aᵢⱼ",
        "description": "矩阵元素",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "按第i行或第j列展开，Aᵢⱼ = (-1)ⁱ⁺ʲMᵢⱼ，Mᵢⱼ为余子式",
    "derivation": "拉普拉斯展开定理",
    "related": [
      "linear_det_001",
      "linear_det_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "det"
    }
  },
  {
    "id": "linear_eigen_001",
    "name": "特征值与特征向量",
    "category": "数学",
    "subCategory": "线性代数-特征值",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Av = λv，其中|A - λI| = 0",
    "latex": "Av = \\lambda v, \\quad \\text{其中} \\quad |A - \\lambda I| = 0",
    "variables": [
      {
        "name": "A",
        "description": "矩阵",
        "unit": ""
      },
      {
        "name": "λ",
        "description": "特征值",
        "unit": ""
      },
      {
        "name": "v",
        "description": "特征向量",
        "unit": ""
      },
      {
        "name": "I",
        "description": "单位矩阵",
        "unit": ""
      }
    ],
    "conditions": "A为方阵",
    "notes": "特征值λ是特征方程|A - λI| = 0的根，对应的非零向量v是特征向量",
    "derivation": "特征值定义",
    "related": [
      "linear_det_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "eigen"
    }
  },
  {
    "id": "prob_basic_001",
    "name": "概率定义",
    "category": "数学",
    "subCategory": "概率论-概率",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P(A) = n(A) / n(S)",
    "latex": "P(A) = \\frac{n(A)}{n(S)}",
    "variables": [
      {
        "name": "P(A)",
        "description": "事件A的概率",
        "unit": ""
      },
      {
        "name": "n(A)",
        "description": "事件A的样本点数",
        "unit": ""
      },
      {
        "name": "n(S)",
        "description": "样本空间的总样本点数",
        "unit": ""
      }
    ],
    "conditions": "等可能事件",
    "notes": "古典概型的概率定义",
    "derivation": "概率定义",
    "related": [
      "prob_basic_002"
    ],
    "calculator": {
      "inputs": [
        "nA",
        "nS"
      ],
      "output": "P"
    }
  },
  {
    "id": "prob_basic_002",
    "name": "条件概率",
    "category": "数学",
    "subCategory": "概率论-概率",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P(A|B) = P(AB) / P(B)",
    "latex": "P(A|B) = \\frac{P(AB)}{P(B)}",
    "variables": [
      {
        "name": "P(A|B)",
        "description": "在B发生的条件下A发生的概率",
        "unit": ""
      },
      {
        "name": "P(AB)",
        "description": "A和B同时发生的概率",
        "unit": ""
      },
      {
        "name": "P(B)",
        "description": "B发生的概率",
        "unit": ""
      }
    ],
    "conditions": "P(B) > 0",
    "notes": "条件概率的定义",
    "derivation": "条件概率定义",
    "related": [
      "prob_basic_001",
      "prob_basic_003"
    ],
    "calculator": {
      "inputs": [
        "PAB",
        "PB"
      ],
      "output": "PA_given_B"
    }
  },
  {
    "id": "prob_basic_003",
    "name": "乘法公式",
    "category": "数学",
    "subCategory": "概率论-概率",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P(AB) = P(A|B)P(B) = P(B|A)P(A)",
    "latex": "P(AB) = P(A|B)P(B) = P(B|A)P(A)",
    "variables": [
      {
        "name": "P(AB)",
        "description": "A和B同时发生的概率",
        "unit": ""
      },
      {
        "name": "P(A|B), P(B|A)",
        "description": "条件概率",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "由条件概率公式推导",
    "derivation": "由条件概率公式推导",
    "related": [
      "prob_basic_002"
    ],
    "calculator": {
      "inputs": [
        "PA_given_B",
        "PB"
      ],
      "output": "PAB"
    }
  },
  {
    "id": "prob_basic_004",
    "name": "全概率公式",
    "category": "数学",
    "subCategory": "概率论-概率",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P(A) = Σ(i=1 to n) P(A|Bᵢ)P(Bᵢ)",
    "latex": "P(A) = \\sum_{i=1}^n P(A|B_i)P(B_i)",
    "variables": [
      {
        "name": "Bᵢ",
        "description": "完备事件组",
        "unit": ""
      },
      {
        "name": "A",
        "description": "事件",
        "unit": ""
      }
    ],
    "conditions": "B₁, B₂, ..., Bₙ构成完备事件组",
    "notes": "通过完备事件组计算事件A的概率",
    "derivation": "由概率的加法公式和乘法公式推导",
    "related": [
      "prob_basic_002",
      "prob_basic_005"
    ],
    "calculator": {
      "inputs": [
        "PA_given_B",
        "PB"
      ],
      "output": "PA"
    }
  },
  {
    "id": "prob_basic_005",
    "name": "贝叶斯公式",
    "category": "数学",
    "subCategory": "概率论-概率",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P(Bᵢ|A) = P(A|Bᵢ)P(Bᵢ) / Σ(j=1 to n) P(A|Bⱼ)P(Bⱼ)",
    "latex": "P(B_i|A) = \\frac{P(A|B_i)P(B_i)}{\\sum_{j=1}^n P(A|B_j)P(B_j)}",
    "variables": [
      {
        "name": "Bᵢ",
        "description": "完备事件组",
        "unit": ""
      },
      {
        "name": "A",
        "description": "事件",
        "unit": ""
      }
    ],
    "conditions": "B₁, B₂, ..., Bₙ构成完备事件组",
    "notes": "由结果反推原因的概率",
    "derivation": "由条件概率和全概率公式推导",
    "related": [
      "prob_basic_002",
      "prob_basic_004"
    ],
    "calculator": {
      "inputs": [
        "PA_given_Bi",
        "PBi",
        "PA_given_B",
        "PB"
      ],
      "output": "PBi_given_A"
    }
  },
  {
    "id": "prob_rv_001",
    "name": "数学期望",
    "category": "数学",
    "subCategory": "概率论-随机变量",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "E(X) = Σ(i=1 to n) xᵢP(X=xᵢ) 或 E(X) = ∫xf(x)dx",
    "latex": "E(X) = \\sum_{i=1}^n x_i P(X=x_i) \\quad \\text{或} \\quad E(X) = \\int xf(x)dx",
    "variables": [
      {
        "name": "E(X)",
        "description": "数学期望",
        "unit": ""
      },
      {
        "name": "xᵢ",
        "description": "随机变量取值",
        "unit": ""
      },
      {
        "name": "P(X=xᵢ)",
        "description": "概率",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "概率密度函数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "随机变量的平均值",
    "derivation": "期望定义",
    "related": [
      "prob_rv_002"
    ],
    "calculator": {
      "inputs": [
        "x",
        "p"
      ],
      "output": "E"
    }
  },
  {
    "id": "prob_rv_002",
    "name": "方差",
    "category": "数学",
    "subCategory": "概率论-随机变量",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "D(X) = E(X²) - [E(X)]² = E[(X - E(X))²]",
    "latex": "D(X) = E(X^2) - [E(X)]^2 = E[(X - E(X))^2]",
    "variables": [
      {
        "name": "D(X)",
        "description": "方差",
        "unit": ""
      },
      {
        "name": "E(X)",
        "description": "数学期望",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "方差衡量随机变量与其期望的偏离程度",
    "derivation": "方差定义",
    "related": [
      "prob_rv_001",
      "prob_rv_003"
    ],
    "calculator": {
      "inputs": [
        "x",
        "p"
      ],
      "output": "D"
    }
  },
  {
    "id": "prob_rv_003",
    "name": "标准差",
    "category": "数学",
    "subCategory": "概率论-随机变量",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "σ(X) = √D(X)",
    "latex": "\\sigma(X) = \\sqrt{D(X)}",
    "variables": [
      {
        "name": "σ(X)",
        "description": "标准差",
        "unit": ""
      },
      {
        "name": "D(X)",
        "description": "方差",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "标准差是方差的平方根",
    "derivation": "由方差定义",
    "related": [
      "prob_rv_002"
    ],
    "calculator": {
      "inputs": [
        "D"
      ],
      "output": "sigma"
    }
  },
  {
    "id": "calc_derivative_006",
    "name": "参数方程求导",
    "category": "数学",
    "subCategory": "高等数学-导数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "dy/dx = (dy/dt) / (dx/dt)",
    "latex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
    "variables": [
      {
        "name": "x = x(t)",
        "description": "x的参数方程",
        "unit": ""
      },
      {
        "name": "y = y(t)",
        "description": "y的参数方程",
        "unit": ""
      },
      {
        "name": "t",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "dx/dt ≠ 0",
    "notes": "参数方程确定函数的导数",
    "derivation": "由链式法则推导",
    "related": [
      "calc_derivative_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "dy/dx"
    }
  },
  {
    "id": "calc_derivative_007",
    "name": "极坐标求导",
    "category": "数学",
    "subCategory": "高等数学-导数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "dy/dx = (r' sin θ + r cos θ) / (r' cos θ - r sin θ)",
    "latex": "\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}",
    "variables": [
      {
        "name": "r = r(θ)",
        "description": "极坐标方程",
        "unit": ""
      },
      {
        "name": "r'",
        "description": "r对θ的导数",
        "unit": ""
      },
      {
        "name": "θ",
        "description": "极角",
        "unit": ""
      }
    ],
    "conditions": "分母不为0",
    "notes": "极坐标形式下曲线的切线斜率",
    "derivation": "由参数方程求导推导",
    "related": [
      "calc_derivative_006"
    ],
    "calculator": {
      "inputs": [],
      "output": "dy/dx"
    }
  },
  {
    "id": "calc_derivative_008",
    "name": "对数求导法",
    "category": "数学",
    "subCategory": "高等数学-导数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "对于 y = [u(x)]ᵛ⁽ˣ⁾，先取对数：ln y = v(x)ln u(x)，再求导：y'/y = v'(x)ln u(x) + v(x)u'(x)/u(x)",
    "latex": "\\text{对于} \\quad y = [u(x)]^{v(x)}, \\quad \\text{先取对数：} \\quad \\ln y = v(x)\\ln u(x), \\quad \\text{再求导：} \\quad \\frac{y'}{y} = v'(x)\\ln u(x) + \\frac{v(x)u'(x)}{u(x)}",
    "variables": [
      {
        "name": "u(x), v(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "y', u', v'",
        "description": "导数",
        "unit": ""
      }
    ],
    "conditions": "u(x) > 0",
    "notes": "用于求幂指函数的导数",
    "derivation": "由对数函数求导法则推导",
    "related": [
      "calc_derivative_003",
      "high_func_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "y'"
    }
  },
  {
    "id": "calc_integral_007",
    "name": "有理函数积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "将有理函数分解为部分分式后积分",
    "latex": "\\int \\frac{P(x)}{Q(x)}dx = \\int \\left[\\sum \\frac{A}{(x-a)^n} + \\sum \\frac{Bx+C}{(x^2+px+q)^m}\\right]dx",
    "variables": [
      {
        "name": "P(x), Q(x)",
        "description": "多项式",
        "unit": ""
      },
      {
        "name": "A, B, C",
        "description": "待定系数",
        "unit": ""
      }
    ],
    "conditions": "Q(x)的次数大于P(x)的次数",
    "notes": "通过部分分式分解，将有理函数积分转化为简单函数的积分",
    "derivation": "代数理论",
    "related": [
      "calc_integral_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_008",
    "name": "三角换元法",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "√(a²-x²) → x = a sin t, √(a²+x²) → x = a tan t, √(x²-a²) → x = a sec t",
    "latex": "\\sqrt{a^2-x^2} \\to x = a\\sin t, \\quad \\sqrt{a^2+x^2} \\to x = a\\tan t, \\quad \\sqrt{x^2-a^2} \\to x = a\\sec t",
    "variables": [
      {
        "name": "a",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "t",
        "description": "新变量",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "通过三角代换消除根号",
    "derivation": "三角恒等式",
    "related": [
      "calc_integral_005"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_009",
    "name": "反常积分（无穷限）",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[a,∞) f(x)dx = lim(b→∞) ∫[a,b] f(x)dx",
    "latex": "\\int_a^{\\infty} f(x)dx = \\lim_{b \\to \\infty} \\int_a^b f(x)dx",
    "variables": [
      {
        "name": "a",
        "description": "积分下限",
        "unit": ""
      },
      {
        "name": "b",
        "description": "积分上限",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "被积函数",
        "unit": ""
      }
    ],
    "conditions": "极限存在",
    "notes": "积分区间为无穷的反常积分",
    "derivation": "极限定义",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_010",
    "name": "反常积分（瑕积分）",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[a,b] f(x)dx = lim(ε→0⁺) ∫[a+ε,b] f(x)dx（f(x)在a处无界）",
    "latex": "\\int_a^b f(x)dx = \\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x)dx \\quad \\text{（f(x)在a处无界）}",
    "variables": [
      {
        "name": "a, b",
        "description": "积分上下限",
        "unit": ""
      },
      {
        "name": "ε",
        "description": "无穷小量",
        "unit": ""
      }
    ],
    "conditions": "极限存在",
    "notes": "被积函数在积分区间内有无穷间断点的反常积分",
    "derivation": "极限定义",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_011",
    "name": "定积分应用 - 平面图形面积",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "S = ∫[a,b] |f(x) - g(x)|dx",
    "latex": "S = \\int_a^b |f(x) - g(x)|dx",
    "variables": [
      {
        "name": "S",
        "description": "面积",
        "unit": ""
      },
      {
        "name": "f(x), g(x)",
        "description": "曲线函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分区间",
        "unit": ""
      }
    ],
    "conditions": "f(x), g(x)在[a,b]上连续",
    "notes": "两条曲线围成的平面图形面积",
    "derivation": "定积分的几何意义",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "S"
    }
  },
  {
    "id": "calc_integral_012",
    "name": "定积分应用 - 旋转体体积",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = π∫[a,b] f²(x)dx（绕x轴旋转）",
    "latex": "V = \\pi \\int_a^b f^2(x)dx \\quad \\text{（绕x轴旋转）}",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "曲线函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分区间",
        "unit": ""
      }
    ],
    "conditions": "f(x) ≥ 0，在[a,b]上连续",
    "notes": "曲线绕坐标轴旋转形成的旋转体体积",
    "derivation": "圆盘法（切片法）",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "V"
    }
  },
  {
    "id": "calc_integral_013",
    "name": "定积分应用 - 弧长公式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "L = ∫[a,b] √(1 + [f'(x)]²)dx",
    "latex": "L = \\int_a^b \\sqrt{1 + [f'(x)]^2}dx",
    "variables": [
      {
        "name": "L",
        "description": "弧长",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "曲线函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分区间",
        "unit": ""
      }
    ],
    "conditions": "f'(x)连续",
    "notes": "平面曲线的弧长",
    "derivation": "微分几何",
    "related": [
      "calc_integral_003",
      "calc_derivative_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "L"
    }
  },
  {
    "id": "calc_integral_014",
    "name": "三角函数积分 - 正切余切",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫tan x dx = -ln|cos x| + C, ∫cot x dx = ln|sin x| + C",
    "latex": "\\int \\tan x dx = -\\ln|\\cos x| + C, \\quad \\int \\cot x dx = \\ln|\\sin x| + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "cos x ≠ 0（tan x），sin x ≠ 0（cot x）",
    "notes": "正切和余切函数的不定积分",
    "derivation": "由导数公式逆推",
    "related": [
      "calc_integral_002"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_015",
    "name": "三角函数积分 - 正割余割",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫sec x dx = ln|sec x + tan x| + C, ∫csc x dx = ln|csc x - cot x| + C",
    "latex": "\\int \\sec x dx = \\ln|\\sec x + \\tan x| + C, \\quad \\int \\csc x dx = \\ln|\\csc x - \\cot x| + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "cos x ≠ 0（sec x），sin x ≠ 0（csc x）",
    "notes": "正割和余割函数的不定积分",
    "derivation": "通过换元法推导",
    "related": [
      "calc_integral_002",
      "calc_integral_005"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_016",
    "name": "三角函数平方积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫sin²x dx = x/2 - sin(2x)/4 + C, ∫cos²x dx = x/2 + sin(2x)/4 + C, ∫tan²x dx = tan x - x + C",
    "latex": "\\int \\sin^2 x dx = \\frac{x}{2} - \\frac{\\sin(2x)}{4} + C, \\quad \\int \\cos^2 x dx = \\frac{x}{2} + \\frac{\\sin(2x)}{4} + C, \\quad \\int \\tan^2 x dx = \\tan x - x + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "利用倍角公式或恒等式化简后积分",
    "derivation": "利用三角恒等式：sin²x = (1-cos2x)/2, cos²x = (1+cos2x)/2",
    "related": [
      "calc_integral_002"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_017",
    "name": "指数函数积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫aˣ dx = aˣ/ln a + C (a>0, a≠1), ∫eᵏˣ dx = eᵏˣ/k + C",
    "latex": "\\int a^x dx = \\frac{a^x}{\\ln a} + C \\quad (a>0, a\\neq 1), \\quad \\int e^{kx} dx = \\frac{e^{kx}}{k} + C",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "k",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "a > 0, a ≠ 1",
    "notes": "一般指数函数和自然指数函数的积分",
    "derivation": "由导数公式逆推",
    "related": [
      "calc_integral_002"
    ],
    "calculator": {
      "inputs": [
        "func",
        "a",
        "k",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_018",
    "name": "对数函数积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫ln x dx = x ln x - x + C, ∫logₐ x dx = x(logₐ x - 1/ln a) + C",
    "latex": "\\int \\ln x dx = x\\ln x - x + C, \\quad \\int \\log_a x dx = x\\left(\\log_a x - \\frac{1}{\\ln a}\\right) + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "x > 0, a > 0, a ≠ 1",
    "notes": "自然对数和一般对数函数的积分",
    "derivation": "使用分部积分法",
    "related": [
      "calc_integral_002",
      "calc_integral_006"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "a"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_019",
    "name": "反三角函数积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫1/√(1-x²) dx = arcsin x + C, ∫1/(1+x²) dx = arctan x + C, ∫1/(x√(x²-1)) dx = arcsec |x| + C",
    "latex": "\\int \\frac{1}{\\sqrt{1-x^2}} dx = \\arcsin x + C, \\quad \\int \\frac{1}{1+x^2} dx = \\arctan x + C, \\quad \\int \\frac{1}{x\\sqrt{x^2-1}} dx = \\text{arcsec}|x| + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "|x| < 1（arcsin），|x| > 1（arcsec）",
    "notes": "反三角函数的不定积分公式",
    "derivation": "由反三角函数导数公式逆推",
    "related": [
      "calc_integral_002"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_020",
    "name": "双曲函数积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫sinh x dx = cosh x + C, ∫cosh x dx = sinh x + C, ∫tanh x dx = ln(cosh x) + C",
    "latex": "\\int \\sinh x dx = \\cosh x + C, \\quad \\int \\cosh x dx = \\sinh x + C, \\quad \\int \\tanh x dx = \\ln(\\cosh x) + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "双曲正弦、双曲余弦、双曲正切函数的积分",
    "derivation": "由双曲函数导数公式逆推",
    "related": [
      "calc_integral_002"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_021",
    "name": "定积分性质 - 线性性",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[a,b] [αf(x) + βg(x)]dx = α∫[a,b] f(x)dx + β∫[a,b] g(x)dx",
    "latex": "\\int_a^b [\\alpha f(x) + \\beta g(x)]dx = \\alpha \\int_a^b f(x)dx + \\beta \\int_a^b g(x)dx",
    "variables": [
      {
        "name": "α, β",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "f(x), g(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分上下限",
        "unit": ""
      }
    ],
    "conditions": "f(x), g(x)在[a,b]上可积",
    "notes": "定积分的线性性质",
    "derivation": "积分定义",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_022",
    "name": "定积分性质 - 区间可加性",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[a,b] f(x)dx = ∫[a,c] f(x)dx + ∫[c,b] f(x)dx",
    "latex": "\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx",
    "variables": [
      {
        "name": "a, b, c",
        "description": "积分区间端点",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "被积函数",
        "unit": ""
      }
    ],
    "conditions": "a ≤ c ≤ b，f(x)在[a,b]上可积",
    "notes": "定积分对积分区间的可加性",
    "derivation": "积分定义",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_023",
    "name": "定积分性质 - 积分中值定理",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[a,b] f(x)dx = f(ξ)(b-a)，其中ξ ∈ [a,b]",
    "latex": "\\int_a^b f(x)dx = f(\\xi)(b-a), \\quad \\text{其中} \\quad \\xi \\in [a,b]",
    "variables": [
      {
        "name": "f(x)",
        "description": "连续函数",
        "unit": ""
      },
      {
        "name": "ξ",
        "description": "中值点",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分上下限",
        "unit": ""
      }
    ],
    "conditions": "f(x)在[a,b]上连续",
    "notes": "积分第一中值定理，存在ξ使得积分值等于函数值乘以区间长度",
    "derivation": "连续函数的介值定理",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_024",
    "name": "定积分性质 - 奇偶性",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若f(x)为奇函数，则∫[-a,a] f(x)dx = 0；若f(x)为偶函数，则∫[-a,a] f(x)dx = 2∫[0,a] f(x)dx",
    "latex": "\\text{若}f(x)\\text{为奇函数，则}\\int_{-a}^a f(x)dx = 0; \\quad \\text{若}f(x)\\text{为偶函数，则}\\int_{-a}^a f(x)dx = 2\\int_0^a f(x)dx",
    "variables": [
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "a",
        "description": "正数",
        "unit": ""
      }
    ],
    "conditions": "f(x)在[-a,a]上可积",
    "notes": "利用函数的奇偶性简化定积分计算",
    "derivation": "奇偶函数的性质",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_025",
    "name": "定积分性质 - 周期性",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "若f(x)周期为T，则∫[a,a+T] f(x)dx = ∫[0,T] f(x)dx",
    "latex": "\\text{若}f(x)\\text{周期为}T, \\text{则}\\int_a^{a+T} f(x)dx = \\int_0^T f(x)dx",
    "variables": [
      {
        "name": "f(x)",
        "description": "周期函数",
        "unit": ""
      },
      {
        "name": "T",
        "description": "周期",
        "unit": ""
      },
      {
        "name": "a",
        "description": "任意实数",
        "unit": ""
      }
    ],
    "conditions": "f(x)周期为T",
    "notes": "周期函数在任意一个周期上的积分值相等",
    "derivation": "周期函数的性质",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_026",
    "name": "定积分应用 - 旋转体体积（绕y轴）",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V = π∫[c,d] g²(y)dy（绕y轴旋转）",
    "latex": "V = \\pi \\int_c^d g^2(y)dy \\quad \\text{（绕y轴旋转）}",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": ""
      },
      {
        "name": "g(y)",
        "description": "曲线函数（y为自变量）",
        "unit": ""
      },
      {
        "name": "c, d",
        "description": "积分区间",
        "unit": ""
      }
    ],
    "conditions": "g(y) ≥ 0，在[c,d]上连续",
    "notes": "曲线绕y轴旋转形成的旋转体体积",
    "derivation": "圆盘法（切片法）",
    "related": [
      "calc_integral_012"
    ],
    "calculator": {
      "inputs": [],
      "output": "V"
    }
  },
  {
    "id": "calc_integral_027",
    "name": "定积分应用 - 旋转体体积（壳法）",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "V = 2π∫[a,b] x f(x)dx（绕y轴旋转，壳法）",
    "latex": "V = 2\\pi \\int_a^b x f(x)dx \\quad \\text{（绕y轴旋转，壳法）}",
    "variables": [
      {
        "name": "V",
        "description": "体积",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "曲线函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分区间",
        "unit": ""
      }
    ],
    "conditions": "f(x) ≥ 0，在[a,b]上连续",
    "notes": "使用柱壳法计算旋转体体积，适用于绕y轴旋转的情况",
    "derivation": "柱壳法",
    "related": [
      "calc_integral_012",
      "calc_integral_026"
    ],
    "calculator": {
      "inputs": [],
      "output": "V"
    }
  },
  {
    "id": "calc_integral_028",
    "name": "定积分应用 - 旋转体侧面积",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "S = 2π∫[a,b] f(x)√(1 + [f'(x)]²)dx（绕x轴旋转）",
    "latex": "S = 2\\pi \\int_a^b f(x)\\sqrt{1 + [f'(x)]^2}dx \\quad \\text{（绕x轴旋转）}",
    "variables": [
      {
        "name": "S",
        "description": "侧面积",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "曲线函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分区间",
        "unit": ""
      }
    ],
    "conditions": "f(x) ≥ 0，f'(x)连续",
    "notes": "曲线绕坐标轴旋转形成的旋转体侧面积",
    "derivation": "旋转体表面积公式",
    "related": [
      "calc_integral_013"
    ],
    "calculator": {
      "inputs": [],
      "output": "S"
    }
  },
  {
    "id": "calc_integral_029",
    "name": "定积分应用 - 质心坐标",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "x̄ = ∫[a,b] x f(x)dx / ∫[a,b] f(x)dx, ȳ = (1/2)∫[a,b] f²(x)dx / ∫[a,b] f(x)dx",
    "latex": "\\bar{x} = \\frac{\\int_a^b x f(x)dx}{\\int_a^b f(x)dx}, \\quad \\bar{y} = \\frac{\\frac{1}{2}\\int_a^b f^2(x)dx}{\\int_a^b f(x)dx}",
    "variables": [
      {
        "name": "x̄, ȳ",
        "description": "质心坐标",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "曲线函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "积分区间",
        "unit": ""
      }
    ],
    "conditions": "f(x) ≥ 0，在[a,b]上连续",
    "notes": "平面图形质心的坐标计算公式",
    "derivation": "质心定义",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "centroid"
    }
  },
  {
    "id": "calc_integral_030",
    "name": "定积分应用 - 功",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "W = ∫[a,b] F(x)dx",
    "latex": "W = \\int_a^b F(x)dx",
    "variables": [
      {
        "name": "W",
        "description": "功",
        "unit": "焦耳(J)"
      },
      {
        "name": "F(x)",
        "description": "变力函数",
        "unit": "牛顿(N)"
      },
      {
        "name": "a, b",
        "description": "位移区间",
        "unit": "米(m)"
      }
    ],
    "conditions": "F(x)在[a,b]上连续",
    "notes": "变力沿直线做功的计算公式",
    "derivation": "功的定义",
    "related": [
      "calc_integral_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "W"
    }
  },
  {
    "id": "calc_integral_031",
    "name": "有理函数积分表 - 基本形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫1/(x-a) dx = ln|x-a| + C, ∫1/(x²+a²) dx = (1/a)arctan(x/a) + C, ∫1/(x²-a²) dx = (1/2a)ln|(x-a)/(x+a)| + C",
    "latex": "\\int \\frac{1}{x-a} dx = \\ln|x-a| + C, \\quad \\int \\frac{1}{x^2+a^2} dx = \\frac{1}{a}\\arctan\\frac{x}{a} + C, \\quad \\int \\frac{1}{x^2-a^2} dx = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C",
    "variables": [
      {
        "name": "a",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "a ≠ 0",
    "notes": "有理函数积分的基本形式",
    "derivation": "直接积分或换元法",
    "related": [
      "calc_integral_002",
      "calc_integral_007"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "a"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_032",
    "name": "有理函数积分表 - 高次形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫1/(x-a)ⁿ dx = -1/[(n-1)(x-a)ⁿ⁻¹] + C (n>1), ∫x/(x²+a²) dx = (1/2)ln(x²+a²) + C",
    "latex": "\\int \\frac{1}{(x-a)^n} dx = -\\frac{1}{(n-1)(x-a)^{n-1}} + C \\quad (n>1), \\quad \\int \\frac{x}{x^2+a^2} dx = \\frac{1}{2}\\ln(x^2+a^2) + C",
    "variables": [
      {
        "name": "a",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "正整数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "n > 1",
    "notes": "有理函数的高次幂积分",
    "derivation": "直接积分",
    "related": [
      "calc_integral_031"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "a",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_033",
    "name": "无理函数积分表 - 根式形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫1/√(x²+a²) dx = ln|x+√(x²+a²)| + C, ∫1/√(x²-a²) dx = ln|x+√(x²-a²)| + C, ∫√(x²+a²) dx = (x/2)√(x²+a²) + (a²/2)ln|x+√(x²+a²)| + C",
    "latex": "\\int \\frac{1}{\\sqrt{x^2+a^2}} dx = \\ln|x+\\sqrt{x^2+a^2}| + C, \\quad \\int \\frac{1}{\\sqrt{x^2-a^2}} dx = \\ln|x+\\sqrt{x^2-a^2}| + C, \\quad \\int \\sqrt{x^2+a^2} dx = \\frac{x}{2}\\sqrt{x^2+a^2} + \\frac{a^2}{2}\\ln|x+\\sqrt{x^2+a^2}| + C",
    "variables": [
      {
        "name": "a",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "a > 0, |x| > a（对于√(x²-a²)）",
    "notes": "含根式的无理函数积分",
    "derivation": "三角换元法或分部积分法",
    "related": [
      "calc_integral_008",
      "calc_integral_006"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "a"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_034",
    "name": "无理函数积分表 - 线性根式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫√(ax+b) dx = (2/3a)(ax+b)^(3/2) + C, ∫1/√(ax+b) dx = (2/a)√(ax+b) + C",
    "latex": "\\int \\sqrt{ax+b} dx = \\frac{2}{3a}(ax+b)^{3/2} + C, \\quad \\int \\frac{1}{\\sqrt{ax+b}} dx = \\frac{2}{a}\\sqrt{ax+b} + C",
    "variables": [
      {
        "name": "a, b",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "a ≠ 0, ax+b > 0",
    "notes": "线性根式函数的积分",
    "derivation": "换元法",
    "related": [
      "calc_integral_005"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "a",
        "b"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_035",
    "name": "三角函数积分表 - 完整版",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫sin x dx = -cos x + C, ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C, ∫csc²x dx = -cot x + C, ∫sec x tan x dx = sec x + C, ∫csc x cot x dx = -csc x + C",
    "latex": "\\int \\sin x dx = -\\cos x + C, \\quad \\int \\cos x dx = \\sin x + C, \\quad \\int \\sec^2 x dx = \\tan x + C, \\quad \\int \\csc^2 x dx = -\\cot x + C, \\quad \\int \\sec x \\tan x dx = \\sec x + C, \\quad \\int \\csc x \\cot x dx = -\\csc x + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "完整的三角函数积分表",
    "derivation": "由导数公式逆推",
    "related": [
      "calc_integral_002",
      "calc_integral_014",
      "calc_integral_015"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_036",
    "name": "三角函数积分表 - 乘积形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫sin mx sin nx dx = sin(m-n)x/[2(m-n)] - sin(m+n)x/[2(m+n)] + C, ∫cos mx cos nx dx = sin(m-n)x/[2(m-n)] + sin(m+n)x/[2(m+n)] + C, ∫sin mx cos nx dx = -cos(m-n)x/[2(m-n)] - cos(m+n)x/[2(m+n)] + C",
    "latex": "\\int \\sin mx \\sin nx dx = \\frac{\\sin(m-n)x}{2(m-n)} - \\frac{\\sin(m+n)x}{2(m+n)} + C, \\quad \\int \\cos mx \\cos nx dx = \\frac{\\sin(m-n)x}{2(m-n)} + \\frac{\\sin(m+n)x}{2(m+n)} + C, \\quad \\int \\sin mx \\cos nx dx = -\\frac{\\cos(m-n)x}{2(m-n)} - \\frac{\\cos(m+n)x}{2(m+n)} + C",
    "variables": [
      {
        "name": "m, n",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "m ≠ n",
    "notes": "三角函数乘积的积分，利用积化和差公式",
    "derivation": "积化和差公式",
    "related": [
      "calc_integral_035"
    ],
    "calculator": {
      "inputs": [
        "func",
        "m",
        "n",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_037",
    "name": "指数函数积分表 - 完整版",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫eˣ dx = eˣ + C, ∫aˣ dx = aˣ/ln a + C, ∫eᵏˣ dx = eᵏˣ/k + C, ∫x eˣ dx = eˣ(x-1) + C, ∫x² eˣ dx = eˣ(x²-2x+2) + C",
    "latex": "\\int e^x dx = e^x + C, \\quad \\int a^x dx = \\frac{a^x}{\\ln a} + C, \\quad \\int e^{kx} dx = \\frac{e^{kx}}{k} + C, \\quad \\int x e^x dx = e^x(x-1) + C, \\quad \\int x^2 e^x dx = e^x(x^2-2x+2) + C",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "k",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "a > 0, a ≠ 1, k ≠ 0",
    "notes": "完整的指数函数积分表，包括与多项式乘积的积分",
    "derivation": "直接积分或分部积分法",
    "related": [
      "calc_integral_002",
      "calc_integral_006",
      "calc_integral_017"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "a",
        "k"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_038",
    "name": "对数函数积分表 - 完整版",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫ln x dx = x ln x - x + C, ∫logₐ x dx = x(logₐ x - 1/ln a) + C, ∫x ln x dx = (x²/2)(ln x - 1/2) + C, ∫xⁿ ln x dx = xⁿ⁺¹[ln x/(n+1) - 1/(n+1)²] + C",
    "latex": "\\int \\ln x dx = x\\ln x - x + C, \\quad \\int \\log_a x dx = x\\left(\\log_a x - \\frac{1}{\\ln a}\\right) + C, \\quad \\int x \\ln x dx = \\frac{x^2}{2}\\left(\\ln x - \\frac{1}{2}\\right) + C, \\quad \\int x^n \\ln x dx = x^{n+1}\\left[\\frac{\\ln x}{n+1} - \\frac{1}{(n+1)^2}\\right] + C",
    "variables": [
      {
        "name": "a",
        "description": "底数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "x > 0, a > 0, a ≠ 1, n ≠ -1",
    "notes": "完整的对数函数积分表，包括与多项式乘积的积分",
    "derivation": "分部积分法",
    "related": [
      "calc_integral_006",
      "calc_integral_018"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "a",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_039",
    "name": "反三角函数积分表 - 直接积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫arcsin x dx = x arcsin x + √(1-x²) + C, ∫arccos x dx = x arccos x - √(1-x²) + C, ∫arctan x dx = x arctan x - (1/2)ln(1+x²) + C",
    "latex": "\\int \\arcsin x dx = x\\arcsin x + \\sqrt{1-x^2} + C, \\quad \\int \\arccos x dx = x\\arccos x - \\sqrt{1-x^2} + C, \\quad \\int \\arctan x dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ 1（arcsin, arccos）",
    "notes": "反三角函数的直接积分公式",
    "derivation": "分部积分法",
    "related": [
      "calc_integral_006",
      "calc_integral_019"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_040",
    "name": "反三角函数积分表 - 其他形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫arccot x dx = x arccot x + (1/2)ln(1+x²) + C, ∫arcsec x dx = x arcsec x - ln|x+√(x²-1)| + C, ∫arccsc x dx = x arccsc x + ln|x+√(x²-1)| + C",
    "latex": "\\int \\text{arccot} x dx = x\\text{arccot} x + \\frac{1}{2}\\ln(1+x^2) + C, \\quad \\int \\text{arcsec} x dx = x\\text{arcsec} x - \\ln|x+\\sqrt{x^2-1}| + C, \\quad \\int \\text{arccsc} x dx = x\\text{arccsc} x + \\ln|x+\\sqrt{x^2-1}| + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "|x| ≥ 1（arcsec, arccsc）",
    "notes": "其他反三角函数的积分",
    "derivation": "分部积分法",
    "related": [
      "calc_integral_039"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_041",
    "name": "双曲函数积分表 - 完整版",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫sinh x dx = cosh x + C, ∫cosh x dx = sinh x + C, ∫tanh x dx = ln(cosh x) + C, ∫coth x dx = ln|sinh x| + C, ∫sech x dx = 2arctan(eˣ) + C, ∫csch x dx = ln|tanh(x/2)| + C",
    "latex": "\\int \\sinh x dx = \\cosh x + C, \\quad \\int \\cosh x dx = \\sinh x + C, \\quad \\int \\tanh x dx = \\ln(\\cosh x) + C, \\quad \\int \\coth x dx = \\ln|\\sinh x| + C, \\quad \\int \\text{sech} x dx = 2\\arctan(e^x) + C, \\quad \\int \\text{csch} x dx = \\ln|\\tanh(x/2)| + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "x ≠ 0（coth, csch）",
    "notes": "完整的双曲函数积分表",
    "derivation": "由双曲函数导数公式逆推",
    "related": [
      "calc_integral_020"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_042",
    "name": "反双曲函数积分表",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫arsinh x dx = x arsinh x - √(x²+1) + C, ∫arcosh x dx = x arcosh x - √(x²-1) + C, ∫artanh x dx = x artanh x + (1/2)ln(1-x²) + C",
    "latex": "\\int \\text{arsinh} x dx = x\\text{arsinh} x - \\sqrt{x^2+1} + C, \\quad \\int \\text{arcosh} x dx = x\\text{arcosh} x - \\sqrt{x^2-1} + C, \\quad \\int \\text{artanh} x dx = x\\text{artanh} x + \\frac{1}{2}\\ln(1-x^2) + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "x ≥ 1（arcosh），|x| < 1（artanh）",
    "notes": "反双曲函数的积分公式，arsinh x = ln(x+√(x²+1))，arcosh x = ln(x+√(x²-1))，artanh x = (1/2)ln[(1+x)/(1-x)]",
    "derivation": "分部积分法",
    "related": [
      "calc_integral_006",
      "calc_integral_041"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_043",
    "name": "反双曲函数积分表 - 其他形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫arcoth x dx = x arcoth x + (1/2)ln(x²-1) + C, ∫arsech x dx = x arsech x + arcsin x + C, ∫arcsch x dx = x arcsch x + arsinh x + C",
    "latex": "\\int \\text{arcoth} x dx = x\\text{arcoth} x + \\frac{1}{2}\\ln(x^2-1) + C, \\quad \\int \\text{arsech} x dx = x\\text{arsech} x + \\arcsin x + C, \\quad \\int \\text{arcsch} x dx = x\\text{arcsch} x + \\text{arsinh} x + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "|x| > 1（arcoth），0 < x ≤ 1（arsech），x ≠ 0（arcsch）",
    "notes": "其他反双曲函数的积分",
    "derivation": "分部积分法",
    "related": [
      "calc_integral_042"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_044",
    "name": "三角函数积分表 - 高次幂",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫sinⁿx dx = -sinⁿ⁻¹x cos x/n + (n-1)/n ∫sinⁿ⁻²x dx, ∫cosⁿx dx = cosⁿ⁻¹x sin x/n + (n-1)/n ∫cosⁿ⁻²x dx",
    "latex": "\\int \\sin^n x dx = -\\frac{\\sin^{n-1}x \\cos x}{n} + \\frac{n-1}{n}\\int \\sin^{n-2}x dx, \\quad \\int \\cos^n x dx = \\frac{\\cos^{n-1}x \\sin x}{n} + \\frac{n-1}{n}\\int \\cos^{n-2}x dx",
    "variables": [
      {
        "name": "n",
        "description": "正整数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 2",
    "notes": "三角函数高次幂的递推积分公式",
    "derivation": "分部积分法",
    "related": [
      "calc_integral_006",
      "calc_integral_016"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_045",
    "name": "三角函数积分表 - 其他形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫tanⁿx dx = tanⁿ⁻¹x/(n-1) - ∫tanⁿ⁻²x dx, ∫cotⁿx dx = -cotⁿ⁻¹x/(n-1) - ∫cotⁿ⁻²x dx, ∫secⁿx dx = secⁿ⁻²x tan x/(n-1) + (n-2)/(n-1)∫secⁿ⁻²x dx",
    "latex": "\\int \\tan^n x dx = \\frac{\\tan^{n-1}x}{n-1} - \\int \\tan^{n-2}x dx, \\quad \\int \\cot^n x dx = -\\frac{\\cot^{n-1}x}{n-1} - \\int \\cot^{n-2}x dx, \\quad \\int \\sec^n x dx = \\frac{\\sec^{n-2}x \\tan x}{n-1} + \\frac{n-2}{n-1}\\int \\sec^{n-2}x dx",
    "variables": [
      {
        "name": "n",
        "description": "正整数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 2",
    "notes": "正切、余切、正割高次幂的递推积分公式",
    "derivation": "分部积分法或恒等变换",
    "related": [
      "calc_integral_006",
      "calc_integral_014",
      "calc_integral_015"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_046",
    "name": "有理函数积分表 - 其他形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫x/(x²+a²)ⁿ dx = -1/[2(n-1)(x²+a²)ⁿ⁻¹] + C, ∫1/(x²+a²)ⁿ dx = x/[2(n-1)a²(x²+a²)ⁿ⁻¹] + (2n-3)/[2(n-1)a²]∫1/(x²+a²)ⁿ⁻¹ dx",
    "latex": "\\int \\frac{x}{(x^2+a^2)^n} dx = -\\frac{1}{2(n-1)(x^2+a^2)^{n-1}} + C, \\quad \\int \\frac{1}{(x^2+a^2)^n} dx = \\frac{x}{2(n-1)a^2(x^2+a^2)^{n-1}} + \\frac{2n-3}{2(n-1)a^2}\\int \\frac{1}{(x^2+a^2)^{n-1}} dx",
    "variables": [
      {
        "name": "a",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "正整数",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 2, a ≠ 0",
    "notes": "有理函数高次幂的递推积分公式",
    "derivation": "分部积分法",
    "related": [
      "calc_integral_006",
      "calc_integral_031"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_047",
    "name": "无理函数积分表 - 其他根式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫1/√(a²-x²) dx = arcsin(x/a) + C, ∫1/√(x²-a²) dx = ln|x+√(x²-a²)| + C, ∫√(a²-x²) dx = (x/2)√(a²-x²) + (a²/2)arcsin(x/a) + C",
    "latex": "\\int \\frac{1}{\\sqrt{a^2-x^2}} dx = \\arcsin\\frac{x}{a} + C, \\quad \\int \\frac{1}{\\sqrt{x^2-a^2}} dx = \\ln|x+\\sqrt{x^2-a^2}| + C, \\quad \\int \\sqrt{a^2-x^2} dx = \\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a^2}{2}\\arcsin\\frac{x}{a} + C",
    "variables": [
      {
        "name": "a",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "a > 0, |x| < a（对于√(a²-x²)），|x| > a（对于√(x²-a²)）",
    "notes": "其他形式的根式积分",
    "derivation": "三角换元法",
    "related": [
      "calc_integral_008",
      "calc_integral_033"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x",
        "a"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_048",
    "name": "常见定积分值",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[0,π] sin x dx = 2, ∫[0,π/2] sin x dx = 1, ∫[0,∞] e⁻ˣ dx = 1, ∫[-∞,∞] e⁻ˣ² dx = √π, ∫[0,1] xⁿ(1-x)ᵐ dx = n!m!/(n+m+1)!",
    "latex": "\\int_0^{\\pi} \\sin x dx = 2, \\quad \\int_0^{\\pi/2} \\sin x dx = 1, \\quad \\int_0^{\\infty} e^{-x} dx = 1, \\quad \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}, \\quad \\int_0^1 x^n(1-x)^m dx = \\frac{n!m!}{(n+m+1)!}",
    "variables": [
      {
        "name": "n, m",
        "description": "非负整数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "常用的定积分值，包括欧拉积分",
    "derivation": "直接计算或利用特殊函数",
    "related": [
      "calc_integral_003",
      "calc_integral_004"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_049",
    "name": "含绝对值的积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫|x-a| dx = (x-a)|x-a|/2 + C, ∫|f(x)| dx = ∫f(x)dx (f(x)≥0时) 或 -∫f(x)dx (f(x)<0时)",
    "latex": "\\int |x-a| dx = \\frac{(x-a)|x-a|}{2} + C, \\quad \\int |f(x)| dx = \\begin{cases} \\int f(x)dx & f(x) \\geq 0 \\\\ -\\int f(x)dx & f(x) < 0 \\end{cases}",
    "variables": [
      {
        "name": "a",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "含绝对值函数的积分，需要分段处理",
    "derivation": "分段积分",
    "related": [
      "calc_integral_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_050",
    "name": "分式积分 - 其他形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫1/(x²+px+q) dx = 2/√(4q-p²) arctan[(2x+p)/√(4q-p²)] + C (当p²<4q), ∫(ax+b)/(x²+px+q) dx = (a/2)ln(x²+px+q) + [b-ap/2]/√(4q-p²) arctan[(2x+p)/√(4q-p²)] + C",
    "latex": "\\int \\frac{1}{x^2+px+q} dx = \\frac{2}{\\sqrt{4q-p^2}} \\arctan\\frac{2x+p}{\\sqrt{4q-p^2}} + C \\quad (p^2<4q), \\quad \\int \\frac{ax+b}{x^2+px+q} dx = \\frac{a}{2}\\ln(x^2+px+q) + \\frac{b-ap/2}{\\sqrt{4q-p^2}} \\arctan\\frac{2x+p}{\\sqrt{4q-p^2}} + C",
    "variables": [
      {
        "name": "a, b, p, q",
        "description": "常数",
        "unit": ""
      }
    ],
    "conditions": "p² < 4q（判别式小于0）",
    "notes": "二次分式的积分，当判别式小于0时",
    "derivation": "配方法",
    "related": [
      "calc_integral_031"
    ],
    "calculator": {
      "inputs": [],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_051",
    "name": "指数与三角函数的积分",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫eᵃˣ sin bx dx = eᵃˣ(a sin bx - b cos bx)/(a²+b²) + C, ∫eᵃˣ cos bx dx = eᵃˣ(a cos bx + b sin bx)/(a²+b²) + C",
    "latex": "\\int e^{ax} \\sin bx dx = \\frac{e^{ax}(a\\sin bx - b\\cos bx)}{a^2+b^2} + C, \\quad \\int e^{ax} \\cos bx dx = \\frac{e^{ax}(a\\cos bx + b\\sin bx)}{a^2+b^2} + C",
    "variables": [
      {
        "name": "a, b",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "a²+b² ≠ 0",
    "notes": "指数函数与三角函数乘积的积分",
    "derivation": "分部积分法（两次）",
    "related": [
      "calc_integral_006",
      "calc_integral_037"
    ],
    "calculator": {
      "inputs": [
        "func",
        "a",
        "b",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_052",
    "name": "双曲函数积分表 - 其他形式",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": [
      "大学",
      "积分表"
    ],
    "tags": [
      "常用公式"
    ],
    "formula": "∫sech²x dx = tanh x + C, ∫csch²x dx = -coth x + C, ∫sech x tanh x dx = -sech x + C, ∫csch x coth x dx = -csch x + C",
    "latex": "\\int \\text{sech}^2 x dx = \\tanh x + C, \\quad \\int \\text{csch}^2 x dx = -\\coth x + C, \\quad \\int \\text{sech} x \\tanh x dx = -\\text{sech} x + C, \\quad \\int \\text{csch} x \\coth x dx = -\\text{csch} x + C",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "C",
        "description": "积分常数",
        "unit": ""
      }
    ],
    "conditions": "x ≠ 0（csch, coth）",
    "notes": "双曲函数其他形式的积分",
    "derivation": "由双曲函数导数公式逆推",
    "related": [
      "calc_integral_041"
    ],
    "calculator": {
      "inputs": [
        "func",
        "x"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_ode_001",
    "name": "可分离变量微分方程",
    "category": "数学",
    "subCategory": "高等数学-微分方程",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "dy/dx = f(x)g(y) → ∫dy/g(y) = ∫f(x)dx",
    "latex": "\\frac{dy}{dx} = f(x)g(y) \\quad \\to \\quad \\int \\frac{dy}{g(y)} = \\int f(x)dx",
    "variables": [
      {
        "name": "f(x), g(y)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "x, y",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "g(y) ≠ 0",
    "notes": "变量可分离的一阶微分方程",
    "derivation": "分离变量法",
    "related": [
      "calc_integral_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "y(x)"
    }
  },
  {
    "id": "calc_ode_002",
    "name": "齐次微分方程",
    "category": "数学",
    "subCategory": "高等数学-微分方程",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "dy/dx = f(y/x) → 令 u = y/x，化为可分离变量方程",
    "latex": "\\frac{dy}{dx} = f\\left(\\frac{y}{x}\\right) \\quad \\to \\quad \\text{令} \\quad u = \\frac{y}{x}, \\quad \\text{化为可分离变量方程}",
    "variables": [
      {
        "name": "f(u)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "u",
        "description": "新变量",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "可通过变量替换化为可分离变量方程",
    "derivation": "变量替换法",
    "related": [
      "calc_ode_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "y(x)"
    }
  },
  {
    "id": "calc_ode_003",
    "name": "一阶线性微分方程",
    "category": "数学",
    "subCategory": "高等数学-微分方程",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "dy/dx + P(x)y = Q(x) → y = e^(-∫Pdx)[∫Qe^(∫Pdx)dx + C]",
    "latex": "\\frac{dy}{dx} + P(x)y = Q(x) \\quad \\to \\quad y = e^{-\\int Pdx}\\left[\\int Qe^{\\int Pdx}dx + C\\right]",
    "variables": [
      {
        "name": "P(x), Q(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "C",
        "description": "常数",
        "unit": ""
      }
    ],
    "conditions": "P(x), Q(x)连续",
    "notes": "一阶线性非齐次微分方程的通解公式",
    "derivation": "常数变易法",
    "related": [
      "calc_ode_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "y(x)"
    }
  },
  {
    "id": "calc_ode_004",
    "name": "二阶常系数齐次线性微分方程",
    "category": "数学",
    "subCategory": "高等数学-微分方程",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "y'' + py' + qy = 0 → 特征方程 r² + pr + q = 0，根据根的三种情况求解",
    "latex": "y'' + py' + qy = 0 \\quad \\to \\quad \\text{特征方程} \\quad r^2 + pr + q = 0, \\quad \\text{根据根的三种情况求解}",
    "variables": [
      {
        "name": "p, q",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "r",
        "description": "特征根",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "特征方程有两个不同实根、重根或共轭复根时，通解形式不同",
    "derivation": "特征方程法",
    "related": [
      "calc_ode_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "y(x)"
    }
  },
  {
    "id": "calc_ode_005",
    "name": "欧拉方程",
    "category": "数学",
    "subCategory": "高等数学-微分方程",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "x²y'' + pxy' + qy = 0 → 令 x = eᵗ，化为常系数方程",
    "latex": "x^2y'' + pxy' + qy = 0 \\quad \\to \\quad \\text{令} \\quad x = e^t, \\quad \\text{化为常系数方程}",
    "variables": [
      {
        "name": "p, q",
        "description": "常数",
        "unit": ""
      },
      {
        "name": "t",
        "description": "新变量",
        "unit": ""
      }
    ],
    "conditions": "x > 0",
    "notes": "可通过变量替换化为常系数线性微分方程",
    "derivation": "变量替换法",
    "related": [
      "calc_ode_004"
    ],
    "calculator": {
      "inputs": [],
      "output": "y(x)"
    }
  },
  {
    "id": "calc_series_004",
    "name": "正项级数审敛法 - 比较判别法",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若 0 ≤ aₙ ≤ bₙ，则：Σbₙ收敛 → Σaₙ收敛，Σaₙ发散 → Σbₙ发散",
    "latex": "\\text{若} \\quad 0 \\leq a_n \\leq b_n, \\quad \\text{则：} \\quad \\sum b_n \\text{收敛} \\to \\sum a_n \\text{收敛}, \\quad \\sum a_n \\text{发散} \\to \\sum b_n \\text{发散}",
    "variables": [
      {
        "name": "aₙ, bₙ",
        "description": "级数通项",
        "unit": ""
      }
    ],
    "conditions": "aₙ ≥ 0, bₙ ≥ 0",
    "notes": "通过比较判断正项级数的敛散性",
    "derivation": "级数理论",
    "related": [
      "calc_series_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "convergence"
    }
  },
  {
    "id": "calc_series_005",
    "name": "正项级数审敛法 - 比值判别法（达朗贝尔）",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "lim(n→∞) |aₙ₊₁/aₙ| = ρ，ρ < 1 收敛，ρ > 1 发散，ρ = 1 失效",
    "latex": "\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\rho, \\quad \\rho < 1 \\text{收敛}, \\quad \\rho > 1 \\text{发散}, \\quad \\rho = 1 \\text{失效}",
    "variables": [
      {
        "name": "aₙ",
        "description": "级数通项",
        "unit": ""
      },
      {
        "name": "ρ",
        "description": "极限值",
        "unit": ""
      }
    ],
    "conditions": "aₙ > 0",
    "notes": "通过相邻项的比值判断级数敛散性",
    "derivation": "级数理论",
    "related": [
      "calc_series_004"
    ],
    "calculator": {
      "inputs": [],
      "output": "convergence"
    }
  },
  {
    "id": "calc_series_006",
    "name": "正项级数审敛法 - 根值判别法（柯西）",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "lim(n→∞) ⁿ√|aₙ| = ρ，ρ < 1 收敛，ρ > 1 发散，ρ = 1 失效",
    "latex": "\\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} = \\rho, \\quad \\rho < 1 \\text{收敛}, \\quad \\rho > 1 \\text{发散}, \\quad \\rho = 1 \\text{失效}",
    "variables": [
      {
        "name": "aₙ",
        "description": "级数通项",
        "unit": ""
      },
      {
        "name": "ρ",
        "description": "极限值",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "通过通项的n次方根判断级数敛散性",
    "derivation": "级数理论",
    "related": [
      "calc_series_005"
    ],
    "calculator": {
      "inputs": [],
      "output": "convergence"
    }
  },
  {
    "id": "calc_series_007",
    "name": "交错级数审敛法 - 莱布尼茨判别法",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若 aₙ ≥ aₙ₊₁ > 0 且 lim aₙ = 0，则 Σ(-1)ⁿaₙ 收敛",
    "latex": "\\text{若} \\quad a_n \\geq a_{n+1} > 0 \\quad \\text{且} \\quad \\lim a_n = 0, \\quad \\text{则} \\quad \\sum (-1)^n a_n \\text{收敛}",
    "variables": [
      {
        "name": "aₙ",
        "description": "级数通项",
        "unit": ""
      }
    ],
    "conditions": "aₙ > 0",
    "notes": "判断交错级数的收敛性",
    "derivation": "级数理论",
    "related": [
      "calc_series_004"
    ],
    "calculator": {
      "inputs": [],
      "output": "convergence"
    }
  },
  {
    "id": "calc_series_008",
    "name": "傅里叶级数",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "f(x) = a₀/2 + Σ(n=1 to ∞)[aₙcos(nπx/L) + bₙsin(nπx/L)]",
    "latex": "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}[a_n\\cos\\frac{n\\pi x}{L} + b_n\\sin\\frac{n\\pi x}{L}]",
    "variables": [
      {
        "name": "f(x)",
        "description": "周期函数",
        "unit": ""
      },
      {
        "name": "aₙ, bₙ",
        "description": "傅里叶系数",
        "unit": ""
      },
      {
        "name": "L",
        "description": "半周期",
        "unit": ""
      }
    ],
    "conditions": "f(x)周期为2L，满足狄利克雷条件",
    "notes": "将周期函数展开为三角函数级数",
    "derivation": "傅里叶分析",
    "related": [
      "calc_series_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "series"
    }
  },
  {
    "id": "calc_complex_001",
    "name": "欧拉公式",
    "category": "数学",
    "subCategory": "复变函数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "e^(iθ) = cos θ + i sin θ",
    "latex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
    "variables": [
      {
        "name": "θ",
        "description": "角度（弧度）",
        "unit": "rad"
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": "i² = -1"
      },
      {
        "name": "e",
        "description": "自然常数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "连接指数函数和三角函数的桥梁，复数的指数形式",
    "derivation": "幂级数展开",
    "related": [
      "calc_series_003"
    ],
    "calculator": {
      "inputs": [
        "theta"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_complex_002",
    "name": "复数指数形式",
    "category": "数学",
    "subCategory": "复变函数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "z = r(cos θ + i sin θ) = re^(iθ)",
    "latex": "z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}",
    "variables": [
      {
        "name": "z",
        "description": "复数",
        "unit": ""
      },
      {
        "name": "r",
        "description": "模长",
        "unit": ""
      },
      {
        "name": "θ",
        "description": "幅角",
        "unit": "rad"
      }
    ],
    "conditions": "",
    "notes": "复数的极坐标形式（三角形式）和指数形式",
    "derivation": "欧拉公式",
    "related": [
      "calc_complex_001"
    ],
    "calculator": {
      "inputs": [
        "r",
        "theta"
      ],
      "output": "z"
    }
  },
  {
    "id": "calc_complex_003",
    "name": "棣莫弗公式",
    "category": "数学",
    "subCategory": "复变函数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "[r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)",
    "latex": "[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)",
    "variables": [
      {
        "name": "r",
        "description": "模长",
        "unit": ""
      },
      {
        "name": "θ",
        "description": "幅角",
        "unit": "rad"
      },
      {
        "name": "n",
        "description": "幂次",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "复数乘幂公式，用指数形式表示为 (re^(iθ))ⁿ = rⁿe^(inθ)",
    "derivation": "欧拉公式和指数运算",
    "related": [
      "calc_complex_002"
    ],
    "calculator": {
      "inputs": [
        "r",
        "theta",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_complex_004",
    "name": "复数开方公式",
    "category": "数学",
    "subCategory": "复变函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "ⁿ√z = ⁿ√r[cos((θ + 2kπ)/n) + i sin((θ + 2kπ)/n)], k = 0,1,...,n-1",
    "latex": "\\sqrt[n]{z} = \\sqrt[n]{r}\\left[\\cos\\frac{\\theta + 2k\\pi}{n} + i\\sin\\frac{\\theta + 2k\\pi}{n}\\right], \\quad k = 0,1,\\ldots,n-1",
    "variables": [
      {
        "name": "z",
        "description": "复数",
        "unit": ""
      },
      {
        "name": "r",
        "description": "模长",
        "unit": ""
      },
      {
        "name": "θ",
        "description": "幅角",
        "unit": "rad"
      },
      {
        "name": "n",
        "description": "开方次数",
        "unit": ""
      },
      {
        "name": "k",
        "description": "整数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "复数的n次方根有n个不同的值",
    "derivation": "棣莫弗公式",
    "related": [
      "calc_complex_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "roots"
    }
  },
  {
    "id": "linear_matrix_005",
    "name": "矩阵的秩",
    "category": "数学",
    "subCategory": "线性代数-矩阵",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "r(A) = 矩阵A中非零子式的最高阶数",
    "latex": "r(A) = \\text{矩阵A中非零子式的最高阶数}",
    "variables": [
      {
        "name": "A",
        "description": "矩阵",
        "unit": ""
      },
      {
        "name": "r(A)",
        "description": "矩阵的秩",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "矩阵的秩等于其行向量组或列向量组的最大线性无关组的向量个数",
    "derivation": "线性代数理论",
    "related": [
      "linear_matrix_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "rank"
    }
  },
  {
    "id": "linear_matrix_006",
    "name": "相似矩阵",
    "category": "数学",
    "subCategory": "线性代数-矩阵",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "若存在可逆矩阵P，使得 B = P⁻¹AP，则A与B相似",
    "latex": "\\text{若存在可逆矩阵P，使得} \\quad B = P^{-1}AP, \\quad \\text{则A与B相似}",
    "variables": [
      {
        "name": "A, B",
        "description": "矩阵",
        "unit": ""
      },
      {
        "name": "P",
        "description": "可逆矩阵",
        "unit": ""
      }
    ],
    "conditions": "P可逆",
    "notes": "相似矩阵有相同的特征值、行列式和迹",
    "derivation": "相似变换定义",
    "related": [
      "linear_matrix_004",
      "linear_eigen_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "similar"
    }
  },
  {
    "id": "linear_vector_001",
    "name": "施密特正交化",
    "category": "数学",
    "subCategory": "线性代数-向量",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "β₁ = α₁, β₂ = α₂ - (α₂,β₁)/(β₁,β₁)·β₁, β₃ = α₃ - (α₃,β₁)/(β₁,β₁)·β₁ - (α₃,β₂)/(β₂,β₂)·β₂, ...",
    "latex": "\\beta_1 = \\alpha_1, \\quad \\beta_2 = \\alpha_2 - \\frac{(\\alpha_2,\\beta_1)}{(\\beta_1,\\beta_1)}\\cdot\\beta_1, \\quad \\beta_3 = \\alpha_3 - \\frac{(\\alpha_3,\\beta_1)}{(\\beta_1,\\beta_1)}\\cdot\\beta_1 - \\frac{(\\alpha_3,\\beta_2)}{(\\beta_2,\\beta_2)}\\cdot\\beta_2, \\ldots",
    "variables": [
      {
        "name": "αᵢ",
        "description": "原向量组",
        "unit": ""
      },
      {
        "name": "βᵢ",
        "description": "正交化后的向量组",
        "unit": ""
      },
      {
        "name": "(·,·)",
        "description": "内积",
        "unit": ""
      }
    ],
    "conditions": "α₁, α₂, ..., αₙ 线性无关",
    "notes": "将线性无关向量组正交化",
    "derivation": "正交投影",
    "related": [
      "linear_eigen_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "orthogonal"
    }
  },
  {
    "id": "linear_eigen_002",
    "name": "特征值的性质",
    "category": "数学",
    "subCategory": "线性代数-特征值",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σλᵢ = tr(A)（迹），Πλᵢ = |A|（行列式）",
    "latex": "\\sum \\lambda_i = \\text{tr}(A) \\text{（迹）}, \\quad \\prod \\lambda_i = |A| \\text{（行列式）}",
    "variables": [
      {
        "name": "λᵢ",
        "description": "特征值",
        "unit": ""
      },
      {
        "name": "A",
        "description": "矩阵",
        "unit": ""
      },
      {
        "name": "tr(A)",
        "description": "矩阵的迹",
        "unit": ""
      }
    ],
    "conditions": "A为n阶方阵",
    "notes": "特征值的和等于矩阵的迹，特征值的积等于矩阵的行列式",
    "derivation": "特征多项式",
    "related": [
      "linear_eigen_001",
      "linear_det_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "properties"
    }
  },
  {
    "id": "prob_dist_001",
    "name": "二项分布",
    "category": "数学",
    "subCategory": "概率论-分布",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P(X = k) = C(n,k) pᵏ(1-p)ⁿ⁻ᵏ, E(X) = np, D(X) = np(1-p)",
    "latex": "P(X = k) = C_n^k p^k(1-p)^{n-k}, \\quad E(X) = np, \\quad D(X) = np(1-p)",
    "variables": [
      {
        "name": "n",
        "description": "试验次数",
        "unit": ""
      },
      {
        "name": "k",
        "description": "成功次数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "成功概率",
        "unit": ""
      },
      {
        "name": "E(X)",
        "description": "数学期望",
        "unit": ""
      },
      {
        "name": "D(X)",
        "description": "方差",
        "unit": ""
      }
    ],
    "conditions": "0 ≤ p ≤ 1, k = 0,1,...,n",
    "notes": "n次独立重复试验中成功k次的概率",
    "derivation": "概率定义",
    "related": [
      "prob_basic_001"
    ],
    "calculator": {
      "inputs": [
        "n",
        "k",
        "p"
      ],
      "output": "P"
    }
  },
  {
    "id": "prob_dist_002",
    "name": "泊松分布",
    "category": "数学",
    "subCategory": "概率论-分布",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "P(X = k) = λᵏe⁻ᵏ/k!, E(X) = λ, D(X) = λ",
    "latex": "P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad E(X) = \\lambda, \\quad D(X) = \\lambda",
    "variables": [
      {
        "name": "λ",
        "description": "参数（平均次数）",
        "unit": ""
      },
      {
        "name": "k",
        "description": "事件发生次数",
        "unit": ""
      },
      {
        "name": "E(X)",
        "description": "数学期望",
        "unit": ""
      },
      {
        "name": "D(X)",
        "description": "方差",
        "unit": ""
      }
    ],
    "conditions": "λ > 0, k = 0,1,2,...",
    "notes": "描述单位时间内随机事件发生次数的概率分布",
    "derivation": "二项分布的极限形式",
    "related": [
      "prob_dist_001"
    ],
    "calculator": {
      "inputs": [
        "lambda",
        "k"
      ],
      "output": "P"
    }
  },
  {
    "id": "prob_dist_003",
    "name": "正态分布",
    "category": "数学",
    "subCategory": "概率论-分布",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "f(x) = (1/√(2π)σ) e^(-(x-μ)²/(2σ²)), E(X) = μ, D(X) = σ²",
    "latex": "f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad E(X) = \\mu, \\quad D(X) = \\sigma^2",
    "variables": [
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
        "name": "E(X)",
        "description": "数学期望",
        "unit": ""
      },
      {
        "name": "D(X)",
        "description": "方差",
        "unit": ""
      }
    ],
    "conditions": "σ > 0",
    "notes": "最重要的连续型概率分布，许多随机现象都服从或近似服从正态分布",
    "derivation": "概率密度函数定义",
    "related": [
      "prob_basic_001"
    ],
    "calculator": {
      "inputs": [
        "x",
        "mu",
        "sigma"
      ],
      "output": "f"
    }
  },
  {
    "id": "prob_dist_004",
    "name": "标准正态分布",
    "category": "数学",
    "subCategory": "概率论-分布",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若 X ~ N(μ,σ²)，则 Z = (X-μ)/σ ~ N(0,1)",
    "latex": "\\text{若} \\quad X \\sim N(\\mu,\\sigma^2), \\quad \\text{则} \\quad Z = \\frac{X-\\mu}{\\sigma} \\sim N(0,1)",
    "variables": [
      {
        "name": "X",
        "description": "随机变量",
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
        "name": "Z",
        "description": "标准化随机变量",
        "unit": ""
      }
    ],
    "conditions": "σ > 0",
    "notes": "将一般正态分布标准化为标准正态分布",
    "derivation": "线性变换",
    "related": [
      "prob_dist_003"
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
    "id": "prob_stat_001",
    "name": "中心极限定理",
    "category": "数学",
    "subCategory": "概率论-统计",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若 X₁,X₂,...,Xₙ 独立同分布，E(Xᵢ) = μ, D(Xᵢ) = σ²，则 (X̄-μ)/(σ/√n) 近似服从 N(0,1)",
    "latex": "\\text{若} \\quad X_1,X_2,\\ldots,X_n \\text{独立同分布}, \\quad E(X_i) = \\mu, D(X_i) = \\sigma^2, \\quad \\text{则} \\quad \\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\text{近似服从} N(0,1)",
    "variables": [
      {
        "name": "Xᵢ",
        "description": "随机变量",
        "unit": ""
      },
      {
        "name": "X̄",
        "description": "样本均值",
        "unit": ""
      },
      {
        "name": "μ",
        "description": "总体均值",
        "unit": ""
      },
      {
        "name": "σ",
        "description": "总体标准差",
        "unit": ""
      },
      {
        "name": "n",
        "description": "样本容量",
        "unit": ""
      }
    ],
    "conditions": "n充分大",
    "notes": "无论总体分布如何，样本均值的分布都近似正态分布",
    "derivation": "概率论极限理论",
    "related": [
      "prob_dist_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "approximation"
    }
  },
  {
    "id": "prob_stat_002",
    "name": "大数定律",
    "category": "数学",
    "subCategory": "概率论-统计",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "lim(n→∞) P(|X̄ - μ| < ε) = 1",
    "latex": "\\lim_{n \\to \\infty} P(|\\bar{X} - \\mu| < \\varepsilon) = 1",
    "variables": [
      {
        "name": "X̄",
        "description": "样本均值",
        "unit": ""
      },
      {
        "name": "μ",
        "description": "总体均值",
        "unit": ""
      },
      {
        "name": "ε",
        "description": "任意正数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "样本容量",
        "unit": ""
      }
    ],
    "conditions": "n → ∞",
    "notes": "样本均值依概率收敛于总体均值",
    "derivation": "概率论极限理论",
    "related": [
      "prob_stat_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "convergence"
    }
  },
  {
    "id": "math_analysis_001",
    "name": "函数连续性定义",
    "category": "数学",
    "subCategory": "数学分析-连续性",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "lim(x→x₀) f(x) = f(x₀)",
    "latex": "\\lim_{x \\to x_0} f(x) = f(x_0)",
    "variables": [
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "x₀",
        "description": "点",
        "unit": ""
      }
    ],
    "conditions": "f(x)在x₀的邻域内有定义",
    "notes": "函数在某点连续的定义",
    "derivation": "连续性定义",
    "related": [
      "calc_limit_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "continuous"
    }
  },
  {
    "id": "math_analysis_002",
    "name": "一致连续性",
    "category": "数学",
    "subCategory": "数学分析-连续性",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∀ε > 0, ∃δ > 0, 使得当 |x₁ - x₂| < δ 时，|f(x₁) - f(x₂)| < ε 对所有 x₁,x₂ ∈ I 成立",
    "latex": "\\forall \\varepsilon > 0, \\exists \\delta > 0, \\text{使得当} |x_1 - x_2| < \\delta \\text{时}, |f(x_1) - f(x_2)| < \\varepsilon \\text{对所有} x_1,x_2 \\in I \\text{成立}",
    "variables": [
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "I",
        "description": "区间",
        "unit": ""
      },
      {
        "name": "ε, δ",
        "description": "正数",
        "unit": ""
      }
    ],
    "conditions": "f(x)在区间I上有定义",
    "notes": "δ的选取与x无关，只与ε有关",
    "derivation": "一致连续性定义",
    "related": [
      "math_analysis_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "uniform_continuous"
    }
  },
  {
    "id": "math_analysis_003",
    "name": "可微性定义",
    "category": "数学",
    "subCategory": "数学分析-可微性",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "f(x) = f(x₀) + f'(x₀)(x-x₀) + o(x-x₀)",
    "latex": "f(x) = f(x_0) + f'(x_0)(x-x_0) + o(x-x_0)",
    "variables": [
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "x₀",
        "description": "点",
        "unit": ""
      },
      {
        "name": "f'(x₀)",
        "description": "导数",
        "unit": ""
      }
    ],
    "conditions": "f(x)在x₀可导",
    "notes": "可微函数的线性近似",
    "derivation": "可微性定义",
    "related": [
      "calc_derivative_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "differentiable"
    }
  },
  {
    "id": "math_analysis_004",
    "name": "拉格朗日中值定理",
    "category": "数学",
    "subCategory": "数学分析-微分中值定理",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若f(x)在[a,b]连续，在(a,b)可导，则存在ξ∈(a,b)，使得 f'(ξ) = [f(b)-f(a)]/(b-a)",
    "latex": "\\text{若f(x)在[a,b]连续，在(a,b)可导，则存在} \\xi \\in (a,b), \\text{使得} \\quad f'(\\xi) = \\frac{f(b)-f(a)}{b-a}",
    "variables": [
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "区间端点",
        "unit": ""
      },
      {
        "name": "ξ",
        "description": "中值点",
        "unit": ""
      }
    ],
    "conditions": "f(x)在[a,b]连续，在(a,b)可导",
    "notes": "连接函数值和导数值的重要定理",
    "derivation": "罗尔定理",
    "related": [
      "calc_derivative_001",
      "math_analysis_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "xi"
    }
  },
  {
    "id": "math_analysis_005",
    "name": "柯西中值定理",
    "category": "数学",
    "subCategory": "数学分析-微分中值定理",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "若f(x),g(x)在[a,b]连续，在(a,b)可导，且g'(x)≠0，则存在ξ∈(a,b)，使得 [f(b)-f(a)]/[g(b)-g(a)] = f'(ξ)/g'(ξ)",
    "latex": "\\text{若f(x),g(x)在[a,b]连续，在(a,b)可导，且g'(x)≠0，则存在} \\xi \\in (a,b), \\text{使得} \\quad \\frac{f(b)-f(a)}{g(b)-g(a)} = \\frac{f'(\\xi)}{g'(\\xi)}",
    "variables": [
      {
        "name": "f(x), g(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "区间端点",
        "unit": ""
      },
      {
        "name": "ξ",
        "description": "中值点",
        "unit": ""
      }
    ],
    "conditions": "f(x),g(x)在[a,b]连续，在(a,b)可导，g'(x)≠0",
    "notes": "拉格朗日中值定理的推广",
    "derivation": "拉格朗日中值定理",
    "related": [
      "math_analysis_004"
    ],
    "calculator": {
      "inputs": [],
      "output": "xi"
    }
  },
  {
    "id": "math_analysis_006",
    "name": "洛必达法则",
    "category": "数学",
    "subCategory": "数学分析-极限",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若 lim f(x)/g(x) 为 0/0 或 ∞/∞，且 lim f'(x)/g'(x) 存在，则 lim f(x)/g(x) = lim f'(x)/g'(x)",
    "latex": "\\text{若} \\lim \\frac{f(x)}{g(x)} \\text{为} 0/0 \\text{或} \\infty/\\infty, \\text{且} \\lim \\frac{f'(x)}{g'(x)} \\text{存在，则} \\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}",
    "variables": [
      {
        "name": "f(x), g(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "f'(x), g'(x)",
        "description": "导数",
        "unit": ""
      }
    ],
    "conditions": "0/0或∞/∞型未定式，导数极限存在",
    "notes": "用于计算未定式极限",
    "derivation": "柯西中值定理",
    "related": [
      "calc_limit_001",
      "math_analysis_005"
    ],
    "calculator": {
      "inputs": [],
      "output": "limit"
    }
  },
  {
    "id": "sobolev_001",
    "name": "Sobolev空间定义",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "W^(k,p)(Ω) = {u ∈ L^p(Ω) : D^αu ∈ L^p(Ω), |α| ≤ k}",
    "latex": "W^{k,p}(\\Omega) = \\{u \\in L^p(\\Omega) : D^{\\alpha}u \\in L^p(\\Omega), |\\alpha| \\leq k\\}",
    "variables": [
      {
        "name": "W^(k,p)(Ω)",
        "description": "Sobolev空间",
        "unit": ""
      },
      {
        "name": "k",
        "description": "阶数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "指数，1 ≤ p ≤ ∞",
        "unit": ""
      },
      {
        "name": "Ω",
        "description": "开区域",
        "unit": ""
      },
      {
        "name": "α",
        "description": "多重指标",
        "unit": ""
      },
      {
        "name": "D^αu",
        "description": "弱导数",
        "unit": ""
      },
      {
        "name": "L^p(Ω)",
        "description": "Lebesgue空间",
        "unit": ""
      }
    ],
    "conditions": "1 ≤ p ≤ ∞, k ∈ ℕ",
    "notes": "Sobolev空间是所有直到k阶的弱导数都属于L^p空间的函数组成的Banach空间",
    "derivation": "泛函分析理论",
    "related": [
      "sobolev_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "space"
    }
  },
  {
    "id": "sobolev_002",
    "name": "Sobolev范数",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "||u||_(W^(k,p)) = (Σ(|α|≤k) ∫_Ω |D^αu|^p dx)^(1/p)",
    "latex": "\\|u\\|_{W^{k,p}} = \\left(\\sum_{|\\alpha|\\leq k} \\int_{\\Omega} |D^{\\alpha}u|^p dx\\right)^{1/p}",
    "variables": [
      {
        "name": "||u||_(W^(k,p))",
        "description": "Sobolev范数",
        "unit": ""
      },
      {
        "name": "k",
        "description": "阶数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "D^αu",
        "description": "弱导数",
        "unit": ""
      },
      {
        "name": "α",
        "description": "多重指标",
        "unit": ""
      }
    ],
    "conditions": "1 ≤ p < ∞",
    "notes": "当p = ∞时，范数定义为 ||u||_(W^(k,∞)) = max(|α|≤k) ||D^αu||_(L^∞)",
    "derivation": "Sobolev空间定义",
    "related": [
      "sobolev_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "norm"
    }
  },
  {
    "id": "sobolev_003",
    "name": "H^k空间（Hilbert-Sobolev空间）",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "H^k(Ω) = W^(k,2)(Ω)",
    "latex": "H^k(\\Omega) = W^{k,2}(\\Omega)",
    "variables": [
      {
        "name": "H^k(Ω)",
        "description": "Hilbert-Sobolev空间",
        "unit": ""
      },
      {
        "name": "W^(k,2)(Ω)",
        "description": "Sobolev空间（p=2）",
        "unit": ""
      },
      {
        "name": "k",
        "description": "阶数",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "当p=2时，Sobolev空间是Hilbert空间，具有内积：<u,v>_(H^k) = Σ(|α|≤k) ∫_Ω D^αu · D^αv dx",
    "derivation": "Sobolev空间定义",
    "related": [
      "sobolev_001",
      "sobolev_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "space"
    }
  },
  {
    "id": "sobolev_004",
    "name": "Sobolev嵌入定理（基本形式）",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若 kp < n，则 W^(k,p)(ℝⁿ) ⊂ L^(p*)(ℝⁿ)，其中 p* = np/(n-kp)",
    "latex": "\\text{若} \\quad kp < n, \\quad \\text{则} \\quad W^{k,p}(\\mathbb{R}^n) \\subset L^{p^*}(\\mathbb{R}^n), \\quad \\text{其中} \\quad p^* = \\frac{np}{n-kp}",
    "variables": [
      {
        "name": "k",
        "description": "阶数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "空间维数",
        "unit": ""
      },
      {
        "name": "p*",
        "description": "临界指数",
        "unit": ""
      }
    ],
    "conditions": "kp < n, Ω有界且边界充分光滑时也成立",
    "notes": "Sobolev空间可以连续嵌入到Lebesgue空间中，是偏微分方程理论的基础",
    "derivation": "Sobolev嵌入定理",
    "related": [
      "sobolev_001"
    ],
    "calculator": {
      "inputs": [
        "k",
        "p",
        "n"
      ],
      "output": "p_star"
    }
  },
  {
    "id": "sobolev_005",
    "name": "Sobolev嵌入定理（临界情况）",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "若 kp = n，则 W^(k,p)(ℝⁿ) ⊂ L^q(ℝⁿ) 对所有 q ∈ [p,∞) 成立",
    "latex": "\\text{若} \\quad kp = n, \\quad \\text{则} \\quad W^{k,p}(\\mathbb{R}^n) \\subset L^q(\\mathbb{R}^n) \\quad \\text{对所有} \\quad q \\in [p,\\infty) \\text{成立}",
    "variables": [
      {
        "name": "k",
        "description": "阶数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "空间维数",
        "unit": ""
      },
      {
        "name": "q",
        "description": "Lebesgue空间指数",
        "unit": ""
      }
    ],
    "conditions": "kp = n",
    "notes": "临界情况下的Sobolev嵌入",
    "derivation": "Sobolev嵌入定理",
    "related": [
      "sobolev_004"
    ],
    "calculator": {
      "inputs": [],
      "output": "embedding"
    }
  },
  {
    "id": "sobolev_006",
    "name": "Morrey不等式",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "若 kp > n，则 W^(k,p)(ℝⁿ) ⊂ C^0,α(ℝⁿ)，其中 α = k - n/p",
    "latex": "\\text{若} \\quad kp > n, \\quad \\text{则} \\quad W^{k,p}(\\mathbb{R}^n) \\subset C^{0,\\alpha}(\\mathbb{R}^n), \\quad \\text{其中} \\quad \\alpha = k - n/p",
    "variables": [
      {
        "name": "k",
        "description": "阶数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "空间维数",
        "unit": ""
      },
      {
        "name": "α",
        "description": "Hölder指数",
        "unit": ""
      },
      {
        "name": "C^0,α",
        "description": "Hölder连续函数空间",
        "unit": ""
      }
    ],
    "conditions": "kp > n",
    "notes": "当kp > n时，Sobolev空间可以嵌入到连续函数空间中",
    "derivation": "Morrey不等式",
    "related": [
      "sobolev_004"
    ],
    "calculator": {
      "inputs": [
        "k",
        "p",
        "n"
      ],
      "output": "alpha"
    }
  },
  {
    "id": "sobolev_007",
    "name": "Poincaré不等式",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "对于 u ∈ H₀¹(Ω)，有 ||u||_(L²) ≤ C ||∇u||_(L²)",
    "latex": "\\text{对于} \\quad u \\in H_0^1(\\Omega), \\quad \\text{有} \\quad \\|u\\|_{L^2} \\leq C \\|\\nabla u\\|_{L^2}",
    "variables": [
      {
        "name": "u",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "H₀¹(Ω)",
        "description": "零边界条件的Sobolev空间",
        "unit": ""
      },
      {
        "name": "C",
        "description": "Poincaré常数",
        "unit": ""
      },
      {
        "name": "∇u",
        "description": "梯度",
        "unit": ""
      }
    ],
    "conditions": "Ω有界，u在边界上为零",
    "notes": "在零边界条件下，L²范数可以用梯度的L²范数控制",
    "derivation": "变分法",
    "related": [
      "sobolev_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "inequality"
    }
  },
  {
    "id": "sobolev_008",
    "name": "弱导数定义",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "对于 u ∈ L^p(Ω)，若存在 v ∈ L^p(Ω) 使得 ∫_Ω u·D^αφ dx = (-1)^|α| ∫_Ω v·φ dx 对所有 φ ∈ C₀^∞(Ω)，则称 v = D^αu",
    "latex": "\\text{对于} \\quad u \\in L^p(\\Omega), \\quad \\text{若存在} \\quad v \\in L^p(\\Omega) \\quad \\text{使得} \\quad \\int_{\\Omega} u \\cdot D^{\\alpha}\\varphi dx = (-1)^{|\\alpha|} \\int_{\\Omega} v \\cdot \\varphi dx \\quad \\text{对所有} \\quad \\varphi \\in C_0^{\\infty}(\\Omega), \\quad \\text{则称} \\quad v = D^{\\alpha}u",
    "variables": [
      {
        "name": "u",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "v = D^αu",
        "description": "弱导数",
        "unit": ""
      },
      {
        "name": "α",
        "description": "多重指标",
        "unit": ""
      },
      {
        "name": "φ",
        "description": "测试函数（紧支光滑函数）",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "弱导数是对经典导数的推广，适用于不可微的函数",
    "derivation": "分布理论",
    "related": [
      "sobolev_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "weak_derivative"
    }
  },
  {
    "id": "sobolev_009",
    "name": "Rellich-Kondrachov紧嵌入定理",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "若 kp < n，Ω有界且边界Lipschitz，则 W^(k,p)(Ω) 紧嵌入到 L^q(Ω)，其中 1 ≤ q < p*",
    "latex": "\\text{若} \\quad kp < n, \\Omega \\text{有界且边界Lipschitz}, \\quad \\text{则} \\quad W^{k,p}(\\Omega) \\text{紧嵌入到} L^q(\\Omega), \\quad \\text{其中} \\quad 1 \\leq q < p^*",
    "variables": [
      {
        "name": "k",
        "description": "阶数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "空间维数",
        "unit": ""
      },
      {
        "name": "q",
        "description": "Lebesgue空间指数",
        "unit": ""
      },
      {
        "name": "p*",
        "description": "临界指数",
        "unit": ""
      }
    ],
    "conditions": "Ω有界，边界Lipschitz连续，kp < n",
    "notes": "紧嵌入意味着有界序列存在收敛子列，在偏微分方程存在性理论中非常重要",
    "derivation": "Rellich-Kondrachov定理",
    "related": [
      "sobolev_004"
    ],
    "calculator": {
      "inputs": [],
      "output": "compact_embedding"
    }
  },
  {
    "id": "sobolev_010",
    "name": "分数阶Sobolev空间",
    "category": "数学",
    "subCategory": "泛函分析-Sobolev空间",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "W^(s,p)(Ω) = {u ∈ L^p(Ω) : [u]_(W^(s,p)) < ∞}，其中 [u]_(W^(s,p))^p = ∫_Ω∫_Ω |u(x)-u(y)|^p/|x-y|^(n+sp) dxdy",
    "latex": "W^{s,p}(\\Omega) = \\{u \\in L^p(\\Omega) : [u]_{W^{s,p}} < \\infty\\}, \\quad \\text{其中} \\quad [u]_{W^{s,p}}^p = \\int_{\\Omega}\\int_{\\Omega} \\frac{|u(x)-u(y)|^p}{|x-y|^{n+sp}} dxdy",
    "variables": [
      {
        "name": "W^(s,p)(Ω)",
        "description": "分数阶Sobolev空间",
        "unit": ""
      },
      {
        "name": "s",
        "description": "分数阶数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "指数",
        "unit": ""
      },
      {
        "name": "[u]_(W^(s,p))",
        "description": "Gagliardo半范数",
        "unit": ""
      }
    ],
    "conditions": "0 < s < 1",
    "notes": "分数阶Sobolev空间允许非整数阶的导数，在分数阶偏微分方程中非常重要",
    "derivation": "分数阶微积分理论",
    "related": [
      "sobolev_001"
    ],
    "calculator": {
      "inputs": [],
      "output": "space"
    }
  },
  {
    "id": "trig_hyperbolic_001",
    "name": "正弦函数的复指数表示",
    "category": "数学",
    "subCategory": "高等数学-三角函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "sin x = (e^(ix) - e^(-ix)) / (2i) = -i sinh (ix)",
    "latex": "\\sin x = \\frac{e^{ix} - e^{-ix}}{2i} = -i \\sinh (ix)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": ""
      }
    ],
    "conditions": "x为实数或复数",
    "notes": "正弦函数与复指数函数的关系",
    "derivation": "欧拉公式",
    "related": [
      "trig_hyperbolic_002"
    ]
  },
  {
    "id": "trig_hyperbolic_002",
    "name": "余弦函数的复指数表示",
    "category": "数学",
    "subCategory": "高等数学-三角函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "cos x = (e^(ix) + e^(-ix)) / 2 = cosh (ix)",
    "latex": "\\cos x = \\frac{e^{ix} + e^{-ix}}{2} = \\cosh (ix)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": ""
      }
    ],
    "conditions": "x为实数或复数",
    "notes": "余弦函数与复指数函数的关系",
    "derivation": "欧拉公式",
    "related": [
      "trig_hyperbolic_001"
    ]
  },
  {
    "id": "trig_hyperbolic_003",
    "name": "三角函数与双曲函数的复数关系",
    "category": "数学",
    "subCategory": "高等数学-三角函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "sin (ix) = i sinh x, cos (ix) = cosh x",
    "latex": "\\sin (ix) = i \\sinh x, \\quad \\cos (ix) = \\cosh x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": ""
      }
    ],
    "conditions": "x为实数",
    "notes": "三角函数与双曲函数通过虚数单位的关系",
    "derivation": "双曲函数定义",
    "related": [
      "trig_hyperbolic_001",
      "trig_hyperbolic_002"
    ]
  },
  {
    "id": "trig_hyperbolic_004",
    "name": "反正弦函数的对数表示",
    "category": "数学",
    "subCategory": "高等数学-三角函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "sin^(-1)x = -i log (ix + sqrt(1-x²))",
    "latex": "\\sin^{-1}x = -i \\log (ix + \\sqrt{1-x^2})",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ 1",
    "notes": "反正弦函数的复数对数形式",
    "derivation": "从sin x的复指数表示推导",
    "related": [
      "trig_hyperbolic_005",
      "trig_hyperbolic_006"
    ]
  },
  {
    "id": "trig_hyperbolic_005",
    "name": "反余弦函数的对数表示",
    "category": "数学",
    "subCategory": "高等数学-三角函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "cos^(-1)x = -i log (x + sqrt(x² - 1))",
    "latex": "\\cos^{-1}x = -i \\log (x + \\sqrt{x^2 - 1})",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": ""
      }
    ],
    "conditions": "|x| ≥ 1",
    "notes": "反余弦函数的复数对数形式",
    "derivation": "从cos x的复指数表示推导",
    "related": [
      "trig_hyperbolic_004",
      "trig_hyperbolic_006"
    ]
  },
  {
    "id": "trig_hyperbolic_006",
    "name": "反正切函数的对数表示",
    "category": "数学",
    "subCategory": "高等数学-三角函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "tan^(-1)x = (i/2) log ((1-ix) / (1+ix))",
    "latex": "\\tan^{-1}x = \\frac{i}{2} \\log \\frac{1-ix}{1+ix}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": ""
      }
    ],
    "conditions": "x为实数",
    "notes": "反正切函数的复数对数形式",
    "derivation": "从tan x的复指数表示推导",
    "related": [
      "trig_hyperbolic_004",
      "trig_hyperbolic_005"
    ]
  },
  {
    "id": "trig_hyperbolic_007",
    "name": "双曲正弦函数定义",
    "category": "数学",
    "subCategory": "高等数学-双曲函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "sinh x = (e^x - e^(-x)) / 2 = 1 / csch x",
    "latex": "\\sinh x = \\frac{e^x - e^{-x}}{2} = \\frac{1}{\\text{csch } x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x为实数或复数",
    "notes": "双曲正弦函数的定义及其与双曲余割函数的关系",
    "derivation": "双曲函数定义",
    "related": [
      "trig_hyperbolic_008",
      "trig_hyperbolic_009"
    ]
  },
  {
    "id": "trig_hyperbolic_008",
    "name": "双曲余弦函数定义",
    "category": "数学",
    "subCategory": "高等数学-双曲函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "cosh x = (e^x + e^(-x)) / 2 = 1 / sech x",
    "latex": "\\cosh x = \\frac{e^x + e^{-x}}{2} = \\frac{1}{\\text{sech } x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x为实数或复数",
    "notes": "双曲余弦函数的定义及其与双曲正割函数的关系",
    "derivation": "双曲函数定义",
    "related": [
      "trig_hyperbolic_007",
      "trig_hyperbolic_009"
    ]
  },
  {
    "id": "trig_hyperbolic_009",
    "name": "双曲正切函数定义",
    "category": "数学",
    "subCategory": "高等数学-双曲函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "tanh x = sinh x / cosh x = (e^x - e^(-x)) / (e^x + e^(-x)) = 1 / coth x",
    "latex": "\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}} = \\frac{1}{\\coth x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x为实数或复数",
    "notes": "双曲正切函数的定义及其与双曲余切函数的关系",
    "derivation": "双曲函数定义",
    "related": [
      "trig_hyperbolic_007",
      "trig_hyperbolic_008"
    ]
  },
  {
    "id": "trig_hyperbolic_010",
    "name": "反双曲正弦函数",
    "category": "数学",
    "subCategory": "高等数学-双曲函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "sinh^(-1)x = log(x + sqrt(x² + 1))",
    "latex": "\\sinh^{-1}x = \\log(x + \\sqrt{x^2 + 1})",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x为实数",
    "notes": "反双曲正弦函数的对数形式",
    "derivation": "从sinh x的定义推导",
    "related": [
      "trig_hyperbolic_011",
      "trig_hyperbolic_012"
    ]
  },
  {
    "id": "trig_hyperbolic_011",
    "name": "反双曲余弦函数",
    "category": "数学",
    "subCategory": "高等数学-双曲函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "cosh^(-1)x = log(x + sqrt(x² - 1))",
    "latex": "\\cosh^{-1}x = \\log(x + \\sqrt{x^2 - 1})",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x ≥ 1",
    "notes": "反双曲余弦函数的对数形式",
    "derivation": "从cosh x的定义推导",
    "related": [
      "trig_hyperbolic_010",
      "trig_hyperbolic_012"
    ]
  },
  {
    "id": "trig_hyperbolic_012",
    "name": "反双曲正切函数",
    "category": "数学",
    "subCategory": "高等数学-双曲函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "tanh^(-1)x = (1/2) log((1+x)/(1-x)), coth^(-1)x = (1/2) log((x+1)/(x-1))",
    "latex": "\\tanh^{-1}x = \\frac{1}{2} \\log\\frac{1+x}{1-x}, \\quad \\coth^{-1}x = \\frac{1}{2} \\log\\frac{x+1}{x-1}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < 1 (tanh^(-1)), |x| > 1 (coth^(-1))",
    "notes": "反双曲正切和反双曲余切函数的对数形式",
    "derivation": "从tanh x和coth x的定义推导",
    "related": [
      "trig_hyperbolic_010",
      "trig_hyperbolic_011"
    ]
  },
  {
    "id": "trig_hyperbolic_013",
    "name": "双曲函数与三角函数的复数关系",
    "category": "数学",
    "subCategory": "高等数学-双曲函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "tanh x = -i tan (ix), coth x = i cot (ix)",
    "latex": "\\tanh x = -i \\tan (ix), \\quad \\coth x = i \\cot (ix)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": ""
      }
    ],
    "conditions": "x为实数",
    "notes": "双曲函数与三角函数通过虚数单位的关系",
    "derivation": "从双曲函数和三角函数的定义推导",
    "related": [
      "trig_hyperbolic_003",
      "trig_hyperbolic_014"
    ]
  },
  {
    "id": "trig_hyperbolic_014",
    "name": "双曲函数与三角函数的复数关系（续）",
    "category": "数学",
    "subCategory": "高等数学-双曲函数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "sech x = sec (ix), csch x = i csc (ix)",
    "latex": "\\text{sech } x = \\sec (ix), \\quad \\text{csch } x = i \\csc (ix)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      },
      {
        "name": "i",
        "description": "虚数单位",
        "unit": ""
      }
    ],
    "conditions": "x为实数",
    "notes": "双曲正割和双曲余割函数与三角函数的复数关系",
    "derivation": "从双曲函数和三角函数的定义推导",
    "related": [
      "trig_hyperbolic_013"
    ]
  },
  {
    "id": "series_sum_001",
    "name": "常用求和公式 1",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Σ(n=0 to ∞) x^n = 1 / (1 - x)",
    "latex": "\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < 1",
    "notes": "几何级数求和公式",
    "derivation": "等比数列求和公式的极限形式",
    "related": [
      "series_sum_002",
      "series_sum_003"
    ]
  },
  {
    "id": "series_sum_002",
    "name": "常用求和公式 2",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) nx^n = x / (1 - x)²",
    "latex": "\\sum_{n=1}^{\\infty} nx^n = \\frac{x}{(1-x)^2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < 1",
    "notes": "几何级数的加权求和",
    "derivation": "对几何级数求导",
    "related": [
      "series_sum_001",
      "series_sum_003"
    ]
  },
  {
    "id": "series_sum_003",
    "name": "常用求和公式 3",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) n²x^n = x(1 + x) / (1 - x)³",
    "latex": "\\sum_{n=1}^{\\infty} n^2x^n = \\frac{x(1+x)}{(1-x)^3}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < 1",
    "notes": "几何级数的平方加权求和",
    "derivation": "对几何级数多次求导",
    "related": [
      "series_sum_001",
      "series_sum_002"
    ]
  },
  {
    "id": "series_sum_004",
    "name": "常用求和公式 4",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) x^n / n = -ln(1 - x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{x^n}{n} = -\\ln(1-x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "-1 ≤ x < 1",
    "notes": "对数函数的幂级数展开",
    "derivation": "对几何级数积分",
    "related": [
      "series_sum_005"
    ]
  },
  {
    "id": "series_sum_005",
    "name": "常用求和公式 5",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) x^n / n = ln(1 + x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}x^n}{n} = \\ln(1+x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "-1 < x ≤ 1",
    "notes": "对数函数的交错级数展开",
    "derivation": "对交错几何级数积分",
    "related": [
      "series_sum_004",
      "series_sum_006"
    ]
  },
  {
    "id": "series_sum_006",
    "name": "常用求和公式 6",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) / n = ln2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n} = \\ln 2",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "ln2的级数表示",
    "derivation": "公式5°中令x=1",
    "related": [
      "series_sum_005"
    ]
  },
  {
    "id": "series_sum_007",
    "name": "常用求和公式 7",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=2 to ∞) x^n / (n(n-1)) = (1 - x)ln(1 - x) + x",
    "latex": "\\sum_{n=2}^{\\infty} \\frac{x^n}{n(n-1)} = (1-x)\\ln(1-x) + x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ 1",
    "notes": "涉及对数函数的级数求和",
    "derivation": "部分分式分解后积分",
    "related": [
      "series_sum_004"
    ]
  },
  {
    "id": "series_sum_008",
    "name": "常用求和公式 8",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / (n(n+1)) = 1",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = 1",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "望远镜级数求和",
    "derivation": "部分分式分解",
    "related": [
      "series_sum_009"
    ]
  },
  {
    "id": "series_sum_009",
    "name": "常用求和公式 9",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) / (n(n+1)) = ln4 - 1",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n(n+1)} = \\ln 4 - 1",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "交错望远镜级数求和",
    "derivation": "交错级数的部分分式分解",
    "related": [
      "series_sum_008"
    ]
  },
  {
    "id": "series_sum_010",
    "name": "常用求和公式 10",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) x^(2n-1) / (2n-1) = (1/2) ln((1 + x) / (1 - x))",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{x^{2n-1}}{2n-1} = \\frac{1}{2} \\ln\\frac{1+x}{1-x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < 1",
    "notes": "反双曲正切函数的级数展开",
    "derivation": "从对数级数推导",
    "related": [
      "series_sum_011"
    ]
  },
  {
    "id": "series_sum_011",
    "name": "常用求和公式 11",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) x^(2n-1) / (2n-1) = arctan x",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}x^{2n-1}}{2n-1} = \\arctan x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ 1",
    "notes": "反正切函数的幂级数展开（莱布尼茨级数）",
    "derivation": "对几何级数积分并代入x²",
    "related": [
      "series_sum_010",
      "series_sum_012"
    ]
  },
  {
    "id": "series_sum_012",
    "name": "常用求和公式 12",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) / (2n-1) = π/4",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{2n-1} = \\frac{\\pi}{4}",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "π/4的级数表示（莱布尼茨公式）",
    "derivation": "公式11°中令x=1",
    "related": [
      "series_sum_011"
    ]
  },
  {
    "id": "series_sum_013",
    "name": "常用求和公式 13",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=2 to ∞) x^n / (n² - 1) = (2 + x) / 4 + (1 - x²) / (2x) ln(1 - x)",
    "latex": "\\sum_{n=2}^{\\infty} \\frac{x^n}{n^2-1} = \\frac{2+x}{4} + \\frac{1-x^2}{2x} \\ln(1-x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ 1",
    "notes": "涉及对数函数的级数求和",
    "derivation": "部分分式分解后积分",
    "related": [
      "series_sum_014",
      "series_sum_015"
    ]
  },
  {
    "id": "series_sum_014",
    "name": "常用求和公式 14",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=2 to ∞) 1 / (n² - 1) = 3/4",
    "latex": "\\sum_{n=2}^{\\infty} \\frac{1}{n^2-1} = \\frac{3}{4}",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "常数级数求和",
    "derivation": "公式13°中令x=1",
    "related": [
      "series_sum_013",
      "series_sum_015"
    ]
  },
  {
    "id": "series_sum_015",
    "name": "常用求和公式 15",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=2 to ∞) (-1)^n / (n² - 1) = 1/4",
    "latex": "\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{n^2-1} = \\frac{1}{4}",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "交错常数级数求和",
    "derivation": "交错级数的部分分式分解",
    "related": [
      "series_sum_013",
      "series_sum_014"
    ]
  },
  {
    "id": "series_sum_016",
    "name": "常用求和公式 16",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) x^(2n) / (n(2n-1)) = x ln((1 + x) / (1 - x)) + ln(1 - x²)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{x^{2n}}{n(2n-1)} = x \\ln\\frac{1+x}{1-x} + \\ln(1-x^2)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < 1",
    "notes": "涉及对数函数的级数求和",
    "derivation": "部分分式分解后积分",
    "related": [
      "series_sum_017"
    ]
  },
  {
    "id": "series_sum_017",
    "name": "常用求和公式 17",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) x^(2n) / (n(2n-1)) = 2x arctan x - ln(1 + x²)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}x^{2n}}{n(2n-1)} = 2x \\arctan x - \\ln(1+x^2)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ 1",
    "notes": "涉及反正切和对数函数的级数求和",
    "derivation": "部分分式分解后积分",
    "related": [
      "series_sum_016",
      "series_sum_018",
      "series_sum_019"
    ]
  },
  {
    "id": "series_sum_018",
    "name": "常用求和公式 18",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / (n(2n-1)) = 2ln2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n(2n-1)} = 2\\ln 2",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "常数级数求和",
    "derivation": "公式16°中令x=1",
    "related": [
      "series_sum_016",
      "series_sum_019"
    ]
  },
  {
    "id": "series_sum_019",
    "name": "常用求和公式 19",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) / (n(2n-1)) = π/2 - ln2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n(2n-1)} = \\frac{\\pi}{2} - \\ln 2",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "交错常数级数求和",
    "derivation": "公式17°中令x=1",
    "related": [
      "series_sum_017",
      "series_sum_018"
    ]
  },
  {
    "id": "series_sum_020",
    "name": "常用求和公式 20",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Σ(n=0 to ∞) x^n / n! = e^x",
    "latex": "\\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = e^x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "指数函数的泰勒级数展开",
    "derivation": "泰勒级数",
    "related": [
      "series_sum_021",
      "series_sum_022"
    ]
  },
  {
    "id": "series_sum_021",
    "name": "常用求和公式 21",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=0 to ∞) x^(2n+1) / (2n+1)! = sinh x",
    "latex": "\\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{(2n+1)!} = \\sinh x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "双曲正弦函数的泰勒级数展开",
    "derivation": "泰勒级数",
    "related": [
      "series_sum_020",
      "series_sum_022"
    ]
  },
  {
    "id": "series_sum_022",
    "name": "常用求和公式 22",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Σ(n=0 to ∞) (-1)^n x^(2n+1) / (2n+1)! = sin x",
    "latex": "\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = \\sin x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "正弦函数的泰勒级数展开",
    "derivation": "泰勒级数",
    "related": [
      "series_sum_020",
      "series_sum_021"
    ]
  },
  {
    "id": "series_sum_023",
    "name": "常用求和公式 23",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=0 to ∞) x^(2n) / (2n)! = cosh x",
    "latex": "\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!} = \\cosh x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "双曲余弦函数的泰勒级数展开",
    "derivation": "泰勒级数",
    "related": [
      "series_sum_021",
      "series_sum_024"
    ]
  },
  {
    "id": "series_sum_024",
    "name": "常用求和公式 24",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Σ(n=0 to ∞) (-1)^n x^(2n) / (2n)! = cos x",
    "latex": "\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = \\cos x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "余弦函数的泰勒级数展开",
    "derivation": "泰勒级数",
    "related": [
      "series_sum_022",
      "series_sum_023"
    ]
  },
  {
    "id": "series_sum_025",
    "name": "常用求和公式 25",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (2n-1)!! / (2n)!! x^n = 1 / √(1 - x) - 1",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(2n-1)!!}{(2n)!!} x^n = \\frac{1}{\\sqrt{1-x}} - 1",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "-1 ≤ x < 1",
    "notes": "涉及双阶乘的幂级数展开",
    "derivation": "二项式级数",
    "related": [
      "series_sum_026"
    ]
  },
  {
    "id": "series_sum_026",
    "name": "常用求和公式 26",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^n (2n-1)!! / (2n)!! = 1 / √2 - 1",
    "latex": "\\sum_{n=1}^{\\infty} (-1)^n \\frac{(2n-1)!!}{(2n)!!} = \\frac{1}{\\sqrt{2}} - 1",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "常数级数求和",
    "derivation": "公式25°中令x=1",
    "related": [
      "series_sum_025"
    ]
  },
  {
    "id": "series_sum_027",
    "name": "常用求和公式 27",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (2n-1)!! / (2n)!! x^(2n+1) / (2n + 1) = arcsin x - x",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(2n-1)!!}{(2n)!!} \\frac{x^{2n+1}}{2n+1} = \\arcsin x - x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ 1",
    "notes": "反正弦函数的级数展开",
    "derivation": "对公式25°积分",
    "related": [
      "series_sum_028",
      "series_sum_029"
    ]
  },
  {
    "id": "series_sum_028",
    "name": "常用求和公式 28",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^n (2n-1)!! / (2n)!! x^(2n+1) / (2n + 1) = arsinh x - x",
    "latex": "\\sum_{n=1}^{\\infty} (-1)^n \\frac{(2n-1)!!}{(2n)!!} \\frac{x^{2n+1}}{2n+1} = \\text{arsinh } x - x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ 1",
    "notes": "反双曲正弦函数的级数展开",
    "derivation": "对交错级数积分",
    "related": [
      "series_sum_027",
      "series_sum_029"
    ]
  },
  {
    "id": "series_sum_029",
    "name": "常用求和公式 29",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (2n-1)!! / (2n)!! 1 / (2n + 1) = π/2 - 1",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(2n-1)!!}{(2n)!!} \\frac{1}{2n+1} = \\frac{\\pi}{2} - 1",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "常数级数求和",
    "derivation": "公式27°中令x=1",
    "related": [
      "series_sum_027",
      "series_sum_030"
    ]
  },
  {
    "id": "series_sum_030",
    "name": "常用求和公式 30",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (2n-1)!! (-1)^n / (2n)!! 1 / (2n + 1) = ln(1 + √2) - 1",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(2n-1)!!(-1)^n}{(2n)!!} \\frac{1}{2n+1} = \\ln(1+\\sqrt{2}) - 1",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "常数级数求和",
    "derivation": "公式28°中令x=1",
    "related": [
      "series_sum_028",
      "series_sum_029"
    ]
  },
  {
    "id": "series_sum_031",
    "name": "常用求和公式 31",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) sin(nx) / n = π/2 - x",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\sin(nx)}{n} = \\frac{\\pi}{2} - x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 < x < 2π",
    "notes": "正弦函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_032",
      "series_sum_033",
      "series_sum_034"
    ]
  },
  {
    "id": "series_sum_032",
    "name": "常用求和公式 32",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) cos(nx) / n = -ln|2sin(x/2)|",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\cos(nx)}{n} = -\\ln|2\\sin(x/2)|",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 < |x| ≤ π",
    "notes": "余弦函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_031",
      "series_sum_033",
      "series_sum_034"
    ]
  },
  {
    "id": "series_sum_033",
    "name": "常用求和公式 33",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) cos(nx) / n = ln(2cos(x/2))",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos(nx)}{n} = \\ln(2\\cos(x/2))",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "交错余弦函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_032",
      "series_sum_034"
    ]
  },
  {
    "id": "series_sum_034",
    "name": "常用求和公式 34",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) sin(nx) / n = x/2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin(nx)}{n} = \\frac{x}{2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "交错正弦函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_031",
      "series_sum_033"
    ]
  },
  {
    "id": "series_sum_035",
    "name": "常用求和公式 35",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) cos((2n-1)x) / n = (π/2 - x)cos x - cos x ln(2sin x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\cos((2n-1)x)}{n} = (\\frac{\\pi}{2}-x)\\cos x - \\cos x \\ln(2\\sin x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 < x < π",
    "notes": "复杂三角函数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_036"
    ]
  },
  {
    "id": "series_sum_036",
    "name": "常用求和公式 36",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) sin((2n-1)x) / n = (π/2 - x)cos x + sin x ln(2sin x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\sin((2n-1)x)}{n} = (\\frac{\\pi}{2}-x)\\cos x + \\sin x \\ln(2\\sin x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 < x < π",
    "notes": "复杂三角函数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_035",
      "series_sum_037",
      "series_sum_038"
    ]
  },
  {
    "id": "series_sum_037",
    "name": "常用求和公式 37",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) cos((2n-1)x) / n = x sin x + cos x ln(2cos x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos((2n-1)x)}{n} = x\\sin x + \\cos x \\ln(2\\cos x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π/2",
    "notes": "复杂交错三角函数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_036",
      "series_sum_038"
    ]
  },
  {
    "id": "series_sum_038",
    "name": "常用求和公式 38",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) sin((2n-1)x) / n = x cos x - sin x ln(2cos x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin((2n-1)x)}{n} = x\\cos x - \\sin x \\ln(2\\cos x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π/2",
    "notes": "复杂交错三角函数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_036",
      "series_sum_037"
    ]
  },
  {
    "id": "series_sum_039",
    "name": "常用求和公式 39",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) cos((2n-1)x) / (2n-1) = (1/2) ln|cot(x/2)|",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\cos((2n-1)x)}{2n-1} = \\frac{1}{2} \\ln|\\cot(x/2)|",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 < |x| < π",
    "notes": "余弦函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_040"
    ]
  },
  {
    "id": "series_sum_040",
    "name": "常用求和公式 40",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) sin((2n-1)x) / (2n-1) = (π/4) sgn x",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\sin((2n-1)x)}{2n-1} = \\frac{\\pi}{4} \\text{sgn } x",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "正弦函数的傅里叶级数，sgn为符号函数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_039"
    ]
  },
  {
    "id": "series_sum_041",
    "name": "常用求和公式 41",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) cos((2n-1)x) / (2n-1) = π/4 (0 ≤ x < π/2), -π/4 (π/2 < x ≤ π)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos((2n-1)x)}{2n-1} = \\begin{cases} \\frac{\\pi}{4} & 0 \\leq x < \\frac{\\pi}{2} \\\\ -\\frac{\\pi}{4} & \\frac{\\pi}{2} < x \\leq \\pi \\end{cases}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 ≤ x ≤ π",
    "notes": "分段函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_042"
    ]
  },
  {
    "id": "series_sum_042",
    "name": "常用求和公式 42",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) sin((2n-1)x) / (2n-1) = (1/2) ln|tan(x/2 + π/4)|",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin((2n-1)x)}{2n-1} = \\frac{1}{2} \\ln|\\tan(x/2 + \\pi/4)|",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 ≤ x ≤ π",
    "notes": "复杂三角函数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_041"
    ]
  },
  {
    "id": "series_sum_043",
    "name": "常用求和公式 43",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) cos(nx) / n² = (3x² - 6πx + 2π²) / 12",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\cos(nx)}{n^2} = \\frac{3x^2 - 6\\pi x + 2\\pi^2}{12}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 ≤ x ≤ 2π",
    "notes": "余弦函数的平方倒数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_044",
      "series_sum_045"
    ]
  },
  {
    "id": "series_sum_044",
    "name": "常用求和公式 44",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) cos²(nx) / n² = (3x² - 3πx + π²) / 6",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\cos^2(nx)}{n^2} = \\frac{3x^2 - 3\\pi x + \\pi^2}{6}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 ≤ x ≤ π",
    "notes": "余弦平方的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_043",
      "series_sum_045"
    ]
  },
  {
    "id": "series_sum_045",
    "name": "常用求和公式 45",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) sin²(nx) / n² = x(π - x) / 2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\sin^2(nx)}{n^2} = \\frac{x(\\pi-x)}{2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 ≤ x ≤ π",
    "notes": "正弦平方的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_043",
      "series_sum_044"
    ]
  },
  {
    "id": "series_sum_046",
    "name": "常用求和公式 46",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) cos((2n-1)x) / (2n-1)² = π²/8 - (π/4)|x|",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\cos((2n-1)x)}{(2n-1)^2} = \\frac{\\pi^2}{8} - \\frac{\\pi}{4}|x|",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ π",
    "notes": "余弦函数的平方倒数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_047"
    ]
  },
  {
    "id": "series_sum_047",
    "name": "常用求和公式 47",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / (2n-1)² = π²/8 = 1.2337...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{(2n-1)^2} = \\frac{\\pi^2}{8} = 1.2337...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "π²/8的级数表示",
    "derivation": "公式46°中令x=0",
    "related": [
      "series_sum_046"
    ]
  },
  {
    "id": "series_sum_048",
    "name": "常用求和公式 48",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^n cos(nx) / (n² + 1) = πcosh(x) / (2sinh(π)) - 1/2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^n\\cos(nx)}{n^2+1} = \\frac{\\pi\\cosh(x)}{2\\sinh(\\pi)} - \\frac{1}{2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ π",
    "notes": "涉及双曲函数的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_049",
      "series_sum_050",
      "series_sum_051"
    ]
  },
  {
    "id": "series_sum_049",
    "name": "常用求和公式 49",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) n sin(nx) / (n² + 1) = πsinh(x) / (2sinh(π))",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}n\\sin(nx)}{n^2+1} = \\frac{\\pi\\sinh(x)}{2\\sinh(\\pi)}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "涉及双曲函数的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_048",
      "series_sum_050",
      "series_sum_051"
    ]
  },
  {
    "id": "series_sum_050",
    "name": "常用求和公式 50",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / (n² + 1) = (1/2)(πcoth(π) - 1) = 1.07667...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1} = \\frac{1}{2}(\\pi\\coth(\\pi) - 1) = 1.07667...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "常数级数求和",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_048",
      "series_sum_051"
    ]
  },
  {
    "id": "series_sum_051",
    "name": "常用求和公式 51",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^n / (n² + 1) = π / (2sinh(π)) - 1/2 = -0.36398...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2+1} = \\frac{\\pi}{2\\sinh(\\pi)} - \\frac{1}{2} = -0.36398...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "交错常数级数求和",
    "derivation": "公式48°中令x=0",
    "related": [
      "series_sum_048",
      "series_sum_050"
    ]
  },
  {
    "id": "series_sum_052",
    "name": "常用求和公式 52",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=2 to ∞) cos(nx) / (n² - 1) = 1/2 + (x - π)/2 sin(x) + cos(x)/4",
    "latex": "\\sum_{n=2}^{\\infty} \\frac{\\cos(nx)}{n^2-1} = \\frac{1}{2} + \\frac{x-\\pi}{2}\\sin(x) + \\frac{\\cos(x)}{4}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 ≤ x ≤ π",
    "notes": "涉及三角函数的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_053",
      "series_sum_054",
      "series_sum_055"
    ]
  },
  {
    "id": "series_sum_053",
    "name": "常用求和公式 53",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=2 to ∞) sin(nx) / (n² - 1) = sin(x)(1/4 - ln|2sin(x/2)|)",
    "latex": "\\sum_{n=2}^{\\infty} \\frac{\\sin(nx)}{n^2-1} = \\sin(x)(\\frac{1}{4} - \\ln|2\\sin(x/2)|)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ π",
    "notes": "涉及三角函数的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_052",
      "series_sum_054",
      "series_sum_055"
    ]
  },
  {
    "id": "series_sum_054",
    "name": "常用求和公式 54",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=2 to ∞) (-1)^n cos(nx) / (n² - 1) = 1/2 - cos(x)/4 - x sin(x)/2",
    "latex": "\\sum_{n=2}^{\\infty} \\frac{(-1)^n\\cos(nx)}{n^2-1} = \\frac{1}{2} - \\frac{\\cos(x)}{4} - \\frac{x\\sin(x)}{2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ π",
    "notes": "交错三角函数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_052",
      "series_sum_053",
      "series_sum_055"
    ]
  },
  {
    "id": "series_sum_055",
    "name": "常用求和公式 55",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=2 to ∞) (-1)^n sin(nx) / (n² - 1) = sin(x)(ln|2cos(x/2)| - 1/4)",
    "latex": "\\sum_{n=2}^{\\infty} \\frac{(-1)^n\\sin(nx)}{n^2-1} = \\sin(x)(\\ln|2\\cos(x/2)| - \\frac{1}{4})",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "交错三角函数级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_052",
      "series_sum_053",
      "series_sum_054"
    ]
  },
  {
    "id": "series_sum_056",
    "name": "常用求和公式 56",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) cos(2nx) / (4n² - 1) = 1/2 - (π/4)|sin(x)|",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\cos(2nx)}{4n^2-1} = \\frac{1}{2} - \\frac{\\pi}{4}|\\sin(x)|",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "余弦函数的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_057",
      "series_sum_058"
    ]
  },
  {
    "id": "series_sum_057",
    "name": "常用求和公式 57",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) sin(2nx) / (4n² - 1) = (1/2) sin(x) ln|cot(x/2)|",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{\\sin(2nx)}{4n^2-1} = \\frac{1}{2}\\sin(x)\\ln|\\cot(x/2)|",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "正弦函数的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_056",
      "series_sum_058"
    ]
  },
  {
    "id": "series_sum_058",
    "name": "常用求和公式 58",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) cos(2nx) / (4n² - 1) = (π/4)|cos(x)| - 1/2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos(2nx)}{4n^2-1} = \\frac{\\pi}{4}|\\cos(x)| - \\frac{1}{2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "交错余弦函数的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_056",
      "series_sum_057"
    ]
  },
  {
    "id": "series_sum_059",
    "name": "常用求和公式 59",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) sin(2nx) / (4n² - 1) = (cos(x)/2) ln|(1 + sin(x)) / cos(x)|",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin(2nx)}{4n^2-1} = \\frac{\\cos(x)}{2} \\ln|\\frac{1+\\sin(x)}{\\cos(x)}|",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "交错正弦函数的级数",
    "derivation": "傅里叶级数",
    "related": [
      "series_sum_056",
      "series_sum_057",
      "series_sum_058"
    ]
  },
  {
    "id": "series_sum_060",
    "name": "常用求和公式 60",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / (4n² - 1) = 1/2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{4n^2-1} = \\frac{1}{2}",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "常数级数求和",
    "derivation": "部分分式分解",
    "related": [
      "series_sum_061"
    ]
  },
  {
    "id": "series_sum_061",
    "name": "常用求和公式 61",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) / (4n² - 1) = π/4 - 1/2 = 0.285398...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{4n^2-1} = \\frac{\\pi}{4} - \\frac{1}{2} = 0.285398...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "交错常数级数求和",
    "derivation": "交错级数的部分分式分解",
    "related": [
      "series_sum_060"
    ]
  },
  {
    "id": "series_sum_062",
    "name": "常用求和公式 62",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=0 to ∞) cos(nx) / n! = e^(cos x) cos(sin x)",
    "latex": "\\sum_{n=0}^{\\infty} \\frac{\\cos(nx)}{n!} = e^{\\cos x} \\cos(\\sin x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "涉及指数和三角函数的级数",
    "derivation": "欧拉公式",
    "related": [
      "series_sum_063"
    ]
  },
  {
    "id": "series_sum_063",
    "name": "常用求和公式 63",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=0 to ∞) sin(nx) / n! = e^(cos x) sin(sin x)",
    "latex": "\\sum_{n=0}^{\\infty} \\frac{\\sin(nx)}{n!} = e^{\\cos x} \\sin(\\sin x)",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "涉及指数和三角函数的级数",
    "derivation": "欧拉公式",
    "related": [
      "series_sum_062"
    ]
  },
  {
    "id": "series_sum_064",
    "name": "常用求和公式 64",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=0 to ∞) q^n cos(nx) = (1 - q cos x) / (1 - 2q cos x + q²)",
    "latex": "\\sum_{n=0}^{\\infty} q^n \\cos(nx) = \\frac{1-q\\cos x}{1-2q\\cos x + q^2}",
    "variables": [
      {
        "name": "q",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|q| < 1, |x| < +∞",
    "notes": "几何级数的余弦加权",
    "derivation": "几何级数与欧拉公式",
    "related": [
      "series_sum_065",
      "series_sum_066",
      "series_sum_067"
    ]
  },
  {
    "id": "series_sum_065",
    "name": "常用求和公式 65",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) q^n sin(nx) = (q sin x) / (1 - 2q cos x + q²)",
    "latex": "\\sum_{n=1}^{\\infty} q^n \\sin(nx) = \\frac{q\\sin x}{1-2q\\cos x + q^2}",
    "variables": [
      {
        "name": "q",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|q| < 1, |x| < +∞",
    "notes": "几何级数的正弦加权",
    "derivation": "几何级数与欧拉公式",
    "related": [
      "series_sum_064",
      "series_sum_066",
      "series_sum_067"
    ]
  },
  {
    "id": "series_sum_066",
    "name": "常用求和公式 66",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) q^n cos(nx) / n = -(1/2) ln(1 - 2q cos x + q²)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{q^n\\cos(nx)}{n} = -\\frac{1}{2} \\ln(1-2q\\cos x + q^2)",
    "variables": [
      {
        "name": "q",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|q| < 1, |x| < +∞",
    "notes": "几何级数的余弦加权积分",
    "derivation": "对几何级数积分",
    "related": [
      "series_sum_064",
      "series_sum_065",
      "series_sum_067"
    ]
  },
  {
    "id": "series_sum_067",
    "name": "常用求和公式 67",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) q^n sin(nx) / n = arctan(q sin x / (1 - q cos x))",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{q^n\\sin(nx)}{n} = \\arctan\\left(\\frac{q\\sin x}{1-q\\cos x}\\right)",
    "variables": [
      {
        "name": "q",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|q| < 1, |x| < +∞",
    "notes": "几何级数的正弦加权积分",
    "derivation": "对几何级数积分",
    "related": [
      "series_sum_064",
      "series_sum_065",
      "series_sum_066"
    ]
  },
  {
    "id": "series_sum_068",
    "name": "常用求和公式 68",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) x / (x² + n²π²) = (coth x) / 2 - 1 / (2x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{x}{x^2 + n^2\\pi^2} = \\frac{\\coth x}{2} - \\frac{1}{2x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x ≠ 0",
    "notes": "涉及双曲余切函数的级数",
    "derivation": "复分析",
    "related": [
      "series_sum_069",
      "series_sum_070",
      "series_sum_071"
    ]
  },
  {
    "id": "series_sum_069",
    "name": "常用求和公式 69",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^n x / (x² + n²π²) = 1 / (2sinh x) - 1 / (2x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^n x}{x^2 + n^2\\pi^2} = \\frac{1}{2\\sinh x} - \\frac{1}{2x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x ≠ 0",
    "notes": "涉及双曲正弦函数的级数",
    "derivation": "复分析",
    "related": [
      "series_sum_068",
      "series_sum_070",
      "series_sum_071"
    ]
  },
  {
    "id": "series_sum_070",
    "name": "常用求和公式 70",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) x / (x² - n²π²) = (cot x) / 2 - 1 / (2x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{x}{x^2 - n^2\\pi^2} = \\frac{\\cot x}{2} - \\frac{1}{2x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x ≠ nπ, n = 0, ±1, ...",
    "notes": "涉及余切函数的级数",
    "derivation": "复分析",
    "related": [
      "series_sum_068",
      "series_sum_069",
      "series_sum_071"
    ]
  },
  {
    "id": "series_sum_071",
    "name": "常用求和公式 71",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^n x / (x² - n²π²) = 1 / (2sin x) - 1 / (2x)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^n x}{x^2 - n^2\\pi^2} = \\frac{1}{2\\sin x} - \\frac{1}{2x}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x ≠ nπ, n = 0, ±1, ...",
    "notes": "涉及正弦函数的级数",
    "derivation": "复分析",
    "related": [
      "series_sum_068",
      "series_sum_069",
      "series_sum_070"
    ]
  },
  {
    "id": "series_sum_072",
    "name": "常用求和公式 72",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) x / (x² - (n-1/2)²π²) = -tan x / 2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{x}{x^2 - (n-1/2)^2\\pi^2} = -\\frac{\\tan x}{2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x ≠ (n-1/2)π, n = 0, ±1, ...",
    "notes": "涉及正切函数的级数",
    "derivation": "复分析",
    "related": [
      "series_sum_073"
    ]
  },
  {
    "id": "series_sum_073",
    "name": "常用求和公式 73",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) x / (x² + (n-1/2)²π²) = tanh x / 2",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{x}{x^2 + (n-1/2)^2\\pi^2} = \\frac{\\tanh x}{2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "x为实数",
    "notes": "涉及双曲正切函数的级数",
    "derivation": "复分析",
    "related": [
      "series_sum_072"
    ]
  },
  {
    "id": "series_sum_074",
    "name": "常用求和公式 74",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / ((2n-1)² + 4) = πtanh(π) / 8 = 0.391235...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{(2n-1)^2 + 4} = \\frac{\\pi\\tanh(\\pi)}{8} = 0.391235...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "常数级数求和",
    "derivation": "复分析",
    "related": [
      "series_sum_075",
      "series_sum_076"
    ]
  },
  {
    "id": "series_sum_075",
    "name": "常用求和公式 75",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / n^(2k) = (2π)^(2k) B_k / (2(2k)!)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n^{2k}} = \\frac{(2\\pi)^{2k}B_k}{2(2k)!}",
    "variables": [
      {
        "name": "k",
        "description": "正整数",
        "unit": ""
      },
      {
        "name": "B_k",
        "description": "第k个伯努利数",
        "unit": ""
      }
    ],
    "conditions": "k = 1, 2, ...",
    "notes": "黎曼ζ函数在偶数点的值",
    "derivation": "欧拉公式",
    "related": [
      "series_sum_076"
    ]
  },
  {
    "id": "series_sum_076",
    "name": "常用求和公式 76",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / n² = π²/6 = 1.6449...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} = 1.6449...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "巴塞尔问题，π²/6的级数表示",
    "derivation": "公式75°中令k=1",
    "related": [
      "series_sum_075",
      "series_sum_077",
      "series_sum_078",
      "series_sum_080"
    ]
  },
  {
    "id": "series_sum_077",
    "name": "常用求和公式 77",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / n⁴ = π⁴/90 = 1.082323...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n^4} = \\frac{\\pi^4}{90} = 1.082323...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "π⁴/90的级数表示",
    "derivation": "公式75°中令k=2",
    "related": [
      "series_sum_076",
      "series_sum_080"
    ]
  },
  {
    "id": "series_sum_078",
    "name": "常用求和公式 78",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) / n² = π²/12 = 0.822467...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n^2} = \\frac{\\pi^2}{12} = 0.822467...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "π²/12的级数表示",
    "derivation": "从ζ(2)推导",
    "related": [
      "series_sum_076"
    ]
  },
  {
    "id": "series_sum_079",
    "name": "常用求和公式 79",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) (-1)^(n-1) / (2n-1)² = ∫[0,1] (arctan x / x) dx = 0.915965...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{(2n-1)^2} = \\int_0^1 \\frac{\\arctan x}{x} dx = 0.915965...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "卡特兰常数G的级数表示",
    "derivation": "积分表示",
    "related": [
      "series_sum_012"
    ]
  },
  {
    "id": "series_sum_080",
    "name": "常用求和公式 80",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / n⁶ = π⁶/945 = 1.01734...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n^6} = \\frac{\\pi^6}{945} = 1.01734...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "π⁶/945的级数表示",
    "derivation": "公式75°中令k=3",
    "related": [
      "series_sum_076",
      "series_sum_077"
    ]
  },
  {
    "id": "series_sum_081",
    "name": "常用求和公式 81",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / n^n = ∫[0,1] x^(-x) dx = 1.29128...",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n^n} = \\int_0^1 x^{-x} dx = 1.29128...",
    "variables": [],
    "conditions": "级数收敛",
    "notes": "索菲-日耳曼常数的级数表示",
    "derivation": "积分表示",
    "related": []
  },
  {
    "id": "series_sum_082",
    "name": "常用求和公式 82",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "Σ(n=1 to ∞) 1 / (n(n+m)) = (1/m)(1 + 1/2 + ... + 1/m)",
    "latex": "\\sum_{n=1}^{\\infty} \\frac{1}{n(n+m)} = \\frac{1}{m}\\left(1 + \\frac{1}{2} + \\cdots + \\frac{1}{m}\\right)",
    "variables": [
      {
        "name": "m",
        "description": "正整数",
        "unit": ""
      }
    ],
    "conditions": "m为正整数",
    "notes": "调和级数的推广",
    "derivation": "部分分式分解",
    "related": [
      "series_sum_008"
    ]
  },
  {
    "id": "integral_common_001",
    "name": "常用积分公式 1°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(n-1) / (a+bx^m)^p dx = (1/(ma^p)) (a/b)^(n/m) B(p - n/m, n/m)",
    "latex": "\\int_0^{\\infty} \\frac{x^{n-1}}{(a+bx^m)^p} dx = \\frac{1}{ma^p}\\left(\\frac{a}{b}\\right)^{\\frac{n}{m}} B\\left(p - \\frac{n}{m}, \\frac{n}{m}\\right)",
    "variables": [
      {
        "name": "a, b, m, p",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "B",
        "description": "Beta函数",
        "unit": ""
      }
    ],
    "conditions": "a, b, m, p > 0, 0 < n < mp",
    "notes": "涉及Beta函数的广义积分",
    "derivation": "Beta函数定义",
    "related": [
      "integral_common_002",
      "integral_common_003"
    ]
  },
  {
    "id": "integral_common_002",
    "name": "常用积分公式 2°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(n-1) / (a+bx^m) dx = (1/(ma)) (a/b)^(n/m) π / sin(nπ/m)",
    "latex": "\\int_0^{\\infty} \\frac{x^{n-1}}{a+bx^m} dx = \\frac{1}{ma}\\left(\\frac{a}{b}\\right)^{\\frac{n}{m}} \\frac{\\pi}{\\sin(n\\pi/m)}",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "m, n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a, b > 0, 0 < n < m",
    "notes": "Beta函数的特殊形式",
    "derivation": "从公式1°推导",
    "related": [
      "integral_common_001",
      "integral_common_003"
    ]
  },
  {
    "id": "integral_common_003",
    "name": "常用积分公式 3°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(n-1) / (1+x^m) dx = π / (m sin(nπ/m))",
    "latex": "\\int_0^{\\infty} \\frac{x^{n-1}}{1+x^m} dx = \\frac{\\pi}{m\\sin(n\\pi/m)}",
    "variables": [
      {
        "name": "m, n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "0 < n < m",
    "notes": "公式2°中a=b=1的特殊情况",
    "derivation": "从公式2°推导",
    "related": [
      "integral_common_002",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007"
    ]
  },
  {
    "id": "integral_common_004",
    "name": "常用积分公式 4°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] dx / (1+x^n) = π / (n sin(π/n))",
    "latex": "\\int_0^{\\infty} \\frac{dx}{1+x^n} = \\frac{\\pi}{n\\sin(\\pi/n)}",
    "variables": [
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "n > 1",
    "notes": "公式3°中n=1的特殊情况",
    "derivation": "从公式3°推导",
    "related": [
      "integral_common_003",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007"
    ]
  },
  {
    "id": "integral_common_005",
    "name": "常用积分公式 5°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] dx / (1+x³) = 2π / (3√3)",
    "latex": "\\int_0^{\\infty} \\frac{dx}{1+x^3} = \\frac{2\\pi}{3\\sqrt{3}}",
    "variables": [],
    "conditions": "无",
    "notes": "公式4°中n=3的特殊情况",
    "derivation": "从公式4°推导",
    "related": [
      "integral_common_004",
      "integral_common_006",
      "integral_common_007"
    ]
  },
  {
    "id": "integral_common_006",
    "name": "常用积分公式 6°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] dx / (1+x⁴) = π / (2√2)",
    "latex": "\\int_0^{\\infty} \\frac{dx}{1+x^4} = \\frac{\\pi}{2\\sqrt{2}}",
    "variables": [],
    "conditions": "无",
    "notes": "公式4°中n=4的特殊情况",
    "derivation": "从公式4°推导",
    "related": [
      "integral_common_004",
      "integral_common_005",
      "integral_common_007"
    ]
  },
  {
    "id": "integral_common_007",
    "name": "常用积分公式 7°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] dx / (1+x⁶) = π / 3",
    "latex": "\\int_0^{\\infty} \\frac{dx}{1+x^6} = \\frac{\\pi}{3}",
    "variables": [],
    "conditions": "无",
    "notes": "公式4°中n=6的特殊情况",
    "derivation": "从公式4°推导",
    "related": [
      "integral_common_004",
      "integral_common_005",
      "integral_common_006"
    ]
  },
  {
    "id": "integral_common_008",
    "name": "常用积分公式 8°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] dx / (a²+x²)^n = (π/(2a^(2n-1))) ((2n-3)!! / (2n-2)!!)",
    "latex": "\\int_0^{\\infty} \\frac{dx}{(a^2+x^2)^n} = \\frac{\\pi}{2a^{2n-1}} \\frac{(2n-3)!!}{(2n-2)!!}",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0, n ≥ 2",
    "notes": "涉及双阶乘的积分",
    "derivation": "递推公式",
    "related": [
      "integral_common_009",
      "integral_common_010"
    ]
  },
  {
    "id": "integral_common_009",
    "name": "常用积分公式 9°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,1] dx / (1-x^n)^(1/m) = (1/n) B(1 - 1/n, 1/m)",
    "latex": "\\int_0^1 \\frac{dx}{\\sqrt[m]{1-x^n}} = \\frac{1}{n} B\\left(1 - \\frac{1}{n}, \\frac{1}{m}\\right)",
    "variables": [
      {
        "name": "m, n",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "B",
        "description": "Beta函数",
        "unit": ""
      }
    ],
    "conditions": "n > 1, m > 0",
    "notes": "涉及Beta函数的积分",
    "derivation": "Beta函数定义",
    "related": [
      "integral_common_010"
    ]
  },
  {
    "id": "integral_common_010",
    "name": "常用积分公式 10°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,1] dx / √(1-x^m) = (√π/m) (Γ(1/m) / Γ(1/m + 1/2))",
    "latex": "\\int_0^1 \\frac{dx}{\\sqrt{1-x^m}} = \\frac{\\sqrt{\\pi}}{m} \\frac{\\Gamma(1/m)}{\\Gamma(1/m + 1/2)}",
    "variables": [
      {
        "name": "m",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "m > 0",
    "notes": "涉及Gamma函数的积分",
    "derivation": "Beta函数与Gamma函数的关系",
    "related": [
      "integral_common_009"
    ]
  },
  {
    "id": "integral_common_011",
    "name": "常用积分公式 11°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(a-1) e^(-bx) dx = b^(-a) Γ(a)",
    "latex": "\\int_0^{\\infty} x^{a-1}e^{-bx} dx = b^{-a}\\Gamma(a)",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "a, b > 0",
    "notes": "Gamma函数的积分表示",
    "derivation": "Gamma函数定义",
    "related": [
      "integral_common_012",
      "integral_common_013"
    ]
  },
  {
    "id": "integral_common_012",
    "name": "常用积分公式 12°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] e^(-ax) cos(bx) dx = a / (a² + b²)",
    "latex": "\\int_0^{\\infty} e^{-ax}\\cos(bx) dx = \\frac{a}{a^2+b^2}",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "拉普拉斯变换",
    "derivation": "复分析",
    "related": [
      "integral_common_011",
      "integral_common_013"
    ]
  },
  {
    "id": "integral_common_013",
    "name": "常用积分公式 13°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] e^(-ax) sin(bx) dx = b / (a² + b²)",
    "latex": "\\int_0^{\\infty} e^{-ax}\\sin(bx) dx = \\frac{b}{a^2+b^2}",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "拉普拉斯变换",
    "derivation": "复分析",
    "related": [
      "integral_common_011",
      "integral_common_012"
    ]
  },
  {
    "id": "integral_common_014",
    "name": "常用积分公式 14°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(p-1) e^(-ax) cos(bx) dx = Γ(p) cos(pθ) / (a² + b²)^(p/2), θ = arctan(b/a)",
    "latex": "\\int_0^{\\infty} x^{p-1}e^{-ax}\\cos(bx) dx = \\frac{\\Gamma(p)\\cos(p\\theta)}{(a^2+b^2)^{p/2}}, \\quad \\theta = \\arctan(b/a)",
    "variables": [
      {
        "name": "a, p",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "θ",
        "description": "角度",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "a, p > 0",
    "notes": "广义拉普拉斯变换",
    "derivation": "复分析",
    "related": [
      "integral_common_015"
    ]
  },
  {
    "id": "integral_common_015",
    "name": "常用积分公式 15°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(p-1) e^(-ax) sin(bx) dx = Γ(p) sin(pθ) / (a² + b²)^(p/2)",
    "latex": "\\int_0^{\\infty} x^{p-1}e^{-ax}\\sin(bx) dx = \\frac{\\Gamma(p)\\sin(p\\theta)}{(a^2+b^2)^{p/2}}",
    "variables": [
      {
        "name": "a, p",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "θ",
        "description": "角度",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "a, p > 0",
    "notes": "广义拉普拉斯变换",
    "derivation": "复分析",
    "related": [
      "integral_common_014"
    ]
  },
  {
    "id": "integral_common_016",
    "name": "常用积分公式 16°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] e^(-ax) (sin(bx) / x) dx = arctan(b/a)",
    "latex": "\\int_0^{\\infty} e^{-ax}\\frac{\\sin(bx)}{x} dx = \\arctan(b/a)",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "狄利克雷积分",
    "derivation": "对参数a求导",
    "related": [
      "integral_common_012",
      "integral_common_013"
    ]
  },
  {
    "id": "integral_common_017",
    "name": "常用积分公式 17°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(a-1) e^(-bx²) dx = (1/2) b^(-a/2) Γ(a/2)",
    "latex": "\\int_0^{\\infty} x^{a-1}e^{-bx^2} dx = \\frac{1}{2}b^{-a/2}\\Gamma(a/2)",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "a, b > 0",
    "notes": "高斯积分",
    "derivation": "Gamma函数",
    "related": [
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021"
    ]
  },
  {
    "id": "integral_common_018",
    "name": "常用积分公式 18°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(2n) e^(-bx²) dx = ((2n-1)!! / (2^(n+1) b^n)) √(π/b)",
    "latex": "\\int_0^{\\infty} x^{2n}e^{-bx^2} dx = \\frac{(2n-1)!!}{2^{n+1}b^n}\\sqrt{\\frac{\\pi}{b}}",
    "variables": [
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 1, b > 0",
    "notes": "偶数次幂的高斯积分",
    "derivation": "从公式17°推导",
    "related": [
      "integral_common_017",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021"
    ]
  },
  {
    "id": "integral_common_019",
    "name": "常用积分公式 19°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(2n-1) e^(-bx²) dx = ((n-1)! / (2b^n))",
    "latex": "\\int_0^{\\infty} x^{2n-1}e^{-bx^2} dx = \\frac{(n-1)!}{2b^n}",
    "variables": [
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 1, b > 0",
    "notes": "奇数次幂的高斯积分",
    "derivation": "从公式17°推导",
    "related": [
      "integral_common_017",
      "integral_common_018",
      "integral_common_020",
      "integral_common_021"
    ]
  },
  {
    "id": "integral_common_020",
    "name": "常用积分公式 20°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[0,∞] e^(-bx²) dx = (1/2) √(π/b)",
    "latex": "\\int_0^{\\infty} e^{-bx^2} dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{b}}",
    "variables": [
      {
        "name": "b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "b > 0",
    "notes": "高斯积分",
    "derivation": "从公式17°推导",
    "related": [
      "integral_common_017",
      "integral_common_021"
    ]
  },
  {
    "id": "integral_common_021",
    "name": "常用积分公式 21°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[-∞,∞] e^(-x²) dx = √π",
    "latex": "\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}",
    "variables": [],
    "conditions": "无",
    "notes": "欧拉-泊松积分",
    "derivation": "高斯积分",
    "related": [
      "integral_common_017",
      "integral_common_020"
    ]
  },
  {
    "id": "integral_common_022",
    "name": "常用积分公式 22°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] e^(-ax²) cos(bx) dx = (1/2) √(π/a) e^(-b²/(4a))",
    "latex": "\\int_0^{\\infty} e^{-ax^2}\\cos(bx) dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{a}}e^{-b^2/(4a)}",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "高斯-傅里叶积分",
    "derivation": "复分析",
    "related": [
      "integral_common_023"
    ]
  },
  {
    "id": "integral_common_023",
    "name": "常用积分公式 23°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] e^(-ax²) cosh(bx) dx = (1/2) √(π/a) e^(b²/(4a))",
    "latex": "\\int_0^{\\infty} e^{-ax^2}\\cosh(bx) dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{a}}e^{b^2/(4a)}",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "高斯-双曲余弦积分",
    "derivation": "复分析",
    "related": [
      "integral_common_022"
    ]
  },
  {
    "id": "integral_common_024",
    "name": "常用积分公式 24°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] e^(-ax) sin^(2n)(x) dx = (2n)! / (a(2²+a²)(4²+a²)...(4n²+a²))",
    "latex": "\\int_0^{\\infty} e^{-ax}\\sin^{2n}(x) dx = \\frac{(2n)!}{a(2^2+a^2)(4^2+a^2)\\cdots(4n^2+a^2)}",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "涉及正弦偶数次幂的积分",
    "derivation": "递推公式",
    "related": [
      "integral_common_025"
    ]
  },
  {
    "id": "integral_common_025",
    "name": "常用积分公式 25°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] e^(-ax) sin^(2n-1)(x) dx = (2n-1)! / ((1+a²)(3²+a²)...((2n-1)²+a²))",
    "latex": "\\int_0^{\\infty} e^{-ax}\\sin^{2n-1}(x) dx = \\frac{(2n-1)!}{(1+a^2)(3^2+a^2)\\cdots((2n-1)^2+a^2)}",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "涉及正弦奇数次幂的积分",
    "derivation": "递推公式",
    "related": [
      "integral_common_024"
    ]
  },
  {
    "id": "integral_common_026",
    "name": "常用积分公式 26°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(a-1) e^(-bx^n) dx = (1/(nb^(a/n))) Γ(a/n)",
    "latex": "\\int_0^{\\infty} x^{a-1}e^{-bx^n} dx = \\frac{1}{nb^{a/n}}\\Gamma(a/n)",
    "variables": [
      {
        "name": "a, b, n",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "a, b, n > 0",
    "notes": "广义Gamma函数积分",
    "derivation": "Gamma函数",
    "related": [
      "integral_common_011",
      "integral_common_017"
    ]
  },
  {
    "id": "integral_common_027",
    "name": "常用积分公式 27°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π/2] sin^m(x) cos^n(x) dx = (1/2) B((m+1)/2, (n+1)/2)",
    "latex": "\\int_0^{\\pi/2} \\sin^m(x)\\cos^n(x) dx = \\frac{1}{2}B\\left(\\frac{m+1}{2}, \\frac{n+1}{2}\\right)",
    "variables": [
      {
        "name": "m, n",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "B",
        "description": "Beta函数",
        "unit": ""
      }
    ],
    "conditions": "m, n > -1",
    "notes": "Beta函数积分",
    "derivation": "Beta函数定义",
    "related": [
      "integral_common_028",
      "integral_common_029"
    ]
  },
  {
    "id": "integral_common_028",
    "name": "常用积分公式 28°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π/2] sin^(2n)(x) dx = ((2n-1)!! / (2n)!!) π/2",
    "latex": "\\int_0^{\\pi/2} \\sin^{2n}(x) dx = \\frac{(2n-1)!!}{(2n)!!}\\frac{\\pi}{2}",
    "variables": [
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 1",
    "notes": "正弦偶数次幂的积分",
    "derivation": "从公式27°推导",
    "related": [
      "integral_common_027",
      "integral_common_029"
    ]
  },
  {
    "id": "integral_common_029",
    "name": "常用积分公式 29°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π/2] sin^(2n+1)(x) dx = ((2n)!! / (2n+1)!!)",
    "latex": "\\int_0^{\\pi/2} \\sin^{2n+1}(x) dx = \\frac{(2n)!!}{(2n+1)!!}",
    "variables": [
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "n ≥ 0",
    "notes": "正弦奇数次幂的积分",
    "derivation": "从公式27°推导",
    "related": [
      "integral_common_027",
      "integral_common_028"
    ]
  },
  {
    "id": "integral_common_030",
    "name": "常用积分公式 30°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π/2] dx / (a + sin²(x))² = (π(2a+1)) / (4(a²+a)^(3/2))",
    "latex": "\\int_0^{\\pi/2} \\frac{dx}{(a+\\sin^2(x))^2} = \\frac{\\pi(2a+1)}{4(a^2+a)^{3/2}}",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0",
    "notes": "涉及正弦平方的积分",
    "derivation": "Beta函数",
    "related": [
      "integral_common_027"
    ]
  },
  {
    "id": "integral_common_031",
    "name": "常用积分公式 31°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π/2] (sin²(nx) / sin²(x)) dx = nπ/2",
    "latex": "\\int_0^{\\pi/2} \\frac{\\sin^2(nx)}{\\sin^2(x)} dx = \\frac{n\\pi}{2}",
    "variables": [
      {
        "name": "n",
        "description": "正整数",
        "unit": ""
      }
    ],
    "conditions": "n为正整数",
    "notes": "费耶积分",
    "derivation": "费耶积分",
    "related": [
      "integral_common_032"
    ]
  },
  {
    "id": "integral_common_032",
    "name": "常用积分公式 32°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "∫[0,∞] (sin(ax) / x) dx = (π/2) sgn(a)",
    "latex": "\\int_0^{\\infty} \\frac{\\sin(ax)}{x} dx = \\frac{\\pi}{2}\\text{sgn}(a)",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a为实数",
    "notes": "狄利克雷积分",
    "derivation": "复分析",
    "related": [
      "integral_common_033",
      "integral_common_034",
      "integral_common_035"
    ]
  },
  {
    "id": "integral_common_033",
    "name": "常用积分公式 33°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (tan(ax) / x) dx = (π/2) sgn(a)",
    "latex": "\\int_0^{\\infty} \\frac{\\tan(ax)}{x} dx = \\frac{\\pi}{2}\\text{sgn}(a)",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a为实数",
    "notes": "正切函数的积分",
    "derivation": "复分析",
    "related": [
      "integral_common_032"
    ]
  },
  {
    "id": "integral_common_034",
    "name": "常用积分公式 34°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (sin(ax) / x)² dx = (π/2)|a|",
    "latex": "\\int_0^{\\infty} \\left(\\frac{\\sin(ax)}{x}\\right)^2 dx = \\frac{\\pi}{2}|a|",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a为实数",
    "notes": "正弦平方的积分",
    "derivation": "从公式32°推导",
    "related": [
      "integral_common_032",
      "integral_common_035"
    ]
  },
  {
    "id": "integral_common_035",
    "name": "常用积分公式 35°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (sin(ax) / x)³ dx = (3π/8) a |a|",
    "latex": "\\int_0^{\\infty} \\left(\\frac{\\sin(ax)}{x}\\right)^3 dx = \\frac{3\\pi}{8}a|a|",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a为实数",
    "notes": "正弦三次方的积分",
    "derivation": "从公式32°推导",
    "related": [
      "integral_common_032",
      "integral_common_034"
    ]
  },
  {
    "id": "integral_common_036",
    "name": "常用积分公式 36°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] ((cos(ax) - cos(bx)) / x) dx = ln(b/a)",
    "latex": "\\int_0^{\\infty} \\frac{\\cos(ax) - \\cos(bx)}{x} dx = \\ln(b/a)",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a, b > 0",
    "notes": "余弦差分的积分",
    "derivation": "从公式32°推导",
    "related": [
      "integral_common_032"
    ]
  },
  {
    "id": "integral_common_037",
    "name": "常用积分公式 37°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] sin(x²) dx = ∫[0,∞] cos(x²) dx = (1/2)√(π/2)",
    "latex": "\\int_0^{\\infty} \\sin(x^2) dx = \\int_0^{\\infty} \\cos(x^2) dx = \\frac{1}{2}\\sqrt{\\frac{\\pi}{2}}",
    "variables": [],
    "conditions": "无",
    "notes": "菲涅耳积分",
    "derivation": "复分析",
    "related": [
      "integral_common_038"
    ]
  },
  {
    "id": "integral_common_038",
    "name": "常用积分公式 38°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (sin x / √x) dx = ∫[0,∞] (cos x / √x) dx = √(π/2)",
    "latex": "\\int_0^{\\infty} \\frac{\\sin x}{\\sqrt{x}} dx = \\int_0^{\\infty} \\frac{\\cos x}{\\sqrt{x}} dx = \\sqrt{\\frac{\\pi}{2}}",
    "variables": [],
    "conditions": "无",
    "notes": "涉及平方根的三角函数积分",
    "derivation": "Gamma函数",
    "related": [
      "integral_common_037"
    ]
  },
  {
    "id": "integral_common_039",
    "name": "常用积分公式 39°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (cos(ax) / x^p) dx = (πa^(p-1)) / (2Γ(p)cos(pπ/2))",
    "latex": "\\int_0^{\\infty} \\frac{\\cos(ax)}{x^p} dx = \\frac{\\pi a^{p-1}}{2\\Gamma(p)\\cos(p\\pi/2)}",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "0 < p < 1, a > 0",
    "notes": "涉及Gamma函数的积分",
    "derivation": "Gamma函数",
    "related": [
      "integral_common_040"
    ]
  },
  {
    "id": "integral_common_040",
    "name": "常用积分公式 40°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (sin(ax) / x^p) dx = (πa^(p-1)) / (2Γ(p)sin(pπ/2))",
    "latex": "\\int_0^{\\infty} \\frac{\\sin(ax)}{x^p} dx = \\frac{\\pi a^{p-1}}{2\\Gamma(p)\\sin(p\\pi/2)}",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "0 < p < 2, a > 0",
    "notes": "涉及Gamma函数的积分",
    "derivation": "Gamma函数",
    "related": [
      "integral_common_039"
    ]
  },
  {
    "id": "integral_common_041",
    "name": "常用积分公式 41°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (sin^p x / x) dx = 2^(p-2) (Γ²(p/2) / Γ(p))",
    "latex": "\\int_0^{\\infty} \\frac{\\sin^p x}{x} dx = 2^{p-2}\\frac{\\Gamma^2(p/2)}{\\Gamma(p)}",
    "variables": [
      {
        "name": "p",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "Γ",
        "description": "Gamma函数",
        "unit": ""
      }
    ],
    "conditions": "p = m/n, m,n为正奇数",
    "notes": "涉及Gamma函数的积分",
    "derivation": "Gamma函数",
    "related": [
      "integral_common_032"
    ]
  },
  {
    "id": "integral_common_042",
    "name": "常用积分公式 42°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (cos(bx) / (a² + x²)) dx = (π/(2a)) e^(-ab)",
    "latex": "\\int_0^{\\infty} \\frac{\\cos(bx)}{a^2+x^2} dx = \\frac{\\pi}{2a}e^{-ab}",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a, b > 0",
    "notes": "拉普拉斯积分",
    "derivation": "复分析",
    "related": [
      "integral_common_043"
    ]
  },
  {
    "id": "integral_common_043",
    "name": "常用积分公式 43°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] (x sin(bx) / (a² + x²)) dx = (π/2) e^(-ab)",
    "latex": "\\int_0^{\\infty} \\frac{x\\sin(bx)}{a^2+x^2} dx = \\frac{\\pi}{2}e^{-ab}",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a, b > 0",
    "notes": "拉普拉斯积分",
    "derivation": "复分析",
    "related": [
      "integral_common_042"
    ]
  },
  {
    "id": "integral_common_044",
    "name": "常用积分公式 44°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,1] x^(a-1) (ln x)^n dx = ((-1)^n n!) / a^(n+1)",
    "latex": "\\int_0^1 x^{a-1}(\\ln x)^n dx = \\frac{(-1)^n n!}{a^{n+1}}",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a > 0, n ≥ 0",
    "notes": "涉及对数的积分",
    "derivation": "对参数a求导",
    "related": [
      "integral_common_045"
    ]
  },
  {
    "id": "integral_common_045",
    "name": "常用积分公式 45°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] e^(-x) ln x dx = -γ",
    "latex": "\\int_0^{\\infty} e^{-x}\\ln x dx = -\\gamma",
    "variables": [
      {
        "name": "γ",
        "description": "欧拉常数",
        "unit": ""
      }
    ],
    "conditions": "无",
    "notes": "欧拉常数的积分表示",
    "derivation": "Gamma函数",
    "related": [
      "integral_common_044"
    ]
  },
  {
    "id": "integral_common_046",
    "name": "常用积分公式 46°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,1] ln x ln(1+x) dx = 2 - ln4 - π²/12",
    "latex": "\\int_0^1 \\ln x \\ln(1+x) dx = 2 - \\ln 4 - \\frac{\\pi^2}{12}",
    "variables": [],
    "conditions": "无",
    "notes": "涉及对数的积分",
    "derivation": "级数展开",
    "related": [
      "integral_common_047"
    ]
  },
  {
    "id": "integral_common_047",
    "name": "常用积分公式 47°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,1] (ln(1+x) / x) dx = π²/12",
    "latex": "\\int_0^1 \\frac{\\ln(1+x)}{x} dx = \\frac{\\pi^2}{12}",
    "variables": [],
    "conditions": "无",
    "notes": "π²/12的积分表示",
    "derivation": "级数展开",
    "related": [
      "integral_common_046",
      "series_sum_078"
    ]
  },
  {
    "id": "integral_common_048",
    "name": "常用积分公式 48°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,1] ln x ln(1-x) dx = 2 - π²/6",
    "latex": "\\int_0^1 \\ln x \\ln(1-x) dx = 2 - \\frac{\\pi^2}{6}",
    "variables": [],
    "conditions": "无",
    "notes": "涉及对数的积分",
    "derivation": "级数展开",
    "related": [
      "integral_common_046",
      "series_sum_076"
    ]
  },
  {
    "id": "integral_common_049",
    "name": "常用积分公式 49°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,1] (ln(1+x) / (1+x²)) dx = (π/8) ln2",
    "latex": "\\int_0^1 \\frac{\\ln(1+x)}{1+x^2} dx = \\frac{\\pi}{8}\\ln 2",
    "variables": [],
    "conditions": "无",
    "notes": "涉及对数和反正切的积分",
    "derivation": "复分析",
    "related": [
      "integral_common_047"
    ]
  },
  {
    "id": "integral_common_050",
    "name": "常用积分公式 50°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π/2] ln(sin x) dx = -(π/2)ln2",
    "latex": "\\int_0^{\\pi/2} \\ln(\\sin x) dx = -\\frac{\\pi}{2}\\ln 2",
    "variables": [],
    "conditions": "无",
    "notes": "欧拉积分",
    "derivation": "对称性",
    "related": [
      "integral_common_051"
    ]
  },
  {
    "id": "integral_common_051",
    "name": "常用积分公式 51°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π] ln(a ± b cos x) dx = π ln((a + √(a² - b²))/2)",
    "latex": "\\int_0^{\\pi} \\ln(a \\pm b\\cos x) dx = \\pi \\ln\\left(\\frac{a + \\sqrt{a^2-b^2}}{2}\\right)",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "0 < b ≤ a",
    "notes": "涉及对数和余弦的积分",
    "derivation": "复分析",
    "related": [
      "integral_common_050",
      "integral_common_052"
    ]
  },
  {
    "id": "integral_common_052",
    "name": "常用积分公式 52°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π] ln(a² - 2ab cos x + b²) dx = 2π ln a",
    "latex": "\\int_0^{\\pi} \\ln(a^2 - 2ab\\cos x + b^2) dx = 2\\pi \\ln a",
    "variables": [
      {
        "name": "a, b",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "0 < b ≤ a",
    "notes": "涉及对数和余弦的积分",
    "derivation": "复分析",
    "related": [
      "integral_common_051",
      "integral_common_053"
    ]
  },
  {
    "id": "integral_common_053",
    "name": "常用积分公式 53°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π] ln(1 - 2q cos x + q²) dx = 0 (|q| ≤ 1), 2π ln|q| (|q| > 1)",
    "latex": "\\int_0^{\\pi} \\ln(1 - 2q\\cos x + q^2) dx = \\begin{cases} 0 & |q| \\leq 1 \\\\ 2\\pi \\ln|q| & |q| > 1 \\end{cases}",
    "variables": [
      {
        "name": "q",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "q为实数",
    "notes": "分段函数的积分",
    "derivation": "复分析",
    "related": [
      "integral_common_052",
      "integral_common_054"
    ]
  },
  {
    "id": "integral_common_054",
    "name": "常用积分公式 54°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π] (ln(1 + q cos x) / cos x) dx = π arcsin(q)",
    "latex": "\\int_0^{\\pi} \\frac{\\ln(1+q\\cos x)}{\\cos x} dx = \\pi \\arcsin(q)",
    "variables": [
      {
        "name": "q",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "|q| < 1",
    "notes": "涉及对数和余弦的积分",
    "derivation": "级数展开",
    "related": [
      "integral_common_053",
      "integral_common_055"
    ]
  },
  {
    "id": "integral_common_055",
    "name": "常用积分公式 55°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,2π] ((1 - q²) / (1 - 2q cos x + q²)) dx = 2π",
    "latex": "\\int_0^{2\\pi} \\frac{1-q^2}{1-2q\\cos x + q^2} dx = 2\\pi",
    "variables": [
      {
        "name": "q",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "|q| < 1",
    "notes": "泊松核的积分",
    "derivation": "复分析",
    "related": [
      "integral_common_054",
      "integral_common_056"
    ]
  },
  {
    "id": "integral_common_056",
    "name": "常用积分公式 56°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,π] (cos(nx) / (1 - 2q cos x + q²)) dx = (πq^n) / (1 - q²)",
    "latex": "\\int_0^{\\pi} \\frac{\\cos(nx)}{1-2q\\cos x + q^2} dx = \\frac{\\pi q^n}{1-q^2}",
    "variables": [
      {
        "name": "q",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "自然数",
        "unit": ""
      }
    ],
    "conditions": "|q| < 1, n为自然数",
    "notes": "涉及余弦的积分",
    "derivation": "复分析",
    "related": [
      "integral_common_055",
      "integral_common_057"
    ]
  },
  {
    "id": "integral_common_057",
    "name": "常用积分公式 57°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,1] dx / (1 + 2x cos α + x²) = α / (2 sin α)",
    "latex": "\\int_0^1 \\frac{dx}{1+2x\\cos\\alpha + x^2} = \\frac{\\alpha}{2\\sin\\alpha}",
    "variables": [
      {
        "name": "α",
        "description": "角度",
        "unit": ""
      }
    ],
    "conditions": "0 < α < π/2",
    "notes": "涉及三角函数的积分",
    "derivation": "部分分式分解",
    "related": [
      "integral_common_058"
    ]
  },
  {
    "id": "integral_common_058",
    "name": "常用积分公式 58°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] dx / (1 + 2x cos α + x²) = α / sin α",
    "latex": "\\int_0^{\\infty} \\frac{dx}{1+2x\\cos\\alpha + x^2} = \\frac{\\alpha}{\\sin\\alpha}",
    "variables": [
      {
        "name": "α",
        "description": "角度",
        "unit": ""
      }
    ],
    "conditions": "0 < α < π/2",
    "notes": "涉及三角函数的广义积分",
    "derivation": "复分析",
    "related": [
      "integral_common_057"
    ]
  },
  {
    "id": "integral_common_059",
    "name": "常用积分公式 59°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x / (e^x + 1) dx = π²/12",
    "latex": "\\int_0^{\\infty} \\frac{x}{e^x + 1} dx = \\frac{\\pi^2}{12}",
    "variables": [],
    "conditions": "无",
    "notes": "π²/12的积分表示",
    "derivation": "级数展开",
    "related": [
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064"
    ]
  },
  {
    "id": "integral_common_060",
    "name": "常用积分公式 60°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] sin(ax) / (e^x + 1) dx = (1/2)(1/a - π / sinh(aπ))",
    "latex": "\\int_0^{\\infty} \\frac{\\sin(ax)}{e^x + 1} dx = \\frac{1}{2}\\left(\\frac{1}{a} - \\frac{\\pi}{\\sinh(a\\pi)}\\right)",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a ≠ 0",
    "notes": "涉及双曲正弦的积分",
    "derivation": "级数展开",
    "related": [
      "integral_common_059",
      "integral_common_061",
      "integral_common_062"
    ]
  },
  {
    "id": "integral_common_061",
    "name": "常用积分公式 61°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x / (e^x - 1) dx = π²/6",
    "latex": "\\int_0^{\\infty} \\frac{x}{e^x - 1} dx = \\frac{\\pi^2}{6}",
    "variables": [],
    "conditions": "无",
    "notes": "π²/6的积分表示",
    "derivation": "级数展开",
    "related": [
      "integral_common_059",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "series_sum_076"
    ]
  },
  {
    "id": "integral_common_062",
    "name": "常用积分公式 62°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] sin(ax) / (e^x - 1) dx = (1/2)(π coth(aπ) - 1/a)",
    "latex": "\\int_0^{\\infty} \\frac{\\sin(ax)}{e^x - 1} dx = \\frac{1}{2}\\left(\\pi\\coth(a\\pi) - \\frac{1}{a}\\right)",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      }
    ],
    "conditions": "a ≠ 0",
    "notes": "涉及双曲余切的积分",
    "derivation": "级数展开",
    "related": [
      "integral_common_060",
      "integral_common_061"
    ]
  },
  {
    "id": "integral_common_063",
    "name": "常用积分公式 63°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x^(2n-1) / (e^x - 1) dx = (2π)^(2n) B_n / (4n)",
    "latex": "\\int_0^{\\infty} \\frac{x^{2n-1}}{e^x - 1} dx = \\frac{(2\\pi)^{2n}B_n}{4n}",
    "variables": [
      {
        "name": "n",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "B_n",
        "description": "第n个伯努利数",
        "unit": ""
      }
    ],
    "conditions": "n为正整数",
    "notes": "涉及伯努利数的积分",
    "derivation": "级数展开",
    "related": [
      "integral_common_061",
      "integral_common_064"
    ]
  },
  {
    "id": "integral_common_064",
    "name": "常用积分公式 64°",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "∫[0,∞] x³ / (e^x - 1) dx = π⁴/15",
    "latex": "\\int_0^{\\infty} \\frac{x^3}{e^x - 1} dx = \\frac{\\pi^4}{15}",
    "variables": [],
    "conditions": "无",
    "notes": "π⁴/15的积分表示",
    "derivation": "公式63°中令n=2",
    "related": [
      "integral_common_061",
      "integral_common_063"
    ]
  },
  {
    "id": "fourier_001",
    "name": "sgn(x)的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "sgn(x) = (4/π) Σ(n=1 to ∞) sin((2n-1)x) / (2n-1)",
    "latex": "\\text{sgn}(x) = \\frac{4}{\\pi}\\sum_{n=1}^{\\infty} \\frac{\\sin((2n-1)x)}{2n-1}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "符号函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_002",
      "fourier_003",
      "fourier_004"
    ]
  },
  {
    "id": "fourier_002",
    "name": "x的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "x = 2 Σ(n=1 to ∞) (-1)^(n-1) sin(nx) / n",
    "latex": "x = 2\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\sin(nx)}{n}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "线性函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_001",
      "fourier_003",
      "fourier_004"
    ]
  },
  {
    "id": "fourier_003",
    "name": "π-x的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "π - x = 2 Σ(n=1 to ∞) sin(nx) / n",
    "latex": "\\pi - x = 2\\sum_{n=1}^{\\infty} \\frac{\\sin(nx)}{n}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "0 < x < 2π",
    "notes": "线性函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_002",
      "fourier_004"
    ]
  },
  {
    "id": "fourier_004",
    "name": "|x|的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "|x| = π/2 - (4/π) Σ(n=1 to ∞) cos((2n-1)x) / (2n-1)²",
    "latex": "|x| = \\frac{\\pi}{2} - \\frac{4}{\\pi}\\sum_{n=1}^{\\infty} \\frac{\\cos((2n-1)x)}{(2n-1)^2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ π",
    "notes": "绝对值函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_001",
      "fourier_002",
      "fourier_005"
    ]
  },
  {
    "id": "fourier_005",
    "name": "x²的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "x² = π²/3 + 4 Σ(n=1 to ∞) (-1)^n cos(nx) / n²",
    "latex": "x^2 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^{\\infty} \\frac{(-1)^n\\cos(nx)}{n^2}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ π",
    "notes": "二次函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_004",
      "fourier_006"
    ]
  },
  {
    "id": "fourier_006",
    "name": "x³的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "x³ = Σ(n=1 to ∞) (-1)^n (12 - 2n²π²) sin(nx) / n³",
    "latex": "x^3 = \\sum_{n=1}^{\\infty} \\frac{(-1)^n(12-2n^2\\pi^2)\\sin(nx)}{n^3}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "三次函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_005",
      "fourier_007",
      "fourier_008"
    ]
  },
  {
    "id": "fourier_007",
    "name": "x sin x的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "x sin x = 1 - cos(x)/2 - 2 Σ(n=2 to ∞) (-1)^n cos(nx) / (n² - 1)",
    "latex": "x\\sin x = 1 - \\frac{\\cos(x)}{2} - 2\\sum_{n=2}^{\\infty} \\frac{(-1)^n\\cos(nx)}{n^2-1}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ π",
    "notes": "乘积函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_006",
      "fourier_008"
    ]
  },
  {
    "id": "fourier_008",
    "name": "x cos x的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "x cos x = -sin(x)/2 - 2 Σ(n=2 to ∞) (-1)^n n sin(nx) / (n² - 1)",
    "latex": "x\\cos x = -\\frac{\\sin(x)}{2} - 2\\sum_{n=2}^{\\infty} \\frac{(-1)^n n\\sin(nx)}{n^2-1}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "乘积函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_006",
      "fourier_007"
    ]
  },
  {
    "id": "fourier_009",
    "name": "|sin x|的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "|sin x| = 2/π - (4/π) Σ(n=1 to ∞) cos(2nx) / (4n² - 1)",
    "latex": "|\\sin x| = \\frac{2}{\\pi} - \\frac{4}{\\pi}\\sum_{n=1}^{\\infty} \\frac{\\cos(2nx)}{4n^2-1}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "正弦绝对值函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_010"
    ]
  },
  {
    "id": "fourier_010",
    "name": "|cos x|的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "|cos x| = 2/π + (4/π) Σ(n=1 to ∞) (-1)^(n-1) cos(2nx) / (4n² - 1)",
    "latex": "|\\cos x| = \\frac{2}{\\pi} + \\frac{4}{\\pi}\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}\\cos(2nx)}{4n^2-1}",
    "variables": [
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < +∞",
    "notes": "余弦绝对值函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_009"
    ]
  },
  {
    "id": "fourier_011",
    "name": "e^(ax)的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "e^(ax) = (2sinh(aπ)/π) [1/(2a) + Σ(n=1 to ∞) (-1)^n (a cos(nx) - n sin(nx)) / (n² + a²)]",
    "latex": "e^{ax} = \\frac{2\\sinh(a\\pi)}{\\pi}\\left[\\frac{1}{2a} + \\sum_{n=1}^{\\infty} \\frac{(-1)^n(a\\cos(nx) - n\\sin(nx))}{n^2+a^2}\\right]",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "指数函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_012",
      "fourier_013"
    ]
  },
  {
    "id": "fourier_012",
    "name": "sinh(ax)的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "sinh(ax) = (2sinh(aπ)/π) Σ(n=1 to ∞) (-1)^(n-1) n sin(nx) / (n² + a²)",
    "latex": "\\sinh(ax) = \\frac{2\\sinh(a\\pi)}{\\pi}\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}n\\sin(nx)}{n^2+a^2}",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| < π",
    "notes": "双曲正弦函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_011",
      "fourier_013"
    ]
  },
  {
    "id": "fourier_013",
    "name": "cosh(ax)的傅里叶展开式",
    "category": "数学",
    "subCategory": "高等数学-傅里叶分析",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "cosh(ax) = (sinh(aπ)/π) [1/a + 2 Σ(n=1 to ∞) (-1)^n a cos(nx) / (n² + a²)]",
    "latex": "\\cosh(ax) = \\frac{\\sinh(a\\pi)}{\\pi}\\left[\\frac{1}{a} + 2\\sum_{n=1}^{\\infty} \\frac{(-1)^n a\\cos(nx)}{n^2+a^2}\\right]",
    "variables": [
      {
        "name": "a",
        "description": "参数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "变量",
        "unit": ""
      }
    ],
    "conditions": "|x| ≤ π",
    "notes": "双曲余弦函数的傅里叶级数",
    "derivation": "傅里叶级数",
    "related": [
      "fourier_011",
      "fourier_012"
    ]
  },
  {
    "id": "theorem_gauss_digamma",
    "name": "高斯伽马函数定理",
    "category": "数学",
    "subCategory": "高等数学-特殊函数",
    "grade": "大学",
    "tags": [
      "定理"
    ],
    "formula": "ψ(r/m) = -γ - log(2m) - (π/2)cot(rπ/m) + 2 Σ(n=1 to ⌊(m-1)/2⌋) cos(2πnr/m) log(sin(πn/m))",
    "latex": "\\psi(r/m) = -\\gamma - \\log(2m) - \\frac{\\pi}{2}\\cot(r\\pi/m) + 2\\sum_{n=1}^{\\lfloor(m-1)/2\\rfloor} \\cos(2\\pi nr/m)\\log(\\sin(\\pi n/m))",
    "variables": [
      {
        "name": "r, m",
        "description": "自然数",
        "unit": ""
      },
      {
        "name": "ψ",
        "description": "Digamma函数",
        "unit": ""
      },
      {
        "name": "γ",
        "description": "欧拉-马歇罗尼常数",
        "unit": ""
      }
    ],
    "conditions": "∀r, m ∈ N, 0 < r < m",
    "notes": "利用Gauss's digamma theorem计算Digamma函数在有理数点的值",
    "derivation": "Gauss's digamma theorem",
    "related": []
  },
  {
    "id": "theorem_lobachevsky",
    "name": "罗巴切夫斯基积分法",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "定理"
    ],
    "formula": "设f(x)在0 ≤ x < +∞范围内，f(x+π) = f(x)及f(π-x) = f(x)，则：∫[0,+∞] f(x)(sin x / x) dx = ∫[0,π/2] f(x) dx",
    "latex": "\\text{设}f(x)\\text{在}0 \\leq x < +\\infty\\text{范围内，}f(x+\\pi) = f(x)\\text{及}f(\\pi-x) = f(x)\\text{，则：}\\int_0^{+\\infty} f(x)\\frac{\\sin x}{x} dx = \\int_0^{\\pi/2} f(x) dx",
    "variables": [
      {
        "name": "f(x)",
        "description": "满足条件的函数",
        "unit": ""
      }
    ],
    "conditions": "f(x+π) = f(x) 及 f(π-x) = f(x)",
    "notes": "罗巴切夫斯基(Lobachevsky)积分法。当f(x) = 1时，便是狄利克雷积分",
    "derivation": "罗巴切夫斯基积分法",
    "related": [
      "theorem_lobachevsky_2",
      "integral_common_032"
    ]
  },
  {
    "id": "theorem_lobachevsky_2",
    "name": "罗巴切夫斯基积分法（续）",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "定理"
    ],
    "formula": "类似的，在同样条件下：∫[0,+∞] f(x)(sin² x / x²) dx = ∫[0,π/2] f(x) dx",
    "latex": "\\text{类似的，在同样条件下：}\\int_0^{+\\infty} f(x)\\frac{\\sin^2 x}{x^2} dx = \\int_0^{\\pi/2} f(x) dx",
    "variables": [
      {
        "name": "f(x)",
        "description": "满足条件的函数",
        "unit": ""
      }
    ],
    "conditions": "f(x+π) = f(x) 及 f(π-x) = f(x)",
    "notes": "罗巴切夫斯基积分法的另一种形式",
    "derivation": "罗巴切夫斯基积分法",
    "related": [
      "theorem_lobachevsky"
    ]
  },
  {
    "id": "theorem_chebyshev",
    "name": "切比雪夫定理",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "定理"
    ],
    "formula": "设∫x^m (a+bx^n)^p dx为一个二项微分式，其中p, m, n为有理数，则其可表示为初等函数的充分必要条件是p, (m+1)/n, (m+1)/n + p中至少有一个为整数",
    "latex": "\\text{设}\\int x^m (a+bx^n)^p dx\\text{为一个二项微分式，其中}p, m, n\\text{为有理数，则其可表示为初等函数的充分必要条件是}p, (m+1)/n, (m+1)/n + p\\text{中至少有一个为整数}",
    "variables": [
      {
        "name": "p, m, n",
        "description": "有理数",
        "unit": ""
      },
      {
        "name": "a, b",
        "description": "常数",
        "unit": ""
      }
    ],
    "conditions": "p, m, n为有理数",
    "notes": "定理2.1 (Chebyshev定理)。当p为整数时，可令x = t^q，其中q为m和n的公分母；当(m+1)/n为整数时，可令a+bx^n = t^r，其中r为有理数p的分母；当(m+1)/n + p为整数时，可令(a+bx^n)/x^n = t^r，其中r为有理数p的分母",
    "derivation": "切比雪夫定理",
    "related": []
  },
  {
    "id": "theorem_euler_maclaurin",
    "name": "欧拉-麦克劳林公式",
    "category": "数学",
    "subCategory": "高等数学-级数",
    "grade": "大学",
    "tags": [
      "定理",
      "必背公式"
    ],
    "formula": "Σ(n=a to b) f(n) = ∫[a,b] f(x) dx + (f(a) + f(b))/2 + Σ(k=1 to ∞) (B_(2k) / (2k)!) (f^((2k-1))(b) - f^((2k-1))(a))",
    "latex": "\\sum_{n=a}^{b} f(n) = \\int_a^b f(x) dx + \\frac{f(a) + f(b)}{2} + \\sum_{k=1}^{\\infty} \\frac{B_{2k}}{(2k)!}(f^{(2k-1)}(b) - f^{(2k-1)}(a))",
    "variables": [
      {
        "name": "a, b",
        "description": "整数",
        "unit": ""
      },
      {
        "name": "f(x)",
        "description": "函数",
        "unit": ""
      },
      {
        "name": "B_n",
        "description": "第n个伯努利数",
        "unit": ""
      }
    ],
    "conditions": "a与b均为整数",
    "notes": "欧拉-麦克劳林公式(Euler-Maclaurin formula)，其中B_n表示第n个伯努利数(Bernoulli number)",
    "derivation": "欧拉-麦克劳林公式",
    "related": []
  },
  {
    "id": "math_topology_001",
    "name": "欧拉示数性公式",
    "category": "数学",
    "subCategory": "拓扑学",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "V - E + F = 2",
    "latex": "V - E + F = 2",
    "variables": [
      {
        "name": "V",
        "description": "顶点数",
        "unit": ""
      },
      {
        "name": "E",
        "description": "边数",
        "unit": ""
      },
      {
        "name": "F",
        "description": "面数",
        "unit": ""
      }
    ],
    "conditions": "适用于凸多面体",
    "notes": "欧拉示性数公式，对于凸多面体（如立方体、四面体等），顶点数减去边数加上面数等于2。对于一般多面体，公式为 V - E + F = 2 - 2g，其中g为亏格（genus）",
    "derivation": "拓扑学中的基本定理，可以通过对多面体进行三角剖分和归纳法证明",
    "related": [],
    "calculator": {
      "inputs": [
        "V",
        "E"
      ],
      "output": "F"
    }
  },
  {
    "id": "linear_vector_002",
    "name": "混合积",
    "category": "数学",
    "subCategory": "线性代数-向量",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "(a × b) · c = a · (b × c)",
    "latex": "(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c} = \\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})",
    "variables": [
      {
        "name": "a, b, c",
        "description": "三个向量",
        "unit": ""
      },
      {
        "name": "×",
        "description": "向量叉积",
        "unit": ""
      },
      {
        "name": "·",
        "description": "向量点积",
        "unit": ""
      }
    ],
    "conditions": "a, b, c 为三维向量",
    "notes": "混合积等于三个向量构成的平行六面体的有向体积。混合积的绝对值等于以这三个向量为邻边的平行六面体的体积。当三个向量共面时，混合积为0",
    "derivation": "由向量叉积和点积的定义推导",
    "related": [
      "linear_vector_001"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_geo_012",
    "name": "椭圆面积",
    "category": "数学",
    "subCategory": "几何",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "S = πab",
    "latex": "S = \\pi ab",
    "variables": [
      {
        "name": "S",
        "description": "椭圆面积",
        "unit": "面积单位"
      },
      {
        "name": "a",
        "description": "椭圆长半轴",
        "unit": "长度单位"
      },
      {
        "name": "b",
        "description": "椭圆短半轴",
        "unit": "长度单位"
      },
      {
        "name": "π",
        "description": "圆周率",
        "unit": "约等于3.14159"
      }
    ],
    "conditions": "a > 0, b > 0",
    "notes": "椭圆面积公式，当 a = b 时，椭圆退化为圆，面积公式变为 S = πr²",
    "derivation": "通过参数方程和积分推导：x = a cos t, y = b sin t，S = 4∫₀^(π/2) y dx = 4∫₀^(π/2) b sin t · (-a sin t) dt = 4ab∫₀^(π/2) sin²t dt = πab",
    "related": [
      "math_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "S"
    }
  },
  {
    "id": "high_trig_012",
    "name": "积化和差公式",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "sin α cos β = ½[sin(α+β) + sin(α-β)], cos α sin β = ½[sin(α+β) - sin(α-β)], cos α cos β = ½[cos(α+β) + cos(α-β)], sin α sin β = -½[cos(α+β) - cos(α-β)]",
    "latex": "\\sin \\alpha \\cos \\beta = \\frac{1}{2}[\\sin(\\alpha+\\beta) + \\sin(\\alpha-\\beta)], \\quad \\cos \\alpha \\sin \\beta = \\frac{1}{2}[\\sin(\\alpha+\\beta) - \\sin(\\alpha-\\beta)], \\quad \\cos \\alpha \\cos \\beta = \\frac{1}{2}[\\cos(\\alpha+\\beta) + \\cos(\\alpha-\\beta)], \\quad \\sin \\alpha \\sin \\beta = -\\frac{1}{2}[\\cos(\\alpha+\\beta) - \\cos(\\alpha-\\beta)]",
    "variables": [
      {
        "name": "α, β",
        "description": "角度",
        "unit": "度或弧度"
      }
    ],
    "conditions": "",
    "notes": "将两个三角函数的乘积化为和或差的形式，常用于积分计算和化简",
    "derivation": "由两角和与差的正弦、余弦公式推导：sin(α+β) = sin α cos β + cos α sin β, sin(α-β) = sin α cos β - cos α sin β，两式相加或相减即可得到",
    "related": [
      "high_trig_005",
      "high_trig_013"
    ],
    "calculator": {
      "inputs": [
        "alpha",
        "beta",
        "formula_type"
      ],
      "output": "result"
    }
  },
  {
    "id": "high_trig_013",
    "name": "和差化积公式",
    "category": "数学",
    "subCategory": "三角函数",
    "grade": "高中",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "sin α + sin β = 2sin[(α+β)/2]cos[(α-β)/2], sin α - sin β = 2cos[(α+β)/2]sin[(α-β)/2], cos α + cos β = 2cos[(α+β)/2]cos[(α-β)/2], cos α - cos β = -2sin[(α+β)/2]sin[(α-β)/2]",
    "latex": "\\sin \\alpha + \\sin \\beta = 2\\sin\\frac{\\alpha+\\beta}{2}\\cos\\frac{\\alpha-\\beta}{2}, \\quad \\sin \\alpha - \\sin \\beta = 2\\cos\\frac{\\alpha+\\beta}{2}\\sin\\frac{\\alpha-\\beta}{2}, \\quad \\cos \\alpha + \\cos \\beta = 2\\cos\\frac{\\alpha+\\beta}{2}\\cos\\frac{\\alpha-\\beta}{2}, \\quad \\cos \\alpha - \\cos \\beta = -2\\sin\\frac{\\alpha+\\beta}{2}\\sin\\frac{\\alpha-\\beta}{2}",
    "variables": [
      {
        "name": "α, β",
        "description": "角度",
        "unit": "度或弧度"
      }
    ],
    "conditions": "",
    "notes": "将两个三角函数的和或差化为乘积的形式，常用于化简和求解三角方程",
    "derivation": "由积化和差公式逆推，或直接由两角和与差公式推导：设 α = (α+β)/2 + (α-β)/2, β = (α+β)/2 - (α-β)/2，代入两角和与差公式即可得到",
    "related": [
      "high_trig_005",
      "high_trig_012"
    ],
    "calculator": {
      "inputs": [
        "alpha",
        "beta",
        "formula_type"
      ],
      "output": "result"
    }
  },
  {
    "id": "calc_integral_053",
    "name": "辛普森公式求拟柱体体积",
    "category": "数学",
    "subCategory": "高等数学-积分",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "V = (h/6)[B₁ + 4B₂ + B₃]",
    "latex": "V = \\frac{h}{6}[B_1 + 4B_2 + B_3]",
    "variables": [
      {
        "name": "V",
        "description": "拟柱体体积",
        "unit": "体积单位"
      },
      {
        "name": "h",
        "description": "高度",
        "unit": "长度单位"
      },
      {
        "name": "B₁",
        "description": "下底面积",
        "unit": "面积单位"
      },
      {
        "name": "B₂",
        "description": "中截面面积",
        "unit": "面积单位"
      },
      {
        "name": "B₃",
        "description": "上底面积",
        "unit": "面积单位"
      }
    ],
    "conditions": "h > 0, B₁, B₂, B₃ ≥ 0",
    "notes": "辛普森公式用于计算拟柱体（棱台、圆台等）的体积。当 B₁ = B₃ 时，拟柱体退化为柱体，公式变为 V = B₁h",
    "derivation": "由辛普森积分公式推导：V = ∫₀^h S(x)dx，其中 S(x) 为高度 x 处的截面积。假设截面积是高度的二次函数，通过三点（0, B₁）、(h/2, B₂）、(h, B₃）确定二次函数，然后积分得到",
    "related": [
      "calc_integral_001"
    ],
    "calculator": {
      "inputs": [
        "h",
        "B1",
        "B2",
        "B3"
      ],
      "output": "V"
    }
  },
  {
    "id": "math_algebra_001",
    "name": "四元数",
    "category": "数学",
    "subCategory": "代数",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "q = a + bi + cj + dk，其中 i² = j² = k² = ijk = -1",
    "latex": "q = a + bi + cj + dk, \\quad \\text{其中 } i^2 = j^2 = k^2 = ijk = -1",
    "variables": [
      {
        "name": "q",
        "description": "四元数",
        "unit": ""
      },
      {
        "name": "a",
        "description": "实部（标量部分）",
        "unit": ""
      },
      {
        "name": "b, c, d",
        "description": "虚部（向量部分）的系数",
        "unit": ""
      },
      {
        "name": "i, j, k",
        "description": "四元数的三个虚数单位",
        "unit": ""
      }
    ],
    "conditions": "",
    "notes": "四元数是复数的推广，由哈密顿（Hamilton）提出。四元数乘法满足：ij = k, jk = i, ki = j, ji = -k, kj = -i, ik = -j。四元数在三维旋转、计算机图形学、机器人学等领域有重要应用",
    "derivation": "四元数由哈密顿在1843年发现，是第一个非交换的除环（division ring）例子",
    "related": [
      "calc_complex_001"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b",
        "c",
        "d"
      ],
      "output": "q"
    }
  }
];

module.exports = formulas;
