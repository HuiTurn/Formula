// 常用公式数据（限制为50个最常用的）
const formulas = [
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
  }
];

module.exports = formulas;
