import { services } from '../data';
import { Service_card } from './Service_card'

const OurServices = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" >
      <h2 className="fs-1 fw-bold mt-5" style={{color:'#D22F72'}}>Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <Service_card service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices
