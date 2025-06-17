import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='newsletter'>
            <label for="email">CADASTRE-SE EM NOSSO NEWSLETTER E RECEBA DESCONTOS EXCLUSIVOS!</label>
            <input type="email" id='email' placeholder='Informe seu e-mail aqui' />
            <input type="submit" value="CADASTRAR" id='submit' />
        </div>
    </div>
  )
}

export default Footer