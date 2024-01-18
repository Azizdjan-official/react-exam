import { Button } from 'react-bootstrap'
import { FaPlus, FaUser } from 'react-icons/fa'
import { IoChatbubblesOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
  return (
    <aside id='aside' className='bg-primary pt-5'>
        <nav >
            <ul className='list-unstyled  px-2 d-grid gap-3'>
                <li className='d-flex align-items-center fs-5 gap-3 bg-body-secondary py-2 ps-4'>
                    <Link className='text-decoration-none d-flex gap-3 align-items-center text-black w-100'><FaUser color='blue'/>Profile</Link>
                </li>
                
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button bg-body-secondary gap-3 fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <IoChatbubblesOutline color='blue' size={25} onclick={() => setGroups(!groups)} />Groups
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body ">
                            <li className=''>
                            <button className='w-100 border-0 p-2 btn btn-secondary' type="button"  data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"><FaPlus color='grey'/> Create</button>
                            </li>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                
            </ul>
        </nav>
      </aside>
  )
}

export default Sidebar
