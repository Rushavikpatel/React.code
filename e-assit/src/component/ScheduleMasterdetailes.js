import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const ScheduleMasterdetailes = () => {
  var style = {
    left: "width: 0px; display: none",
  };
  
  var style2 = {
    left: "width: 1391px",
  };
  var style3 = {
    left: "width: 353px",
  };
   var style4 = {
     left: "width: 176px",
   };
   var style5 = {
     left: "width: 119px",
   };
   
var style6 = {     width: "100%" , marginLeft:" 35%",marginTop:"10%"}
  
  var style9 = {
    left: "display: none",
  };
  // var id = useParams().id
  const [schedulemaster,setschedulemaster] = useState([])

  const fetchScheduleMasterDetailes = () => {
     axios.get("http://localhost:4000/schedule_master/get").then((res)=>{

    
      setschedulemaster(res.data.data)
       
    }).catch((err)=>{
      console.log(err);
      
      
    })
  }
  useEffect(() => {
    fetchScheduleMasterDetailes()
  
  }, [])
  
  return (
    <div>
      <Helmet>
        <style class="darkreader darkreader--fallback" media="screen"></style>
        <style class="darkreader darkreader--text" media="screen"></style>
        <style class="darkreader darkreader--invert" media="screen"></style>
        <style class="darkreader darkreader--inline" media="screen"></style>
        <style class="darkreader darkreader--variables" media="screen"></style>
        <style class="darkreader darkreader--root-vars" media="screen"></style>
        <style class="darkreader darkreader--user-agent" media="screen">
          html
        </style>
        <link
          rel="icon"
          type="image/x-icon"
          href="../../assets/img/favicon/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../../assets/vendor/fonts/boxicons.css" />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/fonts/fontawesome.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/fonts/flag-icons.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link rel="stylesheet" href="../../assets/css/demo.css" />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/libs/typeahead-js/typeahead.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/libs/select2/select2.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        <link
          rel="stylesheet"
          href="../../assets/vendor/libs/formvalidation/dist/css/formValidation.min.css"
        />
        <style class="darkreader darkreader--sync" media="screen"></style>
        </Helmet>
      {/* <Link to ={`/addDailyScheule/:id`}><button type="button" class="btn btn-primary">ADD Daily Schedule</button></Link> */}
      <div class="content-wrapper" style={style6}>
        <div class="container-xxl flex-grow-1 container-p-y">
          <div class="row g-4 mb-4"></div>
          <div class="card">
          
            <div class="card-datatable table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                class="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div class="row mx-2">
                  <div class="col-md-2">
                    <div class="me-3">
                      <div
                        class="dataTables_length"
                        id="DataTables_Table_0_length"
                      >
                       
                      </div>
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                      {/* <div
                        id="DataTables_Table_0_filter"
                        class="dataTables_filter"
                      >
                        <label>
                          <input
                            type="search"
                            class="form-control"
                            placeholder="Search.."
                            aria-controls="DataTables_Table_0"
                          />
                        </label>
                      </div> */}
                     
                        <button
                          class="btn btn-secondary add-new btn-primary"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasAddUser"
                          fdprocessedid="j71ttqa"
                        >
                          <span>
                            <i class="bx bx-plus me-0 me-sm-1"></i>
                            <span class="d-none d-sm-inline-block">
                              <Link to={`/addDailyScheule/`}>ADD Daily Schedule</Link>
                            </span>
                            {/* // <Link to ={`/addDailyScheule/:id`}><button type="button" class="btn btn-primary">ADD Daily Schedule</button></Link> */}
     
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div><br/>
                <table
                  class="datatables-users table border-top dataTable no-footer dtr-column"
                  id="DataTables_Table_0"
                  aria-describedby="DataTables_Table_0_info"
                  style={style2}
                >
                  <thead>
                    <tr>
                      <th
                        class="control sorting_disabled dtr-hidden"
                        rowspan="1"
                        colspan="1"
                        style={style}
                        aria-label=""
                      ></th>
                      <th
                        class="sorting sorting_desc"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={style3}
                        aria-label="User: activate to sort column ascending"
                        aria-sort="descending"
                      >
                       UserName
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={style4}
                        aria-label="Role: activate to sort column ascending"
                      >
                        ScheduleType
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={style5}
                        aria-label="Plan: activate to sort column ascending"
                      >
                        categoryType
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={style4}
                        aria-label="Role: activate to sort column ascending"
                      >
                       Start Date
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={style4}
                        aria-label="Role: activate to sort column ascending"
                      >
                        End Date
                      </th>

                      
                      
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                    {schedulemaster?.map((u) => {
                      return (
                        <tr class="odd">
                          <td
                            class="  control"
                            tabindex="0"
                            style={style9}
                          ></td>
                          <td class="sorting_1">
                            <div class="d-flex justify-content-start align-items-center user-name">
                              <div class="d-flex flex-column">
                               
                                  <span class="fw-semibold">{u.user?.name}</span>
                                 
                                
                                <small class="text-muted"></small>
                              </div>
                            </div>
                          </td>
                          <td class="sorting_1">
                            <div class="d-flex justify-content-start align-items-center user-name">
                              <div class="d-flex flex-column">
                                
                                  
                                  <span class="fw-semibold">{u.Schedule?.name}</span>
                                
                                <small class="text-muted"></small>
                              </div>
                            </div>
                          </td>
                          <td class="sorting_1">
                            <div class="d-flex justify-content-start align-items-center user-name">
                              <div class="d-flex flex-column">
                                
                                  <span class="fw-semibold">{u.category?.name}</span>
                                
                                <small class="text-muted"></small>
                              </div>
                            </div>
                          </td>
                          <td class="sorting_1">
                            <div class="d-flex justify-content-start align-items-center user-name">
                              <div class="d-flex flex-column">
                                
                                  <span class="fw-semibold">{u.startdate}</span>
                                
                                <small class="text-muted"></small>
                              </div>
                            </div>
                          </td>
                          <td class="sorting_1">
                            <div class="d-flex justify-content-start align-items-center user-name">
                              <div class="d-flex flex-column">
                                
                                  <span class="fw-semibold">{u.enddate}</span>
                               
                                <small class="text-muted"></small>
                              </div>
                            </div>
                          </td>
                         
                         
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div class="row mx-2">
                  <div class="col-sm-12 col-md-6">
                    
                  </div>
                 
                </div>
              </div>
            </div>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasAddUser"
              aria-labelledby="offcanvasAddUserLabel"
            >
              <div class="offcanvas-header">
                <h5 id="offcanvasAddUserLabel" class="offcanvas-title">
                  Add Schedule
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
             
            </div>
          </div>
        </div>

        <div class="content-backdrop fade"></div>
      </div>
   
  )
}


 

