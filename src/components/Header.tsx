
import { useContext} from 'react'
import {Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export default function Header() {
  const { open, setOpen } = useContext(CartContext);
   
  return (
    <>
    <nav className="bg-slate-300">
      <div className="mx-auto container ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <a href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"> Market </a>
              </div>
            </div>
          
          </div>
          <div className="flex flex-1 items-center justify-center" >
            <div className="flex flex-shrink-0 items-center gap-10">
                <a href="/" className="">Home</a>
                <a href="/products" className="">Products</a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className='grid  grid-cols-1 gap-x-2 sm:grid-cols-4 w-[250px]'>
                  <div className="sm:col-span-2">
                      <input type="text"  className="inline bg-white-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-transparent" placeholder='Ürün Ara' onChange={(e)=> {
                      }} />
                  </div>
                  <div className="sm:col-span-2">
                    <button className='w-full text-white bg-slate-400 hover:bg-slate-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Ara</button>
                  </div>
              </div>
              <Link to={`/login`} className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <img alt="login icon" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7UlEQVR4nO2UOwrCQBBAhYApBC9go14gpb2HELyDehVR7+SnMliLlVgFRWKhWDwZHMFG3cgkEcmDgSWZzWN2JlsqFfwigA8MgDlw0pB1X96lJa0BIa9ZSk4alYZvpM9yu8q5H68rPUvxIoF4ZimOE4hjS3Ei8qr4+Bc97uc11b7+o5+QnLKZ+OnmWmZ6cz2QauQopY86cBJTfWZbaUGmAB7QBoI3OYHmeBbCOjAEIp3cMzAGWkBFQ9YT4KI5ke6pfyOsquDK98jekXzLVdoENtixBhou4hX2hC7iXQrirYu4CxwMpXug49Tngr/iBs9IHX8MJ9DWAAAAAElFTkSuQmCC"/>
              </Link>
              <button onClick={()=>{
                  setOpen(!open)
                }} className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <img  alt="Cart icon" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFaUlEQVR4nO2da4hVVRTHV9lkSWpviGwyrMypxEyQ6AVRUQmZBH3oQ0SUPSx7R0VPxEoxH9CHPghhJmVZWhY9iF5QGUGU5ugXyxLMMSuz7DFj/mJ7d3Bc94zNnTvjXnvv84MDw3A467/2uvess/dZe12RioqKioqKJgBagQXAL/SOHcAWoB14DpgMDGlGU7YAw4HN9D3bgEeA/UL7GBXAC/QvH1fflgYANtH/vFd9U3qIv7V0x9YeXmMf4BBgHHAfsLHkWnf3VFPWAEv3EJDFvbzmYcAKda3f3f/73oPEAEYCP5cEwz01DWviukeVPLU90LfqEwU4BngR+NUfi5sJRuG6D6uArHO3t75RXdHbQLs5SpFx1VAGBHhDBeTOkHqyB7hRBeS17AclJMAoFZCtwICgonLGz1H05PP00Lqyxj/BFbkjtKasAaaogLwaWlPWACdXecReHulQQRkbWlfWAEtUQG4PrSlrgFtUQJaF1pQ1wGgVELfwWM1HAueRH1VQTgsmqGJXUF5RAbmtGpeAALeqgCwNqSd7gDEqID8B+2Y/MKFwg+/fRBYZE0xQxa6gLKvyiCHchFAFJFe+Ay62EJCxoUfCEOstBGRAEzXEqfG9WABYHnokjDBXLADcldt8BDgS6DT5hOlLTrOaj1D/MLNSrNBNHhktCQN8qfydKsbrtaZKoriiDuXr38ARYgngHiXyZUkU4Cnl6xKxBjBeidySYh4B9i957TBBrOE28JTsTTlFEgO4Qvm4yew2P+BNJfZmSYwSH2eKVYB7ldiXJCGAo0uq/9vEKsAZSuzmlPaP+O19RVaIZbrJI22SCMAa5dv1Yh3gbSX6JkkA4Ezl15/AwWId4P6+2GhqDWC+8muRRPpJ6og9jwAH+n0wRS6QiCZObst0kZMkYoCrdvMGNkRVFAi8qxy4QSIGeF/5M01iAnhQOfC8xN3M55+CLzuB4yUmgLNVQH6QSPEdkIp8KLHh88h25chIibN+2TVHKHK1xIjvGFRkskQGcN5uHtQeVgZLjJS04VgkkQEsVD48I7ECnKuc2SgR4Zq0ldx2z5FYAQb65YUiJ0gkANcp7d/EPsEV4APl1LUSCcAnybWiAh5VTi2UCABO9PON/3DzkFaJHeqfUjZIBABPKN3vSAoAB5TkkRFiGF9j5taqilwpqQB8pJy7RgwDXKL0ulXeQZIKwDTl4AIxjKsDUHqflpQAzjdZsl8CcCjwl9I7XlICGORLLYscJ3F0p1grKUKtPbn5BTrgiyyaRQPTra8JAacqjV2uV7GkCHChcvZbMQYwR2l8XVIFOKhkt5F1LpeUAT4lHlzl/kBJGeBx4mGOpA5wEfbZ4StMDpfUoT6PuBXU6ucuAgflM/WJvCyooNwBZqqAzAutKWuACSogX4XWlDXUCgeKO5B2ZpFALQN8ntUEzDrADBWQ+aE1ZQ31db8dKe5njwZq76x1n8azQuvKGuBZFZDq5y6MbZ92TAkqKneAt6hnuW9dMQIYGlpjVgDDfKMzq6x3L9YkJ6h1ENIJ3hLrJDeAY0ua+lsh+VaFPW1aY4mHJCeA1pK6rdXApW77mD8mAu3qnM5GfnDZ56zOXthx2oZLxkspq90iZMl5Q0uav0xvwM5jTdiZIbkArFTOT9zDuZPUuasasPN1E3byeU0A/KacH/w/y/dFtjdg548m7GyTXKC+v1a/DNTeshM9NHcrWWXNTvQAs5Xz7WXLJj7ZrlXnzrJmJ3qAtpLGkmv8p3SIPyaVDFJXI22f9padJADm0TizrdqJHqDF7XRtYJBcX8cWq3aSgNpgzfW3iO7o8rmgxbqdZKB2r3/SPdn4OYo73N+zgFGx2fkX10v9EgD60FEAAAAASUVORK5CYII="/>
                </button>
              <div className="relative ml-3">
                  <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                  </button>
              </div>
          </div>
        </div>
      </div>
    
      <div className="sm:hidden" id="mobile-menu">
        {/* <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        </div> */}
      </div>
    </nav>
  
  </>
  
  )
}


