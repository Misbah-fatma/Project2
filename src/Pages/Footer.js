import React, { useEffect, useRef, useState } from 'react';


export const Footer = () => {
    const style = {
        padding: '50px 53px 27px',
        backgroundImage: `url("https://www.sganalytics.com/assets/front_end/images/cta/popupheader.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };

      const formRef = useRef(null); // Create a ref for the form container div

      useEffect(() => {
        // Function to load and initialize the HubSpot form
        const loadForm = () => {
          if (window.hbspt && formRef.current) {
            window.hbspt.forms.create({
              region: "eu1",
              portalId: "25290909",
              formId: "8c6bc214-40f4-4600-968b-a9103c1ba4d2",
              target: '#hubspotForm'
            });
          }
        };
    
        // Check if the HubSpot script is already loaded
        if (window.hbspt) {
          loadForm();
        } else {
          // Append the script to the document if it's not loaded
          const script = document.createElement('script');
          script.src = 'https://js.hsforms.net/forms/v2.js';
          script.async = true;
          script.onload = () => {
            loadForm(); // Load form once the script is loaded
          };
          document.body.appendChild(script);
        }
    
        // Cleanup function to possibly handle component unmount
        return () => {
          const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/v2.js"]');
          if (existingScript) {
            document.body.removeChild(existingScript); // Remove script when component unmounts
          }
        };
      }, []);

     
 

  return (
    <div>     
        <footer className="footer margintop200  sgahome " id="contactform">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                                							<div className="bg-f7f7f7 padding100 margin-min255">
    								<div className="row">
    									<div className="col-md-6">
    										<div className="title1 margintop35"></div>
    										<p className="font36 fontweight500">Get In Touch With Us</p>
                                           
    									</div>
    									
    								</div>
    								<div className="row margintop40">
    									<div className="col-md-12">
    										<div className="">
                                            
      
                                            <div id="hubspotForm" ref={formRef}></div>;
    										</div>
    									</div>
    									
    								</div>
    							</div>
															<div className="row margintop30 mt-4">
									<div className="col-md-12 mt-4">
									<div className="hidden-xs hidden-sm"> 
    									<nav className="">
                                              <div className="container-fluid">
                                                
                                                <div >
                                                  <div className="row">
                                                  <div className="col">
                							                                                                                                                                                                    <li><span className="color-ffffff">Who We Are</span>
                                                    
                                                    <ul>
                                                                                                                                                                                                                                                                                                    <li className=""><a href="https://www.sganalytics.com/sga-at-a-glance/" className="color-a2a2a2 font12 margin-left2">SGA At A Glance</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/data-with-purpose/" className="color-a2a2a2 font12 margin-left2">Data With Purpose</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/our-team/" className="color-a2a2a2 font12 margin-left2">Our Team</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/board-of-advisors/" className="color-a2a2a2 font12 margin-left2">Board Of Advisors</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/lifes-possible/" className="color-a2a2a2 font12 margin-left2">Life's Possible</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/awards/" className="color-a2a2a2 font12 margin-left2">Awards</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/testimonials/" className="color-a2a2a2 font12 margin-left2">Testimonials</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/corporate-social-responsibility/" className="color-a2a2a2 font12 margin-left2">CSR</a></li>
                                                                                                                                                                            
                                                                                                                                                                    </ul>    
                                                                                                        
                                                    </li>
                                                    </div>
                                                    <div className="col">
                                                    
                                                                                                                                                                                                                <li><span className="color-ffffff">What We Do</span>
                                                    
                                                    <ul>
                                                                                                                    <li className=""><a href="https://www.sganalytics.com/what-we-do/" className="color-a2a2a2 font12 margin-left2">Overview</a></li>
                                                                                                                                                                                                                                                                                                    <li className=""><a href="https://www.sganalytics.com/data-management-analytics/" className="color-a2a2a2 font12 margin-left2">Data Analytics</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/data-solutions/" className="color-a2a2a2 font12 margin-left2">Data Solutions</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/esg-services/" className="color-a2a2a2 font12 margin-left2">ESG Services</a></li>
                                                                                                                                                                            
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/investment-research/investment-banking/" className="color-a2a2a2 font12 margin-left2">Investment Banking</a></li>
                                                                                                                
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/investment-research/" className="color-a2a2a2 font12 margin-left2">Investment Insights</a></li>
                                                                                                                                                                            
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/investment-research/private-equity-and-venture-capital/" className="color-a2a2a2 font12 margin-left2">Private Equity/VC</a></li>
                                                                                                                
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/technology-research-services/" className="color-a2a2a2 font12 margin-left2">Technology Services</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/generative-ai-development-solutions-company/" className="color-a2a2a2 font12 margin-left2">Gen AI Solutions</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/business-insights/" className="color-a2a2a2 font12 margin-left2">Business Insights</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/market-research/" className="color-a2a2a2 font12 margin-left2">Market Research</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                            </ul>    
                                                                                                        
                                                    </li>
                                                    </div>
                                                    <div className="col">
                                                    
                                                    
                                                    
                                                                                                                                                                                                                <li><span className="color-ffffff">Industries</span>
                                                    
                                                    <ul>
                                                                                                                                                                                                                                    <li className=""><a href="https://www.sganalytics.com/industry/research-analytics-services-for-bfsi/" className="color-a2a2a2 font12 margin-left2">BFSI</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/healthcare-research-and-analytics-services/" className="color-a2a2a2 font12 margin-left2">Life Sciences & Healthcare</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/media-entertainment-research-analytics-services/" className="color-a2a2a2 font12 margin-left2">Media & Entertainment</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/technology-services/" className="color-a2a2a2 font12 margin-left2">Technology</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/edtech/" className="color-a2a2a2 font12 margin-left2">EdTech</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/fintech/" className="color-a2a2a2 font12 margin-left2">FinTech</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/manufacturing-data-analytics-solutions/" className="color-a2a2a2 font12 margin-left2">Manufacturing</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/pharma-analytics/" className="color-a2a2a2 font12 margin-left2">Pharma</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/insurance-analytics/" className="color-a2a2a2 font12 margin-left2">Insurance</a></li>
                                                                                                                
                                                                                                                                                                                                                            </ul>    
                                                                                                        
                                                    </li>
                                                    </div>
                                                    <div className="col">
                                                    
                                                    
                                                    
                                                                                                                                                                                                                <li><span className="color-ffffff">Resources</span>
                                                    
                                                    <ul>
                                                                                                                                                                                                                                                                                                    <li className=""><a href="https://www.sganalytics.com/case-study/" className="color-a2a2a2 font12 margin-left2">Case Studies</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/analyst-accolades/" className="color-a2a2a2 font12 margin-left2">Analyst Accolades</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/whitepapers/" className="color-a2a2a2 font12 margin-left2">White Papers</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/news-media/" className="color-a2a2a2 font12 margin-left2">News & Media</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/blog/" className="color-a2a2a2 font12 margin-left2">Blogs</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/events/" className="color-a2a2a2 font12 margin-left2">Events</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/leaders-pov/" className="color-a2a2a2 font12 margin-left2">Leaders POV</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/circle-of-experts/" className="color-a2a2a2 font12 margin-left2">Circle Of Experts</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/esg-newsletter/" className="color-a2a2a2 font12 margin-left2">Tattva - ESG Newsletter</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/private-equity-newsletter/" className="color-a2a2a2 font12 margin-left2">Axia - PE Newsletter</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/sga-beat/" className="color-a2a2a2 font12 margin-left2">SGA Beat</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/sga-expressions/" className="color-a2a2a2 font12 margin-left2">SGA Expressions</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                    <li className="margintop20"><a className="contact-background-footer color-ffffff margin-left2" href="https://www.sganalytics.com/contact-us/">Contact Us</a></li>
                                                                                                            </ul>    
                                                                                                        
                                                    </li>
                                                    </div>
                                                    
                                                    
                                                    
                                                                                                                                                                                                            
                                                    
                                                    
                                                    
                                                                                                                                                                                                            
                                                 
                                                    
                                                    <div className="col">
                                                                							    <li><span  className="color-ffffff">Get In Touch</span>
                							        <ul>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">New York</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2" href="tel: 16467010092">+1 646 701 0092</a></li>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">London</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2"  href="tel: 442033938703">+44 203 393 8703</a></li>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">Zurich</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2" href="tel: 41795761586">+41 79 576 1586</a></li>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">Pune</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2" href="tel: 912067307200">+91 20 6730 7200</a></li>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">San Francisco</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2" href="tel: 14158127344">+1 415 812 7344</a></li>
                                                    </ul> 
                                                </li>
                                                </div>
                                            </div>
                                            </div>
                                          </div>
                                        </nav>
									</div>
									<div className="hidden-md hidden-lg"> 
									    <nav className="text-center">
                                              <div className="container-fluid">
                                                
                                                <div >
                                                  <ul className="navbar-nav">
                							                                                                                                                                                                    <li className="margintop30"><span  className="color-ffffff">Who We Are</span>
                                                    
                                                    <ul>
                                                                                                                                                                                                                                                                                                    <li className=""><a href="https://www.sganalytics.com/sga-at-a-glance/" className="color-a2a2a2 font12 margin-left2">SGA At A Glance</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/data-with-purpose/" className="color-a2a2a2 font12 margin-left2">Data With Purpose</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/our-team/" className="color-a2a2a2 font12 margin-left2">Our Team</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/board-of-advisors/" className="color-a2a2a2 font12 margin-left2">Board Of Advisors</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/lifes-possible/" className="color-a2a2a2 font12 margin-left2">Life's Possible</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/awards/" className="color-a2a2a2 font12 margin-left2">Awards</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/testimonials/" className="color-a2a2a2 font12 margin-left2">Testimonials</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/corporate-social-responsibility/" className="color-a2a2a2 font12 margin-left2">CSR</a></li>
                                                                                                                                                                            
                                                                                                                                                                    </ul>  
                                                                                                        
                                                    </li>
                                                    
                                                    
                                                    
                                                                                                                                                                                                                <li className="margintop30"><span  className="color-ffffff">What We Do</span>
                                                    
                                                    <ul>
                                                                                                                    <li className=""><a href="https://www.sganalytics.com/what-we-do/" className="color-a2a2a2 font12 margin-left2">Overview</a></li>
                                                                                                                                                                                                                                                                                                    <li className=""><a href="https://www.sganalytics.com/data-management-analytics/" className="color-a2a2a2 font12 margin-left2">Data Analytics</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/data-solutions/" className="color-a2a2a2 font12 margin-left2">Data Solutions</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/esg-services/" className="color-a2a2a2 font12 margin-left2">ESG Services</a></li>
                                                                                                                                                                            
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/investment-research/investment-banking/" className="color-a2a2a2 font12 margin-left2">Investment Banking</a></li>
                                                                                                                
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/investment-research/" className="color-a2a2a2 font12 margin-left2">Investment Insights</a></li>
                                                                                                                                                                            
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/investment-research/private-equity-and-venture-capital/" className="color-a2a2a2 font12 margin-left2">Private Equity/VC</a></li>
                                                                                                                
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/technology-research-services/" className="color-a2a2a2 font12 margin-left2">Technology Services</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/generative-ai-development-solutions-company/" className="color-a2a2a2 font12 margin-left2">Gen AI Solutions</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/business-insights/" className="color-a2a2a2 font12 margin-left2">Business Insights</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/market-research/" className="color-a2a2a2 font12 margin-left2">Market Research</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                            </ul>  
                                                                                                        
                                                    </li>
                                                    
                                                    
                                                    
                                                                                                                                                                                                                <li className="margintop30"><span  className="color-ffffff">Industries</span>
                                                    
                                                    <ul>
                                                                                                                                                                                                                                    <li className=""><a href="https://www.sganalytics.com/industry/research-analytics-services-for-bfsi/" className="color-a2a2a2 font12 margin-left2">BFSI</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/healthcare-research-and-analytics-services/" className="color-a2a2a2 font12 margin-left2">Life Sciences & Healthcare</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/media-entertainment-research-analytics-services/" className="color-a2a2a2 font12 margin-left2">Media & Entertainment</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/technology-services/" className="color-a2a2a2 font12 margin-left2">Technology</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/edtech/" className="color-a2a2a2 font12 margin-left2">EdTech</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/fintech/" className="color-a2a2a2 font12 margin-left2">FinTech</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/manufacturing-data-analytics-solutions/" className="color-a2a2a2 font12 margin-left2">Manufacturing</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/pharma-analytics/" className="color-a2a2a2 font12 margin-left2">Pharma</a></li>
                                                                                                                
                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/industry/insurance-analytics/" className="color-a2a2a2 font12 margin-left2">Insurance</a></li>
                                                                                                                
                                                                                                                                                                                                                            </ul>  
                                                                                                        
                                                    </li>
                                                    
                                                    
                                                    
                                                                                                                                                                                                                <li className="margintop30"><span  className="color-ffffff">Resources</span>
                                                    
                                                    <ul>
                                                                                                                                                                                                                                                                                                    <li className=""><a href="https://www.sganalytics.com/case-study/" className="color-a2a2a2 font12 margin-left2">Case Studies</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/analyst-accolades/" className="color-a2a2a2 font12 margin-left2">Analyst Accolades</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/whitepapers/" className="color-a2a2a2 font12 margin-left2">White Papers</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/news-media/" className="color-a2a2a2 font12 margin-left2">News & Media</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/blog/" className="color-a2a2a2 font12 margin-left2">Blogs</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/events/" className="color-a2a2a2 font12 margin-left2">Events</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/leaders-pov/" className="color-a2a2a2 font12 margin-left2">Leaders POV</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/circle-of-experts/" className="color-a2a2a2 font12 margin-left2">Circle Of Experts</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/esg-newsletter/" className="color-a2a2a2 font12 margin-left2">Tattva - ESG Newsletter</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/private-equity-newsletter/" className="color-a2a2a2 font12 margin-left2">Axia - PE Newsletter</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/sga-beat/" className="color-a2a2a2 font12 margin-left2">SGA Beat</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                            <li className=""><a href="https://www.sganalytics.com/sga-expressions/" className="color-a2a2a2 font12 margin-left2">SGA Expressions</a></li>
                                                                                                                                                                            
                                                                                                                                                                                                                                    <li className="margintop20"><a className="contact-background-footer color-ffffff margin-left2" href="https://www.sganalytics.com/contact-us/">Contact Us</a></li>
                                                                                                            </ul>  
                                                                                                        
                                                    </li>
                                                    
                                                    
                                                    
                                                                                                                                                                                                            
                                                   
                                                    
                                                    
                                                    
                                                                                                                                                                                                            
                                                  
                                                    
                                                    
                                                    
                                                                							    <li className="margintop30"><span  className="color-ffffff">Get In Touch</span>
                							        <ul>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">New York</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2" href="tel: 16467010092">+1 646 701 0092</a></li>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">London</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2"  href="tel: 442033938703">+44 203 393 8703</a></li>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">Zurich</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2" href="tel: 41795761586">+41 79 576 1586</a></li>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">Pune</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2" href="tel: 912067307200">+91 20 6730 7200</a></li>
                                                        <li className="margintop10"><span className="color-a2a2a2 font12 margin-left2">San Francisco</span></li>
                                                        <li className=""><a className="color-ffffff margin-left2" href="tel: 14158127344">+1 415 812 7344</a></li>
                                                    </ul> 
                                                </li>
                                            </ul>
                                            </div>
                                          </div>
                                        </nav>
									
									</div>
									
									
									
									
									

									
									
									</div>
									
								</div>
							
								
							
                           
                        </div>
					</div>
					<div className="row">
				
				
						  <div className="modal fade" id="contactforms" role="dialog" >
							<div className="modal-dialog">
							
					
							  <div className="modal-content">
								<div className="modal-header">
								  <button type="button" className="close" data-dismiss="modal">&times;</button>
								  <h4 className="modal-title">Contact form</h4>
								</div>
								<div className="modal-body">

								</div>
								<div className="modal-footer">
								  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
								</div>
							  </div>
							  
							</div>
						  </div>
						  
					
						  <div className="modal fade" id="sendinquiry" role="dialog" style={{top: 0}}>
							<div className="modal-dialog">
							
							  <div className="modal-content" style={{background: '#f1f1f1', padding: '35px 28px 10px'}}>
								<div className="modal-header" style={{borderBottom: 'unset'}}>
								  <div className="title1 ml-20"></div>
								  <button type="button" className="close" data-dismiss="modal" style={{opacity:1,fontSize: '36',fontWeight: 100,marginTop: '-18px'}}>&times;</button>    
								  <h4 className="modal-title">Get answers to your questions </h4>
								</div>
								<div className="modal-body">
                                   

								</div>
							
							  </div>
							  </div>
						  </div>
						  
								
								
								<div className="modal fade" id="firstpopupform" role="dialog" >
							<div className="modal-dialog">
							
				
							  <div className="modal-content" style={{borderRadius: '40px', height:'608px',background: '#f1f1f1'}}>
								<div className="modal-header" style={style}>
								  <button type="button" className="close  color-ffffff" data-dismiss="modal" style={{opacity:1,fontSize: '36',fontWeight: 100,marginTop: '-18px'}}>&times;</button>
								  <h4 className="modal-title font22 color-ffffff" >We’d love to hear from you!</h4>
								  <p className="font14  color-ffffff">Have Query? Get In Touch With Our Industry Experts</p>
								</div>
								<div className="modal-body" style={{padding: '25px 50px'}}>
                                    
								</div>
							  </div>
							  
							</div>
						  </div>
								
								
				</div>
                </div>
            </div>
            <div className="footer-content" >
                <div className="container">
                    <div className="row">
                        <div className="flat-wrapper">
                            <div className="ft-wrap clearfix">
                                <div className="social-links  dots-margin">
                                    <a className="no-border" ><img src="https://www.sganalytics.com/assets/front_end/images/icon/2dots-white.svg" style={{width:'100%'}} alt="SGA" /></a> 
                                        
                                        <a href="https://www.linkedin.com/company/sg-analytics/" target="_blank"><i className="fa fa-linkedin"></i></a>
                                        
                                        <a href="https://twitter.com/SGAnalytics" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                                        
                                        <a href="https://www.facebook.com/SGAnalytics" target="_blank"><i className="fa fa-facebook"></i></a>
                                        
                                        <a href="https://www.youtube.com/c/sganalytics/videos" target="_blank"><i className="fa fa-youtube"></i></a>
                                        
                                        <a href="https://www.instagram.com/sg.analytics/" target="_blank"><i className="fa fa-instagram"></i></a>
                                                                       
                                </div>
                                <div className="copyright">
                                    <div className="copyright-content">
                                        <ul className="list-inline marginbottom20">
                                                                                            <li className="footer-link"><a className=" font12" href="https://www.sganalytics.com/contact-us/">Contact Us</a></li>
                                                                                            <li className="footer-link"><a className=" font12" href="https://www.sganalytics.com/faqs/">FAQs</a></li>
                                                                                            <li className="footer-link"><a className=" font12" href="https://www.sganalytics.com/privacy-policy/">Privacy Policy</a></li>
                                                                                            <li className="footer-link"><a className=" font12" href="https://www.sganalytics.com/cookie-policy/">Cookie Policy</a></li>
                                                                                        <li className="copyfont margintop20">© 2024 SG Analytics Pvt. Ltd. All Rights Reserved.</li>
                                        </ul>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
</div>
  )
}
