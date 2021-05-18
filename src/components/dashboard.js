import React from 'react';
import { Link } from 'react-router-dom';
import socialcomment from './socialcomment.png';
import pie from './pieChart.png';
import line from './line.png';
import ProgressBar from 'react-customizable-progressbar';
import {Line} from 'rc-progress';

function Dashboard(){
    return(
        <div style={{backgroundColor: '#2c2c2c', height: '100vh', width: '100%', color: 'white', display: 'flex', overflow: 'hidden'}}>

            <div className="sidebar" style={{width: '4%', borderRight: '2px solid #929292', height: '100vh'}}>
                <div style={{height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to="/"><img style={{borderRadius: '50%', position: 'relative', height: '50%', width: '50%'}} src={socialcomment}/></Link>
                </div>
                <div style={{position: 'relative', top: '5%', display: 'grid'}}>
                    <Link to="/" style={{marginBottom: '35%'}}><i class="fas fa-home" style={{color: 'lightblue'}}></i></Link>
                    <Link to="/" style={{marginBottom: '35%'}}><i class="fas fa-chart-bar" style={{color: 'white'}}></i></Link>
                    <Link to="/" style={{marginBottom: '35%'}}><i class="fas fa-briefcase" style={{color: 'white'}}></i></Link>
                    <Link to="/" style={{marginBottom: '35%'}}><i class="fas fa-folder" style={{color: 'white'}}></i></Link>
                    <Link to="/" style={{marginBottom: '35%'}}><i class="far fa-calendar-check" style={{color: 'white'}}></i></Link>
                    <Link to="/" style={{marginBottom: '35%'}}><i class="fas fa-user-friends" style={{color: "white"}}></i></Link>
                    <Link to="/" style={{marginBottom: '35%'}}><i class="fas fa-comment-alt" style={{color: 'white'}}></i></Link>
                    <Link to="/" style={{marginBottom: '35%'}}><i class="fas fa-sign-out-alt" style={{color: 'white'}}></i></Link>
                </div>
                <div style={{position: 'relative', top: "25%", height: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to="/profile"><i class="fas fa-cog" style={{color: 'white'}}></i></Link>
                </div>
            </div>

            <div style={{marginLeft: '3%', width: '97%', display: 'flex', fontFamily: 'arial'}}>
                <div style={{position: 'relative', width: '75%', paddingTop: '2.4%'}}>
                    <div style={{color: '#d7d7d7', textAlign: 'left', fontSize: '1.8rem', marginBottom: '0.6%'}}>Dashboard</div>
                    <div style={{color: '#d7d7d7', textAlign: 'left', fontSize: '1.3rem'}}>Monday, <span style={{color: '#5198d8'}}>02 July 2020</span></div>
                    <div style={{position:'relative', top: '1%', display: 'flex', height: '25%', justifyContent: 'space-between'}}>
                        
                        <div style={{position: 'relative', width: '25%', height: '100%', borderRadius: '8%'}}>
                            <div style={{position: 'absolute', border: '1px dashed #929292', height: '100%', width: '100%', borderRadius: '8%'}}></div>
                            <div style={{border: '1px solid #929292', display: 'grid', borderRadius: '8%', height: '85%', padding: '5%'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5%'}}>
                                    <div>Total Applications</div>
                                    <div>...</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div style={{width: '45%', paddingTop: '12%'}}>
                                        <div style={{fontSize: '1.8rem', marginBottom: '6%'}}>7956</div>
                                        <div style={{fontSize: '0.9rem', color: '#b769ff'}}>
                                            <i class="fas fa-angle-double-up" style={{marginRight: '8%'}}></i>
                                            +3.59%
                                        </div>
                                    </div>
                                    <div>
                                        <ProgressBar progress={70} radius={40} strokeColor={"#b769ff"} strokeWidth={18} strokeLinecap={"square"}>
                                            <div style={{position: 'absolute', bottom: "45%", left: "38%"}}>
                                                <div>70%</div>
                                            </div>
                                        </ProgressBar>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{position: 'relative', width: '25%', height: '100%', borderRadius: '8%'}}>
                            <div style={{position: 'absolute', border: '1px dashed #929292', height: '100%', width: '100%', borderRadius: '8%'}}></div>
                            <div style={{border: '1px solid #929292', display: 'grid', borderRadius: '8%', height: '85%', padding: '5%'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5%'}}>
                                    <div>Shortlisted Candidates</div>
                                    <div>...</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div style={{width: '45%', paddingTop: '12%'}}>
                                        <div style={{fontSize: '1.8rem', marginBottom: '6%'}}>4658</div>
                                        <div style={{fontSize: '0.9rem', color: 'white'}}>
                                            <i class="fas fa-angle-double-up" style={{marginRight: '8%'}}></i>
                                            +0.6%
                                        </div>
                                    </div>
                                    <div>
                                        <ProgressBar progress={70} radius={40} strokeColor={"black"} strokeWidth={18} strokeLinecap={"square"}>
                                            <div style={{position: 'absolute', bottom: "45%", left: "38%"}}>
                                                <div>70%</div>
                                            </div>
                                        </ProgressBar>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{position: 'relative', width: '25%', height: '100%', borderRadius: '8%'}}>
                            <div style={{position: 'absolute', border: '1px dashed #929292', height: '100%', width: '100%', borderRadius: '8%'}}></div>
                            <div style={{border: '1px solid #929292', display: 'grid', borderRadius: '8%', height: '85%', padding: '5%'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5%'}}>
                                    <div>Total Applications</div>
                                    <div>...</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div style={{width: '45%', paddingTop: '12%'}}>
                                        <div style={{fontSize: '1.8rem', marginBottom: '6%'}}>1501</div>
                                        <div style={{fontSize: '0.9rem', color: '#f26c6c'}}>
                                            <i class="fas fa-angle-double-down" style={{marginRight: '8%'}}></i>
                                            -0.4%
                                        </div>
                                    </div>
                                    <div>
                                        <ProgressBar progress={70} radius={40} strokeColor={"#f26c6c"} strokeWidth={18} strokeLinecap={"square"}>
                                            <div style={{position: 'absolute', bottom: "45%", left: "38%"}}>
                                                <div>70%</div>
                                            </div>
                                        </ProgressBar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{position: 'relative', top: '1%', height: '35%', display: 'flex'}}>
                        <div style={{width: '70%'}}>
                            <div style={{display: 'flex', height: '14%', alignItems: 'center'}}>
                                <div style={{width: '30%'}}>Applications Received</div>
                                <div style={{width: '70%', paddingRight: '3%'}}>
                                    <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none', cursor: 'pointer'}}>
                                        <li>This Year</li>
                                        <li>This Week</li>
                                        <li>Today</li>
                                        <li><i class="fas fa-folder-plus" style={{color: 'white'}}></i> Download Report</li>
                                        <li>:</li>
                                    </ul>
                                </div>
                            </div>
                            <img src={line} style={{width: "100%", height: '86%'}} />
                        </div>
                        <div style={{width: '30%'}}>
                            <p style={{textAlign: 'left', marginLeft: '5%', marginBottom: '10%'}}>Total Applications</p>
                            <ul style={{textAlign: 'left', listStyle: 'none', position: 'relative', right: '6%'}}>
                                <li style={{color: 'lightblue', display: 'grid', gridTemplateColumns: '2fr 3fr', fontSize: '0.9rem', justifyContent: 'space-between', alignItems: 'center', paddingRight: '3%', marginBottom: '5%'}}>
                                    <span style={{marginRight: '5%'}}>Applications</span>
                                    <Line percent={50} strokeColor={'lightblue'} strokeWidth={3} trailWidth={3} />
                                </li>
                                <li style={{color: '#5198d8', display: 'grid', gridTemplateColumns: '2fr 3fr', fontSize: '0.9rem', justifyContent: 'space-between', alignItems: 'center', paddingRight: '3%', marginBottom: '5%'}}>
                                    <span style={{marginRight: '5%'}}>Shortlisted</span>
                                    <Line percent={70} strokeColor={'#5198d8'} strokeWidth={3} trailWidth={3} />
                                </li>
                                <li style={{color: '#f26c6c', display: 'grid', gridTemplateColumns: '2fr 3fr', fontSize: '0.9rem', justifyContent: 'space-between', alignItems: 'center', paddingRight: '3%', marginBottom: '5%'}}>
                                    <span style={{marginRight: '5%'}}>Rejected</span>
                                    <Line percent={30} strokeColor={'#f26c6c'} strokeWidth={3} trailWidth={3} />
                                </li>
                                <li style={{color: '#dcdada', display: 'grid', gridTemplateColumns: '2fr 3fr', fontSize: '0.9rem', justifyContent: 'space-between', alignItems: 'center', paddingRight: '3%', marginBottom: '5%'}}>
                                    <span style={{marginRight: '5%'}}>On hold</span>
                                    <Line percent={30} strokeColor={'#4e4e4e'} strokeWidth={3} trailWidth={3} />
                                </li>
                                <li style={{color: '#b769ff', display: 'grid', gridTemplateColumns: '2fr 3fr', fontSize: '0.9rem', justifyContent: 'space-between', alignItems: 'center', paddingRight: '3%', marginBottom: '5%'}}>
                                    <span style={{marginRight: '5%'}}>Interviewed</span>
                                    <Line percent={90} strokeColor={'#b769ff'} strokeWidth={3} trailWidth={3} />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{height: '30%', display: 'flex'}}>
                        <div style={{width: '70%'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '100%', height: '5vh'}}>
                                <span>Referals and Campaign Stats</span>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <div><i class="far fa-paper-plane fa-2x" style={{color: '#f26c6c'}}></i></div>
                                    <div style={{display: 'grid'}}>
                                        <span style={{fontSize: '1.1rem', color: '#f26c6c'}}>40 Campaigns sent in total</span>
                                        <span>4 campaigns sent in last month</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', height: '20%', marginTop: '2%'}}>
                                <div style={{width: '15%', height: '100%', border: '2px solid gray', borderRadius: '5px', paddingBottom: '3%'}}>
                                    <p style={{fontSize: '0.7rem'}}>Users Reached</p>
                                    <span style={{fontSize: '1.2rem'}}>7956</span>
                                </div>
                                <div style={{width: '15%', height: '100%', border: '2px solid gray', borderRadius: '5px', paddingBottom: '3%'}}>
                                    <p style={{fontSize: '0.7rem'}}>Referals</p>
                                    <span style={{fontSize: '1.2rem'}}>662</span>
                                </div>
                                <div style={{width: '15%', height: '100%', border: '2px solid gray', borderRadius: '5px', paddingBottom: '3%'}}>
                                    <p style={{fontSize: '0.7rem'}}>Shares</p>
                                    <span style={{fontSize: '1.2rem'}}>1478</span>
                                </div>
                                <div style={{width: '15%', height: '100%', border: '2px solid gray', borderRadius: '5px', paddingBottom: '3%'}}>
                                    <p style={{fontSize: '0.7rem'}}>Applications</p>
                                    <span style={{fontSize: '1.2rem'}}>546</span>
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%'}}>
                                <button style={{width: '49%', backgroundColor: '#48bceb', color: 'white', textAlign: 'center', fontSize: '0.8rem', border: 'none', borderRadius: '3px', height: '5vh'}}>
                                    Start a campaign now
                                </button>
                                <button style={{width: '49%', backgroundColor: '#f26c6c', color: 'white', textAlign: 'center', fontSize: '0.8rem', border: 'none', borderRadius: '3px', height: '5vh'}}>
                                    Start a campaign now
                                </button>
                            </div>
                        </div>
                        <div style={{width: '30%'}}>
                            <div style={{position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3%'}}>
                                <span>Open positions by department</span>
                                <span style={{marginRight: '5%'}}>...</span>
                            </div>
                            <img src={pie} height={160} width={160}/>
                        </div>
                    </div>
                </div>
                <div style={{width: '30%'}}>
                    <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                        <div style={{width: '50%'}}></div>
                        <i class="fas fa-bell fa-2x" style={{color: 'white'}}></i>
                        <span style={{fontSize: '0.9rem', margin: '0 5%'}}>John Bayer</span>
                        <img src={socialcomment} style={{borderRadius: '50%', cursor: 'pointer'}} height={40} width={40} />
                    </div>
                    <div style={{width: '100%', height: '10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <button style={{backgroundColor: '#48bceb', color: 'white', height: '60%', width: '20%', textAlign: 'center', border: 'none', outline: 'none'}}>+ Add</button>
                        <div style={{height: '100%', display: 'flex', alignItems: 'center', marginRight: '5%'}}>
                            <i class="fas fa-search" style={{color: 'white'}}></i>
                            <input style={{backgroundColor: '#2c2c2c', color: 'white', border: 'none', outline: 'none', height: '60%'}} placeholder={'Search for application here'}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        Hello John Bayer,<br/>You have 8 new applications today
                    </div>
                    <div style={{width: '100%'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3%'}}>
                            <span>New Applicants</span>
                            <span style={{marginRight: '5%'}}>...</span>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={socialcomment} width={40} height={40} style={{borderRadius: '50%', padding: '5%'}}/>
                            <div style={{textAlign: 'left', paddingRight: '30%'}}>
                                <span style={{fontSize: '1.2rem'}}>Rosie Metts</span><br/>
                                <span style={{fontSize: '0.6rem'}}>Applied for <span style={{color: 'blue'}}>iOS Internship</span></span>
                            </div>
                            <button style={{padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="far fa-comment-alt" style={{color: 'white'}}></i>
                            </button>
                            <button style={{position: 'relative', left: '1%', padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="fas fa-phone-alt" style={{color: 'white'}}></i>
                            </button>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={socialcomment} width={40} height={40} style={{borderRadius: '50%', padding: '5%'}}/>
                            <div style={{textAlign: 'left', paddingRight: '30%'}}>
                                <span style={{fontSize: '1.2rem'}}>Rosie Metts</span><br/>
                                <span style={{fontSize: '0.6rem'}}>Applied for <span style={{color: 'blue'}}>iOS Internship</span></span>
                            </div>
                            <button style={{padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="far fa-comment-alt" style={{color: 'white'}}></i>
                            </button>
                            <button style={{position: 'relative', left: '1%', padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="fas fa-phone-alt" style={{color: 'white'}}></i>
                            </button>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={socialcomment} width={40} height={40} style={{borderRadius: '50%', padding: '5%'}}/>
                            <div style={{textAlign: 'left', paddingRight: '30%'}}>
                                <span style={{fontSize: '1.2rem'}}>Rosie Metts</span><br/>
                                <span style={{fontSize: '0.6rem'}}>Applied for <span style={{color: 'blue'}}>iOS Internship</span></span>
                            </div>
                            <button style={{padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="far fa-comment-alt" style={{color: 'white'}}></i>
                            </button>
                            <button style={{position: 'relative', left: '1%', padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="fas fa-phone-alt" style={{color: 'white'}}></i>
                            </button>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={socialcomment} width={40} height={40} style={{borderRadius: '50%', padding: '5%'}}/>
                            <div style={{textAlign: 'left', paddingRight: '30%'}}>
                                <span style={{fontSize: '1.2rem'}}>Rosie Metts</span><br/>
                                <span style={{fontSize: '0.6rem'}}>Applied for <span style={{color: 'blue'}}>iOS Internship</span></span>
                            </div>
                            <button style={{padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="far fa-comment-alt" style={{color: 'white'}}></i>
                            </button>
                            <button style={{position: 'relative', left: '1%', padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="fas fa-phone-alt" style={{color: 'white'}}></i>
                            </button>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={socialcomment} width={40} height={40} style={{borderRadius: '50%', padding: '5%'}}/>
                            <div style={{textAlign: 'left', paddingRight: '30%'}}>
                                <span style={{fontSize: '1.2rem'}}>Rosie Metts</span><br/>
                                <span style={{fontSize: '0.6rem'}}>Applied for <span style={{color: 'blue'}}>iOS Internship</span></span>
                            </div>
                            <button style={{padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="far fa-comment-alt" style={{color: 'white'}}></i>
                            </button>
                            <button style={{position: 'relative', left: '1%', padding: '3%', borderRadius: '50%', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                                <i class="fas fa-phone-alt" style={{color: 'white'}}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;