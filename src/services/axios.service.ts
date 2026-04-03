import axios from 'axios';

const api=axios.create({
    baseURL:"http://localhost:8080",
    headers:{
        "Content-Type":"application/json"
    }
})

api.interceptors.request.use(config=>{
 const token=localStorage.getItem("token");
 const publicRoutes = ["/login", "/register", "/activation","/reset-password"];

  const isPublic = publicRoutes.some((url) =>
    config.url?.includes(url)
  );

    if(token&&!isPublic){
        config.headers["Authorization"]=`Bearer ${token}`;
    }
    return config;
});
export default api;