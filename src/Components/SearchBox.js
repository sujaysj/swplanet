const SearchBox = ({searchChange}) => {
    return (
        <div className='pb5'>
            <input 
                className='pa2 ba br4 planetsearch' 
                type='search' 
                placeholder='search'
                onChange = {searchChange}
            />
        </div>
    )
}

export default SearchBox;