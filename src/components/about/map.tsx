import banner from '../../assets/icons/bannerImg.png'
import IndiaMap from '../../assets/icons/indiaMap.png'
export const Map = () => {
  return (
    <div className=' w-full p-10 flex flex-col justify-center items-center'>
        
        <img className=' w-[60vw] h-[80vh]' src={IndiaMap}  alt="map"  />
        <div className=' ml-96 mt-96 absolute'>
           <img className=' w-[30vw] h-[16vh]' src={banner}  alt="banner" />
        </div>
    </div>
  )
}
