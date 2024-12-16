import SearchButton from "../atoms/SearchButton"
import SearchInput from "../atoms/SearchInput"

function SearchBar() {
  return (
    <div className="flex items-center gap-2">
        <SearchInput />
        <SearchButton />
    </div>
  )
}

export default SearchBar