import SearchInput from '../Components/SearchText';

export default function AppHeader() {
    return (
        <header>
            <div className='d-flex justify-content-between p-4 align-items-center appHeader'>
                <img
                    className='logo'
                    src='../public/img/gabboflix.png'
                    alt=""
                />
                <SearchInput />
            </div>
        </header>

    )
}

