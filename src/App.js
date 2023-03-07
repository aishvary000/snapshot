import RootLayout from './layouts/RootLayout';
import HomePage from './components/HomePage';
import EditNote from './components/EditNotes';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router = createBrowserRouter(
  [
      {

        path:'/',
        element:<RootLayout/>,
        children:[
        {
          path:'/',element:<HomePage/>
        },
        {
          path:'edit/:id',element:<EditNote/>
        }
        
        ] 

      }


  ]
)
function App() {

  return <RouterProvider router={router}/>
}

export default App;
