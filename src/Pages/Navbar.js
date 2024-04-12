import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        
    <div className="searchbar searchbox">
    <div className="bg-black padding20">
       <div className="overlays">
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-11"> 
                            <div className="main-search">
                                <div className="input-group">
                                  <span className="input-group-addon"><i className="fa fa-search"></i></span>
                                  <input className="form-control" placeholder="Search sganalytics.com" />
                              
                                </div>
					            
					       </div>
                            
                        </div>
                        <div className="col-md-1">
                            <div className="">
                                <a id="searchbuttonclose" className="color-ffffff"><i className="fa fa-close"></i></a>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
        </div>
        </div>

    </div> 
    <a className="go-bottom" href="#contactform">   
            <img src="https://www.sganalytics.com/assets/front_end/images/icon/top-bottom-arrow.svg"/>
        </a>
        <div className="hidden-xs hidden-sm">        
<a href="#sendinquiry" className="atext-decoration" data-toggle="modal"><div className="feedback text-center">
    <span><img src="https://www.sganalytics.com/assets/front_end/images/cta/send inquiry_mobile_desktop.svg" /></span>
<p >Send Inquiry</p></div></a>
</div>
<div className="hidden-md hidden-lg">
    <a className="pp-bottom" data-toggle="modal" data-target="#sendinquiry">
        <div className="circle">
            <img src="https://www.sganalytics.com/assets/front_end/images/cta/send inquiry_mobile_desktop.svg" style={{maxWidth: '55%' , marginTop: "20px" , marginLeft: '12px'}} />
        </div>   
            
        </a>
    </div>


        <div className="loading-overlay"> </div>
        <div id="site-header" className=" sgahome ">
    <header id="header" className="header clearfix">
        
       
        
        <nav role="navigation">
          <div id="menuToggle">
           
            <input type="checkbox" />
           <div className="menudiv"><img src="https://www.sganalytics.com/assets/front_end/images/icon/menubars.png"/></div>
           <div className="menudiv2"><img src="https://www.sganalytics.com/assets/front_end/images/icon/menuclose.png"/></div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className="header-wrap clearfix">
            <div className="container">
                <div className="row">
                    <div className="flat-wrapper">

                        <div className="hidden-md hidden-lg">
                        <Link To = "/">
                             <div className="sgaLogo">
                           
                                  
