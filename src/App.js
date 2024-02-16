
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSign';
import Footer from './component/Footer/Footer';
import men_banner from './component/Assests/banner_mens.png';
import women_banner from './component/Assests/banner_women.png';
import kid_banner from './component/Assests/banner_kids.png';
function App() {
  const route = createBrowserRouter([
    {path:'/',element:<Navbar/>,
    children:[
      {index:true,element:<Shop/>},
      {path:'/shop',element:<Shop/>},
      {path:'/mens',element:<ShopCategory banner={men_banner} category='Men'/>},
      {path:'/womens',element:<ShopCategory banner={women_banner} category='Women'/>},
      {path:'/kids',element:<ShopCategory  banner={kid_banner} category='Kid'/>},
      {path:'/product',element:<Product/>,
      children:[
            {path:':productId',element:<Product/>}
      ]
      },
      {path:'/cart',element:<Cart/>},
      {path:'/login',element:<LoginSignup/>}
        ]  
      }
    
  ])
  return (
    
        
          <>
          
          <div> 
          
            <RouterProvider router={route}/>
            
            <Footer/>
          </div>
          </>
         
        
    
  );
}

export default App;
