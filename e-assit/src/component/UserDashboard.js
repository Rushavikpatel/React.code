import axios from "axios";
import React, {useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";



export const UserDashboard = () => {

  const [schedules, setschedules] = useState();
  var navigate = useNavigate()

  const getSchedules = () => {
    axios.get("http://localhost:4000/schedule/get").then((res) => {
      console.log(res.data.data);
      setschedules(res.data.data);
    });
  };
  useEffect(() => {
    getSchedules();
    getCategorys();
  }, []);
  const [categorys, setcategorys] = useState();

  const getCategorys = () => {
    axios.get("http://localhost:4000/category/get").then((res) => {
      console.log(res.data.data);
      setcategorys(res.data.data);
    });
  };
 


  const submit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:4000/schedule_master/add", data)
      .then((res) => {
        console.log(res)
        if (res.status === 201) {
          navigate("/ScheduleList")
        } else {
          
        }
      })
      .catch((err) => {
        console.log(err)
      });
  };
  var style1 = {     width: "30%" , marginLeft:" 35%",marginTop:"3%"}

  var style2 = { width: "100%",hight:"auto" };
  const { register, handleSubmit } = useForm();
 
  return (
   
     <div class="card"style={style1}>
            <div class="card-body"style={style2}>

              <div class="app-brand justify-content-center"style={{textAlign:"center"}}>
              
                  <span class="app-brand-text demo text-body fw-bolder min-weight:6">ADD Schedule</span>
                  </div>
                  <br/><label
                      class="col-sm-5 col-form-label"
                      for="basic-default-age"
                    >
                      SCHEDULE_TYPE
                    </label>
                   
<div>
                    <div class="form-check">
                      {schedules?.map((schedule) => {
                        return (
                          <div>
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              value={schedule._id}
                              {...register("ScheduleType")}
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              {schedule.name}
                            </label>
              </div>
              )
            })} 
            </div>
            <label
                      class="col-sm-4 col-form-label"
                      for="basic-default-age"
                    >
                      Category_Name
                    </label>

                    <div class="form-check">
                      {categorys?.map((category) => {
                        return (
                          <div>
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              value={category._id}
                              {...register("categorytype")}
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              {category.name}
                            </label>
              </div>
              )
            })} 
            
           

              <form id="formAuthentication" class="mb-3" action="index.html"onSubmit={handleSubmit(submit)} method="POST">
                
                
                  
                
              
                  <button class="m-2 btn btn-primary d-grid w-100 " type="submit">ADD REMINDER</button>
               
              </form>

             </div>
            </div>
            </div>
           </div>
         
  )
}
  
