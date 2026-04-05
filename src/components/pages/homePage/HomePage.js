import React from "react";
import ResponsiveDrawerNavbar from "../../navbar/navbar";
import DefaultPage from "../Dashboard/defaultPage/DefaultPage";
import AnalyticsPage from "../Dashboard/analyticsPage/AnalyticPage";
import InvoicePage from "../invoicePage/InvoicePage";
import CrmPage from "../CRMPage/CrmPage";
import BlogPage from "../blogPage/BlogPage";
import SocialProfile from "../Applications/Users/SocialProfile/SocialProfile";
import AccountPage from "../Applications/Users/AccountProfile/AccountProfilePage";
import UsersPage from "../Applications/Users/UsersPage";
import ProfileOne from "../Applications/Users/AccountProfile/Profile-1";
import ProfileTwo from "../Applications/Users/AccountProfile/Profile-2";
import ProfileThree from "../Applications/Users/AccountProfile/Profile-3";
import Cards from "../Dashboard/defaultPage/Cards";
import StyleOne from "../Applications/Users/CardsPage/Style-1";
import StyleTwo from "../Applications/Users/CardsPage/style-2";
import StyleThree from "../Applications/Users/CardsPage/style-3";
import ListPage from "../Applications/Users/List/ListPage";
import ListStyledOne from "../Applications/Users/List/Style01";
import ListStyledTwo from "../Applications/Users/List/Style02";


export default function HomePage() {
    return(
        <>
        
        
        <DefaultPage/>
        <AnalyticsPage/>
        <InvoicePage/>
        <CrmPage/>
        <BlogPage/>
        <UsersPage/>
        <SocialProfile/>
        <AccountPage/>
        <ProfileOne/>
        <ProfileTwo/>
        <ProfileThree/>
        <Cards/>
        <StyleOne/>
        <StyleTwo/>
        <StyleThree/>
        <ListPage/>
        <ListStyledOne/>
        <ListStyledTwo/>
        
        
        
        
        
        
        </>
    )
}