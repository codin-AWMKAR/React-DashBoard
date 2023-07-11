import React from 'react'
import {AccumulationChartComponent, AccumulationDataLabel, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PyramidSeries, Inject, AccumulationLegend,AccumulationTooltip} from '@syncfusion/ej2-react-charts';
import {PyramidData} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';
const Area = () => {
  const {currentMode}= useStateContext();
  const datalabel = { visible: true, name: 'text', position: 'Outside' };
  const legendSettings = { visible: true };
  return (
    <div className=" m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Food Comparison Chart"/> 
      <AccumulationChartComponent
       id="charts"
       tooltip={{enable:true}}
       background={currentMode==='Dark'?'#33373E':'#fff' }
       
    >
      <Inject services={[PyramidSeries,AccumulationDataLabel,AccumulationLegend,AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid'  pointColorMapping='fill' dataLabel={datalabel} legendSettings={legendSettings}/>
      </AccumulationSeriesCollectionDirective>
      
    </AccumulationChartComponent>
    </div>
    
  )
}

export default Area
