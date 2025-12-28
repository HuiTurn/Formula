// 数论公式数据
const formulas = [
  {
    "id": "number_theory_001",
    "name": "欧几里得算法（最大公约数）",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "gcd(a, b) = gcd(b, a mod b)，直到余数为0，最后的除数即为最大公约数",
    "latex": "\\gcd(a, b) = \\gcd(b, a \\bmod b), \\quad \\text{直到余数为0}",
    "variables": [
      {
        "name": "a, b",
        "description": "正整数",
        "unit": ""
      },
      {
        "name": "gcd(a, b)",
        "description": "a和b的最大公约数",
        "unit": ""
      }
    ],
    "conditions": "a, b 为正整数",
    "notes": "经典的递归算法，时间复杂度为O(log min(a,b))",
    "derivation": "基于整除性质",
    "related": [
      "number_theory_002"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "gcd"
    }
  },
  {
    "id": "number_theory_002",
    "name": "扩展欧几里得算法",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "对于gcd(a, b) = d，存在整数x, y使得 ax + by = d",
    "latex": "\\gcd(a, b) = d \\Rightarrow \\exists x, y \\in \\mathbb{Z}: ax + by = d",
    "variables": [
      {
        "name": "a, b",
        "description": "正整数",
        "unit": ""
      },
      {
        "name": "x, y",
        "description": "贝祖等式系数",
        "unit": ""
      },
      {
        "name": "d",
        "description": "最大公约数",
        "unit": ""
      }
    ],
    "conditions": "a, b 为正整数",
    "notes": "用于求解线性丢番图方程，在密码学中应用广泛",
    "derivation": "扩展欧几里得算法",
    "related": [
      "number_theory_001",
      "number_theory_004"
    ],
    "calculator": {
      "inputs": [
        "a",
        "b"
      ],
      "output": "[d, x, y]"
    }
  },
  {
    "id": "number_theory_003",
    "name": "费马小定理",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若p是素数，且gcd(a, p) = 1，则 a^(p-1) ≡ 1 (mod p)",
    "latex": "\\text{若}p\\text{是素数，且}\\gcd(a, p) = 1\\text{，则} \\quad a^{p-1} \\equiv 1 \\pmod{p}",
    "variables": [
      {
        "name": "p",
        "description": "素数",
        "unit": ""
      },
      {
        "name": "a",
        "description": "与p互质的整数",
        "unit": ""
      }
    ],
    "conditions": "p为素数，gcd(a, p) = 1",
    "notes": "数论中的基本定理，在密码学（如RSA算法）中有重要应用",
    "derivation": "群论或组合证明",
    "related": [
      "number_theory_004"
    ],
    "calculator": {
      "inputs": [
        "a",
        "p"
      ],
      "output": "result"
    }
  },
  {
    "id": "number_theory_004",
    "name": "欧拉定理",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若gcd(a, n) = 1，则 a^φ(n) ≡ 1 (mod n)，其中φ(n)是欧拉函数",
    "latex": "\\text{若}\\gcd(a, n) = 1\\text{，则} \\quad a^{\\varphi(n)} \\equiv 1 \\pmod{n}",
    "variables": [
      {
        "name": "a",
        "description": "与n互质的整数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "正整数",
        "unit": ""
      },
      {
        "name": "φ(n)",
        "description": "欧拉函数，小于n且与n互质的正整数个数",
        "unit": ""
      }
    ],
    "conditions": "gcd(a, n) = 1",
    "notes": "费马小定理的推广，当n为素数时退化为费马小定理",
    "derivation": "群论（乘法群的阶）",
    "related": [
      "number_theory_003",
      "number_theory_005"
    ],
    "calculator": {
      "inputs": [
        "a",
        "n"
      ],
      "output": "result"
    }
  },
  {
    "id": "number_theory_005",
    "name": "欧拉函数公式",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若n = p₁^α₁·p₂^α₂·...·pₖ^αₖ，则 φ(n) = n·∏(1 - 1/pᵢ)",
    "latex": "\\text{若}n = p_1^{\\alpha_1}p_2^{\\alpha_2}\\cdots p_k^{\\alpha_k}\\text{，则} \\quad \\varphi(n) = n\\prod_{i=1}^{k}\\left(1-\\frac{1}{p_i}\\right)",
    "variables": [
      {
        "name": "n",
        "description": "正整数",
        "unit": ""
      },
      {
        "name": "pᵢ",
        "description": "n的素因子",
        "unit": ""
      },
      {
        "name": "αᵢ",
        "description": "素因子的指数",
        "unit": ""
      }
    ],
    "conditions": "n为正整数",
    "notes": "计算欧拉函数的高效公式，基于容斥原理",
    "derivation": "容斥原理",
    "related": [
      "number_theory_004"
    ],
    "calculator": {
      "inputs": [
        "n"
      ],
      "output": "phi"
    }
  },
  {
    "id": "number_theory_006",
    "name": "中国剩余定理",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若m₁, m₂, ..., mₖ两两互质，则同余方程组 x ≡ aᵢ (mod mᵢ) 有唯一解模 M = m₁m₂...mₖ",
    "latex": "\\text{若}m_1, m_2, \\ldots, m_k\\text{两两互质，则} \\quad x \\equiv a_i \\pmod{m_i} \\quad \\text{有唯一解模}M = \\prod_{i=1}^{k} m_i",
    "variables": [
      {
        "name": "mᵢ",
        "description": "两两互质的模数",
        "unit": ""
      },
      {
        "name": "aᵢ",
        "description": "余数",
        "unit": ""
      },
      {
        "name": "x",
        "description": "同余方程组的解",
        "unit": ""
      }
    ],
    "conditions": "m₁, m₂, ..., mₖ两两互质",
    "notes": "数论中的经典定理，在密码学和计算机科学中有广泛应用",
    "derivation": "扩展欧几里得算法构造解",
    "related": [
      "number_theory_002"
    ],
    "calculator": {
      "inputs": [
        "mods",
        "rems"
      ],
      "output": "x"
    }
  },
  {
    "id": "number_theory_007",
    "name": "威尔逊定理",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "p是素数当且仅当 (p-1)! ≡ -1 (mod p)",
    "latex": "p\\text{是素数} \\Leftrightarrow (p-1)! \\equiv -1 \\pmod{p}",
    "variables": [
      {
        "name": "p",
        "description": "正整数",
        "unit": ""
      }
    ],
    "conditions": "p > 1",
    "notes": "判断素数的充要条件，但计算阶乘效率低，主要用于理论",
    "derivation": "群论（模p乘法群的逆元配对）",
    "related": [
      "number_theory_003"
    ],
    "calculator": {
      "inputs": [
        "p"
      ],
      "output": "isPrime"
    }
  },
  {
    "id": "number_theory_008",
    "name": "二次剩余（欧拉判别准则）",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "设p为奇素数，a与p互质，则a是模p的二次剩余当且仅当 a^((p-1)/2) ≡ 1 (mod p)",
    "latex": "\\text{设}p\\text{为奇素数，}a\\text{与}p\\text{互质，则}a\\text{是模}p\\text{的二次剩余} \\Leftrightarrow a^{(p-1)/2} \\equiv 1 \\pmod{p}",
    "variables": [
      {
        "name": "a",
        "description": "与p互质的整数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "奇素数",
        "unit": ""
      }
    ],
    "conditions": "p为奇素数，gcd(a, p) = 1",
    "notes": "用于判断是否存在x使得x² ≡ a (mod p)",
    "derivation": "费马小定理和群论",
    "related": [
      "number_theory_003"
    ],
    "calculator": {
      "inputs": [
        "a",
        "p"
      ],
      "output": "isQuadraticResidue"
    }
  },
  {
    "id": "number_theory_009",
    "name": "勒让德符号",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "(a/p) = a^((p-1)/2) mod p，值为1表示二次剩余，-1表示二次非剩余，0表示p|a",
    "latex": "\\left(\\frac{a}{p}\\right) = a^{(p-1)/2} \\bmod p",
    "variables": [
      {
        "name": "a",
        "description": "整数",
        "unit": ""
      },
      {
        "name": "p",
        "description": "奇素数",
        "unit": ""
      },
      {
        "name": "(a/p)",
        "description": "勒让德符号",
        "unit": ""
      }
    ],
    "conditions": "p为奇素数",
    "notes": "勒让德符号是二次剩余的简洁表示，满足乘法性质",
    "derivation": "欧拉判别准则",
    "related": [
      "number_theory_008"
    ],
    "calculator": {
      "inputs": [
        "a",
        "p"
      ],
      "output": "legendre"
    }
  },
  {
    "id": "number_theory_010",
    "name": "二次互反律",
    "category": "数学",
    "subCategory": "数论-初等数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "若p和q是不同的奇素数，则 (p/q)(q/p) = (-1)^((p-1)(q-1)/4)",
    "latex": "\\text{若}p\\text{和}q\\text{是不同的奇素数，则} \\quad \\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{(p-1)(q-1)}{4}}",
    "variables": [
      {
        "name": "p, q",
        "description": "不同的奇素数",
        "unit": ""
      },
      {
        "name": "(p/q), (q/p)",
        "description": "勒让德符号",
        "unit": ""
      }
    ],
    "conditions": "p和q是不同的奇素数",
    "notes": "数论中的核心定理，由高斯首次完整证明，被称为\"数论之母\"",
    "derivation": "高斯引理或其他方法",
    "related": [
      "number_theory_009"
    ],
    "calculator": {
      "inputs": [
        "p",
        "q"
      ],
      "output": "reciprocity"
    }
  },
  {
    "id": "algebraic_number_theory_001",
    "name": "代数整数",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "代数整数α是某个首一整数系数多项式的根，即存在整数cᵢ使得 αⁿ + cₙ₋₁αⁿ⁻¹ + ... + c₀ = 0",
    "latex": "\\text{代数整数}\\alpha\\text{满足} \\quad \\alpha^n + c_{n-1}\\alpha^{n-1} + \\cdots + c_0 = 0, \\quad c_i \\in \\mathbb{Z}",
    "variables": [
      {
        "name": "α",
        "description": "代数整数",
        "unit": ""
      },
      {
        "name": "cᵢ",
        "description": "整数系数",
        "unit": ""
      },
      {
        "name": "n",
        "description": "次数",
        "unit": ""
      }
    ],
    "conditions": "α是代数数",
    "notes": "代数整数是整数在代数数域中的推广，构成数域的整数环",
    "derivation": "代数数论基础定义",
    "related": [
      "algebraic_number_theory_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "definition"
    }
  },
  {
    "id": "algebraic_number_theory_002",
    "name": "数域的整数环",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "设K为代数数域，K的整数环Oₖ由K中所有代数整数组成，是K的子环",
    "latex": "O_K = \\{\\alpha \\in K : \\alpha\\text{是代数整数}\\}",
    "variables": [
      {
        "name": "K",
        "description": "代数数域",
        "unit": ""
      },
      {
        "name": "Oₖ",
        "description": "K的整数环",
        "unit": ""
      }
    ],
    "conditions": "K为代数数域",
    "notes": "整数环是代数数论研究的基本对象，是Dedekind整环",
    "derivation": "代数数论基础",
    "related": [
      "algebraic_number_theory_001",
      "algebraic_number_theory_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "ring"
    }
  },
  {
    "id": "algebraic_number_theory_003",
    "name": "理想分解唯一性",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "在Dedekind整环（如整数环Oₖ）中，每个非零理想都可以唯一地分解为素理想的乘积",
    "latex": "\\text{在}O_K\\text{中，每个非零理想}I\\text{可以唯一分解为} \\quad I = \\mathfrak{p}_1^{e_1}\\mathfrak{p}_2^{e_2}\\cdots\\mathfrak{p}_k^{e_k}",
    "variables": [
      {
        "name": "I",
        "description": "理想",
        "unit": ""
      },
      {
        "name": "𝔭ᵢ",
        "description": "素理想",
        "unit": ""
      },
      {
        "name": "eᵢ",
        "description": "指数",
        "unit": ""
      }
    ],
    "conditions": "I为非零理想",
    "notes": "这是代数数论的核心定理，解决了普通整数分解唯一性在代数数域中的推广问题",
    "derivation": "Dedekind整环理论",
    "related": [
      "algebraic_number_theory_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "decomposition"
    }
  },
  {
    "id": "algebraic_number_theory_004",
    "name": "理想范数",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "理想𝔞的范数N(𝔞) = |Oₖ/𝔞|，即商环的基数",
    "latex": "N(\\mathfrak{a}) = |O_K/\\mathfrak{a}|",
    "variables": [
      {
        "name": "𝔞",
        "description": "理想",
        "unit": ""
      },
      {
        "name": "N(𝔞)",
        "description": "理想范数",
        "unit": ""
      },
      {
        "name": "Oₖ/𝔞",
        "description": "商环",
        "unit": ""
      }
    ],
    "conditions": "𝔞为非零理想",
    "notes": "理想范数是有限正整数，满足乘法性：N(𝔞𝔟) = N(𝔞)N(𝔟)",
    "derivation": "环论",
    "related": [
      "algebraic_number_theory_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "norm"
    }
  },
  {
    "id": "algebraic_number_theory_005",
    "name": "类数公式",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "hₖ = (2^r₁(2π)^r₂Rₖwₖ/√|dₖ|) · L(1, χ)，其中hₖ是类数，Rₖ是调节子，dₖ是判别式",
    "latex": "h_K = \\frac{2^{r_1}(2\\pi)^{r_2}R_K}{w_K\\sqrt{|d_K|}} \\cdot L(1, \\chi)",
    "variables": [
      {
        "name": "hₖ",
        "description": "类数",
        "unit": ""
      },
      {
        "name": "Rₖ",
        "description": "调节子",
        "unit": ""
      },
      {
        "name": "dₖ",
        "description": "判别式",
        "unit": ""
      },
      {
        "name": "r₁, r₂",
        "description": "实嵌入和复嵌入的对数",
        "unit": ""
      },
      {
        "name": "wₖ",
        "description": "单位根的个数",
        "unit": ""
      }
    ],
    "conditions": "K为代数数域",
    "notes": "类数衡量整数环中理想类群的有限性，是数论中的重要不变量",
    "derivation": "解析数论和类域论",
    "related": [
      "algebraic_number_theory_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "class_number"
    }
  },
  {
    "id": "algebraic_number_theory_006",
    "name": "狄利克雷单位定理",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式",
      "必背公式"
    ],
    "formula": "Oₖ的单位群Oₖ*是有限生成的，秩为r₁ + r₂ - 1，其中r₁是实嵌入数，r₂是复嵌入对数",
    "latex": "O_K^* \\cong \\mu_K \\times \\mathbb{Z}^{r_1 + r_2 - 1}",
    "variables": [
      {
        "name": "Oₖ*",
        "description": "单位群",
        "unit": ""
      },
      {
        "name": "μₖ",
        "description": "单位根群（有限循环群）",
        "unit": ""
      },
      {
        "name": "r₁",
        "description": "实嵌入数",
        "unit": ""
      },
      {
        "name": "r₂",
        "description": "复嵌入对数",
        "unit": ""
      }
    ],
    "conditions": "K为代数数域",
    "notes": "描述了整数环中单位的结构，是代数数论的基本定理之一",
    "derivation": "几何数论方法",
    "related": [
      "algebraic_number_theory_002"
    ],
    "calculator": {
      "inputs": [],
      "output": "unit_structure"
    }
  },
  {
    "id": "algebraic_number_theory_007",
    "name": "分圆域",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "分圆域Q(ζₙ)是Q添加n次单位原根ζₙ得到的域，次数为φ(n)",
    "latex": "\\mathbb{Q}(\\zeta_n), \\quad [\\mathbb{Q}(\\zeta_n):\\mathbb{Q}] = \\varphi(n)",
    "variables": [
      {
        "name": "ζₙ",
        "description": "n次单位原根",
        "unit": ""
      },
      {
        "name": "Q(ζₙ)",
        "description": "分圆域",
        "unit": ""
      },
      {
        "name": "φ(n)",
        "description": "欧拉函数",
        "unit": ""
      }
    ],
    "conditions": "n为正整数",
    "notes": "分圆域在代数数论中具有特殊地位，其整数环有很好的性质",
    "derivation": "域论",
    "related": [
      "number_theory_005"
    ],
    "calculator": {
      "inputs": [
        "n"
      ],
      "output": "degree"
    }
  },
  {
    "id": "algebraic_number_theory_008",
    "name": "二次域的整数环",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "对于无平方因子的d，Q(√d)的整数环为：O = Z[√d]（d≡2,3 mod 4）或 Z[(1+√d)/2]（d≡1 mod 4）",
    "latex": "O_{\\mathbb{Q}(\\sqrt{d})} = \\begin{cases} \\mathbb{Z}[\\sqrt{d}] & d \\equiv 2,3 \\pmod{4} \\\\ \\mathbb{Z}\\left[\\frac{1+\\sqrt{d}}{2}\\right] & d \\equiv 1 \\pmod{4} \\end{cases}",
    "variables": [
      {
        "name": "d",
        "description": "无平方因子的整数",
        "unit": ""
      },
      {
        "name": "Q(√d)",
        "description": "二次域",
        "unit": ""
      },
      {
        "name": "O",
        "description": "整数环",
        "unit": ""
      }
    ],
    "conditions": "d无平方因子",
    "notes": "二次域是最简单的代数数域之一，其整数环结构明确",
    "derivation": "代数数论基础",
    "related": [
      "algebraic_number_theory_002"
    ],
    "calculator": {
      "inputs": [
        "d"
      ],
      "output": "basis"
    }
  },
  {
    "id": "algebraic_number_theory_009",
    "name": "素理想在扩张中的分解",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "设L/K为有限扩张，p为K的素理想，则pO_L = (P₁...Pₖ)^e，其中e为分歧指数，Σeᵢfᵢ = [L:K]",
    "latex": "pO_L = (\\mathfrak{P}_1\\cdots\\mathfrak{P}_k)^e, \\quad \\sum_{i=1}^{k} e_i f_i = [L:K]",
    "variables": [
      {
        "name": "p",
        "description": "K的素理想",
        "unit": ""
      },
      {
        "name": "Pᵢ",
        "description": "L中位于p上的素理想",
        "unit": ""
      },
      {
        "name": "e",
        "description": "分歧指数",
        "unit": ""
      },
      {
        "name": "fᵢ",
        "description": "剩余类域次数",
        "unit": ""
      }
    ],
    "conditions": "L/K为有限扩张",
    "notes": "描述了素理想在域扩张中的分解行为，是代数数论的核心内容",
    "derivation": "Dedekind分解定理",
    "related": [
      "algebraic_number_theory_003"
    ],
    "calculator": {
      "inputs": [],
      "output": "decomposition"
    }
  },
  {
    "id": "algebraic_number_theory_010",
    "name": "判别式",
    "category": "数学",
    "subCategory": "数论-代数数论",
    "grade": "大学",
    "tags": [
      "常用公式"
    ],
    "formula": "数域K的判别式dₖ = det(Tr(αᵢαⱼ))，其中{αᵢ}是Oₖ的一组整基",
    "latex": "d_K = \\det(\\text{Tr}(\\alpha_i\\alpha_j))",
    "variables": [
      {
        "name": "dₖ",
        "description": "K的判别式",
        "unit": ""
      },
      {
        "name": "αᵢ",
        "description": "整数环的一组整基",
        "unit": ""
      },
      {
        "name": "Tr",
        "description": "迹映射",
        "unit": ""
      }
    ],
    "conditions": "K为代数数域",
    "notes": "判别式是整数环的不变量，用于研究理想类和单位",
    "derivation": "线性代数和域论",
    "related": [
      "algebraic_number_theory_005"
    ],
    "calculator": {
      "inputs": [],
      "output": "discriminant"
    }
  }
];

module.exports = formulas;
