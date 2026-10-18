---
title: QDay 後量子路線圖
sidebar_label: QDay 後量子路線圖
---

# QDay 後量子路線圖

## 1. 整體策略 {/* #1-overall-strategy */}

QDay 的 PQC 策略應從單純的「支援 PQC 的 EVM 鏈」演進為：

> **具備帳戶層級遷移能力的量子就緒 EVM 網絡（Quantum-Ready EVM Network with Account-Level Migration）**

核心原則不是決定何時必須移除 ECDSA，而是建立一條遷移路徑，讓現有用戶、帳戶、應用程式與基礎設施能夠逐步採用後量子安全性。

建議的遷移模型為：

```
Existing QDay Account
        │
        │ Upgrade
        ↓
Quantum-Ready Account
        │
        │ Optional Migration
        ↓
Hybrid Account
        │
        │ Future Upgrade
        ↓
PQC-Native Account
```

此方法達成三項目標：

1. 保留現有的 EVM 兼容性。
2. 提供一條可行的 PQC 遷移路徑。
3. 讓 QDay 最終成為抗量子網絡。

---



## 2. QDay 後量子路線圖 {/* #2-qday-pqc-roadmap */}

路線圖分為六個階段：


| 階段        | 目標時間          | 核心目標                       | 主要交付項目                                                                      |
| ----------- | ----------------- | ------------------------------ | --------------------------------------------------------------------------------- |
| **第 0 階段** | 現有              | Abelian 提供 PQC               | L1 結算與安全錨定、狀態承諾的抗量子最終確定性                                          |
| **第 1 階段** | 2026 H2           | PQC 基礎                       | 密碼敏捷性（Crypto Agility）、ML-DSA-65、PQC SDK                                    |
| **第 2 階段** | 2026 H2 – 2027 H1 | PQC 執行基礎                   | AA Smart Account、PQC Precompile、PQC 驗證                                         |
| **第 3 階段** | 2027 H1 – H2      | 混合安全性                     | ECDSA + PQC、混合交易、混合 AA                                                     |
| **第 4 階段** | 2027 H2 – 2028    | PQC 遷移與基礎設施             | PQC Credential、帳戶遷移、跨鏈橋、預言機、治理                                     |
| **第 5 階段** | 2028+             | 完整 PQC 原生網絡              | PQC 原生帳戶、驗證者、排序器、全面遷移                                             |


最重要的轉變是：

```
ECDSA
   ↓
ECDSA + PQC Hybrid
   ↓
PQC Native
```

技術演進路徑為：

```
Abelian L1 PQC
       ↓
PQC Foundation
       ↓
AA Smart Wallet
       ↓
PQC Precompile
       ↓
Hybrid Security
       ↓
PQC Credential
       ↓
PQC Infrastructure
       ↓
PQC-Native
```

---



## 3. 第 0 階段——Abelian 提供 PQC {/* #3-phase-0--abelian-provides-pqc */}



### 目標 {/* #objective */}

Abelian 作為 QDay 的 L1 結算與安全錨定層，為 QDay 的狀態承諾提供抗量子的最終確定性層。

一旦 QDay 的狀態承諾在 Abelian 上完成最終確認，對應的 QDay 歷史即以密碼學方式錨定於 L1，除非破壞底層的密碼學保證，否則無法篡改。

Abelian 是後續每個階段的先決條件。在 QDay 引入 EVM 層 PQC 之前，已確認的狀態就已受到這條 L1 最終確定性路徑的保護。

```
                    Abelian L1
                         │
            ┌────────────┼────────────┐
            │            │            │
     Settlement      Security     Quantum-resistant
       Anchor         Anchor         finality
            │            │            │
            └────────────┼────────────┘
                         │
              QDay State Commitment
                         │
              Cryptographically Anchored History
```



### 3.1 Abelian 提供甚麼 {/* #31-what-abelian-provides */}

- 為 QDay 提供 L1 結算與安全錨定。
- 為 QDay 狀態承諾提供抗量子的最終確定性層。
- L1 最終確認後，以密碼學方式錨定 QDay 歷史。
- 已確認歷史的完整性：除非破壞 L1 的密碼學保證，否則無法篡改。
- 供 QDay 後續階段重複使用的 PQC 基元與營運經驗。



### 3.2 為甚麼這是第 0 階段 {/* #32-why-this-is-phase-0 */}