<a>
                                <svg id="Component_54_12" data-name="Component 54 – 12" xmlns="http://www.w3.org/2000/svg" width="110.764" height="51.315" viewBox="0 0 240.764 51.315">
                                  <g id="Group_106" data-name="Group 106">
                                    <path id="Path_120" data-name="Path 120" d="M197.874,138.562a10.737,10.737,0,0,1,7.537,3.11,10.929,10.929,0,0,0,7.516,3.11,10.606,10.606,0,1,0,0-21.211,10.9,10.9,0,0,0-7.516,3.1,10.708,10.708,0,0,1-7.537,3.131h0a10.67,10.67,0,0,1-7.527-3.131,10.886,10.886,0,0,0-7.506-3.1,10.606,10.606,0,1,0,0,21.211,10.912,10.912,0,0,0,7.506-3.11,10.727,10.727,0,0,1,7.527-3.11Z" transform="translate(-130.663 -108.596)" fill="#e31b23"/>
                                    <path id="Path_121" data-name="Path 121" d="M142.908,117.319a10.682,10.682,0,0,1,3.121-7.527,10.944,10.944,0,0,0,3.11-7.516A10.619,10.619,0,0,0,138.533,91.66h0a10.6,10.6,0,0,0-10.606,10.616,10.918,10.918,0,0,0,3.1,7.516,10.654,10.654,0,0,1,3.12,7.527h0a10.655,10.655,0,0,1-3.12,7.527,10.884,10.884,0,0,0-3.1,7.506,10.6,10.6,0,0,0,10.606,10.616h0a10.619,10.619,0,0,0,10.606-10.616,10.924,10.924,0,0,0-3.11-7.506,10.654,10.654,0,0,1-3.121-7.527Z" transform="translate(-107.141 -91.656)" fill="#e31b23"/>
                                    <path id="Path_122" data-name="Path 122" d="M104.845,134.069a10.611,10.611,0,1,1-10.616-10.626,10.605,10.605,0,0,1,10.616,10.626" transform="translate(-83.623 -108.531)" fill="#373434"/>
                                  </g>
                                  <g id="Group_114" data-name="Group 114" transform="translate(-96 -32.49)">
                                    <text id="SG_Analytics" data-name="SG Analytics" transform="translate(197.764 56.49)" fill="#373434" font-size="22" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">SG Analytics</tspan></text>
                                    <text id="Life_s_Possible" data-name="Life’s Possible" transform="translate(199 60)" fill="#e31b23" font-size="14" font-family="Poppins-MediumItalic, Poppins" font-weight="500" font-style="italic"><tspan x="0" y="15">Life’s Possible</tspan></text>
                                  </g>
                                </svg>
                                </a>
                               
                         </div>
                         </Link>
                         <div className="mob-search">
                             <ul className="list-inline">
                               
                             </ul>
                         </div>
                        </div>
                        <div className="hidden-xs hidden-sm">
                             <div className="sgaLogo">
                            <Link To = "/">
                                <a>
                                  

                                <svg id="Component_54_12" data-name="Component 54 – 12" xmlns="http://www.w3.org/2000/svg" width="210.764" height="51.315" viewBox="0 0 240.764 51.315">
                                  <g id="Group_106" data-name="Group 106">
                                    <path id="Path_120" data-name="Path 120" d="M197.874,138.562a10.737,10.737,0,0,1,7.537,3.11,10.929,10.929,0,0,0,7.516,3.11,10.606,10.606,0,1,0,0-21.211,10.9,10.9,0,0,0-7.516,3.1,10.708,10.708,0,0,1-7.537,3.131h0a10.67,10.67,0,0,1-7.527-3.131,10.886,10.886,0,0,0-7.506-3.1,10.606,10.606,0,1,0,0,21.211,10.912,10.912,0,0,0,7.506-3.11,10.727,10.727,0,0,1,7.527-3.11Z" transform="translate(-130.663 -108.596)" fill="#e31b23"/>
                                    <path id="Path_121" data-name="Path 121" d="M142.908,117.319a10.682,10.682,0,0,1,3.121-7.527,10.944,10.944,0,0,0,3.11-7.516A10.619,10.619,0,0,0,138.533,91.66h0a10.6,10.6,0,0,0-10.606,10.616,10.918,10.918,0,0,0,3.1,7.516,10.654,10.654,0,0,1,3.12,7.527h0a10.655,10.655,0,0,1-3.12,7.527,10.884,10.884,0,0,0-3.1,7.506,10.6,10.6,0,0,0,10.606,10.616h0a10.619,10.619,0,0,0,10.606-10.616,10.924,10.924,0,0,0-3.11-7.506,10.654,10.654,0,0,1-3.121-7.527Z" transform="translate(-107.141 -91.656)" fill="#e31b23"/>
                                    <path id="Path_122" data-name="Path 122" d="M104.845,134.069a10.611,10.611,0,1,1-10.616-10.626,10.605,10.605,0,0,1,10.616,10.626" transform="translate(-83.623 -108.531)" fill="#373434"/>
                                  </g>
                                  <g id="Group_114" data-name="Group 114" transform="translate(-96 -32.49)">
                                    <text id="SG_Analytics" data-name="SG Analytics" transform="translate(197.764 56.49)" fill="#373434" font-size="22" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">SG Analytics</tspan></text>
                                    <text id="Life_s_Possible" data-name="Life’s Possible" transform="translate(199 60)" fill="#e31b23" font-size="14" font-family="Poppins-MediumItalic, Poppins" font-weight="500" font-style="italic"><tspan x="0" y="15">Life’s Possible</tspan></text>
                                  </g>
                                </svg>
                                </a>
                               </Link>
                         </div>
                        </div>
                       
                        <div className="btn-menu">
                            <span></span>
                        </div>
                   
                        <div className="nav-wrap">                                
                            <nav id="mainnav" className="mainnav">
                                <div className="menu-extra">
                                    <ul>
                                     
                                    </ul>
                                    
                                </div>

                                <ul className="menu"> 
                                                                                                                           
                                            
                                                                                            <li><a href="javascript:void(0)" className="drop">Who We Are <span className="dropmenu"><i className='fa fa-angle-down'></i></span>  </a>
                                                                                                                                                
                                            <ul className="submenu" >
                                             <div className="row padding30">
                                                
                                               
                                                                                                           
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                                                                                <Link to = "/seeAt">  <li className="marginbottom20"><a>SGA At A Glance</a></li></Link>  
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                {/* <li className="marginbottom20"><a href="https://www.sganalytics.com/data-with-purpose/">Data With Purpose</a></li>
                                                                                                                 */}
                                                                                                                        <Link to = "/healthcare">                    <li className="marginbottom20"><a>Life Sciences & Healthcare</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                {/* <li className="marginbottom20"><a href="https://www.sganalytics.com/our-team/">Team</a></li>
                                                                                                                 */}
                                                                                                                           <Link to = "/edtech">                <li className="marginbottom20"><a >EdTech</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                {/* <li className="marginbottom20"><a href="https://www.sganalytics.com/board-of-advisors/">Board Of Advisors</a></li>
                                                                                                                 */}
                                                                                                                  <Link to = "/overview">   <li className="marginbottom20"> <a >Overview</a></li></Link>
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                {/* <li className="marginbottom20"><a href="https://www.sganalytics.com/lifes-possible/">Life's Possible</a></li>
                                                                                                                 */}
                                                                                                                       <Link to = "/Data_Analytics">         <li className="marginbottom20"><a>Data Analytics</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                {/* <li className="marginbottom20"><a href="https://www.sganalytics.com/awards/">Awards</a></li>
                                                                                                                 */}
                                                                                                                      <Link to = "/Data_Solution">           <li className="marginbottom20"><a>Data Solutions</a></li> </Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                {/* <li className="marginbottom20"><a href="https://www.sganalytics.com/testimonials/">Testimonials</a></li> */}
                                                                                                                <Link to = "/manufacturing">         <li className="marginbottom20"><a href="https://www.sganalytics.com/industry/manufacturing-data-analytics-solutions/">Manufacturing</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                {/* <li className="marginbottom20"><a href="https://www.sganalytics.com/corporate-social-responsibility/">CSR</a></li>
                                                                                                                 */}
                                                                                                                    <Link to = "/insurance">         <li className="marginbottom20"><a>Insurance</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                 
                                              
                                                                                                                                                                            </div> 
                                            </ul>
                                                                                        </li>
                                        
                                                                                                                            
                                            
                                                                                            <li><a href="javascript:void(0)" className="drop">What We Do <span className="dropmenu"><i className='fa fa-angle-down'></i></span>  </a>
                                                                                                                                                
                                            <ul className="submenu" >
                                             <div className="row padding30">
                                                
                                               
                                                                                                         <div className="col-md-6 menu-border-right">
                                                     <Link to = "/overview">   <li className="marginbottom20"> <a >Overview</a></li></Link>
                                                         </div>
                                                                                                               
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right ">
                                                                                                                
                                                        
                                                                                                                                                                                <Link to = "/Data_Analytics">         <li className="marginbottom20"><a>Data Analytics</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                                                                                <Link to = "/Data_Solution">           <li className="marginbottom20"><a>Data Solutions</a></li> </Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/esg-services/">ESG Services</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/investment-research/investment-banking/">Investment Banking</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/investment-research/">Investment Insights</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/investment-research/private-equity-and-venture-capital/">Private Equity/VC</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/technology-research-services/">Technology Services</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/generative-ai-development-solutions-company/">Gen AI Solutions</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/business-insights/">Business Insights</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                                                                            
                                                                                                                </div>
                                                                                                                
                                                 
                                                                                                         </div> 
                                            </ul>
                                                                                        </li>
                                        
                                                                                                                                
                                            
                                                                                            <li><a href="javascript:void(0)" className="drop">Industries <span className="dropmenu"><i className='fa fa-angle-down'></i></span>  </a>
                                                                                                                                                
                                            <ul className="submenu" >
                                             <div className="row padding30">
                                                
                                               
                                                                                                           
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/industry/research-analytics-services-for-bfsi/">BFSI</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                                                                                <Link to = "/healthcare">                    <li className="marginbottom20"><a>Life Sciences & Healthcare</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/industry/media-entertainment-research-analytics-services/">Media & Entertainment</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/industry/technology-services/">Technology</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                                                                                <Link to = "/edtech">                <li className="marginbottom20"><a >EdTech</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/industry/fintech/">FinTech</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                                                                                <Link to = "/manufacturing">         <li className="marginbottom20"><a href="https://www.sganalytics.com/industry/manufacturing-data-analytics-solutions/">Manufacturing</a></li></Link>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/industry/pharma-analytics/">Pharma</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/industry/insurance-analytics/">Insurance</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                 
                                                                                                         </div> 
                                            </ul>
                                                                                        </li>
                                        
                                                                                                                            
                                            
                                                                                            <li><a href="javascript:void(0)" className="drop">Resources <span className="dropmenu"><i className='fa fa-angle-down'></i></span>  </a>
                                                                                                                                                
                                            <ul className="submenu" >
                                             <div className="row padding30">
                                                
                                               
                                                                                                           
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/case-study/">Case Studies</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/analyst-accolades/">Analyst Accolades</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/whitepapers/">White Papers</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/news-media/">News & Media</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/blog/">Blogs</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/events/">Events</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/leaders-pov/">Leaders POV</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/circle-of-experts/">Circle Of Experts</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/esg-newsletter/">Tattva - ESG Newsletter</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/private-equity-newsletter/">Axia - PE Newsletter</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/sga-beat/">SGA Beat</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/sga-expressions/">SGA Expressions</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                 
                                                                                                         </div> 
                                            </ul>
                                                                                        </li>
                                        
                                                                                                                                 
                                            
                                                                                            <li><a href="javascript:void(0)" className="drop">Careers <span className="dropmenu">
                                                                                                <i className='fa fa-angle-down'></i></span>  </a>
                                                                                                                                                                                                   
                                                
                                            <ul className="submenu"  style={{width: '330px' ,  left: '-116px' }} >
                                             <div className="row padding30">
                                                
                                               
                                                                                                           
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-border-right ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/careers/">Explore Roles</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                                                                            
                                                                                                                                                                                <div className="col-md-6  menu-right  ">
                                                                                                                
                                                        
                                                                                                                <li className="marginbottom20"><a href="https://www.sganalytics.com/life-at-sga/">Life At SGA</a></li>
                                                                                                                
                                                                                                                </div>
                                                                                                                
                                                 
                                                                                                         </div> 
                                            </ul>
                                                                                        </li>
                                        
                                                                              
                                            
                                                                                            <li><a className="contact-background color-ffffff" href="https://www.sganalytics.com/contact-us/">Contact</a>
                                                                                                                                        </li>
                                        
                                                                            </ul>                                      
                            </nav>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </header>
</div>

    </div>
  )
}
