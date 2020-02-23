import React from 'react';
import { Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';



function Contact(props) {
   
        return(
            <React.Fragment>
                <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb>
                        
                    
                    </div>
                </div>
                </div>
             <div class="container">
                <div class="row row-content">
                    <div class="col">
                        <h2 > Contact | సంప్రదించండి </h2>
                        
                    </div>
                </div>
            </div>

        <div class="container">
           <div class="row row-content">
            <div class="col-sm-6">
                <form>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <input type="text" name="name" class="form-control" id="name" placeholder="your fullname"/>

                        </div>
                        <div class="col-sm-6">
                            <input type="email" name="email" class="form-control" id="email" placeholder="Your email"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <input type="text" name="subject" class="form-control" id="subject" placeholder="subject" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                                <textarea class="form-control" name="message"  id="message" rows="8"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <button type="submit" class="btn btn-primary btn-submit">SEND NOW</button>
                        </div>
                    </div>

                        

                </form>
            </div>
            <div class="col-sm-6">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="351" height="209" id="gmap_canvas" src="https://maps.google.com/maps?q=%20Snoqualmie%2C%20WA%2098065-0316&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            <a href="https://www.embedgooglemap.net"></a>
                        </div>
                       
                    </div>
                    
                    
                    <p>P.O. Box 278 <br/> 
                    Snoqualmie, WA 98065-0316 <br/></p>
                    <a role="button" class="btn btn-link pl-0" href="mailto:info@telugubharati.org"> 
                    <i class="fa fa-envelope fa-lg text-primary"></i>info@telugubharati.org</a>
                    

                </div>
        </div>
        </div>
        </React.Fragment>

           );
    
}


export default Contact;