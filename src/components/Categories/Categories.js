import { Button } from 'react-bootstrap';
import {FaHeadset} from 'react-icons/fa'
import {FiMonitor, FiWatch, FiMoreHorizontal} from 'react-icons/fi'
import {GiSmartphone} from 'react-icons/gi'
import {BsLaptop} from 'react-icons/bs'
import "./categories.css";

function Categories() {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='d-flex p-2 gap-1'>
          <Button className="btnRP" active>
            <BsLaptop className='cIcon'/>
            Notebooks
          </Button>
          <Button className="btnRP" active>
            <GiSmartphone className='cIcon'/>
            Celulares
          </Button>
          <Button className="btnRP" active>
            <FiMonitor className='cIcon'/>
            Monitores
          </Button>
          <Button className="btnRP" active>
            <FaHeadset className='cIcon'/>
            Auriculares
          </Button>
          <Button className="btnRP" active>
            <FiWatch className='cIcon'/>
            Smartwatch
          </Button>
          <Button className="btnRP" active>
            <FiMoreHorizontal className='cIcon'/>
            Otros
          </Button>
        </div>
      </div>
    </>
  );
}

export default Categories;