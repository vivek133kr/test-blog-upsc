import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReportOverview from "./ReportOverview";
import axios from "axios";

const BASE_URL = "https://upsc.joshtalks.org/api/v1/quiz/report/?student_id=";
//const BASE_URL = "http://34.93.138.253/api/v1/quiz/report/?student_id="


const Selection = () => {
  const router = useRouter();
  const { studentId } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}${studentId}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [studentId]);

  return (
    <div >
      {data && (
          <ReportOverview data={data} />      
      )}
    </div>
  );
};

export default Selection;
