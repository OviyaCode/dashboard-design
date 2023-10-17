import { BsSearch } from 'react-icons/bs'
import { cardItems } from '../utils/data'
import Charts from './Charts';


const Home = () => {

    return (
        <div className='main-container'>
            <div className="header-container">
                <div className="header-banner">
                    <p>Hello Shahrukh 👏 !</p>
                </div>
                <div className="icon-utils">
                    <BsSearch className='icon' color='#393535' />
                    <input type='text' placeholder='Search...' />
                </div>
            </div>
            <div className='cards'>
                {cardItems.map((item, index) => (
                    <div key={index} className='card'>
                        <div className='card-icon'>
                            {item.icon}
                        </div>
                        <div className='card-content'>
                            <div className='content-row'>
                                <p className='card-title'>{item.title}</p>
                                <span className='card-price'>{item.price}</span>
                                <p className='status-icon'>{item.statusIcon} <span className="status-percentage">{item.status}</span> <span className='status-time'>{item.time}</span> </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <Charts/>
        </div>
    )
}

export default Home