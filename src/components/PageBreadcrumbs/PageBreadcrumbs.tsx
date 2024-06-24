import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

type PageBreadcrumbsProps = {
    rootPage: string
    prevPage?: string;
    currentPage: string
    isPrevPage?: boolean
}


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const PageBreadcrumbs = ({ rootPage, prevPage, currentPage, isPrevPage = false }: PageBreadcrumbsProps) => {
    return (
        <div role="presentation" onClick={handleClick} style={{ marginLeft: "260px", marginTop: "48px" }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to='/' style={{ fontWeight: 400, fontSize: "18px", color: "#2C2C2C" }}>{rootPage}</Link>
                {isPrevPage ? <Link to='/catalog' style={{ fontWeight: 400, fontSize: "18px", color: "#2C2C2C" }}>{prevPage}</Link> : null}
                <Typography style={{ fontWeight: 400, fontSize: "18px", color: "#CFCFCF", marginTop: "2px" }}>{currentPage}</Typography>
            </Breadcrumbs>
        </div>
    )
}

export default PageBreadcrumbs