QDay 不應把 PQC 視為僅限 EVM 的升級。即使在帳戶、預編譯合約與憑證遷移之前，Abelian 就已為 QDay 的狀態承諾提供抗量子的最終確定性層。

目標是：

> **Abelian 是 QDay 的 L1 結算與安全錨定。已最終確認的狀態承諾，除非破壞底層的密碼學保證，否則無法篡改。**

---



## 4. 第 1 階段——PQC 基礎 {/* #4-phase-1--pqc-foundation */}



### 目標 {/* #objective-1 */}

在改變 QDay 面向用戶的交易模型之前，先建立密碼學基礎。

```
                    QDay PQC Foundation
                           │
            ┌──────────────┼──────────────┐
            │              │              │
       Crypto Agility   ML-DSA-65     PQC SDK
            │              │              │
            └──────────────┼──────────────┘
                           │
                     PQC Framework
```



### 4.1 ML-DSA-65 {/* #41-ml-dsa-65 */}

ML-DSA-65 應作為 QDay 首次實作的主要 PQC 簽名方案。

關鍵需求：

- 標準化的 PQC 簽名算法。
- 在 QDay 密碼學層原生支援。
- 支援錢包簽名與驗證。
- 支援 Smart Account 驗證。
- 支援未來的混合簽名。

實作應抽象於統一的簽名介面之後：

```
SignatureScheme
    │
    ├── ECDSA
    ├── ML-DSA-65
    ├── Hybrid
    └── Future-PQC
```



### 4.2 密碼敏捷性（Crypto Agility） {/* #42-crypto-agility */}

QDay **不應**將 ML-DSA-65 硬編碼進協議架構。

設計應允許在不重新設計帳戶、交易或基礎設施模型的前提下引入未來的算法。

建議的抽象：

```
SignatureScheme

- ECDSA
- ML-DSA-65/SLH-DSA/FN-DSA
- Hybrid
- Future-PQC
```

策略目標是：

> **QDay 應是 PQC 就緒（PQC-ready），而非被 ML-DSA 鎖定。**



### 4.3 PQC SDK {/* #43-pqc-sdk */}

為密碼學基元提供統一、面向開發者的 PQC SDK：

- 密鑰產生
- 簽名
- 驗證
- 混合簽名
- 混合驗證

PQC 帳戶建立、帳戶升級與憑證管理屬於 **第 4 階段** 的 API。第 1 階段的 SDK 應公開這些後續 API 會調用的密碼學基元，但尚不應提供帳戶遷移流程。

範例：

```
createPQCWallet()
createHybridWallet()
signWithMLDSA()
verifyMLDSA()
createHybridSignature()
```

---



## 5. 第 2 階段——PQC 執行基礎 {/* #5-phase-2--pqc-execution-foundation */}



### 目標 {/* #objective-2 */}

在引入帳戶層級遷移之前，建立並驗證 QDay 支援 PQC 驗證所需的核心執行能力。

優先事項是證明 QDay 能透過 AA Smart Account 與 PQC Precompile 可靠地執行 PQC 驗證。

```
                     QDay PQC Execution
                           │
              ┌────────────┼────────────┐
              │            │            │
         AA Smart       PQC         PQC
          Account     Precompile  Verification
              │            │            │
              └────────────┼────────────┘
                           │
                    PQC Execution Layer
```



### 5.1 AA Smart Account 基礎 {/* #51-aa-smart-account-foundation */}

帳戶抽象（Account Abstraction）應作為可支援多種驗證機制的可編程帳戶層引入。

```
Smart Account
      │
      ├── ECDSA
      ├── ML-DSA
      ├── Hybrid
      └── Future PQC
```

在此階段，目標是建立帳戶架構與驗證介面。PQC Credential 註冊與完整的 PQC 帳戶遷移刻意延後至第 4 階段。

### 5.2 PQC Precompile {/* #52-pqc-precompile */}

PQC Precompile 應為 PQC 簽名提供高效的原生驗證。

可能的功能包括：

```
ML-DSA Verify
Hybrid Verify
```

概念上：

```
ML-DSA Verify

Input:
    publicKey
    message
    signature

Output:
    true / false
```

預編譯合約提供：

- 原生執行。
- 比純 Solidity 實作更低的驗證成本。
- 更佳的性能。
- 可供 Smart Account 重複使用的驗證。
- 跨鏈橋、預言機與治理授權的共同基礎。
- 未來 PQC 應用的共同基礎。



