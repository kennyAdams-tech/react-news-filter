import React from 'react'
import styles from './header.module.css'

const getDate = () => {
  const date = new Date()
    return date.toLocaleDateString()
}

const Header = (props) => {

 
  return (
      <div className='bg-primary container-fluid'>
        <header className=' p-2  text-center container'>
        <div className="logo h3 text-light">Logo</div>
        <div className='text-light fw-bold'>{ getDate() }</div>
        <input onChange={props.keywords} type="text" placeholder='Filter News' className={styles.input}/>
      </header>
      </div>
  )
}


export default Header