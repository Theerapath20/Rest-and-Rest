import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter,HiVideoCamera } from 'react-icons/hi2'

function Contact() {
  return (
    <section className='flexStart contract-wrap'>
      <div className="paddings innerWidth flexCenter contact-container">
      {/* left side */}
      <div className=" contact-left">
        <div className='orangeText'>Out Contacts</div>
        <div className='primaryText'>Easy to contact us</div>
        <div className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vitae dolorum earum, quae sunt quaerat autem aut labore est architecto dolor, facere sed. Cum, sunt illo itaque reiciendis quidem maxime.</div>


        <div className='flexColStart contactsModes'>
          {/* first row */}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdCall size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Call</span>
                  <span className='secondaryText'>123 456 789</span>
                </div>
              </div>
              <div className="flexCenter btn">Call now</div>
            </div>
            
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Chat</span>
                  <span className='secondaryText'>123 456 789</span>
                </div>
              </div>
              <div className="flexCenter btn">Chat now</div>
            </div>
          </div>
          
          
          
          {/* second row */}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiVideoCamera size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Video</span>
                  <span className='secondaryText'>123 456 789</span>
                </div>
              </div>
              <div className="flexCenter btn">Video call now</div>
            </div>
            
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Massage</span>
                  <span className='secondaryText'>123 456 789</span>
                </div>
              </div>
              <div className="flexCenter btn">Massage now</div>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="contact-right">
         <div className='img-content'>
          <img src="./sea-right.jpg" alt="" />
         </div>
      </div>
      </div>
    </section>
  )
}

export default Contact