const groupByBarberId = async function (rowData) {
    try {
        const result = rowData.reduce((accumulator, currentValue)  => {
        
            const element = accumulator.find(item => item['barberId'] === currentValue['barberId']);
            if (element) {
              element.ratting_details.push({ratting: currentValue.ratting, user_details: currentValue.user_details || null});
            } else {
              accumulator.push({'barberId': currentValue['barberId'],barber_details:currentValue.Barber_details ,ratting_details: [{ratting: currentValue.ratting, user_details: currentValue.user_details || null}]})
            }
            return accumulator
          },[])
          
          return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
  groupByBarberId,
}

