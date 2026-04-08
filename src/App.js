import React, { useEffect, useState } from "react";
import { CartProvider } from "./components/CartContext";
import ResponsiveDrawerNavbar from "./components/navbar/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/dashboard";
import DefaultPage from "./components/pages/Dashboard/defaultPage/DefaultPage";
import AnalyticsPage from "./components/pages/Dashboard/analyticsPage/AnalyticPage";
import InvoicePage from "./components/pages/invoicePage/InvoicePage";
import CrmPage from "./components/pages/CRMPage/CrmPage";
import BlogPage from "./components/pages/blogPage/BlogPage";
import UsersPage from "./components/pages/Applications/Users/UsersPage";
import SocialProfile from "./components/pages/Applications/Users/SocialProfile/SocialProfile";
import AccountPage from "./components/pages/Applications/Users/AccountProfile/AccountProfilePage";
import ProfileOne from "./components/pages/Applications/Users/AccountProfile/Profile-1";
import ProfileTwo from "./components/pages/Applications/Users/AccountProfile/Profile-2";
import ProfileThree from "./components/pages/Applications/Users/AccountProfile/Profile-3";
import CardsPage from "./components/pages/Applications/Users/CardsPage/CardsPage";
import StyleOne from "./components/pages/Applications/Users/CardsPage/Style-1";
import StyleTwo from "./components/pages/Applications/Users/CardsPage/style-2";
import StyleThree from "./components/pages/Applications/Users/CardsPage/style-3";
import ListPage from "./components/pages/Applications/Users/List/ListPage";
import ListStyledOne from "./components/pages/Applications/Users/List/Style01";
import ListStyledTwo from "./components/pages/Applications/Users/List/Style02";
import CustomerPage from "./components/pages/Applications/Customer/Customer";
import CustomerList from "./components/pages/Applications/Customer/CustomerList";
import OrderList from "./components/pages/Applications/Customer/OrderList";
import CreateInvoice from "./components/pages/Applications/Customer/CreateInvoice";
import Products from "./components/pages/Applications/Customer/Products";
import ProductsReview from "./components/pages/Applications/Customer/ProductsReview";
import ChatPage from "./components/pages/Applications/Chats/Chats";
import ContactPage from "./components/pages/Applications/Contacts/Contacts";
import ContactCards from "./components/pages/Applications/Contacts/ContactCards";
import ContactList from "./components/pages/Applications/Contacts/ContactList";
import CommercePage from "./components/pages/Applications/eCommerce/E-commerce";
import CommerceProducts from "./components/pages/Applications/eCommerce/CommerceProducts/CommerceProducts";
import ProductDetails from "./components/pages/Applications/eCommerce/ProductDetails.js/ProductDetails";
import ProductList from "./components/pages/Applications/eCommerce/ProductList/ProductList";
import CheckoutPage from "./components/pages/Applications/eCommerce/Checkout/Checkout";
import AppInvoicePage from "./components/pages/Applications/Invoice/Invoice";
import Payments from "./components/pages/Applications/Invoice/Payments/Payments";
import PaymentCreate from "./components/pages/Applications/Invoice/Payments/Create";
import PaymentList from "./components/pages/Applications/Invoice/Payments/PaymentList";
import PaymentDetails from "./components/pages/Applications/Invoice/Payments/PaymentDetails";
// import LoginPage from "./components/pages/loginPage/LoginPage"; // import login
// import ProtectedRoute from "./components/ProtectedRoute"; // import your protected route
import './App.css'
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "./components/pages/loginPage/LoginPage";
import { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import FloatingSettings from "./components/SettingIcon/SettingIcon";

export default function App() {
const [mode, setMode] = useState("light");

const theme = useMemo(() =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: { default: "rgb(26,34,63)", paper: "rgb(33,41,70)",card:'#1e1e1e',blog:'rgb(26,34,63)',com:'rgb(41,49,79)',usercard:'rgb(17,25,54)',btn:'rgb(33,41,70)',create:'rgb(33,41,70)',amount:"rgb(26,34,63)",btn2:'rgb(33,41,70)',profile:'rgb(17,25,54)' },
            text: { primary: "#ffffff" ,secondary:'#ffffff',home:'#ffffff'},
            
          }
        : {
            background: { default: "rgb(238,242,246)", paper: "#f8f9fa",card:'rgb(30,136,229)',blog:'#673AB7',com:'rgb(255,255,255)',usercard:'rgb(248,250,252)',btn:'rgb(255,255,255)',bil1:"#FDECEA",bil2:"#FFF9EB",bil3:"#E6F8EB" ,create:'#e3f2fd',amount:'#e3f2fd',btn2:'white',profile:'#c9c7c7' },
            text: { primary: "#121212",secondary:"#5f5e5e",home:'#5e35b1' },
            
          }),
    },
  }),
  [mode]
);

