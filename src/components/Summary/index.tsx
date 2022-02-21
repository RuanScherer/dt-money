import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrencyUSD } from "../../utils/formatters";

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'deposit') {
      accumulator.income += transaction.amount
      accumulator.total += transaction.amount
    } else {
      accumulator.outcome += transaction.amount
      accumulator.total -= transaction.amount
    }

    return accumulator
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })
  
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {
            formatCurrencyUSD(summary.income)
          }
        </strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>
          {
            formatCurrencyUSD(summary.outcome)
          }
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {
            formatCurrencyUSD(summary.total)
          }
        </strong>
      </div>
    </Container>
  )
}
