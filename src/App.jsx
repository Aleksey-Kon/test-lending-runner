import './App.css'

function App() {
  return (
    <>
      <header className='z-10 pr-15 pl-10 absolute top-0 left-0 flex items-center justify-between w-[98vw]  bg-[#FAF3ED] h-25'>
        <div className="left-bar justify-between flex items-center gap-10">
          <h1 className='text-6xl text-[#709AFF] font-bold'>
            Logo
          </h1>
          <a className='mt-2 text-xl transform transition-all hover:text-green-600 ease-in-out hover:scale-110'>
            +7 (999) 999-99-99
          </a>
        </div>
        <div className="rigth-bar  flex justify-between gap-5 flex-wrap">
          <a href='/' className='font-medium transform transition-transform  ease-in-out hover:scale-110 text-2xl relative after:absolute after:left-0 after:bottom-0   after:h-[2px] after:w-full after:bg-black after:scale-x-0 
    after:origin-left after:transition-transform after:duration-300
    hover:after:scale-x-100'>Условия</a>
          <a href='/' className='font-medium transform transition-transform  ease-in-out hover:scale-110 text-2xl relative after:absolute after:left-0 after:bottom-0   after:h-[2px] after:w-full after:bg-black after:scale-x-0 
    after:origin-left after:transition-transform after:duration-300
    hover:after:scale-x-100'>Стоимость</a>
          <a href='/' className='font-medium transform transition-transform  ease-in-out hover:scale-110 text-2xl relative after:absolute after:left-0 after:bottom-0   after:h-[2px] after:w-full after:bg-black after:scale-x-0 
    after:origin-left after:transition-transform after:duration-300
    hover:after:scale-x-100'>Контакты</a>
        </div>
      </header>
      <main className=' relative  min-h-screen px-8 pt-37'>
        <a href='/' className='mb-10 flex  origin-left items-center font-medium text-2xl transform transition-transform ease-in-out hover:scale-110'><img src="/icon-map.svg" alt="Map"/>Москва</a>
        
        <h1 className=' max-w-[98vw] text-6xl leading-[1.3] font-bold text-[#59E43A] mb-15 opacity-0 animate-[slideRight_0.8s_ease-out_forwards]'>Благотворительный <br/> марафон
        <span className=' px-3 text-xl font-normal text-black'>Дорога чемпиона</span><span className='text-4xl font-black italic'>2025</span>
        <img src="/9461597.jpg" alt="img" className='overflow-x-hidden absolute top-[-150px] left-[435px] w-[800px] z-[-3]'/>
        </h1>

        <div className="container-buttons flex gap-5 mb-25">
          <button className='z-10 !bg-[#59E43A] px-[10px] py-[18px] text-xl font-bold rounded-2xl transform transition-all ease-in-out hover:scale-110 hover:!bg-[#33ca11]'>Записаться на марафон</button>
          <button className='z-10 !bg-[#709AFF] px-[10px] py-[18px] text-xl font-bold rounded-2xl transform transition-all ease-in-out hover:scale-110 hover:!bg-[#4e6fe5]'>Узнать подробнее</button>
        </div>

        <div className='animate-[slideLeft_0.8s_ease-out_forwards] grid grid-cols-2 items-center w-[500px] gap-10'>
          <div className='flex gap-2 transform transition-transform ease-in-out hover:scale-110'>
            <h2 className='text-[#59E43A] font-bold text-[40px]'>10:00</h2>
            <p className='pt-2 w-18 text-base '>Начало забега</p>
          </div>
          
          <div className='flex flex-col gap-2 items-center transform transition-transform ease-in-out hover:scale-110'>
            <h2 className='text-[#59E43A] font-bold text-5xl w-18 text-center'>20</h2>
            <p className=' w-18 text-xl font-medium text-center '>Мая</p>
          </div>

          <div className='flex gap-2 transform transition-transform ease-in-out hover:scale-110'>
            <h2 className='text-[#59E43A] font-bold text-[40px]'>14:00</h2>
            <p className='pt-2 w-18 text-base '>Окончание забега</p>
          </div>
        </div>
        
      </main>
    </>
  )
}
export default App