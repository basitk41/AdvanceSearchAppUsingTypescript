import React from 'react';
export interface Props {
    
}
const Spinner: React.FC<Props> = () => {
    return ( 
        <div className="text-center">
      <div
        className="spinner-grow text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
     );
}
 
export default Spinner;