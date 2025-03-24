const decentroKeys = {
    client_id: "unitol_staging",
    client_secret: "yfhvfqJEvAuKw5U5JnmBoVKSX9Z9mySe",
    module_secret: "CRPVNGwsdaVfr3dv6RcBEkEO6QKCfa9j",
  };
  
  const DECENTRO_API_URLS = {
    FACE_MATCH:"https://in.staging.decentro.tech/v2/kyc/forensics/face_match",
    UI_STREAM_CALLBACK_URL:"https://aadhaar.unitol.in/callback.php",
    UI_STREAM:"https://in.staging.decentro.tech/v2/kyc/workflows/uistream",
    UI_STREAM_CALLBACK_URL:"https://aadhaar.unitol.in/callback.php",
    UI_STREAM_REDIRECT_URL:"http://localhost:3001/visitor/FaceMatch",
    GET_AADHAAR_DATA:"https://aadhaar.unitol.in/getdata.php",
  };
  
  export { decentroKeys, API_URLS };
  
  export { decentroKeys, DECENTRO_API_URLS };