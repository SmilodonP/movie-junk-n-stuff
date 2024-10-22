import './Lists.css';
import ListCard from '../List Card/ListCard';

function Lists({list_info}) {
    const list = list_info.map((item,index) => {
        return (
            <ListCard key={index} item={item} />
        )
    })

    return (
        <div className='list-container'>
            {list}
        </div>
    );
}

export default Lists;