### 5.3 PQC 驗證 {/* #53-pqc-verification */}

第 2 階段應驗證：

- ML-DSA-65 簽名產生與驗證。
- Smart Account 整合。
- PQC Precompile 的正確性。
- 驗證 Gas 與執行性能。
- 與 zkEVM 執行環境的兼容性。

目標是：

> **QDay 能可靠地執行並驗證 PQC 簽名。**



### 第 2 階段交付項目 {/* #phase-2-deliverables */}


| 組件                  | 目標                                                                  | 優先級   |
| --------------------- | --------------------------------------------------------------------- | -------- |
| AA Smart Account      | 具備 PQC 能力的架構                                                   | 關鍵     |
| PQC Precompile        | ML-DSA 驗證                                                           | 關鍵     |
| PQC 驗證              | 可投入生產的驗證路徑                                                  | 關鍵     |
| zkEVM 整合            | 兼容性驗證                                                            | 高       |
| 性能基準測試          | Gas／CPU／延遲測試（第 1 階段之後透過測試取得範例數值）                | 高       |




### 第 2 階段完成標準 {/* #phase-2-completion-criteria */}

```
AA Smart Account
       +
PQC Precompile
       +
ML-DSA Verification
       ↓
PQC Execution Foundation
```

目標是：

> **QDay 具備可投入生產的 PQC 驗證執行基礎，且無需立即進行帳戶遷移。**

---



## 6. QDay 帳戶憑證模型 {/* #6-qday-account-credential-model */}

PQC Credential 是 **第 4 階段** 的帳戶遷移機制。它不屬於第 1 階段的 SDK，也不是第 2 階段執行基礎或第 3 階段混合交易所需的項目。

第 2 階段與第 3 階段應為此模型保留開放的帳戶架構。在第 4 階段之前，不應要求用戶註冊 PQC 憑證。

第 4 階段的遷移路徑為：

```
Existing ECDSA Account
        │
        ↓
   Add PQC Credential
        │
        ↓
   Hybrid Account
        │
        ↓
   PQC-Native Account
```



### 6.1 帳戶憑證 {/* #61-account-credentials */}

QDay Smart Account 可支援多種驗證憑證：

```
QDay Account
     │
     ├── ECDSA Credential
     │
     ├── ML-DSA Credential
     │
     └── Policy
```

例如：

```
Account #123

Credentials:

ECDSA:
    0x1234...

ML-DSA:
    ML-DSA public key...

Policy:

Mode = Hybrid
```

帳戶仍是主要身份，而其驗證憑證可以演進。

### 6.2 為甚麼 PQC Credential 在第 4 階段引入 {/* #62-why-pqc-credential-is-introduced-in-phase-4 */}

在 QDay 驗證完以下項目之前，不應要求 PQC Credential：

```
ML-DSA
   ↓
PQC Verification
   ↓
AA Smart Account
   ↓
Hybrid Transaction
```

當這些能力可投入生產後，第 4 階段以 PQC Credential 作為實際機制，讓現有帳戶採用 PQC，而無需建立全新帳戶並手動遷移所有資產。

不再是：

```
ECDSA Wallet
      ↓
Create New PQC Wallet
      ↓
Transfer Assets
```

QDay 支援：

```
Existing Account
      ↓
Add PQC Credential
      ↓
Quantum-Ready Account
```



### 6.3 安全模式 {/* #63-security-modes */}

這些模式描述帳戶的驗證政策。Classic 兼容性自第 2 階段起存在。混合交易簽名於第 3 階段驗證。**PQC-Ready**（已註冊 ML-DSA 憑證）與基於憑證的政策變更屬於第 4 階段。PQC-Native 是第 5 階段的目標。

### Classic {/* #classic */}

```
ECDSA
   ↓
Transaction
```

主要用於舊有 EVM 兼容性。

### PQC-Ready（第 4 階段） {/* #pqc-ready-phase-4 */}

```
ECDSA
  +
ML-DSA Credential
```

帳戶已註冊 PQC 憑證，但不一定要求每筆交易都使用兩種簽名。此狀態由第 4 階段的憑證註冊建立，而非第 2 階段或第 3 階段。

### Hybrid {/* #hybrid */}

```
ECDSA Signature
      +
ML-DSA Signature
      ↓
Transaction Valid
```

