import React from 'react';
import { NavLink } from 'react-router-dom';
export interface Props {
    
}
const Header: React.FC<Props> = () => {
    return ( 
      <>
        <br/>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <NavLink to="/home" className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</NavLink>
      </li>
      <li className="nav-item" role="presentation">
        <NavLink to="/search" className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Search</NavLink>
      </li>
      <li className="nav-item" role="presentation">
        <NavLink to="/favoriteArtists" className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Favorite Artists</NavLink>
      </li>
    </ul>
      </>
     );
}
 
export default Header;