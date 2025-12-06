import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Nav, Offcanvas, Row } from 'react-bootstrap'
function Admin() {
    return (
        <>
            <Container fluid className='bg-light'>
                <Row>
                    <Col lg={2} sm={3} className='px-0'>
                        <Offcanvas>
                            <Col className='flex-column bg-dark px-0 shadow sidebar-wrapper'>
                                <Accordion>
                                    <AccordionItem eventKey='0' className='rounded-0'>
                                        <AccordionHeader className='px-0'>
                                            <i className="bi bi-speedometer2 me-2"></i>
                                            Dashboard
                                        </AccordionHeader>
                                        <AccordionBody className='py-0 px-0'>
                                            <Nav.Link href="#a" className='p-2 ps-4 pe-2'>A</Nav.Link>
                                            <Nav.Link href="#a" className='p-2 ps-4 pe-2'>B</Nav.Link>
                                            <Nav.Link href="#a" className='p-2 ps-4 pe-2'>C</Nav.Link>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem eventKey='1' className='rounded-0'>
                                        <AccordionHeader>
                                            <i className="bi bi-person me-2"></i>
                                            Students
                                        </AccordionHeader>
                                        <AccordionBody className='py-0 px-0'>
                                            {/* <Nav.Link href="#d" className='p-2 ps-4 pe-1'>D</Nav.Link> */}
                                            <Nav.Link href="#e" className='p-2 ps-4 pe-2'>D</Nav.Link>
                                            <Nav.Link href="#e" className='p-2 ps-4 pe-2'>E</Nav.Link>
                                            <Nav.Link href="#f" className='p-2 ps-4 pe-2'>F</Nav.Link>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem eventKey='2' className='rounded-0'>
                                        <AccordionHeader>
                                            <i className="bi bi-file-earmark-text me-2"></i>
                                            Report
                                        </AccordionHeader>
                                        <AccordionBody className='py-0 px-0'>
                                            <Nav.Link href="#d" className='p-2 ps-4 pe-2'>D</Nav.Link>
                                            <Nav.Link href="#e" className='p-2 ps-4 pe-2'>E</Nav.Link>
                                            <Nav.Link href="#f" className='p-2 ps-4 pe-2'>F</Nav.Link>
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </Col>
                        </Offcanvas>
                    </Col>
                    <Col className='px-0'>
                        <div className='col p-2 d-flex justify-content-center shadow'>
                            Edusphare
                        </div>
                        <div className='bg-primary'>Hell</div>
                        <div className='bg-warning'>hello</div>
                        <div className='bg-danger'>hello</div>
                        <div className='bg-info'>hello</div>
                        <div className='bg-secondary'>hello</div>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            {/* <Container fluid>
                hello
            </Container> */}

        </>


        // <div>

        //     <div className="offcanvas-lg shadow d-flex flex-column flex-shrink-0 py-3 px-0 text-bg-dark sidebar">
        //         <Link to="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        //             <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
        //                 <use xlink:to="#bootstrap"></use>
        //             </svg>
        //             <span className="fs-4">Sidebar</span>
        //         </Link>
        //         <hr />
        //         <ul className="nav nav-pills flex-column mb-auto">
        //             {/* <li className="nav-item">
        //                 <Link to="/dashboard" className="nav-link">
        //                     <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
        //                         <use xlink:to="#home"></use>
        //                     </svg>
        //                     Home
        //                 </Link>
        //             </li> */}
        //             <li>
        //                 <Link to="/admin" className="nav-link text-white text-start">
        //                     <i className="bi bi-speedometer2 me-2"></i>
        //                     Dashboard
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="students" className="nav-link text-white">
        //                     <i class="bi bi-universal-access me-2"></i>
        //                     Students
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="#" className="nav-link text-white">
        //                     <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
        //                         <use xlink:to="#table"></use>
        //                     </svg>
        //                     Orders
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="#" className="nav-link text-white">
        //                     <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
        //                         <use xlink:to="#grid"></use>
        //                     </svg>
        //                     Products
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="#" className="nav-link text-white">
        //                     <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
        //                         <use xlink:to="#people-circle"></use>
        //                     </svg>
        //                     Customers
        //                 </Link>
        //             </li>
        //         </ul>
        //         <hr />
        //         <div className="dropdown">
        //             <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        //                 <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> <strong>mdo</strong> </Link>
        //             <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        //                 <li><Link className="dropdown-item" to="#">New project...</Link></li>
        //                 <li><Link className="dropdown-item" to="#">Settings</Link></li>
        //                 <li><Link className="dropdown-item" to="#">Profile</Link></li>
        //                 <li>
        //                     <hr className="dropdown-divider" />
        //                 </li>
        //                 <li><Link className="dropdown-item" to="#">Sign out</Link></li>
        //             </ul>
        //         </div>
        //     </div>
        //     <main className='content main-content-area px-1'>
        //         <div className='col p-2 d-flex justify-content-center shadow'>
        //             Edusphare
        //         </div>
        //         <Outlet />
        //     </main>
        // </div>
    )
}

export default Admin