第 3 階段將此驗證為生產環境的交易格式。第 4 階段可將相同的混合政策套用至已註冊 PQC 憑證的帳戶。

### PQC-Native（第 5 階段） {/* #pqc-native-phase-5 */}

```
ML-DSA Signature
      ↓
Transaction Valid
```

這是長期目標。

---



## 7. AA Smart Wallet 作為 PQC 遷移層 {/* #7-aa-smart-wallet-as-the-pqc-migration-layer */}

帳戶抽象不應僅被視為錢包功能。

對 QDay 而言，**AA Smart Wallet 可成為主要的 PQC 遷移層**。

AA 在第 2 階段作為可編程帳戶層引入。PQC Credential 則在第 4 階段附加到該層。

傳統 EOA 架構：

```
EOA
 │
 └── ECDSA
       │
       └── Ethereum Transaction Model
```

基於 AA 的架構：

```
Smart Account
      │
      ├── ECDSA
      ├── ML-DSA
      ├── Hybrid
      ├── Multisig
      └── Future PQC
```

這讓 QDay 能引入新的簽名方案，而不必迫使整個生態系統立即放棄 EVM 兼容性。

建議模型為：

```
                    QDay Account
                         │
                 Smart Account
                         │
          ┌──────────────┼──────────────┐
          │              │              │
        ECDSA          Hybrid          PQC
          │              │              │
       Legacy        Migration       Future
                         │
                         ↓
                  PQC Credentials
```

Smart Account 是第 2 階段的架構。PQC Credential 是第 4 階段附加於其上的遷移機制。

因此：

> **AA + PQC = QDay 量子就緒帳戶架構**

---



## 8. 第 3 階段——混合安全性 {/* #8-phase-3--hybrid-security */}

PQC 執行基礎建立後，QDay 可引入正式的混合安全模型。

### 目標 {/* #objective-3 */}

在開始大規模帳戶遷移之前，驗證 ECDSA + ML-DSA 作為可投入生產的過渡機制。

```
ECDSA
   +
ML-DSA
   ↓
Hybrid Transaction
```



### 安全等級 {/* #security-levels */}

```
Level 0
ECDSA Only

Level 1
PQC-Capable Account

Level 2
ECDSA + ML-DSA Signature

Level 3
ML-DSA Only
```



### Level 0——ECDSA {/* #level-0--ecdsa */}

```
ECDSA
```

目的：

- 最大化 EVM 兼容性。
- 支援現有錢包與應用程式。
- 舊有模式。



### Level 1——具備 PQC 能力 {/* #level-1--pqc-capable */}

```
Smart Account
+
PQC Verification Capability
```

帳戶架構可執行 PQC 驗證，但 PQC Credential 註冊與基於憑證的帳戶遷移屬於第 4 階段的工作，第 3 階段不需要。

### Level 2——混合 {/* #level-2--hybrid */}

```
ECDSA Signature
        +
ML-DSA Signature
        ↓
Transaction Valid
```

這應成為 QDay **建議的過渡安全模式**。

### Level 3——PQC 原生 {/* #level-3--pqc-native */}

```
ML-DSA
   ↓
PQC-Native Account
```

這是長期目標。

### 第 3 階段交付項目 {/* #phase-3-deliverables */}

- 混合交易格式。
- 混合 AA 驗證。
- ECDSA + ML-DSA 簽名驗證。
- 錢包支援混合簽名。
- Gas 與性能基準測試。
- 與現有 EVM 應用程式的兼容性測試。

目標是：

> **QDay 能在生產環境中安全地以 ECDSA + ML-DSA 混合安全性運作。**

---



## 9. 第 4 階段——PQC 遷移與基礎設施 {/* #9-phase-4--pqc-migration--infrastructure */}



### 目標 {/* #objective-4 */}

第 4 階段是 **PQC 遷移與基礎設施階段**。

在 QDay 於第 2 階段建立 PQC 執行、並於第 3 階段驗證混合安全性之後，第 4 階段引入基於 PQC Credential 的帳戶遷移，並逐步保護 QDay 的**關鍵協議基礎設施**。

目標是保護那些能控制、授權或影響高價值資產與協議狀態的組件。

遷移優先順序為：

```
Smart Account
      ↓
Bridge
      ↓
Oracle
      ↓
Governance
      ↓
Treasury / Admin
      ↓
Sequencer
      ↓
Validator
```

原則是：

> **先保護價值最高的授權路徑，再逐步將 PQC 保護擴展至共識基礎設施。**



