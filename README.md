# 🚀 SAP BTP Learning Project — myapp

> **Deutsch** | [English below ⬇️](#-sap-btp-learning-project--english)

---

## 🇩🇪 SAP BTP Lernprojekt

Hallo! Ich bin **Mehdi Mehr**, angehender Junior SAP Developer.

Dieses Projekt dokumentiert meine vollständige SAP-Lernreise — von JavaScript-Grundlagen bis zum produktionsnahen Deployment auf der SAP Business Technology Platform (BTP). Alles wurde eigenständig geplant, entwickelt und deployt.

### 🗺️ Was wurde aufgebaut?

Ein vollständiger, produktionsnaher SAP-Stack — von der Datenbank bis zur UI:

```
JavaScript ES6+  →  CAP Backend  →  Fiori Frontend  →  Git/GitHub
      ↓                                                      ↓
BTP Deployment   ←   ABAP RAP    ←   Annotations    ←   Unit Tests
```

### ✅ Abgeschlossene Phasen

| # | Phase | Technologien |
|---|-------|-------------|
| 1 | JavaScript ES6+ | `const/let`, Arrow Functions, Promises, `async/await`, Classes |
| 2 | SAP CAP Backend | Node.js, CDS, OData V4, Event Handlers |
| 3 | SAP Fiori Frontend | Annotations, `UI.LineItem`, Controller Extension, MVC |
| 4 | Git & GitHub | Versionskontrolle, Commit-Workflow |
| 5 | BTP Deployment | Cloud Foundry, `mbt build`, `cf deploy` |
| 6 | ABAP RAP | CDS Views, Service Binding, CRUD in ABAP OO |
| 7 | ABAP Annotations & UI | Labels, Filter, Criticality-Farben |
| 8 | RAP Action "Reorder" | Custom Action, Button in Fiori |
| 9 | ABAP Unit Tests | 3/3 Tests grün ✅ |

### 🏗️ Projektstruktur (CAP)

```
📁 myapp/
   📁 db/
      📄 schema.cds            → Datenmodell (Products)
      📁 data/
         📄 myapp-Products.csv → Testdaten
   📁 srv/
      📄 catalog-service.cds   → OData Service Definition
      📄 catalog-service.js    → Businesslogik & Event Handlers
   📄 package.json
   📄 mta.yaml                 → BTP Deployment Konfiguration
```

### 🔧 Technologie-Stack

| Schicht | Technologien |
|---------|-------------|
| **Frontend** | SAP Fiori, SAPUI5, CDS Annotations |
| **Backend** | SAP CAP (Node.js), ABAP RAP, OData V4 |
| **Datenbank** | SAP HANA Cloud, CDS Datenmodelle |
| **Cloud** | SAP BTP (Cloud Foundry), BTP ABAP Environment |
| **DevOps** | Git, GitHub, `mbt build`, `cf deploy` |
| **Sprachen** | JavaScript ES6+, ABAP OO, CDS |
| **Testing** | ABAP Unit Tests (3/3 ✅) |

### 🎯 Highlights

- **Vollständiger Stack** — Frontend + Backend + Datenbank + Cloud in einem Projekt
- **Modernes SAP** — CAP + RAP + BTP, kein Legacy-Code
- **Clean Core Prinzip** — Side-by-Side Erweiterungen, OData V4
- **Qualitätsbewusstsein** — Unit Tests implementiert und alle grün
- **Alles selbst gebaut** — Eigenständig geplant und umgesetzt

### 🚀 Lokaler Start (CAP)

```bash
# Projekt klonen
git clone https://github.com/mehdi-claude/myapp.git
cd myapp

# Abhängigkeiten installieren
npm install

# Lokal starten
cds watch
```

---

---

## EN SAP BTP Learning Project (English)

Hi! I'm **Mehdi Mehr**, an aspiring Junior SAP Developer.

This project documents my complete SAP learning journey — from JavaScript fundamentals to a production-ready deployment on SAP Business Technology Platform (BTP). Everything was independently planned, developed, and deployed.

### 🗺️ What was built?

A complete, production-ready SAP stack — from database to UI:

```
JavaScript ES6+  →  CAP Backend  →  Fiori Frontend  →  Git/GitHub
      ↓                                                      ↓
BTP Deployment   ←   ABAP RAP    ←   Annotations    ←   Unit Tests
```

### ✅ Completed Phases

| # | Phase | Technologies |
|---|-------|-------------|
| 1 | JavaScript ES6+ | `const/let`, Arrow Functions, Promises, `async/await`, Classes |
| 2 | SAP CAP Backend | Node.js, CDS, OData V4, Event Handlers |
| 3 | SAP Fiori Frontend | Annotations, `UI.LineItem`, Controller Extension, MVC |
| 4 | Git & GitHub | Version control, commit workflow |
| 5 | BTP Deployment | Cloud Foundry, `mbt build`, `cf deploy` |
| 6 | ABAP RAP | CDS Views, Service Binding, full CRUD in ABAP OO |
| 7 | ABAP Annotations & UI | Labels, filters, criticality colors |
| 8 | RAP Action "Reorder" | Custom action, button in Fiori |
| 9 | ABAP Unit Tests | 3/3 tests passing ✅ |

### 🔧 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | SAP Fiori, SAPUI5, CDS Annotations |
| **Backend** | SAP CAP (Node.js), ABAP RAP, OData V4 |
| **Database** | SAP HANA Cloud, CDS data models |
| **Cloud** | SAP BTP (Cloud Foundry), BTP ABAP Environment |
| **DevOps** | Git, GitHub, `mbt build`, `cf deploy` |
| **Languages** | JavaScript ES6+, ABAP OO, CDS |
| **Testing** | ABAP Unit Tests (3/3 ✅) |

### 🎯 Key Highlights

- **Full-stack** — Frontend + Backend + Database + Cloud in one project
- **Modern SAP** — CAP + RAP + BTP, no legacy code
- **Clean Core** — Side-by-side extensions, OData V4
- **Quality focus** — Unit tests implemented and all passing
- **Self-built** — Independently planned and executed from scratch

### 🚀 Getting Started (CAP)

```bash
# Clone the project
git clone https://github.com/mehdi-claude/myapp.git
cd myapp

# Install dependencies
npm install

# Start locally
cds watch
```

### 📬 Contact

**Mehdi Mehr**
- 🐙 GitHub: [github.com/mehdi-claude](https://github.com/mehdi-claude)
- 💼 Open to: Junior SAP Developer positions (BTP, CAP, ABAP RAP)

---

*Built with ❤️ and a lot of ☕ — June 2026*
