// 公式索引数据
// 用于快速定位公式ID，然后按需加载具体数据

const indexes = {
  "byCategory": {
    "数学": [
      "math_001",
      "math_002",
      "math_002b",
      "math_003",
      "primary_math_001",
      "primary_math_002",
      "primary_math_003",
      "primary_math_004",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_008",
      "primary_geo_009",
      "primary_geo_010",
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_003",
      "middle_alg_004",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_alg_010",
      "middle_geo_001",
      "middle_geo_002",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_geo_013",
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "high_trig_012",
      "high_trig_013",
      "high_geo_001",
      "high_geo_002",
      "high_geo_003",
      "high_geo_004",
      "high_geo_005",
      "high_geo_008",
      "high_geo_009",
      "high_geo_010",
      "high_geo_011",
      "high_geo_012",
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_derivative_008",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_integral_053",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "linear_matrix_005",
      "linear_matrix_006",
      "linear_vector_001",
      "linear_vector_002",
      "linear_eigen_002",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_002",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010",
      "math_topology_001",
      "math_algebra_001",
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_001",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_gauss_digamma",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev",
      "theorem_euler_maclaurin"
    ],
    "物理": [
      "physics_001",
      "physics_002",
      "physics_003",
      "middle_phy_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_008",
      "middle_phy_009",
      "middle_phy_010",
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_011",
      "high_phy_012",
      "high_phy_013",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_021",
      "high_phy_022",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010",
      "astro_011",
      "astro_012",
      "astro_013",
      "astro_014",
      "astro_015",
      "astro_016",
      "astro_017",
      "astro_018",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "化学": [
      "chemistry_001",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "middle_chem_007",
      "middle_chem_008",
      "high_chem_001",
      "high_chem_002",
      "high_chem_003",
      "high_chem_004",
      "high_chem_005",
      "high_chem_006",
      "high_chem_007",
      "high_chem_008",
      "high_chem_009",
      "high_chem_010",
      "high_chem_011",
      "high_chem_012",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003"
    ],
    "统计": [
      "stat_001",
      "stat_002",
      "stat_003",
      "stat_004",
      "stat_005",
      "stat_006",
      "stat_007",
      "stat_008",
      "stat_009",
      "stat_010"
    ],
    "工程": [
      "eng_001",
      "eng_002",
      "eng_003",
      "eng_004",
      "eng_005",
      "eng_006",
      "eng_007",
      "eng_008",
      "eng_009",
      "eng_010",
      "eng_011",
      "eng_013",
      "eng_014",
      "eng_015"
    ],
    "金融": [
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "finance_007",
      "finance_008",
      "finance_009",
      "finance_010",
      "finance_011",
      "finance_012",
      "finance_013",
      "finance_014",
      "finance_015",
      "finance_016",
      "finance_017",
      "finance_018"
    ],
    "数论": [
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_001",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010"
    ]
  },
  "byGrade": {
    "初中": [
      "math_001",
      "math_003",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_003",
      "middle_alg_004",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_alg_010",
      "middle_geo_001",
      "middle_geo_002",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_geo_013",
      "middle_phy_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_008",
      "middle_phy_009",
      "middle_phy_010",
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "middle_chem_007",
      "middle_chem_008",
      "high_chem_001"
    ],
    "高中": [
      "math_002",
      "math_002b",
      "physics_001",
      "physics_002",
      "physics_003",
      "chemistry_001",
      "stat_001",
      "middle_geo_011",
      "middle_geo_012",
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "high_geo_001",
      "high_geo_002",
      "high_geo_003",
      "high_geo_004",
      "high_geo_005",
      "high_geo_008",
      "high_geo_009",
      "high_geo_010",
      "high_geo_011",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_011",
      "high_phy_012",
      "high_phy_013",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_021",
      "high_phy_022",
      "high_chem_001",
      "high_chem_002",
      "high_chem_003",
      "high_chem_004",
      "high_chem_005",
      "high_chem_006",
      "high_chem_007",
      "high_chem_008",
      "high_chem_009",
      "high_chem_010",
      "high_chem_011",
      "high_chem_012"
    ],
    "大学": [
      "chemistry_001",
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "stat_009",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_derivative_008",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_integral_053",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "linear_matrix_005",
      "linear_matrix_006",
      "linear_vector_001",
      "linear_vector_002",
      "linear_eigen_002",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_002",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010",
      "math_topology_001",
      "math_algebra_001",
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_001",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_gauss_digamma",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev",
      "theorem_euler_maclaurin",
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010",
      "astro_011",
      "astro_012",
      "astro_013",
      "astro_014",
      "astro_015",
      "astro_016",
      "astro_017",
      "astro_018",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "小学": [
      "primary_math_001",
      "primary_math_002",
      "primary_math_003",
      "primary_math_004",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_008",
      "primary_geo_009",
      "primary_geo_010",
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005"
    ],
    "专业领域": [
      "middle_phy_006",
      "stat_002",
      "stat_003",
      "stat_004",
      "stat_005",
      "stat_006",
      "stat_007",
      "stat_008",
      "stat_010",
      "eng_001",
      "eng_002",
      "eng_003",
      "eng_004",
      "eng_005",
      "eng_006",
      "eng_007",
      "eng_008",
      "eng_009",
      "eng_010",
      "eng_011",
      "eng_013",
      "eng_014",
      "eng_015",
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "finance_007",
      "finance_008",
      "finance_009",
      "finance_010",
      "finance_011",
      "finance_012",
      "finance_013",
      "finance_014",
      "finance_015",
      "finance_016",
      "finance_017",
      "finance_018"
    ],
    "积分表": [
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052"
    ]
  },
  "byTag": {
    "常用公式": [
      "math_001",
      "math_002",
      "math_002b",
      "math_003",
      "physics_001",
      "physics_002",
      "physics_003",
      "chemistry_001",
      "stat_001",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_003",
      "middle_alg_004",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_alg_010",
      "middle_geo_001",
      "middle_geo_002",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_geo_013",
      "middle_phy_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_008",
      "middle_phy_009",
      "middle_phy_010",
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "middle_chem_007",
      "middle_chem_008",
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "high_geo_001",
      "high_geo_002",
      "high_geo_003",
      "high_geo_004",
      "high_geo_005",
      "high_geo_008",
      "high_geo_009",
      "high_geo_010",
      "high_geo_011",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_011",
      "high_phy_012",
      "high_phy_013",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_021",
      "high_phy_022",
      "high_chem_001",
      "high_chem_002",
      "high_chem_003",
      "high_chem_004",
      "high_chem_005",
      "high_chem_006",
      "high_chem_007",
      "high_chem_008",
      "high_chem_009",
      "high_chem_010",
      "high_chem_011",
      "high_chem_012",
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "stat_002",
      "stat_003",
      "stat_004",
      "stat_005",
      "stat_006",
      "stat_007",
      "stat_008",
      "stat_009",
      "stat_010",
      "eng_001",
      "eng_002",
      "eng_003",
      "eng_004",
      "eng_005",
      "eng_006",
      "eng_007",
      "eng_008",
      "eng_009",
      "eng_010",
      "eng_011",
      "eng_013",
      "eng_014",
      "eng_015",
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "finance_007",
      "finance_008",
      "finance_009",
      "finance_010",
      "finance_011",
      "finance_012",
      "finance_013",
      "finance_014",
      "finance_015",
      "finance_016",
      "finance_017",
      "finance_018",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_derivative_008",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_integral_053",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "linear_matrix_005",
      "linear_matrix_006",
      "linear_vector_001",
      "linear_vector_002",
      "linear_eigen_002",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_002",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010",
      "math_topology_001",
      "math_algebra_001",
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_001",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010",
      "astro_011",
      "astro_012",
      "astro_013",
      "astro_014",
      "astro_015",
      "astro_016",
      "astro_017",
      "astro_018",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "必背公式": [
      "math_001",
      "math_002",
      "math_002b",
      "physics_001",
      "chemistry_001",
      "primary_math_001",
      "primary_math_002",
      "primary_math_003",
      "primary_math_004",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_008",
      "primary_geo_009",
      "primary_geo_010",
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_geo_001",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_geo_013",
      "middle_phy_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_008",
      "middle_phy_009",
      "middle_phy_010",
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "middle_chem_007",
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "high_geo_001",
      "high_geo_002",
      "high_geo_004",
      "high_geo_008",
      "high_geo_009",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_011",
      "high_phy_012",
      "high_phy_013",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_021",
      "high_phy_022",
      "high_chem_001",
      "high_chem_002",
      "high_chem_003",
      "high_chem_004",
      "high_chem_005",
      "high_chem_006",
      "high_chem_007",
      "high_chem_008",
      "high_chem_009",
      "high_chem_010",
      "high_chem_011",
      "high_chem_012",
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "stat_002",
      "stat_003",
      "stat_006",
      "stat_007",
      "stat_008",
      "eng_001",
      "eng_002",
      "eng_003",
      "eng_007",
      "eng_008",
      "eng_009",
      "eng_011",
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_007",
      "finance_009",
      "finance_011",
      "finance_012",
      "finance_014",
      "calc_derivative_006",
      "calc_integral_008",
      "calc_integral_012",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_026",
      "calc_integral_031",
      "calc_integral_033",
      "calc_integral_035",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_048",
      "calc_ode_001",
      "calc_ode_003",
      "calc_ode_004",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "linear_matrix_005",
      "linear_vector_001",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_006",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_007",
      "sobolev_008",
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_010",
      "algebraic_number_theory_003",
      "algebraic_number_theory_006",
      "series_sum_001",
      "series_sum_011",
      "series_sum_020",
      "series_sum_022",
      "series_sum_024",
      "series_sum_076",
      "integral_common_020",
      "integral_common_021",
      "integral_common_032",
      "theorem_euler_maclaurin",
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_004",
      "astro_006",
      "astro_011",
      "astro_013",
      "astro_015",
      "astro_016",
      "astro_018"
    ],
    "基础公式": [
      "primary_math_001",
      "primary_math_002",
      "primary_math_003",
      "primary_math_004",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_008",
      "primary_geo_009",
      "primary_geo_010",
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005"
    ],
    "定理": [
      "theorem_gauss_digamma",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev",
      "theorem_euler_maclaurin"
    ],
    "定律": [
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_018"
    ]
  },
  "byId": {
    "math_001": {
      "category": "数学",
      "subCategory": "几何",
      "name": "勾股定理",
      "grade": "初中"
    },
    "math_002": {
      "category": "数学",
      "subCategory": "代数",
      "name": "一元二次方程求根公式",
      "grade": "高中"
    },
    "math_002b": {
      "category": "数学",
      "subCategory": "代数",
      "name": "等比数列求和公式",
      "grade": "高中"
    },
    "math_003": {
      "category": "数学",
      "subCategory": "几何",
      "name": "圆的面积公式",
      "grade": "初中"
    },
    "physics_001": {
      "category": "物理",
      "subCategory": "力学",
      "name": "牛顿第二定律",
      "grade": "高中"
    },
    "physics_002": {
      "category": "物理",
      "subCategory": "力学",
      "name": "动能公式",
      "grade": "高中"
    },
    "physics_003": {
      "category": "物理",
      "subCategory": "力学",
      "name": "万有引力定律",
      "grade": "高中"
    },
    "chemistry_001": {
      "category": "化学",
      "subCategory": "物理化学",
      "name": "理想气体状态方程",
      "grade": [
        "高中",
        "大学"
      ]
    },
    "stat_001": {
      "category": "统计",
      "subCategory": "描述统计",
      "name": "平均值公式",
      "grade": "高中"
    },
    "primary_math_001": {
      "category": "数学",
      "subCategory": "分数运算",
      "name": "分数加法",
      "grade": "小学"
    },
    "primary_math_002": {
      "category": "数学",
      "subCategory": "分数运算",
      "name": "分数乘法",
      "grade": "小学"
    },
    "primary_math_003": {
      "category": "数学",
      "subCategory": "百分数",
      "name": "百分数转小数",
      "grade": "小学"
    },
    "primary_math_004": {
      "category": "数学",
      "subCategory": "百分数",
      "name": "小数转百分数",
      "grade": "小学"
    },
    "primary_math_005": {
      "category": "数学",
      "subCategory": "应用题",
      "name": "速度公式",
      "grade": "小学"
    },
    "primary_math_006": {
      "category": "数学",
      "subCategory": "应用题",
      "name": "路程公式",
      "grade": "小学"
    },
    "primary_math_007": {
      "category": "数学",
      "subCategory": "应用题",
      "name": "时间公式",
      "grade": "小学"
    },
    "primary_geo_001": {
      "category": "数学",
      "subCategory": "几何",
      "name": "长方形周长",
      "grade": "小学"
    },
    "primary_geo_002": {
      "category": "数学",
      "subCategory": "几何",
      "name": "长方形面积",
      "grade": "小学"
    },
    "primary_geo_003": {
      "category": "数学",
      "subCategory": "几何",
      "name": "正方形周长",
      "grade": "小学"
    },
    "primary_geo_004": {
      "category": "数学",
      "subCategory": "几何",
      "name": "正方形面积",
      "grade": "小学"
    },
    "primary_geo_005": {
      "category": "数学",
      "subCategory": "几何",
      "name": "三角形面积",
      "grade": "小学"
    },
    "primary_geo_006": {
      "category": "数学",
      "subCategory": "几何",
      "name": "平行四边形面积",
      "grade": "小学"
    },
    "primary_geo_007": {
      "category": "数学",
      "subCategory": "几何",
      "name": "梯形面积",
      "grade": "小学"
    },
    "primary_geo_008": {
      "category": "数学",
      "subCategory": "几何",
      "name": "圆的周长",
      "grade": "小学"
    },
    "primary_geo_009": {
      "category": "数学",
      "subCategory": "几何",
      "name": "长方体体积",
      "grade": "小学"
    },
    "primary_geo_010": {
      "category": "数学",
      "subCategory": "几何",
      "name": "正方体体积",
      "grade": "小学"
    },
    "unit_001": {
      "category": "数学",
      "subCategory": "单位换算",
      "name": "长度单位换算",
      "grade": "小学"
    },
    "unit_002": {
      "category": "数学",
      "subCategory": "单位换算",
      "name": "面积单位换算",
      "grade": "小学"
    },
    "unit_003": {
      "category": "数学",
      "subCategory": "单位换算",
      "name": "体积单位换算",
      "grade": "小学"
    },
    "unit_004": {
      "category": "数学",
      "subCategory": "单位换算",
      "name": "质量单位换算",
      "grade": "小学"
    },
    "unit_005": {
      "category": "数学",
      "subCategory": "单位换算",
      "name": "时间单位换算",
      "grade": "小学"
    },
    "middle_alg_001": {
      "category": "数学",
      "subCategory": "代数",
      "name": "完全平方公式",
      "grade": "初中"
    },
    "middle_alg_002": {
      "category": "数学",
      "subCategory": "代数",
      "name": "平方差公式",
      "grade": "初中"
    },
    "middle_alg_003": {
      "category": "数学",
      "subCategory": "代数",
      "name": "立方和公式",
      "grade": "初中"
    },
    "middle_alg_004": {
      "category": "数学",
      "subCategory": "代数",
      "name": "立方差公式",
      "grade": "初中"
    },
    "middle_alg_005": {
      "category": "数学",
      "subCategory": "代数",
      "name": "一元一次方程",
      "grade": "初中"
    },
    "middle_alg_006": {
      "category": "数学",
      "subCategory": "代数",
      "name": "二元一次方程组（代入法）",
      "grade": "初中"
    },
    "middle_alg_007": {
      "category": "数学",
      "subCategory": "代数",
      "name": "幂的乘法法则",
      "grade": "初中"
    },
    "middle_alg_008": {
      "category": "数学",
      "subCategory": "代数",
      "name": "幂的除法法则",
      "grade": "初中"
    },
    "middle_alg_009": {
      "category": "数学",
      "subCategory": "代数",
      "name": "幂的乘方法则",
      "grade": "初中"
    },
    "middle_alg_010": {
      "category": "数学",
      "subCategory": "代数",
      "name": "分式加减法",
      "grade": "初中"
    },
    "middle_geo_001": {
      "category": "数学",
      "subCategory": "几何",
      "name": "三角形内角和",
      "grade": "初中"
    },
    "middle_geo_002": {
      "category": "数学",
      "subCategory": "几何",
      "name": "三角形外角和",
      "grade": "初中"
    },
    "middle_geo_003": {
      "category": "数学",
      "subCategory": "几何",
      "name": "多边形内角和",
      "grade": "初中"
    },
    "middle_geo_004": {
      "category": "数学",
      "subCategory": "几何",
      "name": "多边形外角和",
      "grade": "初中"
    },
    "middle_geo_005": {
      "category": "数学",
      "subCategory": "几何",
      "name": "扇形面积",
      "grade": "初中"
    },
    "middle_geo_006": {
      "category": "数学",
      "subCategory": "几何",
      "name": "扇形弧长",
      "grade": "初中"
    },
    "middle_geo_007": {
      "category": "数学",
      "subCategory": "几何",
      "name": "圆柱体积",
      "grade": "初中"
    },
    "middle_geo_008": {
      "category": "数学",
      "subCategory": "几何",
      "name": "圆柱表面积",
      "grade": "初中"
    },
    "middle_geo_009": {
      "category": "数学",
      "subCategory": "几何",
      "name": "圆锥体积",
      "grade": "初中"
    },
    "middle_geo_010": {
      "category": "数学",
      "subCategory": "几何",
      "name": "圆锥侧面积",
      "grade": "初中"
    },
    "middle_geo_011": {
      "category": "数学",
      "subCategory": "几何",
      "name": "球体积",
      "grade": [
        "初中",
        "高中"
      ]
    },
    "middle_geo_012": {
      "category": "数学",
      "subCategory": "几何",
      "name": "球表面积",
      "grade": [
        "初中",
        "高中"
      ]
    },
    "middle_geo_013": {
      "category": "数学",
      "subCategory": "几何",
      "name": "相似三角形性质",
      "grade": "初中"
    },
    "middle_phy_001": {
      "category": "物理",
      "subCategory": "基础",
      "name": "密度公式",
      "grade": "初中"
    },
    "middle_phy_002": {
      "category": "物理",
      "subCategory": "基础",
      "name": "压强公式",
      "grade": "初中"
    },
    "middle_phy_003": {
      "category": "物理",
      "subCategory": "基础",
      "name": "液体压强公式",
      "grade": "初中"
    },
    "middle_phy_004": {
      "category": "物理",
      "subCategory": "基础",
      "name": "浮力公式（阿基米德原理）",
      "grade": "初中"
    },
    "middle_phy_005": {
      "category": "物理",
      "subCategory": "基础",
      "name": "功的公式",
      "grade": "初中"
    },
    "middle_phy_006": {
      "category": "物理",
      "subCategory": "基础",
      "name": "功率公式",
      "grade": [
        "初中",
        "专业领域"
      ]
    },
    "middle_phy_007": {
      "category": "物理",
      "subCategory": "基础",
      "name": "机械效率",
      "grade": "初中"
    },
    "middle_phy_008": {
      "category": "物理",
      "subCategory": "基础",
      "name": "杠杆平衡条件",
      "grade": "初中"
    },
    "middle_phy_009": {
      "category": "物理",
      "subCategory": "热学",
      "name": "比热容公式",
      "grade": "初中"
    },
    "middle_phy_010": {
      "category": "物理",
      "subCategory": "热学",
      "name": "热值公式",
      "grade": "初中"
    },
    "middle_phy_011": {
      "category": "物理",
      "subCategory": "电学",
      "name": "欧姆定律",
      "grade": "初中"
    },
    "middle_phy_012": {
      "category": "物理",
      "subCategory": "电学",
      "name": "电功公式",
      "grade": "初中"
    },
    "middle_phy_013": {
      "category": "物理",
      "subCategory": "电学",
      "name": "电功率公式",
      "grade": "初中"
    },
    "middle_phy_014": {
      "category": "物理",
      "subCategory": "电学",
      "name": "串联电路总电阻",
      "grade": "初中"
    },
    "middle_phy_015": {
      "category": "物理",
      "subCategory": "电学",
      "name": "并联电路总电阻",
      "grade": "初中"
    },
    "middle_chem_001": {
      "category": "化学",
      "subCategory": "基础",
      "name": "质量守恒定律",
      "grade": "初中"
    },
    "middle_chem_002": {
      "category": "化学",
      "subCategory": "基础",
      "name": "相对分子质量",
      "grade": "初中"
    },
    "middle_chem_003": {
      "category": "化学",
      "subCategory": "基础",
      "name": "质量分数",
      "grade": "初中"
    },
    "middle_chem_005": {
      "category": "化学",
      "subCategory": "基础",
      "name": "溶质质量",
      "grade": "初中"
    },
    "middle_chem_006": {
      "category": "化学",
      "subCategory": "基础",
      "name": "溶液质量",
      "grade": "初中"
    },
    "middle_chem_007": {
      "category": "化学",
      "subCategory": "基础",
      "name": "化学方程式配平",
      "grade": "初中"
    },
    "middle_chem_008": {
      "category": "化学",
      "subCategory": "基础",
      "name": "原子个数比",
      "grade": "初中"
    },
    "high_func_001": {
      "category": "数学",
      "subCategory": "函数",
      "name": "指数函数",
      "grade": "高中"
    },
    "high_func_002": {
      "category": "数学",
      "subCategory": "函数",
      "name": "对数函数",
      "grade": "高中"
    },
    "high_func_003": {
      "category": "数学",
      "subCategory": "函数",
      "name": "对数运算法则",
      "grade": "高中"
    },
    "high_func_004": {
      "category": "数学",
      "subCategory": "函数",
      "name": "换底公式",
      "grade": "高中"
    },
    "high_func_005": {
      "category": "数学",
      "subCategory": "函数",
      "name": "幂函数",
      "grade": "高中"
    },
    "high_trig_001": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "正弦函数",
      "grade": "高中"
    },
    "high_trig_002": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "余弦函数",
      "grade": "高中"
    },
    "high_trig_003": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "正切函数",
      "grade": "高中"
    },
    "high_trig_004": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "同角三角函数基本关系",
      "grade": "高中"
    },
    "high_trig_005": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "两角和公式",
      "grade": "高中"
    },
    "high_trig_006": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "两角差公式",
      "grade": "高中"
    },
    "high_trig_007": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "二倍角公式",
      "grade": "高中"
    },
    "high_trig_008": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "半角公式",
      "grade": "高中"
    },
    "high_trig_009": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "诱导公式",
      "grade": "高中"
    },
    "high_trig_010": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "正弦定理",
      "grade": "高中"
    },
    "high_trig_011": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "余弦定理",
      "grade": "高中"
    },
    "high_trig_012": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "积化和差公式",
      "grade": "高中"
    },
    "high_trig_013": {
      "category": "数学",
      "subCategory": "三角函数",
      "name": "和差化积公式",
      "grade": "高中"
    },
    "high_geo_001": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "棱柱体积",
      "grade": "高中"
    },
    "high_geo_002": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "棱锥体积",
      "grade": "高中"
    },
    "high_geo_003": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "正四面体体积",
      "grade": "高中"
    },
    "high_geo_004": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "正六面体（正方体）体积",
      "grade": "高中"
    },
    "high_geo_005": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "正八面体体积",
      "grade": "高中"
    },
    "high_geo_008": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "圆台体积",
      "grade": "高中"
    },
    "high_geo_009": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "圆台侧面积",
      "grade": "高中"
    },
    "high_geo_010": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "球冠体积",
      "grade": "高中"
    },
    "high_geo_011": {
      "category": "数学",
      "subCategory": "立体几何",
      "name": "球冠面积",
      "grade": "高中"
    },
    "high_geo_012": {
      "category": "数学",
      "subCategory": "几何",
      "name": "椭圆面积",
      "grade": "高中"
    },
    "high_phy_001": {
      "category": "物理",
      "subCategory": "力学",
      "name": "匀变速直线运动速度公式",
      "grade": "高中"
    },
    "high_phy_002": {
      "category": "物理",
      "subCategory": "力学",
      "name": "匀变速直线运动位移公式",
      "grade": "高中"
    },
    "high_phy_003": {
      "category": "物理",
      "subCategory": "力学",
      "name": "匀变速直线运动速度位移关系",
      "grade": "高中"
    },
    "high_phy_004": {
      "category": "物理",
      "subCategory": "力学",
      "name": "自由落体运动",
      "grade": "高中"
    },
    "high_phy_005": {
      "category": "物理",
      "subCategory": "力学",
      "name": "平抛运动",
      "grade": "高中"
    },
    "high_phy_006": {
      "category": "物理",
      "subCategory": "力学",
      "name": "向心力公式",
      "grade": "高中"
    },
    "high_phy_007": {
      "category": "物理",
      "subCategory": "力学",
      "name": "万有引力提供向心力",
      "grade": "高中"
    },
    "high_phy_008": {
      "category": "物理",
      "subCategory": "力学",
      "name": "开普勒第三定律",
      "grade": "高中"
    },
    "high_phy_009": {
      "category": "物理",
      "subCategory": "力学",
      "name": "动量定理",
      "grade": "高中"
    },
    "high_phy_010": {
      "category": "物理",
      "subCategory": "力学",
      "name": "动量守恒定律",
      "grade": "高中"
    },
    "high_phy_011": {
      "category": "物理",
      "subCategory": "力学",
      "name": "机械能守恒定律",
      "grade": "高中"
    },
    "high_phy_012": {
      "category": "物理",
      "subCategory": "力学",
      "name": "重力势能",
      "grade": "高中"
    },
    "high_phy_013": {
      "category": "物理",
      "subCategory": "力学",
      "name": "弹性势能",
      "grade": "高中"
    },
    "high_phy_014": {
      "category": "物理",
      "subCategory": "电学",
      "name": "库仑定律",
      "grade": "高中"
    },
    "high_phy_015": {
      "category": "物理",
      "subCategory": "电学",
      "name": "电场强度",
      "grade": "高中"
    },
    "high_phy_016": {
      "category": "物理",
      "subCategory": "电学",
      "name": "电势能",
      "grade": "高中"
    },
    "high_phy_017": {
      "category": "物理",
      "subCategory": "电学",
      "name": "电容公式",
      "grade": "高中"
    },
    "high_phy_018": {
      "category": "物理",
      "subCategory": "电学",
      "name": "磁感应强度",
      "grade": "高中"
    },
    "high_phy_019": {
      "category": "物理",
      "subCategory": "电学",
      "name": "安培力公式",
      "grade": "高中"
    },
    "high_phy_020": {
      "category": "物理",
      "subCategory": "电学",
      "name": "洛伦兹力",
      "grade": "高中"
    },
    "high_phy_021": {
      "category": "物理",
      "subCategory": "电学",
      "name": "法拉第电磁感应定律",
      "grade": "高中"
    },
    "high_phy_022": {
      "category": "物理",
      "subCategory": "电学",
      "name": "磁通量",
      "grade": "高中"
    },
    "high_chem_001": {
      "category": "化学",
      "subCategory": "基础",
      "name": "物质的量",
      "grade": [
        "初中",
        "高中"
      ]
    },
    "high_chem_002": {
      "category": "化学",
      "subCategory": "基础",
      "name": "物质的量浓度",
      "grade": "高中"
    },
    "high_chem_003": {
      "category": "化学",
      "subCategory": "基础",
      "name": "质量分数与物质的量浓度换算",
      "grade": "高中"
    },
    "high_chem_004": {
      "category": "化学",
      "subCategory": "化学反应",
      "name": "化学反应速率",
      "grade": "高中"
    },
    "high_chem_005": {
      "category": "化学",
      "subCategory": "化学反应",
      "name": "化学平衡常数",
      "grade": "高中"
    },
    "high_chem_006": {
      "category": "化学",
      "subCategory": "化学反应",
      "name": "电离平衡常数",
      "grade": "高中"
    },
    "high_chem_007": {
      "category": "化学",
      "subCategory": "化学反应",
      "name": "pH值",
      "grade": "高中"
    },
    "high_chem_008": {
      "category": "化学",
      "subCategory": "化学反应",
      "name": "pOH值",
      "grade": "高中"
    },
    "high_chem_009": {
      "category": "化学",
      "subCategory": "化学反应",
      "name": "水的离子积",
      "grade": "高中"
    },
    "high_chem_010": {
      "category": "化学",
      "subCategory": "电化学",
      "name": "原电池电动势",
      "grade": "高中"
    },
    "high_chem_011": {
      "category": "化学",
      "subCategory": "电化学",
      "name": "能斯特方程",
      "grade": "高中"
    },
    "high_chem_012": {
      "category": "化学",
      "subCategory": "化学反应",
      "name": "阿伦尼乌斯方程",
      "grade": "高中"
    },
    "calc_limit_001": {
      "category": "数学",
      "subCategory": "高等数学-极限",
      "name": "极限定义",
      "grade": "大学"
    },
    "calc_limit_002": {
      "category": "数学",
      "subCategory": "高等数学-极限",
      "name": "重要极限1",
      "grade": "大学"
    },
    "calc_limit_003": {
      "category": "数学",
      "subCategory": "高等数学-极限",
      "name": "重要极限2",
      "grade": "大学"
    },
    "calc_derivative_001": {
      "category": "数学",
      "subCategory": "高等数学-导数",
      "name": "导数定义",
      "grade": "大学"
    },
    "calc_derivative_002": {
      "category": "数学",
      "subCategory": "高等数学-导数",
      "name": "基本导数公式",
      "grade": "大学"
    },
    "calc_derivative_003": {
      "category": "数学",
      "subCategory": "高等数学-导数",
      "name": "求导法则",
      "grade": "大学"
    },
    "calc_derivative_004": {
      "category": "数学",
      "subCategory": "高等数学-导数",
      "name": "高阶导数",
      "grade": "大学"
    },
    "calc_derivative_005": {
      "category": "数学",
      "subCategory": "高等数学-导数",
      "name": "隐函数求导",
      "grade": "大学"
    },
    "calc_integral_001": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "不定积分定义",
      "grade": "大学"
    },
    "calc_integral_002": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "基本积分公式",
      "grade": "大学"
    },
    "calc_integral_003": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分定义",
      "grade": "大学"
    },
    "calc_integral_004": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "牛顿-莱布尼茨公式",
      "grade": "大学"
    },
    "calc_integral_005": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "换元积分法",
      "grade": "大学"
    },
    "calc_integral_006": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "分部积分法",
      "grade": "大学"
    },
    "calc_series_001": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "泰勒级数",
      "grade": "大学"
    },
    "calc_series_002": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "麦克劳林级数",
      "grade": "大学"
    },
    "calc_series_003": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常见函数的麦克劳林展开",
      "grade": "大学"
    },
    "linear_matrix_001": {
      "category": "数学",
      "subCategory": "线性代数-矩阵",
      "name": "矩阵加法",
      "grade": "大学"
    },
    "linear_matrix_002": {
      "category": "数学",
      "subCategory": "线性代数-矩阵",
      "name": "矩阵乘法",
      "grade": "大学"
    },
    "linear_matrix_003": {
      "category": "数学",
      "subCategory": "线性代数-矩阵",
      "name": "矩阵转置",
      "grade": "大学"
    },
    "linear_matrix_004": {
      "category": "数学",
      "subCategory": "线性代数-矩阵",
      "name": "矩阵的逆",
      "grade": "大学"
    },
    "linear_det_001": {
      "category": "数学",
      "subCategory": "线性代数-行列式",
      "name": "行列式定义（2阶）",
      "grade": "大学"
    },
    "linear_det_002": {
      "category": "数学",
      "subCategory": "线性代数-行列式",
      "name": "行列式定义（3阶）",
      "grade": "大学"
    },
    "linear_det_003": {
      "category": "数学",
      "subCategory": "线性代数-行列式",
      "name": "行列式按行（列）展开",
      "grade": "大学"
    },
    "linear_eigen_001": {
      "category": "数学",
      "subCategory": "线性代数-特征值",
      "name": "特征值与特征向量",
      "grade": "大学"
    },
    "prob_basic_001": {
      "category": "数学",
      "subCategory": "概率论-概率",
      "name": "概率定义",
      "grade": "大学"
    },
    "prob_basic_002": {
      "category": "数学",
      "subCategory": "概率论-概率",
      "name": "条件概率",
      "grade": "大学"
    },
    "prob_basic_003": {
      "category": "数学",
      "subCategory": "概率论-概率",
      "name": "乘法公式",
      "grade": "大学"
    },
    "prob_basic_004": {
      "category": "数学",
      "subCategory": "概率论-概率",
      "name": "全概率公式",
      "grade": "大学"
    },
    "prob_basic_005": {
      "category": "数学",
      "subCategory": "概率论-概率",
      "name": "贝叶斯公式",
      "grade": "大学"
    },
    "prob_rv_001": {
      "category": "数学",
      "subCategory": "概率论-随机变量",
      "name": "数学期望",
      "grade": "大学"
    },
    "prob_rv_002": {
      "category": "数学",
      "subCategory": "概率论-随机变量",
      "name": "方差",
      "grade": "大学"
    },
    "prob_rv_003": {
      "category": "数学",
      "subCategory": "概率论-随机变量",
      "name": "标准差",
      "grade": "大学"
    },
    "univ_phy_relativity_001": {
      "category": "物理",
      "subCategory": "相对论",
      "name": "相对论时间膨胀",
      "grade": "大学"
    },
    "univ_phy_relativity_002": {
      "category": "物理",
      "subCategory": "相对论",
      "name": "相对论长度收缩",
      "grade": "大学"
    },
    "univ_phy_relativity_003": {
      "category": "物理",
      "subCategory": "相对论",
      "name": "质能关系",
      "grade": "大学"
    },
    "univ_phy_relativity_004": {
      "category": "物理",
      "subCategory": "相对论",
      "name": "相对论动能",
      "grade": "大学"
    },
    "univ_phy_relativity_005": {
      "category": "物理",
      "subCategory": "相对论",
      "name": "相对论质能方程（完整形式）",
      "grade": "大学"
    },
    "univ_phy_quantum_001": {
      "category": "物理",
      "subCategory": "量子力学",
      "name": "德布罗意波长",
      "grade": "大学"
    },
    "univ_phy_quantum_002": {
      "category": "物理",
      "subCategory": "量子力学",
      "name": "不确定性原理",
      "grade": "大学"
    },
    "univ_phy_quantum_003": {
      "category": "物理",
      "subCategory": "量子力学",
      "name": "薛定谔方程（一维）",
      "grade": "大学"
    },
    "univ_phy_electro_001": {
      "category": "物理",
      "subCategory": "电学",
      "name": "麦克斯韦方程组 - 微分形式",
      "grade": "大学"
    },
    "univ_phy_electro_002": {
      "category": "物理",
      "subCategory": "电学",
      "name": "麦克斯韦方程组 - 积分形式",
      "grade": "大学"
    },
    "univ_phy_thermo_001": {
      "category": "物理",
      "subCategory": "热力学",
      "name": "热力学第一定律",
      "grade": "大学"
    },
    "univ_phy_thermo_003": {
      "category": "物理",
      "subCategory": "热力学",
      "name": "熵的定义",
      "grade": "大学"
    },
    "univ_phy_thermo_004": {
      "category": "物理",
      "subCategory": "热力学",
      "name": "卡诺效率",
      "grade": "大学"
    },
    "univ_chem_thermo_001": {
      "category": "化学",
      "subCategory": "物理化学-热力学",
      "name": "吉布斯自由能",
      "grade": "大学"
    },
    "univ_chem_thermo_002": {
      "category": "化学",
      "subCategory": "物理化学-热力学",
      "name": "范特霍夫方程",
      "grade": "大学"
    },
    "univ_chem_thermo_003": {
      "category": "化学",
      "subCategory": "物理化学-热力学",
      "name": "克劳修斯-克拉珀龙方程",
      "grade": "大学"
    },
    "univ_chem_kinetics_001": {
      "category": "化学",
      "subCategory": "物理化学-动力学",
      "name": "一级反应速率方程",
      "grade": "大学"
    },
    "univ_chem_kinetics_002": {
      "category": "化学",
      "subCategory": "物理化学-动力学",
      "name": "二级反应速率方程",
      "grade": "大学"
    },
    "univ_chem_kinetics_003": {
      "category": "化学",
      "subCategory": "物理化学-动力学",
      "name": "半衰期",
      "grade": "大学"
    },
    "stat_002": {
      "category": "统计",
      "subCategory": "描述统计",
      "name": "方差公式",
      "grade": "专业领域"
    },
    "stat_003": {
      "category": "统计",
      "subCategory": "描述统计",
      "name": "标准差公式",
      "grade": "专业领域"
    },
    "stat_004": {
      "category": "统计",
      "subCategory": "描述统计",
      "name": "样本方差公式",
      "grade": "专业领域"
    },
    "stat_005": {
      "category": "统计",
      "subCategory": "描述统计",
      "name": "样本标准差公式",
      "grade": "专业领域"
    },
    "stat_006": {
      "category": "统计",
      "subCategory": "相关分析",
      "name": "相关系数公式（皮尔逊）",
      "grade": "专业领域"
    },
    "stat_007": {
      "category": "统计",
      "subCategory": "回归分析",
      "name": "线性回归方程",
      "grade": "专业领域"
    },
    "stat_008": {
      "category": "统计",
      "subCategory": "概率分布",
      "name": "正态分布概率密度函数",
      "grade": "专业领域"
    },
    "stat_009": {
      "category": "统计",
      "subCategory": "描述统计",
      "name": "Z分数（标准化）",
      "grade": "大学"
    },
    "stat_010": {
      "category": "统计",
      "subCategory": "假设检验",
      "name": "t检验统计量",
      "grade": "专业领域"
    },
    "eng_001": {
      "category": "工程",
      "subCategory": "材料力学",
      "name": "应力公式",
      "grade": "专业领域"
    },
    "eng_002": {
      "category": "工程",
      "subCategory": "材料力学",
      "name": "应变公式",
      "grade": "专业领域"
    },
    "eng_003": {
      "category": "工程",
      "subCategory": "材料力学",
      "name": "弹性模量（杨氏模量）",
      "grade": "专业领域"
    },
    "eng_004": {
      "category": "工程",
      "subCategory": "结构工程",
      "name": "梁的弯曲应力",
      "grade": "专业领域"
    },
    "eng_005": {
      "category": "工程",
      "subCategory": "结构工程",
      "name": "矩形截面惯性矩",
      "grade": "专业领域"
    },
    "eng_006": {
      "category": "工程",
      "subCategory": "结构工程",
      "name": "圆形截面惯性矩",
      "grade": "专业领域"
    },
    "eng_007": {
      "category": "工程",
      "subCategory": "结构工程",
      "name": "欧拉临界载荷",
      "grade": "专业领域"
    },
    "eng_008": {
      "category": "工程",
      "subCategory": "流体力学",
      "name": "伯努利方程",
      "grade": "专业领域"
    },
    "eng_009": {
      "category": "工程",
      "subCategory": "流体力学",
      "name": "雷诺数",
      "grade": "专业领域"
    },
    "eng_010": {
      "category": "工程",
      "subCategory": "传热学",
      "name": "传热速率（对流）",
      "grade": "专业领域"
    },
    "eng_011": {
      "category": "工程",
      "subCategory": "传热学",
      "name": "传热速率（传导）",
      "grade": "专业领域"
    },
    "eng_013": {
      "category": "工程",
      "subCategory": "机械工程",
      "name": "效率公式",
      "grade": "专业领域"
    },
    "eng_014": {
      "category": "工程",
      "subCategory": "机械工程",
      "name": "扭矩公式",
      "grade": "专业领域"
    },
    "eng_015": {
      "category": "工程",
      "subCategory": "机械工程",
      "name": "齿轮传动比",
      "grade": "专业领域"
    },
    "finance_001": {
      "category": "金融",
      "subCategory": "复利计算",
      "name": "复利终值公式",
      "grade": "专业领域"
    },
    "finance_002": {
      "category": "金融",
      "subCategory": "复利计算",
      "name": "复利现值公式",
      "grade": "专业领域"
    },
    "finance_003": {
      "category": "金融",
      "subCategory": "年金计算",
      "name": "普通年金终值",
      "grade": "专业领域"
    },
    "finance_004": {
      "category": "金融",
      "subCategory": "年金计算",
      "name": "普通年金现值",
      "grade": "专业领域"
    },
    "finance_005": {
      "category": "金融",
      "subCategory": "年金计算",
      "name": "先付年金终值",
      "grade": "专业领域"
    },
    "finance_006": {
      "category": "金融",
      "subCategory": "年金计算",
      "name": "先付年金现值",
      "grade": "专业领域"
    },
    "finance_007": {
      "category": "金融",
      "subCategory": "投资分析",
      "name": "投资回报率（ROI）",
      "grade": "专业领域"
    },
    "finance_008": {
      "category": "金融",
      "subCategory": "投资分析",
      "name": "年化收益率",
      "grade": "专业领域"
    },
    "finance_009": {
      "category": "金融",
      "subCategory": "债券定价",
      "name": "债券价格公式",
      "grade": "专业领域"
    },
    "finance_010": {
      "category": "金融",
      "subCategory": "债券定价",
      "name": "债券到期收益率（YTM）",
      "grade": "专业领域"
    },
    "finance_011": {
      "category": "金融",
      "subCategory": "投资分析",
      "name": "净现值（NPV）",
      "grade": "专业领域"
    },
    "finance_012": {
      "category": "金融",
      "subCategory": "投资分析",
      "name": "内部收益率（IRR）",
      "grade": "专业领域"
    },
    "finance_013": {
      "category": "金融",
      "subCategory": "复利计算",
      "name": "72法则",
      "grade": "专业领域"
    },
    "finance_014": {
      "category": "金融",
      "subCategory": "贷款计算",
      "name": "贷款月供（等额本息）",
      "grade": "专业领域"
    },
    "finance_015": {
      "category": "金融",
      "subCategory": "贷款计算",
      "name": "贷款月供（等额本金）",
      "grade": "专业领域"
    },
    "finance_016": {
      "category": "金融",
      "subCategory": "利率计算",
      "name": "有效年利率（EAR）",
      "grade": "专业领域"
    },
    "finance_017": {
      "category": "金融",
      "subCategory": "股票分析",
      "name": "股票市盈率（P/E）",
      "grade": "专业领域"
    },
    "finance_018": {
      "category": "金融",
      "subCategory": "股票分析",
      "name": "股票市净率（P/B）",
      "grade": "专业领域"
    },
    "calc_derivative_006": {
      "category": "数学",
      "subCategory": "高等数学-导数",
      "name": "参数方程求导",
      "grade": "大学"
    },
    "calc_derivative_007": {
      "category": "数学",
      "subCategory": "高等数学-导数",
      "name": "极坐标求导",
      "grade": "大学"
    },
    "calc_derivative_008": {
      "category": "数学",
      "subCategory": "高等数学-导数",
      "name": "对数求导法",
      "grade": "大学"
    },
    "calc_integral_007": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "有理函数积分",
      "grade": "大学"
    },
    "calc_integral_008": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "三角换元法",
      "grade": "大学"
    },
    "calc_integral_009": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "反常积分（无穷限）",
      "grade": "大学"
    },
    "calc_integral_010": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "反常积分（瑕积分）",
      "grade": "大学"
    },
    "calc_integral_011": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分应用 - 平面图形面积",
      "grade": "大学"
    },
    "calc_integral_012": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分应用 - 旋转体体积",
      "grade": "大学"
    },
    "calc_integral_013": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分应用 - 弧长公式",
      "grade": "大学"
    },
    "calc_integral_014": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "三角函数积分 - 正切余切",
      "grade": "大学"
    },
    "calc_integral_015": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "三角函数积分 - 正割余割",
      "grade": "大学"
    },
    "calc_integral_016": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "三角函数平方积分",
      "grade": "大学"
    },
    "calc_integral_017": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "指数函数积分",
      "grade": "大学"
    },
    "calc_integral_018": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "对数函数积分",
      "grade": "大学"
    },
    "calc_integral_019": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "反三角函数积分",
      "grade": "大学"
    },
    "calc_integral_020": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "双曲函数积分",
      "grade": "大学"
    },
    "calc_integral_021": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分性质 - 线性性",
      "grade": "大学"
    },
    "calc_integral_022": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分性质 - 区间可加性",
      "grade": "大学"
    },
    "calc_integral_023": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分性质 - 积分中值定理",
      "grade": "大学"
    },
    "calc_integral_024": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分性质 - 奇偶性",
      "grade": "大学"
    },
    "calc_integral_025": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分性质 - 周期性",
      "grade": "大学"
    },
    "calc_integral_026": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分应用 - 旋转体体积（绕y轴）",
      "grade": "大学"
    },
    "calc_integral_027": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分应用 - 旋转体体积（壳法）",
      "grade": "大学"
    },
    "calc_integral_028": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分应用 - 旋转体侧面积",
      "grade": "大学"
    },
    "calc_integral_029": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分应用 - 质心坐标",
      "grade": "大学"
    },
    "calc_integral_030": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "定积分应用 - 功",
      "grade": "大学"
    },
    "calc_integral_031": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "有理函数积分表 - 基本形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_032": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "有理函数积分表 - 高次形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_033": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "无理函数积分表 - 根式形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_034": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "无理函数积分表 - 线性根式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_035": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "三角函数积分表 - 完整版",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_036": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "三角函数积分表 - 乘积形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_037": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "指数函数积分表 - 完整版",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_038": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "对数函数积分表 - 完整版",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_039": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "反三角函数积分表 - 直接积分",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_040": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "反三角函数积分表 - 其他形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_041": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "双曲函数积分表 - 完整版",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_042": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "反双曲函数积分表",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_043": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "反双曲函数积分表 - 其他形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_044": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "三角函数积分表 - 高次幂",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_045": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "三角函数积分表 - 其他形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_046": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "有理函数积分表 - 其他形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_047": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "无理函数积分表 - 其他根式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_048": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常见定积分值",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_049": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "含绝对值的积分",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_050": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "分式积分 - 其他形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_051": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "指数与三角函数的积分",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_052": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "双曲函数积分表 - 其他形式",
      "grade": [
        "大学",
        "积分表"
      ]
    },
    "calc_integral_053": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "辛普森公式求拟柱体体积",
      "grade": "大学"
    },
    "calc_ode_001": {
      "category": "数学",
      "subCategory": "高等数学-微分方程",
      "name": "可分离变量微分方程",
      "grade": "大学"
    },
    "calc_ode_002": {
      "category": "数学",
      "subCategory": "高等数学-微分方程",
      "name": "齐次微分方程",
      "grade": "大学"
    },
    "calc_ode_003": {
      "category": "数学",
      "subCategory": "高等数学-微分方程",
      "name": "一阶线性微分方程",
      "grade": "大学"
    },
    "calc_ode_004": {
      "category": "数学",
      "subCategory": "高等数学-微分方程",
      "name": "二阶常系数齐次线性微分方程",
      "grade": "大学"
    },
    "calc_ode_005": {
      "category": "数学",
      "subCategory": "高等数学-微分方程",
      "name": "欧拉方程",
      "grade": "大学"
    },
    "calc_series_004": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "正项级数审敛法 - 比较判别法",
      "grade": "大学"
    },
    "calc_series_005": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "正项级数审敛法 - 比值判别法（达朗贝尔）",
      "grade": "大学"
    },
    "calc_series_006": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "正项级数审敛法 - 根值判别法（柯西）",
      "grade": "大学"
    },
    "calc_series_007": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "交错级数审敛法 - 莱布尼茨判别法",
      "grade": "大学"
    },
    "calc_series_008": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "傅里叶级数",
      "grade": "大学"
    },
    "calc_complex_001": {
      "category": "数学",
      "subCategory": "复变函数",
      "name": "欧拉公式",
      "grade": "大学"
    },
    "calc_complex_002": {
      "category": "数学",
      "subCategory": "复变函数",
      "name": "复数指数形式",
      "grade": "大学"
    },
    "calc_complex_003": {
      "category": "数学",
      "subCategory": "复变函数",
      "name": "棣莫弗公式",
      "grade": "大学"
    },
    "calc_complex_004": {
      "category": "数学",
      "subCategory": "复变函数",
      "name": "复数开方公式",
      "grade": "大学"
    },
    "linear_matrix_005": {
      "category": "数学",
      "subCategory": "线性代数-矩阵",
      "name": "矩阵的秩",
      "grade": "大学"
    },
    "linear_matrix_006": {
      "category": "数学",
      "subCategory": "线性代数-矩阵",
      "name": "相似矩阵",
      "grade": "大学"
    },
    "linear_vector_001": {
      "category": "数学",
      "subCategory": "线性代数-向量",
      "name": "施密特正交化",
      "grade": "大学"
    },
    "linear_vector_002": {
      "category": "数学",
      "subCategory": "线性代数-向量",
      "name": "混合积",
      "grade": "大学"
    },
    "linear_eigen_002": {
      "category": "数学",
      "subCategory": "线性代数-特征值",
      "name": "特征值的性质",
      "grade": "大学"
    },
    "prob_dist_001": {
      "category": "数学",
      "subCategory": "概率论-分布",
      "name": "二项分布",
      "grade": "大学"
    },
    "prob_dist_002": {
      "category": "数学",
      "subCategory": "概率论-分布",
      "name": "泊松分布",
      "grade": "大学"
    },
    "prob_dist_003": {
      "category": "数学",
      "subCategory": "概率论-分布",
      "name": "正态分布",
      "grade": "大学"
    },
    "prob_dist_004": {
      "category": "数学",
      "subCategory": "概率论-分布",
      "name": "标准正态分布",
      "grade": "大学"
    },
    "prob_stat_001": {
      "category": "数学",
      "subCategory": "概率论-统计",
      "name": "中心极限定理",
      "grade": "大学"
    },
    "prob_stat_002": {
      "category": "数学",
      "subCategory": "概率论-统计",
      "name": "大数定律",
      "grade": "大学"
    },
    "math_analysis_001": {
      "category": "数学",
      "subCategory": "数学分析-连续性",
      "name": "函数连续性定义",
      "grade": "大学"
    },
    "math_analysis_002": {
      "category": "数学",
      "subCategory": "数学分析-连续性",
      "name": "一致连续性",
      "grade": "大学"
    },
    "math_analysis_003": {
      "category": "数学",
      "subCategory": "数学分析-可微性",
      "name": "可微性定义",
      "grade": "大学"
    },
    "math_analysis_004": {
      "category": "数学",
      "subCategory": "数学分析-微分中值定理",
      "name": "拉格朗日中值定理",
      "grade": "大学"
    },
    "math_analysis_005": {
      "category": "数学",
      "subCategory": "数学分析-微分中值定理",
      "name": "柯西中值定理",
      "grade": "大学"
    },
    "math_analysis_006": {
      "category": "数学",
      "subCategory": "数学分析-极限",
      "name": "洛必达法则",
      "grade": "大学"
    },
    "sobolev_001": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "Sobolev空间定义",
      "grade": "大学"
    },
    "sobolev_002": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "Sobolev范数",
      "grade": "大学"
    },
    "sobolev_003": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "H^k空间（Hilbert-Sobolev空间）",
      "grade": "大学"
    },
    "sobolev_004": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "Sobolev嵌入定理（基本形式）",
      "grade": "大学"
    },
    "sobolev_005": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "Sobolev嵌入定理（临界情况）",
      "grade": "大学"
    },
    "sobolev_006": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "Morrey不等式",
      "grade": "大学"
    },
    "sobolev_007": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "Poincaré不等式",
      "grade": "大学"
    },
    "sobolev_008": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "弱导数定义",
      "grade": "大学"
    },
    "sobolev_009": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "Rellich-Kondrachov紧嵌入定理",
      "grade": "大学"
    },
    "sobolev_010": {
      "category": "数学",
      "subCategory": "泛函分析-Sobolev空间",
      "name": "分数阶Sobolev空间",
      "grade": "大学"
    },
    "math_topology_001": {
      "category": "数学",
      "subCategory": "拓扑学",
      "name": "欧拉示数性公式",
      "grade": "大学"
    },
    "math_algebra_001": {
      "category": "数学",
      "subCategory": "代数",
      "name": "四元数",
      "grade": "大学"
    },
    "number_theory_001": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "欧几里得算法（最大公约数）",
      "grade": "大学"
    },
    "number_theory_002": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "扩展欧几里得算法",
      "grade": "大学"
    },
    "number_theory_003": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "费马小定理",
      "grade": "大学"
    },
    "number_theory_004": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "欧拉定理",
      "grade": "大学"
    },
    "number_theory_005": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "欧拉函数公式",
      "grade": "大学"
    },
    "number_theory_006": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "中国剩余定理",
      "grade": "大学"
    },
    "number_theory_007": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "威尔逊定理",
      "grade": "大学"
    },
    "number_theory_008": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "二次剩余（欧拉判别准则）",
      "grade": "大学"
    },
    "number_theory_009": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "勒让德符号",
      "grade": "大学"
    },
    "number_theory_010": {
      "category": "数学",
      "subCategory": "数论-初等数论",
      "name": "二次互反律",
      "grade": "大学"
    },
    "algebraic_number_theory_001": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "代数整数",
      "grade": "大学"
    },
    "algebraic_number_theory_002": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "数域的整数环",
      "grade": "大学"
    },
    "algebraic_number_theory_003": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "理想分解唯一性",
      "grade": "大学"
    },
    "algebraic_number_theory_004": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "理想范数",
      "grade": "大学"
    },
    "algebraic_number_theory_005": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "类数公式",
      "grade": "大学"
    },
    "algebraic_number_theory_006": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "狄利克雷单位定理",
      "grade": "大学"
    },
    "algebraic_number_theory_007": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "分圆域",
      "grade": "大学"
    },
    "algebraic_number_theory_008": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "二次域的整数环",
      "grade": "大学"
    },
    "algebraic_number_theory_009": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "素理想在扩张中的分解",
      "grade": "大学"
    },
    "algebraic_number_theory_010": {
      "category": "数学",
      "subCategory": "数论-代数数论",
      "name": "判别式",
      "grade": "大学"
    },
    "trig_hyperbolic_001": {
      "category": "数学",
      "subCategory": "高等数学-三角函数",
      "name": "正弦函数的复指数表示",
      "grade": "大学"
    },
    "trig_hyperbolic_002": {
      "category": "数学",
      "subCategory": "高等数学-三角函数",
      "name": "余弦函数的复指数表示",
      "grade": "大学"
    },
    "trig_hyperbolic_003": {
      "category": "数学",
      "subCategory": "高等数学-三角函数",
      "name": "三角函数与双曲函数的复数关系",
      "grade": "大学"
    },
    "trig_hyperbolic_004": {
      "category": "数学",
      "subCategory": "高等数学-三角函数",
      "name": "反正弦函数的对数表示",
      "grade": "大学"
    },
    "trig_hyperbolic_005": {
      "category": "数学",
      "subCategory": "高等数学-三角函数",
      "name": "反余弦函数的对数表示",
      "grade": "大学"
    },
    "trig_hyperbolic_006": {
      "category": "数学",
      "subCategory": "高等数学-三角函数",
      "name": "反正切函数的对数表示",
      "grade": "大学"
    },
    "trig_hyperbolic_007": {
      "category": "数学",
      "subCategory": "高等数学-双曲函数",
      "name": "双曲正弦函数定义",
      "grade": "大学"
    },
    "trig_hyperbolic_008": {
      "category": "数学",
      "subCategory": "高等数学-双曲函数",
      "name": "双曲余弦函数定义",
      "grade": "大学"
    },
    "trig_hyperbolic_009": {
      "category": "数学",
      "subCategory": "高等数学-双曲函数",
      "name": "双曲正切函数定义",
      "grade": "大学"
    },
    "trig_hyperbolic_010": {
      "category": "数学",
      "subCategory": "高等数学-双曲函数",
      "name": "反双曲正弦函数",
      "grade": "大学"
    },
    "trig_hyperbolic_011": {
      "category": "数学",
      "subCategory": "高等数学-双曲函数",
      "name": "反双曲余弦函数",
      "grade": "大学"
    },
    "trig_hyperbolic_012": {
      "category": "数学",
      "subCategory": "高等数学-双曲函数",
      "name": "反双曲正切函数",
      "grade": "大学"
    },
    "trig_hyperbolic_013": {
      "category": "数学",
      "subCategory": "高等数学-双曲函数",
      "name": "双曲函数与三角函数的复数关系",
      "grade": "大学"
    },
    "trig_hyperbolic_014": {
      "category": "数学",
      "subCategory": "高等数学-双曲函数",
      "name": "双曲函数与三角函数的复数关系（续）",
      "grade": "大学"
    },
    "series_sum_001": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 1",
      "grade": "大学"
    },
    "series_sum_002": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 2",
      "grade": "大学"
    },
    "series_sum_003": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 3",
      "grade": "大学"
    },
    "series_sum_004": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 4",
      "grade": "大学"
    },
    "series_sum_005": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 5",
      "grade": "大学"
    },
    "series_sum_006": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 6",
      "grade": "大学"
    },
    "series_sum_007": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 7",
      "grade": "大学"
    },
    "series_sum_008": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 8",
      "grade": "大学"
    },
    "series_sum_009": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 9",
      "grade": "大学"
    },
    "series_sum_010": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 10",
      "grade": "大学"
    },
    "series_sum_011": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 11",
      "grade": "大学"
    },
    "series_sum_012": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 12",
      "grade": "大学"
    },
    "series_sum_013": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 13",
      "grade": "大学"
    },
    "series_sum_014": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 14",
      "grade": "大学"
    },
    "series_sum_015": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 15",
      "grade": "大学"
    },
    "series_sum_016": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 16",
      "grade": "大学"
    },
    "series_sum_017": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 17",
      "grade": "大学"
    },
    "series_sum_018": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 18",
      "grade": "大学"
    },
    "series_sum_019": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 19",
      "grade": "大学"
    },
    "series_sum_020": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 20",
      "grade": "大学"
    },
    "series_sum_021": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 21",
      "grade": "大学"
    },
    "series_sum_022": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 22",
      "grade": "大学"
    },
    "series_sum_023": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 23",
      "grade": "大学"
    },
    "series_sum_024": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 24",
      "grade": "大学"
    },
    "series_sum_025": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 25",
      "grade": "大学"
    },
    "series_sum_026": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 26",
      "grade": "大学"
    },
    "series_sum_027": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 27",
      "grade": "大学"
    },
    "series_sum_028": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 28",
      "grade": "大学"
    },
    "series_sum_029": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 29",
      "grade": "大学"
    },
    "series_sum_030": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 30",
      "grade": "大学"
    },
    "series_sum_031": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 31",
      "grade": "大学"
    },
    "series_sum_032": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 32",
      "grade": "大学"
    },
    "series_sum_033": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 33",
      "grade": "大学"
    },
    "series_sum_034": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 34",
      "grade": "大学"
    },
    "series_sum_035": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 35",
      "grade": "大学"
    },
    "series_sum_036": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 36",
      "grade": "大学"
    },
    "series_sum_037": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 37",
      "grade": "大学"
    },
    "series_sum_038": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 38",
      "grade": "大学"
    },
    "series_sum_039": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 39",
      "grade": "大学"
    },
    "series_sum_040": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 40",
      "grade": "大学"
    },
    "series_sum_041": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 41",
      "grade": "大学"
    },
    "series_sum_042": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 42",
      "grade": "大学"
    },
    "series_sum_043": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 43",
      "grade": "大学"
    },
    "series_sum_044": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 44",
      "grade": "大学"
    },
    "series_sum_045": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 45",
      "grade": "大学"
    },
    "series_sum_046": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 46",
      "grade": "大学"
    },
    "series_sum_047": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 47",
      "grade": "大学"
    },
    "series_sum_048": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 48",
      "grade": "大学"
    },
    "series_sum_049": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 49",
      "grade": "大学"
    },
    "series_sum_050": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 50",
      "grade": "大学"
    },
    "series_sum_051": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 51",
      "grade": "大学"
    },
    "series_sum_052": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 52",
      "grade": "大学"
    },
    "series_sum_053": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 53",
      "grade": "大学"
    },
    "series_sum_054": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 54",
      "grade": "大学"
    },
    "series_sum_055": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 55",
      "grade": "大学"
    },
    "series_sum_056": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 56",
      "grade": "大学"
    },
    "series_sum_057": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 57",
      "grade": "大学"
    },
    "series_sum_058": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 58",
      "grade": "大学"
    },
    "series_sum_059": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 59",
      "grade": "大学"
    },
    "series_sum_060": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 60",
      "grade": "大学"
    },
    "series_sum_061": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 61",
      "grade": "大学"
    },
    "series_sum_062": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 62",
      "grade": "大学"
    },
    "series_sum_063": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 63",
      "grade": "大学"
    },
    "series_sum_064": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 64",
      "grade": "大学"
    },
    "series_sum_065": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 65",
      "grade": "大学"
    },
    "series_sum_066": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 66",
      "grade": "大学"
    },
    "series_sum_067": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 67",
      "grade": "大学"
    },
    "series_sum_068": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 68",
      "grade": "大学"
    },
    "series_sum_069": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 69",
      "grade": "大学"
    },
    "series_sum_070": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 70",
      "grade": "大学"
    },
    "series_sum_071": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 71",
      "grade": "大学"
    },
    "series_sum_072": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 72",
      "grade": "大学"
    },
    "series_sum_073": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 73",
      "grade": "大学"
    },
    "series_sum_074": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 74",
      "grade": "大学"
    },
    "series_sum_075": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 75",
      "grade": "大学"
    },
    "series_sum_076": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 76",
      "grade": "大学"
    },
    "series_sum_077": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 77",
      "grade": "大学"
    },
    "series_sum_078": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 78",
      "grade": "大学"
    },
    "series_sum_079": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 79",
      "grade": "大学"
    },
    "series_sum_080": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 80",
      "grade": "大学"
    },
    "series_sum_081": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 81",
      "grade": "大学"
    },
    "series_sum_082": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "常用求和公式 82",
      "grade": "大学"
    },
    "integral_common_001": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 1°",
      "grade": "大学"
    },
    "integral_common_002": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 2°",
      "grade": "大学"
    },
    "integral_common_003": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 3°",
      "grade": "大学"
    },
    "integral_common_004": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 4°",
      "grade": "大学"
    },
    "integral_common_005": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 5°",
      "grade": "大学"
    },
    "integral_common_006": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 6°",
      "grade": "大学"
    },
    "integral_common_007": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 7°",
      "grade": "大学"
    },
    "integral_common_008": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 8°",
      "grade": "大学"
    },
    "integral_common_009": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 9°",
      "grade": "大学"
    },
    "integral_common_010": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 10°",
      "grade": "大学"
    },
    "integral_common_011": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 11°",
      "grade": "大学"
    },
    "integral_common_012": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 12°",
      "grade": "大学"
    },
    "integral_common_013": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 13°",
      "grade": "大学"
    },
    "integral_common_014": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 14°",
      "grade": "大学"
    },
    "integral_common_015": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 15°",
      "grade": "大学"
    },
    "integral_common_016": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 16°",
      "grade": "大学"
    },
    "integral_common_017": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 17°",
      "grade": "大学"
    },
    "integral_common_018": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 18°",
      "grade": "大学"
    },
    "integral_common_019": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 19°",
      "grade": "大学"
    },
    "integral_common_020": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 20°",
      "grade": "大学"
    },
    "integral_common_021": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 21°",
      "grade": "大学"
    },
    "integral_common_022": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 22°",
      "grade": "大学"
    },
    "integral_common_023": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 23°",
      "grade": "大学"
    },
    "integral_common_024": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 24°",
      "grade": "大学"
    },
    "integral_common_025": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 25°",
      "grade": "大学"
    },
    "integral_common_026": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 26°",
      "grade": "大学"
    },
    "integral_common_027": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 27°",
      "grade": "大学"
    },
    "integral_common_028": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 28°",
      "grade": "大学"
    },
    "integral_common_029": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 29°",
      "grade": "大学"
    },
    "integral_common_030": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 30°",
      "grade": "大学"
    },
    "integral_common_031": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 31°",
      "grade": "大学"
    },
    "integral_common_032": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 32°",
      "grade": "大学"
    },
    "integral_common_033": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 33°",
      "grade": "大学"
    },
    "integral_common_034": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 34°",
      "grade": "大学"
    },
    "integral_common_035": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 35°",
      "grade": "大学"
    },
    "integral_common_036": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 36°",
      "grade": "大学"
    },
    "integral_common_037": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 37°",
      "grade": "大学"
    },
    "integral_common_038": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 38°",
      "grade": "大学"
    },
    "integral_common_039": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 39°",
      "grade": "大学"
    },
    "integral_common_040": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 40°",
      "grade": "大学"
    },
    "integral_common_041": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 41°",
      "grade": "大学"
    },
    "integral_common_042": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 42°",
      "grade": "大学"
    },
    "integral_common_043": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 43°",
      "grade": "大学"
    },
    "integral_common_044": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 44°",
      "grade": "大学"
    },
    "integral_common_045": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 45°",
      "grade": "大学"
    },
    "integral_common_046": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 46°",
      "grade": "大学"
    },
    "integral_common_047": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 47°",
      "grade": "大学"
    },
    "integral_common_048": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 48°",
      "grade": "大学"
    },
    "integral_common_049": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 49°",
      "grade": "大学"
    },
    "integral_common_050": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 50°",
      "grade": "大学"
    },
    "integral_common_051": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 51°",
      "grade": "大学"
    },
    "integral_common_052": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 52°",
      "grade": "大学"
    },
    "integral_common_053": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 53°",
      "grade": "大学"
    },
    "integral_common_054": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 54°",
      "grade": "大学"
    },
    "integral_common_055": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 55°",
      "grade": "大学"
    },
    "integral_common_056": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 56°",
      "grade": "大学"
    },
    "integral_common_057": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 57°",
      "grade": "大学"
    },
    "integral_common_058": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 58°",
      "grade": "大学"
    },
    "integral_common_059": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 59°",
      "grade": "大学"
    },
    "integral_common_060": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 60°",
      "grade": "大学"
    },
    "integral_common_061": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 61°",
      "grade": "大学"
    },
    "integral_common_062": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 62°",
      "grade": "大学"
    },
    "integral_common_063": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 63°",
      "grade": "大学"
    },
    "integral_common_064": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "常用积分公式 64°",
      "grade": "大学"
    },
    "fourier_001": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "sgn(x)的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_002": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "x的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_003": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "π-x的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_004": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "|x|的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_005": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "x²的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_006": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "x³的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_007": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "x sin x的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_008": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "x cos x的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_009": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "|sin x|的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_010": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "|cos x|的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_011": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "e^(ax)的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_012": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "sinh(ax)的傅里叶展开式",
      "grade": "大学"
    },
    "fourier_013": {
      "category": "数学",
      "subCategory": "高等数学-傅里叶分析",
      "name": "cosh(ax)的傅里叶展开式",
      "grade": "大学"
    },
    "theorem_gauss_digamma": {
      "category": "数学",
      "subCategory": "高等数学-特殊函数",
      "name": "高斯伽马函数定理",
      "grade": "大学"
    },
    "theorem_lobachevsky": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "罗巴切夫斯基积分法",
      "grade": "大学"
    },
    "theorem_lobachevsky_2": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "罗巴切夫斯基积分法（续）",
      "grade": "大学"
    },
    "theorem_chebyshev": {
      "category": "数学",
      "subCategory": "高等数学-积分",
      "name": "切比雪夫定理",
      "grade": "大学"
    },
    "theorem_euler_maclaurin": {
      "category": "数学",
      "subCategory": "高等数学-级数",
      "name": "欧拉-麦克劳林公式",
      "grade": "大学"
    },
    "astro_001": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "开普勒第一定律（椭圆轨道定律）",
      "grade": "大学"
    },
    "astro_002": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "开普勒第二定律（面积定律）",
      "grade": "大学"
    },
    "astro_003": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "开普勒第三定律（调和定律）",
      "grade": "大学"
    },
    "astro_004": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "圆形轨道速度",
      "grade": "大学"
    },
    "astro_005": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "椭圆轨道速度（一般形式）",
      "grade": "大学"
    },
    "astro_006": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "逃逸速度",
      "grade": "大学"
    },
    "astro_007": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "轨道总能量",
      "grade": "大学"
    },
    "astro_008": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "比角动量（单位质量角动量）",
      "grade": "大学"
    },
    "astro_009": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "轨道偏心率",
      "grade": "大学"
    },
    "astro_010": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "近日点和远日点距离",
      "grade": "大学"
    },
    "astro_011": {
      "category": "物理",
      "subCategory": "天文学-观测",
      "name": "视星等与绝对星等关系",
      "grade": "大学"
    },
    "astro_012": {
      "category": "物理",
      "subCategory": "天文学-观测",
      "name": "距离模数",
      "grade": "大学"
    },
    "astro_013": {
      "category": "物理",
      "subCategory": "天文学-观测",
      "name": "视差与距离关系",
      "grade": "大学"
    },
    "astro_014": {
      "category": "物理",
      "subCategory": "天文学-观测",
      "name": "光度与亮度关系",
      "grade": "大学"
    },
    "astro_015": {
      "category": "物理",
      "subCategory": "天文学-观测",
      "name": "星等与亮度关系",
      "grade": "大学"
    },
    "astro_016": {
      "category": "物理",
      "subCategory": "天文学-观测",
      "name": "多普勒效应（径向速度）",
      "grade": "大学"
    },
    "astro_017": {
      "category": "物理",
      "subCategory": "天文学-观测",
      "name": "相对论多普勒效应",
      "grade": "大学"
    },
    "astro_018": {
      "category": "物理",
      "subCategory": "天文学-宇宙学",
      "name": "哈勃定律",
      "grade": "大学"
    },
    "astro_019": {
      "category": "物理",
      "subCategory": "天文学-相对论",
      "name": "史瓦西半径（黑洞视界）",
      "grade": "大学"
    },
    "astro_020": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "洛希极限（潮汐瓦解半径）",
      "grade": "大学"
    },
    "astro_021": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "开普勒方程",
      "grade": "大学"
    },
    "astro_022": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "偏近点角与轨道半径的关系",
      "grade": "大学"
    },
    "astro_023": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "偏近点角与真近点角的转换关系",
      "grade": "大学"
    },
    "astro_024": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "偏近点角的坐标表示",
      "grade": "大学"
    },
    "astro_025": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "平近点角定义",
      "grade": "大学"
    },
    "astro_026": {
      "category": "物理",
      "subCategory": "天文学-天体力学",
      "name": "平均角速度",
      "grade": "大学"
    }
  },
  "searchIndex": {
    "0": [
      "middle_alg_005",
      "high_func_001",
      "high_func_002",
      "high_chem_009",
      "calc_limit_002",
      "calc_derivative_001",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_eigen_001",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "finance_012",
      "calc_integral_010",
      "calc_integral_017",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_048",
      "calc_integral_049",
      "calc_ode_004",
      "calc_ode_005",
      "calc_series_004",
      "calc_series_007",
      "calc_complex_004",
      "prob_dist_004",
      "prob_stat_001",
      "math_analysis_002",
      "math_analysis_005",
      "math_analysis_006",
      "sobolev_006",
      "number_theory_001",
      "number_theory_009",
      "algebraic_number_theory_001",
      "series_sum_001",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_041",
      "series_sum_051",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_074",
      "series_sum_078",
      "series_sum_079",
      "series_sum_081",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2"
    ],
    "1": [
      "math_002b",
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005",
      "middle_geo_005",
      "middle_geo_009",
      "middle_phy_015",
      "high_func_001",
      "high_func_002",
      "high_trig_004",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_geo_002",
      "high_geo_008",
      "high_geo_010",
      "high_phy_002",
      "high_phy_004",
      "high_phy_005",
      "high_phy_013",
      "high_chem_009",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_002",
      "calc_integral_002",
      "calc_integral_003",
      "calc_series_003",
      "linear_matrix_002",
      "linear_det_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_004",
      "univ_phy_thermo_004",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "stat_004",
      "stat_005",
      "stat_008",
      "eng_008",
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "finance_008",
      "finance_009",
      "finance_010",
      "finance_011",
      "finance_012",
      "finance_014",
      "finance_015",
      "finance_016",
      "calc_integral_013",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_050",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "calc_complex_004",
      "prob_dist_001",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "sobolev_002",
      "sobolev_008",
      "sobolev_009",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_008",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_021",
      "series_sum_022",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_014",
      "integral_common_015",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_022",
      "integral_common_023",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_037",
      "integral_common_039",
      "integral_common_040",
      "integral_common_044",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_gauss_digamma",
      "theorem_chebyshev",
      "theorem_euler_maclaurin",
      "astro_005",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010",
      "astro_013",
      "astro_017",
      "astro_020"
    ],
    "2": [
      "math_002",
      "primary_geo_001",
      "primary_geo_008",
      "middle_alg_001",
      "middle_geo_003",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_008",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "high_geo_003",
      "high_geo_005",
      "high_geo_011",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_013",
      "calc_limit_003",
      "calc_series_003",
      "linear_det_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "univ_chem_kinetics_003",
      "stat_008",
      "eng_008",
      "calc_integral_016",
      "calc_integral_024",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_series_008",
      "calc_complex_004",
      "prob_dist_003",
      "sobolev_003",
      "number_theory_008",
      "number_theory_009",
      "algebraic_number_theory_005",
      "algebraic_number_theory_008",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_012",
      "series_sum_002",
      "series_sum_006",
      "series_sum_007",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_079",
      "series_sum_082",
      "integral_common_002",
      "integral_common_005",
      "integral_common_006",
      "integral_common_008",
      "integral_common_010",
      "integral_common_014",
      "integral_common_015",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_046",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_060",
      "integral_common_062",
      "integral_common_063",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_gauss_digamma",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_euler_maclaurin",
      "astro_002",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_015",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "3": [
      "middle_geo_009",
      "middle_geo_011",
      "high_geo_002",
      "high_geo_005",
      "high_geo_008",
      "high_geo_010",
      "linear_det_002",
      "calc_integral_034",
      "calc_integral_046",
      "algebraic_number_theory_008",
      "series_sum_003",
      "series_sum_014",
      "series_sum_043",
      "series_sum_044",
      "integral_common_003",
      "integral_common_005",
      "integral_common_007",
      "integral_common_008",
      "integral_common_025",
      "integral_common_030",
      "integral_common_035",
      "fourier_005",
      "astro_020"
    ],
    "4": [
      "math_002",
      "primary_geo_003",
      "middle_geo_011",
      "middle_geo_012",
      "high_phy_006",
      "high_phy_008",
      "high_phy_017",
      "calc_integral_016",
      "calc_integral_050",
      "number_theory_010",
      "algebraic_number_theory_008",
      "series_sum_004",
      "series_sum_009",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_046",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_074",
      "integral_common_004",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_030",
      "integral_common_046",
      "integral_common_063",
      "fourier_001",
      "fourier_004",
      "fourier_005",
      "fourier_009",
      "fourier_010",
      "astro_003",
      "astro_014"
    ],
    "5": [
      "series_sum_005",
      "integral_common_005",
      "astro_011",
      "astro_012",
      "astro_015"
    ],
    "6": [
      "series_sum_006",
      "series_sum_043",
      "series_sum_044",
      "series_sum_076",
      "integral_common_006",
      "integral_common_048",
      "integral_common_061"
    ],
    "7": [
      "series_sum_007",
      "integral_common_007"
    ],
    "8": [
      "series_sum_008",
      "series_sum_046",
      "series_sum_047",
      "series_sum_074",
      "integral_common_008",
      "integral_common_035",
      "integral_common_049"
    ],
    "9": [
      "series_sum_009",
      "integral_common_009"
    ],
    "10": [
      "high_chem_009",
      "series_sum_010",
      "integral_common_010"
    ],
    "11": [
      "series_sum_011",
      "integral_common_011"
    ],
    "12": [
      "high_geo_003",
      "eng_005",
      "series_sum_012",
      "series_sum_043",
      "series_sum_078",
      "integral_common_012",
      "integral_common_046",
      "integral_common_047",
      "integral_common_059",
      "fourier_006"
    ],
    "13": [
      "series_sum_013",
      "integral_common_013"
    ],
    "14": [
      "series_sum_014",
      "integral_common_014"
    ],
    "15": [
      "series_sum_015",
      "integral_common_015",
      "integral_common_064"
    ],
    "16": [
      "series_sum_016",
      "integral_common_016"
    ],
    "17": [
      "series_sum_017",
      "integral_common_017"
    ],
    "18": [
      "series_sum_018",
      "integral_common_018"
    ],
    "19": [
      "series_sum_019",
      "integral_common_019"
    ],
    "20": [
      "series_sum_020",
      "integral_common_020"
    ],
    "21": [
      "series_sum_021",
      "integral_common_021"
    ],
    "22": [
      "series_sum_022",
      "integral_common_022"
    ],
    "23": [
      "series_sum_023",
      "integral_common_023"
    ],
    "24": [
      "series_sum_024",
      "integral_common_024"
    ],
    "25": [
      "series_sum_025",
      "integral_common_025"
    ],
    "26": [
      "series_sum_026",
      "integral_common_026"
    ],
    "27": [
      "series_sum_027",
      "integral_common_027"
    ],
    "28": [
      "series_sum_028",
      "integral_common_028"
    ],
    "29": [
      "series_sum_029",
      "integral_common_029"
    ],
    "30": [
      "series_sum_030",
      "integral_common_030"
    ],
    "31": [
      "series_sum_031",
      "integral_common_031"
    ],
    "32": [
      "series_sum_032",
      "integral_common_032"
    ],
    "33": [
      "series_sum_033",
      "integral_common_033"
    ],
    "34": [
      "series_sum_034",
      "integral_common_034"
    ],
    "35": [
      "series_sum_035",
      "integral_common_035"
    ],
    "36": [
      "series_sum_036",
      "integral_common_036"
    ],
    "37": [
      "series_sum_037",
      "integral_common_037"
    ],
    "38": [
      "series_sum_038",
      "integral_common_038"
    ],
    "39": [
      "series_sum_039",
      "integral_common_039"
    ],
    "40": [
      "series_sum_040",
      "integral_common_040"
    ],
    "41": [
      "series_sum_041",
      "integral_common_041"
    ],
    "42": [
      "series_sum_042",
      "integral_common_042"
    ],
    "43": [
      "series_sum_043",
      "integral_common_043"
    ],
    "44": [
      "series_sum_044",
      "integral_common_044"
    ],
    "45": [
      "series_sum_045",
      "integral_common_045"
    ],
    "46": [
      "series_sum_046",
      "integral_common_046"
    ],
    "47": [
      "series_sum_047",
      "integral_common_047"
    ],
    "48": [
      "series_sum_048",
      "integral_common_048"
    ],
    "49": [
      "series_sum_049",
      "integral_common_049"
    ],
    "50": [
      "series_sum_050",
      "integral_common_050"
    ],
    "51": [
      "series_sum_051",
      "integral_common_051"
    ],
    "52": [
      "series_sum_052",
      "integral_common_052"
    ],
    "53": [
      "series_sum_053",
      "integral_common_053"
    ],
    "54": [
      "series_sum_054",
      "integral_common_054"
    ],
    "55": [
      "series_sum_055",
      "integral_common_055"
    ],
    "56": [
      "series_sum_056",
      "integral_common_056"
    ],
    "57": [
      "series_sum_057",
      "integral_common_057"
    ],
    "58": [
      "series_sum_058",
      "integral_common_058"
    ],
    "59": [
      "series_sum_059",
      "integral_common_059"
    ],
    "60": [
      "unit_005",
      "series_sum_060",
      "integral_common_060"
    ],
    "61": [
      "series_sum_061",
      "integral_common_061"
    ],
    "62": [
      "series_sum_062",
      "integral_common_062"
    ],
    "63": [
      "series_sum_063",
      "integral_common_063"
    ],
    "64": [
      "eng_006",
      "series_sum_064",
      "integral_common_064"
    ],
    "65": [
      "series_sum_065"
    ],
    "66": [
      "series_sum_066"
    ],
    "67": [
      "series_sum_067"
    ],
    "68": [
      "series_sum_068"
    ],
    "69": [
      "series_sum_069"
    ],
    "70": [
      "series_sum_070"
    ],
    "71": [
      "series_sum_071"
    ],
    "72": [
      "finance_013",
      "series_sum_072"
    ],
    "73": [
      "series_sum_073"
    ],
    "74": [
      "series_sum_074"
    ],
    "75": [
      "series_sum_075"
    ],
    "76": [
      "series_sum_076"
    ],
    "77": [
      "series_sum_077"
    ],
    "78": [
      "series_sum_078"
    ],
    "79": [
      "series_sum_079"
    ],
    "80": [
      "series_sum_080"
    ],
    "81": [
      "series_sum_081"
    ],
    "82": [
      "series_sum_082"
    ],
    "90": [
      "series_sum_077"
    ],
    "100": [
      "primary_math_003",
      "primary_math_004",
      "middle_phy_007",
      "middle_chem_003",
      "eng_013",
      "finance_007",
      "finance_008"
    ],
    "180": [
      "middle_geo_001",
      "middle_geo_003",
      "middle_geo_006"
    ],
    "360": [
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006"
    ],
    "456": [
      "astro_020"
    ],
    "945": [
      "series_sum_080"
    ],
    "1000": [
      "unit_001",
      "unit_003",
      "unit_004",
      "high_chem_003"
    ],
    "2337": [
      "series_sum_047"
    ],
    "3600": [
      "unit_005"
    ],
    "6449": [
      "series_sum_076"
    ],
    "10000": [
      "unit_002"
    ],
    "29128": [
      "series_sum_081"
    ],
    "36398": [
      "series_sum_051"
    ],
    "100000": [
      "unit_001"
    ],
    "285398": [
      "series_sum_061"
    ],
    "391235": [
      "series_sum_074"
    ],
    "822467": [
      "series_sum_078"
    ],
    "915965": [
      "series_sum_079"
    ],
    "1000000": [
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004"
    ],
    "勾股定理": [
      "math_001"
    ],
    "a": [
      "math_001",
      "math_002",
      "math_002b",
      "physics_001",
      "primary_math_001",
      "primary_math_002",
      "primary_math_003",
      "primary_math_004",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_009",
      "primary_geo_010",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_003",
      "middle_alg_004",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_alg_010",
      "middle_geo_001",
      "middle_geo_013",
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_trig_010",
      "high_trig_011",
      "high_geo_003",
      "high_geo_004",
      "high_geo_005",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_chem_005",
      "high_chem_006",
      "high_chem_012",
      "calc_limit_001",
      "calc_integral_003",
      "calc_integral_004",
      "calc_series_001",
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "stat_007",
      "eng_001",
      "eng_010",
      "eng_011",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "linear_matrix_005",
      "linear_matrix_006",
      "linear_eigen_002",
      "math_analysis_004",
      "math_analysis_005",
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_006",
      "number_theory_008",
      "number_theory_009",
      "integral_common_001",
      "integral_common_002",
      "integral_common_008",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_030",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_039",
      "integral_common_040",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_051",
      "integral_common_052",
      "integral_common_060",
      "integral_common_062",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_chebyshev",
      "theorem_euler_maclaurin",
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_005",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010"
    ],
    "b": [
      "math_001",
      "math_002",
      "primary_math_001",
      "primary_math_002",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_007",
      "primary_geo_009",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_003",
      "middle_alg_004",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_010",
      "middle_geo_001",
      "middle_geo_013",
      "high_func_004",
      "high_trig_010",
      "high_trig_011",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_022",
      "high_chem_005",
      "calc_integral_003",
      "calc_integral_004",
      "linear_matrix_001",
      "linear_matrix_002",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "stat_007",
      "eng_005",
      "finance_018",
      "calc_integral_007",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_034",
      "calc_integral_050",
      "calc_integral_051",
      "calc_series_004",
      "calc_series_008",
      "linear_matrix_006",
      "math_analysis_004",
      "math_analysis_005",
      "number_theory_001",
      "number_theory_002",
      "series_sum_075",
      "integral_common_001",
      "integral_common_002",
      "integral_common_009",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_022",
      "integral_common_023",
      "integral_common_026",
      "integral_common_027",
      "integral_common_036",
      "integral_common_042",
      "integral_common_043",
      "integral_common_051",
      "integral_common_052",
      "integral_common_063",
      "theorem_chebyshev",
      "theorem_euler_maclaurin",
      "astro_001",
      "astro_009"
    ],
    "c": [
      "math_001",
      "math_002",
      "primary_math_001",
      "primary_math_002",
      "primary_geo_001",
      "primary_geo_003",
      "primary_geo_008",
      "primary_geo_009",
      "middle_alg_006",
      "middle_alg_010",
      "middle_geo_001",
      "middle_geo_013",
      "middle_phy_009",
      "high_func_004",
      "high_trig_010",
      "high_trig_011",
      "high_phy_017",
      "high_chem_002",
      "high_chem_003",
      "high_chem_004",
      "high_chem_005",
      "calc_integral_001",
      "calc_integral_002",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "finance_009",
      "finance_010",
      "calc_integral_007",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_022",
      "calc_integral_026",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_ode_003",
      "prob_dist_001",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "algebraic_number_theory_001",
      "astro_016",
      "astro_017",
      "astro_019"
    ],
    "数学": [
      "math_001",
      "math_002",
      "math_002b",
      "math_003",
      "primary_math_001",
      "primary_math_002",
      "primary_math_003",
      "primary_math_004",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_008",
      "primary_geo_009",
      "primary_geo_010",
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_003",
      "middle_alg_004",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_alg_010",
      "middle_geo_001",
      "middle_geo_002",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_geo_013",
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "high_geo_001",
      "high_geo_002",
      "high_geo_003",
      "high_geo_004",
      "high_geo_005",
      "high_geo_008",
      "high_geo_009",
      "high_geo_010",
      "high_geo_011",
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_derivative_008",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_integral_053",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "linear_matrix_005",
      "linear_matrix_006",
      "linear_vector_001",
      "linear_vector_002",
      "linear_eigen_002",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_002",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010",
      "math_topology_001",
      "math_algebra_001",
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_001",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_gauss_digamma",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev",
      "theorem_euler_maclaurin"
    ],
    "几何": [
      "math_001",
      "math_003",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_008",
      "primary_geo_009",
      "primary_geo_010",
      "middle_geo_001",
      "middle_geo_002",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_geo_013"
    ],
    "常用公式": [
      "math_001",
      "math_002",
      "math_002b",
      "math_003",
      "physics_001",
      "physics_002",
      "physics_003",
      "chemistry_001",
      "stat_001",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_003",
      "middle_alg_004",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_alg_010",
      "middle_geo_001",
      "middle_geo_002",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_geo_013",
      "middle_phy_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_008",
      "middle_phy_009",
      "middle_phy_010",
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "middle_chem_007",
      "middle_chem_008",
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "high_geo_001",
      "high_geo_002",
      "high_geo_003",
      "high_geo_004",
      "high_geo_005",
      "high_geo_008",
      "high_geo_009",
      "high_geo_010",
      "high_geo_011",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_011",
      "high_phy_012",
      "high_phy_013",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_021",
      "high_phy_022",
      "high_chem_001",
      "high_chem_002",
      "high_chem_003",
      "high_chem_004",
      "high_chem_005",
      "high_chem_006",
      "high_chem_007",
      "high_chem_008",
      "high_chem_009",
      "high_chem_010",
      "high_chem_011",
      "high_chem_012",
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "stat_002",
      "stat_003",
      "stat_004",
      "stat_005",
      "stat_006",
      "stat_007",
      "stat_008",
      "stat_009",
      "stat_010",
      "eng_001",
      "eng_002",
      "eng_003",
      "eng_004",
      "eng_005",
      "eng_006",
      "eng_007",
      "eng_008",
      "eng_009",
      "eng_010",
      "eng_011",
      "eng_013",
      "eng_014",
      "eng_015",
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "finance_007",
      "finance_008",
      "finance_009",
      "finance_010",
      "finance_011",
      "finance_012",
      "finance_013",
      "finance_014",
      "finance_015",
      "finance_016",
      "finance_017",
      "finance_018",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_derivative_008",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_integral_053",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "linear_matrix_005",
      "linear_matrix_006",
      "linear_vector_001",
      "linear_vector_002",
      "linear_eigen_002",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_002",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010",
      "math_topology_001",
      "math_algebra_001",
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_001",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010",
      "astro_011",
      "astro_012",
      "astro_013",
      "astro_014",
      "astro_015",
      "astro_016",
      "astro_017",
      "astro_018",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "必背公式": [
      "math_001",
      "math_002",
      "math_002b",
      "physics_001",
      "chemistry_001",
      "primary_math_001",
      "primary_math_002",
      "primary_math_003",
      "primary_math_004",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_008",
      "primary_geo_009",
      "primary_geo_010",
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_geo_001",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_geo_013",
      "middle_phy_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_008",
      "middle_phy_009",
      "middle_phy_010",
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "middle_chem_007",
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "high_geo_001",
      "high_geo_002",
      "high_geo_004",
      "high_geo_008",
      "high_geo_009",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_011",
      "high_phy_012",
      "high_phy_013",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_021",
      "high_phy_022",
      "high_chem_001",
      "high_chem_002",
      "high_chem_003",
      "high_chem_004",
      "high_chem_005",
      "high_chem_006",
      "high_chem_007",
      "high_chem_008",
      "high_chem_009",
      "high_chem_010",
      "high_chem_011",
      "high_chem_012",
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "stat_002",
      "stat_003",
      "stat_006",
      "stat_007",
      "stat_008",
      "eng_001",
      "eng_002",
      "eng_003",
      "eng_007",
      "eng_008",
      "eng_009",
      "eng_011",
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_007",
      "finance_009",
      "finance_011",
      "finance_012",
      "finance_014",
      "calc_derivative_006",
      "calc_integral_008",
      "calc_integral_012",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_026",
      "calc_integral_031",
      "calc_integral_033",
      "calc_integral_035",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_048",
      "calc_ode_001",
      "calc_ode_003",
      "calc_ode_004",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "linear_matrix_005",
      "linear_vector_001",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_006",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_007",
      "sobolev_008",
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_010",
      "algebraic_number_theory_003",
      "algebraic_number_theory_006",
      "series_sum_001",
      "series_sum_011",
      "series_sum_020",
      "series_sum_022",
      "series_sum_024",
      "series_sum_076",
      "integral_common_020",
      "integral_common_021",
      "integral_common_032",
      "theorem_euler_maclaurin",
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_004",
      "astro_006",
      "astro_011",
      "astro_013",
      "astro_015",
      "astro_016",
      "astro_018"
    ],
    "一元二次方程求根公式": [
      "math_002"
    ],
    "x": [
      "math_002",
      "stat_001",
      "middle_alg_005",
      "middle_alg_006",
      "high_func_001",
      "high_func_002",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_phy_005",
      "high_phy_013",
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "stat_002",
      "stat_003",
      "stat_004",
      "stat_005",
      "stat_006",
      "stat_007",
      "stat_008",
      "stat_009",
      "stat_010",
      "calc_derivative_006",
      "calc_derivative_008",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_integral_053",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_005",
      "calc_series_008",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_002",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006",
      "sobolev_010",
      "number_theory_002",
      "number_theory_006",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_007",
      "series_sum_010",
      "series_sum_011",
      "series_sum_013",
      "series_sum_016",
      "series_sum_017",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_027",
      "series_sum_028",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_048",
      "series_sum_049",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_079",
      "series_sum_081",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_021",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev",
      "theorem_euler_maclaurin"
    ],
    "ac": [
      "math_002",
      "primary_math_002"
    ],
    "代数": [
      "math_002",
      "math_002b",
      "middle_alg_001",
      "middle_alg_002",
      "middle_alg_003",
      "middle_alg_004",
      "middle_alg_005",
      "middle_alg_006",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_alg_010"
    ],
    "等比数列求和公式": [
      "math_002b"
    ],
    "s": [
      "math_002b",
      "math_003",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_002",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "unit_005",
      "middle_geo_005",
      "middle_geo_008",
      "middle_geo_010",
      "middle_geo_012",
      "middle_phy_002",
      "middle_phy_005",
      "high_geo_001",
      "high_geo_002",
      "high_geo_009",
      "high_geo_011",
      "high_phy_002",
      "high_phy_003",
      "high_phy_017",
      "high_phy_022",
      "prob_basic_001",
      "univ_phy_thermo_003",
      "univ_chem_thermo_001",
      "stat_004",
      "stat_005",
      "stat_007",
      "stat_010",
      "calc_integral_011",
      "calc_integral_028",
      "sobolev_010",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "q": [
      "math_002b",
      "middle_phy_009",
      "middle_phy_010",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_020",
      "high_chem_011",
      "univ_phy_electro_002",
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "eng_010",
      "eng_011",
      "calc_integral_007",
      "calc_integral_050",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "sobolev_005",
      "sobolev_009",
      "number_theory_010",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056"
    ],
    "n": [
      "math_002b",
      "chemistry_001",
      "stat_001",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_geo_003",
      "middle_geo_004",
      "middle_geo_005",
      "middle_geo_006",
      "middle_chem_008",
      "high_func_003",
      "high_func_005",
      "high_phy_021",
      "high_chem_001",
      "high_chem_002",
      "high_chem_011",
      "calc_derivative_002",
      "calc_derivative_004",
      "calc_integral_002",
      "calc_integral_003",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_002",
      "linear_det_003",
      "prob_basic_001",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "stat_002",
      "stat_003",
      "stat_004",
      "stat_005",
      "stat_010",
      "eng_015",
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "finance_008",
      "finance_009",
      "finance_010",
      "finance_011",
      "finance_012",
      "finance_014",
      "finance_015",
      "calc_integral_032",
      "calc_integral_036",
      "calc_integral_038",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_048",
      "calc_series_005",
      "calc_series_006",
      "calc_series_008",
      "calc_complex_003",
      "calc_complex_004",
      "prob_dist_001",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_009",
      "sobolev_010",
      "number_theory_004",
      "number_theory_005",
      "algebraic_number_theory_001",
      "algebraic_number_theory_004",
      "algebraic_number_theory_007",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_008",
      "integral_common_009",
      "integral_common_018",
      "integral_common_019",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_031",
      "integral_common_044",
      "integral_common_056",
      "integral_common_063",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_gauss_digamma",
      "theorem_chebyshev",
      "theorem_euler_maclaurin"
    ],
    "圆的面积公式": [
      "math_003"
    ],
    "r": [
      "math_003",
      "physics_003",
      "chemistry_001",
      "primary_geo_008",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_geo_010",
      "middle_geo_011",
      "middle_geo_012",
      "middle_phy_011",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "high_trig_010",
      "high_geo_008",
      "high_geo_009",
      "high_geo_010",
      "high_geo_011",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_014",
      "high_phy_015",
      "high_chem_011",
      "high_chem_012",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "stat_006",
      "stat_007",
      "eng_014",
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "finance_009",
      "finance_011",
      "finance_014",
      "finance_015",
      "finance_016",
      "calc_derivative_007",
      "calc_ode_004",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "linear_matrix_005",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "theorem_gauss_digamma",
      "astro_001",
      "astro_002",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_010",
      "astro_016",
      "astro_017",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "牛顿第二定律": [
      "physics_001"
    ],
    "f": [
      "physics_001",
      "physics_003",
      "middle_alg_006",
      "middle_phy_002",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_008",
      "high_phy_006",
      "high_phy_009",
      "high_phy_014",
      "high_phy_015",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_chem_011",
      "calc_limit_001",
      "calc_derivative_001",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_series_001",
      "calc_series_002",
      "prob_rv_001",
      "stat_008",
      "eng_001",
      "eng_014",
      "finance_009",
      "finance_010",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_049",
      "calc_ode_001",
      "calc_ode_002",
      "calc_series_008",
      "prob_dist_003",
      "math_analysis_001",
      "math_analysis_002",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006",
      "algebraic_number_theory_009",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_euler_maclaurin",
      "astro_001",
      "astro_014",
      "astro_015"
    ],
    "ma": [
      "physics_001",
      "integral_common_001",
      "integral_common_002"
    ],
    "物理": [
      "physics_001",
      "physics_002",
      "physics_003",
      "middle_phy_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_008",
      "middle_phy_009",
      "middle_phy_010",
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_011",
      "high_phy_012",
      "high_phy_013",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_021",
      "high_phy_022",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010",
      "astro_011",
      "astro_012",
      "astro_013",
      "astro_014",
      "astro_015",
      "astro_016",
      "astro_017",
      "astro_018",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "力学": [
      "physics_001",
      "physics_002",
      "physics_003",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_011",
      "high_phy_012",
      "high_phy_013"
    ],
    "m": [
      "physics_001",
      "physics_002",
      "physics_003",
      "unit_001",
      "unit_002",
      "unit_003",
      "middle_alg_007",
      "middle_alg_008",
      "middle_alg_009",
      "middle_phy_001",
      "middle_phy_009",
      "middle_phy_010",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "high_func_003",
      "high_phy_006",
      "high_phy_007",
      "high_phy_008",
      "high_phy_009",
      "high_phy_010",
      "high_phy_012",
      "high_chem_001",
      "high_chem_003",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_003",
      "eng_004",
      "finance_014",
      "finance_015",
      "finance_016",
      "calc_integral_036",
      "calc_integral_048",
      "number_theory_006",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_009",
      "integral_common_010",
      "integral_common_027",
      "theorem_gauss_digamma",
      "theorem_chebyshev",
      "astro_003",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_011",
      "astro_012",
      "astro_015",
      "astro_019"
    ],
    "动能公式": [
      "physics_002"
    ],
    "ek": [
      "physics_002",
      "high_phy_011",
      "univ_phy_relativity_004"
    ],
    "mv": [
      "physics_002",
      "high_phy_006",
      "high_phy_007",
      "high_phy_009",
      "univ_phy_quantum_001",
      "astro_007"
    ],
    "v": [
      "physics_002",
      "chemistry_001",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_009",
      "primary_geo_010",
      "middle_geo_007",
      "middle_geo_009",
      "middle_geo_011",
      "middle_phy_001",
      "middle_phy_004",
      "middle_phy_006",
      "high_geo_001",
      "high_geo_002",
      "high_geo_003",
      "high_geo_004",
      "high_geo_005",
      "high_geo_008",
      "high_geo_010",
      "high_phy_001",
      "high_phy_002",
      "high_phy_003",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_007",
      "high_phy_009",
      "high_phy_010",
      "high_phy_020",
      "high_chem_001",
      "high_chem_002",
      "high_chem_004",
      "calc_derivative_003",
      "calc_integral_006",
      "linear_eigen_001",
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_004",
      "univ_phy_relativity_005",
      "univ_phy_quantum_001",
      "univ_phy_quantum_003",
      "eng_008",
      "eng_009",
      "calc_derivative_008",
      "calc_integral_012",
      "calc_integral_026",
      "calc_integral_027",
      "sobolev_008",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_016",
      "astro_017",
      "astro_018"
    ],
    "万有引力定律": [
      "physics_003"
    ],
    "g": [
      "physics_003",
      "unit_004",
      "middle_phy_003",
      "middle_phy_004",
      "high_phy_004",
      "high_phy_007",
      "high_phy_008",
      "high_phy_012",
      "calc_derivative_003",
      "calc_integral_005",
      "univ_chem_thermo_001",
      "eng_008",
      "calc_integral_011",
      "calc_integral_021",
      "calc_integral_026",
      "calc_ode_001",
      "math_analysis_005",
      "math_analysis_006",
      "astro_003",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_019"
    ],
    "理想气体状态方程": [
      "chemistry_001"
    ],
    "pv": [
      "chemistry_001",
      "finance_001",
      "finance_002",
      "finance_008"
    ],
    "nrt": [
      "chemistry_001"
    ],
    "化学": [
      "chemistry_001",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "middle_chem_007",
      "middle_chem_008",
      "high_chem_001",
      "high_chem_002",
      "high_chem_003",
      "high_chem_004",
      "high_chem_005",
      "high_chem_006",
      "high_chem_007",
      "high_chem_008",
      "high_chem_009",
      "high_chem_010",
      "high_chem_011",
      "high_chem_012",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003"
    ],
    "物理化学": [
      "chemistry_001",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003"
    ],
    "p": [
      "chemistry_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_006",
      "middle_phy_012",
      "middle_phy_013",
      "high_phy_009",
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_chem_thermo_003",
      "eng_008",
      "finance_009",
      "finance_010",
      "finance_014",
      "finance_015",
      "finance_017",
      "finance_018",
      "calc_integral_007",
      "calc_integral_050",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "linear_matrix_006",
      "prob_dist_001",
      "prob_dist_002",
      "prob_stat_002",
      "sobolev_001",
      "sobolev_002",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010",
      "number_theory_003",
      "number_theory_005",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_009",
      "integral_common_001",
      "integral_common_014",
      "integral_common_015",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "theorem_chebyshev",
      "astro_008",
      "astro_020"
    ],
    "t": [
      "chemistry_001",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "unit_004",
      "middle_phy_006",
      "middle_phy_009",
      "middle_phy_012",
      "high_phy_001",
      "high_phy_002",
      "high_phy_004",
      "high_phy_005",
      "high_phy_006",
      "high_phy_008",
      "high_phy_009",
      "high_phy_021",
      "high_chem_004",
      "high_chem_011",
      "high_chem_012",
      "univ_phy_relativity_001",
      "univ_phy_quantum_003",
      "univ_phy_electro_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "stat_010",
      "eng_010",
      "eng_011",
      "eng_014",
      "finance_015",
      "calc_derivative_006",
      "calc_integral_008",
      "calc_integral_025",
      "calc_ode_005",
      "astro_002",
      "astro_003"
    ],
    "平均值公式": [
      "stat_001"
    ],
    "统计": [
      "stat_001",
      "stat_002",
      "stat_003",
      "stat_004",
      "stat_005",
      "stat_006",
      "stat_007",
      "stat_008",
      "stat_009",
      "stat_010",
      "prob_stat_001",
      "prob_stat_002"
    ],
    "描述统计": [
      "stat_001",
      "stat_002",
      "stat_003",
      "stat_004",
      "stat_005",
      "stat_009"
    ],
    "分数加法": [
      "primary_math_001"
    ],
    "d": [
      "primary_math_001",
      "primary_math_002",
      "primary_geo_008",
      "middle_alg_006",
      "middle_alg_010",
      "high_phy_017",
      "high_chem_005",
      "calc_derivative_004",
      "prob_rv_002",
      "prob_rv_003",
      "univ_phy_electro_002",
      "eng_006",
      "eng_009",
      "calc_integral_026",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_stat_001",
      "sobolev_001",
      "sobolev_002",
      "sobolev_008",
      "number_theory_002",
      "algebraic_number_theory_005",
      "algebraic_number_theory_008",
      "algebraic_number_theory_010",
      "astro_002",
      "astro_008",
      "astro_011",
      "astro_012",
      "astro_013",
      "astro_014",
      "astro_018",
      "astro_020"
    ],
    "ad": [
      "primary_math_001",
      "middle_alg_010"
    ],
    "bc": [
      "primary_math_001",
      "middle_alg_010",
      "high_trig_011"
    ],
    "bd": [
      "primary_math_001",
      "primary_math_002",
      "middle_alg_010"
    ],
    "分数运算": [
      "primary_math_001",
      "primary_math_002"
    ],
    "基础公式": [
      "primary_math_001",
      "primary_math_002",
      "primary_math_003",
      "primary_math_004",
      "primary_math_005",
      "primary_math_006",
      "primary_math_007",
      "primary_geo_001",
      "primary_geo_002",
      "primary_geo_003",
      "primary_geo_004",
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "primary_geo_008",
      "primary_geo_009",
      "primary_geo_010",
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005"
    ],
    "分数乘法": [
      "primary_math_002"
    ],
    "百分数转小数": [
      "primary_math_003"
    ],
    "百分数": [
      "primary_math_003",
      "primary_math_004"
    ],
    "小数转百分数": [
      "primary_math_004"
    ],
    "速度公式": [
      "primary_math_005"
    ],
    "速度": [
      "primary_math_005",
      "primary_math_006",
      "primary_math_007"
    ],
    "路程": [
      "primary_math_005",
      "primary_math_006",
      "primary_math_007"
    ],
    "时间": [
      "primary_math_005",
      "primary_math_006",
      "primary_math_007"
    ],
    "应用题": [
      "primary_math_005",
      "primary_math_006",
      "primary_math_007"
    ],
    "路程公式": [
      "primary_math_006"
    ],
    "时间公式": [
      "primary_math_007"
    ],
    "长方形周长": [
      "primary_geo_001"
    ],
    "长方形面积": [
      "primary_geo_002"
    ],
    "ab": [
      "primary_geo_002",
      "middle_alg_001",
      "middle_alg_003",
      "middle_alg_004",
      "linear_matrix_002",
      "prob_basic_002",
      "prob_basic_003",
      "integral_common_042",
      "integral_common_043",
      "integral_common_052"
    ],
    "正方形周长": [
      "primary_geo_003"
    ],
    "正方形面积": [
      "primary_geo_004"
    ],
    "三角形面积": [
      "primary_geo_005"
    ],
    "ah": [
      "primary_geo_005",
      "primary_geo_006"
    ],
    "h": [
      "primary_geo_005",
      "primary_geo_006",
      "primary_geo_007",
      "unit_005",
      "middle_geo_007",
      "middle_geo_008",
      "middle_geo_009",
      "middle_phy_003",
      "high_geo_001",
      "high_geo_002",
      "high_geo_008",
      "high_geo_010",
      "high_geo_011",
      "high_phy_004",
      "high_phy_012",
      "high_chem_006",
      "high_chem_007",
      "high_chem_009",
      "calc_derivative_001",
      "univ_phy_quantum_001",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "eng_005",
      "eng_008",
      "eng_010",
      "sobolev_003",
      "sobolev_007",
      "algebraic_number_theory_005",
      "astro_002",
      "astro_008",
      "astro_009",
      "astro_018"
    ],
    "平行四边形面积": [
      "primary_geo_006"
    ],
    "梯形面积": [
      "primary_geo_007"
    ],
    "圆的周长": [
      "primary_geo_008"
    ],
    "长方体体积": [
      "primary_geo_009"
    ],
    "abc": [
      "primary_geo_009"
    ],
    "正方体体积": [
      "primary_geo_010"
    ],
    "长度单位换算": [
      "unit_001"
    ],
    "千米": [
      "unit_001"
    ],
    "km": [
      "unit_001",
      "unit_002"
    ],
    "米": [
      "unit_001"
    ],
    "厘米": [
      "unit_001"
    ],
    "cm": [
      "unit_001",
      "unit_002",
      "middle_phy_009"
    ],
    "毫米": [
      "unit_001"
    ],
    "mm": [
      "unit_001"
    ],
    "单位换算": [
      "unit_001",
      "unit_002",
      "unit_003",
      "unit_004",
      "unit_005"
    ],
    "面积单位换算": [
      "unit_002"
    ],
    "平方千米": [
      "unit_002"
    ],
    "平方米": [
      "unit_002"
    ],
    "平方厘米": [
      "unit_002"
    ],
    "体积单位换算": [
      "unit_003"
    ],
    "立方米": [
      "unit_003"
    ],
    "升": [
      "unit_003"
    ],
    "l": [
      "unit_003",
      "middle_geo_005",
      "middle_geo_006",
      "middle_geo_010",
      "middle_phy_008",
      "high_geo_009",
      "high_phy_018",
      "high_phy_019",
      "calc_limit_001",
      "univ_phy_relativity_002",
      "eng_002",
      "eng_007",
      "eng_011",
      "calc_integral_013",
      "calc_series_008",
      "sobolev_001",
      "sobolev_004",
      "sobolev_005",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010",
      "algebraic_number_theory_005",
      "algebraic_number_theory_009",
      "astro_014"
    ],
    "毫升": [
      "unit_003"
    ],
    "ml": [
      "unit_003"
    ],
    "质量单位换算": [
      "unit_004"
    ],
    "吨": [
      "unit_004"
    ],
    "千克": [
      "unit_004"
    ],
    "kg": [
      "unit_004"
    ],
    "克": [
      "unit_004"
    ],
    "时间单位换算": [
      "unit_005"
    ],
    "小时": [
      "unit_005"
    ],
    "分钟": [
      "unit_005"
    ],
    "min": [
      "unit_005"
    ],
    "秒": [
      "unit_005"
    ],
    "完全平方公式": [
      "middle_alg_001"
    ],
    "平方差公式": [
      "middle_alg_002"
    ],
    "立方和公式": [
      "middle_alg_003"
    ],
    "立方差公式": [
      "middle_alg_004"
    ],
    "一元一次方程": [
      "middle_alg_005"
    ],
    "ax": [
      "middle_alg_005",
      "middle_alg_006",
      "calc_integral_034",
      "calc_integral_050",
      "number_theory_002",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_039",
      "integral_common_040",
      "integral_common_060",
      "integral_common_062",
      "fourier_011",
      "fourier_012",
      "fourier_013"
    ],
    "解为": [
      "middle_alg_005"
    ],
    "二元一次方程组": [
      "middle_alg_006"
    ],
    "代入法": [
      "middle_alg_006"
    ],
    "by": [
      "middle_alg_006",
      "number_theory_002"
    ],
    "dx": [
      "middle_alg_006",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "prob_rv_001",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_integral_053",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "sobolev_002",
      "sobolev_008",
      "series_sum_079",
      "series_sum_081",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev",
      "theorem_euler_maclaurin"
    ],
    "ey": [
      "middle_alg_006"
    ],
    "e": [
      "middle_alg_006",
      "high_phy_015",
      "high_phy_021",
      "high_chem_010",
      "high_chem_011",
      "calc_limit_003",
      "calc_derivative_002",
      "calc_integral_002",
      "calc_series_003",
      "prob_rv_001",
      "prob_rv_002",
      "univ_phy_relativity_003",
      "univ_phy_electro_001",
      "univ_phy_electro_002",
      "stat_008",
      "eng_003",
      "eng_007",
      "finance_017",
      "calc_integral_017",
      "calc_integral_037",
      "calc_integral_041",
      "calc_integral_048",
      "calc_integral_051",
      "calc_ode_003",
      "calc_ode_005",
      "calc_complex_001",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_stat_001",
      "algebraic_number_theory_003",
      "algebraic_number_theory_009",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "series_sum_020",
      "series_sum_062",
      "series_sum_063",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_042",
      "integral_common_043",
      "integral_common_045",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_011",
      "astro_001",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010"
    ],
    "y": [
      "middle_alg_006",
      "high_func_001",
      "high_func_002",
      "high_func_005",
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_phy_005",
      "calc_derivative_005",
      "stat_006",
      "stat_007",
      "eng_004",
      "calc_derivative_006",
      "calc_derivative_008",
      "calc_integral_026",
      "calc_integral_027",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "sobolev_010",
      "number_theory_002"
    ],
    "幂的乘法法则": [
      "middle_alg_007"
    ],
    "幂的除法法则": [
      "middle_alg_008"
    ],
    "幂的乘方法则": [
      "middle_alg_009"
    ],
    "分式加减法": [
      "middle_alg_010"
    ],
    "三角形内角和": [
      "middle_geo_001"
    ],
    "三角形外角和": [
      "middle_geo_002"
    ],
    "外角": [
      "middle_geo_002"
    ],
    "不相邻两内角之和": [
      "middle_geo_002"
    ],
    "多边形内角和": [
      "middle_geo_003"
    ],
    "内角和": [
      "middle_geo_003"
    ],
    "多边形外角和": [
      "middle_geo_004"
    ],
    "外角和": [
      "middle_geo_004"
    ],
    "扇形面积": [
      "middle_geo_005"
    ],
    "lr": [
      "middle_geo_005"
    ],
    "扇形弧长": [
      "middle_geo_006"
    ],
    "圆柱体积": [
      "middle_geo_007"
    ],
    "圆柱表面积": [
      "middle_geo_008"
    ],
    "rh": [
      "middle_geo_008",
      "high_geo_011"
    ],
    "圆锥体积": [
      "middle_geo_009"
    ],
    "圆锥侧面积": [
      "middle_geo_010"
    ],
    "rl": [
      "middle_geo_010"
    ],
    "球体积": [
      "middle_geo_011"
    ],
    "球表面积": [
      "middle_geo_012"
    ],
    "相似三角形性质": [
      "middle_geo_013"
    ],
    "对应边成比例": [
      "middle_geo_013"
    ],
    "对应角相等": [
      "middle_geo_013"
    ],
    "密度公式": [
      "middle_phy_001"
    ],
    "基础": [
      "middle_phy_001",
      "middle_phy_002",
      "middle_phy_003",
      "middle_phy_004",
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_008",
      "middle_chem_001",
      "middle_chem_002",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006",
      "middle_chem_007",
      "middle_chem_008",
      "high_chem_001",
      "high_chem_002",
      "high_chem_003"
    ],
    "压强公式": [
      "middle_phy_002"
    ],
    "液体压强公式": [
      "middle_phy_003"
    ],
    "gh": [
      "middle_phy_003",
      "high_phy_004",
      "eng_008"
    ],
    "浮力公式": [
      "middle_phy_004"
    ],
    "阿基米德原理": [
      "middle_phy_004"
    ],
    "浮": [
      "middle_phy_004"
    ],
    "液": [
      "middle_phy_004",
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006"
    ],
    "gv": [
      "middle_phy_004"
    ],
    "排": [
      "middle_phy_004"
    ],
    "功的公式": [
      "middle_phy_005"
    ],
    "w": [
      "middle_phy_005",
      "middle_phy_006",
      "middle_phy_007",
      "middle_phy_012",
      "univ_phy_thermo_001",
      "calc_integral_030",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_009",
      "sobolev_010",
      "algebraic_number_theory_005"
    ],
    "fs": [
      "middle_phy_005"
    ],
    "功率公式": [
      "middle_phy_006"
    ],
    "fv": [
      "middle_phy_006",
      "finance_001",
      "finance_002",
      "finance_008"
    ],
    "机械效率": [
      "middle_phy_007"
    ],
    "有用": [
      "middle_phy_007"
    ],
    "总": [
      "middle_phy_007"
    ],
    "杠杆平衡条件": [
      "middle_phy_008"
    ],
    "比热容公式": [
      "middle_phy_009"
    ],
    "热学": [
      "middle_phy_009",
      "middle_phy_010"
    ],
    "热值公式": [
      "middle_phy_010"
    ],
    "qm": [
      "middle_phy_010"
    ],
    "欧姆定律": [
      "middle_phy_011"
    ],
    "i": [
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "high_phy_018",
      "high_phy_019",
      "calc_integral_003",
      "linear_matrix_001",
      "linear_matrix_004",
      "linear_det_003",
      "linear_eigen_001",
      "prob_basic_004",
      "prob_rv_001",
      "univ_phy_quantum_003",
      "univ_phy_electro_002",
      "eng_004",
      "eng_005",
      "eng_006",
      "eng_007",
      "eng_015",
      "finance_011",
      "finance_012",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "math_analysis_002",
      "algebraic_number_theory_003",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014"
    ],
    "u": [
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "high_phy_017",
      "calc_derivative_003",
      "calc_integral_005",
      "calc_integral_006",
      "univ_phy_thermo_001",
      "calc_derivative_008",
      "calc_ode_002",
      "sobolev_001",
      "sobolev_002",
      "sobolev_007",
      "sobolev_008",
      "sobolev_010"
    ],
    "电学": [
      "middle_phy_011",
      "middle_phy_012",
      "middle_phy_013",
      "middle_phy_014",
      "middle_phy_015",
      "high_phy_014",
      "high_phy_015",
      "high_phy_016",
      "high_phy_017",
      "high_phy_018",
      "high_phy_019",
      "high_phy_020",
      "high_phy_021",
      "high_phy_022",
      "univ_phy_electro_001",
      "univ_phy_electro_002"
    ],
    "电功公式": [
      "middle_phy_012"
    ],
    "uit": [
      "middle_phy_012"
    ],
    "pt": [
      "middle_phy_012"
    ],
    "电功率公式": [
      "middle_phy_013"
    ],
    "ui": [
      "middle_phy_013"
    ],
    "串联电路总电阻": [
      "middle_phy_014"
    ],
    "并联电路总电阻": [
      "middle_phy_015"
    ],
    "质量守恒定律": [
      "middle_chem_001"
    ],
    "反应前各物质质量总和": [
      "middle_chem_001"
    ],
    "反应后各物质质量总和": [
      "middle_chem_001"
    ],
    "相对分子质量": [
      "middle_chem_002"
    ],
    "mr": [
      "middle_chem_002",
      "high_phy_006"
    ],
    "各原子相对原子质量之和": [
      "middle_chem_002"
    ],
    "原子": [
      "middle_chem_002"
    ],
    "质量分数": [
      "middle_chem_003"
    ],
    "质": [
      "middle_chem_003",
      "middle_chem_005",
      "middle_chem_006"
    ],
    "溶质质量": [
      "middle_chem_005"
    ],
    "溶液质量": [
      "middle_chem_006"
    ],
    "剂": [
      "middle_chem_006"
    ],
    "化学方程式配平": [
      "middle_chem_007"
    ],
    "根据质量守恒定律配平": [
      "middle_chem_007"
    ],
    "系数": [
      "middle_chem_007"
    ],
    "原子个数比": [
      "middle_chem_008"
    ],
    "化学式中各元素右下角数字之比": [
      "middle_chem_008"
    ],
    "指数函数": [
      "high_func_001"
    ],
    "函数": [
      "high_func_001",
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "high_func_005"
    ],
    "对数函数": [
      "high_func_002"
    ],
    "log": [
      "high_func_002",
      "high_func_003",
      "high_func_004",
      "calc_integral_018",
      "calc_integral_038",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "theorem_gauss_digamma"
    ],
    "对数运算法则": [
      "high_func_003"
    ],
    "mn": [
      "high_func_003"
    ],
    "nlog": [
      "high_func_003"
    ],
    "换底公式": [
      "high_func_004"
    ],
    "幂函数": [
      "high_func_005"
    ],
    "正弦函数": [
      "high_trig_001"
    ],
    "sin": [
      "high_trig_001",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_phy_019",
      "high_phy_020",
      "calc_limit_002",
      "calc_derivative_002",
      "calc_integral_002",
      "calc_series_003",
      "calc_derivative_007",
      "calc_integral_008",
      "calc_integral_014",
      "calc_integral_016",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_044",
      "calc_integral_048",
      "calc_integral_051",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "trig_hyperbolic_001",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "series_sum_022",
      "series_sum_031",
      "series_sum_032",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_040",
      "series_sum_042",
      "series_sum_045",
      "series_sum_049",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_059",
      "series_sum_062",
      "series_sum_063",
      "series_sum_065",
      "series_sum_067",
      "series_sum_071",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_013",
      "integral_common_015",
      "integral_common_016",
      "integral_common_024",
      "integral_common_025",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_034",
      "integral_common_035",
      "integral_common_037",
      "integral_common_038",
      "integral_common_040",
      "integral_common_041",
      "integral_common_043",
      "integral_common_050",
      "integral_common_057",
      "integral_common_058",
      "integral_common_060",
      "integral_common_062",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_011",
      "fourier_012",
      "theorem_gauss_digamma",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2"
    ],
    "三角函数": [
      "high_trig_001",
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_010",
      "high_trig_011",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006"
    ],
    "余弦函数": [
      "high_trig_002"
    ],
    "cos": [
      "high_trig_002",
      "high_trig_003",
      "high_trig_004",
      "high_trig_005",
      "high_trig_007",
      "high_trig_008",
      "high_trig_009",
      "high_trig_011",
      "high_phy_022",
      "calc_derivative_002",
      "calc_integral_002",
      "calc_series_003",
      "calc_derivative_007",
      "calc_integral_014",
      "calc_integral_016",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_044",
      "calc_integral_051",
      "calc_series_008",
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_005",
      "series_sum_024",
      "series_sum_032",
      "series_sum_033",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_041",
      "series_sum_043",
      "series_sum_044",
      "series_sum_046",
      "series_sum_048",
      "series_sum_052",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_058",
      "series_sum_059",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "integral_common_012",
      "integral_common_014",
      "integral_common_022",
      "integral_common_027",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_042",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "fourier_004",
      "fourier_005",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_013",
      "theorem_gauss_digamma"
    ],
    "正切函数": [
      "high_trig_003"
    ],
    "tan": [
      "high_trig_003",
      "high_trig_004",
      "high_trig_006",
      "high_trig_007",
      "high_trig_008",
      "calc_integral_008",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_035",
      "calc_integral_045",
      "trig_hyperbolic_006",
      "trig_hyperbolic_013",
      "series_sum_042",
      "series_sum_072",
      "integral_common_033"
    ],
    "同角三角函数基本关系": [
      "high_trig_004"
    ],
    "两角和公式": [
      "high_trig_005"
    ],
    "两角差公式": [
      "high_trig_006"
    ],
    "二倍角公式": [
      "high_trig_007"
    ],
    "半角公式": [
      "high_trig_008"
    ],
    "诱导公式": [
      "high_trig_009"
    ],
    "正弦定理": [
      "high_trig_010"
    ],
    "余弦定理": [
      "high_trig_011"
    ],
    "积化和差公式": [
      "high_trig_012"
    ],
    "积化和差": [
      "high_trig_012"
    ],
    "和差化积公式": [
      "high_trig_013"
    ],
    "和差化积": [
      "high_trig_013"
    ],
    "棱柱体积": [
      "high_geo_001"
    ],
    "sh": [
      "high_geo_001",
      "high_geo_002"
    ],
    "立体几何": [
      "high_geo_001",
      "high_geo_002",
      "high_geo_003",
      "high_geo_004",
      "high_geo_005",
      "high_geo_008",
      "high_geo_009",
      "high_geo_010",
      "high_geo_011"
    ],
    "棱锥体积": [
      "high_geo_002"
    ],
    "正四面体体积": [
      "high_geo_003"
    ],
    "正六面体": [
      "high_geo_004"
    ],
    "正方体": [
      "high_geo_004"
    ],
    "体积": [
      "high_geo_004"
    ],
    "正八面体体积": [
      "high_geo_005"
    ],
    "圆台体积": [
      "high_geo_008"
    ],
    "圆台侧面积": [
      "high_geo_009"
    ],
    "球冠体积": [
      "high_geo_010"
    ],
    "球冠面积": [
      "high_geo_011"
    ],
    "椭圆面积": [
      "high_geo_012"
    ],
    "椭圆": [
      "high_geo_012"
    ],
    "匀变速直线运动速度公式": [
      "high_phy_001"
    ],
    "at": [
      "high_phy_001",
      "high_phy_002"
    ],
    "匀变速直线运动位移公式": [
      "high_phy_002"
    ],
    "匀变速直线运动速度位移关系": [
      "high_phy_003"
    ],
    "as": [
      "high_phy_003"
    ],
    "自由落体运动": [
      "high_phy_004"
    ],
    "gt": [
      "high_phy_004",
      "high_phy_005"
    ],
    "平抛运动": [
      "high_phy_005"
    ],
    "向心力公式": [
      "high_phy_006"
    ],
    "万有引力提供向心力": [
      "high_phy_007"
    ],
    "gmm": [
      "high_phy_007",
      "astro_007"
    ],
    "开普勒第三定律": [
      "high_phy_008",
      "astro_003"
    ],
    "gm": [
      "high_phy_008",
      "astro_003",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_019"
    ],
    "常数": [
      "high_phy_008",
      "eng_008",
      "astro_002"
    ],
    "动量定理": [
      "high_phy_009"
    ],
    "ft": [
      "high_phy_009"
    ],
    "动量守恒定律": [
      "high_phy_010"
    ],
    "机械能守恒定律": [
      "high_phy_011"
    ],
    "ep": [
      "high_phy_011",
      "high_phy_012",
      "high_phy_013",
      "high_phy_016"
    ],
    "重力势能": [
      "high_phy_012"
    ],
    "mgh": [
      "high_phy_012"
    ],
    "弹性势能": [
      "high_phy_013"
    ],
    "kx": [
      "high_phy_013"
    ],
    "k": [
      "high_phy_013",
      "high_phy_014",
      "high_chem_005",
      "high_chem_012",
      "linear_matrix_002",
      "univ_chem_thermo_002",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003",
      "eng_011",
      "calc_integral_017",
      "calc_integral_037",
      "calc_complex_004",
      "prob_dist_001",
      "prob_dist_002",
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_009",
      "algebraic_number_theory_002",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010",
      "series_sum_075",
      "theorem_euler_maclaurin"
    ],
    "库仑定律": [
      "high_phy_014"
    ],
    "电场强度": [
      "high_phy_015"
    ],
    "kq": [
      "high_phy_015"
    ],
    "电势能": [
      "high_phy_016"
    ],
    "电容公式": [
      "high_phy_017"
    ],
    "kd": [
      "high_phy_017"
    ],
    "磁感应强度": [
      "high_phy_018"
    ],
    "il": [
      "high_phy_018"
    ],
    "安培力公式": [
      "high_phy_019"
    ],
    "bil": [
      "high_phy_019"
    ],
    "洛伦兹力": [
      "high_phy_020"
    ],
    "qvb": [
      "high_phy_020"
    ],
    "法拉第电磁感应定律": [
      "high_phy_021"
    ],
    "磁通量": [
      "high_phy_022"
    ],
    "bs": [
      "high_phy_022"
    ],
    "物质的量": [
      "high_chem_001"
    ],
    "na": [
      "high_chem_001"
    ],
    "vm": [
      "high_chem_001"
    ],
    "物质的量浓度": [
      "high_chem_002"
    ],
    "质量分数与物质的量浓度换算": [
      "high_chem_003"
    ],
    "化学反应速率": [
      "high_chem_004"
    ],
    "化学反应": [
      "high_chem_004",
      "high_chem_005",
      "high_chem_006",
      "high_chem_007",
      "high_chem_008",
      "high_chem_009",
      "high_chem_012"
    ],
    "化学平衡常数": [
      "high_chem_005"
    ],
    "电离平衡常数": [
      "high_chem_006"
    ],
    "ka": [
      "high_chem_006",
      "eng_011"
    ],
    "ha": [
      "high_chem_006",
      "eng_010"
    ],
    "ph": [
      "high_chem_007"
    ],
    "值": [
      "high_chem_007",
      "high_chem_008"
    ],
    "lg": [
      "high_chem_007",
      "high_chem_008",
      "astro_011",
      "astro_012",
      "astro_015"
    ],
    "poh": [
      "high_chem_008"
    ],
    "oh": [
      "high_chem_008",
      "high_chem_009"
    ],
    "水的离子积": [
      "high_chem_009"
    ],
    "kw": [
      "high_chem_009"
    ],
    "原电池电动势": [
      "high_chem_010"
    ],
    "电化学": [
      "high_chem_010",
      "high_chem_011"
    ],
    "能斯特方程": [
      "high_chem_011"
    ],
    "rt": [
      "high_chem_011",
      "high_chem_012"
    ],
    "nf": [
      "high_chem_011"
    ],
    "ln": [
      "high_chem_011",
      "calc_derivative_002",
      "calc_integral_002",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003",
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_003",
      "calc_derivative_008",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_020",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_047",
      "calc_integral_050",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_009",
      "series_sum_010",
      "series_sum_013",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_030",
      "series_sum_032",
      "series_sum_033",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_042",
      "series_sum_053",
      "series_sum_055",
      "series_sum_057",
      "series_sum_059",
      "series_sum_066",
      "integral_common_036",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054"
    ],
    "阿伦尼乌斯方程": [
      "high_chem_012"
    ],
    "ae": [
      "high_chem_012"
    ],
    "ea": [
      "high_chem_012"
    ],
    "极限定义": [
      "calc_limit_001"
    ],
    "lim": [
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_integral_003",
      "calc_integral_009",
      "calc_integral_010",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "prob_stat_002",
      "math_analysis_001",
      "math_analysis_006"
    ],
    "高等数学": [
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_derivative_008",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "calc_integral_053",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_006",
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_gauss_digamma",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev",
      "theorem_euler_maclaurin"
    ],
    "极限": [
      "calc_limit_001",
      "calc_limit_002",
      "calc_limit_003",
      "math_analysis_006"
    ],
    "重要极限": [
      "calc_limit_002",
      "calc_limit_003"
    ],
    "导数定义": [
      "calc_derivative_001"
    ],
    "导数": [
      "calc_derivative_001",
      "calc_derivative_002",
      "calc_derivative_003",
      "calc_derivative_004",
      "calc_derivative_005",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_derivative_008"
    ],
    "基本导数公式": [
      "calc_derivative_002"
    ],
    "nx": [
      "calc_derivative_002",
      "calc_integral_036",
      "series_sum_002",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_048",
      "series_sum_049",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "integral_common_031",
      "integral_common_056",
      "fourier_002",
      "fourier_003",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013"
    ],
    "求导法则": [
      "calc_derivative_003"
    ],
    "uv": [
      "calc_derivative_003",
      "calc_integral_006"
    ],
    "高阶导数": [
      "calc_derivative_004"
    ],
    "隐函数求导": [
      "calc_derivative_005"
    ],
    "dy": [
      "calc_derivative_005",
      "calc_derivative_006",
      "calc_derivative_007",
      "calc_integral_026",
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003"
    ],
    "fx": [
      "calc_derivative_005"
    ],
    "fy": [
      "calc_derivative_005"
    ],
    "不定积分定义": [
      "calc_integral_001"
    ],
    "其中": [
      "calc_integral_001",
      "calc_integral_005",
      "linear_eigen_001",
      "stat_007",
      "calc_integral_023",
      "sobolev_004",
      "sobolev_006",
      "sobolev_009",
      "sobolev_010",
      "number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010",
      "theorem_chebyshev",
      "astro_017"
    ],
    "积分": [
      "calc_integral_001",
      "calc_integral_002",
      "calc_integral_003",
      "calc_integral_004",
      "calc_integral_005",
      "calc_integral_006",
      "calc_integral_007",
      "calc_integral_008",
      "calc_integral_009",
      "calc_integral_010",
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_016",
      "calc_integral_017",
      "calc_integral_018",
      "calc_integral_019",
      "calc_integral_020",
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030",
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_039",
      "calc_integral_040",
      "calc_integral_041",
      "calc_integral_042",
      "calc_integral_043",
      "calc_integral_044",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_047",
      "calc_integral_048",
      "calc_integral_049",
      "calc_integral_050",
      "calc_integral_051",
      "calc_integral_052",
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev"
    ],
    "基本积分公式": [
      "calc_integral_002"
    ],
    "定积分定义": [
      "calc_integral_003"
    ],
    "to": [
      "calc_integral_003",
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "linear_matrix_002",
      "linear_det_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "calc_series_008",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013",
      "theorem_gauss_digamma",
      "theorem_euler_maclaurin"
    ],
    "牛顿": [
      "calc_integral_004"
    ],
    "莱布尼茨公式": [
      "calc_integral_004"
    ],
    "换元积分法": [
      "calc_integral_005"
    ],
    "du": [
      "calc_integral_005",
      "calc_integral_006"
    ],
    "分部积分法": [
      "calc_integral_006"
    ],
    "dv": [
      "calc_integral_006"
    ],
    "泰勒级数": [
      "calc_series_001"
    ],
    "级数": [
      "calc_series_001",
      "calc_series_002",
      "calc_series_003",
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007",
      "calc_series_008",
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082",
      "theorem_euler_maclaurin"
    ],
    "麦克劳林级数": [
      "calc_series_002"
    ],
    "常见函数的麦克劳林展开": [
      "calc_series_003"
    ],
    "矩阵加法": [
      "linear_matrix_001"
    ],
    "线性代数": [
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_001",
      "linear_matrix_005",
      "linear_matrix_006",
      "linear_vector_001",
      "linear_vector_002",
      "linear_eigen_002"
    ],
    "矩阵": [
      "linear_matrix_001",
      "linear_matrix_002",
      "linear_matrix_003",
      "linear_matrix_004",
      "linear_matrix_005",
      "linear_matrix_006"
    ],
    "j": [
      "linear_matrix_001",
      "linear_det_003",
      "prob_basic_005",
      "univ_phy_electro_001"
    ],
    "矩阵乘法": [
      "linear_matrix_002"
    ],
    "矩阵转置": [
      "linear_matrix_003"
    ],
    "矩阵的逆": [
      "linear_matrix_004"
    ],
    "aa": [
      "linear_matrix_004"
    ],
    "行列式定义": [
      "linear_det_001",
      "linear_det_002"
    ],
    "阶": [
      "linear_det_001",
      "linear_det_002"
    ],
    "行列式": [
      "linear_det_001",
      "linear_det_002",
      "linear_det_003",
      "linear_eigen_002"
    ],
    "行列式按行": [
      "linear_det_003"
    ],
    "列": [
      "linear_det_003"
    ],
    "展开": [
      "linear_det_003"
    ],
    "特征值与特征向量": [
      "linear_eigen_001"
    ],
    "av": [
      "linear_eigen_001"
    ],
    "特征值": [
      "linear_eigen_001",
      "linear_eigen_002"
    ],
    "概率定义": [
      "prob_basic_001"
    ],
    "概率论": [
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005",
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003",
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004",
      "prob_stat_001",
      "prob_stat_002"
    ],
    "概率": [
      "prob_basic_001",
      "prob_basic_002",
      "prob_basic_003",
      "prob_basic_004",
      "prob_basic_005"
    ],
    "条件概率": [
      "prob_basic_002"
    ],
    "乘法公式": [
      "prob_basic_003"
    ],
    "全概率公式": [
      "prob_basic_004"
    ],
    "贝叶斯公式": [
      "prob_basic_005"
    ],
    "数学期望": [
      "prob_rv_001"
    ],
    "或": [
      "prob_rv_001",
      "calc_integral_049",
      "math_analysis_006",
      "algebraic_number_theory_008",
      "astro_002"
    ],
    "xf": [
      "prob_rv_001"
    ],
    "随机变量": [
      "prob_rv_001",
      "prob_rv_002",
      "prob_rv_003"
    ],
    "方差": [
      "prob_rv_002"
    ],
    "标准差": [
      "prob_rv_003"
    ],
    "相对论时间膨胀": [
      "univ_phy_relativity_001"
    ],
    "相对论": [
      "univ_phy_relativity_001",
      "univ_phy_relativity_002",
      "univ_phy_relativity_003",
      "univ_phy_relativity_004",
      "astro_019"
    ],
    "相对论长度收缩": [
      "univ_phy_relativity_002"
    ],
    "质能关系": [
      "univ_phy_relativity_003"
    ],
    "mc": [
      "univ_phy_relativity_003",
      "univ_phy_relativity_004"
    ],
    "相对论动能": [
      "univ_phy_relativity_004"
    ],
    "相对论质能方程": [
      "univ_phy_relativity_005"
    ],
    "质能方程": [
      "univ_phy_relativity_005"
    ],
    "德布罗意波长": [
      "univ_phy_quantum_001"
    ],
    "量子力学": [
      "univ_phy_quantum_001",
      "univ_phy_quantum_002",
      "univ_phy_quantum_003"
    ],
    "不确定性原理": [
      "univ_phy_quantum_002"
    ],
    "薛定谔方程": [
      "univ_phy_quantum_003"
    ],
    "一维": [
      "univ_phy_quantum_003"
    ],
    "麦克斯韦方程组": [
      "univ_phy_electro_001",
      "univ_phy_electro_002"
    ],
    "微分形式": [
      "univ_phy_electro_001"
    ],
    "积分形式": [
      "univ_phy_electro_002"
    ],
    "ds": [
      "univ_phy_electro_002",
      "univ_phy_thermo_003"
    ],
    "dl": [
      "univ_phy_electro_002"
    ],
    "dt": [
      "univ_phy_electro_002",
      "calc_derivative_006",
      "astro_002",
      "astro_008"
    ],
    "热力学第一定律": [
      "univ_phy_thermo_001"
    ],
    "热力学": [
      "univ_phy_thermo_001",
      "univ_phy_thermo_003",
      "univ_phy_thermo_004",
      "univ_chem_thermo_001",
      "univ_chem_thermo_002",
      "univ_chem_thermo_003"
    ],
    "熵的定义": [
      "univ_phy_thermo_003"
    ],
    "dq": [
      "univ_phy_thermo_003"
    ],
    "可逆过程": [
      "univ_phy_thermo_003"
    ],
    "卡诺效率": [
      "univ_phy_thermo_004"
    ],
    "吉布斯自由能": [
      "univ_chem_thermo_001"
    ],
    "范特霍夫方程": [
      "univ_chem_thermo_002"
    ],
    "克劳修斯": [
      "univ_chem_thermo_003"
    ],
    "克拉珀龙方程": [
      "univ_chem_thermo_003"
    ],
    "hvap": [
      "univ_chem_thermo_003"
    ],
    "一级反应速率方程": [
      "univ_chem_kinetics_001"
    ],
    "kt": [
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002"
    ],
    "动力学": [
      "univ_chem_kinetics_001",
      "univ_chem_kinetics_002",
      "univ_chem_kinetics_003"
    ],
    "二级反应速率方程": [
      "univ_chem_kinetics_002"
    ],
    "半衰期": [
      "univ_chem_kinetics_003"
    ],
    "一级反应": [
      "univ_chem_kinetics_003"
    ],
    "二级反应": [
      "univ_chem_kinetics_003"
    ],
    "方差公式": [
      "stat_002"
    ],
    "标准差公式": [
      "stat_003"
    ],
    "样本方差公式": [
      "stat_004"
    ],
    "样本标准差公式": [
      "stat_005"
    ],
    "相关系数公式": [
      "stat_006"
    ],
    "皮尔逊": [
      "stat_006"
    ],
    "相关分析": [
      "stat_006"
    ],
    "线性回归方程": [
      "stat_007"
    ],
    "bx": [
      "stat_007",
      "calc_integral_051",
      "integral_common_001",
      "integral_common_002",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_022",
      "integral_common_023",
      "integral_common_026",
      "integral_common_036",
      "integral_common_042",
      "integral_common_043",
      "theorem_chebyshev"
    ],
    "回归分析": [
      "stat_007"
    ],
    "正态分布概率密度函数": [
      "stat_008"
    ],
    "概率分布": [
      "stat_008"
    ],
    "z": [
      "stat_009",
      "eng_015",
      "calc_complex_002",
      "calc_complex_004",
      "prob_dist_004",
      "algebraic_number_theory_008",
      "astro_016",
      "astro_017"
    ],
    "分数": [
      "stat_009"
    ],
    "标准化": [
      "stat_009"
    ],
    "检验统计量": [
      "stat_010"
    ],
    "假设检验": [
      "stat_010"
    ],
    "应力公式": [
      "eng_001"
    ],
    "工程": [
      "eng_001",
      "eng_002",
      "eng_003",
      "eng_004",
      "eng_005",
      "eng_006",
      "eng_007",
      "eng_008",
      "eng_009",
      "eng_010",
      "eng_011",
      "eng_013",
      "eng_014",
      "eng_015"
    ],
    "材料力学": [
      "eng_001",
      "eng_002",
      "eng_003"
    ],
    "应变公式": [
      "eng_002"
    ],
    "弹性模量": [
      "eng_003"
    ],
    "杨氏模量": [
      "eng_003"
    ],
    "梁的弯曲应力": [
      "eng_004"
    ],
    "my": [
      "eng_004"
    ],
    "结构工程": [
      "eng_004",
      "eng_005",
      "eng_006",
      "eng_007"
    ],
    "矩形截面惯性矩": [
      "eng_005"
    ],
    "bh": [
      "eng_005"
    ],
    "圆形截面惯性矩": [
      "eng_006"
    ],
    "欧拉临界载荷": [
      "eng_007"
    ],
    "pcr": [
      "eng_007"
    ],
    "ei": [
      "eng_007"
    ],
    "伯努利方程": [
      "eng_008"
    ],
    "流体力学": [
      "eng_008",
      "eng_009"
    ],
    "雷诺数": [
      "eng_009"
    ],
    "re": [
      "eng_009",
      "calc_complex_002"
    ],
    "vd": [
      "eng_009"
    ],
    "传热速率": [
      "eng_010",
      "eng_011"
    ],
    "对流": [
      "eng_010"
    ],
    "ts": [
      "eng_010"
    ],
    "传热学": [
      "eng_010",
      "eng_011"
    ],
    "传导": [
      "eng_011"
    ],
    "效率公式": [
      "eng_013"
    ],
    "输出功率": [
      "eng_013"
    ],
    "输入功率": [
      "eng_013"
    ],
    "机械工程": [
      "eng_013",
      "eng_014",
      "eng_015"
    ],
    "pout": [
      "eng_013"
    ],
    "pin": [
      "eng_013"
    ],
    "扭矩公式": [
      "eng_014"
    ],
    "fr": [
      "eng_014"
    ],
    "齿轮传动比": [
      "eng_015"
    ],
    "复利终值公式": [
      "finance_001"
    ],
    "金融": [
      "finance_001",
      "finance_002",
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006",
      "finance_007",
      "finance_008",
      "finance_009",
      "finance_010",
      "finance_011",
      "finance_012",
      "finance_013",
      "finance_014",
      "finance_015",
      "finance_016",
      "finance_017",
      "finance_018"
    ],
    "复利计算": [
      "finance_001",
      "finance_002",
      "finance_013"
    ],
    "复利现值公式": [
      "finance_002"
    ],
    "普通年金终值": [
      "finance_003"
    ],
    "fva": [
      "finance_003",
      "finance_005"
    ],
    "年金计算": [
      "finance_003",
      "finance_004",
      "finance_005",
      "finance_006"
    ],
    "普通年金现值": [
      "finance_004"
    ],
    "pva": [
      "finance_004",
      "finance_006"
    ],
    "先付年金终值": [
      "finance_005"
    ],
    "先付年金现值": [
      "finance_006"
    ],
    "投资回报率": [
      "finance_007"
    ],
    "roi": [
      "finance_007"
    ],
    "收益": [
      "finance_007"
    ],
    "成本": [
      "finance_007"
    ],
    "投资分析": [
      "finance_007",
      "finance_008",
      "finance_011",
      "finance_012"
    ],
    "年化收益率": [
      "finance_008",
      "finance_013"
    ],
    "终值": [
      "finance_008"
    ],
    "现值": [
      "finance_008"
    ],
    "债券价格公式": [
      "finance_009"
    ],
    "债券定价": [
      "finance_009",
      "finance_010"
    ],
    "债券到期收益率": [
      "finance_010"
    ],
    "ytm": [
      "finance_010"
    ],
    "净现值": [
      "finance_011"
    ],
    "npv": [
      "finance_011",
      "finance_012"
    ],
    "cf": [
      "finance_011",
      "finance_012"
    ],
    "内部收益率": [
      "finance_012"
    ],
    "irr": [
      "finance_012"
    ],
    "法则": [
      "finance_013"
    ],
    "翻倍时间": [
      "finance_013"
    ],
    "贷款月供": [
      "finance_014",
      "finance_015"
    ],
    "等额本息": [
      "finance_014"
    ],
    "贷款计算": [
      "finance_014",
      "finance_015"
    ],
    "等额本金": [
      "finance_015"
    ],
    "有效年利率": [
      "finance_016"
    ],
    "ear": [
      "finance_016"
    ],
    "利率计算": [
      "finance_016"
    ],
    "股票市盈率": [
      "finance_017"
    ],
    "股价": [
      "finance_017",
      "finance_018"
    ],
    "每股收益": [
      "finance_017"
    ],
    "股票分析": [
      "finance_017",
      "finance_018"
    ],
    "股票市净率": [
      "finance_018"
    ],
    "每股净资产": [
      "finance_018"
    ],
    "参数方程求导": [
      "calc_derivative_006"
    ],
    "极坐标求导": [
      "calc_derivative_007"
    ],
    "对数求导法": [
      "calc_derivative_008"
    ],
    "对于": [
      "calc_derivative_008",
      "sobolev_007",
      "sobolev_008",
      "number_theory_002"
    ],
    "先取对数": [
      "calc_derivative_008"
    ],
    "再求导": [
      "calc_derivative_008"
    ],
    "有理函数积分": [
      "calc_integral_007"
    ],
    "将有理函数分解为部分分式后积分": [
      "calc_integral_007"
    ],
    "三角换元法": [
      "calc_integral_008"
    ],
    "sec": [
      "calc_integral_008",
      "calc_integral_015",
      "calc_integral_035",
      "calc_integral_045",
      "trig_hyperbolic_014"
    ],
    "反常积分": [
      "calc_integral_009",
      "calc_integral_010"
    ],
    "无穷限": [
      "calc_integral_009"
    ],
    "瑕积分": [
      "calc_integral_010"
    ],
    "在": [
      "calc_integral_010",
      "math_analysis_004",
      "math_analysis_005",
      "algebraic_number_theory_003",
      "theorem_lobachevsky"
    ],
    "处无界": [
      "calc_integral_010"
    ],
    "定积分应用": [
      "calc_integral_011",
      "calc_integral_012",
      "calc_integral_013",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028",
      "calc_integral_029",
      "calc_integral_030"
    ],
    "平面图形面积": [
      "calc_integral_011"
    ],
    "旋转体体积": [
      "calc_integral_012",
      "calc_integral_026",
      "calc_integral_027"
    ],
    "绕": [
      "calc_integral_012",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028"
    ],
    "轴旋转": [
      "calc_integral_012",
      "calc_integral_026",
      "calc_integral_027",
      "calc_integral_028"
    ],
    "弧长公式": [
      "calc_integral_013"
    ],
    "三角函数积分": [
      "calc_integral_014",
      "calc_integral_015"
    ],
    "正切余切": [
      "calc_integral_014"
    ],
    "cot": [
      "calc_integral_014",
      "calc_integral_015",
      "calc_integral_035",
      "calc_integral_045",
      "trig_hyperbolic_013",
      "series_sum_039",
      "series_sum_057",
      "series_sum_070",
      "theorem_gauss_digamma"
    ],
    "正割余割": [
      "calc_integral_015"
    ],
    "csc": [
      "calc_integral_015",
      "calc_integral_035",
      "trig_hyperbolic_014"
    ],
    "三角函数平方积分": [
      "calc_integral_016"
    ],
    "指数函数积分": [
      "calc_integral_017"
    ],
    "对数函数积分": [
      "calc_integral_018"
    ],
    "反三角函数积分": [
      "calc_integral_019"
    ],
    "arcsin": [
      "calc_integral_019",
      "calc_integral_039",
      "calc_integral_043",
      "calc_integral_047",
      "series_sum_027",
      "integral_common_054"
    ],
    "arctan": [
      "calc_integral_019",
      "calc_integral_031",
      "calc_integral_039",
      "calc_integral_041",
      "calc_integral_050",
      "series_sum_011",
      "series_sum_017",
      "series_sum_067",
      "series_sum_079",
      "integral_common_014",
      "integral_common_016"
    ],
    "arcsec": [
      "calc_integral_019",
      "calc_integral_040"
    ],
    "双曲函数积分": [
      "calc_integral_020"
    ],
    "sinh": [
      "calc_integral_020",
      "calc_integral_041",
      "trig_hyperbolic_001",
      "trig_hyperbolic_003",
      "trig_hyperbolic_007",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "series_sum_021",
      "series_sum_048",
      "series_sum_049",
      "series_sum_051",
      "series_sum_069",
      "integral_common_060",
      "fourier_011",
      "fourier_012",
      "fourier_013"
    ],
    "cosh": [
      "calc_integral_020",
      "calc_integral_041",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_011",
      "series_sum_023",
      "series_sum_048",
      "integral_common_023",
      "fourier_013"
    ],
    "tanh": [
      "calc_integral_020",
      "calc_integral_041",
      "calc_integral_052",
      "trig_hyperbolic_009",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "series_sum_073",
      "series_sum_074"
    ],
    "定积分性质": [
      "calc_integral_021",
      "calc_integral_022",
      "calc_integral_023",
      "calc_integral_024",
      "calc_integral_025"
    ],
    "线性性": [
      "calc_integral_021"
    ],
    "区间可加性": [
      "calc_integral_022"
    ],
    "积分中值定理": [
      "calc_integral_023"
    ],
    "奇偶性": [
      "calc_integral_024"
    ],
    "若": [
      "calc_integral_024",
      "calc_integral_025",
      "calc_series_004",
      "calc_series_007",
      "prob_dist_004",
      "prob_stat_001",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_009",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_010"
    ],
    "为奇函数": [
      "calc_integral_024"
    ],
    "则": [
      "calc_integral_024",
      "calc_integral_025",
      "calc_series_004",
      "calc_series_007",
      "linear_matrix_006",
      "prob_dist_004",
      "prob_stat_001",
      "math_analysis_006",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_009",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_008",
      "number_theory_010",
      "algebraic_number_theory_009",
      "theorem_lobachevsky"
    ],
    "为偶函数": [
      "calc_integral_024"
    ],
    "周期性": [
      "calc_integral_025"
    ],
    "周期为": [
      "calc_integral_025"
    ],
    "轴": [
      "calc_integral_026"
    ],
    "壳法": [
      "calc_integral_027"
    ],
    "旋转体侧面积": [
      "calc_integral_028"
    ],
    "质心坐标": [
      "calc_integral_029"
    ],
    "功": [
      "calc_integral_030"
    ],
    "有理函数积分表": [
      "calc_integral_031",
      "calc_integral_032",
      "calc_integral_046"
    ],
    "基本形式": [
      "calc_integral_031",
      "sobolev_004"
    ],
    "高次形式": [
      "calc_integral_032"
    ],
    "无理函数积分表": [
      "calc_integral_033",
      "calc_integral_034",
      "calc_integral_047"
    ],
    "根式形式": [
      "calc_integral_033"
    ],
    "线性根式": [
      "calc_integral_034"
    ],
    "三角函数积分表": [
      "calc_integral_035",
      "calc_integral_036",
      "calc_integral_044",
      "calc_integral_045"
    ],
    "完整版": [
      "calc_integral_035",
      "calc_integral_037",
      "calc_integral_038",
      "calc_integral_041"
    ],
    "乘积形式": [
      "calc_integral_036"
    ],
    "mx": [
      "calc_integral_036"
    ],
    "指数函数积分表": [
      "calc_integral_037"
    ],
    "对数函数积分表": [
      "calc_integral_038"
    ],
    "反三角函数积分表": [
      "calc_integral_039",
      "calc_integral_040"
    ],
    "直接积分": [
      "calc_integral_039"
    ],
    "arccos": [
      "calc_integral_039"
    ],
    "其他形式": [
      "calc_integral_040",
      "calc_integral_043",
      "calc_integral_045",
      "calc_integral_046",
      "calc_integral_050",
      "calc_integral_052"
    ],
    "arccot": [
      "calc_integral_040"
    ],
    "arccsc": [
      "calc_integral_040"
    ],
    "双曲函数积分表": [
      "calc_integral_041",
      "calc_integral_052"
    ],
    "辛普森公式求拟柱体体积": [
      "calc_integral_053"
    ],
    "辛普森公式": [
      "calc_integral_053"
    ],
    "拟柱体体积": [
      "calc_integral_053"
    ],
    "coth": [
      "calc_integral_041",
      "calc_integral_052",
      "trig_hyperbolic_009",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "series_sum_050",
      "series_sum_068",
      "integral_common_062"
    ],
    "sech": [
      "calc_integral_041",
      "calc_integral_052",
      "trig_hyperbolic_008",
      "trig_hyperbolic_014"
    ],
    "csch": [
      "calc_integral_041",
      "calc_integral_052",
      "trig_hyperbolic_007",
      "trig_hyperbolic_014"
    ],
    "反双曲函数积分表": [
      "calc_integral_042",
      "calc_integral_043"
    ],
    "arsinh": [
      "calc_integral_042",
      "calc_integral_043",
      "series_sum_028"
    ],
    "arcosh": [
      "calc_integral_042"
    ],
    "artanh": [
      "calc_integral_042"
    ],
    "arcoth": [
      "calc_integral_043"
    ],
    "arsech": [
      "calc_integral_043"
    ],
    "arcsch": [
      "calc_integral_043"
    ],
    "高次幂": [
      "calc_integral_044"
    ],
    "其他根式": [
      "calc_integral_047"
    ],
    "常见定积分值": [
      "calc_integral_048"
    ],
    "含绝对值的积分": [
      "calc_integral_049"
    ],
    "时": [
      "calc_integral_049",
      "math_analysis_002"
    ],
    "分式积分": [
      "calc_integral_050"
    ],
    "px": [
      "calc_integral_050"
    ],
    "当": [
      "calc_integral_050"
    ],
    "ap": [
      "calc_integral_050",
      "linear_matrix_006"
    ],
    "指数与三角函数的积分": [
      "calc_integral_051"
    ],
    "可分离变量微分方程": [
      "calc_ode_001"
    ],
    "微分方程": [
      "calc_ode_001",
      "calc_ode_002",
      "calc_ode_003",
      "calc_ode_004",
      "calc_ode_005"
    ],
    "齐次微分方程": [
      "calc_ode_002"
    ],
    "令": [
      "calc_ode_002",
      "calc_ode_005"
    ],
    "化为可分离变量方程": [
      "calc_ode_002"
    ],
    "一阶线性微分方程": [
      "calc_ode_003"
    ],
    "pdx": [
      "calc_ode_003"
    ],
    "qe": [
      "calc_ode_003"
    ],
    "二阶常系数齐次线性微分方程": [
      "calc_ode_004"
    ],
    "py": [
      "calc_ode_004"
    ],
    "qy": [
      "calc_ode_004",
      "calc_ode_005"
    ],
    "特征方程": [
      "calc_ode_004"
    ],
    "pr": [
      "calc_ode_004"
    ],
    "根据根的三种情况求解": [
      "calc_ode_004"
    ],
    "欧拉方程": [
      "calc_ode_005"
    ],
    "pxy": [
      "calc_ode_005"
    ],
    "化为常系数方程": [
      "calc_ode_005"
    ],
    "正项级数审敛法": [
      "calc_series_004",
      "calc_series_005",
      "calc_series_006"
    ],
    "比较判别法": [
      "calc_series_004"
    ],
    "收敛": [
      "calc_series_004",
      "calc_series_005",
      "calc_series_006",
      "calc_series_007"
    ],
    "发散": [
      "calc_series_004",
      "calc_series_005",
      "calc_series_006"
    ],
    "比值判别法": [
      "calc_series_005"
    ],
    "达朗贝尔": [
      "calc_series_005"
    ],
    "失效": [
      "calc_series_005",
      "calc_series_006"
    ],
    "根值判别法": [
      "calc_series_006"
    ],
    "柯西": [
      "calc_series_006"
    ],
    "交错级数审敛法": [
      "calc_series_007"
    ],
    "莱布尼茨判别法": [
      "calc_series_007"
    ],
    "且": [
      "calc_series_007",
      "math_analysis_005",
      "math_analysis_006",
      "number_theory_003"
    ],
    "傅里叶级数": [
      "calc_series_008"
    ],
    "欧拉公式": [
      "calc_complex_001"
    ],
    "复变函数": [
      "calc_complex_001",
      "calc_complex_002",
      "calc_complex_003",
      "calc_complex_004"
    ],
    "复数指数形式": [
      "calc_complex_002"
    ],
    "棣莫弗公式": [
      "calc_complex_003"
    ],
    "复数开方公式": [
      "calc_complex_004"
    ],
    "矩阵的秩": [
      "linear_matrix_005"
    ],
    "中非零子式的最高阶数": [
      "linear_matrix_005"
    ],
    "相似矩阵": [
      "linear_matrix_006"
    ],
    "若存在可逆矩阵": [
      "linear_matrix_006"
    ],
    "使得": [
      "linear_matrix_006",
      "math_analysis_004",
      "math_analysis_005",
      "sobolev_008",
      "number_theory_002",
      "algebraic_number_theory_001"
    ],
    "与": [
      "linear_matrix_006",
      "number_theory_008"
    ],
    "相似": [
      "linear_matrix_006"
    ],
    "施密特正交化": [
      "linear_vector_001"
    ],
    "向量": [
      "linear_vector_001",
      "linear_vector_002"
    ],
    "混合积": [
      "linear_vector_002"
    ],
    "特征值的性质": [
      "linear_eigen_002"
    ],
    "tr": [
      "linear_eigen_002",
      "algebraic_number_theory_010"
    ],
    "迹": [
      "linear_eigen_002"
    ],
    "二项分布": [
      "prob_dist_001"
    ],
    "np": [
      "prob_dist_001",
      "sobolev_004"
    ],
    "分布": [
      "prob_dist_001",
      "prob_dist_002",
      "prob_dist_003",
      "prob_dist_004"
    ],
    "泊松分布": [
      "prob_dist_002"
    ],
    "正态分布": [
      "prob_dist_003"
    ],
    "标准正态分布": [
      "prob_dist_004"
    ],
    "中心极限定理": [
      "prob_stat_001"
    ],
    "独立同分布": [
      "prob_stat_001"
    ],
    "近似服从": [
      "prob_stat_001"
    ],
    "大数定律": [
      "prob_stat_002"
    ],
    "函数连续性定义": [
      "math_analysis_001"
    ],
    "数学分析": [
      "math_analysis_001",
      "math_analysis_002",
      "math_analysis_003",
      "math_analysis_004",
      "math_analysis_005",
      "math_analysis_006"
    ],
    "连续性": [
      "math_analysis_001",
      "math_analysis_002"
    ],
    "一致连续性": [
      "math_analysis_002"
    ],
    "使得当": [
      "math_analysis_002"
    ],
    "对所有": [
      "math_analysis_002",
      "sobolev_005",
      "sobolev_008"
    ],
    "成立": [
      "math_analysis_002",
      "sobolev_005"
    ],
    "可微性定义": [
      "math_analysis_003"
    ],
    "o": [
      "math_analysis_003",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_006",
      "algebraic_number_theory_008",
      "algebraic_number_theory_010"
    ],
    "可微性": [
      "math_analysis_003"
    ],
    "拉格朗日中值定理": [
      "math_analysis_004"
    ],
    "连续": [
      "math_analysis_004",
      "math_analysis_005"
    ],
    "可导": [
      "math_analysis_004",
      "math_analysis_005"
    ],
    "则存在": [
      "math_analysis_004",
      "math_analysis_005"
    ],
    "微分中值定理": [
      "math_analysis_004",
      "math_analysis_005"
    ],
    "柯西中值定理": [
      "math_analysis_005"
    ],
    "洛必达法则": [
      "math_analysis_006"
    ],
    "为": [
      "math_analysis_006",
      "algebraic_number_theory_009"
    ],
    "存在": [
      "math_analysis_006"
    ],
    "sobolev": [
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010"
    ],
    "空间定义": [
      "sobolev_001"
    ],
    "泛函分析": [
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010"
    ],
    "空间": [
      "sobolev_001",
      "sobolev_002",
      "sobolev_003",
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_007",
      "sobolev_008",
      "sobolev_009",
      "sobolev_010"
    ],
    "范数": [
      "sobolev_002"
    ],
    "hilbert": [
      "sobolev_003"
    ],
    "嵌入定理": [
      "sobolev_004",
      "sobolev_005"
    ],
    "kp": [
      "sobolev_004",
      "sobolev_005",
      "sobolev_006",
      "sobolev_009"
    ],
    "临界情况": [
      "sobolev_005"
    ],
    "morrey": [
      "sobolev_006"
    ],
    "不等式": [
      "sobolev_006",
      "sobolev_007"
    ],
    "poincar": [
      "sobolev_007"
    ],
    "有": [
      "sobolev_007"
    ],
    "弱导数定义": [
      "sobolev_008"
    ],
    "若存在": [
      "sobolev_008"
    ],
    "则称": [
      "sobolev_008"
    ],
    "rellich": [
      "sobolev_009"
    ],
    "kondrachov": [
      "sobolev_009"
    ],
    "紧嵌入定理": [
      "sobolev_009"
    ],
    "有界且边界": [
      "sobolev_009"
    ],
    "lipschitz": [
      "sobolev_009"
    ],
    "紧嵌入到": [
      "sobolev_009"
    ],
    "分数阶": [
      "sobolev_010"
    ],
    "sp": [
      "sobolev_010"
    ],
    "dxdy": [
      "sobolev_010"
    ],
    "欧几里得算法": [
      "number_theory_001"
    ],
    "最大公约数": [
      "number_theory_001"
    ],
    "gcd": [
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004"
    ],
    "mod": [
      "number_theory_001",
      "number_theory_003",
      "number_theory_004",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "algebraic_number_theory_008"
    ],
    "直到余数为": [
      "number_theory_001"
    ],
    "最后的除数即为最大公约数": [
      "number_theory_001"
    ],
    "数论": [
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010",
      "algebraic_number_theory_001",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010"
    ],
    "初等数论": [
      "number_theory_001",
      "number_theory_002",
      "number_theory_003",
      "number_theory_004",
      "number_theory_005",
      "number_theory_006",
      "number_theory_007",
      "number_theory_008",
      "number_theory_009",
      "number_theory_010"
    ],
    "扩展欧几里得算法": [
      "number_theory_002"
    ],
    "存在整数": [
      "number_theory_002"
    ],
    "费马小定理": [
      "number_theory_003"
    ],
    "是素数": [
      "number_theory_003"
    ],
    "欧拉定理": [
      "number_theory_004"
    ],
    "是欧拉函数": [
      "number_theory_004"
    ],
    "欧拉函数公式": [
      "number_theory_005"
    ],
    "中国剩余定理": [
      "number_theory_006"
    ],
    "两两互质": [
      "number_theory_006"
    ],
    "则同余方程组": [
      "number_theory_006"
    ],
    "有唯一解模": [
      "number_theory_006"
    ],
    "威尔逊定理": [
      "number_theory_007"
    ],
    "是素数当且仅当": [
      "number_theory_007"
    ],
    "二次剩余": [
      "number_theory_008"
    ],
    "欧拉判别准则": [
      "number_theory_008"
    ],
    "设": [
      "number_theory_008",
      "algebraic_number_theory_002",
      "algebraic_number_theory_009",
      "theorem_lobachevsky",
      "theorem_chebyshev"
    ],
    "为奇素数": [
      "number_theory_008"
    ],
    "互质": [
      "number_theory_008"
    ],
    "是模": [
      "number_theory_008"
    ],
    "的二次剩余当且仅当": [
      "number_theory_008"
    ],
    "勒让德符号": [
      "number_theory_009"
    ],
    "值为": [
      "number_theory_009"
    ],
    "表示二次剩余": [
      "number_theory_009"
    ],
    "表示二次非剩余": [
      "number_theory_009"
    ],
    "表示": [
      "number_theory_009"
    ],
    "二次互反律": [
      "number_theory_010"
    ],
    "和": [
      "number_theory_010"
    ],
    "是不同的奇素数": [
      "number_theory_010"
    ],
    "代数整数": [
      "algebraic_number_theory_001"
    ],
    "是某个首一整数系数多项式的根": [
      "algebraic_number_theory_001"
    ],
    "即存在整数": [
      "algebraic_number_theory_001"
    ],
    "代数数论": [
      "algebraic_number_theory_001",
      "algebraic_number_theory_002",
      "algebraic_number_theory_003",
      "algebraic_number_theory_004",
      "algebraic_number_theory_005",
      "algebraic_number_theory_006",
      "algebraic_number_theory_007",
      "algebraic_number_theory_008",
      "algebraic_number_theory_009",
      "algebraic_number_theory_010"
    ],
    "数域的整数环": [
      "algebraic_number_theory_002"
    ],
    "为代数数域": [
      "algebraic_number_theory_002"
    ],
    "的整数环": [
      "algebraic_number_theory_002"
    ],
    "由": [
      "algebraic_number_theory_002"
    ],
    "中所有代数整数组成": [
      "algebraic_number_theory_002"
    ],
    "是": [
      "algebraic_number_theory_002",
      "algebraic_number_theory_007",
      "algebraic_number_theory_010"
    ],
    "的子环": [
      "algebraic_number_theory_002"
    ],
    "理想分解唯一性": [
      "algebraic_number_theory_003"
    ],
    "dedekind": [
      "algebraic_number_theory_003"
    ],
    "整环": [
      "algebraic_number_theory_003"
    ],
    "如整数环": [
      "algebraic_number_theory_003"
    ],
    "中": [
      "algebraic_number_theory_003"
    ],
    "每个非零理想都可以唯一地分解为素理想的乘积": [
      "algebraic_number_theory_003"
    ],
    "理想范数": [
      "algebraic_number_theory_004"
    ],
    "理想": [
      "algebraic_number_theory_004"
    ],
    "的范数": [
      "algebraic_number_theory_004"
    ],
    "即商环的基数": [
      "algebraic_number_theory_004"
    ],
    "类数公式": [
      "algebraic_number_theory_005"
    ],
    "是类数": [
      "algebraic_number_theory_005"
    ],
    "是调节子": [
      "algebraic_number_theory_005"
    ],
    "是判别式": [
      "algebraic_number_theory_005"
    ],
    "狄利克雷单位定理": [
      "algebraic_number_theory_006"
    ],
    "的单位群": [
      "algebraic_number_theory_006"
    ],
    "是有限生成的": [
      "algebraic_number_theory_006"
    ],
    "秩为": [
      "algebraic_number_theory_006"
    ],
    "是实嵌入数": [
      "algebraic_number_theory_006"
    ],
    "是复嵌入对数": [
      "algebraic_number_theory_006"
    ],
    "分圆域": [
      "algebraic_number_theory_007"
    ],
    "添加": [
      "algebraic_number_theory_007"
    ],
    "次单位原根": [
      "algebraic_number_theory_007"
    ],
    "得到的域": [
      "algebraic_number_theory_007"
    ],
    "次数为": [
      "algebraic_number_theory_007"
    ],
    "二次域的整数环": [
      "algebraic_number_theory_008"
    ],
    "对于无平方因子的": [
      "algebraic_number_theory_008"
    ],
    "的整数环为": [
      "algebraic_number_theory_008"
    ],
    "素理想在扩张中的分解": [
      "algebraic_number_theory_009"
    ],
    "为有限扩张": [
      "algebraic_number_theory_009"
    ],
    "的素理想": [
      "algebraic_number_theory_009"
    ],
    "po": [
      "algebraic_number_theory_009"
    ],
    "为分歧指数": [
      "algebraic_number_theory_009"
    ],
    "判别式": [
      "algebraic_number_theory_010"
    ],
    "数域": [
      "algebraic_number_theory_010"
    ],
    "的判别式": [
      "algebraic_number_theory_010"
    ],
    "det": [
      "algebraic_number_theory_010"
    ],
    "的一组整基": [
      "algebraic_number_theory_010"
    ],
    "正弦函数的复指数表示": [
      "trig_hyperbolic_001"
    ],
    "ix": [
      "trig_hyperbolic_001",
      "trig_hyperbolic_002",
      "trig_hyperbolic_003",
      "trig_hyperbolic_004",
      "trig_hyperbolic_006",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014"
    ],
    "余弦函数的复指数表示": [
      "trig_hyperbolic_002"
    ],
    "三角函数与双曲函数的复数关系": [
      "trig_hyperbolic_003"
    ],
    "反正弦函数的对数表示": [
      "trig_hyperbolic_004"
    ],
    "sqrt": [
      "trig_hyperbolic_004",
      "trig_hyperbolic_005",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011"
    ],
    "反余弦函数的对数表示": [
      "trig_hyperbolic_005"
    ],
    "反正切函数的对数表示": [
      "trig_hyperbolic_006"
    ],
    "双曲正弦函数定义": [
      "trig_hyperbolic_007"
    ],
    "双曲函数": [
      "trig_hyperbolic_007",
      "trig_hyperbolic_008",
      "trig_hyperbolic_009",
      "trig_hyperbolic_010",
      "trig_hyperbolic_011",
      "trig_hyperbolic_012",
      "trig_hyperbolic_013",
      "trig_hyperbolic_014"
    ],
    "双曲余弦函数定义": [
      "trig_hyperbolic_008"
    ],
    "双曲正切函数定义": [
      "trig_hyperbolic_009"
    ],
    "反双曲正弦函数": [
      "trig_hyperbolic_010"
    ],
    "反双曲余弦函数": [
      "trig_hyperbolic_011"
    ],
    "反双曲正切函数": [
      "trig_hyperbolic_012"
    ],
    "双曲函数与三角函数的复数关系": [
      "trig_hyperbolic_013",
      "trig_hyperbolic_014"
    ],
    "续": [
      "trig_hyperbolic_014",
      "theorem_lobachevsky_2"
    ],
    "常用求和公式": [
      "series_sum_001",
      "series_sum_002",
      "series_sum_003",
      "series_sum_004",
      "series_sum_005",
      "series_sum_006",
      "series_sum_007",
      "series_sum_008",
      "series_sum_009",
      "series_sum_010",
      "series_sum_011",
      "series_sum_012",
      "series_sum_013",
      "series_sum_014",
      "series_sum_015",
      "series_sum_016",
      "series_sum_017",
      "series_sum_018",
      "series_sum_019",
      "series_sum_020",
      "series_sum_021",
      "series_sum_022",
      "series_sum_023",
      "series_sum_024",
      "series_sum_025",
      "series_sum_026",
      "series_sum_027",
      "series_sum_028",
      "series_sum_029",
      "series_sum_030",
      "series_sum_031",
      "series_sum_032",
      "series_sum_033",
      "series_sum_034",
      "series_sum_035",
      "series_sum_036",
      "series_sum_037",
      "series_sum_038",
      "series_sum_039",
      "series_sum_040",
      "series_sum_041",
      "series_sum_042",
      "series_sum_043",
      "series_sum_044",
      "series_sum_045",
      "series_sum_046",
      "series_sum_047",
      "series_sum_048",
      "series_sum_049",
      "series_sum_050",
      "series_sum_051",
      "series_sum_052",
      "series_sum_053",
      "series_sum_054",
      "series_sum_055",
      "series_sum_056",
      "series_sum_057",
      "series_sum_058",
      "series_sum_059",
      "series_sum_060",
      "series_sum_061",
      "series_sum_062",
      "series_sum_063",
      "series_sum_064",
      "series_sum_065",
      "series_sum_066",
      "series_sum_067",
      "series_sum_068",
      "series_sum_069",
      "series_sum_070",
      "series_sum_071",
      "series_sum_072",
      "series_sum_073",
      "series_sum_074",
      "series_sum_075",
      "series_sum_076",
      "series_sum_077",
      "series_sum_078",
      "series_sum_079",
      "series_sum_080",
      "series_sum_081",
      "series_sum_082"
    ],
    "sgn": [
      "series_sum_040",
      "integral_common_032",
      "integral_common_033",
      "fourier_001"
    ],
    "07667": [
      "series_sum_050"
    ],
    "082323": [
      "series_sum_077"
    ],
    "01734": [
      "series_sum_080"
    ],
    "常用积分公式": [
      "integral_common_001",
      "integral_common_002",
      "integral_common_003",
      "integral_common_004",
      "integral_common_005",
      "integral_common_006",
      "integral_common_007",
      "integral_common_008",
      "integral_common_009",
      "integral_common_010",
      "integral_common_011",
      "integral_common_012",
      "integral_common_013",
      "integral_common_014",
      "integral_common_015",
      "integral_common_016",
      "integral_common_017",
      "integral_common_018",
      "integral_common_019",
      "integral_common_020",
      "integral_common_021",
      "integral_common_022",
      "integral_common_023",
      "integral_common_024",
      "integral_common_025",
      "integral_common_026",
      "integral_common_027",
      "integral_common_028",
      "integral_common_029",
      "integral_common_030",
      "integral_common_031",
      "integral_common_032",
      "integral_common_033",
      "integral_common_034",
      "integral_common_035",
      "integral_common_036",
      "integral_common_037",
      "integral_common_038",
      "integral_common_039",
      "integral_common_040",
      "integral_common_041",
      "integral_common_042",
      "integral_common_043",
      "integral_common_044",
      "integral_common_045",
      "integral_common_046",
      "integral_common_047",
      "integral_common_048",
      "integral_common_049",
      "integral_common_050",
      "integral_common_051",
      "integral_common_052",
      "integral_common_053",
      "integral_common_054",
      "integral_common_055",
      "integral_common_056",
      "integral_common_057",
      "integral_common_058",
      "integral_common_059",
      "integral_common_060",
      "integral_common_061",
      "integral_common_062",
      "integral_common_063",
      "integral_common_064"
    ],
    "nb": [
      "integral_common_026"
    ],
    "的傅里叶展开式": [
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013"
    ],
    "傅里叶分析": [
      "fourier_001",
      "fourier_002",
      "fourier_003",
      "fourier_004",
      "fourier_005",
      "fourier_006",
      "fourier_007",
      "fourier_008",
      "fourier_009",
      "fourier_010",
      "fourier_011",
      "fourier_012",
      "fourier_013"
    ],
    "高斯伽马函数定理": [
      "theorem_gauss_digamma"
    ],
    "nr": [
      "theorem_gauss_digamma"
    ],
    "特殊函数": [
      "theorem_gauss_digamma"
    ],
    "定理": [
      "theorem_gauss_digamma",
      "theorem_lobachevsky",
      "theorem_lobachevsky_2",
      "theorem_chebyshev",
      "theorem_euler_maclaurin"
    ],
    "罗巴切夫斯基积分法": [
      "theorem_lobachevsky",
      "theorem_lobachevsky_2"
    ],
    "范围内": [
      "theorem_lobachevsky"
    ],
    "及": [
      "theorem_lobachevsky"
    ],
    "类似的": [
      "theorem_lobachevsky_2"
    ],
    "在同样条件下": [
      "theorem_lobachevsky_2"
    ],
    "切比雪夫定理": [
      "theorem_chebyshev"
    ],
    "为一个二项微分式": [
      "theorem_chebyshev"
    ],
    "为有理数": [
      "theorem_chebyshev"
    ],
    "则其可表示为初等函数的充分必要条件是": [
      "theorem_chebyshev"
    ],
    "中至少有一个为整数": [
      "theorem_chebyshev"
    ],
    "欧拉": [
      "theorem_euler_maclaurin"
    ],
    "麦克劳林公式": [
      "theorem_euler_maclaurin"
    ],
    "开普勒第一定律": [
      "astro_001"
    ],
    "椭圆轨道定律": [
      "astro_001"
    ],
    "行星轨道为椭圆": [
      "astro_001"
    ],
    "太阳位于椭圆的一个焦点上": [
      "astro_001"
    ],
    "天文学": [
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010",
      "astro_011",
      "astro_012",
      "astro_013",
      "astro_014",
      "astro_015",
      "astro_016",
      "astro_017",
      "astro_018",
      "astro_019",
      "astro_020",
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024",
      "astro_025",
      "astro_026"
    ],
    "天体力学": [
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_004",
      "astro_005",
      "astro_006",
      "astro_007",
      "astro_008",
      "astro_009",
      "astro_010",
      "astro_020"
    ],
    "定律": [
      "astro_001",
      "astro_002",
      "astro_003",
      "astro_018"
    ],
    "开普勒第二定律": [
      "astro_002"
    ],
    "面积定律": [
      "astro_002"
    ],
    "da": [
      "astro_002"
    ],
    "调和定律": [
      "astro_003"
    ],
    "圆形轨道速度": [
      "astro_004"
    ],
    "椭圆轨道速度": [
      "astro_005"
    ],
    "一般形式": [
      "astro_005"
    ],
    "逃逸速度": [
      "astro_006"
    ],
    "轨道总能量": [
      "astro_007"
    ],
    "比角动量": [
      "astro_008"
    ],
    "单位质量角动量": [
      "astro_008"
    ],
    "gmp": [
      "astro_008"
    ],
    "gma": [
      "astro_008",
      "astro_009"
    ],
    "轨道偏心率": [
      "astro_009"
    ],
    "近日点和远日点距离": [
      "astro_010"
    ],
    "peri": [
      "astro_010"
    ],
    "apo": [
      "astro_010"
    ],
    "视星等与绝对星等关系": [
      "astro_011"
    ],
    "观测": [
      "astro_011",
      "astro_012",
      "astro_013",
      "astro_014",
      "astro_015",
      "astro_016",
      "astro_017"
    ],
    "距离模数": [
      "astro_012"
    ],
    "pc": [
      "astro_012"
    ],
    "视差与距离关系": [
      "astro_013"
    ],
    "光度与亮度关系": [
      "astro_014"
    ],
    "星等与亮度关系": [
      "astro_015"
    ],
    "多普勒效应": [
      "astro_016"
    ],
    "径向速度": [
      "astro_016"
    ],
    "四元数": [
      "math_algebra_001"
    ],
    "quaternion": [
      "math_algebra_001"
    ],
    "欧拉示数性公式": [
      "math_topology_001"
    ],
    "欧拉示性数": [
      "math_topology_001"
    ],
    "拓扑学": [
      "math_topology_001"
    ],
    "obs": [
      "astro_016"
    ],
    "rest": [
      "astro_016"
    ],
    "相对论多普勒效应": [
      "astro_017"
    ],
    "哈勃定律": [
      "astro_018"
    ],
    "宇宙学": [
      "astro_018"
    ],
    "史瓦西半径": [
      "astro_019"
    ],
    "黑洞视界": [
      "astro_019"
    ],
    "洛希极限": [
      "astro_020"
    ],
    "潮汐瓦解半径": [
      "astro_020"
    ],
    "roche": [
      "astro_020"
    ],
    "开普勒方程": [
      "astro_021"
    ],
    "偏近点角": [
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024"
    ],
    "eccentric anomaly": [
      "astro_021",
      "astro_022",
      "astro_023",
      "astro_024"
    ],
    "平近点角": [
      "astro_021",
      "astro_025"
    ],
    "mean anomaly": [
      "astro_021",
      "astro_025"
    ],
    "平近点角定义": [
      "astro_025"
    ],
    "平均角速度": [
      "astro_026"
    ],
    "平运动角速度": [
      "astro_026"
    ],
    "偏近点角与轨道半径": [
      "astro_022"
    ],
    "偏近点角与真近点角": [
      "astro_023"
    ],
    "真近点角": [
      "astro_001",
      "astro_023"
    ],
    "true anomaly": [
      "astro_001",
      "astro_023"
    ],
    "偏近点角坐标": [
      "astro_024"
    ],
    "辅助圆": [
      "astro_021",
      "astro_022",
      "astro_024"
    ]
  }
};

module.exports = indexes;
