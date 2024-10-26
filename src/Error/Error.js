import { useLocation } from 'react-router-dom'

function Error() {
    const location = useLocation();
    const { error } = location.state || {};
    return (
        <section>
            <br></br>
            <br></br>
            <h3>Something went wrong</h3>
            <h3>Please go back home</h3>
            {error && <h3>{error.message}</h3>}
        </section>
    )
}

export default Error