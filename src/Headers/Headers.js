import logo from '../App/assets/RT_logo.png';
import homeIcon from '../App/assets/home_icon copy.png';
import { Link } from 'react-router-dom'

const HomeHeader = () => {
    return (
        <header>
            <section className='logo'>
                <img src={logo} alt="logo" data-cy='plainLogo'/> 
            </section>
            <section className='titles'>
                <h1>The RT Files</h1>
                <h3>Movies Exist</h3>
            </section>
            <section className='logo'>
                <img src={logo} alt="logo"/> 
            </section>
        </header>
    )
};

const DetailsHeader = () => {
    return (
        <header>
            <section className='logo'>
                <Link to={'/'}>
                    <img src={homeIcon} alt="home button" data-cy="homeButton"/> 
                </Link>  
            </section>  
            <section className='titles'>
                <h1>The RT Files</h1>
                <h3>Movies Exist</h3>
            </section>
            <section className='logo'>
                <Link to={'/'}>
                    <img src={homeIcon} alt="home button"/> 
                </Link>  
            </section> 
        </header>
    )
}

export {HomeHeader, DetailsHeader };
