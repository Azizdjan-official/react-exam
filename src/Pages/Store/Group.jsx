import Header from './../../Partials/Header';
import Sidebar from './../../Partials/Sidebar';
import { IoSettings } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';

const Group = () => {
    return (
        <div className="d-flex flex-column">
            <div className='d-flex'>
                <Header />
            </div>
            <div className='d-flex'>
                <Sidebar />
                <main id='main' className=" py-5 px-4 ">
                    <div className='text-white d-flex justify-content-between'>
                        <h1>Xondamir's chat</h1>
                        <div className='d-flex gap-3'>
                            <button className='btn btn-secondary'>Owner : Xondamir(Xondamirxonn)</button>
                            <button className="btn bg-white  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <IoSettings color='black' size={20}/>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item text-black" href="#">Add member</a></li>
                                <li><a className="dropdown-item text-black" href="#">Leave Group</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex gap-3 my-3'>
                        <div className='d-flex  bg-white  rounded p-2 justify-content-between w-50'>
                        <h4>Items <span class="badge bg-primary">4</span></h4>
                            <div className='d-flex gap-3'>
                                <input className='rounded p-1' type="text" placeholder='Title' />
                                <button className='btn btn-primary d-flex align-items-center justify-content-center'><FaPlus/></button>
                            </div>
                        </div>
                        <div className='d-flex  bg-white  rounded p-2 justify-content-between w-50'>
                        <h4>Members <span class="badge bg-primary">18</span></h4>
                        </div>
                    </div>
                </main>
            </div>
          </div>
          
          
      )
}

export default Group
