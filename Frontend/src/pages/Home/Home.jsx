import Hero from '../../Component/Hero/Hero'
import Join from '../../Component/Join/Join'
import Member from '../../Component/memberShip/Member';
import Staff from '../../Component/Staff/Staff';
import About from "../../Component/About/About"
const Home = () => {
  return (
    <div>
      <Hero/>
      <Join/>
      <Member/>
      <About/>
      <Staff/>
    </div>
  )
}

export default Home;
