import React from 'react'
import BlogData from "../../../../../data/BlogsData.json";

import styles from "../../../../../styles/coachings/recentPost/recentPost.module.css"
import BlogPost from '../BlogPost/BlogPost'
function RecentPost() {
    
  return (
    <div
      style={{
        width: "100%",
        
      }}
    >
      <p className={styles["recentPostHead"]}>Recent Posts</p>

      <div className={styles["mainSyllabusInfoDiv"]}>
        {
            BlogData.blogData.slice(0,4).map((item) =>{
                return <BlogPost  
                
                 blogData={item}
                
                />
            })
        }
      </div>
    </div>
  );
}

export default RecentPost