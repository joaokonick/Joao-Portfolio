import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// contact data
import { contact } from '../data';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Missing fields');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      subject: subject,
      email: email,
    };

    emailjs.send(
      'service_md0wksm',
      'template_gxhw6vt',
      templateParams,
      'FFUjrEbce8HiGmLSW'
    ).then(
      (response) => {
        console.log('email enviado', response.status, response.text);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      },
      (err) => {
        console.log('ERRO: ', err);
      }
    );
  }

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        {/* section title */}
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-contact relative
            before:absolute before:opacity-40 before:-top-7 before:-left-40 
            before:hidden before:lg:block'>
                Contact me
                </h2>
                <p className='subtitle'>
                Get in touch with me using this form I'll be waiting for our next job.
                </p>
        </div>

        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
            {/* info */}
            <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                {contact.map((item, index)=>{
                    const {icon, title, subtitle, description} = item;
                    return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                        <div className='text-accent rounded-sm w-14 h-14 flex items-start
                        justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                            {icon}
                            </div>
                            <div>
                                <h4 className='font-body text-xl mb-1'>{title}</h4>
                                <p className='mb-1'>{subtitle}</p>
                                <p className='text-accent font-normal'>{description}</p>
                            </div>
                    </div>
                })}
            </div>

            {/* form */}
            <form className='space-y-8 w-full max-w-[780px]' onSubmit={sendEmail}>
                <div className='flex gap-8'>
                    <input className='input' type='text' placeholder='Your name' onChange={(e)=> setName(e.target.value)} value={name}/>
                    <input className='input' type='email' placeholder='Your email'onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </div>
                <input type='text' className='input' placeholder='Subject'/>
                <textarea className='textarea' placeholder='Your message' onChange={(e)=> setMessage(e.target.value)} value={message}>

                </textarea>
                <button className='btn btn-lg bg-accent hover:bg-accent-hover'>
                    Send message
                </button>
            </form>

        </div>

      </div>
    </section>
  )
}

export default Contact
