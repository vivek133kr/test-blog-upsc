import React, {useState, useEffect} from 'react'
import styles from "../../../../../styles/coachings/courseList/courseList.module.css"
import CoursesCarousel from '../CoachingInfo/Elements/CoachingCourses/CoursesCarousel';
import Courses from '../CoachingInfo/Elements/CoachingCourses/Courses';
import ReactPaginate from 'react-paginate'

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Courses/>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div
        style={{
          width: "90%",

          display: "grid",
          marginBottom: "100px",
          marginTop: "40px",
          gridTemplateColumns: "repeat(4,1fr)",
          gridGap: "50px",
        }}
      >
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        breakClassName={styles["break-me"]}
        containerClassName={styles["pagination"]}
        pageClassName={styles["page-item"]}
        pageLinkClassName={styles["page-link"]}
        previousClassName={styles["prev-item"]}
        previousLinkClassName={styles["prev-link"]}
        nextClassName={styles["next-item"]}
        nextLinkClassName={styles["next-link"]}
        activeClassName={styles["active"]}
      />
    </>
  );
}

function CourseList() {
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          marginTop: "60px",
        }}
      >
        <p className={styles["courseList_p1"]}>
          Courses Offered by KSG Institute
        </p>
        <p className={styles["courseList_p2"]}>
          Comprehensive list of Courses offered by the Institute
        </p>
      </div>
  
        <PaginatedItems itemsPerPage={9} />,
   
    </div>
  );
}

export default CourseList