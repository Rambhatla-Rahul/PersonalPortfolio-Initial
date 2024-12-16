import { useEffect } from 'react';
import styles from './ContactStyles.module.css'
import {animateWithGsap1} from '../../utils/animation'

function Contact() {
  useEffect(() => {
    animateWithGsap1(document.getElementById('contact'),{x:0,duration:2,ease:'power2.inOut'})
  }, []);
  return (
    <section id = 'contact' className={styles.container}>
      <h1 className='sectionTitle' id = 'contactTitle'>Contact</h1>
      <form action=''>
        <div className='formGroup'>
            <label htmlFor='name' hidden>
                Name
            </label>
            <input type='text' name='name' id='name' placeholder='Name' required/>
        </div>
        <div className='formGroup'>
            <label htmlFor='email' hidden>
                E-mail
            </label>
            <input type='text' name='email' id='email' placeholder='E-mail' required/>
        </div>
        <div className='formGroup'>
            <label htmlFor='message' hidden>
                Message.
            </label>
            <textarea name='message' id='message' placeholder='Message' required>

            </textarea>
        </div>
        <input className='hover btn' type='submit' value='Submit'/>
      </form>
    </section>
  )
}

export default Contact
