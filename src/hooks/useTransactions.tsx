import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface TransactionsContextData {
  transactions: Transaction[],
  filteredTransactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>
  filterTransactions: (title: string) => void
}

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([])
  
  useEffect(() => {
    api.get('/transactions')
      .then(response => {
        setTransactions(response.data.transactions)
        setFilteredTransactions(response.data.transactions)
      })
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', transactionInput)
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
    setFilteredTransactions([...filteredTransactions, transaction])
  }

  function filterTransactions(title: string) {
    if (!title) setFilteredTransactions(transactions)
    
    const filtered = transactions.filter(transaction => 
      transaction.title.toUpperCase().includes(title.toUpperCase())
    )
    setFilteredTransactions(filtered)
  }

  return (
    <TransactionsContext.Provider
      value={{ 
        transactions,
        filteredTransactions,
        createTransaction,
        filterTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context;
}
