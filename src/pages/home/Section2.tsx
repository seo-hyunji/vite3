import { useEffect , useRef, useState } from 'react'
import '../../assets/sass/Section2.scss'

const Section2 = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLElement>(null)
  const rightTopRef = useRef<HTMLElement>(null)
  const rightBottomRef = useRef<HTMLElement>(null)
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);
  const [ aniTrue, setAniTrue ] = useState(false);

  // observer라는게 viewport에 들어왔는지 실시간으로로 감지하는 거 얼만큼 들어왔는지(몇%?) 설정 가능
  useEffect( () => {
    const myObServer = new IntersectionObserver(
      ( [entry] ) => {
        if(entry.isIntersecting && !aniTrue){
          leftRef.current?.classList.add('active')
        
          setTimeout(()=>{
            rightTopRef.current?.classList.add('active')
          }, 500)
          setTimeout(()=>{
            rightBottomRef.current?.classList.add('active')
            updateCount();
          }, 2000)
          setAniTrue(true)
        }
      },
      { threshold : 0.5 } 
    ) 
    if (sectionRef.current) myObServer.observe(sectionRef.current)
      return ()=> myObServer.disconnect()
  }, [aniTrue])

  const updateCount = () => {
    let num1 = 0;
    let num2 = 1000;
    
    const time1 = setInterval(() => {
      num1 += 2;
      setCount1(num1)
      if(num1 >= 100) clearInterval(time1)
    }, 50);

    const time2 = setInterval(() => {
      num2 += 100;
      setCount2(num2)
      if(num2 >= 11000 ) clearInterval(time2)
    }, 50);
  }

  return (
    <section className='section2' ref={sectionRef}>
      <div className='left' ref={leftRef}>
        <h1>our Story</h1>
      </div>
      <div className='right'>
        <div className='top' ref={rightTopRef}>
          <h3>우리의 삶이 건강해지고 당신의 비즈니스가 더 성장하는 스토리</h3>
          <h4>고객의 삶과 비즈니스가 건강한 성장을 이룰 수 있도록 맞춤 서비스, 앞선 전문성, 새로운 연결로 차별화된 식음 솔루션을 제안하고 산업의 미래를 리딩하며 고객과 함께 성장하는 기업, 우리는 삼성웰스토리입니다.</h4>
        </div>
        <div className='bottom' ref={rightBottomRef}>
          <span className='countText'><span>{count1}</span>만식</span>
          <span className='countText'><span>{count2.toLocaleString()}</span>개</span>
        </div>
      </div>
    </section>
  )
}

export default Section2