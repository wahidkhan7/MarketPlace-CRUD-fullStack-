
// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProdCard = ({ prod }) => {
//   const { _id, itemName, imageName, category, price } = prod;

//   return (
//     <div className="card shadow-sm border-0 rounded-4 p-2 h-100">
      
//       <div className="d-flex justify-content-center align-items-center bg-light rounded-3 overflow-hidden" style={{ height: "200px" }}>
//         <img
//           src={imageName}
//           alt={itemName}
//           className="img-fluid"
//           style={{
//             maxHeight: "100%",
//             maxWidth: "100%",
//             objectFit: "cover",
//             width: "200px",
//             height: "200px"
//           }}
//         />
//       </div>

      
//       <div className="card-body d-flex flex-column justify-content-between mt-3">
//         <div>
//           <h5 className="card-title fw-semibold text-dark">{itemName}</h5>
//           <p className="card-text text-muted mb-1">Category: {category}</p>
//           <p className="card-text fw-bold text-success">Price: ${price}</p>
//         </div>

     
//         <Link to={`/${_id}`} className="btn btn-sm btn-outline-primary mt-2">
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProdCard;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProdCard = ({ prod, showAdminControls = false }) => {
//   const { _id, itemName, imageName, category, price, contactEmail, contactPhone } = prod;

//   return (
//     <div className="card h-100 border-0 shadow-sm hover-shadow">
//       {/* Image Container */}
//       <div className="ratio ratio-1x1 bg-light overflow-hidden rounded-top">
//         <img
//           src={imageName}
//           alt={itemName}
//           className="img-fluid object-fit-contain p-3"
//           loading="lazy"
//           style={{ 
//             transition: 'transform 0.3s ease',
//             width: '100%',
//             height: '100%'
//           }}
//         />
//       </div>

//       {/* Card Body */}
//       <div className="card-body d-flex flex-column p-3">
//         {/* Product Info */}
//         <div className="mb-2">
//           <h5 className="card-title fw-semibold text-dark mb-1 text-truncate">
//             {itemName}
//           </h5>
//           <p className="card-text text-muted small mb-1">
//             <i className="bi bi-tag-fill me-1"></i> {category}
//           </p>
//           <p className="card-text fw-bold text-success mb-2">${price}</p>
//         </div>

//         {/* Contact Info (conditionally shown) */}
//         {(contactEmail || contactPhone) && (
//           <div className="mb-3">
//             <h6 className="small fw-bold mb-1">Contact:</h6>
//             <div className="d-flex flex-column small">
//               {contactEmail && (
//                 <span className="text-truncate">
//                   <i className="bi bi-envelope me-1"></i> {contactEmail}
//                 </span>
//               )}
//               {contactPhone && (
//                 <span className="text-truncate">
//                   <i className="bi bi-telephone me-1"></i> {contactPhone}
//                 </span>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="mt-auto d-flex gap-2">
//           <Link 
//             to={`/${_id}`} 
//             className="btn btn-outline-primary btn-sm flex-grow-1"
//           >
//             <i className="bi bi-eye me-1"></i> View
//           </Link>
          
//           {showAdminControls && (
//             <>
//               <Link 
//                 to={`/${_id}/edit`} 
//                 className="btn btn-outline-warning btn-sm"
//               >
//                 <i className="bi bi-pencil-square me-1"></i>
//               </Link>
//               <button 
//                 className="btn btn-outline-danger btn-sm"
//                 onClick={() => console.log('Delete', _id)}
//               >
//                 <i className="bi bi-trash me-1"></i>
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProdCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ProdCard = ({ prod }) => {
  const { _id, itemName, imageName, category, price } = prod;

  return (
    <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
      <div className="d-flex justify-content-center align-items-center bg-light overflow-hidden" style={{ 
        height: "200px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px"
      }}>
        <img
          src={imageName}
          alt={itemName}
          className="img-fluid h-auto mw-100 mh-100 p-3 object-fit-contain"
          loading="lazy"
          style={{ transition: "transform 0.3s ease" }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <div>
          <h5 className="card-title fw-semibold text-dark mb-2 text-truncate-2" style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}>
            {itemName}
          </h5>
          <p className="card-text text-muted small mb-2">Category: {category}</p>
          <p className="card-text fw-bold text-success mb-3">${price}</p>
        </div>

        <Link 
          to={`/${_id}`} 
          className="btn btn-outline-primary btn-sm mt-auto align-self-start stretched-link"
          style={{
            transition: "all 0.2s ease",
            borderWidth: "1px",
            borderRadius: "6px"
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProdCard;