import React from "react";
import styles from "../../../../../styles/coachings/blogPost/blogPost.module.css";
import Image from "next/image";
import NorthEastIcon from "@mui/icons-material/NorthEast";
function BlogPost({blogData} ) {
 
  return (
    <a href={blogData.url}>
      <div className={styles["mainCoachingBlogDiv"]}>
        <p className={styles["coachingBlogP1"]}>{blogData.published_date}</p>

        <div className={styles["coachingBlogDiv"]}>
          <p className={styles["coachingBlogP2"]}>
            {blogData.description.slice(0, 50)}...{" "}
          </p>

          <Image
            className={styles["coachingBlogImg"]}
            width={86}
            height={53}
            src={blogData.imageUrl}
            alt={blogData.name}
          />
          <p className={styles["coachingBlogDesktopP1"]}>
            {blogData.published_date}
          </p>
        </div>

        <div className={styles["coachingBlogDesktopInfo"]} style={{ order: 3 }}>
          <div className={styles["coachingBlogDesktopHeading"]}>
            <p className={styles["desktopBlogP1"]}>{blogData.name}</p>

            <NorthEastIcon />
          </div>

          <p className={styles["desktopBlogP2"]}>
            {blogData.description.slice(0, 100)}...{" "}
          </p>
        </div>

        {/* <div className={styles["desktopBlogTag"]}>
          <p className={styles["desktopBlogTag1"]}>CSE</p>
          <p className={styles["desktopBlogTag2"]}>UPSC</p>
        </div> */}
        <div className={styles["coachingBlogDiv2"]}>
          <p className={styles["coachingBlogP3"]}>UPSC</p>
          {/* <p className={styles["coachingBlogP4"]}>10 min read</p> */}
        </div>
      </div>
    </a>
  );
}

export default BlogPost;
