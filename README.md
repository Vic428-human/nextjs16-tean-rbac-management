
## 本專案對應面試考題複習
進度 1040
#### 🆚 interface vs type 功能差異比較

下表總結了 TypeScript 中 `interface` 與 `type` 的主要功能差異與支援情況：

| 功能特性 | interface | type | 備註 |
| :--- | :---: | :---: | :--- |
| **物件結構** | ✅ | ✅ | 皆可定義物件形狀 |
| **函數類型** | ✅ | ✅ | 皆可定義函數簽名 |
| **聯合類型** | ❌ | ✅ | `type` 支援 `|` 聯合語法 |
| **元組類型** | ❌ | ✅ | `type` 可定義固定長度陣列 |
| **映射類型** | ❌ | ✅ | 如 `Partial`, `Readonly` 等工具類型 |
| **條件類型** | ❌ | ✅ | 支援 `T extends U ? X : Y` |
| **宣告合併** | ✅ | ❌ | `interface` 支援同名合併 |
| **繼承/擴展** | `extends` | `&` | 語法不同 (交叉類型) |
| **實作類別** | ✅ | ❌ | 僅 `interface` 可被 `class implements` |

> interface 和 type 都可以用來定義物件結構、函數簽名、聯合類型等，但它們在語法、功能與使用情境上有一些關鍵差異。

- 宣告合併
```ts
//  type 不支援此功能，重複定義會報錯。
interface User {
  id: number;
}

interface User {
  name: string;
}
// 合併後：{ id: number; name: string }
```

## 本專案預期架構
> 原先後端的部分，想透過 prisma，但考量到 prisma 的 ORM 生態跟我原本已經寫好的交易所 gorm 生態不同，會有髒資料跟阻塞主業務等風險。
> 所以本專案不考慮使用 prisma，但前端還是想用 Nextjs 製作。

- 後台前端： 使用 Next.js (React) 建構介面。
- 後台後端： 不建立獨立的 Next.js API。後台前端直接呼叫 現有的 Golang Gin API。
- 資料庫： 只有 Golang 能連接 Postgres。

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