const toggleTheme = () => setMode(prev => (prev === "light" ? "dark" : "light"));

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
         <CssBaseline />
      <Routes>
        
       
<Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/login"  />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
           <ResponsiveDrawerNavbar >
                <Dashboard />
              </ResponsiveDrawerNavbar>
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="default"  />} />
          <Route path="default" element={<DefaultPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="invoice" element={<InvoicePage />} />
          <Route path="crm" element={<CrmPage />} />
          <Route path="blogs" element={<BlogPage />} />
        </Route>

        {/* USERS */}
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <ResponsiveDrawerNavbar>
                <UsersPage />
              </ResponsiveDrawerNavbar>
            </ProtectedRoute>
          }
        >
          <Route path="social-profile" element={<SocialProfile />} />
          <Route path="account" element={<AccountPage />}>
            <Route path="profile1" element={<ProfileOne />} />
            <Route path="profile2" element={<ProfileTwo />} />
            <Route path="profile3" element={<ProfileThree />} />
          </Route>

          {/* user cards */}
          <Route path="cards" element={<CardsPage />}>
            <Route path="card1" element={<StyleOne />} />
            <Route path="card2" element={<StyleTwo />} />
            <Route path="card3" element={<StyleThree />} />
          </Route>

          {/* user list */}
          <Route path="list" element={<ListPage />}>
            <Route path="list1" element={<ListStyledOne />} />
            <Route path="list2" element={<ListStyledTwo />} />
          </Route>
        </Route>

        {/* CUSTOMER */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute>
              <ResponsiveDrawerNavbar>
                <CustomerPage />
              </ResponsiveDrawerNavbar>
            </ProtectedRoute>
          }
        >
          <Route path="custom-list" element={<CustomerList />} />
          <Route path="order-list" element={<OrderList />} />
          <Route path="create-invoice" element={<CreateInvoice />} />
          <Route path="product" element={<Products />} />
          <Route path="product-review" element={<ProductsReview />} />
        </Route>

        {/* CHAT */}
        {/* <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ResponsiveDrawerNavbar>
                <ChatPage />
              </ResponsiveDrawerNavbar>
            </ProtectedRoute>
          }
        /> */}

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ResponsiveDrawerNavbar>
                <ContactPage />
              </ResponsiveDrawerNavbar>
            </ProtectedRoute>
          }
        >
          <Route path="contact-cards" element={<ContactCards />} />
          <Route path="contact-list" element={<ContactList />} />
        </Route>

        {/* COMMERCE */}
        <Route
          path="/commerce"
          element={
            <ProtectedRoute>
              <ResponsiveDrawerNavbar>
                <CommercePage />
              </ResponsiveDrawerNavbar>
            </ProtectedRoute>
          }
        >
          <Route path="products" element={<CommerceProducts />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>

        {/* INVOICE */}
        <Route
          path="/apps-invoice"
          element={
            <ProtectedRoute>
              <ResponsiveDrawerNavbar>
                <AppInvoicePage />
              </ResponsiveDrawerNavbar>
            </ProtectedRoute>
          }
        >
          <Route path="payments" element={<Payments />}>
            <Route path="payment-create" element={<PaymentCreate />} />
            <Route path="payment-list" element={<PaymentList />} />
            <Route path="payment-details" element={<PaymentDetails />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login"  />} />
      </Routes>
            <FloatingSettings mode={mode} toggleTheme={toggleTheme} />

      </ThemeProvider>
    </CartProvider>
  );
}
