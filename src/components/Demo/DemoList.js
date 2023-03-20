import React, {useMemo} from "react";



function DemoList(props) {

    const {list} = props
   
    const sortedList = useMemo(() => {
        console.log('items sorted')
        return list.sort((a, b) => a - b);
    }, [list]) 

    console.log('DEMO LİST RUNNİNG')
    
   



    return (
        <div>
        <h1>{props.title}</h1>
        {sortedList.map( e => {
            
            return <div key={Math.random().toString()}> {e} </div>;
        })}

        </div>
    )


}
export default React.memo(DemoList);