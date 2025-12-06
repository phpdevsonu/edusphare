import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Col, Nav, Row, Container, Button, Collapse, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import useDeviceType from "../../Hooks/useDeviceType";
import "./sidebar.css"

const Sidebar = ({ Icons }) => {

    const [sidebarShow, setSideBarShow] = useState(null); // FIX
    const [openMenu, setOpenMenu] = useState(null);

    const device = useDeviceType();

    useEffect(() => {
        if (!device) return;  // FIX → wait until device is detected
        setSideBarShow(device === 'mobile' ? false : true)
    }, [device]);

    const clseSidebar = () => {
        setSideBarShow(false);
    }
    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const sideBarToggle = () => {
        setSideBarShow(prev => !prev);
    };

    // PREVENT FLASH ON FIRST RENDER
    if (sidebarShow === null) return null;
    const autoCloseSidebarOnMobile = () => {
        if (device === 'mobile') {
            setSideBarShow(false);
        }
    }
    return (
        <>
            <Nav className={`sidebar shadow flex-column ${sidebarShow ? "show" : "hide"}`}>
                <Nav.Link as={Link} to='/admin' className="nav-link-item">
                    <Icons.Speedometer2 size={20} className="me-2" />
                    Dashbaord
                </Nav.Link>

                <Nav.Link onClick={() => toggleMenu('students')} className={`nav-link-item submenu ${openMenu === 'students' ? 'active' : ''}`}>
                    <Icons.MortarboardFill size={20} className="me-2" />
                    Students
                    <strong>
                        <Icons.ChevronRight size={16} className="submenu-icon opener" />
                    </strong>
                </Nav.Link>

                <Collapse in={openMenu === 'students'}>
                    <ul className="submenu">
                        <Nav.Link as={Link} to='profile' className="ps-2" onClick={autoCloseSidebarOnMobile}>Profile</Nav.Link>
                        {/* <Nav.Link as={Link} to='#fee' className="ps-2">Fee</Nav.Link> */}
                    </ul>
                </Collapse>
            </Nav>
            <div onClick={clseSidebar} className={`backdrop ${sidebarShow ? 'show' : ''}`}></div>
            <div className={`main-container ${sidebarShow ? "" : "full"}`}>
                <Container fluid>
                    <Row>
                        <Col className="bg-app-dark p-0 shadow">
                            <Button variant="bg-app-dark" className="sidebar-toggler" onClick={sideBarToggle}>
                                <Icons.List size={20} className="me-2" />
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Breadcrumb className="bg-light p-2 shadow">

                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                                    Home
                                </Breadcrumb.Item>

                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/library" }}>
                                    Library
                                </Breadcrumb.Item>

                                <Breadcrumb.Item active>
                                    Data
                                </Breadcrumb.Item>

                            </Breadcrumb>

                        </Col>
                    </Row>
                    <Row>
                        <Outlet />
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Sidebar;