const groupBySaloonId = async function (rowData) {
    try {
        
        const result = rowData.reduce((accumulator,currentValue)=>{
            const check = accumulator.find(item=> item.saloonId === currentValue.saloonId);
            if(check){ 
                check.ratting_details.push({ratting:currentValue.ratting, user_details:currentValue.userId || null})
        }
        else{
            accumulator.push({ id:currentValue.saloonId, saloon_details:currentValue.saloon_details, ratting_details:[{ratting:currentValue.ratting,user_details:currentValue.userId || null}]})
        }
        return accumulator;            
        },[]);
          return result;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {groupBySaloonId};