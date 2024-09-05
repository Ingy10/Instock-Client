import React from 'react'
import './WarehouseList.scss'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import sortIcon from '../../assets/icons/sort-24px.svg'

const WarehouseList = () => {

    const warehouses = [
        {
            warehouse: "Manhattan",
            address: "503 Broadway, New York, USA",
            contact: "Parmin Aujla",
            number: "+1 (629) 555-0129",
            email: "paujla@instock.com"
        },
        {
            warehouse: "Washington",
            address: "33 Pearl Street SW, Washington, USA",
            contact: "Graeme Lyon",
            number: "+1 (647) 504-0911",
            email: "glyon@instock.com"
        },
        {
            warehouse: "Jersey",
            address: "300 Main Street, New Jersey, USA",
            contact: "Brad MacDonald",
            number: "+1 (401) 377-2337",
            email: "bmcdonald@instock.com"
        },
        {
            warehouse: "San Fran",
            address: "890 Brannan Street, San Francisco, USA",
            contact: "Gary Wong",
            number: "+1 (239) 555-0108",
            email: "gwong@instock.com"
        },
        {
            warehouse: "Santa Monica",
            address: "520 Broadway, Santa Monica, USA",
            contact: "Sharon Ng",
            number: "+1 (270) 555-0117",
            email: "sng@instock.com"
        },
        {
            warehouse: "Seattle",
            address: "1201 Third Avenue, Seattle, USA",
            contact: "Daniel Bachu",
            number: "+1 (480) 555-0103",
            email: "dbachu@instock.com"
        },
        {
            warehouse: "Miami",
            address: "2650 NW 5th Avenue, Miami, USA",
            contact: "Alana Thomas",
            number: "+1 (647) 832-2065",
            email: "athomas@instock.com"
        }
    ]



  return (
    <>
    <div className='background'>

    <div className='warehouse__headings'>
        <div className='warehouse__title'>
            <p>WAREHOUSE</p>
            <img className='warehouse__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='warehouse__title'>
            <p>ADDRESS</p>
            <img className='warehouse__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='warehouse__title'>
            <p>CONTACT NAME</p>
            <img className='warehouse__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='warehouse__title'>
            <p>CONTACT INFORMATION</p>
            <img className='warehouse__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='warehouse__title'>
            <p className='warehouse__title--padding'>ACTIONS</p>
            <img className='warehouse__icon' src={sortIcon} alt="sort" />
        </div>
    </div>


    {warehouses.map(warehouse => (

        <div className='warehouse'>
                
            <div className='warehouse__card'>

                {/* This code will render at tablet/desktop breakpoints */}
                <p className='warehouse__name warehouse__name--blue toggle-tabletdesktop'>{warehouse.warehouse}</p>
                <p className='warehouse__address toggle-tabletdesktop'>{warehouse.address}</p>
                <p className='warehouse__name toggle-tabletdesktop'>{warehouse.contact}</p>
                <div className='warehouse__container toggle-tabletdesktop'>
                    <p className='warehouse__address'>{warehouse.number}</p>
                    <p className='warehouse__address'>{warehouse.email}</p>
                </div>
                <div className='warehouse__alticons toggle-tabletdesktop'>
                    <img className='warehouse__altimages' src={deleteIcon} alt="delete" />
                    <img className='images' src={editIcon} alt="edit" />
                </div>
                {/* ---------------------------------------------------- */}



                {/* This code will render at mobile breakpoints */}
                <div className='warehouse__na toggle-mobile'>
                    <div className='warehouse__container'>
                        <p className='warehouse__label'>WAREHOUSE</p>
                        <p className='warehouse__name warehouse__name--blue'>{warehouse.warehouse}</p>
                    </div>
                    <div className='warehouse__container'>
                        <p className='warehouse__label'>ADDRESS</p>
                        <p className='warehouse__address'>{warehouse.address}</p>
                    </div>
                </div>

                <div className='warehouse__contact toggle-mobile'>

                    <div className='warehouse__container'>
                        <p className='warehouse__label'>CONTACT NAME</p>
                        <p className='warehouse__name'>{warehouse.contact}</p>
                    </div>
                    <div className='warehouse__container'>
                        <p className='warehouse__label'>CONTACT INFORMATION</p>
                        <p className='warehouse__address'>{warehouse.number}</p>
                        <p className='warehouse__address'>{warehouse.email}</p>
                    </div>

                </div>
                {/* ---------------------------------------------------- */}

            </div>

            <div className='warehouse__icons toggle-mobile'>

                <img src={deleteIcon} alt="delete" />
                <img src={editIcon} alt="edit" />

            </div>

        </div>
        ))}

    
    </div>
    </>
  )
}

export default WarehouseList