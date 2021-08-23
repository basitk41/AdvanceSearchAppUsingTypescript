import React from 'react';
export interface Props {
    
}
const Home: React.FC<Props> = () => {
    return ( 
        <>
            <h3 style={{textAlign:'center'}}>
                Explore Top Music Powered by your Scrobbles
            </h3>
            <p style={{textAlign:'center'}}>
                We bring together your favourite music services and join up listening, watching and sharing to connect your musical world.
                Below you can visualise, in real-time, the listening habits & trends of Last.fm's global community. Go Explore.
            </p>
        </>
     );
}
 
export default Home;