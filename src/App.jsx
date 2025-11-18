import './App.css'

function App() {
  return (
    <>
      <header className='z-10 absolute top-0 left-0 flex items-center justify-between w-full bg-[#FAF3ED] px-4 sm:px-10 py-3 sm:py-4'>
        <div className="left-bar flex items-center gap-4 sm:gap-10">
          <h1 className='text-2xl sm:text-4xl md:text-6xl text-[#709AFF] font-bold'>
            Logo
          </h1>
          <a className='mt-1 text-sm sm:text-xl transform transition-all hover:text-green-600 ease-in-out hover:scale-110'>
            +7 (999) 999-99-99
          </a>
        </div>
        <div className="rigth-bar hidden sm:flex justify-between gap-5 flex-wrap">
          <a href='/' className='font-medium text-sm lg:text-2xl transform transition-transform ease-in-out hover:scale-110 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>Условия</a>
          <a href='/' className='font-medium text-sm lg:text-2xl transform transition-transform ease-in-out hover:scale-110 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>Стоимость</a>
          <a href='/' className='font-medium text-sm lg:text-2xl transform transition-transform ease-in-out hover:scale-110 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>Контакты</a>
        </div>
        <button className='sm:hidden p-2 rounded-md !bg-[#59E43A]'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      <main className='relative min-h-screen px-4 sm:px-8 pt-20 sm:pt-28'>
        <a href='/' className='mb-6 flex origin-left items-center font-medium text-base sm:text-2xl transform transition-transform ease-in-out hover:scale-110'>
          <img src={import.meta.env.BASE_URL + 'icon-map.svg'} alt="Map" className='mr-2'/>
          Москва
        </a>

        <h1 className='max-w-[98vw] text-2xl sm:text-4xl lg:text-6xl leading-[1.2] font-bold text-[#59E43A] mb-6 sm:mb-15 opacity-0 animate-[slideRight_0.8s_ease-out_forwards]'>Благотворительный <br/> марафон
        <span className='px-2 text-base sm:text-xl font-normal text-black block md:inline'>Дорога чемпиона</span>
        <span className='text-2xl sm:text-4xl font-black italic block md:inline'>2025</span>
        <img src={import.meta.env.BASE_URL + '9461597.jpg'} alt="img" className=' overflow-x-hidden block sm:absolute top-[-50px] lg:top-[-150px] left-[230px] lg:left-[435px] w-[800px] z-[-3]'/>
        </h1>

        <div className="container-buttons flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8 sm:mb-25">
          <button className='z-10 !bg-[#59E43A] px-4 py-3 sm:px-[10px] sm:py-[18px] text-base sm:text-xl font-bold rounded-2xl transform transition-all ease-in-out hover:scale-105 md:hover:scale-110 hover:bg-[#33ca11]'>Записаться на марафон</button>
          <button className='z-10 !bg-[#709AFF] px-4 py-3 sm:px-[10px] sm:py-[18px] text-base sm:text-xl font-bold rounded-2xl transform transition-all ease-in-out hover:scale-105 md:hover:scale-110 hover:bg-[#4e6fe5]'>Узнать подробнее</button>
        </div>

        <div className='animate-[slideLeft_0.8s_ease-out_forwards] grid grid-cols-2 sm:grid-cols-2 items-center w-full sm:w-[500px] gap-6 sm:gap-10 mb-5'>
          <div className=' pl-2 sm:pl-0 flex gap-2 transform transition-transform ease-in-out hover:scale-110 '>
            <h2 className='text-[#59E43A] font-bold text-2xl sm:text-[40px]'>10:00</h2>
            <p className='sm:pt-2 w-18 text-sm sm:text-base'>Начало забега</p>
          </div>
          
          <div className='flex flex-col gap-2 pl-2 sm:pl-0 sm:items-center transform transition-transform ease-in-out hover:scale-110 '>
            <h2 className='text-[#59E43A] font-bold text-3xl sm:text-5xl w-18 text-center'>20</h2>
            <p className='w-18 text-lg sm:text-xl font-medium text-center'>Мая</p>
          </div>

          <div className='pl-2 sm:pl-0 flex gap-2 transform transition-transform ease-in-out hover:scale-110 '>
            <h2 className='text-[#59E43A] font-bold text-2xl sm:text-[40px]'>14:00</h2>
            <p className='sm:pt-2 w-18 text-sm sm:text-base'>Окончание забега</p>
          </div>
        </div>
        
      </main>
    </>
  )
}
export default App