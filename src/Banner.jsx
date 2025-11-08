import React from "react";

const Banner = () => {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <img
            src="https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwbf1c563a/images/beauty/0-HOME/BEAUTY/2025/06-JUNE/A25_SUMMER25_P17D_TRIO_3700x2000.jpg?sw=1920"
            alt=""
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          />

            <img src="https://www.arvindfashions.com/wp-content/uploads/2024/03/Campaign-1-1.png" 
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
            />

            <img src="https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw62b9477e/images/beauty/0-HOME/BEAUTY/2025/07-JULY/A25M157_LOOKFALL_25_M03K_DEVA_3700X2000.jpg?sw=1920" alt="" 
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
            />

        </div>
      </div>
    </div>
  );
};

export default Banner;
