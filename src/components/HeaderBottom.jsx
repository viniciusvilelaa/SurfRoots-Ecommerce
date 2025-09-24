import React, { useState } from 'react'
import { GiSurfBoard } from "react-icons/gi";
import { IoPricetagOutline } from "react-icons/io5";
import { FaTshirt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HeaderBottom() {
  const [open, setOpen] = useState(null);

  return (
    <div className="navbar--bottom">
      <ul className="navbar--bottom-container nav-links">
        <div
          className="dropdown-wrapper"
          onMouseEnter={() => setOpen("Prancha")}
          onMouseLeave={() => setOpen(null)}
        >
          <li className="dropdown-item has-dropdown">
            <GiSurfBoard className="dropdown--icon" />
            <p>Pranchas</p>
          </li>

          {open === "Prancha" && (
            <div className="dropdown">
              <div className="dropdown-column">
                <h4>Shortboards</h4>
                <p>Beto alves surfboards</p>
                <p>RM Surfboards</p>
                <p>Al merricks</p>
              </div>
              <div className="dropdown-column">
                <h4>Longs</h4>
                <p>Tokoro</p>
                <p>Hero</p>
                <p>Felipe Souto</p>
              </div>
              <div className="dropdown-column">
                <h4>Esportes</h4>
                <p>Futebol</p>
                <p>Skate</p>
              </div>
            </div>
          )}
        </div>

        <div
          className="dropdown-wrapper"
          onMouseEnter={() => setOpen("Vestuario")}
          onMouseLeave={() => setOpen(null)}
        >
          <li className="dropdown-item has-dropdown">
            <FaTshirt className="dropdown--icon" />
            <p>Vestuário</p>
          </li>

          {open === "Vestuario" && (
            <div className="dropdown">
              <div className="dropdown-column">
                <Link to='/mens'><h4>Masculino</h4></Link>
                
              </div>
              <div className="dropdown-column">
                <Link to='womens'><h4>Feminino</h4></Link>
              </div>
              <div className="dropdown-column">
                <Link to='kids'><h4>Kids</h4></Link>
                
              </div>
            </div>
          )}
        </div>

        <div
          className="dropdown-wrapper"
          onMouseEnter={() => setOpen("Ofertas")}
          onMouseLeave={() => setOpen(null)}
        >
          <li className="dropdown-item has-dropdown">
            <IoPricetagOutline className="dropdown--icon" />
            <p>Ofertas</p>
          </li>

          {open === "Ofertas" && (
            <div className="dropdown">
              <div className="dropdown-column">
                <h4>Promoções</h4>
                <p>Queima de Estoque</p>
                <p>Outlet</p>
                <p>Últimas Unidades</p>
              </div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}

export default HeaderBottom