# 🚀 MORA: Modern Co-Living Orchestration & Trust Network

**Target Market:** PropTech / Co-Living  
**Tech Stack:** Next.js (Frontend), FastAPI (Backend), PostgreSQL (Database), Firebase (Auth & Storage)

---
## 1. Executive Summary & Vision
MORA is an end-to-end platform designed to eliminate **trust asymmetry** and **financial management complexity** within the shared housing ecosystem. Moving beyond simple classified ads, MORA enables users to manage identity verification, deposit security, and household expense tracking through a unified **"Trust Protocol."**

---

## 2. Market Analysis & Problem Definition
* **The Trust Gap:** High risk of fraud and "scams" due to anonymous profiles on traditional listing platforms.
* **The Deposit Conflict:** Frequent disputes regarding the unfair withholding of security deposits or lack of evidence during damage assessment.
* **The Operational Friction:** Social tension and calculation errors arising from tracking utilities and shared expenses (the "money talk").
* **The Fragmented Experience:** A disjointed journey where the listing is on one platform, payment on another, and communication stays in unorganized chat apps.

---

## 3. Detailed Functional Requirements

### 3.1. Identity & Verification (The Trust Engine)
A layer that transforms the user from anonymous data into a "verified actor" within the system.
* **Tiered Verification:** * **Lvl 1 (Basic):** Email and phone verification.
    * **Lvl 2 (Verified):** Government ID / Passport OCR verification.
    * **Lvl 3 (Elite):** Professional profile linkage (LinkedIn/GitHub).
* **Dynamic Trust Score:** A 0-100 rating calculated based on the following formula:
  
 Trust Score = (V_{id} x 0.5) + (V_{soc} x 0.3) + (R_{peer} x 0.2)
  
*(Where V_{id} represents identity validity, V_{soc} represents social/professional stability, and R_{peer} represents peer reviews from past housemates.)*

### 3.2. Secure Escrow Protocol (Financial Shield)
A smart escrow system to secure the deposit amount legally and technically.
* **Locking Mechanism:** Once a match is confirmed, the deposit is charged and held in a platform-managed escrow pool (via Stripe/Iyzico).
* **State Machine Logic:**
    * **PENDING:** Payment awaited.
    * **LOCKED:** Funds held; co-living agreement officially active.
    * **RELEASE_REQUESTED:** One party requests the return of funds.
    * **DISPUTED:** Damage reported; the evidence review (arbitration) process initiated.
* **Automated Contracts:** Generation of a digital "Shared Housing Protocol" (PDF) for every successful match.

### 3.3. Shared Expense Ledger (The Financial Hub)
A transparent ledger managing the micro-financial cycle of the household.
* **Input Handling:** Entry of expense category (Utilities, Groceries, Cleaning), amount, and proof of purchase (Blob Storage).
* **Netting Engine:** Instead of "everyone owing everyone," the system calculates the **"Minimum Transfer"** algorithm at the end of each cycle.
* **Audit Trail:** Immutable expense history and retroactive audit logs for transparency.

---

## 4. System Architecture & Technical Design

### 4.1. Frontend: Next.js (App Router)
* **SEO Optimization:** Server-Side Rendering (SSR) to ensure room listings are indexed by search engines.
* **Responsive UI:** Tailwind CSS with a "Mobile-First" approach for seamless use on any device.
* **Theming:** Electric Indigo (#6366F1) as the primary brand color, Slate Dark (#0F172A) for the high-contrast professional background.

### 4.2. Backend: FastAPI (Python)
* **Asynchronous I/O:** Low-latency API responses even under high concurrent traffic.
* **Logic Isolation:** Independent services for the expense engine and the Trust Score algorithm.
* **Security:** JWT (JSON Web Token) authentication and Pydantic-based data validation.

### 4.3. Database: PostgreSQL
* **Users Table:** `id, email, password_hash, kyc_level, trust_score_raw, created_at`
* **Listings Table:** `id, host_id, rent_amount, deposit_amount, coordinates, rules_json`
* **Ledger Table:** `id, house_id, payer_id, amount, category, proof_img_url, status`

---

## 5. Non-Functional Requirements
* **Security:** All sensitive personal data is encrypted using AES-256 at the database level. ID images are purged from servers immediately after verification.
* **Scalability:** Containerized Docker architecture ready for horizontal scaling.
* **Compliance:** 100% compliance with KVKK and GDPR standards.

---

## 6. UI/UX Design System
* **Visual Language:** "Cyber-Professionalism". Sharp edges, high contrast, and typography-centric design.
* **Interaction:** A "Zero-Friction" flow that allows users to complete listings or expense entries in under 3 steps.
* **Components:** Glassmorphism-effect cards, neon status indicators (badges), and minimalist iconography.

---

## 7. Roadmap & Milestones
* **Phase 1 (Infrastructure):** Setup of Next.js & FastAPI core, Firebase Auth integration.
* **Phase 2 (Trust):** Launch of the KYC module and LinkedIn API integration.
* **Phase 3 (Discovery):** Room listings, advanced filtering, and map-based search.
* **Phase 4 (Finance):** Beta launch of the Shared Ledger (Expense Tracking) and Escrow (Deposit Management).

---

### 🛡️ Note
MORA is not just a "social media" or "listing board." It is an **Orchestration Layer** that binds co-living to a **software-defined trust protocol.** This document represents the technical and financial integrity behind the product, ensuring a secure and scalable shared housing future.

