import React, { useState } from 'react';
import './Filter.css'; 
import { Collapse } from 'react-bootstrap';

import SubFilters from './SubFilters';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to include Bootstrap CSS

const Filter = () => {
  // Define state variables for form inputs and visibility
  const [formVisible, setFormVisible] = useState(false);
  const [team, setTeam] = useState('All Team');
  const [projectType, setProjectType] = useState('All Project Type');
  const [searchForm, setSearchForm] = useState({
    team: '',
    projectType: '',
  });

  
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle handler function
    const handleToggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

  return (
    <div className="panel panel-info" id="dashboardFilterForm" style={{ display : 'block' }}>
      <div className="panel-heading">
        <div className="panel-title" align="left">Filter</div>
      </div>
      <div className="panel-body">
        <div className="col-md-12">
          <div className="row">
            
              <div className="col-md-4">
                <div className="col-md-4" style={{ paddingLeft: '6%' }}>
                  <label htmlFor="Team">Team</label>
                </div>
                <div className="col-md-8">
                  <div className="dev-drop">
                    <ul className="nav">
                      <div className="dropdown">
                        <li className="button-dropdown">
                          <a href="javascript:void(0)" className="dropdown-toggle" id="select-teamname">
                            {team} <span>▼</span>
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            
                          </ul>
                        </li>
                      </div>
                    </ul>
                    <span className="error-display" style={{ color: 'red' }}></span>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="col-md-5" style={{ paddingLeft: '6%' }}>
                  <label style={{ fontSize: '14px' }}>Type of Project</label>
                </div>
                <div className="col-md-7">
                  <div className="dev-drop">
                    <ul className="nav">
                      {/* <div className="dropdown">
                        <li className="button-dropdown">
                          <a href="javascript:void(0)" className="dropdown-toggle" id="select-rfp">
                            {projectType} <span>▼</span>
                          </a>
                          <ul className="dropdown-menu" role="menu" style={{display : 'block'}}>
                            <SubFilters />
                          </ul>
                        </li>
                      </div> */}

                      <div className="dropdown">
  <li className="button-dropdown">
    <a href="javascript:void(0)" className="dropdown-toggle" id="select-rfp" onClick={handleToggleDropdown}>
      {projectType} <span>▼</span>
    </a>
    
    <Collapse in={isDropdownOpen}>
      <ul className="dropdown-menu" role="menu">
        <SubFilters />
      </ul>
    </Collapse>
  </li>
</div>

                    </ul>
                    <span className="error-display" style={{ color: 'red' }}></span>
                  </div>
                </div>
              </div>

              <div className="col-md-3 buttonMediaBreak">
                <div className="col-md-12">
                  <input
                    id="search_project"
                    className="btn btn-success"
                    style={{ height: '40px', marginRight: '10px' }}
                    value="Search"
                    name="search_project"
                    form="searchorsaveprojectfilterform"
                    type="submit"
                  />
                  <input
                    id="save_search_filter"
                    className="btn btn-success"
                    style={{ height: '40px', }}
                    value="Save Filter"
                    name="save_search_filter"
                    form="searchorsaveprojectfilterform"
                    type="submit"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
