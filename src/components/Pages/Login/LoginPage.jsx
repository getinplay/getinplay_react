import React, { useState } from "react";
import axios from "axios";

// const PostRequestComponent = () => {
//   const [response, setResponse] = useState(null);

//   const handleSubmit = async () => {
//     const url = 'http://192.168.0.130/html/Api/check_login.php';
//     const data = {
//       username: 'hello',
//       password: '12341234',
//     };
//     try {
//       const res = await axios.post(url, data, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log('Response:', res.data);
//       setResponse(res.data);
//     } catch (error) {
//       console.error('Error:', error);
//       setResponse(error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <div >
//       <button className='border-2 p-2 w-max cursor-pointer' onClick={handleSubmit}>Send POST Request</button>
//       {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
//     </div>
//   );
// };

// export default PostRequestComponent;

function LoginPage() {
  return <div className="text-5xl font-bold">LoginPage</div>;
}

export default LoginPage;
