import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Solutions from './pages/Solutions'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
// Product sub-pages
import SAPBusinessOne from './pages/products/SAPBusinessOne'
import SalesforceCRM from './pages/products/SalesforceCRM'
import PowerBI from './pages/products/PowerBI'
// Solution sub-pages
import ERPSolutions from './pages/solutions/ERPSolutions'
import CRMSolutions from './pages/solutions/CRMSolutions'
import AnalyticsSolutions from './pages/solutions/AnalyticsSolutions'
import IntegrationSolutions from './pages/solutions/IntegrationSolutions'
import SolutionsByIndustry from './pages/solutions/SolutionsByIndustry'
import SolutionsByRole from './pages/solutions/SolutionsByRole'
// Service sub-pages
import ImplementationServices from './pages/services/ImplementationServices'
import IntegrationAutomation from './pages/services/IntegrationAutomation'
import SupportManagedServices from './pages/services/SupportManagedServices'
import StrategicAdvisory from './pages/services/StrategicAdvisory'
// Industry sub-pages
import FoodBeverage from './pages/industries/FoodBeverage'
import Manufacturing from './pages/industries/Manufacturing'
import WholesaleDistribution from './pages/industries/WholesaleDistribution'
import LogisticsWarehousing from './pages/industries/LogisticsWarehousing'
import AgricultureAgribusiness from './pages/industries/AgricultureAgribusiness'
import PharmaceuticalHealthcare from './pages/industries/PharmaceuticalHealthcare'
import RetailEcommerce from './pages/industries/RetailEcommerce'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/sap-business-one" element={<SAPBusinessOne />} />
          <Route path="/products/salesforce" element={<SalesforceCRM />} />
          <Route path="/products/power-bi" element={<PowerBI />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/erp-solutions" element={<ERPSolutions />} />
          <Route path="/solutions/crm-solutions" element={<CRMSolutions />} />
          <Route path="/solutions/analytics-solutions" element={<AnalyticsSolutions />} />
          <Route path="/solutions/integration-solutions" element={<IntegrationSolutions />} />
          <Route path="/solutions/by-industry" element={<SolutionsByIndustry />} />
          <Route path="/solutions/by-role" element={<SolutionsByRole />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/implementation" element={<ImplementationServices />} />
          <Route path="/services/integration-automation" element={<IntegrationAutomation />} />
          <Route path="/services/support" element={<SupportManagedServices />} />
          <Route path="/services/strategic-advisory" element={<StrategicAdvisory />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/food-beverage" element={<FoodBeverage />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/wholesale-distribution" element={<WholesaleDistribution />} />
          <Route path="/industries/logistics-warehousing" element={<LogisticsWarehousing />} />
          <Route path="/industries/agriculture-agribusiness" element={<AgricultureAgribusiness />} />
          <Route path="/industries/pharmaceutical-healthcare" element={<PharmaceuticalHealthcare />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
