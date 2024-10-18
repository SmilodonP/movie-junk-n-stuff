import './Genres.css';
import GenreCard from '../List Card/ListCard';

function Genres({genres_info}) {
    const genreList = genres_info.map(genre => {
        return (
            <GenreCard genre={genre} />
        )
    })
    console.log(genreList)
    return (
        <ul className='genres-container'>
            {genreList}
        </ul>
    );
}

export default Genres;