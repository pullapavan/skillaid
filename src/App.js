import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import About from './pages/about/About';
import CourseGrid from './pages/courses/CourseGrid';
import CourseList from './pages/courses/CourseList';
import CourseDetails from './pages/courses/CourseDetails';
import FullStack from './pages/courses/FullStack';
import Gre from './pages/courses/gre';
import Instructor from './pages/instructor/Instructors';
import InstructorDetails from './pages/instructor/InstructorDetails';
import Gallery from './pages/gallery/Gallery';
import Events from './pages/events/Events';
import EventDetails from './pages/events/EventsDetails';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import PageNotFound from './pages/404/PageNotFound';
import ComingSoon from './pages/comingsoon/ComingSoon';
import BlogClassic from './pages/blog/BlogClassic';
import BlogGrid from './pages/blog/BlogGrid';
import BlogDetails from './pages/blog/BlogDetails';
import Product from './pages/shop/Products';
import ProductDetails from './pages/shop/ProductDetails';
import Cart from './pages/shop/Cart';
import { AuthProvider } from './components/context/authcontext';
import MachineLearning from './pages/courses/MachineLearning';
import Iot from './pages/courses/Iot';
import CRM from './pages/account/CRM';
import RoboWar from './pages/account/RoboWar';
import BlockChain from './pages/account/BlockChain';
import AutoDesk from './pages/account/AUTODESK';
import GreRegistration from './pages/account/gre_register';
import Materials from './pages/courses/Materials';
import OnlineMaterial from './components/private/OnlineMaterial';

function App() {
    return (
        <AuthProvider>
            <Router>
                <GlobalStyle />
                <ScrollToTop />
                <Switch>
                    <Route exact path={`${"/"}`} component={HomeTwo} />
                    <Route path={`${"" + "/home-two"}`} component={HomeTwo} />
                    <Route path={`${"" + "/about"}`} component={About} />
                    <Route path={`${"" + "/internships"}`} component={CourseGrid} />
                    {/* <Route path={`${"" + "/course-list"}`} component={CourseList} /> */}
                    {/* <Route path={`${"" + "/course-details/:courseName"}`} component={CourseDetails} /> */}
                    <Route path={`${"" + "/fullstack"}`} component={FullStack} />
                    <Route exact path={`${"" + "/gre"}`} component={Gre} />
                    <Route path={`${"" + "/machinelearning"}`} component={MachineLearning} />
                    <Route path={`${"" + "/iot"}`} component={Iot} />
                    <Route path={`${"" + "/instructor"}`} component={Instructor} />
                    <Route path={`${"" + "/instructor-details"}`} component={InstructorDetails} />
                    <Route path={`${"" + "/gallery"}`} component={Gallery} />
                    <Route path={`${"" + "/events"}`} component={Events} />
                    <Route path={`${"" + "/event-details"}`} component={EventDetails} />
                    <Route path={`${"" + "/login"}`} component={Login} />
                    <Route path={`${"" + "/registration"}`} component={Register} />
                    <Route path={`${"" + "/contact"}`} component={Contact} />
                    <Route path={`${"" + "/faq"}`} component={Faq} />
                    <Route path={`${"" + "/404"}`} component={PageNotFound} />
                    <Route path={`${"" + "/coming-soon"}`} component={ComingSoon} />
                    <Route path={`${"" + "/blog-classic"}`} component={BlogClassic} />
                    <Route path={`${"" + "/blog-grid"}`} component={BlogGrid} />
                    <Route path={`${"" + "/blog-details"}`} component={BlogDetails} />
                    <Route path={`${"" + "/products"}`} component={Product} />
                    <Route path={`${"" + "/product-details"}`} component={ProductDetails} />
                    <Route path={`${"" + "/cart"}`} component={Cart} />
                    <Route path={`${"" + "/crm"}`} component={CRM} />
                    <Route path={`${"" + "/robowar/registration"}`} component={RoboWar} />
                    <Route path={`${"" + "/blockchain/registration"}`} component={BlockChain} />
                    <Route path={`${"" + "/certificate/registration"}`} component={AutoDesk} />
                    <Route path={`${"" + "/gre/registration"}`} component={GreRegistration} />
                    <Route path={`${"" + "/materials"}`} component={OnlineMaterial} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;