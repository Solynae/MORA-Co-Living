# MORA: Modern Co-Living Orchestration & Trust Network - Plan

## 🎯 Vizyon (PRD Uyumlu)
MORA, ev arkadaşlığı ekosistemindeki "güven asimetrisi" ve "finansal karmaşıklığı" çözmeyi hedefleyen uçtan uca bir platformdur.

## 🛠 Teknik Yığın (Tech Stack)
- **Frontend:** Next.js (TypeScript, Tailwind CSS)
- **Backend:** FastAPI (Python) - *PRD 4.2 ile uyumlu*
- **Database:** PostgreSQL
- **Auth:** Firebase

## 📅 Geliştirme Yol Haritası

### 1. Aşama: Altyapı Kurulumu (TAMAMLANDI)
- [x] Backend (FastAPI) ve Frontend (Next.js) dizinlerinin ayrılması.
- [x] PRD ile uyumlu `plan.md` oluşturulması.
- [x] Temel API rotalarının (Health Check) tanımlanması.

### 2. Aşama: Güven Motoru (Trust Engine) - GELECEK
- [ ] Tiered Verification (Lvl 1-2-3) sisteminin kodlanması.
- [ ] Dinamik Trust Score algoritmasının FastAPI tarafında implementasyonu.
- [ ] Firebase Auth entegrasyonu.

### 3. Aşama: Finansal Merkez (Ledger & Escrow) - GELECEK
- [ ] Shared Expense Ledger: Masraf girişi ve kanıt yükleme.
- [ ] "Minimum Transfer" algoritması ile borç denkleştirme.
- [ ] Escrow (Emanet Kasa) statü yönetimi.
