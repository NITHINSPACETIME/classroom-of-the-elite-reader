# Mushoku Tensei Volumes 1–26 Integration Plan

This plan outlines the integration of all 26 volumes of *Mushoku Tensei: Jobless Reincarnation* into the reader platform.

## Overview
We need to parse local EPUB files `/home/kamisama/Downloads/MT/mv{1-26}.epub`, extract illustration assets and sanitized text chapters, retrieve publication metadata from Fandom Wiki/Wikipedia, and compile the final configuration in `data/mushoku-tensei.ts`.

* **Project Type**: WEB (Next.js / React)
* **Active Specialist**: `@[backend-specialist]` (for data parsing and compiling) and `@[frontend-specialist]` (for selector integration and layout checks).
* **Git Status Constraint**: Strictly DO NOT commit any files.

## Success Criteria
1. Parse and extract illustrations for volumes 1-26 to `public/assets/images/mushoku-tensei/v{vol}/`.
2. Parse XHTML chapters to JSON caches under `data/mushoku-tensei-cache/v{vol}-{ch}.json`.
3. Scrape Wikipedia and Fandom to compile date, ISBN, cover, and synopsis metadata into `data/mushoku-tensei.ts`.
4. Render all 26 volumes as completed/active in `/mushoku-tensei/select`.
5. TypeScript validation passes: `npx tsc --noEmit`.

## Tech Stack
* **Language**: Python (for EPUB parsing and metadata scraping), TypeScript (for frontend data structures).
* **Libraries**: Python's `zipfile`, `html.parser`, and `urllib.request`.
* **Theme**: Emerald green accents (`text-emerald-400`, `selection:bg-emerald-950/80`, `shadow-[0_0_20px_rgba(16,185,129,0.15)]`) representing wind magic.

## File Structure
```
cote-reader/
├── data/
│   ├── mushoku-tensei.ts (compiled metadata list)
│   └── mushoku-tensei-cache/
│       └── v{vol}-{ch}.json (chapter caches)
├── public/
│   └── assets/
│       └── images/
│           └── mushoku-tensei/
│               └── v{vol}/
│                   └── (extracted illustrations)
└── scripts/
    ├── parse-mushoku-epub.py (EPUB text/illustration extractor)
    └── compile-mushoku-metadata.py (Fandom/Wikipedia metadata scraper)
```

## Task Breakdown

### Task 1: Enhance EPUB Parser Script
* **Agent**: `backend-specialist`
* **Skills**: `python-patterns`, `clean-code`
* **Priority**: High
* **Dependencies**: None
* **Input**: `/home/kamisama/Downloads/MT/mv{1-26}.epub`
* **Output**: Modified `scripts/parse-mushoku-epub.py` loops from volume 1 to 26, parses `OEBPS/toc.ncx` dynamically, groups color illustrations into Chapter 1, filters boilerplate pages, cleans chapter titles, and writes JSON files.
* **Verify**: Run `python3 scripts/parse-mushoku-epub.py` on Volume 1 & 2 first, verify output files under `data/mushoku-tensei-cache/` and image folder.

### Task 2: Implement Metadata Compiler Script
* **Agent**: `backend-specialist`
* **Skills**: `python-patterns`, `api-patterns`
* **Priority**: High
* **Dependencies**: Task 1
* **Input**: Wikipedia volume list URL and Fandom Wiki pages.
* **Output**: `scripts/compile-mushoku-metadata.py` scrapes dates/ISBNs from Wikipedia and synopses from Fandom, parses parameters, and compiles `data/mushoku-tensei.ts`.
* **Verify**: Run the script and check that `data/mushoku-tensei.ts` contains all 26 volumes populated with release dates, ISBNs, and Seven Seas synopses.

### Task 3: Parse and Compile All Volumes
* **Agent**: `backend-specialist`
* **Skills**: `bash-linux`, `performance-profiling`
* **Priority**: Medium
* **Dependencies**: Task 1, Task 2
* **Input**: EPUB files.
* **Output**: Cache files for all 26 volumes under `data/mushoku-tensei-cache/` and cover assets under `public/assets/images/mushoku-tensei/`.
* **Verify**: Ensure the files are successfully written.

### Task 4: UI and Type Validation
* **Agent**: `frontend-specialist`
* **Skills**: `react-best-practices`, `lint-and-validate`
* **Priority**: Medium
* **Dependencies**: Task 3
* **Input**: Project codebase.
* **Output**: Verified Next.js pages and type safety.
* **Verify**: Run `npx tsc --noEmit` and check dev server `/mushoku-tensei/select` drawer rendering.

---

## Phase X: Final Verification
- [ ] No purple/violet hex codes used in layout additions (emerald green theme only).
- [ ] Socratic Gate was respected.
- [ ] Run typescript checks:
  ```bash
  npx tsc --noEmit
  ```
- [ ] Run security scan:
  ```bash
  python3 .agent/skills/vulnerability-scanner/scripts/security_scan.py .
  ```
- [ ] Build verification:
  ```bash
  npm run build
  ```