### 9.1 PQC Credential 與帳戶遷移 {/* #91-pqc-credential--account-migration */}

PQC Credential 在第 4 階段成為生產環境的遷移機制。

帳戶層級的 PQC 採用實際上就在此發生：現有帳戶註冊 ML-DSA 憑證，可選擇啟用混合政策，之後可再升級為 PQC 原生帳戶。第 2 階段只證明了驗證可行。第 3 階段只證明了混合簽名可行。第 4 階段是第一個改變用戶帳戶憑證的階段。

### 遷移模型 {/* #migration-model */}

```
Existing ECDSA Account
        ↓
Register ML-DSA Credential
        ↓
Quantum-Ready Account
        ↓
Enable Hybrid Policy
        ↓
Hybrid Account
        ↓
Future Upgrade
        ↓
PQC-Native Account
```

遷移應支援：

- ML-DSA 公鑰註冊。
- 憑證所有權驗證。
- 憑證輪替。
- 憑證撤銷。
- 帳戶政策更新。
- 混合授權。
- 復原機制。
- 與 ECDSA 的向後兼容性。

第 4 階段的 SDK／帳戶 API 包括：

```
registerPQCCredential()
upgradeToPQCAccount()
rotatePQCCredential()
revokePQCCredential()
setAccountPolicy()
```

關鍵目標是：

> **現有用戶能逐步採用 PQC，而無需進行破壞性的資產遷移。**



### 第 4 階段憑證交付項目 {/* #phase-4-credential-deliverables */}


| 組件                | 目標                               | 優先級   |
| ------------------- | ---------------------------------- | -------- |
| PQC Credential      | 可投入生產的 ML-DSA 憑證           | 關鍵     |
| 帳戶升級            | 現有帳戶遷移                       | 關鍵     |
| 憑證輪替            | 安全的密鑰輪替                     | 高       |
| 憑證復原            | 復原／緊急機制                     | 高       |
| 混合政策            | ECDSA + ML-DSA 政策                | 關鍵     |




### 9.2 PQC QDay 跨鏈橋 {/* #92-pqc-qday-bridge */}

跨鏈橋應是優先級最高的 PQC 組件之一，因為跨鏈橋的授權密鑰可控制大量跨鏈資產。

### 目前模型 {/* #current-model */}

```
Withdrawal Request
       ↓
Relayer
       ↓
ECDSA Signature
       ↓
Bridge Authorization
```



### 混合模型 {/* #hybrid-model */}

```
Withdrawal Request
       ↓
Relayer
       │
       ├── ECDSA Signature
       └── ML-DSA Signature
              ↓
       Hybrid Authorization
              ↓
           Bridge
```



### 目標模型 {/* #target-model */}

```
PQC Relayer
      ↓
ML-DSA Authorization
      ↓
Bridge
```

跨鏈橋的 PQC 遷移應涵蓋：

- Relayer 授權
- 提取授權
- 管理員授權
- 緊急控制
- 跨鏈橋設定變更
- 簽署者輪替
- 密鑰復原

跨鏈橋也應支援憑證輪替，讓 PQC 密鑰能在不重新設計整個跨鏈橋協議的情況下引入。

### 9.3 PQC 預言機 {/* #93-pqc-oracle */}

QDay 價格預言機應逐步保護價格簽署與管理授權路徑。

### 目前架構 {/* #current-architecture */}

```
OracleDataNode
       ↓
OracleValidatorNode
       ↓
Price Proof
       ↓
FeedPriceContract
```



### 混合架構 {/* #hybrid-architecture */}

```
OracleDataNode
       ↓
OracleValidatorNode
       │
       ├── ECDSA
       └── ML-DSA
              ↓
       Hybrid Price Proof
              ↓
       FeedPriceContract
```

PQC 保護應涵蓋：

- 預言機驗證者簽名
- 價格簽署者
- PriceProof 授權
- 手動覆寫（Manual Override）
- 管理員控制
- 簽署者輪替

目標是防止遭入侵的傳統簽署密鑰成為價格操縱的單點故障。

### 9.4 PQC 治理 {/* #94-pqc-governance */}

治理控制協議層級的權限與升級，因此應逐步採用相同的混合授權模型。

```
Governance Proposal
        ↓
ECDSA + ML-DSA
        ↓
Governance Verification
        ↓
Timelock / Execution
        ↓
Protocol Change
```

