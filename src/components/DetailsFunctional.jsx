// import React from 'react';
// import { ProductConsumer } from '../context';
// import { Link } from 'react-router-dom';
// import Sound from './Sound';


// const DetailsFunctional = () => {
//     return (
//         <div>
//                 <ProductConsumer>
//                     {(value) => {
//                         this.setState({data: value.detailProduct})
//                         const { profileImage, info, title, sounds } = this.data;
//                         return (
//                             <div className="container py-5">
//                                 <div className="row">
//                                     <div className="col-10 mx-auto text-center text-blue">
//                                         <h1>{title}</h1>
//                                         <img src={profileImage} alt="" />
//                                         <p>{info}</p>
//                                         <div className="sounds">
//                                             {/* {sounds.map((sound) => {
//                                                 return <Sound data={sound} />
//                                             })} */}
//                                         </div>
//                                         <Link to="/">
//                                             <button className="btn-success"> Back To Products</button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     }

//                     }

//                 </ProductConsumer>
//             </div>
//     )
// }

// export default DetailsFunctional
