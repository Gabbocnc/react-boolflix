import SearchInput from '../Components/SearchText';
export default function AppHeader() {
    return (
        <header>
            <div className='bg-dark d-flex justify-content-between p-4 align-items-center'>
                <img src='../public/img/gabboflix.png' alt="" />
                <SearchInput />
            </div>
        </header>

    )
}