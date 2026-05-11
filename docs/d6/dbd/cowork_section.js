var cowork_section =
[
    [ "API maintenance", "d3/d5a/api_maintenance.html", [
      [ "Signal Quality", "d3/d5a/api_maintenance.html#autotoc_md76", null ],
      [ "Executive Summary", "d3/d5a/api_maintenance.html#autotoc_md77", null ],
      [ "Goals &amp; Success Criteria", "d3/d5a/api_maintenance.html#autotoc_md79", [
        [ "Primary Goals", "d3/d5a/api_maintenance.html#autotoc_md80", null ],
        [ "Success Criteria", "d3/d5a/api_maintenance.html#autotoc_md81", null ]
      ] ],
      [ "Architecture Overview", "d3/d5a/api_maintenance.html#autotoc_md83", null ],
      [ "Phase 1: Documentation &amp; Dictionary Finalization (CURRENT)", "d3/d5a/api_maintenance.html#autotoc_md85", [
        [ "Tasks", "d3/d5a/api_maintenance.html#autotoc_md86", null ],
        [ "Deliverables", "d3/d5a/api_maintenance.html#autotoc_md87", null ]
      ] ],
      [ "- <b>DICTIONARY.md</b> — Table format (name | type | unit | description | source | importance); ~25 core variables; final notes on unit consistency and primary keys", "d3/d5a/api_maintenance.html#autotoc_md88", null ],
      [ "Phase 2: Data Validation &amp; Ingestion (PLANNED)", "d3/d5a/api_maintenance.html#autotoc_md89", [
        [ "Tasks", "d3/d5a/api_maintenance.html#autotoc_md90", null ],
        [ "Success Criteria", "d3/d5a/api_maintenance.html#autotoc_md91", null ]
      ] ],
      [ "Phase 3: QA Route Implementation (PLANNED)", "d3/d5a/api_maintenance.html#autotoc_md93", [
        [ "Route: Wideband", "d3/d5a/api_maintenance.html#autotoc_md94", null ],
        [ "Route: Narrowband", "d3/d5a/api_maintenance.html#autotoc_md95", null ],
        [ "Route: Voice", "d3/d5a/api_maintenance.html#autotoc_md96", null ]
      ] ],
      [ "Phase 4: Integration &amp; Deployment (PLANNED)", "d3/d5a/api_maintenance.html#autotoc_md98", [
        [ "Tasks", "d3/d5a/api_maintenance.html#autotoc_md99", null ],
        [ "Success Criteria", "d3/d5a/api_maintenance.html#autotoc_md100", null ],
        [ "API Deployment", "d3/d5a/api_maintenance.html#autotoc_md101", null ]
      ] ],
      [ "Dependencies &amp; External References", "d3/d5a/api_maintenance.html#autotoc_md103", null ],
      [ "Timeline &amp; Milestones", "d3/d5a/api_maintenance.html#autotoc_md105", null ],
      [ "Next Steps", "d3/d5a/api_maintenance.html#autotoc_md107", null ]
    ] ],
    [ "Guía: Entornos colaborativos para desarrollo en C", "d1/d47/collab_env_guide.html", null ],
    [ "Canonical Dictionary — Signal Quality Validation", "d4/d70/dictionary.html", [
      [ "Variable Definitions", "d4/d70/dictionary.html#autotoc_md110", null ],
      [ "cannonical array", "d4/d70/dictionary.html#autotoc_md112", null ],
      [ "Naming Conventions", "d4/d70/dictionary.html#autotoc_md113", [
        [ "Primary Keys (for time-series alignment)", "d4/d70/dictionary.html#autotoc_md114", null ],
        [ "Unit Consistency", "d4/d70/dictionary.html#autotoc_md115", null ],
        [ "Naming Patterns", "d4/d70/dictionary.html#autotoc_md116", null ],
        [ "Multi-Node Data", "d4/d70/dictionary.html#autotoc_md117", null ]
      ] ],
      [ "Data Type Mappings", "d4/d70/dictionary.html#autotoc_md119", null ],
      [ "Validation Rules", "d4/d70/dictionary.html#autotoc_md121", [
        [ "Required Fields (must always be present)", "d4/d70/dictionary.html#autotoc_md122", null ],
        [ "Conditional Fields (required in specific routes)", "d4/d70/dictionary.html#autotoc_md123", null ],
        [ "Quality Assurance", "d4/d70/dictionary.html#autotoc_md124", null ]
      ] ],
      [ "Notes &amp; Best Practices", "d4/d70/dictionary.html#autotoc_md126", null ],
      [ "Update History", "d4/d70/dictionary.html#autotoc_md128", null ]
    ] ],
    [ "GitHub Actions CI/CD: Guide for ANE Project", "d0/d15/gh_actions_c_i_c_d.html", [
      [ "1. Introduction to CI/CD in ANE", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md130", [
        [ "Why GH Actions for ANE?", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md131", null ]
      ] ],
      [ "2. Core Concepts", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md133", null ],
      [ "3. Specific Use Cases for our Repository", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md135", [
        [ "Use Case A: Automated Documentation Sync (CD)", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md136", null ],
        [ "Use Case B: Quality Assurance &amp; Schema Check (CI)", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md137", null ],
        [ "Use Case C: Secure Deployment to Edge Nodes", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md138", null ]
      ] ],
      [ "4. Proposed Workflow Structure (Conceptual)", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md140", [
        [ "CI: Validation Workflow (<span class=\"tt\">.github/workflows/ci-validation.yml</span>)", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md141", null ],
        [ "CD: Documentation &amp; Deployment (<span class=\"tt\">.github/workflows/cd-deploy.yml</span>)", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md142", null ]
      ] ],
      [ "5. Local Testing with <span class=\"tt\">act</span>", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md144", null ],
      [ "6. Security Best Practices", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md146", null ],
      [ "Next Steps for ANE Implementation", "d0/d15/gh_actions_c_i_c_d.html#autotoc_md148", null ]
    ] ],
    [ "MODULE ARCHITECTURE &amp; MODULES REFERENCE", "d1/df9/arch_modules.html", null ],
    [ "DEPLOYMENT &amp; RELEASE MANAGEMENT", "dc/d18/deployment_guide.html", [
      [ "ESTÁNDARES RÁPIDOS", "dc/d18/deployment_guide.html#autotoc_md161", [
        [ "VERSION SCHEME", "dc/d18/deployment_guide.html#autotoc_md160", null ],
        [ "DEPLOYMENT STEPS", "dc/d18/deployment_guide.html#autotoc_md162", [
          [ "<em>after cloning the repository using HTTPS or SSH:</em>", "dc/d18/deployment_guide.html#autotoc_md163", null ]
        ] ]
      ] ],
      [ "QUICK REFERENCE - CONTROL VERSION", "dc/d18/deployment_guide.html#autotoc_md164", [
        [ "PARA EMPEZAR UN NUEVO FEATURE", "dc/d18/deployment_guide.html#autotoc_md165", null ],
        [ "BEFORE COMMIT", "dc/d18/deployment_guide.html#autotoc_md166", null ],
        [ "merge &amp; release", "dc/d18/deployment_guide.html#autotoc_md167", null ],
        [ "checklist", "dc/d18/deployment_guide.html#autotoc_md168", null ]
      ] ]
    ] ],
    [ "DEVELOPMENT STANDARDS", "df/d85/develop_standards.html", [
      [ "Code Quality &amp; Best Practices", "df/d85/develop_standards.html#autotoc_md169", [
        [ "1. ESTRUCTURA DE ARCHIVOS", "df/d85/develop_standards.html#autotoc_md170", null ],
        [ "2. ESTÁNDARES DE CODIGO", "df/d85/develop_standards.html#autotoc_md171", [
          [ "<b>2.1 PEP 8 - Formatting</b>", "df/d85/develop_standards.html#autotoc_md172", null ],
          [ "2.2 TYPE HINTS (PEP 484)", "df/d85/develop_standards.html#autotoc_md173", null ],
          [ "2.3 DOCSTRINGS (PEP 257 + Google Style)", "df/d85/develop_standards.html#autotoc_md174", null ]
        ] ],
        [ "3. TESTING REQUIREMENTS", "df/d85/develop_standards.html#autotoc_md175", [
          [ "3.1 Unit Test Template", "df/d85/develop_standards.html#autotoc_md176", null ],
          [ "3.2 Integration Test Template", "df/d85/develop_standards.html#autotoc_md177", null ]
        ] ],
        [ "TEST MATRIX", "df/d85/develop_standards.html#autotoc_md178", null ],
        [ "UNIT TEST CHECKLIST", "df/d85/develop_standards.html#autotoc_md179", null ],
        [ "INTEGRATION TEST CHECKLIST", "df/d85/develop_standards.html#autotoc_md180", null ],
        [ "PERFORMANCE TEST CHECKLIST", "df/d85/develop_standards.html#autotoc_md181", null ],
        [ "4. ERROR HANDLING", "df/d85/develop_standards.html#autotoc_md183", null ],
        [ "5. LOGGING STANDARDS", "df/d85/develop_standards.html#autotoc_md184", null ]
      ] ]
    ] ]
];