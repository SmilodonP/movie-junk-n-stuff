import { useLocation } from 'react-router-dom'

function Error() {
    const location = useLocation();
    const { error } = location.state || {};
    return (
        <p>{error.message}</p>
    )
}

export default Error;