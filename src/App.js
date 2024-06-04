import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './redux/authSlice';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import TodoPage from './components/TodoPage';
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';
import NewsPage from './components/NewsPage';
import GuidePage from './components/GuidePage';
import FeaturesPage from './components/FeaturesPage';
import SearchPage from './components/SearchPage';
import NewsDetailPage from './components/NewsDetailPage';

const App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Router>
      <div>
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/todos">
            {isAuthenticated ? <TodoPage /> : <LoginPage />}
          </Route>
          <Route path="/dashboard">
            {isAuthenticated ? <DashboardPage /> : <LoginPage />}
          </Route>
          <Route path="/profile">
            {isAuthenticated ? <ProfilePage /> : <LoginPage />}
          </Route>
          <Route path="/settings">
            {isAuthenticated ? <SettingsPage /> : <LoginPage />}
          </Route>
          <Route path="/guide" component={GuidePage} />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/search" component={SearchPage} />
          <Route exact path="/news" component={NewsPage} />
        <Route path="/news/:id" component={NewsDetailPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;







