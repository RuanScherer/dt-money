import { SearchInput } from "./styles";

interface TransactionsSearchProps {
  onSearch: (value: string) => void
}

export function TransactionsSearch(props: TransactionsSearchProps) {
  return (
    <SearchInput
      placeholder="Search by title"
      onChange={event => props.onSearch(event.target.value)}
    />
  )
}
