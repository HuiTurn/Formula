// 公式计算函数映射表（用于补充JSON格式文件中缺失的函数）
// 此映射表由脚本自动生成，包含所有公式的计算函数
const formulaFunctions = {
  'math_001': (a, b) => Math.sqrt(a * a + b * b),
  'math_002': (a, b, c) => {
    const delta = b * b - 4 * a * c;
    if (delta < 0) return '无实数解';
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return delta === 0 ? x1 : [x1, x2];
  },
  'math_002b': (a1, q, n) => {
    if (Math.abs(q - 1) < 1e-10) return a1 * n;
    return a1 * (1 - Math.pow(q, n)) / (1 - q);
  },
  'math_003': (r) => Math.PI * r * r,
  'physics_001': (m, a) => m * a,
  'physics_002': (m, v) => 0.5 * m * v * v,
  'primary_math_001': (a, b, c, d) => (a * d + b * c) / (b * d),
  'primary_math_002': (a, b, c, d) => (a * c) / (b * d),
  'primary_math_003': (a) => a / 100,
  'primary_math_004': (a) => a * 100,
  'primary_math_005': (s, t) => s / t,
  'primary_math_006': (v, t) => v * t,
  'primary_math_007': (s, v) => s / v,
  'primary_geo_001': (a, b) => 2 * (a + b),
  'primary_geo_002': (a, b) => a * b,
  'primary_geo_003': (a) => 4 * a,
  'primary_geo_004': (a) => a * a,
  'primary_geo_005': (a, h) => 0.5 * a * h,
  'primary_geo_006': (a, h) => a * h,
  'primary_geo_007': (a, b, h) => 0.5 * (a + b) * h,
  'primary_geo_008': (r) => 2 * Math.PI * r,
  'primary_geo_009': (a, b, c) => a * b * c,
  'primary_geo_010': (a) => a * a * a,
  'middle_alg_002': (a, b) => a * a - b * b,
  'middle_alg_003': (a, b) => a * a * a + b * b * b,
  'middle_alg_004': (a, b) => a * a * a - b * b * b,
  'middle_alg_005': (a, b) => -b / a,
  'middle_alg_007': (a, m, n) => Math.pow(a, m + n),
  'middle_alg_008': (a, m, n) => Math.pow(a, m - n),
  'middle_alg_009': (a, m, n) => Math.pow(a, m * n),
  'middle_geo_001': (angleA, angleB) => 180 - angleA - angleB,
  'middle_geo_002': (angle1, angle2) => angle1 + angle2,
  'middle_geo_003': (n) => (n - 2) * 180,
  'middle_geo_004': () => 360,
  'middle_geo_005': (n, r) => (n / 360) * Math.PI * r * r,
  'middle_geo_006': (n, r) => (n / 360) * 2 * Math.PI * r,
  'middle_geo_007': (r, h) => Math.PI * r * r * h,
  'middle_geo_008': (r, h) => 2 * Math.PI * r * (r + h),
  'middle_geo_009': (r, h) => (1 / 3) * Math.PI * r * r * h,
  'middle_geo_010': (r, l) => Math.PI * r * l,
  'middle_geo_011': (r) => (4 / 3) * Math.PI * r * r * r,
  'middle_geo_012': (r) => 4 * Math.PI * r * r,
  'middle_geo_013': (a1, a2, b1) => (a2 * b1) / a1,
  'middle_phy_001': (m, V) => m / V,
  'middle_phy_002': (F, S) => F / S,
  'middle_phy_005': (F, s) => F * s,
  'middle_phy_006': (W, t) => W / t,
  'middle_phy_007': (W_useful, W_total) => (W_useful / W_total) * 100,
  'middle_phy_008': (F1, l1, l2) => (F1 * l1) / l2,
  'middle_phy_009': (c, m, deltaT) => c * m * deltaT,
  'middle_phy_010': (q, m) => q * m,
  'middle_phy_011': (U, R) => U / R,
  'middle_phy_012': (U, I, t) => U * I * t,
  'middle_phy_013': (U, I) => U * I,
  'middle_phy_014': (resistors) => resistors.reduce((a, b) => a + b, 0),
  'middle_chem_003': (m_solute, m_solution) => (m_solute / m_solution) * 100,
  'middle_chem_005': (m_solution, omega) => m_solution * (omega / 100),
  'middle_chem_006': (m_solute, m_solvent) => m_solute + m_solvent,
  'middle_chem_007': () => '需要根据具体反应配平',
  'middle_chem_008': (formula) => '需要解析化学式',
  'high_func_001': (a, x) => Math.pow(a, x),
  'high_func_002': (a, x) => Math.log(x) / Math.log(a),
  'high_func_004': (a, b, c) => Math.log(b) / Math.log(c) / (Math.log(a) / Math.log(c)),
  'high_func_005': (x, n) => Math.pow(x, n),
  'high_trig_001': (x) => Math.sin(x),
  'high_trig_002': (x) => Math.cos(x),
  'high_trig_003': (x) => Math.tan(x),
  'high_trig_010': (a, A) => a / (2 * Math.sin(A)),
  'high_trig_011': (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(A)),
  'high_geo_001': (S, h) => S * h,
  'high_geo_002': (S, h) => (1 / 3) * S * h,
  'high_geo_003': (a) => (Math.sqrt(2) / 12) * a * a * a,
  'high_geo_004': (a) => a * a * a,
  'high_geo_005': (a) => (Math.sqrt(2) / 3) * a * a * a,
  'high_geo_008': (h, r1, r2) => (1 / 3) * Math.PI * h * (r1 * r1 + r1 * r2 + r2 * r2),
  'high_geo_009': (l, r1, r2) => Math.PI * l * (r1 + r2),
  'high_geo_010': (h, r) => (1 / 3) * Math.PI * h * h * (3 * r - h),
  'high_geo_011': (r, h) => 2 * Math.PI * r * h,
  'high_phy_001': (v0, a, t) => v0 + a * t,
  'high_phy_002': (v0, a, t) => v0 * t + 0.5 * a * t * t,
  'high_phy_003': (v0, a, s) => Math.sqrt(v0 * v0 + 2 * a * s),
  'high_phy_006': (m, v, r) => m * v * v / r,
  'high_phy_009': (m, v, v0) => m * (v - v0),
  'high_phy_010': (m1, v1, m2, v2) => m1 * v1 + m2 * v2,
  'high_phy_011': (Ek1, Ep1) => Ek1 + Ep1,
  'high_phy_013': (k, x) => 0.5 * k * x * x,
  'high_phy_016': (q, phi) => q * phi,
  'high_phy_017': (Q, U) => Q / U,
  'high_phy_018': (F, I, L) => F / (I * L),
  'high_phy_019': (B, I, L, theta) => B * I * L * Math.sin(theta),
  'high_phy_020': (q, v, B, theta) => q * v * B * Math.sin(theta),
  'high_phy_021': (n, deltaPhi, deltaT) => -n * deltaPhi / deltaT,
  'high_phy_022': (B, S, theta) => B * S * Math.cos(theta),
  'high_chem_001': (m, M) => m / M,
  'high_chem_002': (n, V) => n / V,
  'high_chem_003': (rho, omega, M) => 1000 * rho * (omega / 100) / M,
  'high_chem_004': (deltaC, deltaT) => deltaC / deltaT,
  'high_chem_006': (H, A, HA) => (H * A) / HA,
  'high_chem_007': (H) => -Math.log10(H),
  'high_chem_008': (OH) => -Math.log10(OH),
  'high_chem_009': (H) => 1e-14 / H,
  'high_chem_010': (E_plus, E_minus) => E_plus - E_minus,
  'calc_limit_001': () => '需要具体函数计算',
  'calc_limit_002': (x) => x === 0 ? 1 : Math.sin(x) / x,
  'calc_limit_003': (x) => Math.pow(1 + 1 / x, x),
  'calc_derivative_001': () => '需要具体函数计算',
  'calc_derivative_003': () => '需要具体函数计算',
  'calc_derivative_004': () => '需要具体函数计算',
  'calc_derivative_005': () => '需要具体函数计算',
  'calc_integral_001': () => '需要具体函数计算',
  'calc_integral_003': () => '需要具体函数计算',
  'calc_integral_004': (F, a, b) => F(b) - F(a),
  'calc_integral_005': () => '需要具体函数计算',
  'calc_integral_006': () => '需要具体函数计算',
  'calc_series_001': () => '需要具体函数计算',
  'calc_series_002': () => '需要具体函数计算',
  'linear_matrix_003': (A) => A[0].map((_, j) => A.map(row => row[j])),
  'linear_matrix_004': () => '需要具体矩阵计算',
  'linear_det_001': (a11, a12, a21, a22) => a11 * a22 - a12 * a21,
  'linear_det_003': () => '需要具体矩阵计算',
  'linear_eigen_001': () => '需要具体矩阵计算',
  'prob_basic_001': (nA, nS) => nA / nS,
  'prob_basic_002': (PAB, PB) => PAB / PB,
  'prob_basic_003': (PA_given_B, PB) => PA_given_B * PB,
  'prob_rv_003': (D) => Math.sqrt(D),
  'univ_phy_quantum_003': () => '需要具体势能函数求解',
  'univ_phy_electro_001': () => '理论方程组',
  'univ_phy_electro_002': () => '理论方程组',
  'univ_phy_thermo_001': (Q, W) => Q - W,
  'univ_phy_thermo_003': (dQ, T) => dQ / T,
  'univ_phy_thermo_004': (T1, T2) => 1 - T2 / T1,
  'univ_chem_thermo_001': (deltaH, T, deltaS) => deltaH - T * deltaS,
  'univ_chem_kinetics_001': (A0, A, k) => Math.log(A0 / A) / k,
  'univ_chem_kinetics_002': (A0, A, k) => (1 / A - 1 / A0) / k,
  'stat_009': (x, mu, sigma) => (x - mu) / sigma,
  'stat_010': (xBar, mu0, s, n) => (xBar - mu0) / (s / Math.sqrt(n)),
  'eng_001': (F, A) => F / A,
  'eng_002': (deltaL, L0) => deltaL / L0,
  'eng_003': (sigma, epsilon) => sigma / epsilon,
  'eng_004': (M, y, I) => (M * y) / I,
  'eng_005': (b, h) => (b * Math.pow(h, 3)) / 12,
  'eng_006': (d) => (Math.PI * Math.pow(d, 4)) / 64,
  'eng_007': (E, I, L) => (Math.PI * Math.PI * E * I) / (L * L),
  'eng_009': (rho, v, D, mu) => (rho * v * D) / mu,
  'eng_010': (h, A, Ts, Tinf) => h * A * (Ts - Tinf),
  'eng_011': (k, A, T1, T2, L) => (k * A * (T1 - T2)) / L,
  'eng_013': (Pout, Pin) => (Pout / Pin) * 100,
  'eng_014': (F, r) => F * r,
  'eng_015': (z1, z2) => z2 / z1,
  'finance_001': (PV, r, n) => PV * Math.pow(1 + r, n),
  'finance_002': (FV, r, n) => FV / Math.pow(1 + r, n),
  'finance_003': (A, r, n) => A * (Math.pow(1 + r, n) - 1) / r,
  'finance_004': (A, r, n) => A * (1 - Math.pow(1 + r, -n)) / r,
  'finance_005': (A, r, n) => A * (Math.pow(1 + r, n) - 1) * (1 + r) / r,
  'finance_006': (A, r, n) => A * (1 - Math.pow(1 + r, -n)) * (1 + r) / r,
  'finance_007': (profit, cost) => ((profit - cost) / cost) * 100,
  'finance_008': (FV, PV, n) => (Math.pow(FV / PV, 1 / n) - 1) * 100,
  'finance_013': (rate) => 72 / rate,
  'finance_015': (P, n, r, t) => P / n + P * (1 - (t - 1) / n) * r,
  'finance_016': (r, m) => Math.pow(1 + r / m, m) - 1,
  'finance_017': (price, eps) => price / eps,
  'finance_018': (price, bvps) => price / bvps,
  'calc_derivative_006': () => '需要具体函数计算',
  'calc_derivative_007': () => '需要具体函数计算',
  'calc_derivative_008': () => '需要具体函数计算',
  'calc_integral_007': () => '需要具体函数计算',
  'calc_integral_008': () => '需要具体函数计算',
  'calc_integral_009': () => '需要具体函数计算',
  'calc_integral_010': () => '需要具体函数计算',
  'calc_integral_011': () => '需要具体函数计算',
  'calc_integral_012': () => '需要具体函数计算',
  'calc_integral_013': () => '需要具体函数计算',
  'calc_integral_021': () => '需要具体函数计算',
  'calc_integral_022': () => '需要具体函数计算',
  'calc_integral_023': () => '需要具体函数计算',
  'calc_integral_024': () => '需要具体函数计算',
  'calc_integral_025': () => '需要具体函数计算',
  'calc_integral_026': () => '需要具体函数计算',
  'calc_integral_027': () => '需要具体函数计算',
  'calc_integral_028': () => '需要具体函数计算',
  'calc_integral_029': () => '需要具体函数计算',
  'calc_integral_030': () => '需要具体函数计算',
  'calc_integral_044': () => '需要具体函数计算',
  'calc_integral_045': () => '需要具体函数计算',
  'calc_integral_046': () => '需要具体函数计算',
  'calc_integral_048': () => '需要具体函数计算',
  'calc_integral_049': () => '需要具体函数计算',
  'calc_integral_050': () => '需要具体函数计算',
  'calc_ode_001': () => '需要具体方程计算',
  'calc_ode_002': () => '需要具体方程计算',
  'calc_ode_003': () => '需要具体方程计算',
  'calc_ode_004': () => '需要具体方程计算',
  'calc_ode_005': () => '需要具体方程计算',
  'calc_series_004': () => '需要具体级数判断',
  'calc_series_005': () => '需要具体级数判断',
  'calc_series_006': () => '需要具体级数判断',
  'calc_series_007': () => '需要具体级数判断',
  'calc_series_008': () => '需要具体函数计算',
  'calc_complex_004': () => '需要具体计算',
  'linear_matrix_005': () => '需要具体矩阵计算',
  'linear_matrix_006': () => '需要具体矩阵判断',
  'linear_vector_001': () => '需要具体向量计算',
  'linear_eigen_002': () => '需要具体矩阵计算',
  'prob_dist_004': (x, mu, sigma) => (x - mu) / sigma,
  'prob_stat_001': () => '需要具体数据计算',
  'prob_stat_002': () => '理论结果',
  'math_analysis_001': () => '需要具体函数判断',
  'math_analysis_002': () => '需要具体函数判断',
  'math_analysis_003': () => '需要具体函数判断',
  'math_analysis_004': () => '需要具体函数计算',
  'math_analysis_005': () => '需要具体函数计算',
  'math_analysis_006': () => '需要具体函数计算',
  'sobolev_001': () => '理论定义',
  'sobolev_002': () => '需要具体函数计算',
  'sobolev_003': () => '理论定义',
  'sobolev_004': (k, p, n) => (n * p) / (n - k * p),
  'sobolev_005': () => '理论结果',
  'sobolev_006': (k, p, n) => k - n / p,
  'sobolev_007': () => '理论结果',
  'sobolev_008': () => '理论定义',
  'sobolev_009': () => '理论结果',
  'sobolev_010': () => '理论定义',
  'algebraic_number_theory_001': () => '理论定义',
  'algebraic_number_theory_002': () => '理论定义',
  'algebraic_number_theory_003': () => '理论结果',
  'algebraic_number_theory_004': () => '理论定义',
  'algebraic_number_theory_005': () => '理论公式',
  'algebraic_number_theory_006': () => '理论结果',
  'algebraic_number_theory_009': () => '理论结果',
  'algebraic_number_theory_010': () => '理论定义',
  'physics_003': (m1, m2, r) => {
        const G = 6.67e-11;
        return G * m1 * m2 / (r * r);
      },
  'chemistry_001': (n, T, V) => {
        const R = 8.314;
        return n * R * T / V;
      },
  'stat_001': (values) => {
        const sum = values.reduce((a, b) => a + b, 0);
        return sum / values.length;
      },
  'unit_001': (value, fromUnit, toUnit) => {
        const units = { km: 1000000, m: 1000, cm: 10, mm: 1 };
        return value * units[fromUnit] / units[toUnit];
      },
  'unit_002': (value, fromUnit, toUnit) => {
        const units = { 'km²': 1000000, 'm²': 1, 'cm²': 0.0001 };
        return value * units[fromUnit] / units[toUnit];
      },
  'unit_003': (value, fromUnit, toUnit) => {
        const units = { 'm³': 1000, 'L': 1, 'mL': 0.001 };
        return value * units[fromUnit] / units[toUnit];
      },
  'unit_004': (value, fromUnit, toUnit) => {
        const units = { t: 1000, kg: 1, g: 0.001 };
        return value * units[fromUnit] / units[toUnit];
      },
  'unit_005': (value, fromUnit, toUnit) => {
        const units = { h: 3600, min: 60, s: 1 };
        return value * units[fromUnit] / units[toUnit];
      },
  'middle_alg_001': (a, b, sign) => {
        const ab = sign === '+' ? 2 * a * b : -2 * a * b;
        return a * a + ab + b * b;
      },
  'middle_alg_006': (a, b, c, d, e, f) => {
        const det = a * e - b * d;
        if (Math.abs(det) < 1e-10) return '无解或无穷多解';
        const x = (c * e - b * f) / det;
        const y = (a * f - c * d) / det;
        return { x, y };
      },
  'middle_alg_010': (a, b, c, d, sign) => {
        return sign === '+' ? (a * d + b * c) / (b * d) : (a * d - b * c) / (b * d);
      },
  'middle_phy_003': (rho, h) => {
        const g = 9.8;
        return rho * g * h;
      },
  'middle_phy_004': (rho, V) => {
        const g = 9.8;
        return rho * g * V;
      },
  'middle_phy_015': (resistors) => {
        const sum = resistors.reduce((a, b) => a + 1 / b, 0);
        return 1 / sum;
      },
  'middle_chem_001': (m_reactants) => {
        const sum = Array.isArray(m_reactants) ? m_reactants.reduce((a, b) => a + b, 0) : m_reactants;
        return sum;
      },
  'middle_chem_002': (atomicMasses) => {
        return Array.isArray(atomicMasses) ? atomicMasses.reduce((a, b) => a + b, 0) : atomicMasses;
      },
  'high_func_003': (operation, a, M, N, n) => {
        const log = (x) => Math.log(x) / Math.log(a);
        if (operation === 'multiply') return log(M) + log(N);
        if (operation === 'divide') return log(M) - log(N);
        if (operation === 'power') return n * log(M);
        return null;
      },
  'high_trig_004': (alpha) => {
        const s = Math.sin(alpha);
        const c = Math.cos(alpha);
        return Math.abs(s * s + c * c - 1) < 1e-10;
      },
  'high_trig_005': (alpha, beta, operation) => {
        const sign = operation === '+' ? 1 : -1;
        const sinAB = Math.sin(alpha) * Math.cos(beta) + sign * Math.cos(alpha) * Math.sin(beta);
        const cosAB = Math.cos(alpha) * Math.cos(beta) - sign * Math.sin(alpha) * Math.sin(beta);
        return { sin: sinAB, cos: cosAB };
      },
  'high_trig_006': (alpha, beta, operation) => {
        const sign = operation === '+' ? 1 : -1;
        const tanA = Math.tan(alpha);
        const tanB = Math.tan(beta);
        return (tanA + sign * tanB) / (1 - sign * tanA * tanB);
      },
  'high_trig_007': (alpha) => {
        const s = Math.sin(alpha);
        const c = Math.cos(alpha);
        const t = Math.tan(alpha);
        return {
          sin2a: 2 * s * c,
          cos2a: c * c - s * s,
          tan2a: (2 * t) / (1 - t * t)
        };
      },
  'high_trig_008': (alpha) => {
        const c = Math.cos(alpha);
        const s = Math.sin(alpha);
        return {
          sin2Half: (1 - c) / 2,
          cos2Half: (1 + c) / 2,
          tanHalf: s / (1 + c)
        };
      },
  'high_trig_009': (alpha, formula) => {
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
      },
  'high_phy_004': (t) => {
        const g = 9.8;
        return g * t;
      },
  'high_phy_005': (v0, t) => {
        const g = 9.8;
        return {
          x: v0 * t,
          y: 0.5 * g * t * t,
          vx: v0,
          vy: g * t
        };
      },
  'high_phy_007': (M, r) => {
        const G = 6.67e-11;
        return Math.sqrt(G * M / r);
      },
  'high_phy_008': (r, M) => {
        const G = 6.67e-11;
        return 2 * Math.PI * Math.sqrt(r * r * r / (G * M));
      },
  'high_phy_012': (m, h) => {
        const g = 9.8;
        return m * g * h;
      },
  'high_phy_014': (q1, q2, r) => {
        const k = 9e9;
        return k * q1 * q2 / (r * r);
      },
  'high_phy_015': (Q, r) => {
        const k = 9e9;
        return k * Q / (r * r);
      },
  'high_chem_005': (C, c, D, d, A, a, B, b) => {
        const numerator = Math.pow(C, c) * Math.pow(D, d);
        const denominator = Math.pow(A, a) * Math.pow(B, b);
        return numerator / denominator;
      },
  'high_chem_011': (E0, T, n, Q) => {
        const R = 8.314;
        const F = 96485;
        return E0 - (R * T / (n * F)) * Math.log(Q);
      },
  'high_chem_012': (A, Ea, T) => {
        const R = 8.314;
        return A * Math.exp(-Ea / (R * T));
      },
  'calc_derivative_002': (func, x, n) => {
        if (func === 'power') return n * Math.pow(x, n - 1);
        if (func === 'sin') return Math.cos(x);
        if (func === 'cos') return -Math.sin(x);
        if (func === 'exp') return Math.exp(x);
        if (func === 'ln') return 1 / x;
        return null;
      },
  'calc_integral_002': (func, x, n) => {
        if (func === 'power') return Math.pow(x, n + 1) / (n + 1);
        if (func === '1/x') return Math.log(Math.abs(x));
        if (func === 'exp') return Math.exp(x);
        if (func === 'sin') return -Math.cos(x);
        if (func === 'cos') return Math.sin(x);
        return null;
      },
  'calc_series_003': (func, x, n) => {
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
      },
  'linear_matrix_001': (A, B) => {
        if (A.length !== B.length || A[0].length !== B[0].length) return '矩阵不同型';
        return A.map((row, i) => row.map((val, j) => val + B[i][j]));
      },
  'linear_matrix_002': (A, B) => {
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
      },
  'linear_det_002': (a11, a12, a13, a21, a22, a23, a31, a32, a33) => {
        return a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32
          - a13 * a22 * a31 - a12 * a21 * a33 - a11 * a23 * a32;
      },
  'prob_basic_004': (PA_given_B, PB) => {
        if (PA_given_B.length !== PB.length) return '数组长度不匹配';
        return PA_given_B.reduce((sum, p, i) => sum + p * PB[i], 0);
      },
  'prob_basic_005': (PA_given_Bi, PBi, PA_given_B, PB) => {
        const denominator = PA_given_B.reduce((sum, p, i) => sum + p * PB[i], 0);
        return (PA_given_Bi * PBi) / denominator;
      },
  'prob_rv_001': (x, p) => {
        if (x.length !== p.length) return '数组长度不匹配';
        return x.reduce((sum, xi, i) => sum + xi * p[i], 0);
      },
  'prob_rv_002': (x, p) => {
        if (x.length !== p.length) return '数组长度不匹配';
        const E = x.reduce((sum, xi, i) => sum + xi * p[i], 0);
        const E2 = x.reduce((sum, xi, i) => sum + xi * xi * p[i], 0);
        return E2 - E * E;
      },
  'univ_phy_relativity_001': (t0, v) => {
        const c = 3e8;
        return t0 / Math.sqrt(1 - v * v / (c * c));
      },
  'univ_phy_relativity_002': (L0, v) => {
        const c = 3e8;
        return L0 * Math.sqrt(1 - v * v / (c * c));
      },
  'univ_phy_relativity_003': (m) => {
        const c = 3e8;
        return m * c * c;
      },
  'univ_phy_relativity_004': (m, v) => {
        const c = 3e8;
        const gamma = 1 / Math.sqrt(1 - v * v / (c * c));
        return m * c * c * (gamma - 1);
      },
  'univ_phy_quantum_001': (m, v) => {
        const h = 6.626e-34;
        return h / (m * v);
      },
  'univ_phy_quantum_002': (deltaX) => {
        const hbar = 1.055e-34;
        return hbar / (2 * deltaX);
      },
  'univ_chem_thermo_002': (K1, T1, T2, deltaH) => {
        const R = 8.314;
        return K1 * Math.exp((deltaH / R) * (1 / T1 - 1 / T2));
      },
  'univ_chem_thermo_003': (P1, T1, T2, deltaHvap) => {
        const R = 8.314;
        return P1 * Math.exp((deltaHvap / R) * (1 / T1 - 1 / T2));
      },
  'univ_chem_kinetics_003': (k, order, A0) => {
        if (order === 1) return Math.log(2) / k;
        if (order === 2) return 1 / (k * A0);
        return null;
      },
  'stat_002': (values) => {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        return variance;
      },
  'stat_003': (values) => {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        return Math.sqrt(variance);
      },
  'stat_004': (values) => {
        if (values.length <= 1) return null;
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (values.length - 1);
        return variance;
      },
  'stat_005': (values) => {
        if (values.length <= 1) return null;
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (values.length - 1);
        return Math.sqrt(variance);
      },
  'stat_006': (xValues, yValues) => {
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
      },
  'stat_007': (xValues, yValues) => {
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
      },
  'stat_008': (x, mu, sigma) => {
        const coefficient = 1 / (sigma * Math.sqrt(2 * Math.PI));
        const exponent = -Math.pow(x - mu, 2) / (2 * Math.pow(sigma, 2));
        return coefficient * Math.exp(exponent);
      },
  'eng_008': (P1, rho, v1, h1, v2, h2) => {
        const g = 9.8;
        return P1 + 0.5 * rho * (v1 * v1 - v2 * v2) + rho * g * (h1 - h2);
      },
  'finance_009': (C, r, F, n) => {
        let price = 0;
        for (let t = 1; t <= n; t++) {
          price += C / Math.pow(1 + r, t);
        }
        price += F / Math.pow(1 + r, n);
        return price;
      },
  'finance_010': (P, C, F, n) => {
        // 简化计算：使用近似公式
        const annualCoupon = C * n;
        const avgPrice = (P + F) / 2;
        return ((annualCoupon + (F - P) / n) / avgPrice);
      },
  'finance_011': (cashFlows, r, I0) => {
        let npv = -I0;
        cashFlows.forEach((cf, t) => {
          npv += cf / Math.pow(1 + r, t + 1);
        });
        return npv;
      },
  'finance_012': (cashFlows, I0) => {
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
      },
  'finance_014': (P, r, n) => {
        const numerator = r * Math.pow(1 + r, n);
        const denominator = Math.pow(1 + r, n) - 1;
        return P * numerator / denominator;
      },
  'calc_integral_014': (func, x) => {
        if (func === 'tan') return -Math.log(Math.abs(Math.cos(x)));
        if (func === 'cot') return Math.log(Math.abs(Math.sin(x)));
        return null;
      },
  'calc_integral_015': (func, x) => {
        if (func === 'sec') return Math.log(Math.abs(1/Math.cos(x) + Math.tan(x)));
        if (func === 'csc') return Math.log(Math.abs(1/Math.sin(x) - 1/Math.tan(x)));
        return null;
      },
  'calc_integral_016': (func, x) => {
        if (func === 'sin2') return x/2 - Math.sin(2*x)/4;
        if (func === 'cos2') return x/2 + Math.sin(2*x)/4;
        if (func === 'tan2') return Math.tan(x) - x;
        return null;
      },
  'calc_integral_017': (func, a, k, x) => {
        if (func === 'a^x') return Math.pow(a, x) / Math.log(a);
        if (func === 'e^kx') return Math.exp(k * x) / k;
        return null;
      },
  'calc_integral_018': (func, x, a) => {
        if (func === 'ln') return x * Math.log(x) - x;
        if (func === 'log_a') return x * (Math.log(x) / Math.log(a) - 1 / Math.log(a));
        return null;
      },
  'calc_integral_019': (func, x) => {
        if (func === '1/sqrt(1-x^2)') return Math.asin(x);
        if (func === '1/(1+x^2)') return Math.atan(x);
        if (func === '1/(x*sqrt(x^2-1))') return Math.acos(1/Math.abs(x));
        return null;
      },
  'calc_integral_020': (func, x) => {
        if (func === 'sinh') return (Math.exp(x) - Math.exp(-x)) / 2;
        if (func === 'cosh') return (Math.exp(x) + Math.exp(-x)) / 2;
        if (func === 'tanh') return Math.log((Math.exp(x) + Math.exp(-x)) / 2);
        return null;
      },
  'calc_integral_031': (func, x, a) => {
        if (func === '1/(x-a)') return Math.log(Math.abs(x - a));
        if (func === '1/(x^2+a^2)') return (1/a) * Math.atan(x/a);
        if (func === '1/(x^2-a^2)') return (1/(2*a)) * Math.log(Math.abs((x-a)/(x+a)));
        return null;
      },
  'calc_integral_032': (func, x, a, n) => {
        if (func === '1/(x-a)^n') return -1 / ((n-1) * Math.pow(x-a, n-1));
        if (func === 'x/(x^2+a^2)') return 0.5 * Math.log(x*x + a*a);
        return null;
      },
  'calc_integral_033': (func, x, a) => {
        if (func === '1/sqrt(x^2+a^2)') return Math.log(Math.abs(x + Math.sqrt(x*x + a*a)));
        if (func === '1/sqrt(x^2-a^2)') return Math.log(Math.abs(x + Math.sqrt(x*x - a*a)));
        if (func === 'sqrt(x^2+a^2)') return (x/2)*Math.sqrt(x*x + a*a) + (a*a/2)*Math.log(Math.abs(x + Math.sqrt(x*x + a*a)));
        return null;
      },
  'calc_integral_034': (func, x, a, b) => {
        if (func === 'sqrt(ax+b)') return (2/(3*a)) * Math.pow(a*x + b, 1.5);
        if (func === '1/sqrt(ax+b)') return (2/a) * Math.sqrt(a*x + b);
        return null;
      },
  'calc_integral_035': (func, x) => {
        if (func === 'sin') return -Math.cos(x);
        if (func === 'cos') return Math.sin(x);
        if (func === 'sec^2') return Math.tan(x);
        if (func === 'csc^2') return -1/Math.tan(x);
        if (func === 'sec*tan') return 1/Math.cos(x);
        if (func === 'csc*cot') return -1/Math.sin(x);
        return null;
      },
  'calc_integral_036': (func, m, n, x) => {
        if (func === 'sin*sin') return Math.sin((m-n)*x)/(2*(m-n)) - Math.sin((m+n)*x)/(2*(m+n));
        if (func === 'cos*cos') return Math.sin((m-n)*x)/(2*(m-n)) + Math.sin((m+n)*x)/(2*(m+n));
        if (func === 'sin*cos') return -Math.cos((m-n)*x)/(2*(m-n)) - Math.cos((m+n)*x)/(2*(m+n));
        return null;
      },
  'calc_integral_037': (func, x, a, k) => {
        if (func === 'e^x') return Math.exp(x);
        if (func === 'a^x') return Math.pow(a, x) / Math.log(a);
        if (func === 'e^kx') return Math.exp(k*x) / k;
        if (func === 'x*e^x') return Math.exp(x) * (x - 1);
        if (func === 'x^2*e^x') return Math.exp(x) * (x*x - 2*x + 2);
        return null;
      },
  'calc_integral_038': (func, x, a, n) => {
        if (func === 'ln') return x * Math.log(x) - x;
        if (func === 'log_a') return x * (Math.log(x)/Math.log(a) - 1/Math.log(a));
        if (func === 'x*ln') return (x*x/2) * (Math.log(x) - 0.5);
        if (func === 'x^n*ln') return Math.pow(x, n+1) * (Math.log(x)/(n+1) - 1/Math.pow(n+1, 2));
        return null;
      },
  'calc_integral_039': (func, x) => {
        if (func === 'arcsin') return x * Math.asin(x) + Math.sqrt(1 - x*x);
        if (func === 'arccos') return x * Math.acos(x) - Math.sqrt(1 - x*x);
        if (func === 'arctan') return x * Math.atan(x) - 0.5 * Math.log(1 + x*x);
        return null;
      },
  'calc_integral_040': (func, x) => {
        if (func === 'arccot') return x * (Math.PI/2 - Math.atan(x)) + 0.5 * Math.log(1 + x*x);
        if (func === 'arcsec') return x * Math.acos(1/x) - Math.log(Math.abs(x + Math.sqrt(x*x - 1)));
        if (func === 'arccsc') return x * Math.asin(1/x) + Math.log(Math.abs(x + Math.sqrt(x*x - 1)));
        return null;
      },
  'calc_integral_041': (func, x) => {
        const sinh = (Math.exp(x) - Math.exp(-x)) / 2;
        const cosh = (Math.exp(x) + Math.exp(-x)) / 2;
        if (func === 'sinh') return cosh;
        if (func === 'cosh') return sinh;
        if (func === 'tanh') return Math.log(cosh);
        if (func === 'coth') return Math.log(Math.abs(sinh));
        if (func === 'sech') return 2 * Math.atan(Math.exp(x));
        if (func === 'csch') return Math.log(Math.abs(Math.tanh(x/2)));
        return null;
      },
  'calc_integral_042': (func, x) => {
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
      },
  'calc_integral_043': (func, x) => {
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
      },
  'calc_integral_047': (func, x, a) => {
        if (func === '1/sqrt(a^2-x^2)') return Math.asin(x/a);
        if (func === '1/sqrt(x^2-a^2)') return Math.log(Math.abs(x + Math.sqrt(x*x - a*a)));
        if (func === 'sqrt(a^2-x^2)') return (x/2)*Math.sqrt(a*a - x*x) + (a*a/2)*Math.asin(x/a);
        return null;
      },
  'calc_integral_051': (func, a, b, x) => {
        const exp = Math.exp(a*x);
        if (func === 'e^ax*sin') return exp * (a*Math.sin(b*x) - b*Math.cos(b*x)) / (a*a + b*b);
        if (func === 'e^ax*cos') return exp * (a*Math.cos(b*x) + b*Math.sin(b*x)) / (a*a + b*b);
        return null;
      },
  'calc_integral_052': (func, x) => {
        const sinh = (Math.exp(x) - Math.exp(-x)) / 2;
        const cosh = (Math.exp(x) + Math.exp(-x)) / 2;
        if (func === 'sech^2') return Math.tanh(x);
        if (func === 'csch^2') return -1/Math.tanh(x);
        if (func === 'sech*tanh') return -1/cosh;
        if (func === 'csch*coth') return -1/sinh;
        return null;
      },
  'calc_complex_001': (theta) => {
        return {
          real: Math.cos(theta),
          imag: Math.sin(theta)
        };
      },
  'calc_complex_002': (r, theta) => {
        return {
          real: r * Math.cos(theta),
          imag: r * Math.sin(theta)
        };
      },
  'calc_complex_003': (r, theta, n) => {
        return {
          real: Math.pow(r, n) * Math.cos(n * theta),
          imag: Math.pow(r, n) * Math.sin(n * theta)
        };
      },
  'prob_dist_001': (n, k, p) => {
        const comb = (n, k) => {
          if (k > n) return 0;
          let res = 1;
          for (let i = 0; i < k; i++) {
            res = res * (n - i) / (i + 1);
          }
          return res;
        };
        return comb(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
      },
  'prob_dist_002': (lambda, k) => {
        const factorial = (n) => {
          if (n <= 1) return 1;
          return n * factorial(n - 1);
        };
        return Math.pow(lambda, k) * Math.exp(-lambda) / factorial(k);
      },
  'prob_dist_003': (x, mu, sigma) => {
        return (1 / (Math.sqrt(2 * Math.PI) * sigma)) * Math.exp(-Math.pow(x - mu, 2) / (2 * sigma * sigma));
      },
  'number_theory_001': (a, b) => {
        while (b !== 0) {
          [a, b] = [b, a % b];
        }
        return a;
      },
  'number_theory_002': (a, b) => {
        if (b === 0) return [a, 1, 0];
        const [d, x1, y1] = arguments.callee(b, a % b);
        return [d, y1, x1 - Math.floor(a / b) * y1];
      },
  'number_theory_003': (a, p) => {
        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        if (gcd(a, p) !== 1) return 'a与p必须互质';
        let result = 1;
        for (let i = 0; i < p - 1; i++) {
          result = (result * a) % p;
        }
        return result;
      },
  'number_theory_004': (a, n) => {
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
      },
  'number_theory_005': (n) => {
        let result = n;
        for (let i = 2; i * i <= n; i++) {
          if (n % i === 0) {
            result -= result / i;
            while (n % i === 0) n /= i;
          }
        }
        if (n > 1) result -= result / n;
        return result;
      },
  'number_theory_006': (mods, rems) => {
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
      },
  'number_theory_007': (p) => {
        if (p <= 1) return false;
        let fact = 1;
        for (let i = 1; i < p; i++) {
          fact = (fact * i) % p;
        }
        return fact === p - 1;
      },
  'number_theory_008': (a, p) => {
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
      },
  'number_theory_009': (a, p) => {
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
      },
  'number_theory_010': (p, q) => {
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
      },
  'algebraic_number_theory_007': (n) => {
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
      },
  'algebraic_number_theory_008': (d) => {
        const absD = Math.abs(d);
        if (absD % 4 === 1) {
          return `Z[(1+√${d})/2]`;
        } else {
          return `Z[√${d}]`;
        }
      },
  'astro_003': (a, M) => {
        const G = 6.67e-11;
        return 2 * Math.PI * Math.sqrt(a * a * a / (G * M));
      },
  'astro_004': (M, r) => {
        const G = 6.67e-11;
        return Math.sqrt(G * M / r);
      },
  'astro_005': (M, r, a) => {
        const G = 6.67e-11;
        return Math.sqrt(G * M * (2 / r - 1 / a));
      },
  'astro_006': (M, r) => {
        const G = 6.67e-11; // 万有引力常数 (N·m²/kg²)
        if (r <= 0) return '距离必须大于0';
        return Math.sqrt(2 * G * M / r);
      },
  'astro_011': (m, d) => {
        return m - 5 * Math.log10(d) + 5;
      },
  'astro_013': (pi) => {
        return 1 / pi;
      },
  'astro_019': (M) => {
        const G = 6.67e-11;
        const c = 3e8;
        return 2 * G * M / (c * c);
      },
  // 以下是从拆分文件中补充的缺失函数（共14个）
  'math_topology_001': (V, E) => 2 - V + E, // 欧拉示数性公式: F = 2 - V + E
  'linear_vector_002': (a, b, c) => {
    // 混合积 (a × b) · c，这里简化为标量计算
    // 实际应用中需要向量运算，这里返回提示
    return '需要向量运算库，输入应为向量坐标';
  },
  'high_geo_012': (a, b) => Math.PI * a * b, // 椭圆面积: S = πab
  'high_trig_012': (alpha, beta, formula_type) => {
    // 积化和差公式
    const a = alpha, b = beta;
    if (formula_type === 'sin_cos') return 0.5 * (Math.sin(a + b) + Math.sin(a - b));
    if (formula_type === 'cos_sin') return 0.5 * (Math.sin(a + b) - Math.sin(a - b));
    if (formula_type === 'cos_cos') return 0.5 * (Math.cos(a + b) + Math.cos(a - b));
    if (formula_type === 'sin_sin') return -0.5 * (Math.cos(a + b) - Math.cos(a - b));
    return '请指定公式类型: sin_cos, cos_sin, cos_cos, sin_sin';
  },
  'high_trig_013': (alpha, beta, formula_type) => {
    // 和差化积公式
    const a = alpha, b = beta;
    const sum = (a + b) / 2;
    const diff = (a - b) / 2;
    if (formula_type === 'sin_plus') return 2 * Math.sin(sum) * Math.cos(diff);
    if (formula_type === 'sin_minus') return 2 * Math.cos(sum) * Math.sin(diff);
    if (formula_type === 'cos_plus') return 2 * Math.cos(sum) * Math.cos(diff);
    if (formula_type === 'cos_minus') return -2 * Math.sin(sum) * Math.sin(diff);
    return '请指定公式类型: sin_plus, sin_minus, cos_plus, cos_minus';
  },
  'calc_integral_053': (h, B1, B2, B3) => (h / 6) * (B1 + 4 * B2 + B3), // 辛普森公式
  'math_algebra_001': (a, b, c, d) => {
    // 四元数模长: |q| = √(a² + b² + c² + d²)
    return Math.sqrt(a * a + b * b + c * c + d * d);
  },
  'univ_phy_relativity_005': (p, m) => {
    // 相对论质能方程: E² = (pc)² + (mc²)²
    const c = 3e8; // 光速
    return Math.sqrt((p * c) * (p * c) + (m * c * c) * (m * c * c));
  },
  'astro_021': (M, e) => {
    // 开普勒方程: M = E - e·sin E，需要迭代求解
    // 使用牛顿法迭代求解
    let E = M; // 初始值
    for (let i = 0; i < 20; i++) {
      const f = E - e * Math.sin(E) - M;
      const df = 1 - e * Math.cos(E);
      if (Math.abs(df) < 1e-10) break;
      E = E - f / df;
      if (Math.abs(f) < 1e-10) break;
    }
    return E;
  },
  'astro_022': (a, e, E) => a * (1 - e * Math.cos(E)), // 偏近点角与轨道半径的关系
  'astro_023': (E, e) => {
    // 偏近点角与真近点角的转换: tan(f/2) = √((1+e)/(1-e))·tan(E/2)
    const ratio = Math.sqrt((1 + e) / (1 - e));
    const tanHalfE = Math.tan(E / 2);
    const tanHalfF = ratio * tanHalfE;
    return 2 * Math.atan(tanHalfF);
  },
  'astro_024': (a, b, e, E) => {
    // 偏近点角的坐标表示
    return {
      x: a * (Math.cos(E) - e),
      y: b * Math.sin(E)
    };
  },
  'astro_025': (n, t, t0) => n * (t - t0), // 平近点角定义
  'astro_026': (T) => 2 * Math.PI / T, // 平均角速度: n = 2π/T
};

module.exports = { formulaFunctions };
