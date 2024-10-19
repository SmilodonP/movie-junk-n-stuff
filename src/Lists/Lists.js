import './Lists.css';
import ListCard from '../List Card/ListCard';

function Lists({list_info}) {
    const list = list_info.map(item => {
        return (
            <ListCard item={item} />
        )
    })
    console.log(list)
    return (
        <div className='list-container'>
            {list}
        </div>
    );
}

export default Lists;