優先的治理操作包括：

- 協議升級
- 驗證者管理
- 跨鏈橋設定
- 金庫管理
- 緊急管理
- 共識參數變更



### 9.5 PQC 金庫與管理員 {/* #95-pqc-treasury-and-admin */}

高價值金庫與特權管理員帳戶應在一般基礎設施之前完成遷移。

建議模型：

```
Treasury / Admin
       │
       ├── ECDSA
       ├── ML-DSA
       └── Multisig Policy
```

更強的設定可要求：

```
ECDSA + ML-DSA
        +
     Multisig
```

這在過渡期間提供縱深防禦。

### 9.6 PQC 排序器 {/* #96-pqc-sequencer */}

在跨鏈橋、預言機、治理與金庫具備 PQC 保護之後，QDay 應評估在排序器層級授權使用 PQC 簽名。

可能的模型：

```
Sequencer
    ↓
Block / Batch
    ↓
ECDSA + ML-DSA
    ↓
Sequencer Authorization
```

在正式上線之前，QDay 應進行以下基準測試：

- 簽名產生延遲
- 簽名驗證延遲
- CPU 消耗
- 網絡頻寬
- 批次／區塊大小的影響
- 儲存開銷



### 9.7 PQC 驗證者 {/* #97-pqc-validator */}

驗證者簽名與見證（attestation）最終應支援 PQC。

```
Validator
    ↓
Attestation
    ↓
ML-DSA / Hybrid Signature
    ↓
Consensus
```

由於 PQC 簽名遠大於 ECDSA 簽名，驗證者遷移應在完成性能與網絡影響測試後才引入。

### 第 4 階段交付項目 {/* #phase-4-deliverables */}


| 組件             | 目標                  | 優先級   |
| ---------------- | --------------------- | -------- |
| 跨鏈橋           | 混合 → PQC            | 關鍵     |
| 預言機           | 混合 → PQC            | 關鍵     |
| 治理             | 混合 → PQC            | 高       |
| 金庫／管理員     | 混合 → PQC            | 高       |
| 排序器           | PQC 研究 → 混合       | 中       |
| 驗證者           | PQC 研究 → 混合       | 中       |




### 第 4 階段完成標準 {/* #phase-4-completion-criteria */}

```
                QDay Infrastructure
                       │
        ┌──────────────┼──────────────┐
        │              │              │
      Bridge         Oracle       Governance
        │              │              │
        └──────────────┼──────────────┘
                       │
                 PQC Security
                       │
                Critical Paths
```

目標是：

> **QDay 所有關鍵授權路徑都具備可投入生產的 PQC 或混合安全性選項。**

---



## 10. 第 5 階段——完整 PQC 原生網絡 {/* #10-phase-5--full-pqc-native-network */}



### 目標 {/* #objective-5 */}

第 5 階段是長期目標，PQC 將成為 QDay 帳戶、協議與基礎設施各層的一級安全基元。

目標不一定是立即移除 ECDSA。相反地，QDay 應達到 PQC 成為**預設安全路徑**的狀態，而 ECDSA 在適當之處仍可作為兼容機制使用。

```
PQC-Ready
    ↓
Hybrid
    ↓
PQC-Native
```



### 10.1 PQC 原生帳戶 {/* #101-pqc-native-account */}

目標帳戶模型為：

```
PQC Smart Account
       │
       └── ML-DSA Credential
```

不過，QDay 應繼續支援：

```
Legacy ECDSA Account
Hybrid Account
PQC-Native Account
```

這形成長期的兼容性模型：

```
Legacy
   ↓
Hybrid
   ↓
PQC Native
```



### 10.2 PQC 原生基礎設施 {/* #102-pqc-native-infrastructure */}

目標狀態是保護完整的關鍵基礎設施堆疊：

```
                 QDay
                  │
       ┌──────────┼──────────┐
       │          │          │
    Account     Bridge     Oracle
       │          │          │
       └──────────┼──────────┘
                  │
             Governance
                  │
             Treasury
                  │
             Sequencer
                  │
             Validator
```

每個組件都應支援 PQC 憑證、密鑰輪替與密碼敏捷性。

### 10.3 PQC 作為預設安全模型 {/* #103-pqc-as-the-default-security-model */}

長期的用戶體驗應朝以下方向演進：

```
New Account
     ↓
PQC-Native Smart Account
     ↓
ML-DSA
```

