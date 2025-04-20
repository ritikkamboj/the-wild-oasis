import React from 'react'
import GlobalStyles from './styles/globalStyles'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Login from './pages/Login'
import Settings from './pages/Settings'
import NewUsers from './pages/Users'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions :{
    queries :{
      staleTime : 0
    }
    }
  }

)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
<GlobalStyles/>
<BrowserRouter>
<Routes>
  <Route element={<AppLayout/>}>
  <Route index  path='/' element={<Navigate to="/dashboard" replace/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/account' element={<Account/>}></Route>
  <Route path='/bookings' element={<Bookings/>}></Route>
  <Route path='/cabins' element={<Cabins/>}></Route>
  
  <Route path='/settings' element={<Settings/>}></Route>
  <Route path='/newuser' element={<NewUsers/>}></Route>
  </Route>
 
  <Route path='/login' element={<Login/>}></Route>
 
  <Route path='*' element={<PageNotFound/>}></Route>
</Routes>


</BrowserRouter>
</QueryClientProvider>
    
  )
}

export default App