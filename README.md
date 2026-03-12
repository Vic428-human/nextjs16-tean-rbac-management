
## 本專案對應面試考題複習

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


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