混合模式仍可供需要傳統密碼學兼容性的應用程式使用。

建議的預設層級：

```
PQC Native     ← Default for new accounts
Hybrid         ← Recommended compatibility mode
ECDSA          ← Legacy compatibility
```



### 10.4 zkEVM 與 PQC {/* #104-zkevm-and-pqc */}

QDay 是 zkEVM 網絡，因此除非有明確的性能與證明效益，PQC 整合應與 ZK 電路保持分離。

### 初始模型 {/* #initial-model */}

```
Transaction
     ↓
PQC Precompile
     ↓
Execution
     ↓
State Transition
     ↓
zk Proof
```

這避免讓 ML-DSA 驗證成為初始 ZK 電路的必要部分。

### 長期研究 {/* #long-term-research */}

```
ML-DSA
   ↓
ZK-Friendly Verification
   ↓
ZK Circuit
   ↓
Succinct PQ Proof
```

這應保持為研究與優化方向，而非 QDay 初始 PQC 部署的先決條件。

### 10.5 長期密碼敏捷性 {/* #105-long-term-crypto-agility */}

即使在 PQC 原生階段，QDay 也不應將自己定義為僅支援 ML-DSA 的網絡。

```
                QDay PQC Framework
                       │
          ┌────────────┼────────────┐
          │            │            │
       ML-DSA       Hybrid      Future PQC
          │            │            │
          └────────────┼────────────┘
                       │
                 Crypto Agility
```

未來的 PQC 算法應能透過協議升級引入，而無需從根本上重新設計帳戶或基礎設施架構。

### 10.6 第 5 階段完成標準 {/* #106-phase-5-completion-criteria */}

QDay 在符合以下條件時達到 PQC 原生階段：

- PQC 原生帳戶可投入生產。
- PQC 是新帳戶的預設安全選項。
- 關鍵基礎設施支援 PQC 授權。
- 跨鏈橋與預言機具備 PQC 原生安全性。
- 治理與金庫支援 PQC 原生控制。
- 排序器與驗證者的 PQC 支援已在需要之處通過生產驗證。
- ECDSA 僅在兼容性需要之處保留。
- 密碼敏捷性允許未來的 PQC 算法升級。

最終狀態為：

```
PQC-Native Account
        +
PQC-Native Infrastructure
        +
Crypto Agility
        +
EVM Compatibility
        +
zkEVM
        ↓
Quantum-Resistant QDay
```

---



## 11. 最終 QDay PQC 架構 {/* #11-final-qday-pqc-architecture */}

目標架構應結合 EVM 兼容性、帳戶層級遷移、PQC 執行能力與漸進式的基礎設施遷移。

```
                         QDay
                          │
              Quantum-Ready EVM
                          │
          ┌───────────────┴────────────────┐
          │                                │
     EVM Compatibility               PQC Framework
          │                                │
     ECDSA / Legacy                Crypto Agility
                                           │
                         ┌─────────────────┼─────────────────┐
                         │                 │                 │
                      ML-DSA            Hybrid          Future PQC
                         │                 │                 │
                         └─────────────────┼─────────────────┘
                                           │
                                    AA Smart Account
                                           │
                              ┌────────────┴────────────┐
                              │                         │
                    PQC Precompile (Phase 2)   PQC Credential (Phase 4)
                              │                         │
                              └────────────┬────────────┘
                                           │
                    ┌──────────────────────┼──────────────────────┐
                    │                      │                      │
                 Wallet                  Bridge                 Oracle
                    │                      │                      │
                    └──────────────────────┼──────────────────────┘
                                           │
                                      Governance
                                           │
                                      Sequencer
                                           │
                                      Validator
                                           │
                                         zkEVM
                                           │
                                      Abelian L1
```

此架構有四個主要層級：

### Layer 1——兼容性 {/* #layer-1--compatibility */}

```
ECDSA
EVM
Existing DApps
Existing Wallets
```



### Layer 2——PQC 執行（第 2 階段） {/* #layer-2--pqc-execution-phase-2 */}

```
AA Smart Account
PQC Precompile
ML-DSA Verification
Hybrid Verification
```



### Layer 3——帳戶遷移（第 4 階段） {/* #layer-3--account-migration-phase-4 */}

```
PQC Credential
Hybrid Account
PQC Account
```



### Layer 4——PQC 基礎設施（第 4–5 階段） {/* #layer-4--pqc-infrastructure-phase-45 */}

