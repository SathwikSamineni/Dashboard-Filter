import React, { useState } from 'react';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CheckboxList from '../Checkboxs/CheckBoxList';
import CheckboxListPCA from '../Checkboxs/CheckboxListPCA';
import CheckboxListEnvironmentalCleanup from '../Checkboxs/CheckboxListEnviromentalCleanup';
import CheckboxListEnvironmentalLaboratory from '../Checkboxs/CheckboxListEnvironmentalLaboratory';
import CheckboxListEnvironmentalSubsurface from '../Checkboxs/CheckboxListEnvironmentalSubsurface';
import CheckboxOptions from '../Checkboxs/CheckBoxOptions';




const FilterCategory = ({ title, component: Component, index }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const collapseId = `collapse${index}`;
    const headingId = `heading${index}`;
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <li>
        <div className="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id={headingId}>
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  href={`#${collapseId}`}
                  aria-expanded={!isCollapsed}
                  aria-controls={collapseId}
                  onClick={toggleCollapse}
                >
                  <FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus} style={{ marginRight: '8px' }} />
                  {title}
                </a>
              </h4>
            </div>
            <div
              id={collapseId}
              className={`panel-collapse collapse ${!isCollapsed ? 'show' : ''}`}
              role="tabpanel"
              aria-labelledby={headingId}
            >
              <div className="panel-body">
                <Component name="ref_type[]" className="dev-ref-types" />
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

const filterCategories = [
  {
    title: 'Environmental Site Assessments',
    component: CheckboxList,
  },
  {
    title: 'Property Condition Assessments',
    component: CheckboxListPCA,
  },
  {
    title: 'Environmental Subsurface',
    component: CheckboxListEnvironmentalSubsurface,
  },
  {
    title: 'Environmental Cleanup',
    component: CheckboxListEnvironmentalCleanup,
  },
  {
    title: 'Environmental Laboratory',
    component: CheckboxListEnvironmentalLaboratory,
  },
  {
    title: 'Real Estate Services',
    component: CheckboxOptions,
  },
];

const SubFilters = () => (
  <>
    {filterCategories.map(({ title, component }, index) => (
      <FilterCategory key={index} title={title} component={component} />
    ))}
  </>
);

export default SubFilters;
