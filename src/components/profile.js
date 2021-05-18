import React from 'react';
import logo from './icon.svg';
import socialcomment from './socialcomment.png';
import stockimage from './stockimages.jpeg';
import photo from './photo.jpg';
import happy from './happy.jpg';
import {Link} from 'react-router-dom';

function Profile(){
    return(
        <div style={{backgroundColor: '#2c2c2c', height: '100vh', width: '100%', color: 'white', display: 'flex', overflow: 'hidden'}}>
            <div style={{width: '19%', borderRight: '2px solid #929292'}}>
                <div style={{position: 'relative', top: '5%', width: '100%', height: '10%', paddingLeft:'10%', display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                    <img src={logo} style={{color: 'red'}} width={50} height={50}/>
                </div>
                <div style={{position: 'relative', top: '10%', width: '100%', height: '10%', paddingLeft:'10%', display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                    <img src={socialcomment} style={{color: 'red', borderRadius: '50%', marginRight: '5%'}} width={50} height={50}/>
                    <div>
                        <span style={{fontSize: '1.1rem'}}>Anand Aggarwal</span><br/>
                        <span style={{fontSize: '0.9rem'}}>anand.a@bk.com</span>
                    </div>
                </div>
                <div style={{position: 'relative', top: '15%', width: '100%', height: '22%'}}>
                    <ul style={{listStyle: 'none', fontSize: '1rem', textAlign: 'left'}}>
                        <li style={{marginBottom: '5%', cursor : 'pointer'}}>Motivation</li>
                        <li style={{marginBottom: '5%', cursor : 'pointer'}}>Productivity</li>
                        <li style={{marginBottom: '5%', cursor : 'pointer'}}>Design</li>
                        <li style={{marginBottom: '5%', cursor : 'pointer'}}>Study</li>
                    </ul>
                </div>
                <div style={{position: 'relative', top: '15%', width: '100%', height: '17%', display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '60%', backgroundColor: '#6b6b6b', height: '78%', borderRadius: '5px', display: 'flex', padding: '5%'}}>
                        <i class="fas fa-rocket fa-2x" style={{color: '#fe77ff', paddingTop: '5%'}}></i>
                        <div style={{display: 'grid'}}>
                            <span style={{fontSize: '0.8rem', paddingTop: '5%'}}>Pro account is more powerful. Get 30% off</span>
                            <button style={{backgroundColor: 'white', color: '#fe77ff', border: 'none', outline: 'none', borderRadius: '5px', height: '100%', fontSize: '0.8rem'}}>Get Pro</button>
                        </div>
                    </div>
                </div>
                <div style={{position: "relative", width: '96%', height: '15%', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: "3%"}}>
                    <Link to="/" style={{fontSize: '1rem', textDecoration: 'none', color: 'white'}}>Logout</Link>
                    <button style={{borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: '#fe77ff', fontSize: '3.5rem', width: '40%', height: '90%', color: 'white'}}>+</button>
                </div>
            </div>
            <div style={{width: '89%'}}>
                <div style={{width: "100%", height: "10%", paddingLeft: '2%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                    <span style={{textAlign: 'left', fontSize: '1.6rem'}}>Motivation</span>
                </div>
                <div style={{width: '100%'}}>
                    <div style={{width: '40%', height: '5%'}}>
                        <ul style={{listStyle: 'none', color: 'white', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left'}}>
                            <li>All</li>
                            <li>Articles</li>
                            <li>Podcast</li>
                            <li>Video</li>
                            <li>Downloads</li>
                            <button style={{border: 'none', borderRadius: '4px', color: 'white', backgroundColor: '#fe77ff', padding: '2% 5%'}}>Play All</button>
                        </ul>
                    </div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr'}}>
                    <img src={stockimage} height={300} width={300} style={{borderRadius: '5px', marginBottom: '5%'}}/>
                    <img src={photo} height={300} width={300} style={{borderRadius: '5px', marginBottom: '5%'}}/>
                    <img src={happy} height={300} width={300} style={{borderRadius: '5px', marginBottom: '5%'}}/>
                    <img src={socialcomment} height={300} width={300} style={{borderRadius: '5px', marginBottom: '5%'}}/>
                    <img src={socialcomment} height={300} width={300} style={{borderRadius: '5px', marginBottom: '5%'}}/>
                    <img src={socialcomment} height={300} width={300} style={{borderRadius: '5px', marginBottom: '5%'}}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;