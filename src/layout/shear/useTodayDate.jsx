import { useEffect, useState } from "react";


const useTodayDate = () => {
    const [Dates, setDates] = useState('');
    const [Month, setMonth] = useState('');
    const [Year, setYear] = useState('');
    let newDate = new Date()
    let date = newDate.getDate();
  
    useEffect(() => {
  
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
      const month = `${current.getMonth() + 1}`;
      const year = `${current.getFullYear()}`;
      // console.log(`Date is ${date}`);
      setDates(date)
      setMonth(month)
      setYear(year)
  
  },[])
    return {Dates, Month, Year};
};

export default useTodayDate;