```
Bridge
Oracle
Governance
Treasury
Sequencer
Validator
```

遷移方向為：

```
ECDSA Compatibility
        ↓
PQC Execution (AA + Precompile)
        ↓
Hybrid Security
        ↓
PQC Credential / Account Migration
        ↓
PQC Infrastructure
        ↓
PQC-Native QDay
```

---



## 12. 建議時間表 {/* #12-recommended-timeline */}



### 現有——Abelian 提供 PQC {/* #existing--abelian-provides-pqc */}

Abelian 作為 QDay 的 L1 結算與安全錨定層，為 QDay 的狀態承諾提供抗量子的最終確定性層。

```
Abelian L1
     +
Settlement & security anchor
     +
Quantum-resistant finality
```

目標：

> **一旦 QDay 的狀態承諾在 Abelian 上完成最終確認，對應的歷史除非破壞底層的密碼學保證，否則無法篡改。**

---



### 2026 H2——準備 {/* #2026-h2--prepare */}

專注於建立基礎：

```
Crypto Agility
      +
ML-DSA-65
      +
PQC SDK
      +
AA Architecture
      +
PQC Verification
```

目標：

> **QDay 建立其 PQC 基礎。**

---



### 2027 H1——啟用 {/* #2027-h1--enable */}

建立生產環境的 PQC 執行：

```
AA Smart Account
       +
PQC Precompile
       +
ML-DSA Verification
```

交付項目：

- PQC Smart Account 架構
- PQC Precompile
- ML-DSA 驗證
- PQC 執行基準測試
- zkEVM 兼容性驗證

目標：

> **QDay 能在生產環境中執行 PQC 驗證。**

---



### 2027 H2——混合 {/* #2027-h2--hybrid */}

引入混合交易安全性：

```
ECDSA
   +
ML-DSA
   ↓
Hybrid Transaction
```

交付項目：

- 混合錢包
- 混合 AA
- 混合帳戶
- 混合交易
- 混合跨鏈橋
- 混合預言機

目標：

> **混合模式成為建議的過渡安全模式。**

---



### 2028——PQC 遷移與基礎設施 {/* #2028--pqc-migration--infrastructure */}

先啟用帳戶層級的 PQC 遷移，再逐步保護關鍵基礎設施：

```
PQC Credential / Account Migration
 ↓
Bridge
 ↓
Oracle
 ↓
Governance
 ↓
Treasury
 ↓
Sequencer
 ↓
Validator
```

目標：

> **QDay 的關鍵基礎設施具備抗量子能力。**

---



### 2028+——PQC 原生 {/* #2028--pqc-native */}

最終架構：

```
PQC-Native Account
        +
PQC-Native Infrastructure
        +
Crypto Agility
        +
EVM Compatibility
```

目標：

> **抗量子的 QDay 網絡**

---



## 13. 策略定位 {/* #13-strategic-positioning */}

最終的 QDay PQC 策略可總結為：

```
Inherit
   ↓
Prepare
   ↓
Upgrade
   ↓
Hybridize
   ↓
Migrate & Protect
   ↓
Go PQC Native
```

或更具體地說：

```
Abelian PQC Finality
      ↓
Crypto Agility
      ↓
PQC Execution
      ↓
ECDSA + ML-DSA
      ↓
PQC Credential
      ↓
Account Migration
      ↓
PQC Wallet / Bridge / Oracle
      ↓
PQC Infrastructure
      ↓
PQC-Native QDay
```



### 遷移排序原則 {/* #migration-sequencing-principle */}

```
Phase 0: Inherit (PQC Finality)
        ↓
Phase 1: Prepare
        ↓
Phase 2: Enable
        ↓
Phase 3: Hybridize
        ↓
Phase 4: Migrate & Protect
        ↓
Phase 5: PQC Native
```

PQC Credential 刻意在第 4 階段引入，因為它是一種**帳戶遷移機制**。AA、PQC Precompile 與 PQC 驗證是第 2 階段的執行能力。混合簽名是第 3 階段的過渡機制。前述任何階段都不應要求用戶註冊 PQC 憑證。

### 核心原則 {/* #core-principle */}

> **QDay 不應只是以 ML-DSA 取代 ECDSA。它應建立可升級的密碼學架構，讓現有帳戶與基礎設施能從傳統密碼學逐步過渡到混合模式，最終達到後量子安全性。**
