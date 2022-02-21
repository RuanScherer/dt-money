import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrencyUSD } from "../../utils/formatters";
import { TransactionsSearch } from "../TransactionsSearch";
import { Container } from "./styles";

interface TransactionsTableProps {
  allowSearch: boolean
}

export function TransactionTable(props: TransactionsTableProps) {
  const { filteredTransactions, filterTransactions } = useTransactions()

  function handleSearchTransactions(value: string) {
    filterTransactions(value)
  }

  return (
    <Container>
      { props.allowSearch && 
        <TransactionsSearch onSearch={handleSearchTransactions} />
      }

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                { 
                  formatCurrencyUSD(transaction.amount)
                }
              </td>
              <td>{transaction.category}</td>
              <td>
                {
                  new Intl
                    .DateTimeFormat('pt-BR')
                    .format(new Date(transaction.createdAt))
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
